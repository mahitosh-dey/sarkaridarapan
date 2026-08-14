// Remove hardcoded relative-time references that have gone stale (2026-08-14).
//
// Follow-up to the DRDO CEPTAM fix. A sweep for countdown language across all
// 213 live rows found 27 matches. This script fixes the clearly-broken subset:
// countdowns in HEADINGS, and "today is the last day" assertions, which are
// unhedged claims that are simply false once the date passes.
//
// INCLUDING ONE OF MY OWN. The ibps-po-2026 rewrite published earlier today
// contains "the paper is days away" with no date anchor. That is the exact
// defect I had just criticised on the DRDO page. Fixed here.
//
// FIXED IN THIS PASS:
//   ibps-po-2026          "the paper is days away" -> absolute date
//   ugc-net-june-2026     heading "11 Days to Go" -> plain heading
//   cds-2-2026            heading "September 13 is 94 Days Away" -> plain
//   delhi-hjs-2026        "(9 days remaining)" -> dropped
//   ctet-september-2026   "today is the last day to apply" -> absolute date
//   neet-pg-2026          "today is the last opportunity" -> conditional
//
// Two of the heading fixes also remove em dashes and Title Case, so they close
// humanizer violations at the same time.
//
// NOT FIXED HERE (deliberately): six rows carrying "N days away at the time of
// writing" (upsc-civil-services-2026, neet-pg-2026, bsnl-jto-2026,
// upsc-cms-2026, upsssc-forest-guard-2026, upsssc-lower-pcs-2026). Those are
// explicitly hedged and date-anchored, so they read as a historical statement
// rather than a false present-tense claim. They should still be rewritten when
// each page is deepened, but editing them blind risks mangling surrounding
// prose for less benefit. Logged for the deepening queue.
//
// Content-only edits. No structured fields touched.

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

const FIXES = [
  {
    table: "jobs", path: "/sarkari-naukri", tag: "job", slug: "ibps-po-2026",
    edits: [[/your call letter is the immediate concern and the paper is days away/g,
             "your call letter is the immediate concern and the paper is on 22 and 23 August 2026"]],
  },
  {
    table: "entrance_exams", path: "/entrance-exams", tag: "exam", slug: "ugc-net-june-2026",
    edits: [
      [/##\s*Preparation Tips\s*[—–-]\s*11 Days to Go/g, "## Preparation tips"],
      [/The UGC NET June 2026 exam is 11 days away/g, "The UGC NET June 2026 exam is conducted by NTA"],
    ],
  },
  {
    table: "entrance_exams", path: "/entrance-exams", tag: "exam", slug: "cds-2-2026",
    edits: [[/##\s*Preparation Plan\s*[—–-]\s*September 13 is 94 Days Away/g,
             "## Preparation plan for the September 13 exam"]],
  },
  {
    table: "jobs", path: "/sarkari-naukri", tag: "job", slug: "delhi-hjs-2026",
    edits: [[/\*\*Last-mile preparation priorities \(9 days remaining\):\*\*/g,
             "**Last-mile preparation priorities:**"]],
  },
  {
    table: "entrance_exams", path: "/entrance-exams", tag: "exam", slug: "ctet-september-2026",
    edits: [[/\*\*Application closes June 10, 2026\s*[—–-]\s*today is the last day to apply/g,
             "**Applications closed on 10 June 2026"]],
  },
  {
    table: "entrance_exams", path: "/entrance-exams", tag: "exam", slug: "neet-pg-2026",
    edits: [[/and today is the last opportunity to correct any of it/g,
             "and the correction window is the only opportunity to fix any of it"]],
  },
];

let changed = 0, missed = 0;
for (const fix of FIXES) {
  const { data } = await supabase.from(fix.table).select("slug,content").eq("slug", fix.slug).maybeSingle();
  if (!data) { console.log(`  SKIP ${fix.slug} (not found)`); missed++; continue; }

  let content = data.content, applied = 0;
  for (const [re, rep] of fix.edits) {
    const before = content;
    content = content.replace(re, rep);
    if (content !== before) applied++;
    else console.log(`  WARN ${fix.slug}: pattern did not match -> ${re}`);
  }
  if (!applied) { console.log(`  NO-OP ${fix.slug}`); missed++; continue; }

  if (process.env.DRY_RUN === "1") {
    console.log(`  DRY_RUN ${fix.slug}: ${applied}/${fix.edits.length} edit(s) would apply`);
    continue;
  }

  const { error } = await supabase.from(fix.table)
    .update({ content, updated_at: new Date().toISOString() }).eq("slug", fix.slug);
  if (error) { console.error(`  FAIL ${fix.slug}:`, error.message); missed++; continue; }
  console.log(`  OK ${fix.slug} (${applied} edit(s))`);
  changed++;

  await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent(fix.path + "/" + fix.slug)}`);
  await fetch(`${SITE_URL}/api/revalidate?tag=${fix.tag}-${fix.slug}`);
}

if (process.env.DRY_RUN !== "1") {
  await fetch(`${SITE_URL}/api/revalidate?tag=jobs`);
  await fetch(`${SITE_URL}/api/revalidate?tag=entrance-exams`);
}
console.log(`\nchanged: ${changed} | skipped or failed: ${missed}`);
