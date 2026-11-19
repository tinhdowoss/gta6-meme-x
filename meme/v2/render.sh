#!/bin/sh
# Render each meme/v2/*.html to a 1440x1440 PNG with headless Chromium, plus a 480x480 preview
# (the size the judge sees a square picture at). Usage: sh meme/v2/render.sh [name ...]
set -e
cd "$(dirname "$0")"
CHROME="${CHROME:-$(ls -d "$HOME"/Library/Caches/ms-playwright/chromium_headless_shell-*/chrome-headless-shell-*/chrome-headless-shell | tail -1)}"
mkdir -p render
names="$*"
[ -z "$names" ] && names=$(ls *.html | sed 's/\.html$//')
for n in $names; do
  "$CHROME" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --window-size=1440,1440 --virtual-time-budget=2000 \
    --screenshot="$PWD/render/$n.png" "file://$PWD/$n.html" >/dev/null 2>&1
  sips -z 480 480 "render/$n.png" --out "render/$n-480.png" >/dev/null
  echo "rendered $n"
done
