// One-shot: fix the 7 remaining length-bug pages surfaced by
// scripts/audit-metadata-sweep.mjs (bucket A first-run baseline).
//
// Also bumps updated_at on all 72 active jobs so sitemap lastmod reflects
// the 2026-07-15 render fix (fresh crawl signal for Google, which does not
// accept IndexNow).
//
// Then bulk-pings IndexNow so Bing / Yandex / Naver / Seznam / Yep re-fetch.
//
// Usage: node scripts/fix-7-length-bugs.mjs

import { createClient } from "@supabase/supabase-js";
import { pingIndexNowBatch } from "./lib/indexnow.mjs";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";
const SITE_URL = "https://www.sarkaridarapan.com";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const FIXES = [
  {
    table: "entrance_exams",
    slug: "ugc-net-june-2026",
    route: "/entrance-exams",
    title: "UGC NET June 2026: Dates, Admit Card, JRF, Assistant Professor",
    description: "UGC NET June 2026 runs June 22 to 30 across 87 subjects. Admit card releases June 15. Test has 150 MCQs, 300 marks, no negative marking, qualifies for JRF.",
  },
  {
    table: "entrance_exams",
    slug: "nda-2-2026",
    route: "/entrance-exams",
    title: "NDA 2 2026: September 13 Exam Date, Eligibility, 394 Vacancies",
    description: "NDA 2 2026 exam is on September 13 for 394 Army, Navy, Air Force cadet vacancies. Open to unmarried males and females aged 17 to 19 who passed Class 12.",
  },
  {
    table: "entrance_exams",
    slug: "cds-2-2026",
    route: "/entrance-exams",
    title: "CDS 2 2026: September 13 Exam, 451 Vacancies, IMA INA AFA OTA",
    description: "CDS 2 2026 exam is September 13 for 451 officer cadet vacancies across IMA, INA, AFA, and OTA. Graduate-level UPSC defence exam followed by SSB interview.",
  },
  {
    table: "entrance_exams",
    slug: "jee-advanced-2026",
    route: "/entrance-exams",
    title: "JEE Advanced 2026: Result Out, JoSAA Counselling, IIT Cutoff",
    description: "JEE Advanced 2026 result released June 1. Shubham Kumar topped with 330 of 360. 56,880 qualified for the 23 IITs. JoSAA Round 1 seats allotted June 13.",
  },
  {
    table: "entrance_exams",
    slug: "ctet-september-2026",
    route: "/entrance-exams",
    title: "CTET September 2026: Exam Date, Eligibility, Syllabus, Apply",
    description: "CTET September 2026 exam is on September 6. Apply between May 11 and June 10. 150 MCQs, 150 marks, no negative marking. Paper I is for Classes 1 to 5.",
  },
  {
    table: "schemes",
    slug: "free-bus-travel-scheme-for-women-west-bengal-2026",
    route: "/sarkari-yojana",
    title: "West Bengal Free Bus Travel for Women 2026: BJP Poll Promise",
    description: "West Bengal's BJP government promises free travel for women on all state-run buses starting June 1, 2026. Show any valid photo ID at boarding to qualify.",
  },
  {
    table: "blog_posts",
    slug: "ssc-cgl-2026-syllabus-preparation-guide",
    route: "/blog",
    title: "SSC CGL 2026 Syllabus and Preparation Guide (Tier 1, 2)",
    description: "SSC CGL 2026 syllabus for Tier 1 and Tier 2 with eligibility, exam pattern, and a practical step-by-step preparation strategy for a central government job.",
  },
];

// Length guardrails — validate before any DB write.
for (const fix of FIXES) {
  const tl = fix.title.length;
  const dl = fix.description.length;
  if (tl < 50 || tl > 65) {
    console.error(`ABORT: ${fix.slug} title length ${tl} outside [50,65]`);
    process.exit(1);
  }
  if (dl < 150 || dl > 160) {
    console.error(`ABORT: ${fix.slug} description length ${dl} outside [150,160]`);
    process.exit(1);
  }
  if (/[—–]/.test(fix.title) || /[—–]/.test(fix.description)) {
    console.error(`ABORT: ${fix.slug} contains em/en dash`);
    process.exit(1);
  }
}
console.log("Pre-flight length + humanizer checks passed.\n");

// Phase 1: update the 7 flagged rows.
console.log("=== PHASE 1: Update 7 flagged rows ===");
const revalidatePaths = [];
for (const fix of FIXES) {
  const { error } = await supabase
    .from(fix.table)
    .update({
      title: fix.title,
      description: fix.description,
      updated_at: new Date().toISOString(),
    })
    .eq("slug", fix.slug);
  if (error) {
    console.error(`  FAIL ${fix.table}/${fix.slug}: ${error.message}`);
    continue;
  }
  console.log(`  OK   ${fix.table}/${fix.slug} (title ${fix.title.length}c, desc ${fix.description.length}c)`);
  revalidatePaths.push(`${fix.route}/${fix.slug}`);
}

// Phase 2: bump updated_at on every active job so sitemap lastmod becomes
// fresh. The 2026-07-15 render-code fix did not touch DB rows, so sitemap
// still signals stale lastmod (2026-07-07) and Google may skip re-crawl.
console.log("\n=== PHASE 2: Bump updated_at on all active jobs ===");
const { data: jobRows, error: jobErr } = await supabase
  .from("jobs")
  .select("slug")
  .eq("is_active", true);
if (jobErr) {
  console.error("  FAIL: could not read jobs:", jobErr.message);
} else {
  console.log(`  Found ${jobRows.length} active jobs.`);
  // Update each one individually to guarantee updated_at bump. Batching via
  // .in('slug', ...) would work, but per-row keeps failure logs actionable.
  let ok = 0;
  let fail = 0;
  const nowIso = new Date().toISOString();
  for (const row of jobRows) {
    const { error } = await supabase
      .from("jobs")
      .update({ updated_at: nowIso })
      .eq("slug", row.slug);
    if (error) {
      console.error(`  FAIL ${row.slug}: ${error.message}`);
      fail++;
    } else {
      ok++;
    }
  }
  console.log(`  Bumped: ${ok} ok, ${fail} fail`);
  for (const row of jobRows) revalidatePaths.push(`/sarkari-naukri/${row.slug}`);
}

// Phase 3: revalidate paths. Best-effort — if REVALIDATE_SECRET is enforced
// server-side and we don't have it, fall through.
console.log("\n=== PHASE 3: Revalidate paths ===");
let revOk = 0;
let revFail = 0;
for (const p of revalidatePaths.slice(0, 10)) {
  // Only revalidate the 7 hot paths individually to avoid hammering the API;
  // the jobs will be caught by the tag revalidation below.
  const res = await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent(p)}`);
  if (res.ok) revOk++;
  else revFail++;
}
// Tag revalidate for the bulk job bump.
const tagRes = await fetch(`${SITE_URL}/api/revalidate?tag=jobs`);
console.log(`  Path revalidations: ${revOk} ok, ${revFail} fail`);
console.log(`  Jobs tag revalidate: HTTP ${tagRes.status}`);

// Phase 4: bulk IndexNow ping.
console.log("\n=== PHASE 4: Bulk IndexNow ping ===");
const pingUrls = revalidatePaths;
// Include the 4 static index pages so those lastmods refresh too.
pingUrls.push(
  "/sarkari-naukri",
  "/sarkari-yojana",
  "/entrance-exams",
  "/blog",
  "",
);
const pingResult = await pingIndexNowBatch(pingUrls);
console.log(`  IndexNow: ${pingResult.ok} ok / ${pingResult.fail} fail / ${pingResult.total} total`);

console.log("\n=== DONE ===");
console.log("Next: re-run scripts/audit-metadata-sweep.mjs to confirm all 7 pages clean.");
