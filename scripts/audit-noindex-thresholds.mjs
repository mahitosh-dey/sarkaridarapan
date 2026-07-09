// One-off audit: for each state and category, how many active jobs exist?
// Prints which pages will be indexed vs noindexed under the >=5 threshold.
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xtjbijvxxeoopcqxycpz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY",
);

const [{ data: jobs, error: jobsErr }, { data: schemes, error: schemesErr }] = await Promise.all([
  supabase.from("jobs").select("state, category").eq("is_active", true),
  supabase.from("schemes").select("state").eq("is_active", true),
]);
if (jobsErr || schemesErr) {
  console.error(jobsErr || schemesErr);
  process.exit(1);
}

const jobCountByState = new Map();
const schemeCountByState = new Map();
const categoryCounts = new Map();

for (const job of jobs) {
  if (job.state) jobCountByState.set(job.state, (jobCountByState.get(job.state) ?? 0) + 1);
  if (job.category) categoryCounts.set(job.category, (categoryCounts.get(job.category) ?? 0) + 1);
}
for (const scheme of schemes) {
  if (scheme.state) schemeCountByState.set(scheme.state, (schemeCountByState.get(scheme.state) ?? 0) + 1);
}

const allIndiaSchemes = schemeCountByState.get("all-india") ?? 0;

function tier(count) {
  if (count === 0) return "NOINDEX+NOFOLLOW";
  if (count < 3) return "NOINDEX+FOLLOW";
  return "INDEX";
}

console.log(`\n=== STATE PAGES — combined counts ===`);
console.log(`(state page shows state-specific + all-india central schemes)`);
console.log(`All-India central schemes visible on every state page: ${allIndiaSchemes}\n`);

const allStateSlugs = new Set([...jobCountByState.keys(), ...schemeCountByState.keys()]);
const stateRows = [];
for (const slug of allStateSlugs) {
  if (slug === "all-india") continue;
  const j = jobCountByState.get(slug) ?? 0;
  const sSpecific = schemeCountByState.get(slug) ?? 0;
  const sTotal = sSpecific + allIndiaSchemes; // what the state page actually shows
  stateRows.push({ slug, j, sSpecific, sTotal, combined: j + sTotal });
}
stateRows.sort((a, b) => b.combined - a.combined);

console.log(`slug                     jobs  state-specific-schemes  combined-total  tier`);
for (const r of stateRows) {
  console.log(
    `${r.slug.padEnd(24)} ${r.j.toString().padStart(4)}   ${r.sSpecific.toString().padStart(3)}                     ${r.combined.toString().padStart(3)}             ${tier(r.combined)}`,
  );
}

console.log(`\n=== CATEGORIES (jobs only, unchanged) ===`);
const catRows = [...categoryCounts.entries()].sort((a, b) => b[1] - a[1]);
for (const [slug, count] of catRows) {
  console.log(`${count.toString().padStart(3)}  ${tier(count).padEnd(18)}  ${slug}`);
}

console.log(`\nTotal active jobs: ${jobs.length}`);
console.log(`Total active schemes: ${schemes.length}`);
