// One-off: report which of the 7 target job postings already exist in DB.
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xtjbijvxxeoopcqxycpz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY",
);

const targets = [
  { name: "SBI PO", terms: ["sbi", "state bank", "probationary officer"] },
  { name: "RBI Young Professionals", terms: ["rbi", "reserve bank", "young professional"] },
  { name: "RRB Technician", terms: ["rrb", "railway recruitment board", "technician"] },
  { name: "UPSC CSE", terms: ["upsc", "civil services", "cse"] },
  { name: "SSC CGL", terms: ["ssc cgl", "combined graduate level"] },
  { name: "Indian Navy SSC Officer", terms: ["navy", "ssc officer"] },
  { name: "NBEMS Recruitment", terms: ["nbems", "national board of examinations"] },
];

const { data: jobs, error } = await supabase
  .from("jobs")
  .select("slug, title, organization, last_date, is_active, published_at")
  .order("published_at", { ascending: false });

if (error) {
  console.error(error);
  process.exit(1);
}

console.log(`\nTotal jobs in DB: ${jobs.length}`);
console.log(`Today: ${new Date().toISOString().slice(0, 10)}\n`);

for (const target of targets) {
  const matches = jobs.filter((j) => {
    const haystack = `${j.slug} ${j.title} ${j.organization ?? ""}`.toLowerCase();
    return target.terms.some((t) => haystack.includes(t.toLowerCase()));
  });
  console.log(`=== ${target.name} ===`);
  if (matches.length === 0) {
    console.log("  (none in DB)\n");
    continue;
  }
  for (const m of matches) {
    const stale = m.last_date && new Date(m.last_date) < new Date();
    console.log(`  ${m.is_active ? "[LIVE]" : "[HIDDEN]"} ${stale ? "[EXPIRED]" : "[OPEN]  "} ${m.slug}`);
    console.log(`     title: ${m.title}`);
    console.log(`     last:  ${m.last_date ?? "(none)"}`);
  }
  console.log();
}
