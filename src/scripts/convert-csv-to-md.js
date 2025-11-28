const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');
const glob = require('glob');

// 🔍 Suche alle CSV-Dateien rekursiv im docs-Verzeichnis
const docsDir = path.join(__dirname, '../../docs');
const csvFiles = glob.sync(`${docsDir}/**/*.csv`);

if (csvFiles.length === 0) {
  console.log('Keine CSV-Dateien gefunden.');
  process.exit(0);
}

csvFiles.forEach(file => {
  const csvContent = fs.readFileSync(file, 'utf8');
  const parsed = Papa.parse(csvContent, { header: true });

  if (!parsed.data || parsed.data.length === 0) {
    console.warn(`⚠️ Datei enthält keine Daten: ${file}`);
    return;
  }

  const headers = Object.keys(parsed.data[0]);
  const markdown = [
    `| ${headers.join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
    ...parsed.data.map(row =>
      `| ${headers.map(h => (row[h] || '').replace(/\|/g, '\\|').replace(/\n/g, ' ')).join(' | ')} |`
    )
  ].join('\n');

  const mdPath = file.replace(/\.csv$/, '.md');
  fs.writeFileSync(mdPath, markdown);
  console.log(`✅ Konvertiert: ${path.relative(docsDir, file)} → ${path.relative(docsDir, mdPath)}`);
});
