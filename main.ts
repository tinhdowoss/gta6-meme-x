// gta6-meme-x-01 entry: "LEONIDA NEWS 6", where make.fun's ghost anchors the news because all of Leonida
// called in sick for GTA 6. The meme itself is the X post named in POST.json; this program only hands that
// address to the grader by copying POST.json from the repository to the output directory.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// No network, no clock: two runs write the same bytes.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_FILE = join(BOT_DIR, 'POST.json');
const X_POST = /^https:\/\/(www\.|mobile\.)?(x|twitter)\.com\/[A-Za-z0-9_]+\/status\/\d+$/;

// Warn (never fail) when the address does not look like an X post, so a placeholder is caught early.
try {
  const { url } = JSON.parse(readFileSync(POST_FILE, 'utf8')) as { url?: string };
  if (typeof url !== 'string' || !X_POST.test(url)) {
    console.error(`POST.json url does not look like an X post address: ${String(url)}`);
  }
} catch (err) {
  console.error(`POST.json could not be read as JSON: ${(err as Error).message}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(POST_FILE, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
