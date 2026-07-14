# SarkariDarapan Growth Plan

**Baseline: 2026-07-07** | Site: https://www.sarkaridarapan.com

Priority order (owner's preference):
1. Traffic / Impressions
2. SEO
3. Domain Rating
4. AdSense approval
5. Alternative ad networks (when AdSense-eligible)

## Progress log

**2026-07-14**
- ✅ **Ahrefs Site Audit second pass: 11 short-title pages fixed + soft-404 fallback rewrite.** Owner shared updated Ahrefs report after title-template fix landed. Report showed Health Score 100, 0 errors, and 6 new "Title too short" + 3 "Title too short (not indexable)" flags. Diagnosis: after removing the " | SarkariDarapan" template suffix earlier today, pages with < 30 char DB or bare titles fell below the Ahrefs too-short threshold. Root causes across the 11 flagged pages: (a) 9 entrance exams with 9-28 char DB titles ("CLAT 2026", "AIBE 2026", "CUCET 2026", "CUET UG 2026", "NEET PG 2026", "JEE Main 2027", "NMAT 2026 by GMAC", "NEET UG 2026 MCC Counselling", "IBPS PO 2026 (CRP PO/MT-XVI)"), (b) 1 scheme with 24 char DB title ("Ayushman Bharat (PM-JAY)"), (c) /search page with hardcoded "Search" (6 chars), (d) not-found fallbacks in 6 detail routes ("Job Not Found", "Scheme Not Found", "Entrance Exam Not Found", "Guide Not Found", "State Not Found", "Category Not Found") plus not-found.tsx "Coming Soon" (11 chars). Also found: 4 of the 10 DB pages had garbage 2000-char scraped descriptions (CLAT desc "CLAT 2026" 9 chars, AIBE / CUCET / CUET UG had scraped HTML noise); 5 others had 230-244 char descs over the 160 limit. Built `scripts/fix-short-titles.mjs` (dry-run mode + hardened validation for 50-65 title / 150-160 desc / no em-dash / no smart-quote / no AI vocab) that updated all 10 DB pages and revalidated each. New titles are keyword-first with commas as separators (no en/em dashes), all descriptions are clean humanizer-safe 150-160 char summaries. Code fixes for /search metadata (title now "Search SarkariDarapan: Government Jobs, Schemes, Exams" 54 chars) and 7 Coming Soon fallbacks (55-58 chars each, all set robots.index=false per owner's instruction to keep HTTP 200 with a "Coming Soon" pattern rather than proper 404s). TypeScript compile clean. **Requires Vercel deploy for the code changes**; DB updates are already live via revalidation.
- ✅ **Ahrefs Site Audit remediation: 4 broken internal links + title-too-long root cause fix.** Owner flagged 3 open Ahrefs issues at end of day: (1) 4 broken links on Agniveer Vayu, TNPSC Group 4, IB ACIO, LIC AAO pointing to `/blog/ssc-cgl-2026-preparation-guide` and `/blog/ssc-cgl-exam-preparation-guide-2026` (both 404). Correct target slug was `/blog/ssc-cgl-2026-syllabus-preparation-guide`. Built `scripts/fix-broken-ssc-cgl-links.mjs` (dry-run + live modes) that read all 4 job page bodies, replaced both broken slugs with the correct one, updated DB, and revalidated each page. Also patched 3 source scripts (`update-agniveer-vayu-2026.mjs`, `update-tnpsc-group-4-2026.mjs`, `update-lic-aao-2026.mjs`) so future re-shipping stays consistent. IB ACIO's source is `add-ib-acio-2026.mjs` (no ssc-cgl links, so DB-only fix suffices). All 4 pages now clean. (2) Ahrefs "Title too long" on 127 pages traced to root cause in `app/layout.tsx`: metadata title template was `%s | ${SITE_NAME}` (17 chars appended). Root causes: ~17 pages (categories, states, entrance-exams, blogs, schemes, admit-card, results, sarkari-yojana, sarkari-naukri, blog root, entrance-exams root, about/mahitosh-dey) manually append " | SarkariDarapan" in their own `title` fields, then the layout template appends again → **double suffix bug** ("SSC Government Jobs 2026: 5 Latest Openings | SarkariDarapan | SarkariDarapan"). Remaining ~110 pages (job and scheme detail pages) use bare DB titles at ~60 chars, then the template adds 17 chars → 77 chars rendered. **One-line fix**: changed template from `%s | ${SITE_NAME}` to `%s`. Homepage still branded via `default` metadata field. Internal pages now render clean titles matching Amazon/Wikipedia/most content-site conventions. TypeScript clean. **Requires Vercel deploy to take effect** (root layout is bundled at build time, not runtime-revalidatable). (3) 2 orphan 404 URLs auto-resolve once the 4 broken links are removed.
- ✅ **Fourth scheme page expansion (cluster complete): `/sarkari-yojana/mahtari-vandana-yojana-chhattisgarh` from 437 → 3,834 words (8.8x).** Closes the 4-state women cash-transfer cluster. Differentiated angle from siblings: **Mahtari Vandana is the only scheme in the cluster with a hard eKYC recompletion deadline** (June 30, 2026) that will suspend payments for existing beneficiaries who don't re-verify. Also uniquely restricts to married/widowed/divorced women only (no unmarried carve-out unlike Ladki Bahin's 21-25 amendment). Title changed from "Mahtari Vandana Yojana Chhattisgarh 2026: ₹1,000/Month for Women" (64 chars, non-ASCII ₹) to "Mahtari Vandana 2026: Rs. 1,000 Monthly for Chhattisgarh Women" (62 chars, ASCII-safe, keyword-first). Description hooks the eKYC deadline urgency (160 chars, exact limit). Sections added: at-a-glance with Vishnu Deo Sai March 1 2024 launch + Laxmi Rajwade minister + 70 lakh beneficiaries + Rs. 16,881 crore disbursed context, dedicated eKYC drive section (4 lakh stale-records trigger, June 30 2026 deadline, Gram Panchayat vs Ward Office channels), 5-condition eligibility 5-row table with married-only filter flagged as narrower than siblings, 3-category exclusion list plus 2 implicit exclusions from post-launch guidance, 6-document checklist with marriage/widowhood/divorce certificate specific requirements, Aadhaar seeding 3-channel verification, 9-step mahtarivandan.cgstate.gov.in walkthrough, 3 offline centre types with 51,000 Anganwadi coverage flagged, dedicated Completing eKYC before deadline section (Gram Panchayat Bhawan / Ward Office / Anganwadi channels), 4-stage post-application verification, 4-channel payment tracking, 4-cause missed-payment troubleshooting (adds a fourth cause: marital status change), **12-column 4-way state comparison table** (Mahtari Vandana vs Gruha Lakshmi vs Ladki Bahin vs Subhadra) with eKYC recompletion row as a differentiator, central schemes stacking (5 schemes cross-linked), political-story section (BJP won Nov 2023 CG assembly 54/90 seats, 100-day self-imposed launch deadline hit on day 78, Lok Sabha 2024 vote swing, Ladli Behna MP parallel documented), 10-Q FAQ (includes Mahtari Vandana vs Ladli Behna direct comparison Q), sources with 5 primary portals + 5 internal cross-links. **Humanizer clean from launch**: zero em/en dashes, zero smart quotes, zero banned AI vocab, zero bulleted-bold-labels, zero inline-bold-labels, zero For-**X**: opener. All validation clean in `scripts/update-mahtari-vandana-yojana-chhattisgarh.mjs`. LIVE + revalidated. Live-verified: 175 title mentions, 134 "eKYC" mentions (distinctive angle rendering), 66 "Rs. 1,000" mentions, 16 "Ladli Behna" MP cross-reference mentions, 8 "Vishnu Deo Sai" political context mentions, 2 FAQPage schemas emitting. **Content-depth counter: 17 → 18/20 (90%).** **4-page women cash-transfer cluster now complete**: Gruha Lakshmi Karnataka (3,974 words) + Ladki Bahin Maharashtra (3,966 words) + Subhadra Odisha (3,801 words) + Mahtari Vandana Chhattisgarh (3,834 words). **Total cluster content: ~15,575 words humanizer-clean, all bi-directionally cross-linked with comparison tables and related-pages footers, 4 FAQPage schemas emitting across cluster.**
- ✅ **Consistency fix on cluster comparison tables.** Post-Subhadra draft revealed that the earlier-shipped Gruha Lakshmi and Ladki Bahin comparison tables had imprecise Subhadra delivery cells ("DBT to Subhadra debit card (separate account)" and "DBT to Subhadra debit card"). Corrected to "DBT via Aadhaar-seeded account plus branded Subhadra RuPay card" in both scripts (matches the accurate mechanics described in the new Subhadra page: DBT lands in the beneficiary's existing account, RuPay card is issued separately for ATM/PoS spending). Both scripts re-shipped and revalidated. Word counts: Gruha Lakshmi 3,972 → 3,974, Ladki Bahin 3,962 → 3,966.
- ✅ **Third scheme page expansion: `/sarkari-yojana/subhadra-yojana-odisha` from 387 → 3,801 words (9.8x).** Third page in the women cash-transfer cluster after Gruha Lakshmi + Ladki Bahin. Differentiated angle from siblings: **Subhadra is the only major state cash-transfer with a physical branded RuPay debit card** issued in every beneficiary's name (SBI/BOI/PNB/Canara/UCO), plus a novel **digital transaction reward** (top 100 women per gram panchayat by card txn count get an extra Rs. 500/year). Title changed from "Subhadra Yojana Odisha 2026: ₹10,000/Year for 5 Years to Women" (62 chars, non-ASCII ₹) to "Subhadra Yojana 2026: Rs. 50,000 for Odisha Women in 5 Years" (60 chars, ASCII-safe with cumulative Rs. 50,000 hook that emphasises the total). Description with 21-60 age band + 2-tranche cadence + RuPay card hook (158 chars). Sections added: at-a-glance with Mohan Charan Majhi Sep 17 2024 launch + Pravati Parida minister attribution + Goddess Subhadra cultural framing, dedicated Subhadra RuPay card section (mechanics, issuing banks, additional benefits), digital transaction reward mechanics (5 lakh beneficiaries qualify per year), 4-condition eligibility 4-row table with NFSA-card-OR-income-cap flexibility flagged, 7-category exclusion list (5 at launch + 2 added January 2025 clarification), 7-document checklist with unmarried 21-25 carve-out, Aadhaar seeding 3-channel verification, 9-step subhadra.odisha.gov.in walkthrough, 4 offline centre types with Mo Seva Kendra highlighted (Odisha-specific), 4-stage post-application verification, 4-channel payment tracking, missed-tranche troubleshooting, **11-column 4-way state comparison table** (Subhadra vs Gruha Lakshmi vs Ladki Bahin vs Mahtari Vandana) with bi-annual-vs-monthly cadence, physical card, and digital reward columns as differentiators, central schemes stacking (5 schemes cross-linked, PMJDY note flagged for Subhadra card holders), political-story section (June 2024 election, first BJP govt in Odisha, 78/147 seats, 24-year BJD run ended, 100-day self-imposed launch deadline hit on day 97), 10-Q FAQ, sources with 5 primary portals + 5 internal cross-links. **Humanizer clean from launch**: zero em/en dashes, zero smart quotes, zero banned AI vocab, zero bulleted-bold-labels, zero inline-bold-labels, zero For-**X**: opener. All validation clean in `scripts/update-subhadra-yojana-odisha.mjs`. LIVE + revalidated. Live-verified: 42 "Subhadra card" mentions, 25 "digital transaction" reward section mentions, 30 "Rs. 5,000" tranche mentions, 25 "Mo Seva Kendra" offline coverage mentions, 6 "Mohan Charan Majhi" political context mentions, 2 FAQPage schemas emitting. **Content-depth counter: 16 → 17/20 (85%).** **Follow-up flagged**: the "DBT to Subhadra debit card (separate account)" cell in the shipped Gruha Lakshmi comparison table is imprecise (Subhadra is DBT to Aadhaar-seeded account + separate RuPay card issued for spending). Similarly Ladki Bahin says "DBT to Subhadra debit card" without the account nuance. Both worth a comparison-cell fix pass in a future edit for cluster consistency.

- ✅ **Second scheme page expansion: `/sarkari-yojana/majhi-ladki-bahin-yojana-maharashtra` from 348 → 3,962 words (11.4x).** Sibling cluster reinforcement after Gruha Lakshmi. Largest state cash-transfer scheme by beneficiary count (2.34 crore per Maharashtra WCD portal). Title changed from "Mukhyamantri Majhi Ladki Bahin Yojana Maharashtra 2026" (54 chars, buried "Ladki Bahin" keyword mid-string) to "Ladki Bahin Yojana 2026: Rs. 1,500 Monthly for Maharashtra Women" (64 chars, keyword-first ASCII-safe). Description rewritten with 21-65 age band + income cap + Nari Shakti Doot app hook (150 chars). Sections added: at-a-glance with Mahayuti launch context + Aditi Tatkare minister attribution, eligibility deep-dive 5-row table with upper-age-65 differentiator flagged (higher than MP/Odisha), 6-category exclusion list (income tax / GST / govt employee / constitutional office / 4-wheeler / 5-acre land / professional practice), 8-document checklist with unmarried 21-25 amendment carve-out, Aadhaar seeding verification via 3 channels, 9-step ladakibahin.maharashtra.gov.in walkthrough, dedicated Nari Shakti Doot app section (with fake-app warning), 3 offline centre types (Anganwadi / Setu / Aaple Sarkar), 4-stage post-application verification, 4-channel payment tracking, missed-payment troubleshooting, **2025 re-verification drive section** (5 lakh removals, 60-day appeal window, 15% appeal success rate), **10-column 4-way state comparison table** (Ladki Bahin vs Gruha Lakshmi vs Ladli Behna vs Subhadra) with bi-directional internal links, central schemes stacking (5 schemes cross-linked), political-story section (Nov 2024 assembly election, 230/288 Mahayuti seats, CSDS-Lokniti attribution, Rs. 2,100 unmet promise), 10-Q FAQ, sources with 6 primary portals + 5 internal cross-links. **Humanizer clean from launch**: zero em/en dashes, zero smart quotes, zero banned AI vocab, zero bulleted-bold-labels, zero inline-bold-labels, zero For-**X**: opener. All validation clean in `scripts/update-ladki-bahin-yojana-maharashtra.mjs`. LIVE + revalidated. Live-verified: 163 title matches, 58 "Rs. 1,500" mentions, 36 "Nari Shakti Doot" mentions, 19 "Mahayuti" context mentions, 2 FAQPage schemas emitting. **Content-depth counter: 15 → 16/20 (80%).**
- ✅ **Scheme page expansion: `/sarkari-yojana/gruha-lakshmi-yojana-karnataka` from 348 → 3,972 words (11.4x).** Direct target for the Bing near-miss query "gruha lakshmi scheme apply online" (pos 9.1, 13 impressions per Priority 2.3 table). Humanizer-clean from launch. Title changed from "Gruha Lakshmi Yojana Karnataka 2026: ₹2,000/Month for Women" (59 chars, had non-ASCII ₹ + hyphen-as-em risk) to "Gruha Lakshmi Yojana 2026: Rs. 2,000 Monthly for Karnataka Women" (64 chars, ASCII-safe). Description rewritten with concrete beneficiary count + Seva Sindhu portal hook (152 chars). Sections added: at-a-glance overview with Pancha Guarantees context (all 5 guarantees named), eligibility deep-dive as 4-row table with head-of-family rule flagged as strict, income tax / GST exclusion mechanics with PAN + GSTIN cross-check explained, Aadhaar bank seeding verification via 3 channels (bank app / *99*99*1# IVR / UIDAI portal), 9-step Seva Sindhu online walkthrough with Sakala 45-day guarantee flagged, 5 offline centre types (Grama One, Karnataka One, Bangalore One, Bapuji Seva Kendra, Nada Kacheri), 3-stage post-application verification flow (FCS + Income Tax + DWCD sanction), 4-channel payment tracking (Seva Sindhu, bank SMS, PFMS, service centre), missed-payment troubleshooting (Aadhaar seeding broken / ration card head change / treasury delay), 5 common rejection reasons with 30-day appeal path, **11-column 4-way state comparison table** (Gruha Lakshmi vs Ladki Bahin Maharashtra vs Subhadra Odisha vs Mahtari Vandana Chhattisgarh) with monthly amount / annual payout / beneficiary count / age / income cap / marital status / head rule / launch date / delivery mechanism / portal side-by-side, central schemes stacking guide with 5 cross-referenced schemes (PMSBY internal link, PMJJBY, PMMVY, APY, PMJDY), Pancha Guarantees political context with fiscal criticism (no unverified academic cites), 10-Q FAQ, sources with 6 primary portals + 5 internal cross-links. **Humanizer clean from launch**: zero em/en dashes, zero smart quotes, zero banned AI vocab (caught 1 "actually" in draft, rewrote), zero bulleted-bold-labels, zero inline-bold-labels, zero For-**X**: opener. All validation clean in `scripts/update-gruha-lakshmi-yojana.mjs`. LIVE + revalidated. Live-verified: 38 title matches, 64 "Rs. 2,000" mentions, 40 "Seva Sindhu" mentions, 6 "1.28 crore" attribution mentions, 2 FAQPage schemas emitting. **Content-depth counter: 14 → 15/20 (75% of AdSense re-review precondition).**

**Priority 2 (SEO near-miss query targeting) + cluster reinforcement (women cash-transfer schemes) advanced. Content-depth counter reaches 90% of 20-page threshold. Four-page mutual internal linking cluster now live: Karnataka Gruha Lakshmi + Maharashtra Ladki Bahin + Odisha Subhadra + Chhattisgarh Mahtari Vandana. Combined ~15,575 words of humanizer-clean content across four high-search-intent state schemes with cross-comparison tables and bidirectional related-page links. This is the largest single-day content push in the site's history by a factor of 5x on prior days.**

**2026-07-13**
- ✅ **Source blog `/blog/government-jobs-vs-private-jobs-india-2026` cleaned + FAQ added.** Follow-up from 2026-07-10 note that pre-humanizer 2026-06-04 publish still had em dashes and inline-header bold. Rewrote humanizer-clean: 2,175 → 2,792 words. Em dashes 52 → 0, en dashes 11 → 0, bulleted bold labels 15 → 0. Description 159 (with hyphen-as-em-dash + abrupt "so you can." cutoff) → 154 chars clean. Added 8-question FAQ block so FAQPage JSON-LD now emits (was previously empty on this blog). All humanizer + em/en-dash + length validation clean in `scripts/update-govt-vs-private-blog.mjs`. LIVE in Supabase, on-demand revalidated. Live-verified: "who really pays more" appears 3x, 2 FAQPage schemas emitting. Site now matches Medium #4 repost quality.
- ✅ **New job page expansion: `/sarkari-naukri/indian-air-force-agniveer-vayu-2026` from 747 → 3,487 words (4.7x).** Direct Bing AI top-citation target (Agniveer cluster is #2 LLM-cited on site). Humanizer-clean from write. Added: 1:250 selection ratio hook, 3-trade-group breakdown with typical postings, vacancy history 2023-2026, dual eligibility (age + marital + physical), 7-step CDAC application flow, 4-stage selection (Phase 1 written + PFT + medical + Adaptability), gender-differentiated PFT standards, medical detail (vision/hearing/chest/BMI), Seva Nidhi math (Rs. 10.04 lakh breakdown), 4-way comparison table (Vayu vs Army CEE vs Navy SSR), 3-6 month prep timeline with section-wise books, 10-Q FAQ, sources + 4 internal cross-links (Agniveer Army CEE Result, SSC CGL, Govt vs Private, IB ACIO). All humanizer + em/en-dash + length validation clean in `scripts/update-agniveer-vayu-2026.mjs`. LIVE + revalidated. **Content-depth counter: 11 → 12/20.**
- ✅ **Bonus content-depth: `/sarkari-naukri/lic-aao-2026` from 1,778 → 4,199 words (2.4x).** Prompted by today's GSC 24h check showing `aao job` as top query (5 impressions, position 5.1, 0 clicks). LIC AAO 2026-27 notification is expected August to September 2026, so depth push now targets pre-notification search spike. Humanizer-clean from write. Added: 1 in 500 Generalist selection ratio hook, expanded vacancy history 2019-2026 including 32nd Batch stream split, dedicated H3 subsections for each of 7 streams (Generalist, Insurance Specialist, CA, CS, Legal, Actuarial, Assistant Engineer) with post-specific posting condition and career progression detail, expanded expected 2026-27 dates timeline (Prelims through joining), 8-step IBPS-managed application flow, 4-stage selection (Prelims qualifying + Mains 300+25 + Interview 60 + Medical), full salary breakdown table with DA/HRA/CCA components, 7-grade LIC cadre progression to Executive Director, 4-month Prelims-first prep timeline with Insurance Awareness section flagged (60 marks, most-common cost of ranks), LIC AAO vs SBI PO vs UPSC EPFO vs SEBI Grade A 10-row comparison table, 6 common mistakes (wrong stream application, insurance section under-prep, bond consequences, mofussil posting), 10-Q FAQ, sources + 5 internal links (SEBI, IRDAI, UPSC EPFO, SSC CGL, Govt vs Private). All validation clean in `scripts/update-lic-aao-2026.mjs`. LIVE + revalidated. **Content-depth counter: 13 → 14/20.**
- ✅ **New job page expansion: `/sarkari-naukri/tnpsc-group-4-2026` from 614 → 3,573 words (5.8x).** Bing AI top-citation target ("Group 4 jobs" was in top-cited Bing AI list). Humanizer-clean from write. Added: 1:300 selection ratio hook, CCSE ladder context (Group 1 through 4), 11-post table with vacancy distribution, vacancy history 2019-2026, category-wise age table (General 32, BC/MBC 35, SC/ST 42), Tamil Nadu domicile + nativity certificate detail, 9-step OTR application flow, 200-mark exam pattern breakdown, typewriting speed test (30 wpm Tamil / 40 wpm English), detailed Ilakkanam + Ilakkiyam syllabus, salary table with DA + HRA breakdown, 6-rank career progression to Section Officer, 4-month prep timeline with dedicated Tamil-medium vs English-medium strategy, TNPSC Group 4 vs Group 2 vs SSC MTS comparison, 6 common mistakes (Tamil under-prep, preference order, OTR timing), 10-Q FAQ. All validation clean in `scripts/update-tnpsc-group-4-2026.mjs`. LIVE + revalidated. **Content-depth counter: 12 → 13/20.**
- ✅ **Fifth Medium repost live**: [Top 10 Government Jobs After Graduation in India 2026: A Practical Guide](https://medium.com/@mahidey420/top-10-government-jobs-after-graduation-in-india-2026-a-practical-guide-0e8ccd9663d2) — mirrors `/blog/top-10-govt-jobs-after-graduation-2026`. Broad-audience career-decision content (like Medium #4 govt-vs-private was). 2,288-word plain-text version at `blog-drafts/medium-top-10-govt-jobs-graduation-2026.md`. **Rewrote without markdown tables** on second pass (Medium's editor does not render pipe tables, so all detail rows converted to prose paragraphs plus a "Quick summary" section with one-line-per-job paragraphs). Byline paragraphs at top and bottom link back to sarkaridarapan.com. **Canonical URL set** to sarkaridarapan.com/blog/top-10-govt-jobs-after-graduation-2026 in Medium Story Settings. **Shared on Telegram (`@sarkaridarapaninfo`) + WhatsApp channel** for initial algo signal (same 2-step pattern as Agniveer / SSC / Punjab / Govt-vs-Private reposts). **Medium article count: 4 → 5 — 30d target of 5 Medium reposts HIT (target was 15 by 90d).**
- ✅ **Medium #4 canonical URL set** on retroactive follow-up. [Government Jobs vs Private Jobs](https://medium.com/@mahidey420/government-jobs-vs-private-jobs-in-india-an-honest-comparison-for-2026-75fa3ff6d4b2) canonical now → sarkaridarapan.com/blog/government-jobs-vs-private-jobs-india-2026. Google will credit sarkaridarapan.com as source on next crawl (typically 2 to 5 days for Medium articles).
- ✅ **Quora answer posted (10 total live)**: [How do I join Agniveer?](https://qr.ae/pFkHD8) — 829-word 5-step application guide (basic eligibility → pick entry → register on correct portal → understand 4-year contract → prepare for written + PFT). Pivoted from decision-framework opener to application-guide opener after picking the zero-answer main question on Quora. **First answer on the thread** (highest visibility potential — no competing answers). Double-links back to Agniveer Vayu 01/2026 (just expanded to 3,487 words) and Agniveer Army CEE Result blog. Humanizer-clean: zero em/en dashes, zero smart quotes, zero banned AI vocab. **Quora count: 9 → 10 (target 25 by end of July, 60 by 90d).**
- 📊 **Site-wide em dashes still in nav/subtitle components** (not per-page content). Live-verified 5 em dash hits on cleaned govt-vs-private page all in `Sarkari Naukri — Latest government job notifications`-style nav subtitles + construction page banner. Layout component cleanup deferred as separate task (not per-page work).

**Priority 1 (Traffic) + Priority 2 (SEO content depth) both moved forward today.** 30d Medium target hit. Content-depth counter reaches 65% (13/20) of AdSense re-review precondition. Quora at 9/25 for end-July target (Quora #10 draft ready but not yet posted).

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

**2026-07-10**
- ✅ **Quora answer posted (9 total live)**: [At 23, should an RRB clerk choose the CAT or regulatory exams for a better lifestyle?](https://qr.ae/pF4laX) — 458-word structured decision-framework answer for a 23-year-old RRB clerk (Yogesh) weighing CAT/MBA vs SEBI/IRDAI/RBI Grade B/UPSC EPFO. Directly leverages today's shipped content: linked back to IRDAI Assistant Manager 2026, SEBI Grade A 2026, UPSC EPFO 2026, and the Medium repost #4 "Government Jobs vs Private Jobs" as the meta-framework. **4 backlinks to sarkaridarapan.com from a single Quora answer, all pointing at content shipped in the last 48 hours.** Argument: at 23 with existing central government service, regulator route (4-6 month prep + joining at 24) beats CAT+MBA (4-year timeline + 27 at fresher package) on lifestyle anchor; syllabus overlap across SEBI + IRDAI + EPFO means prep-once-attempt-all-three is highest-probability path. Humanizer-clean: zero em/en dashes, zero smart quotes, zero banned AI vocab. **Quora count: 8 → 9 (target 25 by end of July, 60 by 90d).**
- ✅ **Fourth Medium repost live**: [Government Jobs vs Private Jobs in India: An Honest Comparison for 2026](https://medium.com/@mahidey420/government-jobs-vs-private-jobs-in-india-an-honest-comparison-for-2026-75fa3ff6d4b2) — mirrors `/blog/government-jobs-vs-private-jobs-india-2026`. Broadest-audience Medium pick so far (attracts both govt-job aspirants AND private-sector readers curious about the comparison, vs the niche-audience Agniveer / SSC CGL Books / Punjab PCS earlier reposts). 2,122 words plain-text version at `blog-drafts/medium-govt-vs-private-2026.md` humanizer-cleaned meaningfully from the pre-humanizer source blog (removed ~30 em dashes, 15+ inline-header bold labels, curly quotes, and signposting artifacts). Byline paragraphs top and bottom link back to sarkaridarapan.com. **Medium article count: 3 → 4 (target 5 by 30d, 15 by 90d).** **Follow-ups needed**: (a) set canonical URL to `https://www.sarkaridarapan.com/blog/government-jobs-vs-private-jobs-india-2026` in Medium Story Settings so Google credits source, (b) share on Telegram + WhatsApp channels for initial algo signal (same 2-step pattern as Agniveer/SSC/Punjab reposts), (c) source blog `/blog/government-jobs-vs-private-jobs-india-2026` still has em dashes and inline-header bold overuse from its 2026-06-04 pre-humanizer publish; worth a cleanup pass in a future session so on-site content matches Medium quality.
- ✅ **New job page live**: [/sarkari-naukri/aiims-nursing-officer-2026](https://www.sarkaridarapan.com/sarkari-naukri/aiims-nursing-officer-2026). **Sixth and final gap-audit page — the audit is fully closed.** Different cluster (health/medical, not the financial-regulator cluster). **3,214 words** built humanizer-clean from launch. Covers AIIMS Nursing Officer via NORCET, the annual common exam AIIMS Delhi conducts for all 20+ AIIMS in India. Structure: overview with 3,036 vacancies 2024 baseline and 1:150 selection ratio, expected 2026 dates, participating AIIMS list (Delhi + 20+ others), Grade B nursing officer duty scope, vacancy history (2022 1,600 to 2024 3,036), age/education eligibility (B.Sc Nursing OR Post-Basic B.Sc OR GNM Diploma + INC-recognised institution + State Nursing Council registration mandatory) as prose paragraphs (not bulleted-bold-label), Rs. 3,000 fee (higher than ESIC/RRB nursing), 7-step aiimsexams.ac.in apply flow with AIIMS preference-ranking guidance, 3-stage selection (NORCET Stage 1 200 marks screening + Stage 2 200 marks merit + counselling with no interview), salary Rs. 44,900 basic + Rs. 7,200 Nursing Allowance = Rs. 80-88K gross Class X, 6-rank career progression from Nursing Officer to Nursing Director, 4-month prep timeline with medical-surgical nursing as the 40-question merit-determining section, section-wise book recommendations (Lewis, Brunner Suddarth, Wong Pediatric, K. Park Preventive Med, Sreevani Psychiatric, Rakesh Kumar Sharma question bank), Focus areas prose paragraphs, 4-way comparison table (AIIMS NO vs ESIC vs DSSSB vs RRB Nursing Superintendent), 6 common mistakes (preference ranking + Stage 1 to Stage 2 gap traps), 10-Q FAQ, sources with 4 primary + internal links to SSC CGL, Agniveer Army, UPSC EPFO. **Humanizer clean from launch**: zero em/en dashes, zero smart quotes, zero banned AI vocab, zero §16 strict, zero §15/§16 hybrid, zero For-**X**: opener (all 3 hardened regexes passed). Auto-generated `<title>` needed post_name shortened from "AIIMS Nursing Officer" (21 chars) to "AIIMS NORCET" (12 chars) — renders as "AIIMS NORCET 2026: 3,000 Vacancies | Apply by 10 Apr" (52 chars, no truncation). FAQPage JSON-LD emitting with 13 Questions. **Content-depth counter: 10 → 11/20.** **Gap-audit content push complete for the day**: 3 pages shipped (IB ACIO + UPSC EPFO + IRDAI Grade A + AIIMS NORCET, total 4 across the day counting the earlier IB ACIO commit), all humanizer-clean, all cross-linked.
- ✅ **New job page live**: [/sarkari-naukri/irdai-assistant-manager-2026](https://www.sarkaridarapan.com/sarkari-naukri/irdai-assistant-manager-2026). Fifth of the gap-audit high-search-intent job pages and third of today's push. **3,744 words** built humanizer-clean from launch (largest page in the whole cluster). Closes the financial-regulator cluster (SEBI + RBI + EPFO + IRDAI). Covers IRDAI Assistant Manager Grade A recruitment across all 7 streams (Generalist, Legal, Actuarial, Finance, Accounts, IT, Research). Structure: overview with 1:2,000 selection ratio hook, expected 2026 dates, common-across-streams duty breakdown, 7 real ### H3 subsections for each stream (learned from EPFO §15/§16 lesson — no bulleted-bold-label patterns), vacancy history (2016 25 to 2023 45), age eligibility, stream-by-stream educational floor as prose paragraphs (not the EPFO "For **X**:" opener pattern), Rs. 750 fee, 7-step irdai.gov.in Careers apply flow, 3-stage selection (Phase 1 160-mark objective 4 sections + Phase 2 300-mark 3-paper mix + Interview 100 marks) with Paper 2 common + Paper 3 stream-specific breakdown, salary Rs. 44,500 basic to Rs. 1.25 lakh gross to Rs. 90,000 in-hand, 9-grade career progression table with within-cadre path to Chairman note (contrast with EPFO CPFC-goes-to-IAS ceiling), 4-month prep timeline, section-wise book recommendations by stream, Phase 2 descriptive writing prep, 4-way regulator comparison table (IRDAI vs RBI Grade B vs SEBI Grade A vs UPSC EPFO), 6 common mistakes, 10-Q FAQ, sources with 4 primary + internal links to SEBI / EPFO / IES ISS / IB ACIO. **Humanizer clean from launch**: zero em/en dashes, zero smart quotes, zero banned AI vocab, zero §16 strict, zero §15/§16 hybrid (learned from EPFO), zero "For **X**:" opener (learned from EPFO), sentence case headings. **Hardened pre-insert gate**: `scripts/add-irdai-assistant-manager-2026.mjs` includes three new validation patterns beyond the old regex — bulleted-bold-label regex and For-**X**: regex added as codified lessons from the 2026-07-10 EPFO audit. **Content-depth counter: 9 → 10/20 (halfway).** Auto-generated `<title>` renders as "IRDAI Assistant Manager 2026: 50 Vacancies | Apply by 31 Jul" (60 chars, no truncation). FAQPage JSON-LD emitting with 13 Questions.
- ✅ **Post-launch humanizer audit + fix pass** on the two 2026-07-10 job pages. IB ACIO 2026 verdict: CLEAN (3 mild tells across 3,196 words — under the human-writing false-positive floor, no rewrites). UPSC EPFO 2026 verdict: MINOR (2 §15/§16 bulleted-bold-label clusters that evaded the automated regex because the colon sat outside the bold). Fixed inline: (a) Education section "For **Enforcement Officer (EO)**:" and "For **Accounts Officer (AO)**:" converted to real prose paragraphs; (b) Focus areas for high scores 4-bullet block "**Labour Laws section**", "**Social Security schemes**", "**Current Affairs**", "**General Accounting**" rewritten as 4 prose paragraphs. New draft word count 3,401 → 3,425. Updated Supabase content field + revalidated. Live-verified: prose line "The Labour Laws section carries 15 to 20 marks..." emitting, `<strong>Labour Laws section</strong>` zero matches. **Lesson: added `bulleted-bold-label` regex `^\\s*-\\s*\\*\\*[^*\\n]+\\*\\*` to the humanizer audit script for future pages — catches §15/§16 hybrid patterns that the current pre-insert `^\\s*-?\\s*\\*\\*[^*\\n]+:\\s*\\*\\*` regex misses.**
- ✅ **New job page live**: [/sarkari-naukri/upsc-epfo-2026](https://www.sarkaridarapan.com/sarkari-naukri/upsc-epfo-2026). Fourth of the gap-audit high-search-intent job pages. **3,401 words** built humanizer-clean from draft phase (largest page so far). Covers UPSC EPFO combined recruitment for Enforcement Officer (EO) + Accounts Officer (AO), Group B Gazetted, Level 8 pay. Structure: overview with selection-ratio hook (1:950 combined, AO qualification-bar filter), expected 2026 dates, EO field-inspector vs AO accounts-officer duty split, vacancy history (2016 250 to 2023-24 577), age/education/nationality eligibility (dual education floor: any Bachelor's for EO vs CA/CMA/SAS certification required for AO), Rs. 25 application fee (lowest across UPSC), 7-step UPSC OTR flow with dual-preference option, 2-stage selection (Recruitment Test 120 marks + Interview 100 marks at 75-25 weightage) with 10-section subject-weight table, salary breakdown Rs. 47,600 basic to Rs. 90,000 gross to Rs. 70,000 in-hand, 6-rank career progression table EO/AO to CPFC with cadre ceiling note (CPFC typically IAS deputation), 4-month prep timeline emphasising Labour Laws + Social Security sections as merit differentiators, section-wise book recommendations including bare acts of EPF Act 1952, 12-row UPSC EPFO vs SSC CGL vs SEBI Grade A comparison table, 6 common mistakes (including 2020 Labour Codes interview trap), 10-Q FAQ, sources with internal links to SEBI / IES ISS / SSC CGL / IB ACIO for cross-cluster reinforcement. **Humanizer clean from launch**: zero em/en dashes, zero smart quotes, zero banned AI vocab (caught 1 "actually" in draft H2, rewrote to "day to day"), zero inline-header bold labels, sentence case headings across 25 headings. Auto-generated `<title>` renders as "UPSC EPFO 2026: 500 Vacancies | Apply by 05 Sep" (55 chars, no truncation). FAQPage JSON-LD emitting with 13 total Questions (10 markdown + 3 auto). **Content-depth counter: 8 → 9/20.**
- ✅ **New job page live**: [/sarkari-naukri/ib-acio-2026](https://www.sarkaridarapan.com/sarkari-naukri/ib-acio-2026). Third of the four gap-audit high-search-intent job pages (SEBI + IES ISS filled yesterday). **3,196 words** built humanizer-clean from the draft phase. Covers IB ACIO Grade II Executive under Ministry of Home Affairs (India's internal intelligence agency). Structure: overview with selection-ratio hook (1:1,500 vs SSC CGL 1:500 and CAPF AC 1:400), expected 2026 dates, ACIO field-and-desk duties breakdown, vacancy history table (1,430 in 2017 to 995 in 2024-25), age/education/nationality eligibility, dual application fee structure (Rs. 100 exam + Rs. 400 processing), 6-step MHA portal apply flow, 3-tier selection (Tier 1 objective 100 marks with 85-90 UR cutoff, Tier 2 descriptive 50 marks with 33% qualifying floor, Tier 3 interview 100 marks) with weightage breakdown (40/20/40), salary breakdown Rs. 44,900 basic + 20% Special Security Allowance (IB-unique) to Rs. 55-65K in-hand, 9-rank career progression table from ACIO II to Director IB, 6-month prep timeline with month-by-month milestones, section-wise book recommendations, Tier 2 essay + interview prep tactics, 12-row IB ACIO vs SSC CGL vs CAPF AC comparison table, 6 common mistakes, 10-Q FAQ, sources with internal links to SSC CGL / SEBI Grade A / UPSC IES ISS / SSC CGL preparation guide. **Humanizer clean from launch**: zero em/en dashes, zero smart quotes, zero banned AI vocab, zero inline-header bold labels, real ### subheadings for every logical subsection, sentence case headings (fixed 3 title-case tier headings pre-insert). Auto-generated `<title>` renders as "IB ACIO 2026: 1,000 Vacancies | Apply by 20 Dec" (65 chars, no truncation after post_name shortened from "IB ACIO Grade II Executive" to "IB ACIO"). FAQPage JSON-LD emitting with 13 total Questions (10 from markdown + 3 auto-templated). **Content-depth counter: 7 → 8/20.** Remaining gap-audit pages: UPSC EPFO 2026, AIIMS Recruitment, IRDAI Assistant Manager 2026.

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
- ✅ **Content gap audit built** (`scripts/audit-content-gaps.mjs`). Checked 26 high-search-intent Indian govt job/scheme/exam topics against the DB. Found **6 gaps**: SEBI Grade A 2026 (filled today), UPSC EPFO 2026, UPSC IES ISS 2026, IB ACIO 2026, AIIMS Recruitment, IRDAI Assistant Manager 2026. Baseline content counts: 68 jobs (66 active), 30 exams, 46 blogs, 47 schemes.
- ✅ **New job page live**: [/sarkari-naukri/sebi-grade-a-2026](https://www.sarkaridarapan.com/sarkari-naukri/sebi-grade-a-2026). Built content-depth from launch (**2,660 words**), not thin. Full structure: overview, dates, streams/vacancies (with 1:2,000 vs 1:500 selection-ratio insight for General vs niche streams), stream-wise eligibility table, application fee, 6-step application flow, 3-phase selection process (Phase 1 200 marks / Phase 2 300 marks / Interview 100 marks), salary breakdown Rs. 44,500 basic → Rs. 1.35-1.45 lakh gross, career progression to Whole-Time Member, phase-wise + stream-wise prep strategy, SEBI vs RBI Grade B comparison table, common mistakes, 10-Q FAQ, sources with internal links to RBI Grade B / IBPS PO / SBI PO / banking books blog. **Humanizer pass applied**: fixed 7 AI-tell patterns (superficial -ing analysis in intro, 6 inline-header bold labels converted to real ### subheadings, career-progression fragmented header merged, "significantly better" weak hedge replaced with concrete 2x ratio). Auto-generated `<title>` renders as "SEBI Grade A 2026: 100 Vacancies | Apply by 15 Sep" (50 chars, clean). **Content-depth counter: 5 → 6/20.**
- ✅ **New job page live**: [/sarkari-naukri/upsc-ies-iss-2026](https://www.sarkaridarapan.com/sarkari-naukri/upsc-ies-iss-2026). Second high-search-intent gap filled today. **2,943 words** built with humanizer rules applied from the draft phase (not retrofitted). Covers both Indian Economic Service (IES) and Indian Statistical Service (ISS) under one page since UPSC issues a combined notification. Structure: overview with selection-ratio hook (1:100 IES / 1:150 ISS vs 1:800 CSE), dates, service-by-service ministry postings, vacancies with 2023-2025 reference table, service-specific eligibility (Master's in Economics for IES / Statistics Bachelor's or Master's for ISS), 6-step application, exam pattern (6 papers over 3 days, 1000 marks + 200 interview), syllabus focus per service with named textbooks (Varian, Blanchard, Musgrave, Krugman, Rohatgi, Cochran, Gujarati), salary breakdown Rs. 56,100 basic → Rs. 1.05-1.20 lakh gross, career progression to Apex Scale, prep strategy per paper, IES/ISS vs UPSC CSE comparison table (13 rows), common mistakes, 10-Q FAQ. **Humanizer clean from launch**: zero em/en dashes, zero smart quotes, zero banned AI vocab, zero inline-header bold labels, real ### subheadings for every logical subsection. Auto-generated `<title>` renders as "UPSC IES ISS 2026: 50 Vacancies | Apply by 15 Oct" (49 chars). Cross-links to SEBI Grade A + RBI Grade B create a strong Grade-A-financial-services internal cluster. **Content-depth counter: 6 → 7/20.**
- 📊 **Backlink strategy documented** and Connectively (Cision's HARO successor) account signed up as passive channel. Full 90-day playbook: (a) journalist sourcing platforms — Qwoted, Featured.com, Connectively; (b) original research + reporter outreach; (c) broken-link building on Indian edu sites; (d) roundup outreach ("best sarkari naukri sites" lists); (e) educational institution `.edu.in` outreach. Target: 19-33 real backlinks in 90 days, DR 0 → 15-20. **Explicitly ruled out (spam/dead tactics)**: press releases (PRLog/OpenPR — dead since 2013 penalty), Wikipedia external links (nofollow, excluded from DR), Indiblogger/BlogAdda directories (inactive since 2019), paid links/PBNs.
- ⚠️ **Qwoted signup failed twice** — first with mahidey420@gmail.com (personal-email block), then with contact@sarkaridarapan.com ("already taken" from a partial earlier registration). Support email drafted and sent to `support@qwoted.com` asking to delete both accounts for a clean re-registration. Response expected 24-48h.
- ✅ **Connectively (Cision) account fully set up**: Expert Page complete (Mahitosh Dey, Founder at SarkariDarapan, LinkedIn linked, 145-word bio positioning as expert on Indian govt recruitment / civil services / schemes / employment trends, 10 expertise topics tagged, website https://www.sarkaridarapan.com). Purpose set to "Get Featured". 3 keyword alerts configured (Government Notifications, Government Schemes, Employment Trends — swapped out the default weak Latest Jobs / Job Alerts / Job Fairs). **Free tier limitation surfaced**: only 3 answers/pitches allowed. Two live-feed searches ("India", "government") returned 0 legitimate India-govt-jobs matches out of 678 open questions. Verdict: Connectively is a low-volume passive channel for this niche (0-1 usable match per week expected). Use only for daily email alerts on the 3 keywords, don't burn time actively searching the dashboard.

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
