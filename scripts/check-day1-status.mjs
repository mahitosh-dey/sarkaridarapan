// Day 1 verification: check DB word count for the 6 Day 1 items.
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xtjbijvxxeoopcqxycpz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY",
);

const wc = (s) => {
  if (!s) return 0;
  return String(s).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().split(/\s+/).length;
};

const day1Schemes = [
  "atal-pension-yojana-apy-2026",
  "pradhan-mantri-jan-dhan-yojana-pmjdy-2026",
  "pm-awas-yojana-gramin-pmay-g-2026",
  "pm-awas-yojana-urban-20-pmay-u-2026",
  "pm-fasal-bima-yojana-pmfby-2026",
];

console.log("\n=== Day 1 schemes (target ≥ 2000w) ===");
for (const slug of day1Schemes) {
  const { data } = await supabase.from("schemes").select("slug,title,content,is_active,updated_at").eq("slug", slug).single();
  if (!data) {
    console.log(`  MISSING: ${slug}`);
    continue;
  }
  const w = wc(data.content);
  const flag = w >= 2000 ? "OK   " : "THIN ";
  console.log(`  ${flag} ${String(w).padStart(5)}w  ${slug}  (updated ${data.updated_at})`);
}

console.log("\n=== Day 1 new exam: rrb-group-d-2026 ===");
const { data: exam } = await supabase.from("entrance_exams").select("slug,name,content,is_active,updated_at").eq("slug", "rrb-group-d-2026").maybeSingle();
if (!exam) {
  console.log("  MISSING: rrb-group-d-2026 not found in entrance_exams");
} else {
  const w = wc(exam.content);
  console.log(`  ${w >= 2000 ? "OK   " : "THIN "} ${String(w).padStart(5)}w  ${exam.slug}  active=${exam.is_active}  (updated ${exam.updated_at})`);
}
