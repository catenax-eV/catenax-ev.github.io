const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Regex pattern for CX standard references (e.g. CX-0018, CX-0001)
const CX_REF_PATTERN = /CX-(\d{4})\b/g;

/**
 * Recursively find all standard files (CX-XXXX-Name/CX-XXXX-Name.md)
 */
function findStandardFiles(dir) {
  const files = [];

  function scan(directory) {
    if (!fs.existsSync(directory)) return;

    const items = fs.readdirSync(directory);

    for (const item of items) {
      const fullPath = path.join(directory, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory() && /^CX-\d{4}-/.test(item)) {
        // Find the main markdown file in this directory (same name as directory)
        const mdFile = path.join(fullPath, `${item}.md`);
        if (fs.existsSync(mdFile)) {
          files.push(mdFile);
        }
      } else if (stat.isDirectory()) {
        scan(fullPath);
      }
    }
  }

  scan(dir);
  return files;
}

/**
 * Extract CX standard number from file path (e.g. "0018" from "CX-0018-DataspaceConnectivity")
 */
function extractStandardNumber(filePath) {
  const match = filePath.match(/CX-(\d{4})-/);
  return match ? match[1] : null;
}

/**
 * Extract the folder/slug name from the file path (e.g. "CX-0018-DataspaceConnectivity")
 */
function extractStandardSlug(filePath) {
  const match = filePath.match(/(CX-\d{4}-[^/]+)/);
  return match ? match[1] : '';
}

/**
 * Determine category from frontmatter tags.
 * Tags starting with "UC/" indicate a use-case standard.
 * Tags starting with "CAT/" indicate a component standard.
 */
function getCategory(tags) {
  if (!tags || tags.length === 0) return 'component';
  if (tags.some(t => t.startsWith('UC/'))) return 'usecase';
  return 'component';
}

/**
 * Extract the title from the first H1 heading in the markdown body.
 * Falls back to frontmatter title, then a cleaned-up version of the slug.
 */
function extractTitleFromMarkdown(markdown, frontmatterTitle, slug) {
  if (frontmatterTitle) return frontmatterTitle.trim();

  const h1Match = markdown.match(/^#\s+(.+)$/m);
  if (h1Match) {
    return h1Match[1]
      .replace(/^CX-\d+\s*/i, '')
      .replace(/^[-–]\s*/, '')
      .replace(/\s+v[\d.]+$/i, '')
      .trim();
  }

  // Fallback: derive from slug
  return slug
    .replace(/^CX-\d{4}-/, '')
    .replace(/([A-Z])/g, ' $1')
    .trim();
}

/**
 * Parse a single standard file.
 */
function parseStandardFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter, content: markdown } = matter(content);

  const number = extractStandardNumber(filePath);
  if (!number) return null;

  const slug = extractStandardSlug(filePath);
  const title = extractTitleFromMarkdown(markdown, frontmatter.title, slug);

  // Extract all CX-XXXX references from the markdown body
  const references = new Set();
  CX_REF_PATTERN.lastIndex = 0;
  let match;
  while ((match = CX_REF_PATTERN.exec(markdown)) !== null) {
    const refNumber = match[1];
    if (refNumber !== number) {
      references.add(refNumber);
    }
  }

  const category = getCategory(frontmatter.tags);

  return {
    id: `cx${number}`,
    number,
    title,
    category,
    tags: frontmatter.tags || [],
    references: Array.from(references),
    path: `/standards/${slug}/${slug}`,
  };
}

/**
 * Parse all standard files from a directory into a Map keyed by standard id.
 */
function parseStandardsFromDir(dir) {
  const standardMap = new Map();
  for (const filePath of findStandardFiles(dir)) {
    const standard = parseStandardFile(filePath);
    if (standard) {
      standardMap.set(standard.id, standard);
    }
  }
  return standardMap;
}

/**
 * Build edges from a reference map and return edges + incoming reference counts.
 */
function buildEdges(referenceCountMap, nodeIds) {
  const edges = [];
  const incomingReferences = new Map();

  for (const [sourceId, targetNumbers] of referenceCountMap.entries()) {
    for (const targetNumber of targetNumbers) {
      const targetId = `cx${targetNumber}`;
      if (nodeIds.has(targetId)) {
        edges.push({
          id: `${sourceId}-${targetId}`,
          source: sourceId,
          target: targetId,
          type: 'smoothstep',
        });
        incomingReferences.set(targetId, (incomingReferences.get(targetId) || 0) + 1);
      }
    }
  }

  return { edges, incomingReferences };
}

/**
 * Build graph data structure from standard files in the given directory.
 */
function buildGraphData(docsDir) {
  const standardsDir = path.join(docsDir, 'standards');
  const standardMap = parseStandardsFromDir(standardsDir);

  const referenceCountMap = new Map();
  const nodes = [];

  for (const standard of standardMap.values()) {
    nodes.push({
      id: standard.id,
      number: standard.number,
      title: standard.title,
      category: standard.category,
      tags: standard.tags,
      path: standard.path,
      referenceCount: 0,
    });
    referenceCountMap.set(standard.id, standard.references);
  }

  const nodeIds = new Set(nodes.map(n => n.id));
  const { edges, incomingReferences } = buildEdges(referenceCountMap, nodeIds);

  for (const node of nodes) {
    node.referenceCount = incomingReferences.get(node.id) || 0;
  }

  return { nodes, edges };
}

/**
 * Get all available versions from versions.json
 */
function getVersions(siteDir) {
  const versionsPath = path.join(siteDir, 'versions.json');
  if (fs.existsSync(versionsPath)) {
    return JSON.parse(fs.readFileSync(versionsPath, 'utf8'));
  }
  return [];
}

module.exports = { buildGraphData, getVersions };
