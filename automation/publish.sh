#!/usr/bin/env bash
# Builds the site and copies it into docs/ (GitHub Pages serves main:/docs).
set -euo pipefail
cd "$(dirname "$0")/.."
[ -d node_modules ] || pnpm install --frozen-lockfile
NODE_ENV=production pnpm exec vite build
rm -rf docs/assets
mkdir -p docs
cp -r dist/public/* docs/
grep -q 'src="/latest-ai-news/assets/' docs/index.html || { echo "base path check failed" >&2; exit 1; }
echo "docs/ updated"
