import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xtjbijvxxeoopcqxycpz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY",
);

const BUCKETS = [
  { label: "Very thin (<300w)", min: 0, max: 299 },
  { label: "Thin (300-799w)", min: 300, max: 799 },
  { label: "Borderline (800-1499w)", min: 800, max: 1499 },
  { label: "OK depth (1500-2499w)", min: 1500, max: 2499 },
  { label: "Deep (2500+w)", min: 2500, max: Infinity },
];

const tables = [
  { name: "jobs", path: "/sarkari-naukri" },
  { name: "schemes", path: "/sarkari-yojana" },
  { name: "blog_posts", path: "/blog" },
  { name: "entrance_exams", path: "/entrance-exams" },
];

const wordCount = (s) => (s || "").trim().split(/\s+/).filter(Boolean).length;

let grandTotal = 0;
const grandBuckets = BUCKETS.map(() => ({ count: 0, sample: [] }));

for (const t of tables) {
  const { data, error } = await supabase.from(t.name).select("slug, title, content").eq("is_active", true);
  if (error) { console.error(t.name, error.message); continue; }

  const rows = data.map((r) => ({ ...r, words: wordCount(r.content) })).sort((a, b) => a.words - b.words);
  grandTotal += rows.length;

  console.log(`\n=== ${t.name.toUpperCase()} (${rows.length} active) ===`);

  const buckets = BUCKETS.map(() => ({ count: 0, sample: [] }));
  for (const r of rows) {
    const bi = BUCKETS.findIndex((b) => r.words >= b.min && r.words <= b.max);
    if (bi >= 0) {
      buckets[bi].count++;
      grandBuckets[bi].count++;
      if (buckets[bi].sample.length < 5) buckets[bi].sample.push({ slug: r.slug, words: r.words, title: r.title });
      if (grandBuckets[bi].sample.length < 8) grandBuckets[bi].sample.push({ table: t.name, path: t.path, slug: r.slug, words: r.words });
    }
  }

  for (let i = 0; i < BUCKETS.length; i++) {
    const b = BUCKETS[i];
    const bk = buckets[i];
    if (bk.count === 0) continue;
    console.log(`\n  ${b.label}: ${bk.count} pages`);
    for (const s of bk.sample) console.log(`    ${s.words}w  ${s.slug}  (${s.title.slice(0, 55)})`);
    if (bk.count > 5) console.log(`    ...and ${bk.count - 5} more`);
  }
}

console.log(`\n\n============================================`);
console.log(`SITE-WIDE TOTAL: ${grandTotal} active pages`);
console.log(`============================================`);
for (let i = 0; i < BUCKETS.length; i++) {
  const b = BUCKETS[i];
  const bk = grandBuckets[i];
  const pct = ((bk.count / grandTotal) * 100).toFixed(1);
  console.log(`  ${b.label.padEnd(28)}: ${String(bk.count).padStart(3)} pages (${pct}%)`);
}

console.log(`\nWorst offenders (very-thin sample across all tables):`);
for (const s of grandBuckets[0].sample) console.log(`  ${s.words}w  ${s.path}/${s.slug}  [${s.table}]`);
