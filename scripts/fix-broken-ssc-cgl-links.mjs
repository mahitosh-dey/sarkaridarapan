import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xtjbijvxxeoopcqxycpz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY",
);

const CORRECT_SLUG = "ssc-cgl-2026-syllabus-preparation-guide";
const BROKEN_SLUGS = [
  "ssc-cgl-2026-preparation-guide",
  "ssc-cgl-exam-preparation-guide-2026",
];

const AFFECTED_JOBS = [
  "indian-air-force-agniveer-vayu-2026",
  "tnpsc-group-4-2026",
  "ib-acio-2026",
  "lic-aao-2026",
];

const DRY = process.argv.includes("--dry");

for (const slug of AFFECTED_JOBS) {
  const { data, error } = await supabase.from("jobs").select("content").eq("slug", slug).single();
  if (error) { console.error(`READ FAIL ${slug}:`, error.message); continue; }

  let newContent = data.content;
  const beforeHits = [];
  for (const bad of BROKEN_SLUGS) {
    const re = new RegExp(bad.replace(/-/g, "\\-"), "g");
    const count = (data.content.match(re) || []).length;
    if (count > 0) beforeHits.push(`${bad}: ${count}`);
    newContent = newContent.replace(re, CORRECT_SLUG);
  }

  const afterHits = [];
  for (const bad of BROKEN_SLUGS) {
    const re = new RegExp(bad.replace(/-/g, "\\-"), "g");
    const c = (newContent.match(re) || []).length;
    if (c > 0) afterHits.push(`${bad}: ${c}`);
  }
  const newHits = (newContent.match(new RegExp(CORRECT_SLUG.replace(/-/g, "\\-"), "g")) || []).length;

  console.log(`\n=== ${slug} ===`);
  console.log("  Before:", beforeHits.join(", ") || "none");
  console.log("  After:", afterHits.join(", ") || "clean");
  console.log("  Correct-slug refs after fix:", newHits);

  if (DRY) continue;
  if (newContent === data.content) { console.log("  No change, skip write."); continue; }

  const { error: uErr } = await supabase.from("jobs").update({ content: newContent, updated_at: new Date().toISOString() }).eq("slug", slug);
  if (uErr) { console.error(`WRITE FAIL ${slug}:`, uErr.message); continue; }
  console.log("  Written. Revalidating...");

  const res = await fetch(`https://www.sarkaridarapan.com/api/revalidate?path=/sarkari-naukri/${slug}`);
  const j = await res.json();
  console.log("  Revalidate:", j.revalidated ? "OK" : "FAIL", j);
}

console.log("\nDone.");
