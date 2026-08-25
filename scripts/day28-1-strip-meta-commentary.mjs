// Remove editorial meta-commentary and shouty prefixes from live content.
//
// 2026-08-25.
//
// WHAT THIS DOES
//   A. Deletes sentences that talk about OUR editorial process rather than
//      telling the reader anything ("We are not going to pick one and present
//      it as fact"). The factual hedge around them is kept.
//   B. Strips "IMPORTANT:" / "NOTE:" prefixes from structured fields, keeping
//      the sentence that follows. These render inside table cells and read as
//      shouting; the underlying facts are good.
//   C. Tightens reader-facing caution advice so it reads as editorial judgment
//      rather than hand-wringing.
//
// WHAT THIS DELIBERATELY DOES NOT DO
//   It does not remove statements of genuine factual uncertainty. Those are not
//   disclaimers, they are the finding. Removing them would assert as settled
//   things nobody knows, which is the exact defect this project spent August
//   eliminating, and it breaks the standing no-fabrication rule in CLAUDE.md.
//   The cases kept are listed in the commit message and reported to the owner.

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

// A. exact meta-commentary removals / rewrites, per slug
const EDITS = {
  "aai-je-atc-2026": [
    ["Published sources contradict each other on which disciplines the 129 Junior Executive posts cover, and we are not going to resolve it by guessing.",
     "Published sources contradict each other on which disciplines the 129 Junior Executive posts cover."],
    ["If a site gives you a confident discipline breakdown without linking the PDF, treat it carefully, because several confident breakdowns currently disagree.",
     "Confident discipline breakdowns published without a link to the PDF are worth checking against it, since several currently disagree."],
  ],
  "ibps-clerk-2026": [
    ["We are not going to pick one of those and present it as fact. ", ""],
    ["If a site gives you a confident Mains table with no source, treat it with suspicion, because several confident tables currently contradict each other.",
     "Confident Mains tables published without a source are worth checking against the notification, since several currently contradict each other."],
  ],
  "ibps-po-2026": [
    ["We are not going to pick one and present it as fact. ", ""],
  ],
  "ssc-chsl-2026": [
    ["Treat any exact figure you see with caution, including any you may have seen on this page previously.",
     "Check any exact figure against the SSC vacancy notification."],
  ],
  "neet-ss-2026": [
    ["On the application window, treat any date you see with caution.",
     "Check the application window against the official notification."],
  ],
  "normalisation-government-exams-ssc-ibps-nta-explained": [
    ["I have described the principle each body applies rather than reproducing a formula I cannot verify, and if you find a site presenting one with confidence and no source, treat it carefully.",
     "This describes the principle each body applies rather than reproducing a formula that is not officially published. A site presenting exact algebra without a source is worth checking."],
  ],
  "best-books-ibps-po-sbi-po-2026": [
    ["Treat any confident ranking with suspicion and check the edition year yourself.",
     "Check the edition year yourself before buying, since rankings go stale faster than the books do."],
  ],
};

// B. fields where an "IMPORTANT:" / "NOTE:" prefix should be stripped
const PREFIX_FIELDS = ["post_name", "salary", "eligibility", "selection_process",
                       "how_to_apply", "objective", "exam_pattern", "important_dates", "description"];
const PREFIX_RE = /\b(?:IMPORTANT|NOTE):\s*/g;

const TABLES = [
  ["jobs", "/sarkari-naukri", "job"],
  ["entrance_exams", "/entrance-exams", "exam"],
  ["schemes", "/sarkari-yojana", "scheme"],
  ["blog_posts", "/blog", "blog-post"],
];

const DRY = process.env.DRY_RUN === "1";
let touched = 0, editCount = 0, prefixCount = 0;

for (const [table, path, tag] of TABLES) {
  const { data, error } = await supabase.from(table).select("*").eq("is_active", true);
  if (error) { console.error(`read ${table}:`, error.message); continue; }

  for (const row of data) {
    const update = {};

    // A. content edits
    const edits = EDITS[row.slug];
    if (edits && typeof row.content === "string") {
      let c = row.content;
      for (const [from, to] of edits) {
        if (c.includes(from)) { c = c.split(from).join(to); editCount++; }
        else console.log(`  WARN ${row.slug}: pattern not found -> ${from.slice(0, 55)}...`);
      }
      if (c !== row.content) update.content = c;
    }

    // B. strip shouty prefixes from structured fields
    for (const f of PREFIX_FIELDS) {
      const v = row[f];
      if (v == null) continue;
      if (typeof v === "string") {
        if (PREFIX_RE.test(v)) {
          update[f] = v.replace(PREFIX_RE, "");
          prefixCount++;
        }
        PREFIX_RE.lastIndex = 0;
      } else if (typeof v === "object") {
        const s = JSON.stringify(v);
        if (PREFIX_RE.test(s)) {
          update[f] = JSON.parse(s.replace(PREFIX_RE, ""));
          prefixCount++;
        }
        PREFIX_RE.lastIndex = 0;
      }
    }
    // also inside content
    if (typeof row.content === "string") {
      const base = update.content ?? row.content;
      PREFIX_RE.lastIndex = 0;
      if (PREFIX_RE.test(base)) { update.content = base.replace(PREFIX_RE, ""); prefixCount++; }
      PREFIX_RE.lastIndex = 0;
    }

    if (Object.keys(update).length === 0) continue;
    touched++;
    console.log(`  ${path}/${row.slug}  fields: ${Object.keys(update).join(", ")}`);
    if (DRY) continue;

    const { error: uerr } = await supabase.from(table)
      .update({ ...update, updated_at: new Date().toISOString() }).eq("slug", row.slug);
    if (uerr) { console.error(`    FAIL ${row.slug}: ${uerr.message}`); continue; }
    await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent(path + "/" + row.slug)}`);
    await fetch(`${SITE_URL}/api/revalidate?tag=${tag}-${row.slug}`);
  }
}
console.log(`\npages touched: ${touched} | meta edits: ${editCount} | prefixes stripped: ${prefixCount}${DRY ? "  (DRY RUN)" : ""}`);
