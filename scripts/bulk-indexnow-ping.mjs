// One-shot bulk IndexNow submission for the entire site.
//
// Pulls every active URL (jobs + schemes + entrance_exams + blogs) from
// Supabase, adds a few high-value static pages, batches into groups of 1000
// (IndexNow supports up to 10000 per request but 1000 keeps error messages
// scoped), and POSTs to api.indexnow.org.
//
// Usage:
//   node scripts/bulk-indexnow-ping.mjs           # live submit
//   node scripts/bulk-indexnow-ping.mjs --dry     # preview count + first 10 URLs, no submit
//
// Google note: Google deprecated its sitemap-ping endpoint in June 2023 and
// this script cannot notify Google. Force Google refresh via GSC UI:
//   1) Sitemaps → three-dot menu on sitemap.xml → Resubmit
//   2) URL Inspection → paste URL → Request Indexing (max 10-12 per day)

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";
const SITE_URL = "https://www.sarkaridarapan.com";
const INDEXNOW_KEY = "7bb5c385693a45bf923313146b6cf086";

const DRY = process.argv.includes("--dry");
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const STATIC_PAGES = [
  "",
  "/sarkari-naukri",
  "/sarkari-yojana",
  "/entrance-exams",
  "/blog",
  "/admit-card",
  "/results",
  "/about",
  "/contact",
];

const [jobsRes, schemesRes, examsRes, blogsRes] = await Promise.all([
  supabase.from("jobs").select("slug").eq("is_active", true),
  supabase.from("schemes").select("slug").eq("is_active", true),
  supabase.from("entrance_exams").select("slug").eq("is_active", true),
  supabase.from("blog_posts").select("slug").eq("is_active", true),
]);

const urls = [
  ...STATIC_PAGES.map((p) => `${SITE_URL}${p}`),
  ...(jobsRes.data ?? []).map((r) => `${SITE_URL}/sarkari-naukri/${r.slug}`),
  ...(schemesRes.data ?? []).map((r) => `${SITE_URL}/sarkari-yojana/${r.slug}`),
  ...(examsRes.data ?? []).map((r) => `${SITE_URL}/entrance-exams/${r.slug}`),
  ...(blogsRes.data ?? []).map((r) => `${SITE_URL}/blog/${r.slug}`),
];

console.log("=== BULK INDEXNOW PING ===");
console.log("Site:", SITE_URL);
console.log("Total URLs:", urls.length);
console.log("  Static:", STATIC_PAGES.length);
console.log("  Jobs:", jobsRes.data?.length ?? 0);
console.log("  Schemes:", schemesRes.data?.length ?? 0);
console.log("  Entrance exams:", examsRes.data?.length ?? 0);
console.log("  Blog posts:", blogsRes.data?.length ?? 0);
console.log("Key:", INDEXNOW_KEY);
console.log("Key location:", `${SITE_URL}/${INDEXNOW_KEY}.txt`);
console.log("First 10 URLs:");
for (const u of urls.slice(0, 10)) console.log(" ", u);

if (DRY) {
  console.log("\nDRY RUN — not submitting.");
  process.exit(0);
}

console.log("\nVerifying key file is live before submission...");
const keyCheck = await fetch(`${SITE_URL}/${INDEXNOW_KEY}.txt`);
if (!keyCheck.ok) {
  console.error("Key file returned HTTP", keyCheck.status, "-- IndexNow will reject the payload. Abort.");
  process.exit(1);
}
const keyBody = (await keyCheck.text()).trim();
if (keyBody !== INDEXNOW_KEY) {
  console.error("Key file content mismatch. Expected", INDEXNOW_KEY, "got", keyBody);
  process.exit(1);
}
console.log("Key file verified.");

const BATCH = 1000;
let ok = 0;
let fail = 0;
const failures = [];

for (let i = 0; i < urls.length; i += BATCH) {
  const batch = urls.slice(i, i + BATCH);
  const payload = {
    host: new URL(SITE_URL).hostname,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: batch,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const body = res.ok ? "" : await res.text().catch(() => "");
  console.log(`Batch ${Math.floor(i / BATCH) + 1}: ${batch.length} URLs → HTTP ${res.status} ${res.ok ? "OK" : "FAIL"}`);
  if (!res.ok) {
    console.log("  Body:", body.slice(0, 500));
    fail += batch.length;
    failures.push({ batch: Math.floor(i / BATCH) + 1, status: res.status, body: body.slice(0, 200) });
  } else {
    ok += batch.length;
  }
}

console.log("\n=== SUMMARY ===");
console.log("Submitted:", ok);
console.log("Failed:", fail);
if (failures.length) {
  console.log("Failures:");
  for (const f of failures) console.log(" ", JSON.stringify(f));
}

console.log("\n=== NEXT STEPS ===");
console.log("1. Google does NOT accept sitemap ping since June 2023. Force GSC refresh manually:");
console.log("   https://search.google.com/search-console → Sitemaps → resubmit sitemap.xml");
console.log("2. GSC URL Inspection → paste top-priority URLs → Request Indexing (max 10-12/day).");
console.log("3. IndexNow submission above notifies Bing, Yandex, Naver, Seznam, Yep automatically.");
