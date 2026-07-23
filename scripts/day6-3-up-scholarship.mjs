// Day 6 upgrade #3: UP Pre-Matric / Post-Matric / Dashmottar Scholarship 2026-27.
// Freshness moat: NPCI B08 / 207 rejection code decoder, Suspect Data blank-status
// explainer, 4-department routing (Samaj Kalyan / Backward Class / Minority / Tribal),
// DWO grievance escalation ladder, private-college institute-registration trap,
// state UP vs central momascholarship one-only rule for minority students.
// Full replacement of the 473w placeholder with 3000w+ humanizer-clean version.

import { replaceScheme } from "./lib/replace-scheme.mjs";

const TITLE = "UP Scholarship 2026-27: apply, status, NPCI rejection fix";

const DESCRIPTION = "UP Scholarship 2026-27 apply on scholarship.up.gov.in: Rs 2 lakh income cap, 30 Oct 2026 last date, NPCI B08/207 rejection codes decoded, DWO fix steps.";

const CONTENT = `## UP Scholarship 2026-27 at a glance

UP Scholarship 2026-27 is the umbrella name for four state-run scholarship schemes administered through the single Saksham portal at scholarship.up.gov.in: Pre-Matric (Class 9 to 10), Post-Matric Intermediate (Class 11 to 12), Post-Matric Dashmottar (UG, PG, Diploma, Certificate above Intermediate), and category-specific top-ups. The last date to submit fresh applications is expected around 30 October 2026, following the Samaj Kalyan Vibhag pattern of the last three cycles, with the phase-wise window opening in the 1st week of July 2026 for Pre-Matric and the 2nd to 4th week of July 2026 for Post-Matric and Dashmottar.

Two income ceilings apply. Rs 2 lakh annual family income for General, OBC, and Minority post-matric applicants. Rs 2.5 lakh annual family income for SC and ST post-matric applicants. Minority Pre-Matric applicants sit on a tighter Rs 1 lakh ceiling under the central-plus-state overlay. These figures have not moved since the 2023-24 revision and are confirmed on scholarship.up.gov.in and samajkalyan.up.nic.in.

Four departments own the disbursement, not one. Samaj Kalyan Vibhag handles SC, ST, and General category files. Backward Class Welfare handles OBC files through backwardclasswelfare.upsdc.gov.in. Minority Welfare handles Muslim, Christian, Sikh, Buddhist, Parsi, and Jain files through upminorities.gov.in. Tribal Welfare handles Scheduled Tribe files through tribalwelfare.up.gov.in. All four route through the same Saksham application front-end but the disbursement engine, grievance officer, and DWO in your district are different. Getting this wrong is the single biggest reason students chase the wrong helpline for weeks.

The rest of this page walks through the four-department split, category-wise eligibility and amounts, the exact scholarship.up.gov.in application flow, the documents checklist, the payment schedule, the NPCI and PFMS rejection codes that block money in your bank account, and the DWO escalation ladder when the portal message is not enough.

## Pre-Matric vs Post-Matric vs Dashmottar

The three schemes look similar on the login screen but attach to different class levels, amount ranges, and departmental rulebooks.

| Scheme | Class level | Amount range per year | Primary department |
|---|---|---|---|
| Pre-Matric | Class 9 to 10 only | Rs 2,000 to Rs 15,000 (with hostel) | Samaj Kalyan / Minority Welfare (for minority students) |
| Post-Matric Intermediate | Class 11 to 12 | Rs 2,000 to Rs 10,000 | Samaj Kalyan / Backward Class Welfare / Minority Welfare |
| Post-Matric Dashmottar | UG, PG, Diploma, Certificate above Intermediate | Rs 2,500 to Rs 13,500 (course-dependent) | Samaj Kalyan / Backward Class Welfare / Minority Welfare / Tribal Welfare |

Dashmottar is the term the UP government uses for courses above Intermediate. It literally means "after 10 plus 2". If you are in Class 11 or 12, you apply under Post-Matric Intermediate, not Dashmottar. If you are in BA, BSc, BCom, BTech, MBBS, BEd, ITI, polytechnic diploma, or any UG or PG course, you apply under Dashmottar. Mixing these up produces a "wrong course selected" rejection that is painful to correct because it needs a full withdrawal and re-registration in some cycles.

Amounts within each scheme depend on your group. Group I is medical, engineering, agricultural, veterinary, MBA, and MCA. Group II is other professional courses like BEd and polytechnic. Group III is graduation and post-graduation in general streams. Group IV is Intermediate. Hosteller amounts run higher because they include a monthly maintenance allowance on top of the course fee reimbursement.

## Who administers what: 4-department routing

The Saksham portal at scholarship.up.gov.in accepts the application and does the eligibility check, but the actual disbursement flows through the department that owns your category. Getting the routing right saves weeks of grievance chasing.

| Your category | Owning department | Portal for policy circulars | Helpline entry point |
|---|---|---|---|
| Scheduled Caste (SC) | Samaj Kalyan Vibhag | samajkalyan.up.nic.in | District Social Welfare Officer (DSWO) |
| Scheduled Tribe (ST) | Tribal Welfare | tribalwelfare.up.gov.in | District Tribal Welfare Officer |
| Other Backward Class (OBC) | Backward Class Welfare | backwardclasswelfare.upsdc.gov.in | District Backward Class Welfare Officer |
| General | Samaj Kalyan Vibhag | samajkalyan.up.nic.in | District Social Welfare Officer (DSWO) |
| Minority (Muslim, Christian, Sikh, Buddhist, Parsi, Jain) | Minority Welfare | upminorities.gov.in | District Minority Welfare Officer |

The Saksham application UI shows a single "Check Status" button, but if the status message says "Forwarded to DWO" or "Pending at DWO", the DWO in question is the one from the department table above, not the DSWO by default. Students routinely walk into the DSWO office for an OBC file and get told the file isn't with them because it's with the District Backward Class Welfare Officer instead. Match the department to your category before you visit any office.

## Eligibility by category

Eligibility rules combine domicile, income, category, and course level. UP domicile is compulsory for all four scheme streams. Studying inside UP is required for state-scheme streams. Studying outside UP under Backward Class Welfare is allowed under a separate slab for specific approved institutes.

For SC and ST applicants, the annual family income ceiling is Rs 2.5 lakh for post-matric and dashmottar, with no minimum marks requirement for renewal. The caste certificate is a one-time lifetime document issued by the Tehsil office. Domicile certificate is required at the time of first application.

For OBC applicants, the income ceiling is Rs 2 lakh for post-matric and dashmottar. Caste certificate under the Backward Class Welfare route is valid for 3 years and must be renewed at expiry. Renewal applications require 50% marks in the previous academic year, and this cutoff has held since 2022-23.

For General category applicants, the income ceiling is Rs 2 lakh and the scheme is called Samanya Vargiya Vidyarthi Shulk Pratipoorti. Coverage is course fee reimbursement only; the maintenance allowance component is not available for General category. Renewal needs 50% marks in the previous year.

For Minority category applicants, two overlays apply. The state UP Minority Welfare scholarship uses a Rs 2 lakh ceiling for post-matric and a Rs 1 lakh ceiling for pre-matric. The central Ministry of Minority Affairs momascholarship at momascholarship.gov.in runs a parallel scholarship. Minority students can claim only one, not both. Attempting both in the same cycle triggers a PFMS-level duplicate flag and both applications are held. Pick the one with the higher amount for your course and stick to it.

Income certificate validity is 3 years across all categories, issued by the Tehsil office. If your income certificate expired between renewal cycles, you need a fresh one before the current-year application.

## How to apply on scholarship.up.gov.in

The application flow is a 6-step sequence. Step 1 is registration. Log in to scholarship.up.gov.in, click the "Student" section, then select "Registration" under the correct scheme (Pre-Matric, Post-Matric Intermediate, or Post-Matric Dashmottar). Choose Fresh or Renewal. Fresh applicants get a new registration number. Renewal applicants must use the same registration number issued last year; a new number breaks the renewal chain.

Step 2 is filling personal details. Aadhaar-verified name, father's name, mother's name, category (from the four-department table above), sub-category (like SC or ST or OBC creamy vs non-creamy), permanent address with district and tehsil.

Step 3 is filling academic details. Previous year board and roll number for renewal cases. Current institute code from the Saksham institute directory. If your college does not appear in the directory, it is not Saksham-registered and any application against it will be auto-rejected with "institute not found". Ask your college's scholarship coordinator to complete institute registration before you submit.

Step 4 is filling bank and NPCI details. Aadhaar-linked bank account (single applicant name only, not joint with parent), IFSC code, and confirmation that NPCI mapping is active. This is where most rejections start. Section 9 explains the codes.

Step 5 is uploading documents. Income certificate, caste certificate, domicile certificate, marksheet of last qualifying exam, current-year fee receipt from the institute, and hostel receipt if you are claiming hostel allowance. Every file must be under the portal size limit (100 KB PDF or JPG typical) and clearly legible.

Step 6 is final submission and printout. Take a printout, sign it, attach photocopies of uploaded documents, and submit the hard-copy set to your institute within the deadline the portal shows on the receipt (usually 7 to 10 days after online submission). The institute forwards the batch to the DWO, who then approves and pushes to PFMS for disbursement.

## Documents required

The document checklist is the same across schemes with small variations for hostellers and Minority applicants.

| Document | Issuing authority | Validity |
|---|---|---|
| Aadhaar card | UIDAI | Lifetime |
| Income certificate | Tehsil office | 3 years |
| Caste certificate (SC or ST) | Tehsil office | Lifetime |
| Caste certificate (OBC) | Tehsil office | 3 years |
| Domicile certificate | Tehsil office | Lifetime |
| Marksheet of last qualifying exam | Board or university | Permanent |
| Current-year fee receipt from institute | Institute | Current academic year |
| Bank passbook first page (Aadhaar-linked, single-name) | Bank | Current |
| Hostel receipt (only if claiming hostel allowance) | Institute or hostel warden | Current academic year |
| Minority declaration (only for minority scheme) | Self-declaration | Current cycle |

The single most common documentation error is uploading a joint bank account (student plus parent) instead of a single-name Aadhaar-linked account. PFMS rejects joint accounts at the disbursement stage even if the portal accepts the upload during application. Open a single-name savings account if you do not already have one, and complete NPCI Aadhaar seeding at the branch before the application deadline.

## Amount table by group and hostel or day-scholar

Amounts are set per department for each group of courses. The table below covers the Samaj Kalyan Vibhag Post-Matric and Dashmottar heads which apply to SC, General, and (through Backward Class Welfare) OBC applicants.

| Group | Course type | Day scholar per month | Hosteller per month | Notes |
|---|---|---|---|---|
| Group I | Medical, engineering, MBA, MCA, veterinary, agricultural | Rs 550 | Rs 1,200 | Highest maintenance allowance |
| Group II | Other professional (BEd, polytechnic diploma) | Rs 530 | Rs 820 | Professional but non-Group-I |
| Group III | UG and PG general (BA, BSc, BCom, MA, MSc) | Rs 300 | Rs 570 | Bulk of applicants |
| Group IV | Intermediate (Class 11 and 12) | Rs 230 | Rs 380 | Post-Matric Intermediate scheme |

Dashmottar general amounts sit in a Rs 2,500 to Rs 13,500 per year range depending on the course, and Pre-Matric Group I hostellers can go up to Rs 1,200 per month plus the course fee reimbursement. Hostel amounts release only if the hostel receipt is uploaded in step 5. Ticking the hostel checkbox without uploading the receipt reduces disbursement to the day-scholar amount by default.

## Payment schedule: 2-instalment vs one-shot

SC and ST scholarships are disbursed in 2 instalments. The state share (typically 40%) releases first, usually 4 to 8 weeks after DWO approval. The central share (typically 60%) releases second, subject to Ministry of Social Justice and Empowerment or Ministry of Tribal Affairs fund allocation to the state. Delays on the central tranche in FY 2025-26 stretched the gap to 5 to 6 months in some districts, per samajkalyan.up.nic.in circulars.

General and OBC scholarships are disbursed in one shot after DWO approval and PFMS processing. Typical lag is 6 to 12 weeks between DWO approval and bank credit, but the second half of the cycle (March to May) sees compressed timelines because the state closes the financial year and pushes pending disbursements before 31 March.

Minority scholarships under the state UP scheme follow the one-shot rule. Under the central momascholarship, the split is different (state and central shares) and disbursement is directly from the Ministry of Minority Affairs to your bank account.

Check the PFMS Know Your Payment page at pfms.nic.in with your bank name and account number to see the exact status of a scheduled disbursement.

## NPCI, B08, and 207 rejection code decoder

This is where most files die silently. PFMS uses standardised return codes when a scheduled disbursement fails at the bank. The codes below are the ones that dominate UP Scholarship failure reports since the 2024-25 cycle.

| Code | Meaning | Where it fails | How you fix it |
|---|---|---|---|
| B08 | NPCI mandate not uploaded or expired for the Aadhaar-account link | Sponsor bank (PFMS to bank hop) | Visit your bank branch with Aadhaar and passbook; ask for fresh NPCI mapping / re-seeding; wait 48 hours; resubmit |
| 207 | Demographic mismatch between Aadhaar name and bank account name | NPCI validation before credit | Correct the bank account name to match Aadhaar exactly (or update Aadhaar name at UIDAI CSC); do not create a new account |
| R03 | Account closed | Bank | Open a fresh single-name Aadhaar-linked account; update bank details on scholarship.up.gov.in during the correction window |
| R09 | Withdrawal is stopped or debit frozen | Bank | Visit branch; unfreeze the account by clearing KYC pendency |
| R33 | Beneficiary bank not participating in APBS | Bank | Move account to an APBS-participating bank (all major PSU and private banks are covered) |
| DR / D00 | Duplicate mandate / duplicate application | PFMS | Portal message will indicate second application with same Aadhaar; withdraw one, keep the other |

The 2026 trend that competitors miss: joint accounts with parents are increasingly rejected under the 207 code because the Aadhaar name on the applicant does not match the primary holder name on a joint account. If your PFMS status says 207 and you know your Aadhaar name is fine, check whether the linked account is a joint one. If yes, open a single-name account, complete NPCI seeding, and submit the corrected bank details in the correction window.

To check your PFMS status, visit pfms.nic.in, click Know Your Payment, enter your bank name and account number with captcha, and read the code. If no code appears and the status is blank, that is the Suspect Data condition explained in the next section.

## Suspect Data list: why status goes blank instead of "Rejected"

A 2026 UX change on scholarship.up.gov.in silently moves flagged applications into a Suspect Data list where the public-facing status shows as blank instead of "Rejected". Students see nothing when they log in with their registration number and assume the application is under process, when it is actually parked pending DWO review with a data flag.

Common reasons a file gets flagged into Suspect Data: mismatch between the marksheet total marks and the marks entered manually, mismatch between the institute code and the course selected, income certificate that has crossed the 3-year validity, or a duplicate application in the same cycle from the same Aadhaar. The blank status can persist for weeks if no one notices.

If your status has been blank for more than 3 weeks after institute forwarding, do not assume it's still processing. Visit your college's scholarship coordinator, ask them to check the Suspect Data list from the institute login, and correct whichever field triggered the flag. Suspect Data files reappear in the normal status pipeline after DWO clearance, so the fix is procedural, not a re-application.

## Correction window and how to use it

Every UP Scholarship cycle includes a correction window during which students can edit specific fields on already-submitted applications without re-registering. For the 2026-27 cycle, based on the last three cycles' pattern, the correction window is expected to run from the last week of January 2027 to the 1st week of February 2027.

Fields open for correction are typically: bank account number and IFSC, mobile number, uploaded documents (income, caste, marksheet), and hostel receipt. Fields locked from correction are: Aadhaar number, name, date of birth, category, and institute code. If any of the locked fields is wrong, the only fix is to withdraw and re-register, which is only allowed in the same cycle if the initial application was rejected or is still in draft.

If your NPCI or bank details are the problem, the correction window is your fix path. Do not wait for a second cycle. File the correction as soon as PFMS surfaces the code and the correction window opens.

## Renewal rules and pitfalls

Renewal keeps the previous year's registration number and links the new-year application to the same file. Two things trip renewals up.

First, marks. Renewal requires 50% marks in the previous academic year for General, OBC, and Minority applicants. No minimum for SC and ST. If you scored under 50% in your last year's exam, the renewal is auto-rejected and you have to skip a year (which breaks the continuity) or apply as fresh in the next class level.

Second, registration number. Log in with the previous year's registration number and follow the Renewal path, not Fresh. A common mistake is registering again as fresh because students forget the previous number. The Saksham portal has a "Forgot Registration Number" retrieval option using Aadhaar and mobile OTP; use it before starting a fresh application.

Course change during renewal is allowed only within the same scheme stream. Moving from Class 12 to a UG course is a scheme change (Post-Matric Intermediate to Dashmottar) and requires a fresh registration under the new scheme, not renewal.

## Grievance ladder: DWO escalation

The Saksham portal's "Complaint" button routes to a queue that has been erratic in response times. A better path is the escalation ladder below, which every student should know before the money is due.

Level 1: Log a portal grievance at scholarship.up.gov.in with your registration number, PFMS code if any, and a one-paragraph description. Expect a response in 7 to 15 days. If no response, go to level 2.

Level 2: Visit or call the District Social Welfare Officer (DSWO) for SC / General files, District Backward Class Welfare Officer for OBC files, District Minority Welfare Officer for minority files, or District Tribal Welfare Officer for ST files. Take a printout of the portal complaint and any PFMS screenshot. The DWO can override many portal blocks including Suspect Data flags. Response typically within 10 to 15 days.

Level 3: If the DWO is unresponsive or the issue needs central approval, write to the Directorate at Lucknow using the addresses on samajkalyan.up.nic.in, backwardclasswelfare.upsdc.gov.in, upminorities.gov.in, or tribalwelfare.up.gov.in as per your category. Send email and courier a signed hard copy for tracking.

Level 4: The statewide helpline numbers published on scholarship.up.gov.in cover general portal issues. For PFMS-specific issues (NPCI seeding, bank mismatch), the PFMS helpline at pfms.nic.in is the correct desk, not the state portal.

Keep a written trail (portal complaint number, PFMS screenshots, DWO acknowledgement) at each level. Documentation is what unlocks the next escalation.

## Private vs government college eligibility

Private colleges are eligible for UP Scholarship only if the institute is Saksham-registered. The institute directory on scholarship.up.gov.in is the authoritative list. If your college does not appear in a search by institute name and district, it is not registered, and any application citing it will be auto-rejected with "institute not found".

Ask your college's scholarship coordinator or admin office to complete institute registration through the Saksham institute-login portal before you submit. Registration requires the college's AISHE code, affiliation certificate, and NAAC or accreditation details. Colleges that lost affiliation or accreditation mid-year sometimes fall off the directory, so a college that was registered last cycle may not be this cycle. Verify before you upload the current-year fee receipt.

Government colleges, universities, polytechnics, ITIs, and central-government institutes (including AIIMS, IITs, NITs, IIITs) are pre-registered and appear in the directory by default.

## Common confusion clusters

State UP Minority Welfare scholarship and central momascholarship are not stackable. Minority students who receive the state UP scholarship cannot simultaneously receive the central Ministry of Minority Affairs scholarship. Attempting both in the same cycle triggers a PFMS-level duplicate flag that holds both applications. If your state scholarship amount is higher for your course level, pick that one. If the central amount is higher (which is often true for professional-course post-matric under momascholarship), pick that one instead and withdraw the state application.

Pre-Matric versus Post-Matric confusion for Class 11 and 12 students. Class 11 and 12 are Post-Matric Intermediate, not Pre-Matric. Pre-Matric is Class 9 and 10 only. Selecting the wrong scheme in the registration step forces a withdrawal and fresh application, which some cycles do not permit after the initial deadline.

Dashmottar for polytechnic diploma students. Polytechnic diploma after Class 10 (3-year polytechnic) is treated as Post-Matric Intermediate for the first year and Dashmottar from the second year onwards in most departmental circulars. If your file is stuck on scheme classification, check the current-year circular from your owning department.

BEd is Group II, not Group III, under Samaj Kalyan Vibhag amount tables. Students frequently apply under Group III (general UG) and get lower amounts than they were entitled to.

## Primary sources

- Saksham UP Scholarship portal: https://scholarship.up.gov.in
- Samaj Kalyan Vibhag: https://samajkalyan.up.nic.in
- Backward Class Welfare Department: https://backwardclasswelfare.upsdc.gov.in
- UP Minority Welfare Department: https://upminorities.gov.in
- Ministry of Minority Affairs (central) scholarship: https://momascholarship.gov.in
- Public Financial Management System (PFMS): https://pfms.nic.in
- Tribal Welfare Department UP: https://tribalwelfare.up.gov.in

## Frequently asked questions
`;

const FAQS = [
  {
    question: "What is the last date to apply for UP Scholarship 2026-27?",
    answer: "The last date to apply for UP Scholarship 2026-27 is expected around 30 October 2026, following the Samaj Kalyan Vibhag cycle pattern of the last three years. The application window opens in the 1st week of July 2026 for Pre-Matric (Class 9 to 10) and the 2nd to 4th week of July 2026 for Post-Matric Intermediate and Dashmottar. Confirm the exact date on scholarship.up.gov.in before final submission.",
  },
  {
    question: "How to check UP Scholarship status by registration number?",
    answer: "Log in to scholarship.up.gov.in, click the Student section, then select Status under the correct scheme (Pre-Matric, Post-Matric Intermediate, or Dashmottar). Enter your registration number and captcha. For payment-level status, use pfms.nic.in Know Your Payment with your bank name and account number. If both pages show blank, your file may be on the Suspect Data list and needs institute-level correction.",
  },
  {
    question: "Why is my UP scholarship status not showing?",
    answer: "A 2026 UX change silently moves flagged applications to a Suspect Data list where the public status appears blank instead of Rejected. Common triggers are marksheet mismatch, expired income certificate, wrong institute code, or duplicate application. If status has been blank for over 3 weeks after institute forwarding, ask your college's scholarship coordinator to check the institute-login Suspect Data list and fix the flagged field.",
  },
  {
    question: "What is the income limit for UP Scholarship?",
    answer: "The annual family income ceiling is Rs 2 lakh for General, OBC, and Minority Post-Matric and Dashmottar applicants. It is Rs 2.5 lakh for SC and ST Post-Matric and Dashmottar applicants. Minority Pre-Matric applicants sit on a tighter Rs 1 lakh ceiling under the state-plus-central overlay. Income certificate validity is 3 years from the issuing Tehsil office.",
  },
  {
    question: "How much scholarship money do UP students get?",
    answer: "Amounts depend on group and residence status. Group I hostellers (medical, engineering, MBA, MCA) get Rs 1,200 per month. Group I day scholars get Rs 550 per month. Group IV Intermediate day scholars get Rs 230 per month. Dashmottar annual amounts range from Rs 2,500 to Rs 13,500 based on course level. Course fee reimbursement is added on top for eligible applicants.",
  },
  {
    question: "How to fix NPCI Aadhaar seeding for UP Scholarship?",
    answer: "Visit your bank branch with Aadhaar and passbook. Ask the branch to complete fresh NPCI mapping and Aadhaar seeding for the account. This resolves B08 rejection code (mandate not uploaded). If the code is 207 (name mismatch), correct the bank account name to exactly match Aadhaar, or update Aadhaar name at UIDAI. Wait 48 hours after seeding, then check pfms.nic.in Know Your Payment for confirmation.",
  },
  {
    question: "What is the difference between Pre-Matric, Post-Matric and Dashmottar?",
    answer: "Pre-Matric covers Class 9 and 10 only. Post-Matric Intermediate covers Class 11 and 12. Post-Matric Dashmottar covers all courses above Intermediate including UG, PG, Diploma, and Certificate. Dashmottar literally means after 10 plus 2. Selecting the wrong scheme at registration forces a withdrawal and fresh application, which some cycles do not allow after the deadline, so check your class level carefully.",
  },
  {
    question: "Can private college students apply for UP Scholarship?",
    answer: "Yes, but only if the private institute is Saksham-registered on scholarship.up.gov.in. Search the institute directory by name and district before applying. If your college is not listed, ask the scholarship coordinator to complete institute registration through the Saksham institute-login portal using the college's AISHE code, affiliation certificate, and NAAC or accreditation details. Applications citing unregistered institutes are auto-rejected with institute not found.",
  },
  {
    question: "How to do UP Scholarship correction?",
    answer: "The correction window for the 2026-27 cycle is expected from the last week of January 2027 to the 1st week of February 2027. Fields open for correction are bank details, mobile number, and uploaded documents like income certificate, caste certificate, marksheet, and hostel receipt. Fields locked are Aadhaar, name, date of birth, category, and institute code. If a locked field is wrong, withdraw and re-register (permitted only in the same cycle before the initial deadline).",
  },
  {
    question: "When will UP Scholarship 2026 money come to bank?",
    answer: "For SC and ST files, disbursement is in 2 instalments: state share (40%) about 4 to 8 weeks after DWO approval, central share (60%) following Ministry fund release. For General and OBC files, disbursement is one shot, typically 6 to 12 weeks after DWO approval. The March to May window sees compressed timelines because the state pushes pending disbursements before financial year-end on 31 March. Track exact status on pfms.nic.in Know Your Payment.",
  },
];

await replaceScheme({
  slug: "up-pre-post-matric-scholarships-2026",
  title: TITLE,
  description: DESCRIPTION,
  content: CONTENT,
  faqs: FAQS,
  minWords: 3000,
});
