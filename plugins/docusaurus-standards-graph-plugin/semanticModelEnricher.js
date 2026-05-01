#!/usr/bin/env node
'use strict';

/**
 * Self-contained semantic model enricher using raw.githubusercontent.com
 * Uses pre-collected version directory data + live metadata.json fetching
 */

const fs = require('fs');
const path = require('path');

// Pre-collected version data from github.com/eclipse-tractusx/sldt-semantic-models
// Collected 2026-05-01 via GitHub MCP tool
const MODEL_VERSIONS = {
  "io.catenax.asset_tracker_links": ["1.0.0","2.0.0"],
  "io.catenax.batch": ["1.0.2","2.0.0","2.0.1","3.0.0","3.0.1","4.0.0"],
  "io.catenax.battery.battery_pass": ["3.0.0","3.0.1","4.0.0","5.0.0","6.0.0","6.1.0"],
  "io.catenax.binary_exchange": ["1.0.0"],
  "io.catenax.business_partner_certificate": ["1.0.0","2.0.0","3.0.0","3.1.0"],
  "io.catenax.certificate_of_analysis": ["1.0.0"],
  "io.catenax.days_of_supply": ["1.0.0","2.0.0"],
  "io.catenax.delivery_information": ["1.0.0","2.0.0"],
  "io.catenax.demand_and_capacity_notification": ["1.0.0","2.0.0","3.0.0"],
  "io.catenax.early_warning_notification": ["1.0.0"],
  // io.catenax.example: NOT FOUND in repo
  "io.catenax.failure_pattern": ["1.0.0"],
  "io.catenax.fleet.claim_data": ["1.0.0","2.0.0","3.0.0"],
  "io.catenax.fleet.diagnostic_data": ["1.0.0","2.0.0","3.0.0"],
  "io.catenax.fleet.vehicles": ["1.0.0","2.0.0","2.1.0","3.0.0","4.0.0"],
  "io.catenax.generic.digital_product_passport": ["2.0.0","3.0.0","4.0.0","5.0.0","6.0.0","6.1.0","7.0.0"],
  "io.catenax.id_based_comment": ["1.0.0","1.1.0"],
  "io.catenax.id_based_request_for_update": ["1.0.0","2.0.0","3.0.0"],
  "io.catenax.iot_sensor_data": ["1.0.0","2.0.0"],
  "io.catenax.iot_sensor_device_definition": ["1.0.0","2.0.0"],
  "io.catenax.item_stock": ["1.0.0","2.0.0"],
  "io.catenax.just_in_sequence_part": ["1.0.0","2.0.0","3.0.0","4.0.0"],
  "io.catenax.manufactured_parts_quality_information": ["1.0.0","2.0.0","2.1.0","3.0.0"],
  "io.catenax.manufacturing_capability": ["1.0.0","2.0.0","3.0.0","3.1.0"],
  "io.catenax.market_place_offer": ["1.2.0","1.4.0","2.0.0"],
  // io.catenax.masterdatamanagement: NOT FOUND in repo
  "io.catenax.material_demand": ["1.0.0"],
  "io.catenax.material_flow_scenario_request": ["1.0.0","2.0.0"],
  // io.catenax.material_for_recycling: has RELEASE_NOTES only, no versioned dirs
  "io.catenax.material_recycling_certificate": ["1.0.0"],
  "io.catenax.packing_list": ["1.0.0"],
  "io.catenax.part_type_information": ["1.0.0","2.0.0"],
  "io.catenax.parts_analyses": ["2.0.0","3.0.0","4.0.0"],
  "io.catenax.pcf": ["2.0.0","3.0.0","4.0.0","4.0.1","5.0.0","6.0.0","7.0.0","8.0.0","9.0.0"],
  "io.catenax.planned_production_output": ["1.0.0","2.0.0"],
  "io.catenax.quality_task": ["1.0.0","2.0.0","3.0.0"],
  "io.catenax.quality_task_attachment": ["1.0.0","2.0.0","3.0.0"],
  "io.catenax.refurbishing_certificate": ["1.0.0","2.0.0","3.0.0"],
  "io.catenax.remanufacturing_certificate": ["1.0.0","2.0.0","3.0.0"],
  "io.catenax.repair_certificate": ["1.0.0"],
  "io.catenax.report_8d": ["1.0.0"],
  "io.catenax.request_for_quotation": ["1.0.0","2.0.0","3.0.0"],
  "io.catenax.requirement": ["1.0.0"],
  "io.catenax.return_request": ["1.1.1","1.1.2","2.0.0"],
  "io.catenax.reuse_certificate": ["1.0.0","2.0.0","3.0.0"],
  "io.catenax.sbom": ["1.0.0"],
  "io.catenax.secondary_material_content": ["1.0.0"],
  "io.catenax.serial_part": ["1.0.1","2.0.0","3.0.0","3.0.1","4.0.0"],
  "io.catenax.shared.bill_of_process": ["1.0.0","1.1.0"],
  "io.catenax.shared.business_partner_number": ["1.0.0","2.0.0"],
  "io.catenax.shared.message_header": ["1.0.0","2.0.0","3.0.0"],
  "io.catenax.shared.part_classification": ["1.0.0"],
  "io.catenax.shared.part_site_information_as_built": ["1.0.0","2.0.0"],
  "io.catenax.shared.quality_core": ["1.0.0"],
  "io.catenax.shared.quantity": ["1.0.0","2.0.0","3.0.0"],
  "io.catenax.shared.shopfloor_information_types": ["1.0.0","2.0.0"],
  "io.catenax.shared.uuid": ["1.0.0","2.0.0"],
  "io.catenax.shopfloor_information.get_production_forecast": ["1.0.0","2.0.0"],
  "io.catenax.shopfloor_information.get_production_tracking": ["1.0.0"],
  "io.catenax.shopfloor_information.provide_production_forecast": ["1.0.0","2.0.0"],
  "io.catenax.shopfloor_information.provide_production_tracking": ["1.0.0"],
  "io.catenax.short_term_material_demand": ["1.0.0"],
  "io.catenax.single_level_bom_as_built": ["1.0.0","2.0.0","3.0.0","4.0.0"],
  "io.catenax.single_level_bom_as_planned": ["2.0.0","3.0.0","4.0.0"],
  "io.catenax.single_level_bom_as_specified": ["1.0.0","2.0.0","2.0.1"],
  "io.catenax.single_level_scene_node": ["1.0.0"],
  "io.catenax.single_level_usage_as_built": ["2.0.0","3.0.0","4.0.0"],
  "io.catenax.single_level_usage_as_planned": ["1.1.0","2.0.0","3.0.0"],
  // io.catenax.special_characteristics: NOT FOUND in repo
  "io.catenax.traction_battery_code": ["1.0.0","2.0.0"],
  "io.catenax.transmission.transmission_pass": ["1.0.0","2.0.0","3.0.0","3.1.0"],
  "io.catenax.us_tariff_information": ["1.0.0","2.0.0"],
  "io.catenax.vehicle.product_description": ["1.0.0","2.0.0","3.0.0"],
  "io.catenax.warranty_claim_request": ["1.0.0"],
  "io.catenax.warranty_claim_request_verification": ["1.0.0"],
  "io.catenax.waste_certificate": ["1.0.0"],
  "io.catenax.week_based_capacity_group": ["1.0.1","2.0.0","3.0.0","3.0.1"],
  "io.catenax.week_based_material_demand": ["1.0.0","1.0.1","2.0.0","3.0.0","3.0.1"],
  // io.catenax.zero_km_failure: NOT FOUND in repo
};

const RAW_BASE = 'https://raw.githubusercontent.com/eclipse-tractusx/sldt-semantic-models/main';
const GITHUB_TREE_BASE = 'https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main';

// Status metadata cache to avoid re-fetching
const statusCache = new Map();

async function fetchStatus(modelName, version) {
  const key = `${modelName}:${version}`;
  if (statusCache.has(key)) return statusCache.get(key);

  const url = `${RAW_BASE}/${modelName}/${version}/metadata.json`;
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      statusCache.set(key, 'unknown');
      return 'unknown';
    }
    const text = await resp.text();
    const meta = JSON.parse(text.trim());
    const status = meta.status || 'unknown';
    statusCache.set(key, status);
    return status;
  } catch {
    statusCache.set(key, 'unknown');
    return 'unknown';
  }
}

function compareSemver(a, b) {
  const [aMaj, aMin, aPat] = a.split('.').map(Number);
  const [bMaj, bMin, bPat] = b.split('.').map(Number);
  return (aMaj - bMaj) || (aMin - bMin) || (aPat - bPat);
}

// Extract URN references from docs directory
const URN_REGEX = /urn:samm:(io\.catenax\.[a-zA-Z0-9_.]+):(\d+\.\d+\.\d+)/g;

function collectUrnsFromDir(dir, urns) {
  for (const file of fs.readdirSync(dir)) {
    const fp = path.join(dir, file);
    if (fs.statSync(fp).isDirectory()) collectUrnsFromDir(fp, urns);
    else if (file.endsWith('.md')) {
      const content = fs.readFileSync(fp, 'utf-8');
      const re = new RegExp(URN_REGEX.source, 'g');
      let m;
      while ((m = re.exec(content)) !== null) urns.add(`${m[1]}:${m[2]}`);
    }
  }
}

function extractUrns(docsDir) {
  const result = new Map();
  if (!fs.existsSync(docsDir)) return result;
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

async function enrichFile(jsonPath, docsDir) {
  console.log(`\n📖 ${path.basename(jsonPath)}`);
  const graphData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  const urnsByStandard = extractUrns(docsDir);
  console.log(`   Found URN references in ${urnsByStandard.size} standards`);

  // Collect all (model, version) pairs we need to fetch status for
  const neededPairs = new Set();
  for (const urns of urnsByStandard.values()) {
    for (const urnKey of urns) {
      const lastColon = urnKey.lastIndexOf(':');
      const modelName = urnKey.substring(0, lastColon);
      const version = urnKey.substring(lastColon + 1);
      neededPairs.add(`${modelName}:${version}`);
      // Also add the latest version of this model
      if (MODEL_VERSIONS[modelName]) {
        const sortedVers = [...MODEL_VERSIONS[modelName]].sort(compareSemver);
        const latest = sortedVers[sortedVers.length - 1];
        neededPairs.add(`${modelName}:${latest}`);
      }
    }
  }

  // Fetch all needed statuses in parallel
  process.stdout.write(`   Fetching ${neededPairs.size} metadata.json files... `);
  await Promise.all([...neededPairs].map(pair => {
    const [model, ver] = pair.split(':');
    return fetchStatus(model, ver);
  }));
  console.log('done');

  // Build semanticModelIndex
  const semanticModelIndex = {};
  for (const [modelName, versions] of Object.entries(MODEL_VERSIONS)) {
    const sortedVers = [...versions].sort(compareSemver);
    const latestVersion = sortedVers[sortedVers.length - 1];
    const versionStatuses = {};
    for (const v of sortedVers) {
      const s = statusCache.get(`${modelName}:${v}`);
      if (s) versionStatuses[v] = s;
    }
    const latestStatus = statusCache.get(`${modelName}:${latestVersion}`) || 'unknown';

    // Find which standards reference this model
    const referencedByStandards = [];
    for (const [stdNum, urns] of urnsByStandard.entries()) {
      const refersToModel = [...urns].some(u => u.startsWith(`${modelName}:`));
      if (!refersToModel) continue;
      const node = graphData.nodes.find(n => n.number === stdNum);
      if (node && !referencedByStandards.includes(node.id)) referencedByStandards.push(node.id);
    }

    if (referencedByStandards.length > 0) {
      semanticModelIndex[modelName] = { latestVersion, latestStatus, versions: versionStatuses, referencedByStandards };
    }
  }

  // Enrich nodes
  let enriched = 0;
  for (const node of graphData.nodes) {
    const urns = urnsByStandard.get(node.number);
    if (!urns || urns.size === 0) continue;

    const semanticModels = [];
    for (const urnKey of [...urns].sort()) {
      const lastColon = urnKey.lastIndexOf(':');
      const modelName = urnKey.substring(0, lastColon);
      const referencedVersion = urnKey.substring(lastColon + 1);
      const versions = MODEL_VERSIONS[modelName] || null;
      const status = statusCache.get(`${modelName}:${referencedVersion}`) || 'unknown';
      let latestVersion = null, latestStatus = null, githubUrl = null, latestGithubUrl = null;
      if (versions) {
        const sortedVers = [...versions].sort(compareSemver);
        latestVersion = sortedVers[sortedVers.length - 1];
        latestStatus = statusCache.get(`${modelName}:${latestVersion}`) || 'unknown';
        githubUrl = `${GITHUB_TREE_BASE}/${modelName}/${referencedVersion}`;
        latestGithubUrl = `${GITHUB_TREE_BASE}/${modelName}/${latestVersion}`;
      }
      semanticModels.push({ urn: `urn:samm:${urnKey}`, modelName, referencedVersion, status, latestVersion, latestStatus, githubUrl, latestGithubUrl });
    }
    node.semanticModels = semanticModels;
    enriched++;
  }
  graphData.semanticModelIndex = semanticModelIndex;

  fs.writeFileSync(jsonPath, JSON.stringify(graphData, null, 2) + '\n');
  console.log(`   Enriched ${enriched} nodes ✓`);
}

async function main() {
  const ROOT = process.argv[2] || '/home/runner/work/catenax-ev.github.io/catenax-ev.github.io';
  const files = [
    { json: path.join(ROOT, 'static/standards-graph-data.json'), docs: path.join(ROOT, 'docs/standards') },
    { json: path.join(ROOT, 'static/standards-graph-data-Saturn.json'), docs: path.join(ROOT, 'versioned_docs/version-Saturn/standards') },
    { json: path.join(ROOT, 'static/standards-graph-data-Jupiter.json'), docs: path.join(ROOT, 'versioned_docs/version-Jupiter/standards') },
    { json: path.join(ROOT, 'static/standards-graph-data-Io.json'), docs: path.join(ROOT, 'versioned_docs/version-Io/standards') },
  ];

  for (const { json, docs } of files) {
    await enrichFile(json, docs);
  }
  console.log(`\n✅ All done! (${statusCache.size} unique statuses fetched)`);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
