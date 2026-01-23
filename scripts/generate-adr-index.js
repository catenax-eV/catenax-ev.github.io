#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const ADRS_DIR = path.join(ROOT, 'docs', 'architecture', 'adrs');
const INDEX_FILE = path.join(ADRS_DIR, 'index.md');
const STATIC_ADRS = path.join(ROOT, 'static', 'adrs');

function readFiles() {
  return fs.readdirSync(ADRS_DIR)
    .filter(f => f.endsWith('.md'))
    .filter(f => !['index.md'].includes(f))
    .map(f => path.join(ADRS_DIR, f));
}

function extractMeta(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // frontmatter title
  const fm = /^---\n([\s\S]*?)\n---/m.exec(content);
  let title = null;
  let status = '';
  if (fm) {
    const body = fm[1];
    const mTitle = /title:\s*(.+)/.exec(body);
    if (mTitle) title = mTitle[1].trim();
  }
  if (!title) {
    const mH = /^#\s+(.+)$/m.exec(content);
    if (mH) title = mH[1].trim();
  }
  const mStatus = /^Status:\s*(.+)$/m.exec(content);
  if (mStatus) status = mStatus[1].trim();
  return { title: title || path.basename(filePath), status };
}

function buildTable(items) {
  const header = '| ADR | Status | PDF |\n|---|---|---|\n';
  const rows = items.map(({file, meta}) => {
    const base = path.basename(file, '.md');
    const docLink = `./${base}`;
    const pdfPath = `/adrs/${base}.pdf`;
    const download = fs.existsSync(path.join(STATIC_ADRS, `${base}.pdf`))
      ? `<a class="button" href="${pdfPath}" download>Download PDF</a>`
      : `<a class="button" href="${pdfPath}">PDF (if available)</a>`;
    return `| [${meta.title}](${docLink}) | ${meta.status || ''} | ${download} |`;
  }).join('\n');
  return header + rows + '\n';
}

function main() {
  const files = readFiles();
  const items = files.map(f => ({ file: f, meta: extractMeta(f) }));
  const table = buildTable(items);

  let index = fs.readFileSync(INDEX_FILE, 'utf8');
  const token = '<!-- ADR_TABLE -->';
  if (!index.includes(token)) {
    // append token at end
    index = index + '\n\n' + token + '\n';
  }
  const out = index.replace(token, table);
  fs.writeFileSync(INDEX_FILE, out, 'utf8');
  console.log('Wrote ADR table into', INDEX_FILE);
}

main();
