// Full-site technical sweep across every URL in the live sitemap.
//
// Everything until now has been spot checks: a handful of pages after each
// change. This walks all 216 and reports per-URL defects, so a problem sitting
// on a page nobody happened to curl gets found.
//
// Read-only. Checks each page for:
//   status, robots meta, canonical, title length, description length,
//   JSON-LD presence, FAQ question count, h1 count, og:image
//
// Title 50-65 and description 150-160 are project hard rules, so anything
// outside those is a defect rather than a preference.

const SITE = "https://www.sarkaridarapan.com";
const CONCURRENCY = 6;

const sm = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
console.log(`Auditing ${urls.length} URLs from the live sitemap.\n`);

// Decode HTML entities before measuring. The rendered attribute encodes them,
// so "BSNL's" ships as "BSNL&#x27;s" and "E&T" as "E&amp;T". Measuring the raw
// attribute overstates the length and reported four pages as over the 160
// limit when the value Google actually reads was 153 to 159. Google reads the
// decoded text, so that is what the rule applies to.
const decode = (s) =>
  s.replace(/&amp;/g, "&")
   .replace(/&#x27;|&#39;|&apos;/g, "'")
   .replace(/&quot;|&#34;/g, '"')
   .replace(/&lt;/g, "<")
   .replace(/&gt;/g, ">")
   .replace(/&nbsp;/g, " ")
   .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(+d))
   .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)));

const pick = (html, re) => { const m = html.match(re); return m ? decode(m[1]) : null; };

async function audit(url) {
  const out = { url, issues: [] };
  let res, html;
  try {
    res = await fetch(url, { redirect: "manual" });
    out.status = res.status;
    if (res.status >= 300 && res.status < 400) {
      out.issues.push(`redirects to ${res.headers.get("location")}`);
      return out;
    }
    if (res.status !== 200) { out.issues.push(`status ${res.status}`); return out; }
    html = await res.text();
  } catch (e) {
    out.status = "ERR";
    out.issues.push(`fetch failed: ${e.message}`);
    return out;
  }

  const robots = pick(html, /<meta name="robots" content="([^"]*)"/);
  const canonical = pick(html, /<link rel="canonical" href="([^"]*)"/);
  const title = pick(html, /<title>([^<]*)<\/title>/);
  const desc = pick(html, /<meta name="description" content="([^"]*)"/);
  const ogImg = pick(html, /<meta property="og:image" content="([^"]*)"/);
  const ldCount = (html.match(/application\/ld\+json/g) || []).length;
  const faqCount = (html.match(/"@type":"Question"/g) || []).length;
  const h1Count = (html.match(/<h1[\s>]/g) || []).length;

  out.robots = robots ?? "(none)";
  out.title = title;

  // A URL in the sitemap must be indexable. Sitemap plus noindex is a
  // contradiction Google reports as a warning.
  if (robots && /noindex/i.test(robots)) out.issues.push(`NOINDEX but in sitemap (${robots})`);
  if (!canonical) out.issues.push("no canonical");
  if (!title) out.issues.push("no title");
  else {
    if (title.length < 50 || title.length > 65) {
      out.issues.push(`title ${title.length}c (rule: 50-65)`);
    }
  }
  if (!desc) out.issues.push("no meta description");
  else if (desc.length < 150 || desc.length > 160) out.issues.push(`description ${desc.length}c (rule: 150-160)`);
  if (ldCount === 0) out.issues.push("no JSON-LD");
  if (!ogImg) out.issues.push("no og:image");
  if (h1Count === 0) out.issues.push("no h1");
  else if (h1Count > 1) out.issues.push(`${h1Count} h1 tags`);
  out.faqCount = faqCount;
  return out;
}

const results = [];
for (let i = 0; i < urls.length; i += CONCURRENCY) {
  const batch = urls.slice(i, i + CONCURRENCY);
  results.push(...await Promise.all(batch.map(audit)));
  process.stderr.write(`\r  ${Math.min(i + CONCURRENCY, urls.length)}/${urls.length}`);
}
process.stderr.write("\r" + " ".repeat(30) + "\r");

const bad = results.filter((r) => r.issues.length);
console.log(`${results.length - bad.length} clean, ${bad.length} with issues.\n`);

// Group by issue type so a systemic problem reads as one line, not fifty.
const byIssue = new Map();
for (const r of bad) {
  for (const i of r.issues) {
    const key = i.replace(/\d+/g, "N").replace(/to https?:\S+/, "to <url>");
    if (!byIssue.has(key)) byIssue.set(key, []);
    byIssue.get(key).push(r);
  }
}
console.log("BY ISSUE TYPE");
for (const [key, rows] of [...byIssue].sort((a, b) => b[1].length - a[1].length)) {
  console.log(`\n  ${rows.length}x  ${key}`);
  for (const r of rows.slice(0, 6)) {
    const detail = r.issues.find((i) => i.replace(/\d+/g, "N").replace(/to https?:\S+/, "to <url>") === key);
    console.log(`        ${r.url.replace(SITE, "")}  ${detail !== key ? `[${detail}]` : ""}`);
  }
  if (rows.length > 6) console.log(`        ... and ${rows.length - 6} more`);
}

const noFaq = results.filter((r) => r.status === 200 && r.faqCount === 0 &&
  /\/(sarkari-naukri|sarkari-yojana|entrance-exams|blog)\//.test(r.url));
console.log(`\n\nCONTENT PAGES WITH NO FAQ SCHEMA: ${noFaq.length}`);
for (const r of noFaq.slice(0, 15)) console.log(`   ${r.url.replace(SITE, "")}`);
if (noFaq.length > 15) console.log(`   ... and ${noFaq.length - 15} more`);
