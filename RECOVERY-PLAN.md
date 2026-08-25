# SarkariDarapan Recovery Plan: 21 Days, Day by Day
**25 August to 14 September 2026.** Written 2026-08-24.

Three workstreams running in parallel:
**A. Reduce footprint** (mostly Claude) · **B. Trust infrastructure** (shared) · **C. Backlinks** (mostly owner)

Owner time needed: **1 to 2 hours a day.** Everything else is Claude's.

---

## Why these three, in one paragraph

Google indexes 10 of your 289 known URLs. It is not a technical fault: all 224 sitemap
URLs return 200, the site renders server-side, TTFB is 0.6s, and Bing indexes ~246
pages of the same site. Google is making a trust judgment. **Footprint** work raises
your crawled-to-indexed ratio by removing weak URLs. **Trust infrastructure** gives
Google a named human to hold accountable. **Backlinks** give it external evidence that
someone values the site. Only the third one moves the needle much, but the first two
make the third work faster.

---

# WEEK 1 (25 to 31 Aug): Footprint and Trust

---

## Day 1 - Monday 25 August

### Owner (45 min)
1. **GSC to Sitemaps.** Resubmit `https://www.sarkaridarapan.com/sitemap.xml`.
   It was last read 10 Aug and reports 244 pages; the live file now has 224.
2. **GSC to Links.** Record these three numbers in a note. This is your baseline:
   - Total external links: ______
   - Top linking sites (count of referring domains): ______
   - Top linked pages: ______
3. **GSC to URL Inspection.** For each of these 5, paste the URL, then click
   "Request Indexing". These are the only pages that ever earned clicks:
   - `/blog/punjab-pcs-sdm-recruitment-2026` (35 clicks historically)
   - `/entrance-exams/mh-set-2026` (17)
   - `/sarkari-yojana/annapurna-bhandar-yojana-west-bengal-2026` (12)
   - `/sarkari-naukri/lic-aao-2026` (9)
   - `/sarkari-naukri/ukpsc-pcs-2026` (5)

### Claude
- Noindex the listing pages: `/category/*`, `/state/*`, `/results`, `/admit-card`.
  Keep them crawlable and internally linked, remove from index.
- Remove those same URLs from `sitemap.xml`.
- Verify live: robots meta on each route, sitemap count drops from 224 to ~196.

**Done when:** sitemap resubmitted, baseline recorded, 5 pages requested, listing
pages noindexed and out of the sitemap.

---

## Day 2 - Tuesday 26 August

### Owner (45 min)
**Write your author bio.** This is the single most valuable 45 minutes of week 1.
Google needs a real person behind this site. Send Claude:
- Your full name as you want it published
- A real photo (not a stock image, not a logo)
- 150 to 200 words covering: who you are, why you started this site, what
  connects you to government job seekers, how long you have been doing this
- Any relevant background: your own exam attempts, education, work history
- Links to your real profiles: LinkedIn, X, Quora

Honesty beats credentials here. "I sat SSC CGL twice and got tired of sites
publishing wrong deadlines" is a stronger signal than a vague claim of expertise.

### Claude
- Build `/authors/mahitosh-dey` from what you send.
- Add a **visible byline** to every content page. Person schema already exists but no
  author name is displayed anywhere on the page.
- Link byline to the author page.

**Done when:** author page live, byline visible on all 196 content pages.

---

## Day 3 - Wednesday 27 August

### Owner (30 min)
- Review the editorial policy draft Claude produces and correct anything untrue.
- Confirm the contact details on `/contact` are real and monitored.

### Claude
- Build `/editorial-policy` (currently 404) covering: how content is researched,
  that every date and vacancy figure is checked against the official notification,
  that pages carry verification dates, how corrections are handled, and who is
  responsible.
- Build `/terms` (currently 404).
- Link both from the footer.

**Why this matters:** we corrected fabricated deadlines on 7 pages this month.
Saying so publicly is a genuine trust signal almost no competitor can make.

---

## Day 4 - Thursday 28 August

### Owner (45 min) - Reddit groundwork
Your account `u/Stunning_Act5657` is new with almost no karma. **A new account
posting links gets shadowbanned, and that costs you the channel permanently.**

Today: build karma only. **Post zero links.**
- Join: r/SSC, r/IndianAcademia, r/Btechtards, r/JEENEETards, r/bankexams,
  plus your state subreddit
- Leave **5 genuinely helpful comments**. Answer questions you actually know.
  No mention of the site at all.
- Target: 50+ comment karma before you link to anything (roughly day 11).

### Claude
- Add "Last verified on [date] against [official source]" to the top of the 20
  highest-value pages.

---

## Day 5 - Friday 29 August

### Owner (1 hr) - Directory listings, batch 1
These are low-value links individually. At zero referring domains they establish
that a real entity exists. Do 5 today:
- Google Business Profile (if eligible as an online business)
- JustDial
- Sulekha
- IndiaMART business listing
- Your own LinkedIn: create a Company Page for SarkariDarapan and link the site

Use identical name, address format and description everywhere. Consistency is
what makes these count as entity signals.

### Claude
- Analyse the 32 remaining thin pages. Produce a merge or keep recommendation for
  each, with the target URL for anything being merged.

---

## Day 6 - Saturday 30 August

### Owner (1.5 hr) - Quora question shortlist
Per our standing rule, **you pick the questions before I draft anything.**

Find 14 questions (2 per day for week 2). For each, record:
- Full URL
- Question text
- Follower count
- Whether existing top answers are thin or comprehensive
- Which of our pages answers it

Search Quora for these, where we are genuinely stronger than the field:
- SSC CGL sectional timing 2026
- IBPS Clerk state selection
- Normalisation in SSC and IBPS exams
- SSC typing test error limits
- UPSC vs SSC
- 8th Pay Commission pensioners
- CTET certificate validity

**Pick questions with followers and thin existing answers.** A comprehensive top
answer already in place means your answer will not be seen.

### Claude
- Execute the first consolidation batch from Day 5 analysis.

---

## Day 7 - Sunday 31 August

### Owner (1.5 hr)
- Set up your Medium profile properly: real photo, bio, link to the site.
- Draft Medium piece 1: **"Government job sites keep publishing wrong deadlines.
  Here is what I found checking 200 pages."** This is your genuinely unique story
  and nobody else can tell it.
- Do not publish yet.

### Claude
- Verify all week 1 changes are live.
- Report footprint reduction: URLs before and after.

**Week 1 review:** listing pages noindexed, author page live, editorial policy live,
bylines visible, verification dates on 20 pages, 5 directories done, 14 Quora
questions shortlisted, Reddit karma started.

---

# WEEK 2 (1 to 7 Sep): Backlinks

**Target: 10 to 15 referring domains by Sunday.** This is the week that decides
whether the next three months work.

**Every day: 2 Quora answers.** Non-negotiable, it is the base habit.

### The rule that keeps you from getting banned everywhere
Answer the question fully **inside the answer**. Someone reading it should get
complete value without clicking. Then link once, where it genuinely helps.
An answer that is a teaser plus a link gets removed, and repeated removals kill
the account.

---

## Day 8 - Monday 1 September
- **Quora:** answers 1 and 2 from your shortlist (Claude drafts, you review and post)
- **Reddit:** 5 more genuine comments, still no links
- **Time:** 1.5 hr

## Day 9 - Tuesday 2 September
- **Quora:** answers 3 and 4
- **Medium:** publish piece 1. Link once to the site, in context.
- **Time:** 1.5 hr

## Day 10 - Wednesday 3 September
- **Quora:** answers 5 and 6
- **Outreach:** 5 emails. Kit is at `drafts/2026-07-29/backlink-submission-kit.md`.
  Target coaching institute blogs and student community sites.
  **Your pitch:** "I checked 200 government job pages against official notifications
  and found 7 with wrong deadlines. Here is my correction methodology, free to cite."
  That is a real reason to link, not a favour request.
- **Time:** 2 hr

## Day 11 - Thursday 4 September
- **Quora:** answers 7 and 8
- **Reddit:** first contextual link, only if you have 50+ karma. One link, in a
  thread where it is the actual answer.
- **Time:** 1.5 hr

## Day 12 - Friday 5 September
- **Quora:** answers 9 and 10
- **Outreach:** 5 emails
- **Directories:** batch 2, 5 more education and exam directories
- **Time:** 2 hr

## Day 13 - Saturday 6 September
- **Quora:** answers 11 and 12
- **Medium:** publish piece 2, **"What normalisation actually does to your SSC score"**.
  Different angle from the site version, not a copy.
- **Time:** 2 hr

## Day 14 - Sunday 7 September
- **Quora:** answers 13 and 14
- **Outreach:** 5 emails (15 sent this week, 45 still owed)
- **Measure:** referring domains now ______ (was ______ on Day 1)
- **Time:** 1.5 hr

---

# WEEK 3 (8 to 14 Sep): Consolidate, differentiate, measure

Backlinks continue at **2 per day**. This is now permanent, not a sprint.

---

## Day 15 - Monday 8 September
- **Owner:** Quora ×2, outreach ×5
- **Claude:** Break template uniformity. Every page currently opens the same way with
  the same section order, which is the scaled-content signal. Vary the top 30 pages:
  some lead with a table, some with a worked example, some with the correction we made.

## Day 16 - Tuesday 9 September
- **Owner:** Quora ×2, Reddit ×2 contextual
- **Claude:** Continue template differentiation.

## Day 17 - Wednesday 10 September
- **Owner:** Quora ×2, outreach ×5
- **Claude:** Consolidation batch 2. Merge and redirect the weakest thin pages.
  **Target: indexable content pages under 150.** Fewer strong pages beat more
  adequate ones under a site-wide quality model.

## Day 18 - Thursday 11 September
- **Owner:** Quora ×2, Medium piece 3
- **Claude:** Finish consolidation. Verify every redirect returns 308 and no
  orphaned URLs remain in the sitemap.

## Day 19 - Friday 12 September
- **Owner:** Quora ×2, outreach ×5 (30 sent total, 30 owed)
- **Claude:** Full technical re-audit: crawl every sitemap URL, confirm 200s,
  canonicals, no noindex on content pages, no duplicates.

## Day 20 - Saturday 13 September
- **Owner:** Quora ×2. Resubmit sitemap in GSC (footprint has changed substantially).
  URL-inspect and request indexing on 10 pages.
- **Claude:** Verify sitemap reflects the new smaller footprint.

## Day 21 - Sunday 14 September - Measure

Fill this in against your Day 1 baseline:

| Metric | Day 1 | Day 21 |
|---|---|---|
| Referring domains | ______ | ______ |
| Indexed pages | 10 | ______ |
| Discovered, not indexed | 112 | ______ |
| Crawled, not indexed | 162 | ______ |
| Total known URLs | 289 | ______ |
| Clicks, 28 days | 0 | ______ |

**What good looks like on Day 21:**
- Referring domains: 15+
- Indexed: moving off 10, anything above 25 is a real signal
- Discovered not indexed: falling
- Total known URLs: down, because footprint shrank
- **Clicks: probably still near zero. That is expected and not failure.**

Indexing recovery runs 6 to 12 weeks. Week 3 builds the inputs; the output comes later.

---

# What NOT to do for 21 days

- **No new content pages.** No jobs, schemes, exams or blogs. New pages join the 279
  already unindexed and earn nothing.
- **No bought links.** A link scheme penalty on top of this is unrecoverable.
- **No AdSense re-application.**
- **No daily GSC checking.** The data lags by days. Check weekly or you will change
  course on noise.
- **No Reddit links before 50 karma.** A shadowban costs the channel permanently.
- **No copying site content to Medium.** Different angle every time.

---

# The one carve-out

SSC GD Constable 2027 opens in September and it is the largest recruitment on the
SSC calendar. If you want a single exception, make it that one page, published in
week 3 only. Not a habit, not a return to the old pattern.

My honest recommendation is still to skip it and publish in late September, because
a page that is not indexed captures nothing.
