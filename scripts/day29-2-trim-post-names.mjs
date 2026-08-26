// Trim post_name to a short label on the 42 records that exceed 120 characters.
//
// 2026-08-26.
//
// post_name is a LABEL. JobCard renders it as "Post: {x}" and the Quick Info
// table as "Post Name". Records had grown to 495 characters carrying full post
// lists, advertisement numbers and sourcing caveats, which bloated every card
// the job appeared in.
//
// Labels are HAND-WRITTEN, not regex-trimmed. An automated first-sentence cut
// was tried and rejected: it produced fragments ending mid-phrase
// ("...Grade Scale I at", "...Advertisement 06 of 2026 (97") and collapsed
// kerala-psc from 495 characters to the word "Posts".
//
// The detail removed here already exists in each page's content body, which
// carries the full post list, vacancy split and any caveat. This only removes
// the duplicate from the label field.

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
  "kerala-psc-recruitment-2026": "Various posts across Kerala state departments and public sector undertakings",
  "wbpsc-miscellaneous-services-recruitment-2026": "Group B and Group C executive posts, West Bengal government departments",
  "upsssc-lower-pcs-2026": "Group C posts, UP Combined Lower Subordinate Services (Graduate Level)",
  "ssc-chsl-2026": "LDC / Junior Secretariat Assistant, Data Entry Operator, Postal Assistant",
  "upsc-civil-services-2026": "IAS, IPS, IFS, IRS and other Group A and Group B central services",
  "ssc-cgl-2026": "Around 40 Group B and Group C posts across central ministries",
  "ibps-po-2026": "Probationary Officer / Management Trainee, Junior Management Grade Scale I",
  "tnpsc-group-2-2026": "Group 2 interview posts: Deputy Commercial Tax Officer, Sub Registrar II",
  "uppsc-pcs-2026": "500 Group A and B gazetted posts including Deputy Collector and DSP",
  "jkssb-recruitment-2026": "Draftsman (Civil), Public Works (R&B) Department, 97 posts",
  "rpsc-rasrts-2026": "607 posts: 192 State Services and 415 Subordinate Services",
  "wb-gram-panchayat-recruitment-2026": "Gram Panchayat posts across West Bengal rural development departments",
  "ibps-rrb-2026": "Officer Scale I, II, III and Office Assistant in Regional Rural Banks",
  "rrb-ntpc-2026": "Non-Technical Popular Categories, graduate and undergraduate level posts",
  "allahabad-high-court-roaroca-2026": "Review Officer, Assistant Review Officer and Computer Assistant",
  "bihar-police-constable-2026": "Constable posts in Bihar Police",
  "bpsc-70th-cce-2026": "Group A and B posts, Bihar Combined Competitive Examination",
  "ibps-clerk-2026": "Customer Service Associate (CSA), formerly Clerk, in 11 public sector banks",
  "indian-navy-ssc-officer-2026": "Short Service Commission Officer, Indian Navy",
  "dsssb-recruitment-2026": "Various Group B and Group C posts, Delhi government departments",
  "upsc-cds-ii-2026": "IMA, INA, AFA and Officers Training Academy cadet entries",
  "kpsc-kas-2026": "Karnataka Administrative Service Group A and Group B posts",
  "mpsc-rajyaseva-2026": "Maharashtra State Services Group A and Group B posts",
  "mppsc-state-service-exam-2026": "Madhya Pradesh State Service Group A and Group B posts",
  "rrb-group-d-2026": "Level 1 posts: Track Maintainer, Pointsman and Assistant grades",
  "appsc-group-2-2026": "Andhra Pradesh Group 2 executive and non-executive posts",
  "ssc-gd-constable-2026": "Constable (GD) in CAPFs, NIA and SSF, Rifleman in Assam Rifles",
  "tspsc-group-2-2026": "Telangana Group 2 executive and non-executive posts",
  "apsc-cce-2026": "Assam Combined Competitive Examination Group A and Group B posts",
  "drdo-ceptam-11-2026": "Senior Technical Assistant B (561) and Technician A (203)",
  "mppsc-assistant-professor-2026": "Assistant Professor posts in Madhya Pradesh government colleges",
  "jpsc-combined-civil-services-2026": "Jharkhand Combined Civil Services Group A and Group B posts",
  "tnpsc-group-4-2026": "Village Administrative Officer, Junior Assistant, Typist, Steno-Typist",
  "mp-police-constable-2026": "Constable (GD) and Constable (Radio) in Madhya Pradesh Police",
  "upsc-cms-2026": "Medical Officer posts in central health services and railways",
  "gpsc-class-1-2-2026": "Gujarat Class 1 and Class 2 administrative posts",
  "ukpsc-pcs-2026": "Uttarakhand Group A and B posts including Deputy Collector and DSP",
  "cgpsc-state-service-2026": "Chhattisgarh State Service Group A and Group B posts",
  "india-post-gds-2026": "Gramin Dak Sevak: Branch Postmaster, ABPM and Dak Sevak",
  "indian-navy-agniveer-2026": "Agniveer (MR) and Agniveer (SSR) in the Indian Navy",
  "upsc-ese-2026": "Engineering Services: Civil, Mechanical, Electrical and E&T",
  "sbi-apprentice-state-bank-of-india-2026": "Apprentice, State Bank of India",
};

const DRY = process.env.DRY_RUN === "1";
const rows = [];
let ok = 0, miss = 0, tooLong = 0;

for (const [slug, label] of Object.entries(LABELS)) {
  if (label.length > 80) { console.error(`  OVER 80: ${slug} (${label.length})`); tooLong++; continue; }
  const { data, error } = await supabase.from("jobs").select("slug,post_name,content").eq("slug", slug).maybeSingle();
  if (error || !data) { console.error(`  MISS ${slug}`); miss++; continue; }

  rows.push({ slug, before: data.post_name.length, after: label.length, label });
  if (DRY) continue;

  const { error: uerr } = await supabase.from("jobs")
    .update({ post_name: label, updated_at: new Date().toISOString() }).eq("slug", slug);
  if (uerr) { console.error(`  WRITE FAIL ${slug}: ${uerr.message}`); miss++; continue; }
  await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sarkari-naukri/" + slug)}`);
  await fetch(`${SITE_URL}/api/revalidate?tag=job-${slug}`);
  ok++;
}
if (!DRY) await fetch(`${SITE_URL}/api/revalidate?tag=jobs`);

console.log("\n| # | slug | before | after | new label |");
console.log("|---|------|--------|-------|-----------|");
rows.forEach((r, i) => console.log(`| ${i + 1} | ${r.slug} | ${r.before}c | ${r.after}c | ${r.label} |`));
const saved = rows.reduce((a, r) => a + (r.before - r.after), 0);
console.log(`\nrecords: ${rows.length} | over-80 rejected: ${tooLong} | missing: ${miss} | chars removed: ${saved}${DRY ? "  (DRY RUN)" : ""}`);
