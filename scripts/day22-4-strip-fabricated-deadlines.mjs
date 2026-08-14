// Strip fabricated deadlines and vacancy counts from three job pages.
//
// Verified 2026-08-14.
//
// THE DEFECT
// Three pages were authored in ANTICIPATION of a notification. The prose bodies
// hedge correctly ("expected", "awaited"), but the estimates were also written
// into the STRUCTURED fields, where they render as a confident date box and
// feed JobPosting structured data to Google:
//
//   bhel-engineer-trainee-2026  last_date 2026-08-31, vacancies 150
//   sebi-grade-a-2026           last_date 2026-09-15
//   lic-aao-2026                last_date "Expected September 2026" (a STRING
//                               in a date column), vacancies 841, and
//                               important_dates carrying concrete start/last/
//                               exam dates that no source supports
//
// None of these three recruitments has an open application window:
//   BHEL Engineer Trainee 2026 - notification NOT released. Coverage as of
//     2026-08-14 still says "tentatively July" and gives no vacancy count.
//   SEBI Grade A - the cycle described by current coverage is the one notified
//     30 Oct 2025, applications closed 28 Nov 2025, Phase 1 on 10 Jan 2026 and
//     Phase 2 on 21 Feb 2026. That cycle is COMPLETE. No 2026 window is open.
//   LIC AAO 2026 - notification NOT released. Coverage says "tentatively
//     August 2026" and states vacancies are "to be announced".
//
// This violates the project hard rule: never fabricate; safe-fix existing DB
// pages by STRIPPING fabrication rather than asserting unverifiable claims.
//
// WHAT THIS SCRIPT DOES
// Surgical field-level fix only. It does NOT rewrite the prose bodies, which
// already hedge appropriately. It clears the invented structured data so the
// page stops publishing a deadline that does not exist, and rewrites title and
// description to state the real status.
//
// The 841 figure in the LIC AAO body is left in place but removed from the
// title and the vacancies column: the body attributes it as an expectation,
// while the title asserted it as fact and the column fed it to schema.
//
// Content bodies still need deepening (BHEL 1659w, SEBI 2661w) and LIC AAO's
// 841 references want re-verification. Flagged to the owner, not done here.

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { pingIndexNow } from "./lib/indexnow.mjs";

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
    slug: "bhel-engineer-trainee-2026",
    title: "BHEL Engineer Trainee 2026: Notification Not Yet Released",
    description:
      "BHEL Engineer Trainee 2026 has not been notified yet. Check verified eligibility, the GATE score route, selection stages and how to track the release.",
    fields: {
      last_date: null,
      vacancies: null,
      important_dates: {
        note: "BHEL had not released the Engineer Trainee 2026 notification as of 14 August 2026. No application window is open and no vacancy count has been published. Any date or vacancy figure quoted elsewhere for this cycle is an estimate based on prior years, not an announcement. Watch careers.bhel.in for the notification.",
      },
    },
  },
  {
    slug: "sebi-grade-a-2026",
    title: "SEBI Grade A 2026: Next Notification Not Yet Announced",
    description:
      "SEBI Grade A 2026 has no open application window. Check the last completed cycle, eligibility, Phase 1 and 2 structure and how to track the next notice.",
    fields: {
      last_date: null,
      important_dates: {
        note: "No SEBI Grade A application window was open as of 14 August 2026. The most recent cycle was notified on 30 October 2025 with applications closing 28 November 2025, Phase 1 held on 10 January 2026 and Phase 2 on 21 February 2026. That cycle is complete. SEBI had not announced the next notification. Watch sebi.gov.in under Careers.",
      },
    },
  },
  {
    slug: "lic-aao-2026",
    title: "LIC AAO 2026: Notification Awaited, Eligibility and Salary",
    description:
      "LIC AAO 2026 notification is not out yet. Check verified eligibility, the prelims mains interview structure, salary and how to track the official release.",
    fields: {
      last_date: null,
      vacancies: null,
      important_dates: {
        note: "LIC had not released the AAO 2026-27 notification as of 14 August 2026. No application window is open and LIC had not published a vacancy count. Coverage quoting a figure or a date for this cycle is estimating from prior years. Watch licindia.in under Careers for the Recruitment of AAO notification.",
      },
    },
  },
];

let failed = 0;
for (const fix of FIXES) {
  console.log(`\n=== ${fix.slug} ===`);

  if (fix.title.length < 50 || fix.title.length > 65) {
    console.error(`  ABORT title ${fix.title.length}c (need 50-65)`); failed++; continue;
  }
  if (fix.description.length < 150 || fix.description.length > 160) {
    console.error(`  ABORT description ${fix.description.length}c (need 150-160)`); failed++; continue;
  }
  const bundle = `${fix.title}\n${fix.description}\n${JSON.stringify(fix.fields)}`;
  if (/[—–]/.test(bundle)) { console.error("  ABORT em/en dash"); failed++; continue; }
  if (/[“”‘’]/.test(bundle)) { console.error("  ABORT smart quotes"); failed++; continue; }
  console.log(`  Preflight OK: title=${fix.title.length}c desc=${fix.description.length}c`);

  if (process.env.DRY_RUN === "1") { console.log("  DRY_RUN=1: no write"); continue; }

  const { error } = await supabase
    .from("jobs")
    .update({
      title: fix.title,
      description: fix.description,
      ...fix.fields,
      updated_at: new Date().toISOString(),
    })
    .eq("slug", fix.slug);
  if (error) { console.error("  FAIL:", error.message); failed++; continue; }
  console.log(`  OK jobs/${fix.slug}`);

  const rev = await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sarkari-naukri/" + fix.slug)}`);
  const slugTag = await fetch(`${SITE_URL}/api/revalidate?tag=job-${fix.slug}`);
  console.log(`  Revalidate: path HTTP ${rev.status}, slug tag HTTP ${slugTag.status}`);
  await pingIndexNow(fix.slug, "/sarkari-naukri");
}

await fetch(`${SITE_URL}/api/revalidate?tag=jobs`);
console.log(`\nJobs tag revalidated. Failures: ${failed}`);
process.exit(failed ? 1 : 0);
