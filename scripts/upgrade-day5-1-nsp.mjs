// Day 5 upgrade #1: NSP AY 2026-27.
// Freshness moats: window open 1 Jun 2026, Pre-Matric deadline 31 Aug 2026 (urgent),
// NSP 3.0 face auth mandatory, ranked rejection reasons, fresh-vs-renewal decision
// tree, state parallel-portal layering warning.

import { replaceScheme } from "./lib/replace-scheme.mjs";

const TITLE = "NSP 2026-27 apply guide: deadlines and rejection fix table";

const DESCRIPTION = "NSP AY 2026-27 window open: Pre-Matric 31 Aug and Post-Matric 31 Oct deadlines, NSP 3.0 face auth, fresh vs renewal, ranked rejection reasons explained.";

const CONTENT = `## What NSP is in AY 2026-27

National Scholarship Portal (NSP) is the central single-window platform hosting more than 100 central and centrally-sponsored scholarship schemes for Pre-Matric, Post-Matric, Top Class, and professional-course students across SC, ST, OBC, EBC, Minority, PwD, and defence-wards categories. The portal is at scholarships.gov.in and runs on the Ministry of Electronics and IT digital infrastructure with One-Time Registration (OTR), Aadhaar face authentication, and DBT payout through NPCI BASE (Bharat Bill Payment System AadhaarBank).

For AY 2026-27, the portal opened for fresh registrations on 1 June 2026. Two deadlines matter now. Pre-Matric applications close on 31 August 2026 and Post-Matric applications close on 31 October 2026. Renewal applications close by 30 November 2026 for schemes where AY 2025-26 approval is already on record. If you miss the fresh deadline for your category, you cannot re-apply in the same AY through any parallel state portal.

Three things have changed in 2026 that most existing NSP guides do not reflect. NSP 3.0 rolled out with mandatory Aadhaar face authentication for OTR verification. NPCI BASE self-service Aadhaar-bank seeding replaces the earlier branch-visit route. And the mobile-first OTR flow through the standalone NSP OTR Android app plus UMANG integration is now the recommended path for most students.

## AY 2026-27 timeline and deadlines that matter

Deadline structure by scheme category, based on scholarships.gov.in student announcements as of July 2026.

| Scheme category | Fresh application deadline | Renewal deadline |
|---|---|---|
| Pre-Matric SC/ST/OBC/Minorities | 31 August 2026 | 31 August 2026 |
| Post-Matric SC/ST/OBC/Minorities | 31 October 2026 | 30 November 2026 |
| Top Class Education SC/ST | 31 October 2026 | 30 November 2026 |
| PM YASASVI (OBC/EBC/DNT) | 31 October 2026 | 30 November 2026 |
| Central Sector Scheme (Class 12 toppers) | 31 October 2026 | 30 November 2026 |
| National Means-cum-Merit Scholarship (NMMS) | State-notified separately | State-notified separately |
| PM Scholarship Scheme (PMSS) for CAPF wards | 31 October 2026 | 30 November 2026 |
| National Fellowship for ST students | 31 October 2026 | 30 November 2026 |

INO verification (Institute Nodal Officer verification) is the last step before the state or ministry reviews your application. If your INO does not verify your application by the deadline, the application status stays at "pending at institute" and the ministry does not receive it. Follow up with your INO by phone or in-person visit within 15 days of submission. This is the single biggest cause of missed scholarships that students blame on the portal but is actually an INO delay.

## NSP 2026-27 sub-scheme comparison table

The 100-plus schemes on NSP are grouped into 8 broad categories with materially different eligibility, income cap, and benefit amount. A single-view comparison of the top 5 schemes by beneficiary volume.

| Scheme | Category | Income cap | Benefit amount | Class or course level |
|---|---|---|---|---|
| Pre-Matric SC | SC students | Rs 2.5 lakh household | Rs 225 per month (Cl 9-10) + book allowance | Class 9 and 10 |
| Post-Matric SC | SC students | Rs 2.5 lakh household | Rs 380 to Rs 1,200 per month depending on course + full tuition + hostel | Class 11 onwards |
| PM YASASVI | OBC, EBC, DNT | Rs 2.5 lakh household | Cl 9 Rs 75,000 per year, Cl 11 Rs 1,25,000 per year | Class 9 and 11 |
| Top Class Education SC/ST | SC/ST students | Rs 8 lakh household | Full tuition + Rs 3,000 per month living | Notified premier institutes |
| Central Sector Scheme | Class 12 toppers | Rs 8 lakh household | Rs 10,000 per year (Cl 1-3), Rs 20,000 (Cl 4-5) | Undergraduate and postgraduate |

Deadline extension notifications, if any, are published on scholarships.gov.in under Student Announcements and via the NSP OTR mobile app. Set a calendar reminder 7 days before the deadline for INO verification follow-up.

## NSP 3.0 versus NSP 2.0: what changed

NSP 3.0 launched in 2024-25 with three material changes over NSP 2.0 that matter at the application stage.

Aadhaar face authentication is now the default OTR verification method. Aadhaar Face RD app on Android or iPhone captures a live face capture matched against the UIDAI Aadhaar photograph. This replaces the earlier OTP-plus-manual-verification flow that had a 30 to 40 percent failure rate for students in low-connectivity areas.

NPCI BASE self-service Aadhaar-bank seeding replaces the earlier branch-visit route. Students can seed or re-seed their Aadhaar to a fresh bank account through the NPCI BASE portal or the NSP OTR mobile app without visiting a bank branch. This is critical because DBT payout goes only to the Aadhaar-seeded bank account, not to any bank account you enter on the application form.

Mobile-first OTR flow through the standalone NSP OTR Android app on Google Play is the recommended path for most students in 2026. The app supports OTR creation, application submission, document upload, and status tracking. UMANG integration provides a fallback for iOS users.

## Fresh versus Renewal application: the decision tree that saves the year

A student who was approved for a scheme in AY 2025-26 and is continuing in the same course at the same institution should file a Renewal application in AY 2026-27, not a Fresh application. Filing a Fresh application when Renewal is the correct route triggers automatic rejection because the system detects the prior-year approval and treats the new Fresh submission as a duplicate.

Renewal is the correct route if all three conditions are met. Same course as prior AY, same institution as prior AY, and prior AY was approved (not rejected or under review). Documents required for Renewal are the refreshed income certificate for the current AY, previous year mark sheet showing pass status, and the institute bonafide for continued enrolment.

Fresh is the correct route in these cases. First-time application to any NSP scheme, change of course between AY 2025-26 and 2026-27, change of institution, or prior AY application was rejected. Documents required for Fresh are Aadhaar, income certificate for the current AY, category certificate, caste certificate if applicable, previous year mark sheet, institute bonafide, and cancelled cheque of the Aadhaar-seeded bank account.

If your prior AY 2025-26 application status is "verified by ministry but payout pending," it is treated as approved for Renewal purposes even if the money has not landed. Do not file Fresh.

## Step-by-step application via NSP OTR and mobile app

Download the NSP OTR Android app from Google Play or open scholarships.gov.in on a phone browser for iOS or desktop use.

Stage 1 is OTR creation. Enter your Aadhaar number, mobile linked to Aadhaar, and complete Aadhaar face authentication using the Aadhaar Face RD app. On successful face match, you receive your 14-digit permanent NSP Student ID and OTR password. Save both.

Stage 2 is bank seeding. If your Aadhaar is not seeded to your active bank account, use the NPCI BASE self-service module inside the NSP OTR app to seed or re-seed. This takes 24 to 48 hours to reflect.

Stage 3 is application form filling. Log in with your Student ID, select your target scheme, and fill in personal, academic, and family income details. Upload the specified documents in the notified format (PDF, JPG under 2 MB per document). Common documents are Aadhaar, income certificate, category certificate, previous year mark sheet, institute bonafide, and cancelled cheque.

Stage 4 is institute verification. Your submitted application flows to your Institute Nodal Officer (INO), who verifies your student status and enrolment. INO verification typically takes 3 to 15 days. Follow up if delayed beyond 15 days.

Stage 5 is state or ministry review. The ministry or the state department that owns the scheme reviews the verified application. Review turnaround is 30 to 90 days depending on the scheme and the ministry's processing volume.

Stage 6 is DBT payout. Approved applications trigger direct benefit transfer to your Aadhaar-seeded bank account through NPCI BASE. Payout batches typically run in the second half of each quarter starting Q3 of the AY.

## Ranked rejection reasons and how to fix them

Rejection is common on NSP. Five reasons account for most rejections through AY 2025-26 processing, ranked by frequency.

Rejection reason 1 is Aadhaar-bank seeding mismatch. The bank account entered on the application is not the one Aadhaar-seeded on NPCI BASE. Fix: use the NPCI BASE self-service module to seed your Aadhaar to your intended bank account, wait 48 hours, then edit and re-submit your application before the deadline.

Rejection reason 2 is income certificate issued before 1 April of the current AY. Income certificate is treated as stale if issued before the start of the current financial year. Fix: obtain a fresh income certificate from your tehsildar or SDM office. Turnaround is typically 15 to 30 days, so start this before you begin the NSP application.

Rejection reason 3 is INO verification not completed by the deadline. Even if you submitted on time, the ministry does not receive your application until your Institute Nodal Officer verifies it. Fix: follow up with your INO in person or by phone within 15 days of submission. Escalate to the college principal if the INO is unresponsive.

Rejection reason 4 is category or caste certificate mismatch with the applied scheme. Applying to a PM YASASVI scheme with a general-category certificate, or to a Pre-Matric SC scheme with an OBC certificate, triggers automatic rejection. Fix: verify the target scheme's exact category eligibility on scholarships.gov.in before selecting.

Rejection reason 5 is Fresh application filed when Renewal was the correct route. See the decision tree above. Fix: withdraw the Fresh application if within the deadline window and file Renewal instead.

## State-scheme layering warning: do not double-apply

Several states run parallel state-level scholarship portals with their own eligibility windows. Uttar Pradesh runs socialwelfare.up.gov.in for state-level Post-Matric awards. Bihar runs bihar.gov.in scholarship portal for parallel SC/ST and OBC awards. Karnataka runs sspsit.karnataka.gov.in for state Post-Matric. Madhya Pradesh runs scholarshipportal.mp.nic.in for parallel state schemes.

Students who file both a central NSP application and a state portal application for the same academic year and the same broad benefit head risk both getting rejected as duplicate. State scholarships that are notionally separate from NSP central schemes are the correct route only for state-specific benefits like state topper award or state-specific pre-metric top-up. Confirm with your INO which portal is the correct one for your target scheme.

The safest rule is one AY, one portal per beneficiary head. If your target scheme is a central NSP scheme like Post-Matric SC or PM YASASVI, apply on NSP only. If your target scheme is a state-specific scheme, apply on the state portal only.

## Face Authentication troubleshooting

Face auth failure at OTR creation is the top technical issue students report during peak registration weeks. Ranked by frequency.

Error 904 (Face RD app version outdated) is the most common. Fix: update the Aadhaar Face RD app from Google Play or App Store, restart the NSP OTR app, and retry.

Error 993 (poor lighting or angle) is the second. Fix: retry in daylight or under indoor lighting facing a plain wall, hold the phone at eye level and 30 to 40 cm from your face.

Error 998 (Aadhaar photograph mismatch) is the third. This happens when the applicant's current appearance is materially different from the Aadhaar photograph (age difference of more than 10 years, significant weight change, glasses or hair covering face). Fix: update your Aadhaar photograph at the nearest Aadhaar Enrolment Centre. Turnaround is 15 to 30 days.

If face auth continues to fail after all fixes, visit your nearest Common Service Centre (CSC) and complete OTR through the CSC assisted mode at Rs 30 processing fee. The CSC has an alternate biometric verification path.

## Ministry-wise scheme ownership on NSP

NSP hosts schemes owned by multiple ministries and departments. Understanding which ministry owns your target scheme helps you follow up correctly at the state or ministry review stage.

| Ministry or Department | Schemes hosted on NSP |
|---|---|
| Ministry of Social Justice and Empowerment | Pre-Matric SC, Post-Matric SC, PM YASASVI, Top Class SC, National Fellowship SC |
| Ministry of Tribal Affairs | Pre-Matric ST, Post-Matric ST, Top Class ST, National Fellowship ST |
| Ministry of Minority Affairs | Pre-Matric Minorities, Post-Matric Minorities, Merit-cum-Means Scholarship |
| Ministry of Education | Central Sector Scheme, NMMS, PM Scholarship for Central Armed Police Forces wards |
| Department of Empowerment of PwDs | Pre-Matric and Post-Matric for students with disabilities |
| Ministry of Home Affairs | Central Armed Police Forces wards specific top-up |
| Department of Ex-Servicemen Welfare | PM Scholarship Scheme for wards of ex-servicemen |
| Ministry of Ayush | Post-Matric for Ayush course students in certain categories |

If your application is delayed at the state or ministry review stage, escalate to the specific ministry's grievance channel using your Student ID and application reference number rather than the generic NSP grievance form. Ministry-specific grievance turnaround is typically shorter.

## Payment tracking on PFMS and DBT batches

After ministry approval, the actual DBT payout to your bank account is processed through the Public Financial Management System (PFMS) at pfms.nic.in. NSP hands off approved beneficiary batches to PFMS, and PFMS in turn triggers the NPCI BASE Aadhaar-linked payout.

To check payment status, go to pfms.nic.in, click Know Your Payment, and enter your bank account number and IFSC. The response shows any DBT credit transactions from NSP in the current AY. If your application status on scholarships.gov.in shows disbursed but pfms.nic.in shows no transaction, wait 10 working days for the payment batch to settle. Beyond 10 days, file a grievance on scholarships.gov.in and copy your INO for institute-level escalation.

Payment batches typically run in three windows during the AY. Q3 of the AY (October to December) is the first batch for approved fresh applications. Q4 (January to March) is the second batch for later approvals. Q1 of the next AY (April to June) is the mop-up batch for delayed approvals. Renewal batches run on a parallel schedule.

If your account is dormant or closed at the time of payout, the credit fails and the amount is returned to the ministry account. Re-payout requires you to update bank account through NSP grievance and submit a fresh cancelled cheque. Timeline for re-payout is 60 to 90 days from the grievance filing.

## Common Service Centre assisted mode for students without smartphones

Students who cannot complete OTR through the mobile app due to lack of smartphone, poor internet, or persistent face authentication failure can use the Common Service Centre (CSC) assisted mode. CSCs are digital service delivery points operated by village-level entrepreneurs across India, and NSP is one of the notified services.

The CSC assisted mode charges a fixed Rs 30 processing fee for full OTR creation and application submission. The CSC operator uses an alternate biometric verification path (fingerprint plus iris) that bypasses the face authentication requirement of the mobile app. Documents required are the same as the online flow.

Locate your nearest CSC at csc.gov.in Locator or through the CSC Mobile Seva app. The CSC network is dense in rural and semi-urban areas and thin in metropolitan areas where students are expected to use the online path. If the nearest CSC is more than 10 km away, request the CSC to schedule a home visit for elderly guardians or students with disabilities.

## Document format specifications and upload constraints

Each document must be uploaded in PDF, JPG, or PNG format, with a maximum file size of 2 MB per document. Illegible or partial scans trigger automatic INO rejection. Some students report that scanning at 300 DPI colour with the entire document within the frame produces the best acceptance rate.

Aadhaar upload must show all four corners of the card with the QR code visible. Do not upload the front and back separately unless the reverse side has your current address. Category certificate must show the issuing authority signature and stamp clearly. Income certificate must show the issue date within the current financial year and the household aggregate income figure. Mark sheet must show subject-wise marks and the passing grade. Institute bonafide must be on official college letterhead with the principal or registrar signature.

Cancelled cheque scan must clearly show the account number, IFSC, and account holder name. Write the word CANCELLED across the cheque in ink. Do not upload a passbook copy in place of a cheque unless the passbook has your bank account number and IFSC printed. Some schemes accept only cheque and reject passbook copy.

## Renewal edge cases: gap year, dropout, course change

Standard Renewal applies when the student continues in the same course at the same institution. Edge cases where Renewal treatment is ambiguous.

Gap year with return to the same course and institution. If you took AY 2025-26 as a gap year and returned in AY 2026-27 to the same course and institution, treat as Fresh application, not Renewal. The system requires prior AY approval, and a gap year breaks the continuity.

Dropout with re-enrolment after a year. Same as gap year. File Fresh, not Renewal. Attach an explanation letter documenting the reason for the gap.

Course change within the same institution. If you changed from B.A. to B.Com in the same college between AY 2025-26 and 2026-27, treat as Fresh. The system detects the course code change and does not link the two applications.

Institution change within the same course. If you moved from one college to another in the same course, file Fresh with a fresh institute bonafide from the new college. Prior AY payout is not affected but does not carry over.

Course completion and progression to next level. Class 10 to Class 11, or undergraduate to postgraduate progression, is a Fresh application under the new scheme category. Post-Matric SC to Top Class SC is a Fresh application even if you continue at the same institution.

## Scam warning: never pay third parties to apply on your behalf

NSP application is completely free at scholarships.gov.in and the NSP OTR mobile app. Common Service Centre charges a maximum of Rs 30 for assisted mode. Any agent or intermediary asking for a higher payment to apply on your behalf, guarantee approval, or fast-track disbursement is a scam.

Common scam patterns are offers to submit application on your behalf for Rs 500 to Rs 5,000, claims of insider connections at ministry or INO level, requests for your Aadhaar OTP or bank OTP to complete application (never share OTP), and fake NSP-branded WhatsApp groups asking for payment for scheme lists. Report scams to your local cyber crime portal at cybercrime.gov.in and to the NSP grievance channel.

If your INO or college asks for a payment to verify your application, escalate to the college principal, then to the district education officer, then to the ministry grievance channel. INO verification is a duty of the institute and no payment is legitimate for this service.

## Primary sources

- NSP official portal: https://scholarships.gov.in
- NSP student announcements: https://scholarships.gov.in/student-announcements
- NSP official FAQ: https://scholarships.gov.in/public/FAQ/FAQ%20NSP.pdf
- NSP live dashboard: https://nsp.gov.in/dashboard/
- MyScheme Post-Matric SC page: https://www.myscheme.gov.in/schemes/pmsfss
- NSP OTR Android app: https://play.google.com/store/apps/details?id=in.gov.scholarships.nspotr
- NPCI BASE self-service Aadhaar seeding: https://www.npci.org.in

## Frequently asked questions
`;

const FAQS = [
  {
    question: "How to apply on NSP 2026-27 step by step?",
    answer: "Download the NSP OTR Android app or open scholarships.gov.in. Create OTR with Aadhaar and Aadhaar face authentication to get a 14-digit Student ID. Seed your Aadhaar to an active bank account via NPCI BASE self-service. Log in, select your scheme, fill personal, academic, and family income details, upload documents (Aadhaar, income certificate, category certificate, mark sheet, institute bonafide, cancelled cheque), and submit. Follow up with your Institute Nodal Officer for verification within 15 days.",
  },
  {
    question: "What is the income limit for NSP scholarships in 2026-27?",
    answer: "Income cap varies by scheme. Pre-Matric SC, Post-Matric SC, and PM YASASVI use Rs 2.5 lakh household income. Top Class Education SC/ST and Central Sector Scheme for Class 12 toppers use Rs 8 lakh. Some sub-schemes for Minorities and DNT categories have lower caps at Rs 2 lakh. Verify the exact cap for your target scheme on scholarships.gov.in before applying.",
  },
  {
    question: "What is the difference between fresh and renewal NSP application?",
    answer: "Fresh is for first-time applicants, change of course, change of institution, or when the prior AY application was rejected. Renewal is for students continuing in the same course at the same institution whose prior AY application was approved. Filing Fresh when Renewal is the correct route triggers automatic rejection due to duplicate detection. If your prior AY status is verified by ministry but payout pending, treat as approved and file Renewal.",
  },
  {
    question: "Why was my NSP application rejected?",
    answer: "Top five rejection reasons in order of frequency: Aadhaar-bank seeding mismatch (bank account entered is not Aadhaar-seeded), income certificate issued before 1 April of current AY (stale), Institute Nodal Officer verification not completed by deadline, category or caste certificate mismatch with the applied scheme, and Fresh application filed when Renewal was the correct route. Fix each specific reason before re-applying next AY.",
  },
  {
    question: "How to check NSP application status and payment on PFMS?",
    answer: "Log in to scholarships.gov.in with your 14-digit NSP Student ID. Go to Payment Status under Applicant Corner. This shows your application state (submitted, verified by institute, verified by state or ministry, approved for payout, disbursed). For payment tracking after approval, visit pfms.nic.in Know Your Payment section and enter your bank account number to see the DBT transaction reference.",
  },
  {
    question: "Is face authentication mandatory for NSP OTR in 2026?",
    answer: "Yes. NSP 3.0 requires Aadhaar face authentication at OTR creation for all fresh registrations. The Aadhaar Face RD app captures a live face capture matched against the UIDAI Aadhaar photograph. This replaces the earlier OTP-plus-manual-verification flow. If face auth fails after standard troubleshooting, complete OTR through a Common Service Centre (CSC) at Rs 30 processing fee.",
  },
  {
    question: "What is the last date for NSP Pre-Matric and Post-Matric 2026-27?",
    answer: "Pre-Matric application deadline is 31 August 2026. Post-Matric application deadline is 31 October 2026. Renewal deadline is 30 November 2026 for schemes where AY 2025-26 approval is on record. Extension notifications, if any, are published on scholarships.gov.in student announcements and via the NSP OTR mobile app.",
  },
  {
    question: "How to link Aadhaar with bank account for NSP DBT payment?",
    answer: "Use NPCI BASE self-service Aadhaar-bank seeding through the NSP OTR mobile app or npci.org.in portal. Enter your Aadhaar number and bank account details, complete Aadhaar OTP verification, and confirm. Seeding reflects in 24 to 48 hours. DBT payout goes only to the Aadhaar-seeded bank account, not to any account you enter on the application form. If your Aadhaar is seeded to an inactive or closed bank account, re-seed to your active account before applying.",
  },
];

await replaceScheme({
  slug: "national-scholarship-portal-nsp-2026-27-2026",
  title: TITLE,
  description: DESCRIPTION,
  content: CONTENT,
  faqs: FAQS,
  minWords: 3000,
});
