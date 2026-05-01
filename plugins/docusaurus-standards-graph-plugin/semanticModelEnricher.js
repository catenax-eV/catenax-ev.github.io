#!/usr/bin/env node
'use strict';

/**
 * semanticModelEnricher.js
 *
 * Enriches a standards-graph-data JSON file with semantic model dependency information
 * from the eclipse-tractusx/sldt-semantic-models GitHub repository.
 *
 * Usage:
 *   node semanticModelEnricher.js <json-file> <docs-dir>
 *
 * Example (from repo root):
 *   node plugins/docusaurus-standards-graph-plugin/semanticModelEnricher.js \
 *     static/standards-graph-data.json \
 *     docs/standards
 *
 * Environment variables:
 *   GITHUB_TOKEN  – optional but recommended; raises the API rate limit from
 *                   60 to 5 000 requests per hour.
 *
 * What it does:
 *   1. Reads the target graph-data JSON file.
 *   2. Scans every standard markdown file in <docs-dir> for
 *      "urn:samm:io.catenax.<model>:<version>" patterns.
 *   3. For every unique model name fetches version list + metadata.json from
 *      eclipse-tractusx/sldt-semantic-models via the GitHub Contents API.
 *   4. Adds a `semanticModels` array to each graph node and a top-level
 *      `semanticModelIndex` map to the JSON file.
 *   5. Writes the enriched data back to the same file.
 */

const fs = require('fs');
const path = require('path');

const GITHUB_API_BASE = 'https://api.github.com';
const SLDT_OWNER = 'eclipse-tractusx';
const SLDT_REPO = 'sldt-semantic-models';
const SLDT_GITHUB_BASE = `https://github.com/${SLDT_OWNER}/${SLDT_REPO}/tree/main`;

// Matches: urn:samm:io.catenax.<model>:<major>.<minor>.<patch>
// Using a non-global version and calling it repeatedly.
const URN_REGEX_SOURCE = /urn:samm:(io\.catenax\.[a-zA-Z0-9_.]+):(\d+\.\d+\.\d+)/g;

let requestCount = 0;

// ---------------------------------------------------------------------------
// GitHub API helpers
// ---------------------------------------------------------------------------

function buildHeaders() {
  const headers = {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'catenax-standards-graph-enricher',
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Fetch a GitHub API URL with simple retry + rate-limit handling.
 * Returns the Response object on success, or null on 404.
 */
async function githubFetch(url, retries = 3) {
  const headers = buildHeaders();

  for (let attempt = 0; attempt < retries; attempt++) {
    if (requestCount > 0) await sleep(100); // be polite
    requestCount++;

    let response;
    try {
      response = await fetch(url, { headers });
    } catch (err) {
      if (attempt < retries - 1) {
        console.warn(`  Network error (attempt ${attempt + 1}/${retries}): ${err.message}`);
        await sleep(1000 * (attempt + 1));
        continue;
      }
      throw err;
    }

    if (response.status === 404) return null;

    if (response.status === 403 || response.status === 429) {
      const retryAfter = parseInt(response.headers.get('Retry-After') || '60', 10);
      console.warn(`  Rate limited. Waiting ${retryAfter}s…`);
      await sleep(retryAfter * 1000);
      attempt--; // don't count as a proper attempt
      continue;
    }

    if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);

    return response;
  }
  return null;
}

/**
 * List semver-named sub-directories for a model in sldt-semantic-models.
 * Returns a string[] of version strings, or null when the model folder is absent.
 */
async function listModelVersions(modelName) {
  const url = `${GITHUB_API_BASE}/repos/${SLDT_OWNER}/${SLDT_REPO}/contents/${encodeURIComponent(modelName)}`;
  const resp = await githubFetch(url);
  if (!resp) return null;

  const contents = await resp.json();
  return contents
    .filter(item => item.type === 'dir' && /^\d+\.\d+\.\d+$/.test(item.name))
    .map(item => item.name);
}

/**
 * Fetch the `status` string from metadata.json for one model version.
 * Returns the status string or 'unknown'.
 */
async function getVersionStatus(modelName, version) {
  const url =
    `${GITHUB_API_BASE}/repos/${SLDT_OWNER}/${SLDT_REPO}/contents/` +
    `${encodeURIComponent(modelName)}/${version}/metadata.json`;

  const resp = await githubFetch(url);
  if (!resp) return 'unknown';

  const data = await resp.json();

  // GitHub API returns text files base64-encoded in the `content` field.
  let text;
  if (data.content) {
    text = Buffer.from(data.content, 'base64').toString('utf-8').trim();
  } else if (data.download_url) {
    const raw = await githubFetch(data.download_url);
    if (!raw) return 'unknown';
    text = (await raw.text()).trim();
  } else {
    return 'unknown';
  }

  try {
    return JSON.parse(text).status || 'unknown';
  } catch {
    return 'unknown';
  }
}

// ---------------------------------------------------------------------------
// Semver helpers
// ---------------------------------------------------------------------------

function parseSemver(v) {
  return v.split('.').map(Number);
}

function compareSemver(a, b) {
  const [aMaj, aMin, aPat] = parseSemver(a);
  const [bMaj, bMin, bPat] = parseSemver(b);
  return (aMaj - bMaj) || (aMin - bMin) || (aPat - bPat);
}

// ---------------------------------------------------------------------------
// URN extraction from markdown files
// ---------------------------------------------------------------------------

/**
 * Walk <docsDir> and extract all urn:samm:io.catenax.<model>:<version> refs.
 * Returns Map<standardNumber (zero-padded string), Set<"modelName:version">>.
 */
function extractUrnsFromDocs(docsDir) {
  const result = new Map();

  if (!fs.existsSync(docsDir)) {
    console.warn(`⚠  Docs directory not found: ${docsDir}`);
    return result;
  }

  for (const entry of fs.readdirSync(docsDir)) {
    const match = entry.match(/^CX-(\d+)/);
    if (!match) continue;
    const stdNum = match[1];
    const stdPath = path.join(docsDir, entry);
    if (!fs.statSync(stdPath).isDirectory()) continue;

    const urns = new Set();
    collectUrnsFromDir(stdPath, urns);

    if (urns.size > 0) result.set(stdNum, urns);
  }

  return result;
}

function collectUrnsFromDir(dir, urns) {
  for (const file of fs.readdirSync(dir)) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      collectUrnsFromDir(filePath, urns);
    } else if (file.endsWith('.md')) {
      const content = fs.readFileSync(filePath, 'utf-8');
      // Re-create the regex each time to avoid lastIndex issues
      const re = new RegExp(URN_REGEX_SOURCE.source, 'g');
      let m;
      while ((m = re.exec(content)) !== null) {
        urns.add(`${m[1]}:${m[2]}`); // "io.catenax.batch:3.0.0"
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const [, , jsonFile, docsDir] = process.argv;

  if (!jsonFile || !docsDir) {
    console.error('Usage: node semanticModelEnricher.js <json-file> <docs-dir>');
    process.exit(1);
  }

  const jsonPath = path.resolve(jsonFile);
  const docsDirPath = path.resolve(docsDir);

  console.log(`📖  Reading: ${jsonPath}`);
  const graphData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

  console.log(`🔍  Extracting URNs from: ${docsDirPath}`);
  const urnsByStandard = extractUrnsFromDocs(docsDirPath);
  console.log(`    Found references in ${urnsByStandard.size} standards`);

  // Collect unique model names
  const allModelNames = new Set();
  for (const urns of urnsByStandard.values()) {
    for (const key of urns) allModelNames.add(key.split(':')[0]);
  }

  console.log(`\n🌐  Fetching metadata for ${allModelNames.size} models from GitHub…`);

  // Cache: modelName → { versions: Map<ver, status>, sortedVersions, latestVersion, latestStatus }
  //                  or null when not found in sldt-semantic-models
  const modelCache = new Map();

  for (const modelName of [...allModelNames].sort()) {
    process.stdout.write(`    ${modelName} … `);

    const versions = await listModelVersions(modelName);

    if (!versions || versions.length === 0) {
      console.log('not found');
      modelCache.set(modelName, null);
      continue;
    }

    const versionStatuses = new Map();
    for (const ver of versions) {
      const status = await getVersionStatus(modelName, ver);
      versionStatuses.set(ver, status);
    }

    const sortedVersions = [...versions].sort(compareSemver);
    const latestVersion = sortedVersions[sortedVersions.length - 1];
    const latestStatus = versionStatuses.get(latestVersion) || 'unknown';

    modelCache.set(modelName, { versions: versionStatuses, sortedVersions, latestVersion, latestStatus });

    const summary = sortedVersions.map(v => `${v}=${versionStatuses.get(v)}`).join(', ');
    console.log(summary);
  }

  // ---------------------------------------------------------------------------
  // Build semanticModelIndex
  // ---------------------------------------------------------------------------
  const semanticModelIndex = {};

  for (const [modelName, meta] of modelCache.entries()) {
    if (!meta) continue;

    const versions = {};
    for (const [v, s] of meta.versions.entries()) versions[v] = s;

    // Which standard nodes reference this model?
    const referencedByStandards = [];
    for (const [stdNum, urns] of urnsByStandard.entries()) {
      const refersToModel = [...urns].some(u => u.startsWith(`${modelName}:`));
      if (!refersToModel) continue;
      const node = graphData.nodes.find(n => n.number === stdNum);
      if (node && !referencedByStandards.includes(node.id)) {
        referencedByStandards.push(node.id);
      }
    }

    semanticModelIndex[modelName] = {
      latestVersion: meta.latestVersion,
      latestStatus: meta.latestStatus,
      versions,
      referencedByStandards,
    };
  }

  // ---------------------------------------------------------------------------
  // Enrich nodes
  // ---------------------------------------------------------------------------
  let enrichedCount = 0;

  for (const node of graphData.nodes) {
    const urns = urnsByStandard.get(node.number);
    if (!urns || urns.size === 0) continue;

    const semanticModels = [];

    for (const urnKey of [...urns].sort()) {
      const lastColon = urnKey.lastIndexOf(':');
      const modelName = urnKey.substring(0, lastColon);
      const referencedVersion = urnKey.substring(lastColon + 1);

      const meta = modelCache.get(modelName) || null;

      const status = meta ? (meta.versions.get(referencedVersion) || 'unknown') : 'unknown';
      const latestVersion = meta ? meta.latestVersion : null;
      const latestStatus = meta ? meta.latestStatus : null;
      const githubUrl = meta ? `${SLDT_GITHUB_BASE}/${modelName}/${referencedVersion}` : null;
      const latestGithubUrl =
        meta && latestVersion ? `${SLDT_GITHUB_BASE}/${modelName}/${latestVersion}` : null;

      semanticModels.push({
        urn: `urn:samm:${urnKey}`,
        modelName,
        referencedVersion,
        status,
        latestVersion,
        latestStatus,
        githubUrl,
        latestGithubUrl,
      });
    }

    node.semanticModels = semanticModels;
    enrichedCount++;
  }

  graphData.semanticModelIndex = semanticModelIndex;

  // ---------------------------------------------------------------------------
  // Write output
  // ---------------------------------------------------------------------------
  console.log(`\n✅  Enriched ${enrichedCount} nodes`);
  console.log(`💾  Writing: ${jsonPath}`);
  fs.writeFileSync(jsonPath, JSON.stringify(graphData, null, 2) + '\n');
  console.log(`🎉  Done! (${requestCount} GitHub API requests)`);
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
