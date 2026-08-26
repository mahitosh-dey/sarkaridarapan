// Round 2: bring the remaining 14 post_name fields to 80 characters or fewer,
// and clear em/en dashes from three of them.
//
// 2026-08-26. Round 1 (day29-2) handled everything over 120 characters.
// This finishes the job at the 80 character target and fixes a rule 14
// violation found in the same pass: hpsc-hcs, ppsc-pcs and nbems-recruitment
// carried em dashes inside post_name, which renders in every card.
//
// aai-je-atc was set to 120 characters in 13fd49e before the 80 target existed.
//
// Full post lists and vacancy splits remain in each page's content body.

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

const LABELS = {
  "aai-je-atc-2026": "Junior Executive (129 posts), of 389 total including 260 Manager posts",
  "opsc-ocs-2026": "Odisha Administrative Service, Police Service and Allied Services posts",
  "nbems-recruitment-2026": "Deputy Director (Medical), Junior Programmer, Accountant, Stenographer",
  "bsnl-jto-2026": "Junior Telecom Officer (JTO), Telecom stream, across BSNL circles",
  "sbi-so-2026": "Specialist Cadre Officer: Law, Medical Officer, IS Audit, Chartered Accountant",
  "up-police-constable-2026": "Constable: Civil Police, PAC, Special Security Force, Mounted, Jail Warden",
  "hppsc-has-2026": "Himachal Administrative Service, Police Service and Allied Services posts",
  "hpsc-hcs-2026": "HCS (Executive Branch): SDM, DSP, ETO, BDPO and Allied Services posts",
  "indian-army-agniveer-2026": "Agniveer: General Duty, Technical, Clerk/Store Keeper, Tradesman",
  "nda-na-2026": "Cadet, National Defence Academy and Naval Academy (10+2 entry)",
  "nabard-grade-a-2026": "Assistant Manager (Grade A): Rural Development Banking, Legal, Protocol",
  "cisf-asi-paramedical-2026": "ASI: Pharmacist (18), Lab Technician (5), X-Ray Technician (1)",
  "ssc-cpo-si-2026": "Sub-Inspector (Delhi Police and CAPFs), Assistant Sub-Inspector (CISF)",
  "ssc-je-2026": "Junior Engineer: Civil, Electrical and Mechanical",
  "ppsc-pcs-2026": null, // resolved below: dash fix only, length already fine
};

const DRY = process.env.DRY_RUN === "1";
const rows = [];
let ok = 0, bad = 0;

for (const [slug, label] of Object.entries(LABELS)) {
  const { data, error } = await supabase.from("jobs").select("slug,post_name").eq("slug", slug).maybeSingle();
  if (error || !data) { console.error(`  MISS ${slug}`); bad++; continue; }

  // null label = keep the text, just normalise dashes
  const next = label ?? data.post_name.replace(/\s*[—–]\s*/g, ": ").replace(/:\s*:/g, ":");
  if (next.length > 80) { console.error(`  OVER 80 ${slug}: ${next.length}`); bad++; continue; }
  if (/[—–]/.test(next)) { console.error(`  DASH REMAINS ${slug}`); bad++; continue; }

  rows.push({ slug, before: data.post_name.length, after: next.length, label: next });
  if (DRY) continue;

  const { error: uerr } = await supabase.from("jobs")
    .update({ post_name: next, updated_at: new Date().toISOString() }).eq("slug", slug);
  if (uerr) { console.error(`  WRITE FAIL ${slug}: ${uerr.message}`); bad++; continue; }
  await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sarkari-naukri/" + slug)}`);
  await fetch(`${SITE_URL}/api/revalidate?tag=job-${slug}`);
  ok++;
}
if (!DRY) await fetch(`${SITE_URL}/api/revalidate?tag=jobs`);

console.log("\n| slug | before | after | new label |");
console.log("|------|--------|-------|-----------|");
rows.forEach(r => console.log(`| ${r.slug} | ${r.before}c | ${r.after}c | ${r.label} |`));
console.log(`\nupdated: ${rows.length} | failed: ${bad}${DRY ? "  (DRY RUN)" : ""}`);
