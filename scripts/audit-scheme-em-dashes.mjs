// Audit every active scheme row for em dashes and en dashes across all
// text-type columns. Reports by column and slug so the fix batch can be
// scoped precisely. Read-only.
//
// Usage: node scripts/audit-scheme-em-dashes.mjs

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const TEXT_COLUMNS = [
  "title", "description", "ministry", "launched_by",
  "objective", "how_to_apply", "content",
];
const ARRAY_COLUMNS = ["eligibility", "benefits", "documents"];

const { data, error } = await supabase
  .from("schemes")
  .select("*")
  .eq("is_active", true);

if (error) {
  console.error("Read error:", error.message);
  process.exit(1);
}

console.log(`=== Em/en dash sweep across ${data.length} active schemes ===\n`);

const DASH_RE = /[—–]/;
let totalViolations = 0;
const perColumn = {};
const perSlug = {};

for (const row of data) {
  for (const col of TEXT_COLUMNS) {
    const val = row[col];
    if (typeof val !== "string" || !val) continue;
    const matches = val.match(/[—–]/g);
    if (matches) {
      totalViolations += matches.length;
      perColumn[col] = (perColumn[col] || 0) + matches.length;
      perSlug[row.slug] = perSlug[row.slug] || { total: 0, byCol: {} };
      perSlug[row.slug].total += matches.length;
      perSlug[row.slug].byCol[col] = matches.length;
    }
  }
  // Array-of-strings columns: eligibility, benefits, documents
  for (const col of ARRAY_COLUMNS) {
    const arr = row[col];
    if (!Array.isArray(arr) || arr.length === 0) continue;
    const arrStr = JSON.stringify(arr);
    const matches = arrStr.match(/[—–]/g);
    if (matches) {
      totalViolations += matches.length;
      perColumn[col] = (perColumn[col] || 0) + matches.length;
      perSlug[row.slug] = perSlug[row.slug] || { total: 0, byCol: {} };
      perSlug[row.slug].total += matches.length;
      perSlug[row.slug].byCol[col] = matches.length;
    }
  }
  // FAQs — stringify then scan
  if (Array.isArray(row.faqs) && row.faqs.length) {
    const faqStr = JSON.stringify(row.faqs);
    const matches = faqStr.match(/[—–]/g);
    if (matches) {
      totalViolations += matches.length;
      perColumn["faqs"] = (perColumn["faqs"] || 0) + matches.length;
      perSlug[row.slug] = perSlug[row.slug] || { total: 0, byCol: {} };
      perSlug[row.slug].total += matches.length;
      perSlug[row.slug].byCol["faqs"] = matches.length;
    }
  }
}

console.log("=== Summary by column ===");
for (const [col, count] of Object.entries(perColumn).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${col.padEnd(15)}: ${count} dashes`);
}
console.log(`  ${"TOTAL".padEnd(15)}: ${totalViolations} dashes\n`);

console.log("=== Summary by slug (top 20 offenders) ===");
const slugSorted = Object.entries(perSlug).sort((a, b) => b[1].total - a[1].total);
for (const [slug, info] of slugSorted.slice(0, 20)) {
  const cols = Object.entries(info.byCol).map(([c, n]) => `${c}=${n}`).join(" ");
  console.log(`  ${info.total.toString().padStart(3)} dashes  ${slug.padEnd(60)}  [${cols}]`);
}
if (slugSorted.length > 20) console.log(`  ...and ${slugSorted.length - 20} more`);

console.log(`\nTotal affected slugs: ${slugSorted.length} of ${data.length}`);

// Sample offending snippets for the top 3 by count, to show what fixes will look like.
console.log("\n=== Sample offending snippets ===");
for (const [slug, info] of slugSorted.slice(0, 5)) {
  console.log(`\n${slug}:`);
  const row = data.find((r) => r.slug === slug);
  for (const col of Object.keys(info.byCol)) {
    const val = col === "faqs" ? JSON.stringify(row.faqs) : row[col];
    if (typeof val !== "string") continue;
    // Print snippets around each dash
    const idxs = [];
    for (let i = 0; i < val.length; i++) {
      if (val[i] === "—" || val[i] === "–") idxs.push(i);
    }
    for (const idx of idxs.slice(0, 3)) {
      const start = Math.max(0, idx - 30);
      const end = Math.min(val.length, idx + 31);
      console.log(`  ${col.padEnd(15)}: ...${val.slice(start, end).replace(/\n/g, " ")}...`);
    }
    if (idxs.length > 3) console.log(`  ${col.padEnd(15)}: ...and ${idxs.length - 3} more in this column`);
  }
}
