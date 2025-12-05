const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');
const glob = require('glob');

// 🔍 Suche alle CSV-Dateien rekursiv im docs-Verzeichnis
const docsDir = path.join(__dirname, '../../docs');
const csvFiles = glob.sync(`${docsDir}/**/assets/CAC.csv`);
const jsonString = {};

if (csvFiles.length === 0) {
  console.log('Keine CSV-Dateien gefunden.');
  process.exit(0);
}

csvFiles.forEach(file => {
  const csvContent = fs.readFileSync(file, 'utf8');
  const parsed = Papa.parse(csvContent, { header: true, skipEmptyLines: true });

  if (!parsed.data || parsed.data.length === 0) {
    console.warn(`⚠️ Datei enthält keine Daten: ${file}`);
    return;
  }

  console.log(parsed.data[0]);

  // JSON-String erzeugen
  // const jsonRawData = JSON.stringify(parsed.data, null, 2);

  var cxId = parsed.data[0]['Standard'];

  jsonString[cxId] = {}
  jsonString[cxId]['cxId'] = cxId;
  jsonString[cxId]['name'] = parsed.data[0]['Standard title'];
  jsonString[cxId]['version'] = parsed.data[0]['Standard Version'];
  jsonString[cxId]['release'] = parsed.data[0]['Release 25.09'];
  jsonString[cxId]['type'] = parsed.data[0]['Platform Capability'];
  jsonString[cxId]['cac'] = [];

  parsed.data.slice(0).forEach(row => {
    if(row['Standard title']){
      jsonString[cxId]['cac'].push({
        id: row['CAC - ID NR.'],
        requirement: row['Requirement (CAC)'],
        info: row['Add Info'],
        type: row['MUST/ SHOULD'],
        proof: row['Proof of Conformity'],
        assessmentBy: Object.keys(row).filter(key => row[key] === 'x').join(', '),
        priority: {}
      });
    }
  });



// Ausgabe: "Confirmation"

/*  {
    "Proof of Conformity ": "Customer and Supplier: Contract Definitions, Policies and Assets used by the EDC for the respective APIs",
    "Inspection": "",
    "Observation": "",
    "Self-Assessment": "",
    "Inquiry": "",
    "Confirmation": "x",
    "Recalculation": "",
    "Reperformance": "",
    "Analytical Procedures": "",
    "Priority for testing (Y/N)": ""
  },
*/

  const jsonPath = file.replace(/\.csv$/, '.json');
  fs.writeFileSync(jsonPath, JSON.stringify(jsonString, null, 2), 'utf8');

  // JSON-Datei schreiben
  console.log(`✅ Konvertiert: ${path.relative(docsDir, file)} → ${path.relative(docsDir, jsonPath)}`);
});


