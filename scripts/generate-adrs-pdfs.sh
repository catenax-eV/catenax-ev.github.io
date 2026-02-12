#!/usr/bin/env bash
set -euo pipefail

# Generates PDFs for ADR markdown files into static/adrs/
# Requires: pandoc and a PDF engine (e.g. wkhtmltopdf or a TeX distribution)

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
ADRS_MD_DIR="$ROOT_DIR/docs/architecture/adrs"
OUT_DIR="$ROOT_DIR/static/adrs"

mkdir -p "$OUT_DIR"

echo "Generating ADR PDFs from $ADRS_MD_DIR to $OUT_DIR"

if ! command -v pandoc >/dev/null 2>&1; then
  cat >&2 <<'EOF'
Error: pandoc is not installed or not on PATH.

On macOS you can install it with Homebrew:
  brew install pandoc

If you need a PDF engine (recommended) also install a TeX distribution or wkhtmltopdf:
  brew install --cask basictex
  sudo tlmgr update --self
  sudo tlmgr install collection-fontsrecommended

Or install wkhtmltopdf instead of TeX:
  brew install wkhtmltopdf

Then re-run this script.
EOF
  exit 127
fi

for f in "$ADRS_MD_DIR"/*.md; do
  [ -e "$f" ] || continue
  base=$(basename "$f" .md)
  out="$OUT_DIR/${base}.pdf"
  echo "-> $base -> $out"
  # Prefer xelatex if available; pandoc will error if no PDF engine is available.
  pandoc "$f" -o "$out" --pdf-engine=xelatex || pandoc "$f" -o "$out"
done

echo "Done. PDFs are in $OUT_DIR"
