// Day 13 (Mon 2026-08-03) — deactivate the stale duplicate RRB ALP page.
// It held CEN 01/2024 content (18,799 vacancies) and was serving publicly in Aug 2026,
// while the correct CEN 01/2026 page (rrb-alp-2026, 11,127 posts) was deactivated.
// Companion change: a 301 from this slug to /sarkari-naukri/rrb-alp-2026 in next.config.js.
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";

const env = Object.fromEntries(
  readFileSync(".env.local", "utf8").split("\n").filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^["']|["']$/g, "")]; }),
);
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const SLUG = "rrb-alp-railway-recruitment-board-assistant-loco-pilot-2026";
const SITE = "https://www.sarkaridarapan.com";

const { error } = await sb.from("jobs").update({ is_active: false, updated_at: new Date().toISOString() }).eq("slug", SLUG);
if (error) { console.error("FAIL:", error.message); process.exit(1); }
console.log(`OK deactivated jobs/${SLUG}`);

for (const q of [`path=${encodeURIComponent("/sarkari-naukri/" + SLUG)}`, `tag=job-${SLUG}`, "tag=jobs"]) {
  const r = await fetch(`${SITE}/api/revalidate?${q}`);
  console.log(`  revalidate ${q}: HTTP ${r.status}`);
}
