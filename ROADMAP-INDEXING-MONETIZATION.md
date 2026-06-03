# SarkariDarapan — Indexing & Monetization Roadmap
**Site:** https://www.sarkaridarapan.com  
**Created:** 2026-06-03  
**Goal:** Get fully indexed on Google/Bing + earn from Google AdSense

---

## Current Status (What's Already Done)

| Feature | Status |
|---|---|
| Next.js 14 site on Vercel | Done |
| Sitemap.xml (`/sitemap.xml`) | Done |
| Robots.txt (`/robots.txt`) | Done |
| AdSense component in layout | Done (placeholder ID) |
| ads.txt file | Done (placeholder ID) |
| IndexNow API route | Done |
| RSS Feed (`/feed.xml`) | Done |
| JSON-LD structured data | Done |
| Blog drafts written | Done (5 drafts ready) |
| Social channels created | Done (Telegram, YouTube, etc.) |
| Google site verification slot | Done (env var slot empty) |

---

## PHASE 1 — Indexing (Week 1–2) [URGENT]

### Step 1: Google Search Console Setup
**Action required — manual steps:**

1. Go to https://search.google.com/search-console/
2. Add property → URL prefix → `https://www.sarkaridarapan.com`
3. Choose **HTML tag** verification method
4. Copy the content value (looks like: `abc123xyz...`)
5. In your Vercel project → Settings → Environment Variables → add:
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION = <your-code-here>
   ```
6. Redeploy site on Vercel
7. Back in Search Console → click Verify

**After verification:**
- Go to Sitemaps → Submit `https://www.sarkaridarapan.com/sitemap.xml`
- Request indexing for the homepage via URL Inspection tool

---

### Step 2: Bing Webmaster Tools Setup
**Action required — manual steps:**

1. Go to https://www.bing.com/webmasters/
2. Sign in with Microsoft account
3. Add site → `https://www.sarkaridarapan.com`
4. Choose XML file or meta tag verification
5. Copy the verification code and add to Vercel env:
   ```
   NEXT_PUBLIC_BING_VERIFICATION = <your-code-here>
   ```
6. Submit sitemap: `https://www.sarkaridarapan.com/sitemap.xml`

> Bing also powers DuckDuckGo and Yahoo — one submission covers all three.

---

### Step 3: IndexNow — Instant Bing/Yandex Indexing
The `/api/indexnow` route is already built. Every time you publish a new job or blog post, ping it:

```bash
curl "https://www.sarkaridarapan.com/api/indexnow"
```

Or trigger it from the admin panel after each publish.

---

### Step 4: Google Analytics 4 (GA4) Setup
AdSense reviewers check if your site has real traffic. GA4 helps track it.

1. Go to https://analytics.google.com/
2. Create account → Property → `sarkaridarapan.com`
3. Get Measurement ID (looks like `G-XXXXXXXXXX`)
4. Install it in `app/layout.tsx` — add this inside `<head>`:
   ```tsx
   {/* Google Analytics */}
   <script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
   <script dangerouslySetInnerHTML={{ __html: `
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   `}} />
   ```

---

### Step 5: Publish the 5 Blog Drafts
The drafts in `/blog-drafts/` are ready. Publish them all through the admin panel immediately. Each published page = more indexed URLs = stronger site signal.

Drafts ready to publish:
- `government-jobs-vs-private-jobs-india-2026.md`
- `pm-kisan-samman-nidhi-2026-status-check.md`
- `top-10-govt-jobs-after-12th-2026.md`
- `top-10-govt-jobs-after-graduation-2026.md`
- `ayushman-bharat-card-2026-apply-download-use.md`

---

## PHASE 2 — Content Volume (Week 2–4)

Google rewards fresh, high-volume content for job/news sites. Aim for:

| Content Type | Current | Target (30 days) |
|---|---|---|
| Job posts | Unknown | 50+ active listings |
| Blog articles | 0 published | 15+ published |
| Scheme posts | Unknown | 20+ published |
| Entrance exam posts | Unknown | 15+ published |

### Content Strategy:
- Publish **2–3 new blog posts per week** using the `blog-topic-suggestions.md` file
- Use your Python scraper (`scripts/scraper.py`) to keep job listings fresh daily
- Target **long-tail Hindi keywords**: "sarkari naukri 2026 12th pass", "UP police bharti 2026", "PM Kisan status check 2026"
- Each job/scheme detail page already has SEO metadata — focus on filling them

---

## PHASE 3 — Google AdSense Application (Week 3–5)

### Pre-requisites Before Applying:
- [ ] At least **20–30 pages of original content** indexed on Google
- [ ] Site has been live for **at least 2–3 weeks**
- [ ] Privacy Policy page exists → `/privacy-policy` (already done)
- [ ] Terms of Service page exists → `/terms-of-service` (already done)
- [ ] Contact page exists → `/contact` (already done)
- [ ] No copyright violations, no scraped content without attribution
- [ ] Some organic traffic visible in GA4 (even 10–20 visitors/day is fine)

### Step-by-Step AdSense Application:

1. Go to https://www.google.com/adsense/
2. Sign in with Google account (`mahidey420@gmail.com` — confirm this)
3. Add site → `sarkaridarapan.com`
4. Copy your **Publisher ID** (format: `pub-1234567890123456`)
5. **Update `public/ads.txt`** — replace the placeholder:
   ```
   google.com, pub-YOUR_REAL_ID_HERE, DIRECT, f08c47fec0942fa0
   ```
6. **Update the AdSense script** in `components/ads/AdSenseScript.tsx` with your real Publisher ID
7. Deploy → Google will review your site (takes 1–14 days)

### After Approval — Add Ad Units:
Once approved, create ad units in AdSense dashboard and place them:
- **Between job listings** on `/sarkari-naukri`
- **Inside blog post body** (after first 3 paragraphs)
- **Sidebar** on detail pages (`/sarkari-naukri/[slug]`)
- **Below header** on homepage (320x50 mobile banner)

---

## PHASE 4 — Traffic Growth (Month 2–3)

### SEO Actions:
- Submit each new post URL to Google Search Console → URL Inspection → Request Indexing
- Add internal links between related blog posts and job listings
- Add FAQ sections on category pages (already have `FAQSection` component)
- Build backlinks: share every post on your Telegram channel (`t.me/sarkaridarapaninfo`)

### Social Media — Use What You've Built:
| Platform | Handle | Action |
|---|---|---|
| Telegram | `@sarkaridarapaninfo` | Post every new job/scheme daily |
| YouTube | `@sarkaridarapaninfo` | 1–2 short videos/week on trending jobs |
| Facebook | `sarkaridarapaninfo` | Share blog posts + job alerts |
| Instagram | `sarkaridarapaninfo` | Infographic-style job cards |
| WhatsApp Channel | `sarkaridarapaninfo` | Daily job digest |

> Telegram is the most powerful for govt job traffic in India — grow it aggressively.

---

## PHASE 5 — Monetization Beyond AdSense (Month 3+)

Once you have consistent traffic (5,000+ pageviews/month):

| Method | How | Expected Revenue |
|---|---|---|
| Google AdSense | Already in progress | ₹500–5,000/month early |
| Telegram Channel Premium | Sell premium job alert subscription | ₹99–199/month per user |
| Affiliate Links | Link to Testbook, Unacademy, BYJU's prep courses | ₹200–500 per referral |
| Sponsored Posts | Coaching institutes pay for featured listings | ₹2,000–10,000/post |
| YouTube AdSense | Monetize `@sarkaridarapaninfo` channel | Separate revenue stream |

---

## Critical Code Fix Needed (Do This Today)

### Fix `ads.txt` — Replace Placeholder Publisher ID
**File:** `public/ads.txt`

Current (wrong):
```
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

After you get your real AdSense publisher ID, update it to:
```
google.com, pub-YOUR_REAL_16_DIGIT_ID, DIRECT, f08c47fec0942fa0
```

> An incorrect `ads.txt` will block AdSense revenue even after approval.

---

## Priority Action Checklist

### This Week (Week 1):
- [ ] Verify site on Google Search Console
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Verify site on Bing Webmaster Tools
- [ ] Install Google Analytics 4
- [ ] Publish all 5 blog drafts via admin panel
- [ ] Ensure 30+ job listings are active

### Week 2–3:
- [ ] Publish 2 new blog articles
- [ ] Check Google Search Console for indexing errors
- [ ] Request indexing for key pages manually (homepage, /sarkari-naukri, /blog)
- [ ] Start growing Telegram channel

### Week 3–5:
- [ ] Apply for Google AdSense
- [ ] Update ads.txt with real publisher ID
- [ ] Update AdSenseScript component with real publisher ID
- [ ] Add ad unit placements after approval

### Month 2+:
- [ ] Monitor AdSense performance
- [ ] Add affiliate links to blog posts
- [ ] Launch YouTube channel
- [ ] Explore sponsored post pricing

---

## Key URLs to Bookmark

| Tool | URL |
|---|---|
| Google Search Console | https://search.google.com/search-console/ |
| Bing Webmaster Tools | https://www.bing.com/webmasters/ |
| Google Analytics | https://analytics.google.com/ |
| Google AdSense | https://www.google.com/adsense/ |
| Your Sitemap | https://www.sarkaridarapan.com/sitemap.xml |
| Your Robots.txt | https://www.sarkaridarapan.com/robots.txt |
| Your ads.txt | https://www.sarkaridarapan.com/ads.txt |

---

*Last updated: 2026-06-03*
