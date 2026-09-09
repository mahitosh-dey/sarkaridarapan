// Replay the edits made to data/*.json back into Supabase.
//
// WHY THIS EXISTS
//
// Since the 2026-09-01 egress outage the site renders from data/*.json, but
// Supabase is still the authoring database behind the admin panel. Every fix
// made directly to the JSON during the outage was recorded by
// scripts/apply-data-fix.py into data/sync/pending-supabase.json.
//
// When Supabase comes back on 19 September, the natural first move is to
// re-export the tables and refresh data/*.json. That would SILENTLY REVERT all
// 28 edits: ten corrected dates, twenty-one repositioned pages. This script is
// what makes the re-export safe, and scripts/csv-to-static-json.py refuses to
// run while anything here is unreplayed.
//
// SAFETY MODEL
//
// Each queued edit carries the value it replaced, in `previous`. Before writing,
// the script compares the CURRENT Supabase value against that. If they differ,
// somebody changed the row through the admin panel while the outage was on, and
// applying here would clobber their work. That row is reported as a conflict and
// skipped, never overwritten. Conflicts are for a human to read and resolve.
//
// Idempotent: an edit marked applied is skipped, so re-running is safe.
// Ordered: edits replay oldest-first, which matters for the one record holding
// two edits (national-scholarship-portal-nsp-2026-27-2026).
//
//   node scripts/replay-to-supabase.mjs --dry-run   plan only, no writes
//   node scripts/replay-to-supabase.mjs             apply
//   node scripts/replay-to-supabase.mjs --force <slug>   apply despite conflict

import { createClient } from "@supabase/supabase-js";
import { readFileSync, writeFileSync } from "node:fs";
import { planEdit, same } from "./lib/replay-plan.mjs";

const PENDING = "data/sync/pending-supabase.json";
const DRY = process.argv.includes("--dry-run");
const forceIdx = process.argv.indexOf("--force");
const FORCED = forceIdx !== -1 ? process.argv[forceIdx + 1] : null;

const env = Object.fromEntries(
  readFileSync(".env.local", "utf8").split("\n")
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^["']|["']$/g, "")]; })
);
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const queue = JSON.parse(readFileSync(PENDING, "utf8"));
queue.sort((a, b) => a.recorded_at.localeCompare(b.recorded_at));

const todo = queue.filter((e) => !e.applied_to_supabase);
console.log(`${queue.length} edits recorded, ${todo.length} not yet replayed.`);
if (DRY) console.log("DRY RUN: nothing will be written.\n");
if (todo.length === 0) { console.log("Nothing to do."); process.exit(0); }

let applied = 0, conflicts = 0, failed = 0;

for (const edit of todo) {
  const { table, slug, changes, previous } = edit;
  const label = `${table}/${slug}`;

  const { data: row, error } = await supabase
    .from(table).select("*").eq("slug", slug).single();

  if (error || !row) {
    console.error(`\nFAIL ${label}: cannot read row (${error?.message ?? "not found"})`);
    failed++;
    continue;
  }

  // Decision logic lives in scripts/lib/replay-plan.mjs and is covered by
  // scripts/test-replay-plan.mjs, because this runs once against production.
  const plan = planEdit(row, edit, FORCED === slug);

  if (plan.action === "skip") {
    console.log(`\nSKIP ${label}: Supabase already holds these values`);
    edit.applied_to_supabase = true;
    applied++;
    continue;
  }

  if (plan.action === "conflict") {
    console.warn(`\nCONFLICT ${label}: changed in Supabase since the edit was recorded`);
    for (const k of plan.fields) {
      console.warn(`   ${k}`);
      console.warn(`     expected : ${JSON.stringify(previous?.[k])?.slice(0, 110)}`);
      console.warn(`     found    : ${JSON.stringify(row[k])?.slice(0, 110)}`);
      console.warn(`     would set: ${JSON.stringify(changes[k])?.slice(0, 110)}`);
    }
    console.warn(`   SKIPPED. Review, then re-run with --force ${slug} to apply anyway.`);
    conflicts++;
    continue;
  }

  console.log(`\nAPPLY ${label}${FORCED === slug ? "  (forced)" : ""}`);
  for (const k of Object.keys(changes)) console.log(`   ${k}`);

  if (DRY) { applied++; continue; }

  const { error: werr } = await supabase
    .from(table)
    .update({ ...changes, updated_at: new Date().toISOString() })
    .eq("slug", slug);
  if (werr) {
    console.error(`   WRITE FAILED: ${werr.message}`);
    failed++;
    continue;
  }

  // Read back rather than trusting the write.
  const { data: after } = await supabase.from(table).select("*").eq("slug", slug).single();
  const verified = after && Object.entries(changes).every(([k, v]) => same(after[k], v));
  if (!verified) {
    console.error(`   VERIFY FAILED: values did not stick`);
    failed++;
    continue;
  }
  console.log(`   verified`);
  edit.applied_to_supabase = true;
  edit.applied_at = new Date().toISOString();
  applied++;
}

if (!DRY) writeFileSync(PENDING, JSON.stringify(queue, null, 2));

console.log(`\n${"=".repeat(52)}`);
console.log(`applied ${applied}   conflicts ${conflicts}   failed ${failed}`);
if (conflicts) console.log(`\n${conflicts} row(s) changed in Supabase since the edit. Read the diffs above before forcing.`);
if (failed) process.exit(1);
