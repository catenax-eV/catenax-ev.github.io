const path = require('path');
const fs = require('fs');
const { buildGraphData, getVersions } = require('./standardsParser');

module.exports = function (context) {
  return {
    name: 'docusaurus-standards-graph-plugin',

    async postBuild({ siteDir, outDir }) {
      console.log('Building Standards graph data...');

      // Build for current/upcoming version
      const docsDir = path.join(siteDir, 'docs');
      const currentData = buildGraphData(docsDir);
      fs.writeFileSync(
        path.join(outDir, 'standards-graph-data.json'),
        JSON.stringify(currentData, null, 2)
      );
      console.log(`  Upcoming: ${currentData.nodes.length} nodes, ${currentData.edges.length} edges`);

      // Build for each versioned docs snapshot
      const versions = getVersions(siteDir);
      for (const version of versions) {
        const versionedDocsDir = path.join(siteDir, 'versioned_docs', `version-${version}`);
        if (fs.existsSync(versionedDocsDir)) {
          const versionData = buildGraphData(versionedDocsDir);
          fs.writeFileSync(
            path.join(outDir, `standards-graph-data-${version}.json`),
            JSON.stringify(versionData, null, 2)
          );
          console.log(`  ${version}: ${versionData.nodes.length} nodes, ${versionData.edges.length} edges`);
        }
      }
    },

    async loadContent() {
      const siteDir = context.siteDir;
      const staticDir = path.join(siteDir, 'static');

      if (!fs.existsSync(staticDir)) {
        fs.mkdirSync(staticDir, { recursive: true });
      }

      // Build for current/upcoming version
      const docsDir = path.join(siteDir, 'docs');
      const currentData = buildGraphData(docsDir);
      fs.writeFileSync(
        path.join(staticDir, 'standards-graph-data.json'),
        JSON.stringify(currentData, null, 2)
      );

      // Build for each versioned docs snapshot
      const versions = getVersions(siteDir);
      for (const version of versions) {
        const versionedDocsDir = path.join(siteDir, 'versioned_docs', `version-${version}`);
        if (fs.existsSync(versionedDocsDir)) {
          const versionData = buildGraphData(versionedDocsDir);
          fs.writeFileSync(
            path.join(staticDir, `standards-graph-data-${version}.json`),
            JSON.stringify(versionData, null, 2)
          );
        }
      }

      return { graphData: currentData };
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData(content);
    },
  };
};
