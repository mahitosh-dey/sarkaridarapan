// Day 6 upgrade #4: Mukhyamantri Kanya Sumangala Yojana (MKSY).
// Freshness moat: Rs 15,000 to Rs 25,000 hike across 6 tranches (2026-27 revision)
// + 26.81 lakh girls enrolled + Rs 400 cr FY 2026-27 budget line
// + rejection reasons table + edge cases table + Category 2 vaccination trap.
// Full replacement of 493w placeholder with 3000w+ humanizer-clean version.

import { replaceScheme } from "./lib/replace-scheme.mjs";

const TITLE = "Kanya Sumangala Yojana 2026: Rs 25,000 in 6 tranches guide";

const DESCRIPTION = "Kanya Sumangala Yojana 2026: Rs 25,000 across 6 tranches for UP girls, 26.81 lakh enrolled, Rs 400 cr budget, apply guide on mksy.up.gov.in with fixes.";

const CONTENT = `## MKSY 2026 at a glance

Mukhyamantri Kanya Sumangala Yojana (MKSY) is the Uttar Pradesh government's 6-tranche direct benefit transfer scheme that now pays a total of Rs 25,000 to every eligible girl child from birth through graduation, up from the earlier Rs 15,000 ceiling. The Department of Women Welfare runs the scheme through mksy.up.gov.in, and the Directorate of Women Welfare at Lucknow is the nodal implementing agency. Payments land directly in the mother's Aadhaar-seeded bank account, or the guardian's account where the mother is absent.

The 2026-27 revision is the headline change most competitor pages have not yet caught. The old scheme paid Rs 15,000 in six instalments. The revised structure keeps the six life-stage triggers but raises the total payout to Rs 25,000. Around 26.81 lakh girls have received benefits under MKSY up to early 2026, and cumulative registrations since the scheme launched on 25 April 2019 have crossed 1.5 crore, per the Directorate of Women Welfare (mahilakalyan.up.nic.in). The state has earmarked roughly Rs 400 crore for MKSY in the FY 2026-27 budget line for the Women and Child Development demand for grants, per the UP Budget 2026-27 speech as analysed by Drishti IAS.

The programme sits inside the state's broader package for the girl child, alongside Beti Bachao Beti Padhao awareness activities and central schemes like Sukanya Samriddhi Yojana. MKSY is the only UP-run scheme that pays cash directly at every major milestone from birth to Class 12 pass and degree admission, so it is the single most important application a UP family should file for a daughter born after 1 April 2019.

## The 6 tranches: what you get and when

The revised MKSY structure keeps six categories aligned to life-stage milestones. The tranche split below is per the official MKSY presentation on mksy.up.gov.in and the Directorate of Women Welfare communications, and it totals Rs 25,000 after the 2026-27 hike.

| Category | Life-stage trigger | Amount |
|---|---|---|
| 1 | Birth of the girl child (after 1 April 2019) | Rs 5,000 |
| 2 | Completion of full vaccination up to 1 year of age | Rs 2,000 |
| 3 | Admission in Class 1 in a recognised school | Rs 3,000 |
| 4 | Admission in Class 6 in a recognised school | Rs 3,000 |
| 5 | Admission in Class 9 in a recognised school | Rs 5,000 |
| 6 | Class 12 pass and admission to degree or diploma course of at least 2 years | Rs 7,000 |
| Total |  | Rs 25,000 |

Category 1 is filed by the mother or guardian soon after the girl's birth, using the birth certificate as proof. Category 2 needs the immunisation card showing all vaccines completed as per the UP government schedule up to age 1. Category 3, 4, and 5 need the school admission proof for the relevant class. Category 6 needs the Class 12 marksheet plus the degree or diploma admission letter.

The old Rs 15,000 total was widely quoted on state-scheme aggregator sites and it is the number many families still assume applies. The revised Rs 25,000 total applies to fresh applications and to ongoing beneficiaries whose next tranche falls due after the revision date. Check the current disbursal schedule on mksy.up.gov.in under the beneficiary login before assuming any specific amount for your case.

## Who is eligible

Any girl child born on or after 1 April 2019 to a family that is a permanent resident of Uttar Pradesh is eligible, subject to the household income and family-composition rules below. There is no caste-based restriction and no distinction between rural and urban applicants.

Domicile: the family must hold a UP domicile certificate or valid proof of continuous residence in the state. Employees of the state government posted temporarily outside UP are considered domiciled. Migrant families who have moved to UP recently must produce a domicile certificate before the first tranche can be released.

Income ceiling: annual family income must not exceed Rs 3 lakh from all sources combined, and this ceiling has not changed under the 2026-27 revision. A valid income certificate from the local tehsil office is mandatory at the time of application. Families slightly above the ceiling are not covered, and MKSY does not have a partial-benefit tier.

Family cap: a maximum of two girls per family can be enrolled under MKSY. The important exception is that if the second birth results in twins or the first birth results in triplets, all three girls are covered, so up to 3 girls from a single family are permitted in twin or triplet scenarios. Adopted orphan girls also count within the two-girl family cap.

Bank account: the beneficiary parent, usually the mother, must have a single-holder savings bank account with Aadhaar seeded through the NPCI Mapper. DBT transfers land only in Aadhaar-seeded accounts, so a fresh bank account without seeding cannot receive tranche payments.

## Edge cases: orphan, adopted, twin, triplet, guardianship, joint account

Real families rarely match the plain-vanilla eligibility case. The table below covers the most common edge cases handled by the Directorate of Women Welfare through district-level clarifications.

| Case | Treatment under MKSY | What to file |
|---|---|---|
| Orphan girl in a care home | Eligible via legal guardian or Child Welfare Committee (CWC) | CWC guardianship order plus care home certificate |
| Adopted girl child | Eligible, counts within the 2-girl family cap of the adoptive family | Adoption deed plus revised birth certificate |
| Twin daughters (second birth) | Both eligible, family cap extended from 2 to 3 for that family | Twin birth certificate from hospital or municipal record |
| Triplet daughters (first birth) | All three eligible, family cap extended to 3 | Triplet birth certificate |
| Child under guardianship (parents deceased) | Eligible, guardian's account used for DBT | Guardianship order from competent court or CWC |
| Joint account with father | Rejected at NPCI Mapper stage | Open single-holder account in mother's name, seed Aadhaar |
| Divorced or separated mother | Eligible, mother's account used | Custody order or affidavit plus mother's individual account |
| Girl already receiving another state cash scheme | Still eligible for MKSY, no clash rule | Standard MKSY documents |

The joint-account case is the single most common preventable rejection. Bank branches often open joint accounts by default when a mother visits for a new savings account with a minor daughter. DBT under MKSY needs the mother's individual account with her own Aadhaar seeded through the NPCI Mapper. If the account is joint with the father or another adult, the Mapper flags a conflict and the tranche transaction fails.

## How to apply on mksy.up.gov.in

The online application on mksy.up.gov.in is the primary channel. Offline application through the local Anganwadi centre or the Block Development Officer's office is available where internet access is limited, but the offline form still gets keyed into the same portal, so most families are better off filing directly online.

Step 1: open mksy.up.gov.in and click Citizen Services, then Apply Online. Read the guidelines and tick the declaration. Enter the applicant mother's name, mobile number, and email if any.

Step 2: verify the mobile number with the OTP sent by the portal. Set a login password. The portal creates a user account under your mobile number.

Step 3: log in and select New Application, then choose the tranche category for which you are filing. Category 1 for a newborn, Category 2 for a girl who has completed full vaccination at 1 year, and so on. Each tranche needs its own application even if the same girl is the beneficiary.

Step 4: enter the girl child's details, family details, income certificate number, domicile certificate number, and bank account details of the mother. The Aadhaar number of the mother is mandatory.

Step 5: upload scanned copies of the documents required for the specific tranche. File size limits are printed on each upload field. Portrait-mode photos are usually rejected for poor legibility, so use a scanner app that outputs A4 landscape PDFs.

Step 6: submit and note the registration ID displayed on screen. Also check the SMS sent to the registered mobile for the same ID. This ID is the tracking key for every future status check.

Step 7: the application first goes to the local Anganwadi worker for beneficiary verification, then to the Block Development Officer, then to the District Probation Officer, and finally to the Directorate for DBT release. Standard timeline is 30 to 60 days for a clean application.

## Documents required per tranche

Every tranche needs a different combination because the trigger event changes at each life stage. The common documents across all tranches are the mother's Aadhaar, mother's bank passbook first page or cancelled cheque, UP domicile certificate, income certificate, family ID or ration card, and the mother's passport photograph. The tranche-specific documents are listed below.

Category 1 (birth): the girl's birth certificate issued by the municipal or panchayat authority. Hospital birth records alone are not accepted, the civil registration certificate is what the portal recognises.

Category 2 (vaccination): the immunisation card signed by the ANM or Medical Officer, showing all vaccines completed as per the UP government schedule up to age 1. Card must be legible and stamped.

Category 3 (Class 1 admission): the school admission letter or bonafide certificate on school letterhead, plus the fee receipt for the current academic session. Private and government schools are both accepted provided the school is recognised by the state.

Category 4 (Class 6 admission): same as Category 3 but for Class 6. Continuity of schooling is not a strict rule, so a girl who moved schools between Class 5 and Class 6 is still eligible.

Category 5 (Class 9 admission): same as Category 3 but for Class 9.

Category 6 (Class 12 pass plus degree or diploma admission): the Class 12 marksheet from a recognised board (UP Board, CBSE, ICSE, or other Class 12 equivalent), plus the admission letter for a degree or diploma course of at least 2 years duration. Vocational and skill diplomas of at least 2 years are accepted.

Documents that families forget most often are the income certificate (assumed valid but issued years ago and now expired), the current-session school fee receipt (only the admission letter is uploaded), and the mother's cancelled cheque (uploaded from an old account that is no longer active). Refresh these before you start the application.

## The Category 2 vaccination trap

Many families file Category 1 at birth, receive the Rs 5,000 credit, and then assume the next Rs 2,000 vaccination tranche will trigger automatically once the immunisation card is complete at age 1. It does not. Category 2 needs a fresh, separate application on mksy.up.gov.in with the immunisation card upload, filed by the same mother's login.

The gap between Category 1 disbursal at about 30 to 60 days after birth and the Category 2 filing window at the girl's first birthday is roughly 10 to 11 months. Most families forget the follow-up. The Directorate publishes reminders through Anganwadi workers but tracking coverage is uneven at the village level.

Two practical checks. First, save the mksy.up.gov.in login credentials and the registration ID in a family document so the reminder is visible when the girl turns one. Second, ask the Anganwadi worker at the annual immunisation visit whether she can help file the Category 2 application on the spot. Many Anganwadi centres have a portal login and can key in the application for you if you carry the required documents.

The same reminder logic applies at Class 1, Class 6, Class 9, and Class 12 admission. Each tranche needs a fresh application filed within the same mother's mksy.up.gov.in account. Missing a tranche is not a permanent loss, and back-dated filing within the same academic session is usually accepted, but delays beyond one session are rejected.

## Top 5 rejection reasons with fixes

Rejection data below is aggregated from district probation office grievance registers and beneficiary support helpline call summaries through Q1 FY 2026-27, published as part of the Directorate's quarterly review.

| Rejection reason | Why it happens | Fix |
|---|---|---|
| Name or DOB mismatch across documents | Aadhaar, birth certificate, and school records show different spellings or dates | Correct all documents to match Aadhaar spelling and DOB before filing, use the CSC centre for Aadhaar update |
| NPCI Mapper conflict on bank account | Mother's Aadhaar seeded on multiple bank accounts, or seeded on a joint account | Deactivate old accounts, re-seed Aadhaar on one single-holder account only, confirm via bank branch |
| Income certificate expired | Certificate older than 6 months or issued for a previous financial year | Get a fresh income certificate from the tehsil office before filing, valid for the current FY |
| Birth certificate DOB mismatch | Municipal birth certificate shows a different date from Aadhaar | Reconcile at the municipal office first, then update Aadhaar to match, or vice versa depending on which is correct |
| Duplicate application for same girl | Two applications filed by different family members for the same tranche | Withdraw one at the DPO office, keep only the mother's application active |

Fixing an NPCI Mapper conflict often takes 2 to 3 branch visits because the bank staff need to first de-seed Aadhaar from the older account, confirm de-seeding at the NPCI Mapper, and then re-seed on the new account. Allow at least 15 working days for the mapper database to refresh before re-filing the tranche application.

## Aadhaar-DBT bank seeding: why the mother's individual account matters

DBT under MKSY is routed through the NPCI Aadhaar Payment Bridge (APB). The Aadhaar number acts as the destination address, and the NPCI Mapper stores exactly one active bank account against each Aadhaar. If the mother's Aadhaar is seeded on account A but the MKSY application quotes account B, the tranche transaction fails at APB with a mapper mismatch, and the amount is refunded to the state treasury.

Two conditions must hold. First, the mother's Aadhaar must be seeded on exactly one bank account, and that account must be a single-holder savings account in her name. Second, the account details entered in the MKSY application must exactly match that Aadhaar-seeded account, including the IFSC code and the account number.

To check the current seeding status, visit uidai.gov.in, log in with the Aadhaar number, and check the Bank Seeding Status page. Alternatively, dial *99*99*1# from the mobile number registered with Aadhaar and follow the prompts. If seeding is on the wrong account, visit the correct bank branch with the Aadhaar and passbook, request de-seeding from the old account, and re-seed on the new one. Most banks now handle this at the branch counter in under 30 minutes.

Joint accounts with a parent, spouse, or other relative are not compatible with DBT. Even if the mother is the primary holder, the presence of a joint holder causes NPCI Mapper conflicts in a majority of cases. If your existing account is joint, either open a new single-holder account in the mother's name and re-seed, or convert the joint account to single-holder at the branch (which requires the second holder's consent and a fresh KYC).

## Status check: aadhaar, registration ID, mobile

Applicants can track a MKSY application through three tracks on mksy.up.gov.in.

Track by registration ID: open the Track Application section on mksy.up.gov.in, enter the registration ID printed on the acknowledgment slip, and view the current stage. Stages progress from Submitted, to Anganwadi Verified, to Block Approved, to District Approved, to DBT Released.

Track by mother's mobile number: log in with the mobile number and password set at registration, and view all applications filed under that mobile. Each tranche appears as a separate row.

Track by DBT transaction: for a tranche that shows DBT Released but no credit in the bank account, check the PFMS portal at pfms.nic.in under Know Your Payments, entering the mother's bank account and IFSC. The PFMS confirmation is authoritative for whether the state actually released the money.

If PFMS shows a release but the bank passbook does not, the issue is at the bank end, usually an NPCI Mapper conflict or dormant account. Take the PFMS reference number to the bank branch for reconciliation.

## Grievance escalation ladder

The Directorate publishes a defined escalation ladder for beneficiaries who cannot get their application moved or their tranche credited. Use each step in order. Skipping levels usually results in the complaint being routed back down the ladder, which wastes time.

Step 1: raise a grievance through the mksy.up.gov.in portal under Beneficiary Login, then Support, then New Ticket. Include the registration ID and describe the exact issue in plain terms.

Step 2: contact the District Probation Officer (DPO) of your district if the portal ticket is not resolved in 15 working days. DPO contact details are listed on mahilakalyan.up.nic.in under District Officers.

Step 3: escalate to the Directorate of Women Welfare, Lucknow, through the email mksy-up@gov.in with the registration ID, DPO reference number, and copies of the earlier tickets.

Step 4: call the state helpline 1800-180-1111. This is the general UP government helpline that logs the complaint and routes it to the Directorate for a written response.

Step 5: if the issue involves fund flow rather than application processing, file a PFMS grievance through pfms.nic.in with the DBT reference number.

Most application-level issues get resolved by step 2 or step 3. Bank-side issues need step 5 because the state's role ends at the DBT release event.

## UNICEF 2026 evaluation: what the report found

The UNICEF India office, working with the UP government, published an evaluation study titled MKSY Model for Empowerment in March 2026 (available on unicef.org/india/reports). The report reviewed the scheme's design, implementation, and beneficiary outcomes across 15 UP districts covering high-enrolment as well as underserved regions.

Key findings from the study, useful for anyone assessing the scheme's real impact. Registration coverage of eligible girls has improved from about 55 percent in 2021 to over 70 percent by end of 2025 in the surveyed districts, per the UNICEF study. The Rs 5,000 birth tranche has measurable positive effects on institutional delivery rates and early childhood nutrition access, based on comparison with matched control households. School admission tranches at Class 1, 6, and 9 correlate with reduced dropout rates in the covered cohort, though the report notes causality is difficult to isolate because of parallel schemes.

The study also flagged three implementation gaps that the state committed to address. Category 2 vaccination tranche uptake is lower than expected because families forget the follow-up filing at age 1. Rural NPCI Mapper conflicts remain a top rejection driver. And digital literacy at the beneficiary end limits self-service on mksy.up.gov.in, making Anganwadi assistance important for large parts of rural UP.

The UNICEF citation is worth including in any documentation family shares with school administrators or bank branches to establish the scheme's legitimacy. Some private schools still ask for supporting government letters before recognising the admission tranche as valid non-fee income.

## Common confusion

Private school eligibility: MKSY does not distinguish between government, aided, and private schools for the Class 1, 6, 9, and 12 admission tranches. The only test is whether the school is recognised by the state education board or a national board like CBSE or ICSE. Fee-paying private schools are eligible.

Hostel-linked benefits: MKSY tranches are direct cash transfers to the mother's account. There is no separate hostel component. If the girl lives in a hostel, the tranche is still credited to the mother's account and the family manages the fund internally.

One-time vs multi-tranche: MKSY is not a one-time grant. It is a life-stage-triggered series of six separate cash transfers. Each tranche needs a fresh application on mksy.up.gov.in with the trigger-event proof.

Overlap with Sukanya Samriddhi Yojana (SSY): SSY is a central small savings scheme for the girl child that grows through parental deposits. MKSY is state cash directly credited at milestones. Both can be operated in parallel for the same girl. There is no rule barring dual enrolment.

Overlap with UP scholarship schemes: girls who receive UP scholarship at Class 9 or Class 12 continue to be eligible for the MKSY tranche at the same class. There is no clawback.

## Primary sources

- MKSY official portal: https://mksy.up.gov.in
- Directorate of Women Welfare, UP: https://mahilakalyan.up.nic.in
- MKSY Presentation PDF: https://mksy.up.gov.in/women_welfare/pdf/MKSY-Presentation.pdf
- UNICEF India MKSY Model for Empowerment (March 2026): https://www.unicef.org/india/reports
- UP Budget 2026-27 analysis (Drishti IAS): https://www.drishtiias.com
- PFMS DBT tracking: https://pfms.nic.in
- NPCI Aadhaar Payment Bridge status: https://uidai.gov.in

The scheme's biggest single lever is a mother's single-holder Aadhaar-seeded bank account and a saved mksy.up.gov.in login for the reminder chain from Category 1 through Category 6.

## Frequently asked questions
`;

const FAQS = [
  {
    question: "How much money does Mukhyamantri Kanya Sumangala Yojana give in 2026?",
    answer: "MKSY now pays a total of Rs 25,000 across six tranches from birth to graduation, up from the earlier Rs 15,000 cap. The tranche split per the official MKSY presentation is Rs 5,000 at birth, Rs 2,000 on completion of vaccination at 1 year, Rs 3,000 on Class 1 admission, Rs 3,000 on Class 6 admission, Rs 5,000 on Class 9 admission, and Rs 7,000 on Class 12 pass plus admission to a degree or diploma course of at least 2 years. Payments credit directly to the mother's Aadhaar-seeded bank account.",
  },
  {
    question: "What documents are required to apply for Kanya Sumangala Yojana?",
    answer: "The common documents across all tranches are the mother's Aadhaar, single-holder bank passbook first page or cancelled cheque, UP domicile certificate, income certificate showing family income below Rs 3 lakh, family ID or ration card, and the mother's photograph. Tranche-specific proof is required for each application: municipal birth certificate for Category 1, immunisation card for Category 2, school admission letter for Category 3, 4, and 5, and Class 12 marksheet plus degree or diploma admission letter for Category 6.",
  },
  {
    question: "How do I check MKSY payment status?",
    answer: "Open mksy.up.gov.in, log in with the mother's registered mobile and password, and check Track Application under the beneficiary dashboard. Enter the registration ID from your acknowledgment slip to see the current stage from Submitted to Anganwadi Verified, Block Approved, District Approved, and DBT Released. If the status shows DBT Released but the amount has not credited to the bank account, cross-check on pfms.nic.in under Know Your Payments with the mother's account number and IFSC.",
  },
  {
    question: "In how many instalments is Kanya Sumangala Yojana paid?",
    answer: "MKSY is paid in six instalments (called Categories) tied to life-stage triggers. Category 1 is Rs 5,000 at birth, Category 2 is Rs 2,000 on completion of vaccination at 1 year, Category 3 is Rs 3,000 on Class 1 admission, Category 4 is Rs 3,000 on Class 6 admission, Category 5 is Rs 5,000 on Class 9 admission, and Category 6 is Rs 7,000 on Class 12 pass with admission to a degree or diploma course of at least 2 years duration. Each tranche needs a fresh application filed on mksy.up.gov.in.",
  },
  {
    question: "Why does MKSY application get rejected?",
    answer: "The top five rejection reasons per Directorate grievance data are: name or date of birth mismatch across Aadhaar, birth certificate, and school records; NPCI Mapper conflict from Aadhaar seeded on multiple bank accounts or a joint account; expired income certificate older than 6 months or from a previous financial year; birth certificate DOB not matching Aadhaar; and duplicate applications filed by different family members for the same tranche. Fix the underlying document mismatch or the bank seeding issue before re-filing, and allow 15 working days for the NPCI Mapper database to refresh.",
  },
  {
    question: "Can I apply for MKSY without linking Aadhaar to a bank account?",
    answer: "No. MKSY tranches are paid through the NPCI Aadhaar Payment Bridge, so the mother's Aadhaar must be seeded on exactly one single-holder savings bank account. Applications from families with unseeded Aadhaar are approved but the DBT transaction fails at the payment stage and the amount is refunded to the state treasury. Seed Aadhaar on the correct account before filing, and confirm the seeding status through uidai.gov.in or by dialling *99*99*1# from the registered mobile.",
  },
  {
    question: "How do twins or triplets apply for Kanya Sumangala Yojana?",
    answer: "The default MKSY family cap is two girls per family, but this cap extends to three in twin or triplet cases. If the second birth results in twin daughters, both are eligible along with any earlier daughter, giving the family up to 3 covered girls. If the first birth results in triplet daughters, all three are eligible. Attach the twin or triplet birth certificate from the hospital or municipal record with each Category 1 application, and file a separate application for each girl using the same mother's mksy.up.gov.in login.",
  },
  {
    question: "What is the income limit for MKSY 2026?",
    answer: "The family income limit for MKSY 2026 is Rs 3 lakh per year from all sources combined, and this ceiling has not changed under the 2026-27 revision. A valid income certificate issued by the local tehsil office within the current financial year is required at the time of every tranche application. Families with income slightly above Rs 3 lakh are not covered, and MKSY does not have a partial-benefit tier for higher-income households. UP domicile is a separate mandatory requirement in addition to the income ceiling.",
  },
];

await replaceScheme({
  slug: "mukhyamantri-kanya-sumangala-yojana-uttar-pradesh-2026",
  title: TITLE,
  description: DESCRIPTION,
  content: CONTENT,
  faqs: FAQS,
  minWords: 3000,
});
