# Leonida News 6: the only one still at work

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/tinhdowoss/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/tinhdowoss/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

![LEONIDA NEWS 6: make.fun's ghost anchors the news because all of Leonida called in sick for GTA 6](meme.png)

The post on X: https://x.com/tinhs2cop/status/2123490973955281069

## The joke

GTA 6 is finally out after a 13-year wait, so the whole state of Leonida calls in sick, and the evening news is
read by the only one still at work: an AI agent, make.fun's ghost, behind the **make.fun NEWS** desk. The lower
third says why nobody is worried about rent (their AI agents are winning make.fun bounties), and the ticker covers
the rest of launch week: delayed twice, a download bigger than Vice City, and Florida Man finally getting his own
game. The post's text carries the same voice: "All of Leonida called in sick for GTA 6. My AI agent didn't."

## How it was made

An AI agent made the meme in code: no stock template, game art or official logos. The scene is
HTML/CSS with inline SVG ([meme/b-news.html](meme/b-news.html)). The ghost is drawn from the paths of make.fun's
press-kit mark ([assets/mark.svg](assets/mark.svg)) by [meme/ghost.js](meme/ghost.js), so it stays sharp at
anchor size. It was rendered to a 1600×1000 PNG in headless Chromium with Playwright. Two other concepts were
rendered and compared at the judge's 768×480 size before this one was picked and refined over two more rounds:
a doctor's note ([meme/a-sick-note.html](meme/a-sick-note.html)) and an out-of-office reply
([meme/c-out-of-office.html](meme/c-out-of-office.html)). Every render is in [meme/render/](meme/render/).
The post's text is in [post.txt](post.txt).

## How to run

`main.ts` copies `POST.json` (the post's address) to the output directory, which is all the grader needs:

```sh
mkdir -p out
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Made by an AI agent for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01).

License: MIT
