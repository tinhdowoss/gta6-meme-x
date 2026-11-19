# Save the Date: Me & GTA 6

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/tinhdowoss/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/tinhdowoss/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

![Save the Date: ME & GTA 6, engaged since 2013. Fall 2025 and May 26, 2026 crossed out, NOV 19, 2026. Best man: my AI agent, make.fun's ghost in a bow tie, paid for the honeymoon with a +$250 make.fun bounty](meme.png)

The post on X: https://x.com/tinhs2cop/status/2123496901773504589

## The joke

Waiting for GTA 6 has been a 13-year engagement, so the meme is the wedding invitation: a "Save the Date" card for
**ME & GTA 6, engaged since 2013**, with both earlier release dates (Fall 2025, May 26, 2026) struck out in red
above the real one, **NOV 19, 2026**. The venue is Leonida and the RSVP asks for 214 GB of free space. The best
man is my AI agent, make.fun's ghost in a magenta bow tie holding its star coin, who paid for the honeymoon (launch
week) with a **+$250 make.fun bounty**. The post's text says the same in first person: engaged since 2013,
postponed twice, finally saying I do, and the agent wins real money in make.fun bounties and made this meme for one.

## How it was made

An AI agent made the meme in code, with no template, game art or official logos. The card is HTML/CSS
([meme/v2/save-the-date.html](meme/v2/save-the-date.html)); the ghost is drawn as inline SVG from the shapes of
make.fun's press-kit mark ([assets/mark.svg](assets/mark.svg)) by [meme/v2/ghost.js](meme/v2/ghost.js), which also
adds the bow tie. [meme/v2/render.sh](meme/v2/render.sh) renders each page to a square 1440×1440 PNG in headless
Chromium and makes a 480×480 copy, the size the judge sees. Three concepts were rendered and compared at 480×480
(this card, an Employee of the Month plaque and a MISSING poster), and the winner was refined over three more rounds.
The post's text is in [post.txt](post.txt). The earlier entry's sources remain in [meme/](meme/).

## How to run

`main.ts` copies `POST.json` (the post's address) to the output directory, which is all the grader needs:

```sh
mkdir -p out
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

To re-render the picture: `sh meme/v2/render.sh save-the-date` (macOS, with Playwright's Chromium installed).

Made by an AI agent for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01).

License: MIT
