// Audit: for each high-search-intent Indian govt job/scheme/exam expected
// to be trending in July 2026, check if a page exists on the site.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);

const jobsRes = await supabase.from("jobs").select("slug, title, is_active");
const examsRes = await supabase.from("entrance_exams").select("slug, title, is_active");
const blogsRes = await supabase.from("blog_posts").select("slug, title, is_active");
const schemesRes = await supabase.from("schemes").select("slug, title, is_active");

const jobs = jobsRes.data || [];
const exams = examsRes.data || [];
const blogs = blogsRes.data || [];
const schemes = schemesRes.data || [];

console.log(`Content counts: jobs ${jobs.length} (active ${jobs.filter(x=>x.is_active).length}), exams ${exams.length} (active ${exams.filter(x=>x.is_active).length}), blogs ${blogs.length} (active ${blogs.filter(x=>x.is_active).length}), schemes ${schemes.length} (active ${schemes.filter(x=>x.is_active).length})`);

// High-search topics expected in July-August 2026
const topSearchTopics = [
  { name: "RBI Grade B 2026", terms: ["rbi", "grade b", "grade-b"], category: "banking" },
  { name: "SBI PO 2026", terms: ["sbi po", "state bank probationary", "sbi-po"], category: "banking" },
  { name: "IBPS PO 2026", terms: ["ibps po", "ibps-po"], category: "banking" },
  { name: "IBPS Clerk 2026", terms: ["ibps clerk", "ibps-clerk"], category: "banking" },
  { name: "SBI Clerk 2026", terms: ["sbi clerk", "sbi-clerk"], category: "banking" },
  { name: "NABARD Grade A 2026", terms: ["nabard"], category: "banking" },
  { name: "SEBI Grade A 2026", terms: ["sebi"], category: "banking" },
  { name: "SSC CHSL 2026", terms: ["ssc chsl", "ssc-chsl", "chsl"], category: "ssc" },
  { name: "SSC CGL 2026", terms: ["ssc cgl", "ssc-cgl"], category: "ssc" },
  { name: "SSC GD 2026", terms: ["ssc gd", "ssc-gd"], category: "ssc" },
  { name: "SSC MTS 2026", terms: ["ssc mts", "ssc-mts"], category: "ssc" },
  { name: "UPSC CDS 2026", terms: ["cds", "combined defence"], category: "defence" },
  { name: "UPSC NDA 2026", terms: ["nda", "national defence"], category: "defence" },
  { name: "UPSC EPFO 2026", terms: ["epfo", "enforcement officer"], category: "upsc" },
  { name: "UPSC IES ISS 2026", terms: ["indian economic service", "indian statistical service", "iss "], category: "upsc" },
  { name: "RRB ALP 2026", terms: ["rrb alp", "assistant loco pilot"], category: "railway" },
  { name: "RRB Technician 2026", terms: ["rrb technician"], category: "railway" },
  { name: "RRB NTPC 2026", terms: ["ntpc"], category: "railway" },
  { name: "RRB Group D 2026", terms: ["group d", "group-d"], category: "railway" },
  { name: "CTET July 2026", terms: ["ctet"], category: "teaching" },
  { name: "UGC NET 2026", terms: ["ugc net", "ugc-net"], category: "teaching" },
  { name: "IBPS RRB Clerk 2026", terms: ["rrb clerk", "office assistant"], category: "banking" },
  { name: "IB ACIO 2026", terms: ["ib acio", "intelligence bureau"], category: "central" },
  { name: "AIIMS Recruitment 2026", terms: ["aiims"], category: "medical" },
  { name: "LIC AAO 2026", terms: ["lic aao"], category: "insurance" },
  { name: "IRDAI Assistant Manager 2026", terms: ["irdai"], category: "insurance" },
];

const combined = [...jobs, ...exams, ...blogs].map((x) => ({
  slug: x.slug,
  title: x.title.toLowerCase(),
  is_active: x.is_active,
}));

console.log("\n=== HIGH-SEARCH TOPICS GAP ANALYSIS ===");
const gaps = [];
for (const topic of topSearchTopics) {
  const matches = combined.filter((r) =>
    topic.terms.some((t) => r.slug.includes(t.replace(/\s+/g, "-")) || r.title.includes(t))
  );
  const activeMatches = matches.filter((m) => m.is_active);
  const status = activeMatches.length > 0 ? `HAS ${activeMatches.length} active` : matches.length > 0 ? `HAS ${matches.length} but INACTIVE` : "GAP";
  console.log(`[${status.padEnd(20)}] ${topic.name} (${topic.category})`);
  if (activeMatches.length > 0) {
    activeMatches.forEach((m) => console.log(`                       -> ${m.slug}`));
  }
  if (activeMatches.length === 0) gaps.push(topic);
}

console.log(`\n=== ${gaps.length} GAPS ===`);
gaps.forEach((g) => console.log(`- ${g.name} (${g.category})`));
