// Fix post_name bloat on AAI and the lowercase artifacts left by the earlier
// IMPORTANT:/NOTE: prefix strip (8af3a69).
//
// 2026-08-26.
//
// PROBLEM 1: post_name is a LABEL field. JobCard renders it as "Post: {x}" and
// the Quick Info table as "Post Name", so a 405-character paragraph on
// aai-je-atc leaked a sourcing caveat into Similar Jobs cards across the site.
// The caveat itself is preserved: content still carries the full section
// "## An important caveat on the Junior Executive disciplines", and how_to_apply
// still instructs the candidate to confirm the discipline in the PDF. Only the
// duplicate inside the label field is removed.
//
// PROBLEM 2: commit 8af3a69 stripped "IMPORTANT: " and "NOTE: " prefixes but
// left the following word lowercase mid-paragraph, e.g.
//   "...260 Manager positions. published sources contradict..."
// That was my regression. Three fields affected; each gets its sentence
// re-capitalised.
//
// NOT DONE HERE: 42 other jobs also carry post_name over 120 characters. That
// needs a per-record judgement call on what the short label should be, so it is
// reported to the owner rather than bulk-edited. A display clamp in JobCard is
// the cheaper mitigation and is proposed separately.

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
    table: "jobs", path: "/sarkari-naukri", tag: "job", slug: "aai-je-atc-2026", field: "post_name",
    from: "Junior Executive, 129 posts, within an AAI Recruitment 2026 total of 389 posts that also includes 260 Manager positions. published sources contradict each other on whether the 129 Junior Executive posts are exclusively Air Traffic Control or span Finance, Law, Operations and Survey and Cartography. Confirm the discipline in the official notification PDF before applying, since it determines eligibility.",
    to: "Junior Executive (129 posts), within an AAI Recruitment 2026 total of 389 posts that also includes 260 Manager positions",
  },
  {
    table: "jobs", path: "/sarkari-naukri", tag: "job", slug: "ssc-chsl-2026", field: "eligibility",
    from: "recognised board or university. some Data Entry Operator posts",
    to: "recognised board or university. Some Data Entry Operator posts",
  },
  {
    table: "entrance_exams", path: "/entrance-exams", tag: "exam", slug: "cucet-2026", field: "exam_pattern",
    from: ". this ", to: ". This ",
  },
];

const DRY = process.env.DRY_RUN === "1";
let ok = 0, miss = 0;

for (const f of FIXES) {
  const { data, error } = await supabase.from(f.table).select(`slug,${f.field}`).eq("slug", f.slug).single();
  if (error) { console.error(`  READ FAIL ${f.slug}: ${error.message}`); miss++; continue; }

  const raw = data[f.field];
  const isObj = raw !== null && typeof raw === "object";
  const s = isObj ? JSON.stringify(raw) : String(raw ?? "");

  if (!s.includes(f.from)) { console.log(`  SKIP ${f.slug}.${f.field}: pattern not present`); miss++; continue; }

  const next = s.split(f.from).join(f.to);
  console.log(`  ${f.slug}.${f.field}: ${s.length} -> ${next.length} chars`);
  if (DRY) continue;

  const value = isObj ? JSON.parse(next) : next;
  const { error: uerr } = await supabase.from(f.table)
    .update({ [f.field]: value, updated_at: new Date().toISOString() }).eq("slug", f.slug);
  if (uerr) { console.error(`    WRITE FAIL: ${uerr.message}`); miss++; continue; }
  await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent(f.path + "/" + f.slug)}`);
  await fetch(`${SITE_URL}/api/revalidate?tag=${f.tag}-${f.slug}`);
  ok++;
}
if (!DRY) { await fetch(`${SITE_URL}/api/revalidate?tag=jobs`); await fetch(`${SITE_URL}/api/revalidate?tag=entrance-exams`); }
console.log(`\napplied: ${ok} | skipped/failed: ${miss}${DRY ? "  (DRY RUN)" : ""}`);
