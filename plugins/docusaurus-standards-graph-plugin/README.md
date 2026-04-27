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
2. Commit the generated file to `static/` in this repository.
3. The version will automatically appear in the graph's version selector once it is listed in `versions.json`.
