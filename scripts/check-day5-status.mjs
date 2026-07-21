// Day 5 DB state check: 5 scheme slugs + REET 2026 gap check.
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = Object.fromEntries(
  readFileSync(join(__dirname, "..", ".env.local"), "utf8")
    .split("\n").filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^["']|["']$/g, "")]; }),
);
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const wc = (s) => s ? String(s).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().split(/\s+/).length : 0;

const day5Schemes = [
  "pm-internship-scheme-2026-round-3-2026",
  "pm-matsya-sampada-yojana",
  "pm-kisan-samman-nidhi-yojana-2026",
  "jal-jeevan-mission-har-ghar-jal-2026",
  "national-scholarship-portal-nsp-2026-27-2026",
];

console.log("\n=== Day 5 schemes (current state) ===");
for (const slug of day5Schemes) {
  const { data, error } = await supabase.from("schemes").select("slug,title,description,content,is_active,updated_at").eq("slug", slug).maybeSingle();
  if (error) { console.log(`  ERROR ${slug}: ${error.message}`); continue; }
  if (!data) { console.log(`  MISSING: ${slug}`); continue; }
  const w = wc(data.content);
  const tag = w >= 3000 ? "DEEP " : w >= 2000 ? "MED  " : w >= 800 ? "MED- " : "THIN ";
  console.log(`  ${tag} ${String(w).padStart(5)}w  active=${data.is_active}  title(${(data.title || "").length}c) desc(${(data.description || "").length}c)  updated ${data.updated_at}`);
  console.log(`         slug: ${slug}`);
  console.log(`         title: ${data.title}`);
}

console.log("\n=== Day 5 new exam slot: REET 2026 (gap check) ===");
const reetCandidates = ["reet-2026", "reet-level-1-2-2026", "reet-rajasthan-tet-2026", "rajasthan-tet-2026", "rajasthan-eligibility-exam-teachers-2026"];
for (const slug of reetCandidates) {
  const { data } = await supabase.from("entrance_exams").select("slug,name,content,is_active").eq("slug", slug).maybeSingle();
  if (data) console.log(`  EXISTS: ${slug}  active=${data.is_active}  ${wc(data.content)}w`);
  else console.log(`  gap  : ${slug}`);
}

console.log("\n=== Fuzzy REET / Rajasthan TET matches (both tables) ===");
for (const t of ["entrance_exams", "schemes", "jobs"]) {
  const nameCol = t === "entrance_exams" ? "name" : "title";
  const { data } = await supabase.from(t).select(`slug,${nameCol},is_active`).or(`slug.ilike.%reet%,slug.ilike.%rajasthan-tet%,${nameCol}.ilike.%reet%,${nameCol}.ilike.%Rajasthan Eligibility%`);
  if (data && data.length) { console.log(`  ${t}:`); for (const r of data) console.log(`    ${r.slug}  (${r[nameCol]})  active=${r.is_active}`); }
  else console.log(`  ${t}: no matches`);
}
