# SarkariDarapan — Project Guide for Claude Code

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

## Content Count (as of 2026-06-05)

| Type | Count | Target |
|---|---|---|
| Jobs | **50** ✅ | 50 |
| Schemes | **25** ✅ | 20+ |
| Blog posts | **17** ✅ | 15+ |
| Entrance Exams | **5** ❌ | 15+ |

**Entrance exams is the biggest content gap.** Target: add UPSC, JEE, NEET, CUET, CAT, GATE, CLAT, CTET, NDA, Bank PO (10 more).

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

## Important Warnings

1. **ads.txt placeholder** — `public/ads.txt` has `pub-XXXXXXXXXXXXXXXX`. Update immediately after AdSense approval.
2. **Admin is public** — `/admin/*` routes have no authentication. Don't share the admin URL publicly.
3. **Supabase keys** — Never commit `.env.local`. Service role key is in there.
4. **Facebook removed** — No Facebook page exists. Footer intentionally shows only Telegram + WhatsApp.
