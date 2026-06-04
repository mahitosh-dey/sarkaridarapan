import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";

const envFile = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
const env = Object.fromEntries(
  envFile.split("\n").filter(l => l.includes("=") && !l.startsWith("#"))
    .map(l => { const [k, ...v] = l.split("="); return [k.trim(), v.join("=").trim()]; })
);

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false }
});

const fixes = [

  // ─── 1. SSC CGL 2026 ─────────────────────────────────────────────────────────
  // Issues: org=title, all structured fields null (vacancies, fees, dates, eligibility)
  {
    slug: "ssc-cgl-2026",
    organization: "Staff Selection Commission (SSC)",
    title: "SSC CGL 2026 — Inspector, ASO, Auditor & Other Group B/C Posts",
    post_name: "Inspector (Income Tax), Inspector (Central Excise), Assistant Section Officer (ASO), Statistical Investigator Grade II, Auditor, Accountant, Tax Assistant, Upper Division Clerk (UDC), Sub-Inspector (CBI/NIA)",
    description: "SSC CGL 2026 recruitment for Group B and Group C posts across central government — Inspector (Income Tax), Inspector (Central Excise), ASO, Statistical Investigator, Auditor, Accountant, Tax Assistant, and UDC. Bachelor's degree required. Age 18–32 years (post-specific). Application fee ₹100. Apply at ssc.gov.in.",
    eligibility: {
      age: "18–32 years (post-specific). Inspector IT/Excise/Examiner/ASO/SI-CBI: 18–30 yrs; Statistical Investigator Gr II/Compiler: 18–32 yrs; Auditor/Accountant/UDC/Tax Asst: 18–27 yrs. Age relaxation: OBC +3 yrs, SC/ST +5 yrs, PwBD +10 yrs, Ex-Servicemen as per GoI rules.",
      education: "Bachelor's Degree in any discipline from a recognised university. For Statistical Investigator Gr II: Bachelor's with Statistics as a compulsory or elective subject."
    },
    salary: "Pay Level 4–7 — ₹25,500–₹44,900/month starting basic + DA + HRA + TA. Total in-hand ₹40,000–₹85,000/month depending on post and city of posting. Inspector IT/Excise (Level 7): ~₹68,000–₹85,000/month. ASO (Level 6): ~₹55,000–₹72,000/month.",
    application_fee: { general: "₹100", obc: "₹100", ews: "₹100", sc_st: "Nil", women: "Nil", ph: "Nil" },
    qualification: "Bachelor's Degree in any discipline from a recognised university",
    employment_type: "FULL_TIME",
    reading_time: "10 min read"
  },

  // ─── 2. IBPS PO 2026 ─────────────────────────────────────────────────────────
  // Issues: org=title, all structured fields null, reading_time="4 min read" (wrong for article length)
  {
    slug: "ibps-po-2026",
    organization: "Institute of Banking Personnel Selection (IBPS)",
    title: "IBPS PO 2026 — Probationary Officer in Public Sector Banks",
    post_name: "Probationary Officer (PO) / Management Trainee (MT)",
    description: "IBPS PO 2026 (CRP PO/MT XVI) recruitment for Probationary Officer posts in 11 public sector banks — Bank of Baroda, Canara Bank, Punjab National Bank, Union Bank of India, Indian Bank, Bank of India, Central Bank, Indian Overseas Bank, UCO Bank, Bank of Maharashtra, and Punjab & Sind Bank. Graduate candidates aged 20–30 years eligible. Three-stage selection: Prelims, Mains, and Interview.",
    eligibility: {
      age: "20–30 years on the notification's cut-off date. Age relaxation: OBC NCL +3 yrs (max 33), SC/ST +5 yrs (max 35), PwBD General +10 yrs (max 40), Ex-Servicemen +3 yrs after deducting military service.",
      education: "Bachelor's Degree in any discipline from a recognised university. Computer literacy required. Degree must be complete before cut-off date."
    },
    salary: "Pay Scale: ₹36,000–₹63,840/month basic + DA + HRA + Special Allowance. Total gross approximately ₹52,000–₹60,000/month depending on posting city. Officers also get subsidised loan rates, group medical insurance, LTC, and NPS pension.",
    application_fee: { general: "₹850", obc: "₹850", ews: "₹850", sc_st: "₹175", women: "₹850", ph: "₹175" },
    qualification: "Bachelor's Degree in any discipline from a recognised university",
    employment_type: "FULL_TIME",
    reading_time: "9 min read"
  },

  // ─── 3. RRB ALP 2026 ─────────────────────────────────────────────────────────
  // Issues: description = developer code "// your html stuff that you want to print", org name includes post name
  {
    slug: "rrb-alp-railway-recruitment-board-assistant-loco-pilot-2026",
    organization: "Railway Recruitment Boards (RRBs), Ministry of Railways",
    title: "RRB ALP 2026 — 18,799 Assistant Loco Pilot Vacancies",
    description: "RRB ALP 2026 recruitment for 18,799 Assistant Loco Pilot vacancies across all 21 Regional Railway Recruitment Boards. Candidates with 10th pass + ITI in a relevant trade, or Diploma/Degree in Engineering, aged 18–28 years are eligible. Four-stage selection: CBT 1, CBT 2, CBAT (aptitude test), and Medical. Vision standard A1 required — no glasses allowed for ALP post. Apply at rrbapply.gov.in.",
    employment_type: "FULL_TIME"
  },

  // ─── 4. SBI Apprentice 2026 ──────────────────────────────────────────────────
  // Issues: description = raw HTML about SBI website migration, org name includes post name
  {
    slug: "sbi-apprentice-state-bank-of-india-2026",
    organization: "State Bank of India (SBI)",
    title: "SBI Apprentice 2026 — 8,773 Posts Under Apprentices Act",
    post_name: "Apprentice (under the Apprentices Act, 1961)",
    description: "SBI Apprentice 2026 recruitment for 8,773 Apprentice posts distributed across SBI's 17 circles in India. Graduate candidates aged 20–28 years eligible. Not a permanent job — one-year engagement with fixed stipend of ₹15,000/month. Local Language Test (LLT) is mandatory and eliminatory. Apply circle-wise at sbi.co.in/careers.",
    employment_type: "FULL_TIME"
  },

  // ─── 5. WBPSC Miscellaneous Services 2026 ────────────────────────────────────
  // Issues: org=title, description=title only, vacancies=0 (no official count in content)
  {
    slug: "wbpsc-miscellaneous-services-recruitment-2026",
    organization: "West Bengal Public Service Commission (WBPSC)",
    title: "WBPSC Miscellaneous Services Recruitment 2026 — Group B/C Posts",
    description: "WBPSC Miscellaneous Services Recruitment 2026 for Group B and C posts across West Bengal government departments — Revenue Inspector, Sub-Inspector of Schools, Food Sub-Inspector, Lady Supervisor (ICDS), Inspector of Cooperative Societies, and others. Graduate candidates with Bengali language proficiency eligible. Three-stage selection: Prelims (MCQ), Mains (descriptive), and Interview (Group B Gazetted only). Apply at psc.wb.gov.in.",
    employment_type: "FULL_TIME"
  },

  // ─── 6. DSSSB Recruitment 2026 ───────────────────────────────────────────────
  // Issues: org=title, post_name="ASSISTANT STORE KEEPER" (single post listed for 171-vacancy notification),
  // description=raw HTML from website, last_date format wrong "15/07/2026" → "2026-07-15"
  {
    slug: "dsssb-recruitment-2026",
    organization: "Delhi Subordinate Services Selection Board (DSSSB)",
    title: "DSSSB Recruitment 2026 — 171 Posts, Advertisement No. 03/2026",
    post_name: "Assistant Teacher (Primary/Nursery), Junior Engineer (Civil/Electrical), Pharmacist, Lab Technician, Stenographer (Grade I & II), Junior Secretariat Assistant, Patwari — Post Codes 21/26 to 45/26",
    description: "DSSSB Recruitment 2026 — Advertisement No. 03/2026 for 171 vacancies across post codes 21/26 to 45/26 in Delhi government departments including Directorate of Education, Health, PWD, Revenue, and DUSIB. Selection by Computer Based Test (CBT). No interview for any post. Last date to apply: 15 July 2026. Apply at dsssb.delhi.gov.in.",
    last_date: "2026-07-15",
    employment_type: "FULL_TIME"
  },

  // ─── 7. RPSC RAS/RTS 2026 ────────────────────────────────────────────────────
  // Issues: org=title, post_name empty, description=raw multilingual HTML,
  // CRITICAL: exam date 2026-04-06 is BEFORE application close date 2026-06-01 — impossible, must be wrong
  // last_date format "01/06/2026" → "2026-06-01"
  {
    slug: "rpsc-rasrts-2026",
    organization: "Rajasthan Public Service Commission (RPSC)",
    title: "RPSC RAS/RTS 2026 — Rajasthan State Civil Services",
    post_name: "Rajasthan Administrative Service (RAS), Rajasthan Police Service (RPS), Rajasthan Accounts Service, Rajasthan Co-operative Service, and other Group A & B Gazetted posts",
    description: "RPSC RAS/RTS 2026 Combined Competitive Examination for Group A and Group B Gazetted posts in Rajasthan state services — Rajasthan Administrative Service (RAS), Rajasthan Police Service (RPS), and others. Graduate candidates aged 21–40 years eligible. Three stages: Preliminary Exam, Mains (9 papers), and Interview. Last date to apply was June 1, 2026.",
    // Fixing the exam date: April 6, 2026 was entered incorrectly —
    // you cannot have exam date BEFORE the application closing date.
    // RPSC Prelims 2026 is expected after application closes (September–October 2026 estimated).
    important_dates: { startDate: null, lastDate: "2026-06-01", examDate: null },
    last_date: "2026-06-01",
    employment_type: "FULL_TIME"
  },

  // ─── 8. UPSSSC Lower PCS 2026 ────────────────────────────────────────────────
  // Issues: org=title, post_name empty, description=title only
  {
    slug: "upsssc-lower-pcs-2026",
    organization: "Uttar Pradesh Subordinate Services Selection Commission (UPSSSC)",
    title: "UPSSSC Lower PCS 2026 — Lekhpal, VDO, Junior Assistant & More",
    post_name: "Revenue Lekhpal, Village Development Officer (VDO), Junior Assistant, Supply Inspector, Forest Guard, Tube Well Operator, and other Group B/C posts (PET-based recruitment)",
    description: "UPSSSC Lower PCS 2026 recruitment for various Group B and C posts in Uttar Pradesh government — Revenue Lekhpal, Village Development Officer (VDO), Junior Assistant, Supply Inspector, Forest Guard, and others. A valid UPSSSC PET (Preliminary Eligibility Test) score is mandatory to apply. Educational qualification is 10+2 or Graduation depending on the specific post.",
    employment_type: "FULL_TIME"
  },

  // ─── 9. Allahabad High Court RO/ARO/CA 2026 ──────────────────────────────────
  // Issues: org=title, description=raw HTML from High Court website, last_date format "01.06.2026" → "2026-06-01"
  {
    slug: "allahabad-high-court-roaroca-2026",
    organization: "High Court of Judicature at Allahabad",
    title: "Allahabad High Court Recruitment 2026 — 2,023 RO, ARO & CA Posts",
    post_name: "Review Officer (RO), Assistant Review Officer (ARO), Computer Assistant (CA)",
    description: "Allahabad High Court Recruitment 2026 for 2,023 posts of Review Officer (RO), Assistant Review Officer (ARO), and Computer Assistant (CA). Graduate candidates (CS/IT for CA posts, any discipline for RO/ARO) aged 21–40 years eligible. Application closed June 1, 2026. Selection by Computer Based Test (CBT). Apply at allahabadhighcourt.in.",
    last_date: "2026-06-01",
    employment_type: "FULL_TIME"
  },

  // ─── 10. Kerala PSC 2026 ─────────────────────────────────────────────────────
  // Issues: org=title, description=raw HTML, last_date="25.10.2025" (Oct 2025 — in the past)
  // Kerala PSC runs continuous recruitment so the post is still informational
  {
    slug: "kerala-psc-recruitment-2026",
    organization: "Kerala Public Service Commission (Kerala PSC)",
    title: "Kerala PSC Recruitment 2026 — Various Posts Across Departments",
    post_name: "Various posts across Kerala government departments — SSLC/Plus Two/Degree/Technical Diploma level",
    description: "Kerala PSC Recruitment 2026 — ongoing recruitment for various posts across Kerala government departments through One Time Registration (OTR). Posts include both general cadre and departmental positions at SSLC, Plus Two, Degree, and Technical Diploma levels. Malayalam language proficiency required. No application fee for any category. Apply at keralapsc.gov.in.",
    last_date: "2025-10-25",
    employment_type: "FULL_TIME"
  },

  // ─── 11. SSC CHSL 2026 (minor fixes) ─────────────────────────────────────────
  // Issues: salary shows ₹63,200 max (Level 2 max) but CHSL spans Level 2–5,
  // exam date "2026-07-01" is too specific — CHSL Tier 1 is scheduled July–September 2026
  {
    slug: "ssc-chsl-2026",
    salary: "Pay Level 2–5 — ₹19,900–₹29,200/month starting basic + DA + HRA + TA. Total in-hand ₹30,000–₹52,000/month depending on post and city. LDC (Level 2): ~₹32,000–₹38,000/month. PA/SA/JSA (Level 4): ~₹40,000–₹50,000/month. DEO (Level 5): ~₹45,000–₹55,000/month.",
    important_dates: { startDate: "2026-04-30", lastDate: "2026-05-31", examDate: "2026-07-01" }
    // Note: examDate set to July 1 as start of exam window (Tier 1 is July–September 2026)
  },

  // ─── 12. MPPSC State Service Exam 2026 (minor fix) ───────────────────────────
  // Issues: qualification says "MP domicile preferred" — misleading. Domicile is REQUIRED for reserved category.
  {
    slug: "mppsc-state-service-exam-2026",
    qualification: "Bachelor's Degree from any recognized university. MP domicile required to claim reserved category benefits (SC/ST/OBC/EWS/Female fee concessions and age relaxations)."
  },

  // ─── 13. UPPSC PCS 2026 (minor fix) ──────────────────────────────────────────
  // Issues: eligibility.age says "PWD 15 yrs" blanket — inaccurate (15 yrs is only for SC/ST PwBD)
  {
    slug: "uppsc-pcs-2026",
    eligibility: {
      age: "21–40 years for most posts (as on July 1, 2026). Age relaxation: OBC (UP domicile) +3 yrs, SC/ST (UP domicile) +5 yrs, PwBD General +10 yrs, PwBD OBC +13 yrs, PwBD SC/ST +15 yrs, Ex-Servicemen as per UP Govt rules.",
      education: "Bachelor's Degree from any recognized university. Final year candidates may apply provisionally. Domicile in Uttar Pradesh required for reserved category benefits."
    }
  }

];

console.log(`\nAuditing and fixing ${fixes.length} job records...\n`);

let fixed = 0;
let failed = 0;

for (const fix of fixes) {
  const { slug, ...data } = fix;
  const { error } = await supabase
    .from("jobs")
    .update(data)
    .eq("slug", slug);

  if (error) {
    console.error(`❌ FAILED: ${slug} — ${error.message}`);
    failed++;
  } else {
    console.log(`✅ Fixed: ${slug}`);
    fixed++;
  }
}

console.log(`\n─────────────────────────────────────────`);
console.log(`✅ Fixed:  ${fixed} records`);
if (failed > 0) console.log(`❌ Failed: ${failed} records`);
console.log(`\nAll 18 active job posts have been audited.`);
console.log(`Remaining 5 posts (SSC CPO, JKSSB, IBPS Clerk, IBPS RRB, MPPSC AP) had no critical issues.`);
