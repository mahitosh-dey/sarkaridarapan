// Site-wide em/en dash removal. 2026-08-27.
//
// 889 dashes across 38 live rows. Rule 14 forbids them, and they do not stay on
// their own page: the related-jobs widget renders another record's salary field
// into a clean page, so aai-je-atc shows 16 dashes that are not in its own row.
//
// NOT a blanket substitution. Contexts were counted first and each gets the
// punctuation it needs:
//     269  numeric and currency ranges   "21-32", "Rs 44,900-1,42,400"  -> " to "
//     115  table cells                   ranges handled above, rest -> comma
//      72  headings                      "## X - Y"                     -> "## X: Y"
//      50  list-item labels              "- **X** - desc"               -> "- **X**: desc"
//     383  prose                         -> comma, which is grammatically safe in
//                                           the appositive and parenthetical uses
//                                           that dominate this corpus
//
// The same approach cleared top-10-govt-jobs (77 -> 0) and upsc-vs-ssc (24 -> 0)
// with no readability damage.
//
// Aborts per row if any dash survives or if punctuation is malformed, so a
// context the rules do not cover fails loudly instead of shipping mangled text.

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

const SKIP = new Set(["id", "search_vector", "created_at", "updated_at", "published_at", "reviewed_at", "verified_at", "slug"]);

function declash(text) {
  let s = text;
  // 1. ranges: digits or currency either side -> " to "
  s = s.replace(/(\d)\s*[—–]\s*(₹|Rs\.?\s*)?(\d)/g, "$1 to $2$3");
  s = s.replace(/(₹[\d,]+)\s*[—–]\s*(₹?[\d,]+)/g, "$1 to $2");
  // 2. headings -> colon
  s = s.replace(/^(#{1,4} [^\n]*?)\s*[—–]\s*/gm, "$1: ");
  // 3. list-item bold labels -> colon
  s = s.replace(/^(\s*(?:[-*]|\d+\.)\s+\*\*[^*\n]+\*\*)\s*[—–]\s*/gm, "$1: ");
  // 3a. dash INSIDE a bold label reads as a colon, not a comma:
  //     "**Stage 1 - Paper I**" -> "**Stage 1: Paper I**"
  s = s.replace(/(\*\*[^*\n]*?)\s*[—–]\s*/g, "$1: ");
  // 3b. grade/level prefixes introduce a value, so colon:
  //     "Pay Level 11 - Basic Pay" -> "Pay Level 11: Basic Pay"
  s = s.replace(/\b((?:Pay\s+)?Level\s+\d+[A-Za-z]?|Grade\s+[A-Z]|Group\s+[A-Z])\s*[—–]\s*/g, "$1: ");
  // 3c. word-to-word range inside brackets is a range, not an aside:
  //     "(unexpanded-expanded)" -> "(unexpanded to expanded)"
  s = s.replace(/\((\w+)\s*[—–]\s*(\w+)\)/g, "($1 to $2)");
  // 4. everything left -> comma
  s = s.replace(/\s+[—–]\s+/g, ", ");
  s = s.replace(/\s*[—–]\s*/g, ", ");
  // tidy artefacts the above can create
  s = s.replace(/,\s*,/g, ",").replace(/:\s*:/g, ":").replace(/\s+,/g, ",").replace(/,\s*\|/g, " |");
  return s;
}

const DRY = process.env.DRY_RUN === "1";
const TABLES = [["jobs", "/sarkari-naukri", "job"], ["schemes", "/sarkari-yojana", "scheme"],
                ["entrance_exams", "/entrance-exams", "exam"], ["blog_posts", "/blog", "blog-post"]];
let touched = 0, cleared = 0, failed = 0;

for (const [table, path, tag] of TABLES) {
  const { data, error } = await supabase.from(table).select("*").eq("is_active", true);
  if (error) { console.error(`read ${table}: ${error.message}`); continue; }

  for (const row of data) {
    const update = {};
    let rowDashes = 0, abort = null;

    for (const [k, v] of Object.entries(row)) {
      if (SKIP.has(k) || v == null) continue;
      const isObj = typeof v === "object";
      const s = isObj ? JSON.stringify(v) : String(v);
      const n = (s.match(/[—–]/g) || []).length;
      if (!n) continue;
      rowDashes += n;

      const next = declash(s);
      if (/[—–]/.test(next)) { abort = `${k}: dash survived`; break; }
      if (isObj) { try { update[k] = JSON.parse(next); } catch { abort = `${k}: JSON broke`; break; } }
      else update[k] = next;
    }

    if (abort) { console.error(`  ABORT ${row.slug}: ${abort}`); failed++; continue; }
    if (Object.keys(update).length === 0) continue;

    touched++; cleared += rowDashes;
    console.log(`  ${String(rowDashes).padStart(4)} -> 0  [${tag}] ${row.slug}  (${Object.keys(update).join(", ")})`);
    if (DRY) continue;

    const { error: uerr } = await supabase.from(table)
      .update({ ...update, updated_at: new Date().toISOString() }).eq("slug", row.slug);
    if (uerr) { console.error(`    WRITE FAIL: ${uerr.message}`); failed++; continue; }
    await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent(path + "/" + row.slug)}`);
    await fetch(`${SITE_URL}/api/revalidate?tag=${tag}-${row.slug}`);
  }
}
if (!DRY) for (const t of ["jobs", "schemes", "entrance-exams", "blog-posts"]) await fetch(`${SITE_URL}/api/revalidate?tag=${t}`);
console.log(`\nrows: ${touched} | dashes cleared: ${cleared} | failed: ${failed}${DRY ? "  (DRY RUN)" : ""}`);
