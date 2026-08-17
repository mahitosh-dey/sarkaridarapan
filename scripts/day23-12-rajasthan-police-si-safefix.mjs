// Rajasthan Police SI 2026 — URGENT safe-fix: strip fabricated deadline
//
// Verified 2026-08-15.
//
// TWO DEFECTS ON ONE PAGE, BOTH FOUND EARLIER THIS WEEK ELSEWHERE
//
// 1. Fabricated deadline. important_dates said, in its own words:
//      "Application start date: To be announced (expected within 7 to 10 days
//       per RPSC practice). Application last date: Expected mid-August 2026."
//    Yet last_date held a hard 2026-08-16 derived from that guess. The prose
//    hedged; the structured field did not, so the page published a deadline of
//    "tomorrow" that no source supports and fed it to JobPosting schema.
//
// 2. Hardcoded relative time. The title read "...Notified Today", true on
//    17 July 2026 and stale every day since.
//
// SOURCE CONFLICT (verified 2026-08-15 across Testbook, CareerPower, Adda247,
// Prepp, NokriCourse): published vacancy counts disagree. Figures seen include
// 1015 (SI AP/IB/MBC plus Platoon Commander RAC) and 1206. Our stored 1076
// matches NEITHER. Coverage also contains an exam date (5-6 April 2026) that
// PRECEDES the stated notification date (17 July 2026), and references to a
// "re-exam" and "interview dates out", which suggests an earlier Rajasthan SI
// cycle is still in progress and is being conflated with this one.
//
// Given that, this script asserts only what is corroborated (RPSC notified the
// recruitment on 17 July 2026) and strips everything that is not. It does NOT
// substitute a replacement vacancy figure or deadline, per the project rule:
// safe-fix by removing fabrication, not by asserting a different guess.
//
// Content body is left alone. This is a field-level fix to stop the page
// publishing a false deadline; the page is still thin (1693w) and needs a
// proper rewrite once the RPSC position is clear enough to write accurately.

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

const SLUG = "rajasthan-police-si-2026";

const title = "Rajasthan Police SI 2026: RPSC Sub-Inspector Recruitment";
const description =
  "RPSC notified Rajasthan Police SI 2026 on 17 July. Application dates are not announced yet and published vacancy counts differ between sources. Check RPSC.";

const fields = {
  vacancies: null,
  last_date: null,
  important_dates: {
    notificationDate: "2026-07-17",
    note: "RPSC notified this recruitment on 17 July 2026. As of 15 August 2026 the application start and last dates had NOT been announced. Published vacancy counts also differ between sources (figures including 1015 and 1206 have been reported), so no count is stated here. Some coverage additionally mixes this cycle with an earlier Rajasthan SI recruitment that is still in progress, referring to a re-exam and to interview dates. Treat any specific deadline or vacancy figure you see elsewhere as unconfirmed and check rpsc.rajasthan.gov.in directly.",
  },
};

if (title.length < 50 || title.length > 65) { console.error(`title ${title.length}c`); process.exit(1); }
if (description.length < 150 || description.length > 160) { console.error(`desc ${description.length}c`); process.exit(1); }
const bundle = `${title}\n${description}\n${JSON.stringify(fields)}`;
if (/[—–]/.test(bundle)) { console.error("em/en dash"); process.exit(1); }
if (/[“”‘’]/.test(bundle)) { console.error("smart quotes"); process.exit(1); }
console.log(`Preflight OK: title=${title.length}c desc=${description.length}c`);

if (process.env.DRY_RUN === "1") { console.log("DRY_RUN=1: no write"); process.exit(0); }

const { error } = await supabase
  .from("jobs")
  .update({ title, description, ...fields, updated_at: new Date().toISOString() })
  .eq("slug", SLUG);
if (error) { console.error("FAIL:", error.message); process.exit(1); }
console.log(`OK jobs/${SLUG}`);

const rev = await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sarkari-naukri/" + SLUG)}`);
const slugTag = await fetch(`${SITE_URL}/api/revalidate?tag=job-${SLUG}`);
const tag = await fetch(`${SITE_URL}/api/revalidate?tag=jobs`);
console.log(`Revalidate: path ${rev.status} | slug tag ${slugTag.status} | jobs tag ${tag.status}`);
await pingIndexNow(SLUG, "/sarkari-naukri");
