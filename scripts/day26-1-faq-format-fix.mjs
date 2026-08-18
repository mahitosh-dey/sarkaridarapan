// Convert FAQ questions from "### Question?" to "**Question?**" (2026-08-18)
//
// WHY
// A rendered-schema audit found 9 live pages emitting ZERO FAQPage questions.
// Six of them already carry good FAQ content, written as H3 headings. The
// parser only extracts BOLD questions, so none of it reaches structured data.
// Four of the six are large, complete pages (mptet 5409w, uptet 4537w,
// nvs-pgt-tgt 3242w, reet 3056w) that are nowhere near the thin-content list,
// so they would never have been fixed as a side effect of deepening work.
//
// IMPORTANT CORRECTION TO AN EARLIER ASSUMPTION: heading CASE is not the cause.
// Pages with a Title Case "## Frequently Asked Questions" heading still emit
// schema fine when their questions are bold (nda-2-2026 and others do). The
// cause is purely the question format. Casing is normalised here anyway for
// sentence-case consistency, but it is not what was breaking the schema.
//
// SAFETY
//   - Only lines INSIDE the FAQ section are touched, bounded by the FAQ heading
//     and the next "## " heading (or end of content).
//   - Only H3 lines ending in a question mark are converted.
//   - Aborts if the conversion would produce zero bold questions.
//   - Content outside the FAQ section is left byte-identical.

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

const TARGETS = [
  { slug: "mptet-2026", table: "entrance_exams", path: "/entrance-exams", tag: "exam" },
  { slug: "uptet-2026", table: "entrance_exams", path: "/entrance-exams", tag: "exam" },
  { slug: "nvs-pgt-tgt-2026", table: "entrance_exams", path: "/entrance-exams", tag: "exam" },
  { slug: "reet-2026", table: "entrance_exams", path: "/entrance-exams", tag: "exam" },
  { slug: "ssc-cgl-2026-salary-7th-pay-commission", table: "blog_posts", path: "/blog", tag: "blog-post" },
  { slug: "best-books-for-ssc-cgl-2026-tier-1-and-tier-2", table: "blog_posts", path: "/blog", tag: "blog-post" },
];

const FAQ_HEADING = /^## Frequently [Aa]sked [Qq]uestions\s*$/m;

function convert(content) {
  const m = content.match(FAQ_HEADING);
  if (!m) return { ok: false, reason: "no FAQ heading" };
  const start = m.index;
  const after = content.slice(start + m[0].length);
  const nextH2 = after.search(/\n## /);
  const endRel = nextH2 === -1 ? after.length : nextH2;
  const before = content.slice(0, start);
  let section = m[0] + after.slice(0, endRel);
  const tail = after.slice(endRel);

  // normalise heading to sentence case
  section = section.replace(FAQ_HEADING, "## Frequently asked questions");
  // convert H3 questions to bold, inside this section only
  const converted = section.replace(/^###\s+(.+\?)\s*$/gm, (_m, q) => `**${q.trim()}**`);
  const boldCount = (converted.match(/\*\*[^*\n]{8,300}\?\*\*/g) || []).length;
  if (boldCount === 0) return { ok: false, reason: "conversion produced 0 bold questions" };
  const out = before + converted + tail;
  // outside-section integrity check
  if (out.slice(0, start) !== content.slice(0, start)) return { ok: false, reason: "content before FAQ changed" };
  return { ok: true, content: out, boldCount };
}

let done = 0, failed = 0;
for (const t of TARGETS) {
  const { data, error } = await supabase.from(t.table).select("slug,content").eq("slug", t.slug).single();
  if (error) { console.error(`  FAIL read ${t.slug}: ${error.message}`); failed++; continue; }

  const before = (data.content.match(/\*\*[^*\n]{8,300}\?\*\*/g) || []).length;
  const r = convert(data.content);
  if (!r.ok) { console.error(`  SKIP ${t.slug}: ${r.reason}`); failed++; continue; }
  if (/[—–]/.test(r.content)) { console.error(`  SKIP ${t.slug}: em/en dash present, not touching`); failed++; continue; }

  console.log(`  ${t.slug}: bold questions ${before} -> ${r.boldCount}`);
  if (process.env.DRY_RUN === "1") continue;

  const { error: uerr } = await supabase.from(t.table)
    .update({ content: r.content, updated_at: new Date().toISOString() }).eq("slug", t.slug);
  if (uerr) { console.error(`  FAIL write ${t.slug}: ${uerr.message}`); failed++; continue; }
  await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent(t.path + "/" + t.slug)}`);
  await fetch(`${SITE_URL}/api/revalidate?tag=${t.tag}-${t.slug}`);
  done++;
}
if (process.env.DRY_RUN !== "1") {
  await fetch(`${SITE_URL}/api/revalidate?tag=entrance-exams`);
  await fetch(`${SITE_URL}/api/revalidate?tag=blog-posts`);
}
console.log(`\nconverted: ${done} | skipped/failed: ${failed}`);
