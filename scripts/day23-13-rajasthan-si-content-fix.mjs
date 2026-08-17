// Rajasthan Police SI 2026 — remove the unsupported 1,076 figure from the body
//
// Verified 2026-08-15.
//
// Follow-up to the field-level safe-fix in day23-12. That cleared the
// `vacancies` column and stopped validThrough reaching schema, but the CONTENT
// BODY still asserted 1,076 vacancies in five places including a heading and a
// table total. So the page showed no count in its detail box while the prose
// stated one, and the stated one is supported by no source: reported figures
// include 1015 and 1206, and 1,076 matches neither.
//
// This replaces the assertions with the honest position rather than swapping in
// a different number. The post-wise table is retained as reported figures with
// an explicit caveat, because the CATEGORY STRUCTURE (SI Armed Police, SI
// Intelligence Bureau, SI MBC, Platoon Commander RAC) is corroborated even
// though the totals are not.
//
// Lesson recorded for future safe-fixes: clearing structured columns is not
// enough. A fabricated figure usually also lives in the prose, and a partial
// fix leaves the page self-contradictory.

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
const SITE_URL = "https://www.sarkaridarapan.com";
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const SLUG = "rajasthan-police-si-2026";

const { data, error } = await supabase.from("jobs").select("content").eq("slug", SLUG).single();
if (error) { console.error("read failed:", error.message); process.exit(1); }

const EDITS = [
  [/announcing 1,076 vacancies across/g,
   "announcing vacancies across"],
  [/This page covers the 1,076-vacancy breakdown,/g,
   "This page covers the post categories, the disputed vacancy figures,"],
  [/## 1,076 vacancies: post-wise breakdown/g,
   "## Post categories, and why the vacancy total is disputed"],
  [/The 1,076 total vacancies are split across four post categories/g,
   "Published sources disagree on the total, reporting figures including 1015 and 1206, so no total is asserted here. What is corroborated is that the recruitment covers four post categories"],
  [/\| Total \| 1,076 \| \|/g,
   "| Total | Disputed, see note above | |"],
];

let content = data.content, applied = 0;
for (const [re, rep] of EDITS) {
  const before = content;
  content = content.replace(re, rep);
  if (content !== before) applied++;
  else console.log(`  WARN pattern did not match: ${re}`);
}

const remaining = (content.match(/1,?076/g) || []).length;
console.log(`edits applied: ${applied}/${EDITS.length} | remaining "1076" refs: ${remaining}`);
if (/[—–]/.test(content)) { console.error("ABORT: em/en dash introduced"); process.exit(1); }

if (process.env.DRY_RUN === "1") { console.log("DRY_RUN=1: no write"); process.exit(0); }
if (remaining > 0) { console.error("ABORT: unsupported figure still present"); process.exit(1); }

const { error: uerr } = await supabase
  .from("jobs").update({ content, updated_at: new Date().toISOString() }).eq("slug", SLUG);
if (uerr) { console.error("FAIL:", uerr.message); process.exit(1); }
console.log(`OK jobs/${SLUG}`);

await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sarkari-naukri/" + SLUG)}`);
await fetch(`${SITE_URL}/api/revalidate?tag=job-${SLUG}`);
await fetch(`${SITE_URL}/api/revalidate?tag=jobs`);
console.log("revalidated");
