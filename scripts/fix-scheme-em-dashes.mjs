// Sweep and fix em/en dashes across every active scheme row and every
// text column. Applies contextual replacement rules from HARD RULE 3
// (humanizer anti-pattern #14):
//   period (new sentence), comma (aside), colon (explanation), or
//   parentheses. No em/en dashes anywhere in user-facing text.
//
// Replacement heuristics, applied in order:
//   1. Number ranges (7–15, 18–25, ₹1.20–1.30) become "X to Y".
//   2. Spaced em/en dash between clauses becomes ". " with the next
//      word capitalised, creating a clean sentence break.
//   3. Leading em/en dash at start of a bullet/list line becomes empty.
//   4. Remaining bare em/en dashes become a hyphen (safe for compound
//      words that got broken by the earlier passes).
//
// After DB update: bulk revalidate + IndexNow ping on every affected
// slug. Same pattern as fix-7-length-bugs.mjs.
//
// Usage:
//   node scripts/fix-scheme-em-dashes.mjs --preview   # show 8 sample rewrites, no writes
//   node scripts/fix-scheme-em-dashes.mjs             # execute

import { createClient } from "@supabase/supabase-js";
import { pingIndexNowBatch } from "./lib/indexnow.mjs";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";
const SITE_URL = "https://www.sarkaridarapan.com";

const PREVIEW = process.argv.includes("--preview");
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const TEXT_COLUMNS = [
  "title", "description", "ministry", "launched_by",
  "objective", "how_to_apply", "content",
];
// Columns stored as JSONB arrays-of-strings — need per-item stripping.
const ARRAY_COLUMNS = ["eligibility", "benefits", "documents"];

function stripDashes(text) {
  if (typeof text !== "string" || !text) return text;
  let out = text;

  // 1. Number ranges: "7–15", "18–25", "1.20–1.30", "₹500–1000"
  //    Convert the dash to " to " while keeping the numbers intact.
  out = out.replace(/(\d+(?:\.\d+)?)\s*[—–]\s*(\d+(?:\.\d+)?)/g, "$1 to $2");

  // 2. Markdown bold close followed by dash: "**text** — next" → "**text**. Next"
  out = out.replace(/\*\*\s*[—–]\s*(\w)/g, (m, next) => `**. ${next.toUpperCase()}`);

  // 3. Spaced em/en dash mid-sentence: " — next" → ". Next"
  out = out.replace(/\s+[—–]\s+(\w)/g, (m, next) => `. ${next.toUpperCase()}`);

  // 4. Bullet-line leading em/en dash: "- — text" or "  — text" → strip
  out = out.replace(/([-*\s])\s*[—–]\s+/g, "$1 ");

  // 5. Any remaining bare em/en dash → hyphen (safe fallback for compound
  //    words or contexts we haven't matched).
  out = out.replace(/[—–]/g, "-");

  return out;
}

function stripDashesInFaqs(faqs) {
  if (!Array.isArray(faqs)) return faqs;
  return faqs.map((f) => ({
    ...f,
    question: stripDashes(f.question),
    answer: stripDashes(f.answer),
  }));
}

function stripDashesInArray(arr) {
  if (!Array.isArray(arr)) return arr;
  return arr.map((item) => (typeof item === "string" ? stripDashes(item) : item));
}

const { data, error } = await supabase
  .from("schemes")
  .select("*")
  .eq("is_active", true);

if (error) {
  console.error("Read error:", error.message);
  process.exit(1);
}

const affected = [];
let totalDashesRemoved = 0;

for (const row of data) {
  const updates = {};
  let rowChanged = false;
  let rowDashes = 0;

  for (const col of TEXT_COLUMNS) {
    const val = row[col];
    if (typeof val !== "string" || !val) continue;
    if (!/[—–]/.test(val)) continue;
    const before = (val.match(/[—–]/g) || []).length;
    const after = stripDashes(val);
    const remaining = (after.match(/[—–]/g) || []).length;
    if (remaining > 0) {
      console.error(`WARN: ${row.slug}.${col} still has ${remaining} dashes after fix`);
    }
    updates[col] = after;
    rowChanged = true;
    rowDashes += before - remaining;
  }

  // Array-of-strings columns: eligibility, benefits, documents
  for (const col of ARRAY_COLUMNS) {
    const arr = row[col];
    if (!Array.isArray(arr) || arr.length === 0) continue;
    const arrStr = JSON.stringify(arr);
    if (!/[—–]/.test(arrStr)) continue;
    const before = (arrStr.match(/[—–]/g) || []).length;
    const newArr = stripDashesInArray(arr);
    const afterStr = JSON.stringify(newArr);
    const remaining = (afterStr.match(/[—–]/g) || []).length;
    if (remaining > 0) {
      console.error(`WARN: ${row.slug}.${col} still has ${remaining} dashes after fix`);
    }
    updates[col] = newArr;
    rowChanged = true;
    rowDashes += before - remaining;
  }

  if (Array.isArray(row.faqs) && row.faqs.length) {
    const faqStr = JSON.stringify(row.faqs);
    if (/[—–]/.test(faqStr)) {
      const before = (faqStr.match(/[—–]/g) || []).length;
      const newFaqs = stripDashesInFaqs(row.faqs);
      const afterStr = JSON.stringify(newFaqs);
      const remaining = (afterStr.match(/[—–]/g) || []).length;
      if (remaining > 0) {
        console.error(`WARN: ${row.slug}.faqs still has ${remaining} dashes after fix`);
      }
      updates.faqs = newFaqs;
      rowChanged = true;
      rowDashes += before - remaining;
    }
  }

  if (rowChanged) {
    affected.push({ slug: row.slug, dashesRemoved: rowDashes, updates });
    totalDashesRemoved += rowDashes;
  }
}

console.log(`\n=== Sweep result ===`);
console.log(`Rows checked : ${data.length}`);
console.log(`Rows affected: ${affected.length}`);
console.log(`Dashes removed: ${totalDashesRemoved}`);

if (PREVIEW) {
  console.log(`\n=== Preview: 5 sample before/after snippets ===`);
  for (const row of affected.slice(0, 5)) {
    console.log(`\n${row.slug}:`);
    for (const [col, newVal] of Object.entries(row.updates)) {
      if (col === "faqs") continue;
      if (typeof newVal !== "string") continue;
      const oldVal = data.find((r) => r.slug === row.slug)[col];
      // Find a snippet where the old had a dash
      const dashIdx = oldVal.search(/[—–]/);
      if (dashIdx < 0) continue;
      const start = Math.max(0, dashIdx - 40);
      const end = Math.min(oldVal.length, dashIdx + 41);
      console.log(`  ${col}:`);
      console.log(`    BEFORE: ...${oldVal.slice(start, end).replace(/\n/g, " ")}...`);
      // Find corresponding new snippet — use first 80 chars of the changed sentence
      const newSnip = newVal.slice(start, end + 5);
      console.log(`    AFTER : ...${newSnip.replace(/\n/g, " ")}...`);
    }
  }
  console.log(`\nDRY RUN. Re-run without --preview to execute.`);
  process.exit(0);
}

// =========================
// Phase 1: DB updates
// =========================
console.log(`\n=== PHASE 1: DB updates ===`);
const nowIso = new Date().toISOString();
let ok = 0;
let fail = 0;
for (const row of affected) {
  const { error } = await supabase
    .from("schemes")
    .update({ ...row.updates, updated_at: nowIso })
    .eq("slug", row.slug);
  if (error) {
    console.error(`  FAIL ${row.slug}: ${error.message}`);
    fail++;
  } else {
    ok++;
    console.log(`  OK ${row.slug} (removed ${row.dashesRemoved} dashes)`);
  }
}
console.log(`  Summary: ${ok} ok, ${fail} fail`);

// =========================
// Phase 2: revalidate
// =========================
console.log(`\n=== PHASE 2: Revalidate ===`);
const tag = await fetch(`${SITE_URL}/api/revalidate?tag=schemes`);
console.log(`  Schemes tag revalidate: HTTP ${tag.status}`);

// =========================
// Phase 3: IndexNow bulk ping
// =========================
console.log(`\n=== PHASE 3: IndexNow bulk ping ===`);
const paths = affected.map((r) => `/sarkari-yojana/${r.slug}`);
const result = await pingIndexNowBatch(paths);
console.log(`  IndexNow: ${result.ok} ok / ${result.fail} fail / ${result.total} total`);

console.log(`\n=== DONE ===`);
console.log(`Next: re-run scripts/audit-scheme-em-dashes.mjs to confirm 0 dashes remain.`);
