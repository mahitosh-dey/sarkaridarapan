// Fix two last_date values that are logically impossible. 2026-08-27.
//
// Audit method: flag any job whose last_date falls BEFORE its own startDate or
// notificationDate. That ordering cannot occur in a real recruitment, so it
// isolates genuine data errors without false positives from the normal pattern
// where a recruitment is notified in one year and examined in the next
// (upsc-ese, rrb-ntpc and ssc-gd all look odd on a naive year comparison and
// are in fact correct).
//
// 1. sbi-apprentice-state-bank-of-india-2026   2024-12-22 -> 2026-06-15
//    The column was left behind when the content was rewritten for the 2026
//    cycle. It predates the record's own startDate of 2026-05-19 by 17 months.
//    important_dates says "Closed in June 2026. Sources differ on whether the
//    final date was 8 June or 15 June following a reported extension", and the
//    content confirms advertisement CRPD/APPR/2026-27/07 dated 19 May 2026.
//    Taking 15 June, the later of the two reported dates, matches the
//    under-close principle already used in lib/job-status.ts: where sources
//    disagree, do not tell a candidate a window shut earlier than it may have.
//
// 2. jkssb-recruitment-2026                    2026-07-21 -> 2026-08-30
//    JKSSB runs several advertisements a year. The column held the close date
//    of a FINISHED advertisement (window 22 June to 21 July 2026, recorded in
//    the content as closed) while important_dates carried the CURRENT one
//    (1 August to 30 August 2026). The current window is still open and closes
//    in three days, so the column was understating a live recruitment.
//    The rendered badge was already correct because lib/job-status.ts reads
//    both sources and takes the later date; this aligns the column with it so
//    JobPosting validThrough and any date sorting are right too.

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
  { slug: "sbi-apprentice-state-bank-of-india-2026", from: "2024-12-22", to: "2026-06-15" },
  { slug: "jkssb-recruitment-2026", from: "2026-07-21", to: "2026-08-30" },
];

const DRY = process.env.DRY_RUN === "1";
let ok = 0, bad = 0;

for (const f of FIXES) {
  const { data, error } = await supabase.from("jobs")
    .select("slug,last_date,important_dates").eq("slug", f.slug).single();
  if (error) { console.error(`  READ FAIL ${f.slug}: ${error.message}`); bad++; continue; }

  const cur = String(data.last_date ?? "").slice(0, 10);
  if (cur !== f.from) { console.error(`  SKIP ${f.slug}: expected ${f.from}, found ${cur}`); bad++; continue; }

  // guard: the new value must not precede startDate
  const id = (data.important_dates && typeof data.important_dates === "object") ? data.important_dates : {};
  if (id.startDate && /^\d{4}-\d{2}-\d{2}/.test(id.startDate) && f.to < id.startDate.slice(0, 10)) {
    console.error(`  ABORT ${f.slug}: ${f.to} still precedes startDate ${id.startDate}`); bad++; continue;
  }

  console.log(`  ${f.slug}: ${f.from} -> ${f.to}`);
  if (DRY) continue;

  const { error: uerr } = await supabase.from("jobs")
    .update({ last_date: f.to, updated_at: new Date().toISOString() }).eq("slug", f.slug);
  if (uerr) { console.error(`    WRITE FAIL: ${uerr.message}`); bad++; continue; }
  await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sarkari-naukri/" + f.slug)}`);
  await fetch(`${SITE_URL}/api/revalidate?tag=job-${f.slug}`);
  ok++;
}
if (!DRY) await fetch(`${SITE_URL}/api/revalidate?tag=jobs`);
console.log(`\napplied: ${ok} | skipped/failed: ${bad}${DRY ? "  (DRY RUN)" : ""}`);
