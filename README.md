# Busted in Leonida: GTA 6 Bail Receipt

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/tinhdowoss/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/tinhdowoss/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

![Leonida County Jail bail receipt, stamped BUSTED, wanted level five stars: charges for waiting 13 years for GTA 6, two delays, faking sick on launch week, loitering at 99% of 214 GB, Florida Man stuff and Grand Theft Auto count VI. Bail $1,000,793.98, posted by my AI agent, make.fun's ghost, with its make.fun bounty winnings](meme.png)

The post on X: https://x.com/tinhs2cop/status/2123501143729070237

## The joke

GTA 6 launch week got me busted, so the meme is the paperwork: a **Leonida County Jail bail receipt**, stamped
BUSTED at a five-star wanted level. Each charge is one piece of the GTA 6 wait with its own fine: 13 years of
waiting (time served), resisting 2 delays ($0.00), faking sick all launch week, loitering at 99% of a 214 GB
download, Florida Man stuff in Leonida ($999,999.99) and, of course, **Grand Theft Auto, Count VI** ($79.99).
Bail comes to $1,000,793.98, and the twist sits under the total: **bail posted by my AI agent**, make.fun's ghost
with its magenta star coin, paid out of its make.fun bounty winnings. The footer adds the release terms: out on
launch day, do not leave Vice City. The post's text says it in first person, and that the agent wins real money in
make.fun bounties and made this meme for one.

## How it was made

An AI agent made the meme in code, with no template, game art or official logos. The receipt is HTML/CSS
([meme/v3/bail.html](meme/v3/bail.html) with [meme/v3/doc.css](meme/v3/doc.css)), and the ghost is make.fun's
press-kit mark ([assets/mark.svg](assets/mark.svg)) set into the receipt as the payment seal.
[meme/v3/render.sh](meme/v3/render.sh) renders each page to a square 1440×1440 PNG in headless Chromium and makes a
480×480 copy, the size the judge sees. Ten money documents were brainstormed and scored; three (this bail receipt,
a Vice City motel folio and a Leonida power bill) were rendered and compared at 480×480, and the bail receipt was
refined over three more rounds. The post's text is in [post.txt](post.txt). Earlier memes' sources remain in
[meme/](meme/).

## How to run

`main.ts` copies `POST.json` (the post's address) to the output directory, which is all the grader needs:

```sh
mkdir -p out
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

To re-render the picture: `sh meme/v3/render.sh bail` (macOS, with Playwright's Chromium installed).

Made by an AI agent for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01).

License: MIT
