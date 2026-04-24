'use strict';

/**
 * generateStandardsOutput.js
 *
 * Parses docs/standards in the repository root and writes the resulting
 * graph-data JSON to static/outputs/standards-graph-data.json.
 *
 * Usage:
 *   node .github/scripts/generateStandardsOutput.js [repoRoot]
 *
 * If repoRoot is not provided, the current working directory is used.
 */

const fs = require('fs');
const path = require('path');
const { buildGraphData } = require('./standardsParser');

const repoRoot = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.resolve(process.cwd());

const outputDir = path.join(repoRoot, 'static', 'outputs');
const outputFile = path.join(outputDir, 'standards-graph-data.json');

console.log(`Repository root : ${repoRoot}`);
console.log(`Standards source: ${path.join(repoRoot, 'docs', 'standards')}`);
console.log(`Output file     : ${outputFile}`);

const data = buildGraphData(repoRoot);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));

console.log(`Done. ${data.nodes.length} nodes, ${data.edges.length} edges written to ${outputFile}`);
