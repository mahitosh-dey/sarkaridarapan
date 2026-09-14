# Targets: 14 September to 14 October 2026

Set 2026-09-14. Numbers I expect to be held to, separated by how much control I
actually have over each. A target I cannot influence is a wish, and calling it a
target is how a plan starts lying to the person reading it.

## Baseline, measured today

| | Value |
|---|---|
| Google pages indexed | **10** of 289 known |
| Google, not indexed | 279, of which 162 "crawled, currently not indexed" and 112 "discovered" |
| Google clicks, 7 days | 0 |
| Google impressions, 7 days | 2 |
| Bing clicks, 7 days | 45 |
| Bing impressions, 7 days | 2,300 |
| Bing CTR | 1.93 per cent |
| Bing AI citations, 30 days | 22,800 |
| Domain Rating | 0 |
| Followed referring domains | 28 of 386 |
| Active content pages | 196, of which 21 under 2,500 words |
| Live site audit | 216 of 216 clean |

**The Bing trend is the part worth staring at.** Between the two weekly
snapshots I have, impressions fell from 3,300 to 2,300, a drop of 30 per cent,
while clicks rose from 38 to 45 and CTR went from 1.14 to 1.93 per cent. So the
snippet work is landing and visibility is eroding underneath it. CTR gains get
swamped if impressions keep sliding, and nothing done so far addresses why they
are sliding.

---

## Tier 1: commitments

Binary, entirely within my control, and there is no excuse for missing one.

1. **Supabase replay loses nothing.** 37 edits across 35 records go back into
   Supabase on or after 19 September with zero silent reverts. Conflicts
   reported rather than overwritten.
2. **Egress stays under quota for 30 consecutive days** after service returns.
   The column projection in 03211a2 has still never run against a live database.
3. **All four audits at zero on a weekly check.** Conflation, stale deadlines,
   apply intent, relative time. Currently 0, 0, 0, 7, and the 7 are believed
   false positives that need confirming or fixing.
4. **Every page whose window closes this month gets repositioned within 24
   hours.** CAT on 15 September, IBPS RRB on 21 September, GATE on 27
   September, NSP on 30 September.
5. **A decision recorded on all 21 sub-2,500-word pages**: rewrite to 3,000, or
   noindex. Not "some day". A written decision per page.

## Tier 2: targets

Numbers I influence but do not control. Real targets, and I expect to explain a
miss.

| Metric | Today | 14 October |
|---|---|---|
| Bing impressions, 7 days | 2,300 | **2,800** |
| Bing clicks, 7 days | 45 | **60** |
| Bing CTR | 1.93% | **2.3%** |
| Followed referring domains | 28 | **32** |

The impressions target matters most and is the hardest. It means reversing a
30 per cent slide, not extending a trend. If impressions keep falling while CTR
rises, the CTR work is cosmetic.

## Tier 3: watch

Google decides these. Stating them as targets would be dishonest, so they are
thresholds that tell us whether the thesis is right.

| Signal | Today | What would count as movement |
|---|---|---|
| Pages indexed | 10 | 25 or more |
| "Crawled, currently not indexed" | 162 | any sustained fall |
| "Discovered, currently not indexed" | 112 | a fall, since the crawl-budget fixes target exactly this |
| Google impressions, 7 days | 2 | 30 or more, the first real sign of life |

The sitemap was resubmitted on 8 September, so a recrawl is running now. These
become readable around 22 September and meaningful by early October.

---

## The condition that would prove me wrong

If on 14 October the indexed count is still at or below 12 AND "crawled,
currently not indexed" has not moved, then the quality thesis is wrong.

Everything done since 1 September assumed that correct dates, clean technicals
and honest framing would eventually change Google's assessment. Ten wrong dates,
twenty-one dead-window pages, thirty-six metadata violations and a broken FAQ
parser have been fixed on that assumption.

If that produces nothing by mid-October, the binding constraint is authority
alone, and continuing to polish content is theatre. The rational response then
is to stop content work entirely and spend every hour on backlinks, because a
DR 0 site with 28 followed referring domains does not rank regardless of how
correct it is.

I would rather write that condition down now than argue about it in October.

## Explicitly not targets

- **DR 30.** Project rule 6, and a twelve-month goal. DR moves 0 to maybe 2 in a
  month with real outreach. Treating it as a monthly target invites link buying,
  which is what put two link farms in the profile already.
- **AdSense.** The gate is 20+ clicks a day sustained. That is roughly 600 a
  month against about 195 today. Not reachable by 14 October, and applying early
  risks a second rejection and a longer wait.
- **New content.** With 10 of 289 indexed, publishing more worsens the ratio
  Google is judging. The 21 thin pages get decided, not multiplied.

## The lever nobody has pulled

Backlinks. It is the only item touching authority rather than hygiene, and it is
the one thing that has not moved in three weeks.

The immediate blocker is small: an Ahrefs export of referring domains filtered
to Dofollow, which unblocks a disavow of the spam that can pass signal. After
that the work is outreach, and outreach needs a human with an identity, which is
the owner rather than me.

Four followed domains in a month is a modest target and still triples the rate
of the last quarter.
