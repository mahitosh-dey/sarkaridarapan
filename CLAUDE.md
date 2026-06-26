# SarkariDarapan — Project Guide for Claude Code

## HARD RULES — Non-Negotiable

**NEVER run `git push`, `vercel deploy`, or any deployment command without explicit permission from the owner.**
Ask first, every single time, with no exceptions — even if the change looks small or safe.

---

## What This Project Is

**SarkariDarapan** is an Indian government jobs & schemes portal at **https://www.sarkaridarapan.com**

The owner's goal is to earn money through **Google AdSense** and affiliate marketing by ranking on Google for "sarkari naukri", "sarkari yojana", and related Hindi/English keywords.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Database | Supabase (PostgreSQL) |
| Styling | Tailwind CSS |
| Hosting | Vercel |
| Analytics | Google Analytics 4 (G-4ZZ6SQH1J1) |
| Search | Google Search Console + Bing Webmaster Tools |

**Key environment variables** are in `.env.local` — never commit this file.

---

## Site Structure

| Route | What It Is |
|---|---|
| `/sarkari-naukri/[slug]` | Government job detail pages |
| `/sarkari-yojana/[slug]` | Government scheme detail pages |
| `/entrance-exams/[slug]` | Entrance exam detail pages |
| `/blog/[slug]` | Blog/guide articles |
| `/category/[category]` | Jobs by category (SSC, UPSC, Railway, etc.) |
| `/state/[state]` | Jobs by state |
| `/admin/quality-check` | Main admin — add/approve jobs, schemes, exams |
| `/admin/posts` | View and manage all published content |
| `/admin/share` | Compose and copy posts for Telegram/WhatsApp |
| `/admin/blog` | Blog post editor |

---

## Database Tables

| Table | Purpose |
|---|---|
| `jobs` | Government job postings |
| `schemes` | Government schemes (yojana) |
| `entrance_exams` | Entrance exam notifications |
| `blog_posts` | Blog articles |

**Important column notes:**
- All tables use `is_active` (boolean) to control visibility — not `status`
- `blog_posts` uses `is_active`, NOT a `status` column
- `schemes` and `entrance_exams` do NOT have a `last_date` column (only `jobs` does)
- Jobs use `vacancies` (not `vacancy_count` or `total_vacancies`)

---

## Content Count (as of 2026-06-11)

| Type | Count | Target |
|---|---|---|
| Jobs | **60** ✅ | 50 |
| Schemes | **33** ✅ | 20+ |
| Blog posts | **32** ✅ | 15+ |
| Entrance Exams | **30** ✅ | 15+ |

**Still missing (exams):** RRB Group D 2026 exam page (low priority).

---

## What Has Been Done

### Infrastructure ✅
- Next.js 14 site with full admin panel
- Supabase DB with jobs/schemes/exams/blogs tables
- Sitemap, robots.txt, RSS feed, JSON-LD structured data
- Google Search Console verified + sitemap submitted
- Bing Webmaster Tools verified + sitemap submitted
- Google Analytics 4 installed
- IndexNow configured for instant Bing indexing
- OG meta tags fixed — all pages now show image preview when shared
- ads.txt in place (has placeholder publisher ID — see warning below)

### Content ✅
- 50 jobs — fully audited, no HTML garbage, correct dates
- 25 schemes — all active, mix of central and state government
- 17 blog posts — published and active
- 5 entrance exams

### Social Channels ✅
- Telegram: https://t.me/sarkaridarapaninfo
- WhatsApp Channel: https://whatsapp.com/channel/0029VbCHYsIDeON1dKiWuk1A
- All social icons in site footer (Telegram + WhatsApp only — Facebook removed intentionally)
- Join CTA added on every job and scheme detail page

### Admin Tools ✅
- `/admin/quality-check` — add/approve/generate content
- `/admin/share` — select any job/scheme/exam/blog → auto-generates post → copy → paste into Telegram/WhatsApp

---

## Vision

**Short term:** Get Google AdSense approved → start earning ad revenue
**Medium term:** Grow traffic via Telegram/WhatsApp channel sharing, add 10+ entrance exams, grow blogs to 30+
**Long term:** Telegram paid alert subscriptions, affiliate banners (Testbook, Unacademy, BYJU's), sponsored posts from coaching institutes

---

## Next Steps (In Priority Order)

### 1. Monitor GSC Indexing (Ongoing)
Check Google Search Console → Indexing → Pages.
**Gate for AdSense:** Need 20+ pages indexed before applying.
Currently indexing in progress — check every few days.

### 2. Apply for Google AdSense (When 20+ pages indexed)
- Apply at https://www.google.com/adsense
- Use email: mahidey420@gmail.com
- Site: https://www.sarkaridarapan.com
- After approval: immediately update `public/ads.txt` with real publisher ID

### 3. Fix ads.txt After AdSense Approval ⚠️ CRITICAL
`public/ads.txt` currently contains `pub-XXXXXXXXXXXXXXXX` (placeholder).
After AdSense approval, replace with real publisher ID or AdSense revenue won't work.
File location: `/public/ads.txt`

### 4. Add 10 Entrance Exams (Biggest Content Gap)
Target exams to add: UPSC CSE, JEE Main, NEET UG, CUET, CAT, GATE, CLAT, CTET, NDA, Bank PO (IBPS PO)
Add via: `/admin/quality-check` → Exams tab

### 5. Add 10 More Blog Posts (Target: 27 total by end of June 2026)
Suggested topics:
- How to apply for government jobs online
- SSC CGL exam preparation guide
- UPSC syllabus 2026
- Bank PO preparation guide
- Government scheme eligibility checker guide

### 6. Share Content on Telegram & WhatsApp
Use `/admin/share` to generate formatted posts.
Post every new job/scheme/exam immediately.
Post format uses emojis + last date + site link + @sarkaridarapaninfo tag.

---

## OG Image (Social Sharing Preview)
Default OG image: `/public/images/og-default.jpg` (site logo)
All pages fall back to this if no specific image is set.
Verify sharing preview at: https://metatags.io or https://developers.facebook.com/tools/debug/

---

## Scripts Folder (`/scripts/`)

| Script | Purpose | Status |
|---|---|---|
| `schema.sql` | DB schema reference | Keep — reference |
| `scraper.py` / `scrape_single.py` | Job data scraper | Keep — reuse |
| `generate_articles.py` | AI article generator | Keep — reuse |
| `create-guide.ts` | Blog post creator | Keep — reuse |
| `audit-all-50-jobs.mjs` | Job audit tool | Keep — reuse |
| `add-*.mjs` / `add-jobs-batch-*.mjs` | Bulk job upload scripts | Done — safe to delete eventually |
| `fix-*.mjs` / `deactivate_jobs.py` | One-time fixes | Done — safe to delete eventually |

---

## Social Handles
All platforms use `@sarkaridarapaninfo`:
- Telegram: https://t.me/sarkaridarapaninfo
- WhatsApp Channel: https://whatsapp.com/channel/0029VbCHYsIDeON1dKiWuk1A
- YouTube, Instagram (not actively used yet)

---

## Content Writing Rules (MANDATORY — apply to ALL content)

These rules apply to every blog post, job page, scheme page, and exam page — new or edited.
**For old content:** modify ONE piece per day. Always ask the owner before starting.

The **humanizer skill** is installed at `~/.claude/skills/humanizer/`. Use `/humanizer` to review and clean up any draft content before publishing. The skill runs a draft → audit → final rewrite loop against all 30 patterns below.

### Writing process for every piece of content

1. Write the draft.
2. Run `/humanizer` on it (or manually apply the patterns below).
3. Ask: "What makes this obviously AI-generated?" Fix those tells.
4. Final rewrite must have zero em dashes, zero chatbot artifacts, zero significance inflation.

### Personality and soul (blog posts and guides only)

Sterile, voiceless writing is as obvious as slop. For blog posts, essays, and guides — not for job/scheme/exam listing pages — add a human voice:

- Have opinions. React to facts, don't just report them.
- Vary sentence length. Short punchy sentences. Then a longer one that takes its time.
- Let some mess in. Perfect structure feels algorithmic.
- Use first-person when it fits. "I" is more human than "one."

For job/scheme/exam listing pages, neutral and factual is correct. Do not inject opinions there.

---

### Part A — 30 Anti-AI Writing Patterns

#### Content patterns
1. **No significance inflation.** Cut "marking a pivotal moment", "serves as a testament", "underscores its importance", "reflects broader trends", "setting the stage for", "evolving landscape". State facts directly.
2. **No notability name-dropping.** Don't list outlets without context. Give the quote and year, not a list of logos.
3. **No superficial -ing analyses.** Cut "symbolizing...", "reflecting...", "showcasing...", "fostering..." tacked on as fake depth at the end of sentences.
4. **No promotional language.** Cut "boasts", "vibrant", "nestled", "breathtaking", "groundbreaking", "renowned", "stunning". State facts plainly.
5. **No vague attributions.** Never "experts believe", "industry reports suggest". Name the source and year.
6. **No formulaic challenges sections.** No "Despite challenges... continues to thrive." Use specific facts instead.

#### Language patterns
7. **No AI vocabulary.** Ban: actually, additionally, align with, crucial, delve, enduring, enhance, fostering, garner, highlight (verb), interplay, intricate, key (adjective), landscape (abstract), pivotal, showcase, tapestry (abstract), testament, underscore (verb), vibrant.
8. **No copula avoidance.** Use "is/are/has" directly. Cut "serves as", "stands as", "boasts", "features".
9. **No negative parallelisms.** Cut "It's not just about X, it's Y" and tailing negations like "no guessing". State the point directly.
10. **No rule of three.** Don't force ideas into groups of three. Use the natural number of items.
11. **No synonym cycling.** Repeat the clearest word. Don't swap synonyms to avoid repetition.
12. **No false ranges.** Cut "from X to Y" when X and Y aren't on a real scale.
13. **Active voice — name the actor.** Avoid subjectless fragments like "No configuration needed."

#### Style patterns
14. **No em dashes or en dashes — hard rule.** Zero — or – in final output. Replace with: period (new sentence), comma (aside), colon (explanation), or parentheses. Also catch spaced dashes ` — ` and double hyphens ` -- `.
15. **No bold overuse.** Don't bold terms or phrases mechanically. Bold only for truly critical warnings.
16. **No inline-header lists.** Don't write bullets as "**Label:** explanation". Convert to prose or real headings.
17. **Sentence case headings.** H2/H3 use sentence case, not Title Case. Bad: "## Best Books For SSC CGL" → Good: "## Best books for SSC CGL"
18. **No emojis in content.** Remove decorative emojis from all blog/job/scheme/exam content. Exception: `/admin/share` Telegram posts use emojis intentionally — leave those alone.
19. **Straight quotes only.** Use "..." not "..."

#### Communication patterns
20. **No chatbot artifacts.** Remove "I hope this helps!", "Let me know if...", "Here is a...", "Of course!", "Want me to give examples?", "Should I continue?", "Want me to expand on any section?"
21. **No knowledge-cutoff disclaimers.** Remove "while specific details are limited", "maintains a low profile". Find the source or cut the sentence.
22. **No sycophantic tone.** Cut "Great question!", "You're absolutely right!"

#### Filler and hedging
23. **Cut filler phrases.** "In order to" → "To" | "Due to the fact that" → "Because" | "It is important to note that" → delete it | "The system has the ability to" → "The system can"
24. **Cut excessive hedging.** "could potentially possibly" → "may"
25. **No generic conclusions.** Cut "The future looks bright", "Exciting times lie ahead". End with a specific fact.
26. **Hyphens in predicate position only when attributive.** Keep "a high-quality report" but write "the report is high quality".
27. **No persuasive authority tropes.** Cut "At its core", "The real question is", "What really matters". State the point directly.
28. **No signposting announcements.** Cut "Let's dive in", "Here's what you need to know", "No fluff, just what matters". Start with the content.
29. **No fragmented headers.** Don't follow a heading with a one-liner that restates it.
30. **No diff-anchored writing.** Describe what a thing IS, not what changed from before.
31. **No manufactured punchlines / staccato drama.** Don't stack short declarative sentences to fake drama. Bad: "It had no preference. No aesthetic. No nostalgia." → Merge into one real sentence.
32. **No aphorism formulas.** Cut "X is the Y of Z", "X becomes a trap", "X is not a tool but a mirror", "the language of", "the currency of". Replace with the concrete claim.
33. **No conversational rhetorical openers.** Cut standalone "Honestly?", "Look,", "Here's the thing,", "The thing is,", "Real talk," used as fake-candid hooks. Just say the thing.

#### What NOT to flag (false positives)

A real human writer can hit several patterns above without AI involvement. Don't gut legitimate prose based on isolated tells. Look for clusters, not single occurrences.

- Perfect grammar and consistent style is not an AI tell — many writers are professionals.
- One em dash is not evidence. Em dashes are evidence only when stacked with other AI tells.
- Formal or academic vocabulary is not an AI tell — only the specific AI-overused words in pattern #7 count.
- A single "additionally" or "moreover" is not an AI tell — only when they pile up.

---

### Part B — AI Citation Rules (AI-1 to AI-6)

These make content quotable by LLM answer engines (ChatGPT, Perplexity, Gemini, Claude).

- **AI-1:** The first sentence of every H2 section must be self-contained and liftable — no pronoun-only references.
- **AI-2:** Every dated stat carries inline attribution in the same sentence. Example: "50 lakh beneficiaries enrolled as of March 2026, per the Ministry of Rural Development."
- **AI-3:** Every blog post should include FAQPage JSON-LD. Each FAQ answer must open with a directly-answering sentence (not "Great question", not "It depends").
- **AI-4:** Worked examples use actual numbers. Never "X rupees" or "some amount".
- **AI-5:** Sources/links section uses primary sources only — government portals, official notifications, ministry sites.
- **AI-6:** Comparisons (eligibility criteria, salary, exam vs exam) must use markdown tables, not prose lists.

---

### Part C — Ten Human-Voice Rules

Apply to every sentence of every article.

- **H-1:** Never bold the first sentence of a paragraph. Use real ## or ### headings instead.
- **H-2:** Three consecutive sentences with the same opener → rewrite at least two.
- **H-3:** Never write "Here is X" or "Here is what X is." State it directly.
- **H-4:** Never preview the steps then give the steps. Just give the steps.
- **H-5:** Never write "Notice that..." Make the observation directly.
- **H-6:** Start at least 1 paragraph per post with a number, quote, or surprising fact.
- **H-7:** Use contractions naturally — it's, you'll, doesn't, they're, can't.
- **H-8:** Include at least 1 short paragraph (1–2 sentences) per post for rhythm.
- **H-9:** Never write the word "consistently." Replace with a specific stat or drop it.
- **H-10:** End with a specific observation, not a summary repeat of the post.

---

## Important Warnings

1. **ads.txt placeholder** — `public/ads.txt` has `pub-XXXXXXXXXXXXXXXX`. Update immediately after AdSense approval.
2. **Admin is public** — `/admin/*` routes have no authentication. Don't share the admin URL publicly.
3. **Supabase keys** — Never commit `.env.local`. Service role key is in there.
4. **Facebook removed** — No Facebook page exists. Footer intentionally shows only Telegram + WhatsApp.
