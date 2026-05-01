# docusaurus-standards-graph-plugin

A Docusaurus plugin that powers the interactive **Standards Dependency Graph** page (`/standards-graph`).

---

## Overview

The plugin integrates the standards dependency graph into the Docusaurus build. Graph data is **pre-generated in a separate repository** and committed as static JSON files under `static/`. This plugin simply registers itself with Docusaurus so that the site configuration stays clean — no data generation happens here.

The interactive graph renders entirely in the browser via the [`StandardsGraph`](../../src/components/StandardsGraph/StandardsGraph.js) React component using [React Flow](https://reactflow.dev/). It fetches the appropriate JSON file at runtime and supports switching between all available release versions.

---

## Files

| File | Purpose |
|------|---------|
| `index.js` | Minimal Docusaurus plugin entry point — registers the plugin with the name `docusaurus-standards-graph-plugin`. |
| `standardsParser.js` | Utility library that parses Catena-X standard markdown files and builds the graph data structure. Used by the data-generation pipeline in the **upstream repository**. |
| `semanticModelEnricher.js` | Standalone Node.js script that enriches `standards-graph-data*.json` files with semantic model metadata fetched from `eclipse-tractusx/sldt-semantic-models` via `raw.githubusercontent.com`. Run once after graph data is generated (see below). |

---

## Static data files

The following JSON files must be present in the `static/` directory before the site is built. They are produced by the upstream generation pipeline and committed directly to this repository:

| File | Content |
|------|---------|
| `static/standards-graph-data.json` | Graph data for the **current / upcoming** (unreleased) version. |
| `static/standards-graph-data-{version}.json` | Graph data for each released version (e.g. `standards-graph-data-Saturn.json`). |
| `static/standard-owners.json` | Committee and expert-group ownership mapping for each standard number. |

---

## Data format

Each JSON file has the following top-level structure:

```json
{
  "nodes": [ ... ],
  "edges": [ ... ]
}
```

### Node object

```json
{
  "id": "cx0018",
  "number": "0018",
  "title": "Dataspace Connectivity",
  "category": "component",
  "tags": ["CAT/Connectivity"],
  "path": "/standards/CX-0018-DataspaceConnectivity",
  "referenceCount": 3
}
```

| Field | Description |
|-------|-------------|
| `id` | Unique node identifier — `cx` followed by the four-digit standard number. |
| `number` | Four-digit standard number (e.g. `"0018"`). |
| `title` | Human-readable title extracted from the markdown. |
| `category` | `"usecase"` (tags starting with `UC/`) or `"component"` (all others). |
| `tags` | Frontmatter tags from the standard document. |
| `path` | URL path relative to the version prefix (e.g. `/standards/CX-0018-…`). |
| `referenceCount` | Number of other standards that reference this one (drives bubble size in the graph). |
| `semanticModels` | Array of semantic model references found in the standard document (see below). May be absent if no URNs are found. |

### Semantic model entry (within `semanticModels`)

Each entry represents one unique `urn:samm:io.catenax.*` URN referenced by the standard:

```json
{
  "urn": "urn:samm:io.catenax.week_based_capacity_group:2.0.0",
  "modelName": "io.catenax.week_based_capacity_group",
  "referencedVersion": "2.0.0",
  "status": "deprecated",
  "latestVersion": "3.0.1",
  "latestStatus": "release",
  "githubUrl": "https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.week_based_capacity_group/2.0.0",
  "latestGithubUrl": "https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.week_based_capacity_group/3.0.1"
}
```

| Field | Description |
|-------|-------------|
| `urn` | Full URN as written in the standard document. |
| `modelName` | Namespace identifier matching the directory name in `eclipse-tractusx/sldt-semantic-models`. |
| `referencedVersion` | Specific version the standard pins. |
| `status` | Status of the *referenced* version from its `metadata.json` (`"release"`, `"deprecated"`, or `"unknown"`). |
| `latestVersion` | Highest semver folder in the model's directory (`null` if the model is not found in sldt-semantic-models). |
| `latestStatus` | Status of the latest version (`null` if not found). |
| `githubUrl` | Direct link to the specific version folder on GitHub (`null` if model not found). |
| `latestGithubUrl` | Direct link to the latest version folder on GitHub (`null` if model not found). |

Models absent from `eclipse-tractusx/sldt-semantic-models` (e.g. internal test models) will have `status: "unknown"` and `null` URLs.

### Top-level `semanticModelIndex`

A companion lookup map keyed by model name, useful for "which standards use this model" queries:

```json
{
  "semanticModelIndex": {
    "io.catenax.batch": {
      "latestVersion": "4.0.0",
      "latestStatus": "release",
      "versions": { "1.0.2": "deprecated", "4.0.0": "release" },
      "referencedByStandards": ["cx0151", "cx0158"]
    }
  }
}
```

The `versions` map contains only the versions that were actually fetched (referenced versions + the latest version) — not necessarily every version that exists in the repository.

### Edge object

```json
{
  "id": "cx0001-cx0018",
  "source": "cx0001",
  "target": "cx0018",
  "type": "smoothstep"
}
```

An edge from `source` to `target` means that the source standard lists the target standard in its **Normative References** section (4.1 / 5.1 / 6.1).

---

## Version switching

The `StandardsGraph` component reads the Docusaurus `docsPreferredVersion` and a `?version=` URL parameter to decide which JSON file to fetch:

| Version value | File fetched |
|---------------|-------------|
| `"current"` | `standards-graph-data.json` |
| any other string | `standards-graph-data-{version}.json` |

If the version-specific file is not found (HTTP 4xx), the component falls back to `standards-graph-data.json`.

---

## Adding a new release version

1. Generate `standards-graph-data-{NewVersion}.json` using `standardsParser.js` in the upstream repository.
2. Run `semanticModelEnricher.js` to enrich the new JSON with semantic model metadata.
3. Commit the generated file to `static/` in this repository.
4. The version will automatically appear in the graph's version selector once it is listed in `versions.json`.

---

## Refreshing semantic model data

The `semanticModelEnricher.js` script enriches all graph data files in-place. It uses a hardcoded version registry (collected from `eclipse-tractusx/sldt-semantic-models`) and fetches `metadata.json` for each referenced model version from `raw.githubusercontent.com`:

```sh
node plugins/docusaurus-standards-graph-plugin/semanticModelEnricher.js
```

The script processes all four JSON files (`standards-graph-data.json`, `standards-graph-data-Saturn.json`, `standards-graph-data-Jupiter.json`, `standards-graph-data-Io.json`) and writes the enriched data back to each file.

When new semantic model versions are released in `sldt-semantic-models`, update the `MODEL_VERSIONS` map at the top of `semanticModelEnricher.js` and re-run the script.
