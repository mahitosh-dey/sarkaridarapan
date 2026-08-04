// Day 14 (Tue 2026-08-04) — cannibalisation fix: 4 duplicate exam pages.
// These slugs are live at BOTH /entrance-exams/<slug> and /sarkari-naukri/<slug>, both
// indexable, both in the sitemap, splitting ranking signals on banking keywords.
// Taxonomy rule applied: recruitment exams belong under /sarkari-naukri/;
// /entrance-exams/ is for genuine entrance exams (NEET, JEE, CAT, CLAT, GATE, CUET).
// In every case here the JOB page is longer, so it becomes canonical and the exam row is
// deactivated. Companion 301s live in next.config.js.
// rrb-group-d-2026 is deliberately NOT included: its exam page is 4825w and richer than the
// job page, so it needs a content merge first and is handled separately.
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";

const env = Object.fromEntries(
  readFileSync(".env.local","utf8").split("\n").filter(l=>l&&!l.startsWith("#")&&l.includes("="))
    .map(l=>{const i=l.indexOf("=");return [l.slice(0,i).trim(), l.slice(i+1).trim().replace(/^["']|["']$/g,"")];}));
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const SITE = "https://www.sarkaridarapan.com";

const SLUGS = ["sbi-po-2026","ibps-clerk-2026","ibps-po-2026","ibps-rrb-2026"];

for (const slug of SLUGS) {
  const { error } = await sb.from("entrance_exams")
    .update({ is_active:false, updated_at:new Date().toISOString() }).eq("slug", slug);
  if (error) { console.error(`FAIL ${slug}:`, error.message); process.exit(1); }
  console.log(`OK deactivated entrance_exams/${slug}`);
  for (const q of [`path=${encodeURIComponent("/entrance-exams/"+slug)}`, `tag=exam-${slug}`, "tag=entrance-exams"]) {
    const r = await fetch(`${SITE}/api/revalidate?${q}`);
    if (r.status !== 200) console.log(`   warn revalidate ${q}: HTTP ${r.status}`);
  }
}
console.log("\nAll 4 duplicate exam rows deactivated and revalidated.");
