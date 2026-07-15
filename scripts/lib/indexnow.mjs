// Shared IndexNow helper for update-*.mjs scripts.
//
// Any content-update script should call `pingIndexNow(slug, route)` after a
// successful DB write and revalidate. IndexNow notifies Bing, Yandex, Naver,
// Seznam, and Yep in one call so newly-updated content gets re-crawled within
// hours rather than waiting for the daily crawl cycle.
//
// Google is NOT reached by this helper (Google deprecated their sitemap-ping
// endpoint in June 2023). Force Google refresh via GSC UI: Sitemaps →
// Resubmit sitemap.xml, and URL Inspection → Request Indexing.
//
// Usage in an update-*.mjs script:
//
//   import { pingIndexNow } from "./lib/indexnow.mjs";
//   // ... after successful DB write + revalidate ...
//   await pingIndexNow(SLUG, "/sarkari-naukri");
//
// Batch usage:
//   import { pingIndexNowBatch } from "./lib/indexnow.mjs";
//   await pingIndexNowBatch([
//     "/sarkari-naukri/foo",
//     "/sarkari-yojana/bar",
//   ]);

const SITE_URL = "https://www.sarkaridarapan.com";
const INDEXNOW_KEY = "7bb5c385693a45bf923313146b6cf086";

async function submitToIndexNow(urls) {
  if (!urls.length) return { success: true, submitted: 0, note: "no urls" };
  const payload = {
    host: new URL(SITE_URL).hostname,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const body = res.ok ? null : await res.text().catch(() => "");
  return {
    success: res.ok,
    status: res.status,
    submitted: urls.length,
    error: body || undefined,
  };
}

// Ping IndexNow for a single slug on a given route.
// Route examples: "/sarkari-naukri", "/sarkari-yojana", "/entrance-exams", "/blog".
// Logs the result. Never throws — a failed IndexNow submission should not
// block the calling script's success.
export async function pingIndexNow(slug, route) {
  const url = `${SITE_URL}${route}/${slug}`;
  try {
    const result = await submitToIndexNow([url]);
    if (result.success) {
      console.log(`IndexNow: OK (${url})`);
    } else {
      console.log(`IndexNow: FAIL ${result.status} (${url}) ${result.error?.slice(0, 200) ?? ""}`);
    }
    return result;
  } catch (err) {
    console.log(`IndexNow: ERROR (${url}) ${String(err)}`);
    return { success: false, error: String(err) };
  }
}

// Batch version. Takes an array of paths (with leading slash) and submits in
// batches of 1000. IndexNow accepts up to 10000 URLs per request but 1000
// keeps error messages scoped if any batch fails.
export async function pingIndexNowBatch(paths) {
  const urls = paths.map((p) => (p.startsWith("http") ? p : `${SITE_URL}${p}`));
  const BATCH = 1000;
  let ok = 0;
  let fail = 0;
  for (let i = 0; i < urls.length; i += BATCH) {
    const batch = urls.slice(i, i + BATCH);
    const result = await submitToIndexNow(batch);
    if (result.success) {
      ok += batch.length;
      console.log(`IndexNow batch ${Math.floor(i / BATCH) + 1}: ${batch.length} URLs OK`);
    } else {
      fail += batch.length;
      console.log(`IndexNow batch ${Math.floor(i / BATCH) + 1}: FAIL ${result.status} ${result.error?.slice(0, 200) ?? ""}`);
    }
  }
  return { ok, fail, total: urls.length };
}
