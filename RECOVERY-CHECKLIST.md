# Recovery checklist: Supabase egress outage

Opened 2026-09-01. Still open as of 2026-09-04.

## Current state

Supabase is refusing all reads and writes: `exceed_egress_quota`. Production is
serving an empty site.

| Surface | State |
|---|---|
| Sitemap | 12 static URLs. All 204 content URLs gone |
| Listing pages | 200, zero content links, `index, follow` |
| Detail pages | 200 with "Coming Soon" and `noindex`, or 404 |
| Google, last 7 days | 1 impression, 0 clicks |
| Bing, last 7 days | 3,400 impressions, 46 clicks |

The Google and Bing gap predates the outage. Bing ranks these pages at
positions 4 to 10 on real queries, so the pages are crawlable, indexable and
relevant. Google specifically is not serving them.

## Step 1, owner only: restore Supabase

Raise the plan or lift the spend cap. Nothing below can start until this is
done, and every day of empty pages and an empty sitemap deepens the hole.

Verify with:

    node -e "import('@supabase/supabase-js')" # then any script in scripts/

or just re-run any publish script and confirm it does not report
`exceed_egress_quota`.

## Step 2: redeploy and verify

The build now REFUSES to publish an empty site, so a deploy attempted before
step 1 will fail on purpose. After step 1:

1. Redeploy.
2. Confirm the sitemap is back to roughly 216 URLs:
   `curl -s https://www.sarkaridarapan.com/sitemap.xml | grep -c '<loc>'`
3. Confirm listing pages render content:
   `curl -s https://www.sarkaridarapan.com/ | grep -c 'href="/sarkari-naukri/'`
4. Spot check three detail pages for real titles rather than "Coming Soon".
5. Resubmit the sitemap in Google Search Console. Google deprecated its
   sitemap ping endpoint in June 2023, so this is manual.

## Step 3: confirm the egress fix works

Commit 03211a2 projects columns on list queries, which should cut list egress
by roughly 90 percent. It has never run against a live database. After step 1,
watch Supabase egress for 24 hours and confirm it is tracking well under the
allowance before assuming the problem is solved.

Also worth knowing: hitting `?tag=jobs` invalidates every category and state
list at once, and this build has 12 category paths and 36 state paths. Firing
collection-tag revalidations in a loop is what amplified the original burn.

## Step 4: backlink cleanup

Upload `seo/disavow-sarkaridarapan.txt` at
https://search.google.com/search-console/disavow-links

Two of four referring domains are link networks: `plavo.shop`, which Ahrefs
shows linking to 35,076,307 domains, and `seogeko.shop`, DR 30 with zero
traffic and zero keywords.

## Step 5: resume blocked work

- Run `scripts/day32-1-conflation-audit.mjs`. Written and committed, never run.
  Checks every row for an exam date that ends before its own application window
  closes, which has already caught three pages.
- 26 thin pages remain: 11 jobs, 9 blogs, 6 exams, 6 schemes. Five of those are
  2800 to 2999 words and substantively complete.
- `scripts/add-notification-status.sql` is still unrun. Optional. If it is ever
  run, see the note in lib/content.ts about adding the column back to the list
  projections.

## Monetisation

Do not apply to any ad network until steps 1 and 2 are done and verified. A
reviewer landing on "Coming Soon" pages is the same failure that produced the
AdSense rejection on 2026-07-07.

Microsoft pubCenter has been US only with a waitlist for other countries, based
on 2023 and 2024 sources; the 2026 position for India is unconfirmed, so check
the signup page. Joining a waitlist carries no rejection risk. An approval
review does.

Worth weighing: the site's traffic is Bing traffic, 46 clicks a week against
Google's zero. Microsoft's network monetises exactly that audience.
