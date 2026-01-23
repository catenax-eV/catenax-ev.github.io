---
title: Architecture Decision Records (ADRs)
slug: /architecture/adrs/
sidebar_position: 1
---

This directory contains the Architecture Decision Records (ADRs) for Catena‑X.

- ADRs are stored as Markdown files under this folder.
- A downloadable PDF version can be provided alongside each ADR in `static/adrs/`.

How to add a PDF for an ADR

1. Install `pandoc` and a PDF engine (e.g., `wkhtmltopdf` or LaTeX).
2. Run the included script to generate PDFs from the ADR markdown files:

```bash
# from repo root
./scripts/generate-adrs-pdfs.sh
```

Generated PDFs will be placed in `static/adrs/` and will be available for download at `/adrs/<filename>.pdf`.

If you prefer to upload prebuilt PDFs, add them to `static/adrs/` with the same basename as the ADR markdown.

| ADR | Status | PDF |
|---|---|---|
| [0001 - Use a monorepo for documentation and docs tooling](./0001-record-monorepo-decision) | Accepted | <a class="button" href="/adrs/0001-record-monorepo-decision.pdf">PDF (if available)</a> |
| [0002 - ADR versioning and retention policy](./0002-record-versioning-strategy) | Proposed | <a class="button" href="/adrs/0002-record-versioning-strategy.pdf">PDF (if available)</a> |

