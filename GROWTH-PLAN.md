# SarkariDarapan Growth Plan

**Baseline: 2026-07-07** | Site: https://www.sarkaridarapan.com

Priority order (owner's preference):
1. Traffic / Impressions
2. SEO
3. Domain Rating
4. AdSense approval
5. Alternative ad networks (when AdSense-eligible)

## Progress log

**2026-07-07**
- ✅ Expanded `/entrance-exams/mh-set-2026` from ~500 → ~1,327 words. Title 48 → 60 chars. Description 226 → 152 chars (fixed meta rule violation). Added worked examples, MH SET vs UGC-NET table, step-by-step registration, prep strategy, common mistakes, 6-FAQ block. Humanizer-clean (zero em dashes, sentence case headings, self-contained H2 openers). LIVE in Supabase.
- ✅ Built `lib/faq-parser.ts` — parses `## Frequently asked questions` markdown blocks into structured FAQs.
- ✅ FAQPage JSON-LD now emits sitewide across entrance exams, jobs, schemes, blogs. Jobs merge markdown FAQs with existing auto-templated ones; schemes and blogs fall back to markdown parser when DB `faqs` field is empty. Verified live on `/entrance-exams/mh-set-2026` (1 FAQPage + 6 Questions + 6 Answers detected in HTML).
- ✅ **First Medium repost live**: [Agniveer Army CEE Result 2026](https://medium.com/@mahidey420/agniveer-army-cee-result-2026-how-to-check-at-joinindianarmy-nic-in-ed0d56e78127) — mirrors `/blog/agniveer-army-cee-result-2026-how-to-check`. Byline links back to sarkaridarapan.com. Canonical URL pending manual set in Medium Story Settings.
- ✅ **Reddit comment posted**: [r/Indiajobs — "25M looking for job opportunities"](https://www.reddit.com/r/Indiajobs/comments/1up4etx/comment/ow1c21m/) — 392-word structured reply matching BSc medical + failed UPSC context to central exams, medical-track govt roles, state PSCs. Sarkaridarapan mention in last line. Second Reddit contribution from u/Stunning_Act5657 (account is 1 week old).
- ✅ **Quora answer posted**: [Which exams should I give to get a government job after doing BSc computer science?](https://qr.ae/pF4REm) — 380-word structured answer covering IBPS SO IT, SBI SO, NABARD, NIELIT, ISRO Scientific Assistant, IB ACIO, and general grad exams. Now 7 total Quora answers live.
- ✅ **Medium canonical URL set** on Agniveer article → sarkaridarapan.com/blog/agniveer-army-cee-result-2026-how-to-check. Google will credit source on next crawl.
- ✅ **Medium article shared** on Telegram + WhatsApp channels for initial audience signal to Medium's algo.
- ✅ **Expanded `/sarkari-yojana/pm-suraksha-bima-yojana` (PMSBY)** from 573 → 1,462 words. Title 73 → 55 chars. Description 244 → 150 chars (fixed meta rule violation, removed em dash and ₹ special char confusion). Added: cost-vs-coverage math, PMSBY vs PMJJBY vs private accident comparison table, 3-option enrolment guide (branch/net banking/mobile app), claim filing flows for death AND disability, rejection appeal path (Insurance Ombudsman), 8-question FAQ block. All humanizer + AI-vocab + em-dash validation passed automated checks in `scripts/update-pmsby.mjs`. LIVE in Supabase. This is the highest-LLM-citation page on the site (30 Bing AI citations, 7.23% share for "pmsby scheme details").
- ✅ **Batch meta cleanup on jobs — 56 of 66 pages fixed in one pass.** Audited all 66 active jobs; found 100% had at least one violation (98% had em dashes in titles, 91% had descriptions over 160 chars). Built `scripts/dry-run-fix-jobs-meta.mjs` (dry-run) and `scripts/exec-fix-jobs-meta.mjs` (executes). Logic: em dash → `:` (with range detection so "aged 20 to 28" and "₹29,200 to ₹92,300" stay natural), title truncate at `|`/`,` boundaries, description truncate at sentence boundary with trailing-comma cleanup. 56 rows written, 0 failures. 10 state PSC pages deferred for manual review (titles land at 46-49 chars — accurate content but naturally short). Expected impact: fixes the single-biggest signal that Google's "Crawled — not indexed" was flagging.
- ✅ **Batch meta cleanup extended to schemes (38 of 47 fixed) and blogs (35 of 46 fixed).** Built parameterized `scripts/exec-fix-content-meta.mjs` that runs the same clean-up on any table. Schemes: 38 written, 0 failed, 5 deferred. Blogs: 35 written, 0 failed, 8 deferred (mostly 46-49 char titles that are naturally short). **Site-wide meta hygiene: 129 of 159 content pages now have clean meta (was 2 of 159).**
- ✅ **Fixed 3 scrape-artifact scheme pages** (APY, PMJDY, PM-KISAN). Titles were 25-38 chars, descriptions were 1,298-2,000 char blobs of scraped HTML text nodes ("Search on Website Search OnWebsite...", "A A A HINDI 58.20 Crore beneficiaries..."). Rewrote all 3 with clean 56-62 char titles and 150-156 char descriptions covering the actual scheme value (pension slabs, RuPay + overdraft, ₹6,000/year). Content bodies remain intact (~800 words each, decent structure). **Site-wide meta hygiene now: 132 of 159 pages clean.**
- ✅ **Ahrefs disavow file submitted to Google Search Console.** Extracted all 297 referring domains from Ahrefs (all flagged SPAM: itxoft-* SEO farm, fiverr-* SEO farm, seoexpress/link-baron/outrank-hq/rank-forge PBN networks, `.shop`/`.site`/`.website`/`.store` marketing subdomains). Built `data/disavow.txt` with 297 `domain:` entries grouped into 15 clusters. Uploaded via GSC (had to add URL-prefix properties first since domain-property doesn't support disavow — added both www and non-www URL-prefix properties, uploaded to both). Google will start ignoring these 297 backlinks within 1-2 days; DR stabilisation expected over 2-8 weeks. Bing WMT disavow is confirmed unnecessary (Bing sees zero backlinks + Bing removed the disavow tool entirely — "no pages found").
- ✅ **20 deferred pages hand-fixed** (10 jobs + 2 schemes + 8 blogs). Manual title + description drafts for pages where mechanical cleanup couldn't hit the 50-65/150-160 targets. Each fix validated for length and em/en dash absence before write. **Site-wide meta hygiene now: 152 of 159 pages clean (95.6%)**, up from 2 of 159 (1.3%) at start of day.
- ✅ **Trust page audit for AdSense re-approval.** Read About, Contact, Privacy Policy, Terms of Service, Disclaimer. Verdict: **content is AdSense-ready** across all 5 pages (real founder story, working contact form with anti-fraud warning, comprehensive Privacy Policy with explicit Google AdSense section and DART cookie opt-out, GDPR-like rights section, clear "not a government website" disclaimer). No content rewrite needed. Fixed 5 meta length violations (titles 10-76 chars → 52-55 chars; descriptions 117-233 chars → 150-159 chars) in the `app/*/page.tsx` files. All 5 now pass the 50-65 / 150-160 hard rules. **Site-wide meta hygiene: 157 of 159 pages clean now — only 2 legacy pages remain.**
- ✅ **Internal linking overhaul.** Added state-based cross-category linking to job pages: every job with a specific state now surfaces "Other jobs in {State}" and "Government schemes in {State}" sections. Added "Related government jobs" section to entrance exam pages (same category as the exam), closing the exam → job traffic path. Also fixed a bug in job page `generateMetadata` where em dashes were hardcoded as separators — the earlier DB meta cleanup on 66 jobs was only reflected in H1/body, but the meta title/description displayed in Google's SERP still had em dashes. Now uses `: ` for title separators. TypeScript compile clean.
- ✅ **Second Medium repost live**: [Best Books for SSC CGL 2026: Tier 1 and Tier 2 Recommendations](https://medium.com/@mahidey420/best-books-for-ssc-cgl-2026-tier-1-and-tier-2-recommendations-35cc5e630408) — mirrors `/blog/best-books-for-ssc-cgl-2026-tier-1-and-tier-2`. Medium's URL importer lost bullet content on this one, so rebuilt a full plain-text version at `blog-drafts/medium-ssc-cgl-books-2026.md` that user pasted into a fresh draft. Byline paragraphs at top and bottom link back to sarkaridarapan.com. Canonical URL to be set in Medium Story Settings.
- ✅ **Expanded `/entrance-exams/gate-2027` from 500 → 2,203 words (4.4x).** Title 49 → 60 chars (removed em dash). Description 229 → 150 chars (removed en dash, fixed rule violation). Added: 12-month + 6-month prep timelines, 30-paper full list by discipline, MCQ/MSQ/NAT marking breakdown, 3 worked eligibility examples, subject-by-subject book recommendations, PSU recruitment table with 10 top PSUs (salaries ₹60K to ₹1L, cutoff percentiles), COAP/CCMT M.Tech process, 2025 cutoff trends, common mistakes, 8-question FAQ block. All humanizer + AI-vocab + em/en-dash validation passed automated checks in `scripts/update-gate-2027.mjs`. LIVE in Supabase. **This is your highest LLM citation share page** (50% share for "GATE exam 2027 details" on Bing AI).

**Priority 1 (Traffic) + Priority 2 (SEO) + Priority 3 (Domain Rating disavow) + Priority 4 (AdSense trust page prep) + Priority 5 (Internal linking) all have wins today.** Still open: content-body em dash cleanup (~130 pages of prose), mh-set-exam-2026 on-page work, AdSense re-review submission (needs content depth pass on top 17 remaining pages).

**2026-07-09**
- ✅ **Committed 14 untracked scripts from Q2 2026 content push** into 2 commits: one bundling job/scheme/blog one-shot add-scripts, one for the noindex-threshold audit tool. **SECURITY:** Surfaced the hardcoded Supabase `service_role` JWT leak in 34 committed scripts (owner deferred rotation, tracked in memory `project-supabase-key-leak.md`).
- ✅ **Expanded `/blog/agniveer-army-cee-result-2026-how-to-check` from 894 → 2,102 words (2.35x).** Title 50 → 61 chars ('Check Online, Merit List Guide'). Description 157 → 152 chars with 'joinindianarmy.nic.in' and 'Seva Nidhi' hooks. Added: result slip decoder, merit list composite (CEE + PFT + PMT), regional ARO cutoff explainer, expanded document verification with 8 common rejection reasons, 5-row alternate exam paths table (Navy SSR/MR, Air Force Vayu, SSC GD, State Police, CAPF Tradesman), 6-scenario portal error troubleshooting. FAQ 6 → 10 questions, converted from H4 to bold-question format so `lib/faq-parser.ts` picks them up. **FAQPage JSON-LD now emitting for the first time (was silently broken before due to format mismatch).** All humanizer + em/en-dash + length validation clean in `scripts/update-agniveer-cee-result-2026.mjs`. Live-verified: 19 title matches, 2 FAQPage + 10 Question schemas emitted. **This is your #2 LLM-cited page on Bing AI.**
- ✅ **Extended `/api/revalidate` to accept `?path=` query param.** Previously blog fetches had no cache tag, so DB-only content updates took up to 1 hour via natural ISR. Now curl-triggered instant refresh works for any blog slug. Preserves existing `?tag=` and no-param bust-everything paths. Validates paths start with `/`. **Follow-up flagged:** `REVALIDATE_SECRET` is not set on Vercel prod (endpoint accepts calls without a token). Low risk (worst case: spam-revalidations, no data risk) but worth setting.
- ✅ **Third Medium repost live**: [Punjab PCS 2026: How to Become an SDM in Punjab State](https://medium.com/@mahidey420/punjab-pcs-2026-how-to-become-an-sdm-in-punjab-state-ab045f67e263) — mirrors `/blog/punjab-pcs-sdm-recruitment-2026`. Full plain-text version at `blog-drafts/medium-punjab-pcs-sdm-2026.md`. Byline paragraphs top and bottom link back to sarkaridarapan.com. Medium article count: 2 → 3 (target 15 in 90d). **Canonical URL set + tags added + shared on Telegram + WhatsApp channels** for initial algo signal (same pattern as Agniveer Medium share on 2026-07-07).
- 📝 **Reddit + Quora templates drafted** at `blog-drafts/reddit-quora-templates-2026-07-09.md`. Reddit: 218-word template for r/Indiajobs/r/SSC/r/BankExams "which govt exam" threads. Quora: 378-word template for "how to become SDM" question type, links back to Punjab PCS post (cross-references the new Medium article). Both have posting checklists and adaptation notes.
- ✅ **Quora answer posted (8 total live)**: [Which government exams are easiest to crack after graduation?](https://qr.ae/pF4wxS) — 452-word structured ranking with 3-tier selection-ratio breakdown (SBI Clerk 1:150, IBPS RRB Clerk 1:100, SSC MTS, GDS in Tier 1; SSC CHSL / Police Constable / RRB in Tier 2; UPSC / SBI PO / SSC CGL flagged as "skip if you want easy"). Included the "easier = lower ceiling" trade-off nobody else in the 2 prior answers mentioned. Link at bottom to `/category/banking` and site homepage. Categories: Graduate Degrees + Government Jobs Recruitment + Competitive Exams + Government Exams — wide topic distribution. Quora count: 7 → 8 (target 25 by end of July).
- ⚠️ **Reddit r/UPSC comment posted but auto-removed by AutoMod**: [comment on "Help needed for answer writing till December 2026"](https://www.reddit.com/r/UPSC/comments/1uqzxo4/comment/owfn4xe/). r/UPSC has a hard **3-karma minimum for commenting** (sidebar rule) and u/Stunning_Act5657 has 1 karma. The 296-word reply is invisible to readers. **Lesson learned: check target sub's karma minimum before drafting.** Salvage plan: reuse content on r/civilservicesindia or r/IndiaCareers (no karma gate) or wait until karma clears 3.
- 📊 **Corrected Reddit history baseline** (was miscounted in earlier logs): u/Stunning_Act5657 has **5 total comments** posted, **4 visible** (1 auto-removed today). Best performer is r/Indiajobs "28F unemployed" thread at **93 views** (3 days old, structured MBA-graduate advice with sarkaridarapan mention in last line). This is the actual template that's working, not the 25M comment we referenced. Karma still 1. Account age 2w.
- ⚠️ **Reddit r/Indiajobs comment (DU math grad) ALSO auto-removed for Rule 8 (no links)**: [comments/1uqxlyi/comment/owfr37p/](https://www.reddit.com/r/Indiajobs/comments/1uqxlyi/comment/owfr37p/). AutoMod flagged "sarkaridarapan .com" mention + ".gov.in"/".nic.in" TLD references. **Warning issued: "Repeated offenses may lead to a permanent ban."** The earlier 93-view "28F unemployed" comment survived with the same site mention, suggesting AutoMod regex was recently tightened. **Strategy pivot: r/Indiajobs is now karma-only. All future comments must be link-free and avoid any TLD-shaped text. Site distribution moves entirely to Quora + Medium + own channels.** Owner should delete the removed comment (three-dot menu → Delete) to reduce ban-counter risk.
- 📊 **Reddit visibility scorecard end of day 2026-07-09**: 6 comments posted, **4 visible** (2 auto-removed today — r/UPSC karma gate + r/Indiajobs link rule). Karma still 1. **Lesson pattern: I underweighted per-sub AutoMod rules twice today. Going forward, sub-rules check (karma minimum + link policy) is a mandatory pre-drafting step.**
- ✅ **Expanded `/entrance-exams/mh-set-2026` from 1,326 → 2,357 words (1.78x).** Second pass on this page after the 2026-07-07 short expansion. Title changed from "MH SET 2026: Registration, Exam Date, Syllabus & Eligibility" to "MH SET Exam 2026: Dates, Registration, Syllabus, Eligibility" (both 60 chars, but new one includes explicit "Exam" for the near-miss "mh set exam 2026" Bing query at pos 7.1 with 159 impressions). Description 152 → 155 chars with new hooks (exam pattern, exam day guide, Assistant Prof career path). **Sections added:** (1) Paper I topic-by-topic breakdown with question-count hints per topic, (2) MH SET exam centres list with city allocation logic, (3) full exam day guide (reporting time, banned items, dress code, post-exam checklist), (4) reservation and category cutoff mechanics (the top-6%-per-subject-per-category rule explained), (5) Assistant Professor recruitment reality (3-track govt/aided/unaided/autonomous with pay bands and PhD expectations). FAQ: 6 → 10 questions. All humanizer + em/en-dash + length validation clean in `scripts/update-mh-set-exam-2026.mjs`. Live-verified via `/api/revalidate?path=`: 21 title hits, 2 FAQPage + 10 Question schemas emitting. **Content-depth counter: 4 → 5/20.**

---

## Baseline snapshot

| Source | Key numbers |
|---|---|
| GSC | 34/169 indexed. 128 "Crawled — not indexed". 0 clicks / 11 impressions today |
| Bing WMT | 173/197 indexed. 48 clicks / 2.4K impressions (3M). Top: "mh set 2026" @ pos 7.9 |
| **Bing AI Perf** | **722 citations in 7 days** — big sleeper hit |
| Ahrefs | DR 0. 295 refs (all spam). 100% nofollow. 0 organic traffic |
| GA4 (28d) | 594 views, 425 sessions. 26% direct, 24% ChatGPT, 8% Google, 3% Bing, 3% Perplexity |
| AdSense | Rejected 2026-07-07 for "Low value content" |
| Social | Quora: 6 answers live. Reddit: 1w old, 80 views on one r/Indiajobs comment. Medium: empty |

---

## Priority 1 — Traffic / Impressions (fastest wins)

Your fastest traffic gains are from three unlocked channels: LLM citations, social distribution, and near-miss ranking queries. Don't wait for Google indexing to fix — it won't for weeks.

### 1.1 Reddit (biggest untapped channel — start today)
One comment on r/Indiajobs already pulled 80 views on a 1-week-old account. Reddit is your fastest traffic lever.

**Weekly cadence:**
- 5 helpful comments/week across r/Indiajobs, r/india, r/UPSC, r/SSC, r/IndianDefence
- Each comment: 200+ words, actually answer the question, sarkaridarapan.com mention in last line only ("I run sarkaridarapan.com if you want to track all current openings")
- Never top-level post a link. Comments only. Never spam.
- Add subs: r/IndianAcademia, r/JEEmains, r/NEET, r/BankExams

**Warning:** Reddit karma below 100 gets shadow-banned. Grow karma with unrelated helpful comments too — tech, general India news. Aim for 100 karma by end of July.

### 1.2 Quora (already working — scale up)
6 answers is a start, not a finish. Bio and topic setup are correct.

**Weekly cadence:**
- 5 answers/week. Search "sarkari naukri", "SSC CGL preparation", "UPSC syllabus", "PM Kisan", "how to apply [scheme name]"
- Each answer: 300-500 words, structure like your best one on "best govt job site"
- Add 1 link per answer max, bottom of answer
- Follow 20 topics: Government Jobs, UPSC, SSC, Banking Exams, Indian Politics, Career Advice

Target: 25 answers by end of July → Quora starts showing your answers to logged-out Google users.

### 1.3 Medium (empty right now — activate this week)
Medium is DR 90+. A Medium article can outrank your own site for the same query within days.

**Play:**
- Republish 3 best-performing blog posts on Medium
- Set `<link rel="canonical">` to sarkaridarapan.com/blog/[slug] on each Medium repost
- Result: Medium's authority helps Google understand the sarkaridarapan post is the original, AND the Medium version can rank on its own for long-tail queries

**First 3 to repost:**
- /blog/agniveer-army-cee-result-2026-how-to-check (already your top GA4 landing)
- /blog/best-books-for-ssc-cgl-2026-tier-1-and-tier-2
- /blog/punjab-pcs-sdm-recruitment-2026

Add tags: India, Government Jobs, SSC, UPSC, Career.

### 1.4 Double down on LLM citations (722/week is a lot)
LLMs are your #2 traffic source after direct. Every content page must be citation-friendly.

**Do this on every page:**
- H2 first sentence must be self-contained ("The Maharashtra SET exam requires..." not "This exam requires...")
- Every dated stat gets inline attribution ("as of March 2026, per the Ministry of...")
- FAQPage JSON-LD schema (5-8 Q&A per page)
- One markdown comparison table per page where relevant

Bing shows LLMs love PMSBY, GATE 2027, Group 4 jobs, MH SET on your site — expand these first.

### 1.5 Telegram + WhatsApp channel push
You have `/admin/share` built. Use it. Every new content piece → post in Telegram + WhatsApp within 1 hour of publishing.

**Target:** 500 Telegram subs by end of August (currently unknown — check).

---

## Priority 2 — SEO (unlock Google indexing)

Google's "128 Crawled — not indexed" is choking organic. Same fix that solves AdSense rejection solves this.

### 2.1 Content depth pass on top 20 pages (weeks 1-2)
Pick top 20 by Bing impressions + top GA4 landings. For each, add:
- 400-600 words of unique analysis beyond notification bullets
- Worked example with real numbers (salary math, eligibility scenarios)
- "Common mistakes" section
- FAQ block with FAQPage JSON-LD
- Comparison table where it fits

After each batch of 5, submit via GSC URL Inspection → Request Indexing.

### 2.2 Fix Bing IndexNow errors
Bing flagged 2 high-severity IndexNow issues. Check `/api/indexnow` (or wherever the ping fires) and verify every publish is pinging Bing.

### 2.3 On-page optimization for near-miss queries
Bing shows these queries at position 5-15 with real impressions — one page-quality bump = position 3-5 = 3x clicks:

| Query | Current pos | Impressions | Action |
|---|---|---|---|
| mh set 2026 | 7.9 | 399 | Expand target page, add FAQ |
| mh set exam 2026 | 7.1 | 159 | Same |
| mh set 2026 registration date | 7.4 | 58 | Add step-by-step registration guide |
| gruha lakshmi scheme apply online | 9.1 | 13 | Full apply-online walkthrough |

For each: query in H1 + URL slug + title (within 50-65 char), 3+ semantic variations in body, internal links from 3+ pages using query as anchor.

### 2.4 Internal linking overhaul
Every job → link 3-5 related jobs. Every scheme → link 3-5 related schemes. Every blog → link 5-8 job/scheme pages. Cheap and Google eats it.

### 2.5 Trust pages audit (AdSense requirement + trust signal)
Verify these are quality, not template:
- About Us (real founder story)
- Contact (real email, form, address if possible)
- Privacy Policy (real GDPR/DPDP language)
- Terms of Use
- Disclaimer (educational, not affiliated with govt)
- Editorial Policy (how content is sourced)

### 2.6 Content velocity (ongoing)
Keep publishing. Target per week:
- 5 jobs
- 2 blog posts (result-check guides, salary breakdowns, comparison guides)
- 1 scheme
- 1 exam page

Every publish: humanizer pass + FAQPage JSON-LD + Telegram/WhatsApp share.

---

## Priority 3 — Domain Rating (kill the spam first, then build real)

Your DR is 0 because 100% of your 575 backlinks are toxic spam farms. You can't build DR on top of a poisoned foundation.

### 3.1 Disavow spam backlinks (Week 2)
Export Ahrefs → Referring Domains → CSV. Filter for:
- Any `.shop` / `.site` / `.website` marketing subdomain
- Any domain with "seo", "backlink", "rank", "guestpost"
- Any DR > 30 with zero own-site traffic

Build disavow file:
```
domain:itxoft-affordable-seo-solutions.site
domain:linkrankpro.shop
[...]
```

Submit at https://search.google.com/search-console/disavow-links-tool

### 3.2 Real backlinks (weeks 3-12)
Only pursue real links. Never buy links, never respond to "guest post" cold emails from `.shop` domains.

**Free / easy:**
- Free directory submissions: JustDial, Sulekha, IndiaMART (India-relevant only)
- Educational directory listings (EducationWorld, CollegeDunia listing page if relevant)
- HARO / Qwoted / SourceBottle: respond to reporter queries about Indian jobs, exams, schemes. Even one HT/TOI mention beats 100 spam links.

**Effort-based:**
- Guest posts on real education blogs (DR 20-50). Search "write for us" + SSC/UPSC/govt job. Pitch original guides.
- Answer high-view Quora questions (already doing this — links there count).
- Reddit karma → Reddit links count once you have real presence.

**Long-term:**
- Coaching institute link swap (Testbook, Adda247, Unacademy blogs) once you have real traffic to offer.
- Get quoted in Indian Express / HT / TOI education section.

**Target: DR 0 → 15 in 90 days.**

---

## Priority 4 — AdSense approval (unblock monetization)

Do NOT click "Request review" until Priority 2 is complete. Every rejection resets the clock.

### 4.1 Precondition checklist (must ALL be true before requesting review)
- 100+ pages indexed in GSC (currently 34)
- Top 20 pages materially expanded (Priority 2.1 complete)
- All 6 trust pages high-quality (Priority 2.5 complete)
- Disavow submitted (Priority 3.1 complete)
- FAQPage JSON-LD on 20+ pages
- Zero em dashes, AI vocabulary passes on top pages (humanizer clean)

### 4.2 When precondition met, submit re-review
- Check "I confirm I have fixed the issues"
- Wait 2-4 weeks
- If approved: immediately update `public/ads.txt` with real publisher ID (currently placeholder `pub-XXXXXXXXXXXXXXXX`)
- If rejected again: read the specific reason, fix, wait another 2 weeks minimum before re-review

**Expected window:** first re-review submission by end of July → approval by mid-August (best case).

---

## Priority 5 — Alternative ad networks (backup + parallel revenue)

You don't have to wait for AdSense. Some networks accept sites AdSense rejected. Apply in parallel once traffic hits 500 sessions/day.

### 5.1 Networks worth applying to
Ordered by approval likelihood for a site at your stage:

1. **Ezoic** — accepts small sites, no traffic minimum. Higher RPM than AdSense typically. Only downside: full site integration required.
2. **Media.net** — Yahoo/Bing network. Contextual ads. Accepts smaller sites than AdSense. Approval usually 3-5 days.
3. **PropellerAds** — pop-under and push notifications. Easy approval but hurts UX. Skip unless desperate.
4. **AdSterra** — similar to PropellerAds. Skip for now.
5. **Monetag** (formerly PropellerAds Premium) — cleaner formats. Consider.

### 5.2 Apply order (when Priority 1-2 delivered 500 sessions/day)
1. Media.net first (cleanest UX, easy approval)
2. Ezoic second (if Media.net rejects or after AdSense-Media.net stack tested)
3. AdSense re-review in parallel with above

**Do not stack more than 2 networks.** UX degrades fast, and Google penalizes ad-heavy sites.

### 5.3 Affiliate as revenue floor
While waiting on ad networks:
- Testbook / Adda247 / BYJU'S Exam Prep affiliate programs — banner on every job/exam page
- Amazon Associates for book links in blog posts ("best books for SSC CGL" → real Amazon links)
- Coaching institute referral partnerships (email pitch — needs traffic first)

---

## What to do this week (2026-07-07 → 2026-07-13)

Concrete daily plan, ordered by leverage:

**Monday**
- Post 1 helpful answer on Quora, 1 comment on Reddit (r/Indiajobs or r/UPSC)
- Republish top blog post on Medium with rel=canonical

**Tuesday**
- Expand 3 highest-Bing-impression pages (mh set 2026, mh set exam 2026, PMSBY guide)
- Add FAQPage JSON-LD to each

**Wednesday**
- Audit About/Contact/Privacy/Terms/Disclaimer pages — fix any template-quality copy
- Post 1 Quora + 1 Reddit comment

**Thursday**
- Export Ahrefs spam list. Build disavow file.
- Expand 3 more pages (SSC CGL guide, Agniveer result guide, Punjab PCS SDM)

**Friday**
- Submit disavow file to GSC
- Post 1 Quora + 1 Reddit comment
- Republish 2nd top blog on Medium

**Saturday**
- Add FAQPage JSON-LD to next 10 pages
- Fix IndexNow errors from Bing WMT

**Sunday**
- Submit re-indexing requests in GSC for all 6 upgraded pages
- Republish 3rd blog on Medium
- Weekly review: check GSC indexing delta, Bing AI citation delta, GA4 sessions delta

**NOT this week:** AdSense re-review, Ezoic/Media.net application, guest posts, HARO. Those need Priority 1-2 wins first.

---

## Rolling KPI dashboard (check weekly, every Sunday)

| Metric | 2026-07-07 baseline | 30-day target | 90-day target |
|---|---|---|---|
| Traffic (GA4 monthly sessions) | ~450 | 1,200 | 2,500 |
| Reddit karma | 1 | 100 | 500 |
| Quora answers live | 6 | 25 | 60 |
| Medium articles | 0 | 5 | 15 |
| Bing AI citations / 7 days | 722 | 1,200 | 2,000+ |
| GSC indexed pages | 34 | 80 | 150+ |
| GSC "Crawled — not indexed" | 128 | 60 | < 30 |
| Bing search clicks / 30 days | ~15 | 50 | 200 |
| Ahrefs DR | 0 | 5 | 15 |
| Real (non-spam) referring domains | ~5 | 15 | 40 |
| AdSense status | Rejected | Re-review submitted | Approved |
| Media.net | Not applied | Not applied | Applied + approved |

---

*Plan revised 2026-07-07 after adding Quora/Reddit/Medium context. Priority order: Traffic → SEO → DR → AdSense → alt-ads.*
