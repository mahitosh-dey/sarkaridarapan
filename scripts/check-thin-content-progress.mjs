// Wk 1 progress check: how much thin content remains vs baseline (2026-07-16).
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xtjbijvxxeoopcqxycpz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY",
);

const wc = (s) => {
  if (!s) return 0;
  return String(s).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().split(/\s+/).length;
};

async function analyze(table, bodyFields) {
  const { data } = await supabase.from(table).select("*");
  const rows = data || [];
  const sample = rows[0] || {};
  const field = bodyFields.find((f) => f in sample);
  const active = rows.filter((r) => r.is_active !== false);
  const withWc = active.map((r) => ({ slug: r.slug, w: wc(r[field]) }));

  const deep = withWc.filter((r) => r.w > 2000);
  const medium = withWc.filter((r) => r.w >= 800 && r.w <= 2000);
  const thin = withWc.filter((r) => r.w < 800);

  console.log(`\n${table.toUpperCase()}: ${active.length} active`);
  console.log(`  Deep   (>2000w): ${deep.length}`);
  console.log(`  Medium (800-2000w): ${medium.length}`);
  console.log(`  Thin   (<800w): ${thin.length}`);
  if (thin.length) {
    console.log(`  Thin items still to expand:`);
    thin.sort((a,b) => a.w - b.w).forEach((r) => {
      console.log(`    ${String(r.w).padStart(4)}w  ${r.slug}`);
    });
  }
  return { active: active.length, deep: deep.length, medium: medium.length, thin: thin.length };
}

console.log("=== Wk 1 Progress Snapshot (2026-07-17 EOD) ===");
console.log("Baseline (2026-07-16): schemes 37 thin, exams 7 thin, blogs 6 thin, jobs 26 thin");

const s = await analyze("schemes", ["content"]);
const e = await analyze("entrance_exams", ["content"]);
const b = await analyze("blog_posts", ["content"]);
const j = await analyze("jobs", ["content", "full_description", "description"]);

console.log("\n=== Delta vs baseline ===");
console.log(`Schemes thin: 37 -> ${s.thin}  (fixed ${37 - s.thin})`);
console.log(`Exams thin:   7 -> ${e.thin}   (fixed ${7 - e.thin})`);
console.log(`Blogs thin:   6 -> ${b.thin}   (fixed ${6 - b.thin})`);
console.log(`Jobs thin:    26 -> ${j.thin}  (fixed ${26 - j.thin})`);
console.log(`\nTotal thin remaining: ${s.thin + e.thin + b.thin + j.thin}`);
console.log(`Total thin fixed this week: ${(37 - s.thin) + (7 - e.thin) + (6 - b.thin) + (26 - j.thin)}`);
