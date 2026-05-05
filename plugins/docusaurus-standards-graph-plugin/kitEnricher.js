#!/usr/bin/env node
'use strict';

/**
 * KIT Enricher — populates kitIndex into the standards-graph-data JSON files.
 *
 * For each KIT in eclipse-tractusx/eclipse-tractusx.github.io (docs-kits/kits/),
 * this script fetches all .md / .mdx files (excluding asset/image directories),
 * scans for CX-XXXX references with a regex, and writes:
 *
 *   graphData.kitIndex     – map of kitSlug → { displayName, url, referencedStandards[] }
 *   node.referencedByKits  – array of kitSlugs that reference this standard
 *
 * Usage:
 *   node kitEnricher.js [<repo-root>]
 *
 * Set GITHUB_TOKEN env-var to avoid GitHub API rate-limiting.
 */

const fs   = require('fs');
const path = require('path');

const TRACTUSX_OWNER = 'eclipse-tractusx';
const TRACTUSX_REPO  = 'eclipse-tractusx.github.io';
const KITS_PATH      = 'docs-kits/kits';
const RAW_BASE       = `https://raw.githubusercontent.com/${TRACTUSX_OWNER}/${TRACTUSX_REPO}/main`;
const API_BASE       = `https://api.github.com/repos/${TRACTUSX_OWNER}/${TRACTUSX_REPO}`;
const KIT_SITE_BASE  = 'https://eclipse-tractusx.github.io/docs-kits/category';

// Subdirectories that contain only images / non-text assets
const SKIP_DIRS = new Set(['assets', 'images', 'img', 'openapi', 'diagrams', 'static']);

// Regex to detect a CX standard reference — matches e.g. "CX-0018" or "CX-0152"
const CX_REGEX = /\bCX-(\d{4})\b/g;

// ── Helpers ────────────────────────────────────────────────────────────────

function slugToDisplayName(slug) {
  return slug.split('-').map((word, idx, arr) => {
    if (word === 'kit' && idx === arr.length - 1) return 'KIT';
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

function authHeaders() {
  return process.env.GITHUB_TOKEN
    ? { Authorization: `token ${process.env.GITHUB_TOKEN}` }
    : {};
}

async function ghGet(url) {
  const resp = await fetch(url, { headers: authHeaders() });
  if (!resp.ok) {
    const body = await resp.text();
    throw new Error(`GitHub API ${resp.status} for ${url}: ${body.slice(0, 200)}`);
  }
  return resp.json();
}

async function fetchRaw(url) {
  const resp = await fetch(url, { headers: authHeaders() });
  if (!resp.ok) return null;
  return resp.text();
}

// ── Core logic ─────────────────────────────────────────────────────────────

/**
 * Fetch all KIT folder names from the GitHub contents API.
 * Returns an array of { name: slug, sha }.
 */
async function listKitDirs() {
  const items = await ghGet(`${API_BASE}/contents/${KITS_PATH}`);
  return items.filter(i => i.type === 'dir');
}

/**
 * Given the SHA of a KIT directory, retrieve the recursive file tree and
 * return the paths of all .md / .mdx files that are not inside a SKIP_DIRS
 * directory.
 */
async function listDocFilesInTree(treeSha) {
  const tree = await ghGet(`${API_BASE}/git/trees/${treeSha}?recursive=1`);
  if (!tree.tree) return [];

  return tree.tree
    .filter(entry => {
      if (entry.type !== 'blob') return false;
      if (!entry.path.endsWith('.md') && !entry.path.endsWith('.mdx')) return false;
      const segments = entry.path.split('/');
      // Skip the file itself if any parent segment is a skip-dir
      return !segments.slice(0, -1).some(seg => SKIP_DIRS.has(seg));
    })
    .map(entry => entry.path);
}

/**
 * Fetch every doc file in the KIT and extract CX-XXXX references.
 * Returns a Set of four-digit number strings, e.g. { "0018", "0152" }.
 */
async function extractCxRefsFromKit(kitSlug, docPaths) {
  const cxNums = new Set();

  await Promise.all(docPaths.map(async (relPath) => {
    const url = `${RAW_BASE}/${KITS_PATH}/${kitSlug}/${relPath}`;
    const text = await fetchRaw(url);
    if (!text) return;

    const re = new RegExp(CX_REGEX.source, 'g');
    let m;
    while ((m = re.exec(text)) !== null) {
      cxNums.add(m[1]);
    }
  }));

  return cxNums;
}

/**
 * Fetch KIT cross-references for all KITs.
 * Returns an object:
 *   { [slug]: { displayName, url, referencedStandards: ["cx0018", ...] } }
 */
async function fetchAllKitRefs() {
  const kitDirs = await listKitDirs();
  console.log(`Found ${kitDirs.length} KIT directories`);

  const kitRefs = {};

  for (const { name: slug, sha } of kitDirs) {
    process.stdout.write(`  Processing ${slug}... `);
    try {
      const docPaths = await listDocFilesInTree(sha);
      const cxNums   = await extractCxRefsFromKit(slug, docPaths);

      kitRefs[slug] = {
        displayName       : slugToDisplayName(slug),
        url               : `${KIT_SITE_BASE}/${slug}`,
        referencedStandards: [...cxNums].sort().map(n => `cx${n}`),
      };
      console.log(`${cxNums.size} CX refs in ${docPaths.length} files`);
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
    }
  }

  return kitRefs;
}

// ── JSON enrichment ────────────────────────────────────────────────────────

/**
 * Writes kitIndex + referencedByKits onto one graph-data JSON file.
 * Only includes KITs that reference at least one standard present in this file.
 */
function enrichFile(jsonPath, allKitRefs) {
  if (!fs.existsSync(jsonPath)) {
    console.log(`  Skipping (not found): ${jsonPath}`);
    return;
  }

  const graphData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  const nodeIds   = new Set(graphData.nodes.map(n => n.id));

  // Filter kitIndex to standards that exist in this version
  const kitIndex = {};
  for (const [slug, data] of Object.entries(allKitRefs)) {
    const validIds = data.referencedStandards.filter(id => nodeIds.has(id));
    if (validIds.length > 0) {
      kitIndex[slug] = { ...data, referencedStandards: validIds };
    }
  }

  // Enrich each standard node
  for (const node of graphData.nodes) {
    const kits = Object.entries(kitIndex)
      .filter(([, d]) => d.referencedStandards.includes(node.id))
      .map(([slug]) => slug);

    if (kits.length > 0) {
      node.referencedByKits = kits;
    } else {
      delete node.referencedByKits;
    }
  }

  graphData.kitIndex = kitIndex;

  fs.writeFileSync(jsonPath, JSON.stringify(graphData, null, 2) + '\n');
  console.log(
    `  ${path.basename(jsonPath)}: ${Object.keys(kitIndex).length} KITs, ` +
    `${graphData.nodes.filter(n => n.referencedByKits).length} standards enriched ✓`
  );
}

// ── Entry point ────────────────────────────────────────────────────────────

async function main() {
  const ROOT = process.argv[2] || path.resolve(__dirname, '../..');

  const files = [
    { json: path.join(ROOT, 'static/standards-graph-data.json') },
    { json: path.join(ROOT, 'static/standards-graph-data-Saturn.json') },
    { json: path.join(ROOT, 'static/standards-graph-data-Jupiter.json') },
    { json: path.join(ROOT, 'static/standards-graph-data-Io.json') },
  ];

  console.log('Fetching KIT cross-references from eclipse-tractusx/eclipse-tractusx.github.io …');
  const kitRefs = await fetchAllKitRefs();
  console.log(`\nFetched refs for ${Object.keys(kitRefs).length} KITs\n`);

  console.log('Enriching graph-data files …');
  for (const { json } of files) {
    enrichFile(json, kitRefs);
  }

  console.log('\n✅ Kit enrichment complete');
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
