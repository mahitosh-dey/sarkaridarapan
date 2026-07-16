// Depth expansion: pm-awas-yojana-urban-20-pmay-u-2026
// 494 words -> targeting ~2,700 words.
// Research: pmay-urban.gov.in, pmaymis.gov.in/pmaymis2_2024/, PIB PRID 2274164
// (7th CSMC 17 June 2026, 2.13 lakh sanctioned, cumulative 16.13 lakh),
// PIB PRID 2275672 (July 2026 MP grih pravesh + 42,000 houses),
// MoHUA scheme guidelines Dec 2024 PDF.
//
// Freshness updates:
// - PMAY-U 2.0 launched 1 September 2024 as successor to PMAY-U (CLSS closed 2022)
// - 16.13 lakh houses sanctioned under PMAY-U 2.0 as of 17 June 2026 (7th CSMC)
// - Combined PMAY-U + PMAY-U 2.0: 1.27 crore sanctioned, 1.20 crore grounded,
//   98.60 lakh completed (June 2026, MoHUA)
// - Old PMAY-U completion deadline extended to 30 September 2026 via SNA-SPARSH
// - New ISS: 4% on first Rs. 8 lakh of loan up to Rs. 25 lakh, max subsidy Rs. 1.80 lakh
//   disbursed in 5 annual instalments of Rs. 36,000 via DBT
//
// Humanizer rules applied: zero em/en dashes, sentence-case headings, no AI vocabulary,
// contractions, primary-source citations inline (AI-2), FAQ JSON-LD ready with
// direct-answer openers (AI-3), tables (AI-6), actual numbers (AI-4), primary sources (AI-5).
//
// Run modes:
//   DRY_RUN=1 node scripts/expand-pm-awas-yojana-urban-2026.mjs   (pre-flight only, no DB write)
//   node scripts/expand-pm-awas-yojana-urban-2026.mjs             (full run: pre-flight + DB write + revalidate + IndexNow)

import { createClient } from "@supabase/supabase-js";
import { pingIndexNow } from "./lib/indexnow.mjs";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";
const SITE_URL = "https://www.sarkaridarapan.com";
const SLUG = "pm-awas-yojana-urban-20-pmay-u-2026";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const NEW_TITLE = "PMAY-U 2.0 in 2026: 4% Interest Subsidy up to Rs. 1.80 Lakh";
const NEW_DESCRIPTION = "PMAY Urban 2.0 in 2026 gives 4% interest subsidy up to Rs. 1.80 lakh on home loans for EWS, LIG, and MIG families. 16.13 lakh houses sanctioned so far.";

const NEW_CONTENT = `## What PMAY-U 2.0 is

Pradhan Mantri Awas Yojana Urban 2.0 (PMAY-U 2.0) is the successor to the original PMAY-U scheme, launched by the Ministry of Housing and Urban Affairs on 1 September 2024. It targets 1 crore additional pucca houses over five years through FY 2028-29, with Rs. 2.30 lakh crore of central assistance in a Rs. 10 lakh crore total-investment envelope.

As of 17 June 2026, 16.13 lakh houses have been sanctioned under PMAY-U 2.0 after the 7th Central Sanctioning and Monitoring Committee (CSMC) meeting cleared 2.13 lakh new houses that day, per PIB PRID 2274164. Combined with the original PMAY-U, MoHUA reports 1.27 crore houses sanctioned, 1.20 crore grounded, and 98.60 lakh completed as of June 2026.

PMAY-U 2.0 runs four verticals: Beneficiary-Led Construction (BLC), Affordable Housing in Partnership (AHP), Affordable Rental Housing (ARH), and the Interest Subsidy Scheme (ISS). The old In-Situ Slum Redevelopment (ISSR) vertical from PMAY-U was dropped as a separate track, and Affordable Rental Housing replaced it as the fourth pillar.

---

## PMAY-U 2.0 vs old CLSS: what changed in 2024

The old Credit Linked Subsidy Scheme (CLSS) under PMAY-U closed to new applications in 2022. PMAY-U 2.0 relaunched the interest-subsidy vertical with tighter income slabs, a lower loan cap, and a five-year DBT payout instead of an upfront credit. The differences matter because most third-party sites still explain the old scheme.

| Feature | Old PMAY-U CLSS (till 2022) | PMAY-U 2.0 ISS (since Sep 2024) |
|---|---|---|
| Income categories | EWS, LIG, MIG-I (up to Rs. 12L), MIG-II (up to Rs. 18L) | EWS (up to Rs. 3L), LIG (Rs. 3 to 6L), MIG (Rs. 6 to 9L) |
| MIG cap | Rs. 18 lakh annual income | Rs. 9 lakh annual income |
| Interest subsidy rate | 6.5% EWS/LIG, 4% MIG-I, 3% MIG-II | Uniform 4% across all categories |
| Loan eligible for subsidy | Up to Rs. 6L (EWS/LIG), Rs. 9L (MIG-I), Rs. 12L (MIG-II) | First Rs. 8 lakh of a loan up to Rs. 25 lakh |
| Max house value | Up to Rs. 35 lakh (MIG-II) | Rs. 35 lakh |
| Maximum subsidy | Rs. 2.67 lakh (EWS/LIG) | Rs. 1.80 lakh (NPV Rs. 1.50 lakh) |
| Disbursal | One-time upfront credit to loan principal | 5 annual instalments of Rs. 36,000 via DBT |
| Verticals | BLC, AHP, ISS, ISSR | BLC, AHP, ISS, ARH |

Source: MoHUA PMAY-U 2.0 scheme guidelines December 2024, pmay-urban.gov.in.

The MIG bracket got the sharpest change. Under the old scheme a family earning Rs. 15 lakh annually qualified as MIG-II. Under PMAY-U 2.0 the same family is out of scope entirely because the MIG ceiling is now Rs. 9 lakh.

---

## Who qualifies for PMAY-U 2.0

Three tests decide eligibility across all four verticals of PMAY-U 2.0.

First, the annual household income must fit one of three brackets. EWS covers households up to Rs. 3 lakh per year, LIG covers Rs. 3 lakh to Rs. 6 lakh, and MIG covers Rs. 6 lakh to Rs. 9 lakh. Income is verified through self-declaration plus documentary proof such as Form 16, ITR, or a certificate from the employer.

Second, no member of the household should already own a pucca house anywhere in India. A pucca house is a permanent structure with a proper roof and walls made of concrete, brick, or stone. Kutcha or semi-pucca structures don't disqualify.

Third, no member of the household should have benefited from any earlier central government housing scheme in the past 20 years. This includes the old PMAY-U CLSS, Indira Awas Yojana, or state-level equivalents. The check runs against the PMAY-U MIS database using Aadhaar.

The Housing for All definition of household is a husband, wife, and unmarried children living together. A married adult child running an independent household counts as a separate household even if living in the same building.

For the Interest Subsidy Scheme vertical specifically, the applicant must be the primary borrower on a home loan from a scheduled commercial bank, housing finance company (HFC), or cooperative bank registered with the National Housing Bank (NHB). The loan must be disbursed on or after 1 September 2024 to qualify for ISS benefits.

---

## The four verticals: BLC, AHP, ARH, ISS

Each vertical of PMAY-U 2.0 fits a different beneficiary situation.

Beneficiary-Led Construction (BLC) helps EWS families who already own land build a house on their own plot. Central assistance is Rs. 2.50 lakh per house, released in three tranches linked to construction milestones. State and urban local body contributions add roughly Rs. 1 lakh. BLC is the largest vertical by sanction count.

Affordable Housing in Partnership (AHP) covers ready-built houses developed by state agencies, ULBs, parastatals, or private developers under partnership contracts. Central assistance is Rs. 2.50 lakh per unit for EWS beneficiaries. The house is allotted through a lottery or public draw. Common carpet-area limits are 30 to 45 sqm for EWS, 45 to 60 sqm for LIG, 60 to 90 sqm for MIG.

Affordable Rental Housing (ARH) is the new vertical added in PMAY-U 2.0. It builds rental stock for urban migrants, single women, industrial workers, and students. Central government funds public rental units at Rs. 3,000 crore per year over five years. Rents are capped at 15% below market rate and reviewed every two years.

Interest Subsidy Scheme (ISS) provides a 4% interest subsidy on the first Rs. 8 lakh of a home loan of up to Rs. 25 lakh, for a house of up to Rs. 35 lakh, for EWS, LIG, and MIG beneficiaries. Maximum subsidy is Rs. 1.80 lakh disbursed as five annual instalments of Rs. 36,000. The subsidy goes to the borrower's account via DBT, not to the loan principal directly.

---

## Which vertical fits you

The choice among BLC, AHP, ARH, and ISS depends on land ownership, income, and whether you're buying, building, or renting.

If you own land in an urban area and want to build a pucca house on that plot, BLC is your route. Rs. 2.50 lakh central assistance plus state top-up releases in three construction-linked tranches. Apply through your urban local body.

If you don't own land but want to buy a ready-built EWS or LIG unit at a subsidised price, AHP fits. Watch for allotment notices from your state housing board or ULB. Allotment is by lottery.

If you're an urban migrant, single working woman, industrial worker, or student who needs a rented room or dormitory bed at below-market rent, ARH fits. Apply to the ARH portal on pmay-urban.gov.in or the participating public rental agency in your city.

If you already have a home loan sanctioned or planned from a scheduled commercial bank, HFC, or cooperative bank for a house up to Rs. 35 lakh with a loan of up to Rs. 25 lakh, ISS fits. The 4% subsidy comes as five annual DBT credits of Rs. 36,000.

The four verticals are mutually exclusive. One beneficiary can claim only one vertical under PMAY-U 2.0.

---

## Worked ISS subsidy math for three income brackets

Three concrete scenarios show how the Interest Subsidy Scheme cash flow lands in a borrower's bank account.

An EWS borrower with annual household income Rs. 2.5 lakh takes a Rs. 8 lakh home loan for a Rs. 12 lakh house. The entire Rs. 8 lakh qualifies for the 4% subsidy. Maximum subsidy is Rs. 1.80 lakh over 12 years, but the DBT payout is capped at five instalments of Rs. 36,000 (Rs. 1.80 lakh total). At an 8.5% discount rate this represents a net present value of Rs. 1.50 lakh in year one.

An LIG borrower with annual household income Rs. 5 lakh takes a Rs. 15 lakh home loan for a Rs. 22 lakh house. Only the first Rs. 8 lakh of the loan qualifies for the 4% subsidy. The remaining Rs. 7 lakh carries the borrower's contracted interest rate with no subsidy. Total subsidy is Rs. 1.80 lakh over five instalments.

An MIG borrower with annual household income Rs. 8.5 lakh takes a Rs. 22 lakh home loan for a Rs. 32 lakh house. First Rs. 8 lakh qualifies for the 4% subsidy, remaining Rs. 14 lakh runs at contracted rate. Total subsidy is Rs. 1.80 lakh in five instalments.

The five-instalment schedule looks the same for all three borrowers:

| Year | Instalment | Cumulative subsidy | Condition |
|---|---|---|---|
| 1 | Rs. 36,000 | Rs. 36,000 | Loan active, principal outstanding above 50% |
| 2 | Rs. 36,000 | Rs. 72,000 | Loan active, principal outstanding above 50% |
| 3 | Rs. 36,000 | Rs. 1.08 lakh | Loan active, principal outstanding above 50% |
| 4 | Rs. 36,000 | Rs. 1.44 lakh | Loan active, principal outstanding above 50% |
| 5 | Rs. 36,000 | Rs. 1.80 lakh | Loan active, principal outstanding above 50% |

The subsidy amount is identical across income brackets since only the first Rs. 8 lakh at 4% is subsidised. The advantage of PMAY-U 2.0 ISS is the same for a Rs. 8 lakh borrower and a Rs. 22 lakh borrower.

---

## How the 5-instalment disbursal works

The five-year DBT payout replaces the old upfront-credit model of CLSS. Each instalment is verified independently.

Each 1 April, the bank or HFC sends the loan status to the Central Nodal Agency (CNA), which is either the National Housing Bank or Housing and Urban Development Corporation (HUDCO). The status report confirms whether the loan is still active, whether more than 50% of the sanctioned principal is outstanding, whether the account has stayed non-NPA for the preceding 12 months, and whether the borrower is still occupying the house.

If all four conditions are met, the CNA releases Rs. 36,000 to the borrower's Aadhaar-linked savings account via DBT within 45 days. The borrower gets an SMS confirmation of the credit.

If the loan is prepaid to below 50% principal outstanding, further instalments stop. Any instalments already paid don't have to be returned. If the loan turns NPA in a given year, the instalment for that year is skipped, but the subsidy resumes the year the loan returns to standard status.

If the borrower sells the house or moves out within the five-year window, ISS stops and the subsidy already received is recovered from the sale proceeds through the bank.

Instalments are not cumulative and can't be carried forward. If a year is missed and the loan closes before catching up, the borrower forfeits that instalment.

---

## Documents required and Aadhaar-bank seeding

The document set is short but each item must match across the three government databases: Aadhaar, PAN, and the bank account.

Required documents are Aadhaar card of all household members, PAN card of the applicant, latest bank account passbook or statement, income certificate (Form 16, latest ITR, or employer certificate) matching the declared bracket, and property documents for the house being bought or built.

For ISS specifically, the loan sanction letter from the bank or HFC is mandatory, along with the loan account number and disbursement date.

The Aadhaar-bank seeding rule is the single most common blocker for ISS applications. The subsidy cannot land in a bank account unless that account is Aadhaar-seeded through NPCI's mapper. Check seeding status by SMS: send UIDPAY [last-4-digits-of-Aadhaar] to 51969 from your Aadhaar-linked mobile.

If the account is not seeded, walk into the bank branch with the Aadhaar card and complete the Aadhaar seeding form. Seeding usually takes 24 to 48 hours to reflect on NPCI's system.

The bank account must be a single-holder account of the primary borrower. Joint accounts aren't accepted for DBT credit under the current PMAY-U 2.0 architecture.

---

## Common rejection reasons under ISS

Bank nodal desks and CNA reviewers reject ISS applications for a small set of recurring issues. Fixing these upfront prevents a re-submission cycle.

Name and Aadhaar mismatch is the most frequent rejection. The name on the bank account, PAN card, and loan sanction letter must match the name on Aadhaar exactly. Even a middle name or expansion difference triggers rejection.

Aadhaar not seeded to the bank account is the second most common issue. The account may be Aadhaar-linked in the bank's core banking system without being NPCI-seeded. DBT credit fails silently on non-seeded accounts. Verify status through UIDPAY SMS before applying.

Loan disbursed before 1 September 2024 is a hard rejection under PMAY-U 2.0. If your loan was disbursed on 31 August 2024 or earlier, you may still qualify for the old CLSS if you filed the claim before its 2022 window closure, but not under the new ISS.

NPA status disqualifies the ISS payout for that year. If the loan account is classified as NPA at the annual review date, the instalment for that year is skipped.

Principal outstanding below 50% of sanctioned amount at the annual review date stops further instalments. Borrowers who prepay aggressively lose access to remaining instalments.

Previous PMAY benefit already availed by any household member in the past 20 years disqualifies the current application. This includes CLSS subsidies received before 2022, or BLC assistance received under PMAY-U.

---

## How to apply for PMAY-U 2.0

Three application paths are open depending on the vertical.

For BLC and AHP, apply through the Common Service Centre (CSC), the state urban development department, or the urban local body (municipal corporation or municipal council) of the city where you want to build or receive a house. Submit the pmaymis2_2024 application form with all documents. The application is verified at the ULB level, then forwarded to the state and MoHUA for sanction.

For ARH, apply through the ARH portal at pmay-urban.gov.in or contact the participating rental agency in your city. Selection is by lottery for public units and by direct booking for private-partnership units.

For ISS, apply through your home-loan bank or HFC at the time of loan application. The bank pre-fills the PMAY-U 2.0 ISS form based on your loan file, verifies income and Aadhaar, and submits the claim to the CNA. The subsidy pipeline runs independent of your loan disbursement. You don't need to visit any government office if the bank supports ISS filing.

The official portal pmaymis.gov.in/pmaymis2_2024/ also accepts direct applications for self-service filers. Aadhaar OTP verification and Digilocker-linked documents make the online path faster than the offline route.

---

## Application status check on pmaymis.gov.in

Once the application is submitted, the status is trackable through two channels.

The pmaymis.gov.in/pmaymis2_2024/ portal has a Track Application section. Enter the application ID or Aadhaar number and OTP. The system shows the current stage: submitted, ULB verified, state cleared, MoHUA sanctioned, or beneficiary rejected. Each stage carries a date and a comment.

The state-specific PMAY-U dashboards on state urban development department websites also mirror the same data. Uttar Pradesh, Madhya Pradesh, Maharashtra, and Karnataka have the most active state dashboards, per MoHUA activity data June 2026.

SMS alerts go to the Aadhaar-linked mobile number at each stage transition. The SMS carries the application ID, the new stage, and the action required if any.

If the status remains unchanged for over 60 days at any single stage, the applicant can raise a grievance through pmay-urban.gov.in > Grievance Redressal.

---

## Old PMAY-U completion timeline

The original PMAY-U scheme, launched in 2015, was extended till 30 September 2026 for completion of houses already sanctioned before 2022. The extension is administered through the SNA-SPARSH (Single Nodal Agency Single-account Cash Retention Sabka Vikas Hetu) module.

Under this window, states and ULBs can complete construction of already-sanctioned houses, release remaining central assistance instalments, and update the MoHUA MIS with completion certificates. No new sanctions are being issued under old PMAY-U.

As of June 2026, 98.60 lakh houses are completed under combined PMAY-U + PMAY-U 2.0, out of 1.27 crore sanctioned. The remaining 28.4 lakh houses are in various stages of construction and grounding.

Beneficiaries whose houses are still under construction from an earlier PMAY-U sanction should coordinate with the ULB to complete the house before 30 September 2026. Central assistance for houses not completed by that date will lapse.

---

## Frequently asked questions

**Am I eligible for PMAY-U 2.0 in 2026?** You qualify if your annual household income is up to Rs. 9 lakh, no household member owns a pucca house anywhere in India, and no household member has received a central housing scheme benefit in the past 20 years. Aadhaar and a linked bank account are also mandatory.

**How much is the maximum PMAY-U 2.0 interest subsidy?** Rs. 1.80 lakh over five annual instalments of Rs. 36,000 each. The 4% subsidy applies to the first Rs. 8 lakh of a home loan of up to Rs. 25 lakh, for a house of up to Rs. 35 lakh.

**What is the difference between PMAY-U 2.0 and the old CLSS?** PMAY-U 2.0 has a uniform 4% interest rate across all income categories, a lower MIG income cap of Rs. 9 lakh (down from Rs. 18 lakh), a lower maximum subsidy of Rs. 1.80 lakh (down from Rs. 2.67 lakh), and disburses the subsidy over five annual instalments via DBT instead of an upfront credit to the loan principal.

**Can I claim PMAY-U 2.0 subsidy on a home loan taken before September 2024?** No. Only loans disbursed on or after 1 September 2024 qualify for ISS under PMAY-U 2.0. Loans from before that date could have applied to old CLSS while it was active, but the CLSS window closed in 2022.

**Which bank should I use for PMAY-U 2.0 home loan?** Any scheduled commercial bank, housing finance company (HFC), or cooperative bank registered with the National Housing Bank can process an ISS claim under PMAY-U 2.0. The bank forwards your claim to the Central Nodal Agency (NHB or HUDCO) which handles the DBT disbursement.

**Is PMAY-U 2.0 subsidy taxable?** The subsidy received under PMAY-U 2.0 is treated as capital receipt and not taxable as income. However, deduction under Section 24(b) for home loan interest is available only on the interest actually paid by the borrower after netting the subsidy.

**Can I get PMAY-U 2.0 subsidy if I already own a plot of land?** Yes, through the BLC vertical. If you own land in an urban area and want to build a pucca house, you can claim Rs. 2.50 lakh central assistance for construction. The ISS vertical is separate and applies to home loans for buying or building.

**What happens if I prepay my home loan under PMAY-U 2.0?** If your loan principal outstanding drops below 50% of the sanctioned amount, further annual instalments of the subsidy stop. Any instalments already received don't have to be returned. Aggressive prepayment can cost you access to Rs. 36,000 or more in remaining instalments.

**Can two family members apply separately for PMAY-U 2.0?** No. PMAY-U 2.0 works on a household basis, not an individual basis. A household is a husband, wife, and unmarried children. Only one application per household is allowed.

**How do I check my PMAY-U 2.0 application status?** Visit pmaymis.gov.in/pmaymis2_2024/ and use the Track Application section with your application ID or Aadhaar number. SMS alerts also go to your Aadhaar-linked mobile at each stage transition.

---

## Official links and helplines

| Purpose | Link or number |
|---|---|
| PMAY-U 2.0 official portal | pmay-urban.gov.in |
| PMAY-U 2.0 application MIS | pmaymis.gov.in/pmaymis2_2024/ |
| Scheme guidelines PDF | pmay-urban.gov.in > Downloads > Guidelines |
| Aadhaar-seeding SMS check | Send UIDPAY [last-4-digits] to 51969 |
| MoHUA main site | mohua.gov.in |
| National Housing Bank | nhb.org.in |
| HUDCO (CNA for ISS) | hudco.org.in |
| Toll-free helpline | 1800-11-3377 or 1800-11-3388 |
| Grievance redressal | pmay-urban.gov.in > Grievance |
| State ULB list | pmay-urban.gov.in > States |
`;

const NEW_FAQS = [
  {
    question: "Am I eligible for PMAY-U 2.0 in 2026?",
    answer: "You qualify if your annual household income is up to Rs. 9 lakh, no household member owns a pucca house anywhere in India, and no household member has received a central housing scheme benefit in the past 20 years. Aadhaar and a linked bank account are also mandatory.",
  },
  {
    question: "How much is the maximum PMAY-U 2.0 interest subsidy?",
    answer: "Rs. 1.80 lakh over five annual instalments of Rs. 36,000 each. The 4% subsidy applies to the first Rs. 8 lakh of a home loan of up to Rs. 25 lakh, for a house of up to Rs. 35 lakh.",
  },
  {
    question: "What is the difference between PMAY-U 2.0 and the old CLSS?",
    answer: "PMAY-U 2.0 has a uniform 4% interest rate across all income categories, a lower MIG income cap of Rs. 9 lakh (down from Rs. 18 lakh), a lower maximum subsidy of Rs. 1.80 lakh (down from Rs. 2.67 lakh), and disburses the subsidy over five annual instalments via DBT instead of an upfront credit to the loan principal.",
  },
  {
    question: "Can I claim PMAY-U 2.0 subsidy on a home loan taken before September 2024?",
    answer: "No. Only loans disbursed on or after 1 September 2024 qualify for ISS under PMAY-U 2.0. Loans from before that date could have applied to old CLSS while it was active, but the CLSS window closed in 2022.",
  },
  {
    question: "Which bank should I use for PMAY-U 2.0 home loan?",
    answer: "Any scheduled commercial bank, housing finance company (HFC), or cooperative bank registered with the National Housing Bank can process an ISS claim under PMAY-U 2.0. The bank forwards your claim to the Central Nodal Agency (NHB or HUDCO) which handles the DBT disbursement.",
  },
  {
    question: "Is PMAY-U 2.0 subsidy taxable?",
    answer: "The subsidy received under PMAY-U 2.0 is treated as capital receipt and not taxable as income. However, deduction under Section 24(b) for home loan interest is available only on the interest actually paid by the borrower after netting the subsidy.",
  },
  {
    question: "Can I get PMAY-U 2.0 subsidy if I already own a plot of land?",
    answer: "Yes, through the BLC vertical. If you own land in an urban area and want to build a pucca house, you can claim Rs. 2.50 lakh central assistance for construction. The ISS vertical is separate and applies to home loans for buying or building.",
  },
  {
    question: "What happens if I prepay my home loan under PMAY-U 2.0?",
    answer: "If your loan principal outstanding drops below 50% of the sanctioned amount, further annual instalments of the subsidy stop. Any instalments already received don't have to be returned. Aggressive prepayment can cost you access to Rs. 36,000 or more in remaining instalments.",
  },
  {
    question: "Can two family members apply separately for PMAY-U 2.0?",
    answer: "No. PMAY-U 2.0 works on a household basis, not an individual basis. A household is a husband, wife, and unmarried children. Only one application per household is allowed.",
  },
  {
    question: "How do I check my PMAY-U 2.0 application status?",
    answer: "Visit pmaymis.gov.in/pmaymis2_2024/ and use the Track Application section with your application ID or Aadhaar number. SMS alerts also go to your Aadhaar-linked mobile at each stage transition.",
  },
];

// ==========================
// Pre-flight humanizer check
// ==========================
console.log("=== Pre-flight humanizer check ===");
const fullText = `${NEW_TITLE}\n${NEW_DESCRIPTION}\n${NEW_CONTENT}\n${JSON.stringify(NEW_FAQS)}`;

if (/[—–]/.test(fullText)) {
  console.error("ABORT: em/en dash detected");
  process.exit(1);
}
if (/[“”‘’]/.test(fullText)) {
  console.error("ABORT: smart quotes detected");
  process.exit(1);
}

const bannedWords = [
  "delve", "delving", "delves", "pivotal", "underscore", "underscores",
  "tapestry", "landscape of", "vibrant", "boasts", "boast", "showcase",
  "showcases", "testament", "interplay", "intricate", "enduring", "foster",
  "fostering", "garner", "garnered", "actually,", "in the realm of",
  "in today's world", "at its core", "the real question is",
  "what really matters", "crucial", "meticulously",
];
const contentLower = fullText.toLowerCase();
const banHits = bannedWords.filter((w) => contentLower.includes(w));
if (banHits.length) {
  console.error("ABORT: banned words:", banHits);
  process.exit(1);
}

const titleLen = NEW_TITLE.length;
const descLen = NEW_DESCRIPTION.length;
if (titleLen < 50 || titleLen > 65) {
  console.error(`ABORT: title length ${titleLen} outside [50,65]`);
  process.exit(1);
}
if (descLen < 150 || descLen > 160) {
  console.error(`ABORT: description length ${descLen} outside [150,160]`);
  process.exit(1);
}

const contentWords = NEW_CONTENT.trim().split(/\s+/).filter(Boolean).length;
if (contentWords < 2500) {
  console.error(`ABORT: content ${contentWords} words, below 2500 target`);
  process.exit(1);
}

console.log(`  Title: ${titleLen}c OK`);
console.log(`  Description: ${descLen}c OK`);
console.log(`  Content: ${contentWords} words OK`);
console.log(`  No em/en dashes: OK`);
console.log(`  No smart quotes: OK`);
console.log(`  No banned words: OK`);
console.log();

if (process.env.DRY_RUN === "1") {
  console.log("=== DRY_RUN=1 detected: stopping before DB write ===");
  process.exit(0);
}

// ==========================
// Phase 1: DB update
// ==========================
console.log("=== PHASE 1: Update scheme row ===");
const { error } = await supabase
  .from("schemes")
  .update({
    title: NEW_TITLE,
    description: NEW_DESCRIPTION,
    content: NEW_CONTENT,
    faqs: NEW_FAQS,
    updated_at: new Date().toISOString(),
  })
  .eq("slug", SLUG);
if (error) {
  console.error("  FAIL:", error.message);
  process.exit(1);
}
console.log(`  OK schemes/${SLUG}`);

// ==========================
// Phase 2: revalidate
// ==========================
console.log("\n=== PHASE 2: Revalidate ===");
const rev = await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sarkari-yojana/" + SLUG)}`);
console.log(`  Path revalidate: HTTP ${rev.status}`);
const tag = await fetch(`${SITE_URL}/api/revalidate?tag=schemes`);
console.log(`  Schemes tag revalidate: HTTP ${tag.status}`);

// ==========================
// Phase 3: IndexNow ping
// ==========================
console.log("\n=== PHASE 3: IndexNow ping ===");
await pingIndexNow(SLUG, "/sarkari-yojana");

console.log("\n=== DONE ===");
console.log(`Verify live: ${SITE_URL}/sarkari-yojana/${SLUG}`);
