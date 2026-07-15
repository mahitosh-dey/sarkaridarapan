// Full metadata sweep across every active page.
//
// For each page: fetches the live HTML, extracts title / meta description /
// canonical / robots / og:title / og:description / JSON-LD count, then
// compares against the DB row. Flags any mismatch.
//
// Purpose: catch the class of bug that hid for 2 weeks where /api/indexnow
// silently 422-ed and where /sarkari-naukri/[slug] auto-generated metadata
// instead of using DB fields. This script would have caught both on day 1.
//
// Usage: node scripts/audit-metadata-sweep.mjs

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";
const SITE_URL = "https://www.sarkaridarapan.com";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const TABLES = [
  { name: "jobs", route: "/sarkari-naukri" },
  { name: "schemes", route: "/sarkari-yojana" },
  { name: "entrance_exams", route: "/entrance-exams" },
  { name: "blog_posts", route: "/blog" },
];

function extract(html, pattern) {
  const m = html.match(pattern);
  return m ? m[1] : null;
}

async function auditPage(url, expectedTitle, expectedDesc) {
  try {
    const res = await fetch(url, { headers: { "Cache-Control": "no-cache" } });
    if (!res.ok) return { url, error: `HTTP ${res.status}` };
    const html = await res.text();

    const title = extract(html, /<title>([^<]+)<\/title>/);
    const description = extract(html, /<meta name="description" content="([^"]+)"/);
    const canonical = extract(html, /<link rel="canonical" href="([^"]+)"/);
    const robots = extract(html, /<meta name="robots" content="([^"]+)"/);
    const ogTitle = extract(html, /<meta property="og:title" content="([^"]+)"/);
    const jsonLdCount = (html.match(/<script[^>]*type="application\/ld\+json"[^>]*>/g) || []).length;

    const issues = [];
    if (expectedTitle && title && !title.startsWith(expectedTitle.slice(0, 30))) {
      issues.push(`TITLE_MISMATCH: live="${title?.slice(0, 60)}" db="${expectedTitle.slice(0, 60)}"`);
    }
    if (!title) issues.push("MISSING_TITLE");
    if (title && title.length > 70) issues.push(`TITLE_TOO_LONG (${title.length}c)`);
    if (title && title.length < 30) issues.push(`TITLE_TOO_SHORT (${title.length}c)`);
    if (expectedDesc && description && !description.startsWith(expectedDesc.slice(0, 30))) {
      issues.push(`DESC_MISMATCH: live="${description?.slice(0, 60)}" db="${expectedDesc.slice(0, 60)}"`);
    }
    if (!description) issues.push("MISSING_DESC");
    if (description && description.length > 165) issues.push(`DESC_TOO_LONG (${description.length}c)`);
    if (!canonical) issues.push("MISSING_CANONICAL");
    if (robots && robots.includes("noindex")) issues.push(`NOINDEX: ${robots}`);
    if (!ogTitle) issues.push("MISSING_OG_TITLE");
    if (jsonLdCount === 0) issues.push("NO_JSON_LD");

    return { url, title, titleLen: title?.length, descLen: description?.length, jsonLdCount, robots, issues };
  } catch (err) {
    return { url, error: String(err) };
  }
}

console.log("=== METADATA SWEEP ===");
console.log("Site:", SITE_URL);
console.log("Started:", new Date().toISOString());
console.log();

const globalReport = { total: 0, clean: 0, issues: 0, errors: 0, byIssue: {} };
const perTable = {};

for (const t of TABLES) {
  const { data, error } = await supabase.from(t.name).select("slug, title, description").eq("is_active", true);
  if (error) { console.error(t.name, "read error:", error.message); continue; }

  console.log(`\n=== ${t.name.toUpperCase()} (${data.length} active) ===`);
  perTable[t.name] = { total: data.length, clean: 0, issues: 0, errors: 0 };

  // Sequential to avoid overwhelming the origin
  for (const row of data) {
    const url = `${SITE_URL}${t.route}/${row.slug}`;
    const result = await auditPage(url, row.title, row.description);
    globalReport.total++;
    perTable[t.name].total = perTable[t.name].total;

    if (result.error) {
      console.log(`  ERROR ${row.slug}: ${result.error}`);
      globalReport.errors++;
      perTable[t.name].errors++;
    } else if (result.issues.length === 0) {
      globalReport.clean++;
      perTable[t.name].clean++;
    } else {
      globalReport.issues++;
      perTable[t.name].issues++;
      console.log(`  ISSUE ${row.slug} (title ${result.titleLen}c, desc ${result.descLen}c, jsonld ${result.jsonLdCount}):`);
      for (const issue of result.issues) {
        console.log(`    - ${issue}`);
        const key = issue.split(":")[0].split(" ")[0];
        globalReport.byIssue[key] = (globalReport.byIssue[key] || 0) + 1;
      }
    }
  }

  const t2 = perTable[t.name];
  console.log(`  Summary: clean=${t2.clean}, issues=${t2.issues}, errors=${t2.errors}`);
}

console.log("\n=== GLOBAL SUMMARY ===");
console.log(`Total pages: ${globalReport.total}`);
console.log(`Clean:       ${globalReport.clean} (${((globalReport.clean / globalReport.total) * 100).toFixed(1)}%)`);
console.log(`With issues: ${globalReport.issues}`);
console.log(`Errors:      ${globalReport.errors}`);

if (Object.keys(globalReport.byIssue).length) {
  console.log("\nIssue breakdown:");
  for (const [issue, count] of Object.entries(globalReport.byIssue).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${issue}: ${count}`);
  }
}

console.log("\nFinished:", new Date().toISOString());
