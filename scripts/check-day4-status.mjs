// Day 4 verification: current DB state for the 5 schemes + 1 new exam gap.
// Reads Supabase creds from .env.local (no hardcoded keys).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = Object.fromEntries(
  readFileSync(join(__dirname, "..", ".env.local"), "utf8")
    .split("\n")
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^["']|["']$/g, "")];
    }),
);

const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY,
);

const wc = (s) => {
  if (!s) return 0;
  return String(s).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().split(/\s+/).length;
};

const day4Schemes = [
  "pm-garib-kalyan-anna-yojana",
  "pm-jeevan-jyoti-bima-yojana",
  "pm-surya-ghar-muft-bijli-yojana-rooftop-solar-2026",
  "pm-kusum-yojana-solar-pump-for-farmers-2026",
  "pmegp-prime-ministers-employment-generation-2026",
];

console.log("\n=== Day 4 schemes (current state) ===");
for (const slug of day4Schemes) {
  const { data, error } = await supabase
    .from("schemes")
    .select("slug,title,description,content,is_active,updated_at")
    .eq("slug", slug)
    .maybeSingle();
  if (error) {
    console.log(`  ERROR ${slug}: ${error.message}`);
    continue;
  }
  if (!data) {
    console.log(`  MISSING: ${slug}`);
    continue;
  }
  const w = wc(data.content);
  const tag = w >= 3000 ? "DEEP " : w >= 2000 ? "MED  " : w >= 800 ? "MED- " : "THIN ";
  console.log(`  ${tag} ${String(w).padStart(5)}w  active=${data.is_active}  title(${(data.title || "").length}c)  updated ${data.updated_at}`);
  console.log(`         slug: ${slug}`);
  console.log(`         title: ${data.title}`);
}

console.log("\n=== Day 4 new exam slot: NVS PGT/TGT 2026 (gap check) ===");
const nvsCandidates = [
  "nvs-pgt-2026",
  "nvs-tgt-2026",
  "nvs-pgt-tgt-2026",
  "navodaya-vidyalaya-pgt-tgt-2026",
  "nvs-recruitment-2026",
];
for (const slug of nvsCandidates) {
  const { data } = await supabase
    .from("entrance_exams")
    .select("slug,name,content,is_active")
    .eq("slug", slug)
    .maybeSingle();
  if (data) {
    console.log(`  EXISTS: ${slug}  active=${data.is_active}  ${wc(data.content)}w`);
  } else {
    console.log(`  gap  : ${slug}`);
  }
}

// Broader fuzzy check for anything NVS/Navodaya-related in either table
console.log("\n=== Fuzzy NVS / Navodaya matches (both tables) ===");
for (const t of ["entrance_exams", "schemes", "jobs"]) {
  const nameCol = t === "entrance_exams" ? "name" : "title";
  const { data } = await supabase
    .from(t)
    .select(`slug,${nameCol},is_active`)
    .or(`slug.ilike.%nvs%,slug.ilike.%navodaya%,${nameCol}.ilike.%navodaya%`);
  if (data && data.length) {
    console.log(`  ${t}:`);
    for (const r of data) console.log(`    ${r.slug}  (${r[nameCol]})  active=${r.is_active}`);
  } else {
    console.log(`  ${t}: no matches`);
  }
}
