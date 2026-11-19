#!/bin/sh
# v3 renderer: each meme/v3/<name>.html becomes render/<name>.png (1440x1440, what gets posted)
# and render/<name>-480.png (the size the judge actually sees a square picture at).
# Usage: sh meme/v3/render.sh [name ...]   (no names = every .html here)
set -e
cd "$(dirname "$0")"
SHELL_BIN="${CHROME:-$(ls -d "$HOME"/Library/Caches/ms-playwright/chromium_headless_shell-*/chrome-headless-shell-*/chrome-headless-shell | tail -1)}"
mkdir -p render
targets="$*"
[ -z "$targets" ] && targets=$(ls *.html | sed 's/\.html$//')
for t in $targets; do
  "$SHELL_BIN" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --window-size=1440,1440 --virtual-time-budget=2500 \
    --screenshot="$PWD/render/$t.png" "file://$PWD/$t.html" >/dev/null 2>&1
  sips -z 480 480 "render/$t.png" --out "render/$t-480.png" >/dev/null
  echo "rendered $t -> render/$t.png + render/$t-480.png"
done
