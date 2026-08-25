# SarkariDarapan Indexing Recovery Plan
**Written 2026-08-24. Covers 3 weeks: 25 Aug to 14 Sep 2026.**

---

## The diagnosis

### What the GSC data actually says

| Metric | Value |
|---|---|
| Indexed | **10** |
| Not indexed | **279** |
| Crawled, currently not indexed | **162** (trend RISING) |
| Discovered, currently not indexed | **112** |
| Clicks, last 28 days | **0** |
| Clicks, last 3 months | 112 (nearly all before 12 June) |

### The timeline rules out the obvious suspects

| Date | Event |
|---|---|
| 21 May to 2 Jun 2026 | Google May 2026 core update |
| ~1 Jun to 12 Jun | Site traffic RAMPED to peak (~45 clicks/day, ~1.2K impressions/day) |
| **~12 to 13 Jun** | **Traffic collapsed to near zero** |
| 24 to 26 Jun | Google June 2026 spam update (AFTER the collapse) |
| 18 to 21 Aug | Google August 2026 spam update |

The collapse was **not** the core update (finished 10 days earlier) and **not** a spam
update (the June one came 12 days later).

The ramp-then-cliff shape is the classic **initial visibility test**. Google surfaces
new content to gather engagement and trust data, measures, then re-ranks. When the
external trust signals are not there, the content drops back and stays back.

### What is NOT the problem (verified, stop worrying about these)

- **Speed.** TTFB 0.6s, full load 0.7s. Fast.
- **Rendering.** Content is server-side rendered: 17,226 words present in raw HTML
  before any JavaScript runs. Googlebot sees everything.
- **Technical SEO.** Full crawl of all 224 sitemap URLs on 18 Aug: every one returned
  200, zero noindex, canonical present and self-referencing on all, zero duplicate
  titles, zero duplicate descriptions.
- **Structured data.** FAQ schema on all content pages, JobPosting, Organization,
  Person, BreadcrumbList all present.
- **Content quality.** Pages are 3000w+, fact-verified, with sources.

**Bing indexes ~246 pages of this same site.** That is the proof: the site is
technically sound and crawlable. Google is making a *judgment*, not hitting a fault.

### What IS the problem

**1. Zero backlinks. This is the primary cause.**

No external site links to sarkaridarapan.com. Google has no independent evidence that
anyone values this site. Competitors in this vertical sit at DR 55 to 74
(SarkariResult 74, FreeJobAlert 70, SarkariExam 65). A DR 0 site with no inbound links
gives Google no reason to spend index space on 289 URLs.

"Discovered, currently not indexed: 112" is the clearest expression of this. Google
knows those URLs exist and has decided they are not worth crawling. That is a pure
trust and priority judgment.

**2. Scaled content signal.**

Google's 2026 enforcement targets *scaled content abuse*: many pages published rapidly
with uniform structure. Google is explicit that AI authorship is not itself penalised.
What is penalised is volume without editorial differentiation.

Reported pattern in 2026 case data: sites publishing 50 to 100 quality AI-assisted
articles with human editing gained traffic; sites publishing at high volume with
uniform templates lost 40 to 90 per cent.

This site published ~196 pages in roughly three months, and every page follows a near
identical structure: intro, status table, sections, FAQ, sources. The individual
quality is high. The **pattern** is what the classifier reads.

**3. No off-site footprint.**

No Quora presence at scale, empty Medium, minimal Reddit, no mentions anywhere. A real
publisher leaves traces across the web. This site exists only at its own domain.

---

## The uncomfortable conclusion

**More content will not fix this, and may make it worse.**

The last several weeks of work produced genuinely better pages: thin content fixed,
fabricated deadlines removed, FAQ schema restored, cannibalisation cleaned up. That
work was correct and it was necessary. But it was solving the wrong bottleneck.

The bottleneck is **trust**, and trust does not come from publishing more pages on
your own domain. It comes from other people linking to you.

Publishing 20 more pages over the next three weeks would add 20 more URLs to the 279
already not indexed, and would strengthen the velocity signal that is part of the
problem.

**Stop publishing new content for these three weeks.** That is the single hardest and
most important instruction in this plan.

---

## Expectation setting

Be realistic or this plan will feel like failure when it is working.

- Indexing recovery takes **6 to 12 weeks**, not 3.
- The 3 weeks below build the *inputs*. The output arrives later.
- Success at the end of week 3 looks like: 15+ real backlinks live, indexed count
  moving off 10, "Discovered, not indexed" starting to fall.
- Success does NOT look like traffic returning by 14 September. It will not.
- Do not re-apply for AdSense during this period. The gate stays where it is.

---

## WEEK 1 (25 to 31 Aug): Reduce footprint, fix trust signals

Goal: make the site look like a smaller, more trustworthy publisher rather than a
large thin one.

### Day 1 (Mon 25 Aug)
- [ ] Resubmit sitemap in GSC. It was last read 10 Aug and reports 244 pages; the live
      sitemap now has 224. Google is working from stale data.
- [ ] In GSC, check **Links** report. Record the exact number of referring domains.
      This is your baseline metric for the next 3 weeks.
- [ ] URL Inspection on the 5 pages that historically earned clicks:
      punjab-pcs-sdm-recruitment-2026, mh-set-2026, annapurna-bhandar-yojana-west-bengal-2026,
      lic-aao-2026, ukpsc-pcs-2026. Request indexing on each.

### Day 2 to 3 (Tue 26 to Wed 27 Aug)
- [ ] **Noindex the listing pages.** /category/*, /state/*, /results, /admit-card are
      thin aggregation pages with 90 to 104 character descriptions. They dilute the
      site-wide quality score. Keep them crawlable and linkable, remove them from the
      index. This directly improves the crawled-to-indexed ratio.
- [ ] Remove them from the sitemap at the same time.
- [ ] Expected effect: known URLs drop from 289 toward ~200. A smaller, higher quality
      index footprint raises the average.

### Day 4 to 5 (Thu 28 to Fri 29 Aug)
- [ ] Create **/editorial-policy** (currently 404). State: how content is researched,
      that every figure is checked against the official notification, that pages are
      dated and corrected when sources change, and who is responsible.
- [ ] Add a **visible byline and author bio** to every content page. Person schema
      already exists but no author is displayed. Google's quality raters and its
      systems both look for named accountability.
- [ ] Create a real **/authors/mahitosh-dey** page with a photo, background, and why
      this person is qualified to write about government recruitment.

### Day 6 to 7 (Sat 30 to Sun 31 Aug)
- [ ] Add "Last verified on [date] against [official source]" to the top of the 20
      highest-value pages. This is a genuine differentiator against competitors who
      never date their claims, and it is exactly the editorial signal Google rewards.
- [ ] No new pages. None.

---

## WEEK 2 (1 to 7 Sep): Backlinks, the actual fix

Goal: 10 to 15 referring domains by end of week. This is the week that matters most.

Target: **2 to 3 real links per day.** Quality over volume, but volume is not optional
at zero.

### Quora (Days 1 to 7, 2 answers daily)
- [ ] Account exists with 6 answers live. Target questions where a page already ranks
      or is genuinely the best answer.
- [ ] Rule: answer the question fully in the answer itself. Link once, contextually,
      where it genuinely helps. An answer that is a link with no substance gets removed
      and hurts.
- [ ] Prioritise: SSC CGL sectional timing, IBPS Clerk state selection, normalisation,
      typing test error limits. All four are things our pages explain better than the
      field.

### Reddit (Days 2, 4, 6)
- [ ] r/IndianAcademia, r/SSC, r/Btechtards, r/JEENEETards, state subreddits.
- [ ] Same rule: answer in the comment. Reddit removes link-drops aggressively and a
      ban costs you the channel permanently.

### Medium (Days 3, 5, 7)
- [ ] Account is empty. Publish 3 pieces, each a genuinely different angle from the
      site version, linking back once to the fuller page.
- [ ] Do not copy site content. Duplicate content across domains helps nobody.

### Directories and profiles (Day 1, batch)
- [ ] Google Business Profile if eligible.
- [ ] Indian business directories: JustDial, Sulekha, IndiaMART business listing.
- [ ] Education and exam directory listings.
- [ ] These are low-value links individually. At zero referring domains, they establish
      that the site exists as a real entity, which matters.

### Outreach (Days 4 to 7)
- [ ] The backlink kit exists at drafts/2026-07-29/backlink-submission-kit.md and about
      60 emails are owed. Send 15 this week.
- [ ] Target: coaching institute blogs, student community sites, education bloggers.
- [ ] Offer: the freshness angle. Our pages carry verified dates and corrected data
      that aggregators get wrong. That is a real reason to cite us.

---

## WEEK 3 (8 to 14 Sep): Consolidate, differentiate, measure

### Days 1 to 3 (8 to 10 Sep)
- [ ] Continue backlinks at 2 per day. Do not stop. This is now a permanent habit,
      not a sprint.
- [ ] **Differentiate the page template.** Every page currently opens the same way and
      carries the same section order. Vary it. Some pages lead with a table, some with
      a worked example, some with the correction we made. Uniformity is the scaled
      content signal.

### Days 4 to 5 (11 to 12 Sep)
- [ ] **Consolidate the remaining 32 thin pages.** Do not deepen them. Merge related
      ones, redirect the weakest into stronger pages. Target: get total indexable
      content pages under 150.
- [ ] Fewer, stronger pages beat more, adequate ones under a site-wide quality model.

### Days 6 to 7 (13 to 14 Sep)
- [ ] Measure against the Day 1 baseline:
      - referring domains: was ___, now ___
      - indexed pages: was 10, now ___
      - Discovered not indexed: was 112, now ___
      - Crawled not indexed: was 162, now ___
- [ ] Request indexing on 10 more pages.
- [ ] Write the week 4 to 6 plan based on which numbers actually moved.

---

## What NOT to do

- Do not publish new content for 3 weeks.
- Do not buy backlinks. A link scheme penalty on top of this is unrecoverable at
  this stage.
- Do not re-apply for AdSense.
- Do not delete the site and start over. The content is genuinely good and the
  domain has history.
- Do not add more pages "to show Google the site is active." Activity is not the
  signal. Trust is.
- Do not panic-check GSC daily. Indexing data lags by days and daily noise will
  make you change course for no reason. Check weekly.

---

## The honest summary

The site has a good technical foundation, genuinely useful content, and zero
reasons for Google to trust it. Bing indexes 246 pages because Bing indexes more
readily. Google gates on trust and this site has none.

Three weeks of disciplined link building will do more than three months of writing.
That is the whole plan.
