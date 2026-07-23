// Day 6 addition #12: Madhya Pradesh ration card 2026 state page.
// Freshness moat: Samagra ID (8-digit Parivar ID + 9-digit Member ID) is a
// hard prerequisite for any m-Ration Mitra operation. Cannot apply, check
// status, download, or correct a ration card without a Samagra ID first
// enrolled on samagra.gov.in. Also cross-links to Ladli Behna Yojana 35th
// installment disbursed 12 April 2026 (Rs 1,836 crore to 1.25 crore women)
// since both databases share the same Samagra family record.

import { createScheme } from "./lib/create-scheme.mjs";

const SLUG = "ration-card-madhya-pradesh-2026";

const TITLE = "MP Ration Card 2026: Samagra ID apply, status, download";

const DESCRIPTION = "Madhya Pradesh ration card 2026: Samagra ID hard prerequisite, BPL Rs 10,000/year cap, rationmitra.nic.in apply flow, status check and e-ration download.";

const CONTENT = `## Madhya Pradesh ration card 2026 at a glance

Madhya Pradesh ration cards are issued by the Department of Food, Civil Supplies and Consumer Protection, Government of Madhya Pradesh, through the m-Ration Mitra portal at rationmitra.nic.in. Every household service on this portal (apply, status, download, add member, correction) is hard-gated behind the Samagra ID, which is the state's unified family database run separately at samagra.gov.in. If you do not have a Samagra ID, you cannot start any ration card operation in Madhya Pradesh in 2026.

The state runs three ration card categories under its own nomenclature: BPL (Below Poverty Line, priority household under NFSA), APL (Above Poverty Line, non-priority under NFSA), and AAY (Antyodaya Anna Yojana, poorest of the poor). The BPL income ceiling in Madhya Pradesh is Rs 10,000 per year, one of the lowest state thresholds in India, which sets a tight priority slab compared to Uttar Pradesh (Rs 2 lakh rural, Rs 3 lakh urban) or Delhi (Rs 2.50 lakh per year raised on 13 July 2026).

Under the Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY), extended by the Union Cabinet on 29 November 2023 through 31 December 2028 with a Rs 11.80 lakh crore outlay, every BPL and PHH member in Madhya Pradesh draws 5 kg of grain per person per month free of cost. AAY households draw 35 kg of grain per household per month free. The grain mix is state-notified wheat and rice, with fortified rice (iron, folic acid, vitamin B12) rolled out across MP as part of the Rs 17,082 crore Cabinet allocation of 9 October 2024.

Two state helplines matter. 181 is the CM helpline, useful for grievance escalation on stalled applications. 1967 is the all-India food and PDS helpline that works inside Madhya Pradesh for FPS-level complaints.

This guide walks through Samagra ID enrolment first (because nothing else works without it), then covers the full m-Ration Mitra flow including apply, status, download via three routes, add or remove members, corrections, and grievance escalation. It closes with a cross-link to Ladli Behna Yojana, which shares the same Samagra family record and disbursed its 35th installment worth Rs 1,836 crore on 12 April 2026 to 1.25 crore women beneficiaries.

## Samagra ID: the hard prerequisite you need before any MP ration card operation

Samagra is the Madhya Pradesh state government's unified beneficiary database, launched by the Department of Women and Child Development in 2012 and now run as the single source of identity for every state welfare programme including ration cards, Ladli Behna Yojana, pension schemes, scholarships, and PDS entitlements. Every family in MP is assigned an 8-digit Parivar ID (family identifier), and every member of that family is assigned a 9-digit Member ID (individual identifier). Both IDs are mandatory to open any service on rationmitra.nic.in in 2026.

If you do not have a Samagra ID, enrol first at samagra.gov.in before touching the ration portal. The enrolment flow is free and takes 15 to 30 days for verification. Open samagra.gov.in, click "Register Family" on the home page, enter the head of family's Aadhaar and mobile number, verify OTP, fill the family composition form (add every member with name, date of birth, relationship to head of family, Aadhaar), upload one address proof (voter ID, electricity bill, or rent agreement), and submit. The gram panchayat secretary (rural) or the ward office (urban) verifies the family composition at the ground level. On approval, the 8-digit Parivar ID and 9-digit Member IDs are issued and printed as a family Samagra ID card.

Existing families can search for their Samagra ID at samagra.gov.in without re-enrolling. Click "Know Your Samagra ID" on the home page, enter the head of family's name, district, block, and gram panchayat or ward, and the system returns the Parivar ID and every Member ID linked to it. If your family was ever a beneficiary of any MP state scheme (school scholarship, pension, PMAY-G, MMKSY, Ladli Behna), you already have a Samagra ID and only need to look it up.

Aadhaar seeding is the third step. Every Member ID must be Aadhaar-seeded on the Samagra portal before it can be used for ration card operations. Log into samagra.gov.in with the Parivar ID and mobile OTP, go to Aadhaar Seeding, enter each member's Aadhaar number, verify OTP or biometric, and submit. Seeding is verified overnight and reflects on the ration portal within 24 hours.

Only after the Parivar ID is issued and every Member ID is Aadhaar-seeded can you proceed to rationmitra.nic.in for any ration card operation. Skipping this step is the single most common reason ration card applications in Madhya Pradesh fail at the first submission.

## Who is eligible for an MP ration card in 2026

Eligibility for a Madhya Pradesh ration card follows the state's own three-category system layered on top of the NFSA 2013 priority framework, with income limits and criteria that are stricter than most other large states.

BPL (Below Poverty Line) is the state's Priority Household equivalent. The income ceiling is Rs 10,000 per year for the household, which is the state slab and one of India's lowest thresholds. Any family with combined annual income below this line qualifies for BPL, subject to the state's exclusion criteria (no income tax filer, no four-wheeler passenger vehicle in an adult member's name, no permanent government job in the household above Group C).

APL (Above Poverty Line) is the state's Non-Priority Household equivalent. Any household with annual income above Rs 10,000 falls into APL by default. APL cards do not get free PMGKAY grain but remain on the state PDS database and can access non-food PDS services like kerosene distribution where available.

AAY (Antyodaya Anna Yojana) is the poorest-of-poor slab. Eligibility is criteria-based rather than income-only, and covers families with no stable income source, elderly above 60 with no support, widowed heads of household with no earning member, disabled with no earning member, tribal households in scheduled areas, and destitute families identified by the gram panchayat or ward office. AAY households draw 35 kg of grain per household per month regardless of family size.

Exclusion criteria apply across all three categories and cause automatic rejection. A household is ineligible if any adult member has filed an income tax return in the last 3 years, owns a four-wheeler passenger vehicle registered in their name, holds a permanent government job above Group C (Class-3), owns more than 5 acres of irrigated agricultural land, or already holds a ration card in another state (ONORC deduplication catches this).

Nationality is Indian citizen only, and permanent residence in Madhya Pradesh is required. Aadhaar e-KYC of every listed member above age 5 is mandatory as of 2026, with three narrow exemptions: children under 5, elderly with biometric failure (iris or OTP fallback on the ePoS), and state-notified vulnerable groups.

## Types of ration cards offered by MP

Madhya Pradesh runs three ration card categories under state nomenclature, and each one maps to a specific NFSA slab on the central side. Knowing the mapping is important because state-level benefit quanta differ from central-level PMGKAY quanta.

BPL under MP state nomenclature maps to Priority Household (PHH) under NFSA. The card draws 5 kg of grain per person per month at Rs 1 to Rs 3 per kg for the state-paid portion, and the central 5 kg is free under PMGKAY. Net effect: every BPL member gets 5 kg of grain per month at zero cost via the combined PMGKAY plus state overlay. Card colour on the physical card varies by district printing but the state-issued PDF from rationmitra.nic.in is standard.

APL under MP state nomenclature maps to Non-Priority Household (NPHH) under NFSA. The card is not entitled to PMGKAY free grain and does not draw subsidised grain under the state PDS overlay. APL cardholders can still use the card as identity proof, access kerosene distribution where the state runs one, and move up to BPL if the household income falls below the Rs 10,000 per year threshold.

AAY under MP state nomenclature is the same as AAY under NFSA. The card draws 35 kg of grain per household per month at Rs 1 to Rs 3 per kg on the state-paid portion, with the central PMGKAY covering the free component. Net effect: every AAY household gets 35 kg of grain per month at zero cost. AAY cards are colour-marked distinctly at the FPS ePoS to trigger the correct entitlement.

State-specific overlays layer on top of the base card. Ladli Behna Yojana beneficiaries (women in the age band 21 to 60 from BPL and eligible APL households) get Rs 1,250 to Rs 1,500 per month direct benefit transfer, riding on the same Samagra Member ID that the ration card uses. Mahtari Vandana style overlays run in neighbouring Chhattisgarh but not in MP directly. Kerosene distribution runs in a few blocks and is being phased out under the Ujjwala LPG substitution.

Pick the category that matches your household situation. AAY is criteria-locked and applying for AAY when you qualify only for BPL slows the file. If you are not sure, apply for BPL and let the gram panchayat or ward office upgrade you to AAY during the field verification if you meet the criteria.

## Documents required for a new MP ration card

The documentation stack for a Madhya Pradesh ration card has four layers, and the Samagra ID layer at the base is what makes MP different from every other state.

Samagra ID base layer. The 8-digit Parivar ID and the 9-digit Member ID for every household member. If you do not have these, stop and enrol at samagra.gov.in first. Aadhaar seeding of every Member ID is also required and can be done on the same portal.

Identity and address proofs. Aadhaar card of every household member (mandatory e-KYC above age 5). One address proof from voter ID, electricity bill, rent agreement, or municipal water bill. Passport-size family group photograph with every member visible. If the head of family does not have a voter ID or electricity connection in their name, a landlord's affidavit is accepted in most districts.

Income and eligibility proofs. Family annual income certificate from the tehsildar (Rs 50 fee, 15 to 30 days processing). If applying for AAY, add the applicable criteria proof: widow certificate (from the SDM), disability certificate (from the district disability certification board), senior citizen ID (from the tehsildar), or gram panchayat destitute-family certificate. Caste certificate if applying under a reserved AAY quota.

Bank and mobile linkage. Bank account number and IFSC (any nationalised or scheduled commercial bank in the head of family's name). Mobile number Aadhaar-seeded on the NPCI mapper for DBT-enabled schemes that ride on the Samagra Member ID (Ladli Behna, PM-KISAN, pension schemes). If the head of family does not have a bank account, open a zero-balance Jan Dhan account first at any nationalised bank branch and then apply.

Aadhaar e-KYC of every listed member above age 5 is mandatory statewide, and MP has been running the e-KYC drive through 2025 and 2026 via ePoS-equipped FPS. Take the family Aadhaars to the FPS during working hours, ask the dealer to run e-KYC on the ePoS device, and the household is reactivated within 48 hours. E-KYC is free of cost at every FPS in MP.

## How to apply for an MP ration card on rationmitra.nic.in step by step

The Madhya Pradesh apply flow on m-Ration Mitra is Samagra-first, and the eight steps below are the exact sequence that works in 2026. Missing the Samagra step is the number-one rejection cause.

Step 1: enrol on samagra.gov.in (if not already done). Go to samagra.gov.in, click Register Family, enter the head of family's Aadhaar and mobile, verify OTP, add every member with name, DOB, and Aadhaar, upload one address proof, and submit. Wait 15 to 30 days for gram panchayat or ward verification and issuance of the 8-digit Parivar ID and 9-digit Member IDs.

Step 2: Aadhaar-seed every Member ID on samagra.gov.in. Log in with Parivar ID and mobile OTP, go to Aadhaar Seeding, enter each member's Aadhaar, verify OTP, submit. Seeding reflects on rationmitra.nic.in within 24 hours.

Step 3: open rationmitra.nic.in in a browser (Chrome or Firefox recommended, avoid Internet Explorer). Click "New Ration Card Application" on the home page. The portal will ask for the Parivar ID before showing any form.

Step 4: enter the 8-digit Parivar ID and verify with the head of family's mobile OTP. The portal auto-populates the family composition from the Samagra database, including every Member ID, name, DOB, and relationship. Verify that the composition is correct. If a member is missing, go back to samagra.gov.in and add them there first.

Step 5: select the ration card category (BPL, APL, or AAY) based on your household income and eligibility. The portal shows the income cap for each category as a reference. Fill the additional application details: fair price shop preference (nearest FPS in your ward or village), address confirmation, and bank account for DBT-linked services.

Step 6: upload the supporting documents in the specified formats (PDF or JPG, under 2 MB each). Income certificate, address proof, family group photograph, AAY criteria proof if applicable, caste certificate if applicable, and bank passbook first page. Every upload must be legible and the file name should match the document type.

Step 7: submit the application. The portal generates a 10-digit acknowledgment number. Save this number (or take a screenshot) because you will need it for status checks and grievance escalation. There is no application fee for a fresh MP ration card; ignore anyone charging for this.

Step 8: wait for verification. The application goes to the local Food Inspector for document verification (7 to 15 days), then to the gram panchayat secretary or ward office for field verification (10 to 20 days), then back to the District Supply Officer for final approval (5 to 10 days). Total processing runs 30 to 45 days under normal load. Once approved, the ration card is issued digitally and can be downloaded from the portal.

## How to check MP ration card status on m-Ration Mitra

Status checks on rationmitra.nic.in support two pathways, both Samagra-gated like every other operation on the portal.

By application acknowledgment number. Open rationmitra.nic.in, click "Check Application Status" on the home page, enter the 10-digit acknowledgment number you received on submission, and view the current status (Received, Document Verification Pending, Field Verification Pending, Approved, Rejected, or Ration Card Issued). Also shown are the office where the file is currently sitting, the officer name if available, and the expected next-step date.

By Samagra ID. Log into rationmitra.nic.in with the 8-digit Parivar ID and mobile OTP, go to "My Applications" on the dashboard, and view every application filed by the family in the last 5 years with current status. This pathway also shows the family's active ration card if one has been issued, and the last three PDS transactions.

If the status shows "Rejected" or "Returned for Correction", click into the entry to see the specific reason (missing document, mismatched Aadhaar name, ineligible income, family not verified on Samagra), and follow the resubmission link. Corrections do not require a fresh application; the same acknowledgment number is reused.

For applications that have been stuck beyond 45 days without a status change, escalate through the grievance route: portal grievance (30-day statutory timeline under NFSA Section 14), then District Supply Officer, then State Food Commission. Also file a parallel complaint on the CM helpline 181 with the acknowledgment number quoted, which often unblocks stalled files within 15 days.

## How to download your MP e-ration card via rationmitra.nic.in, Mera Ration 2.0 and DigiLocker

The MP e-ration card is a legally issued document and is accepted at every FPS across MP and India (through ONORC). Three download routes work in 2026, and all three are free.

Rationmitra.nic.in state portal route. Log into rationmitra.nic.in with the 8-digit Parivar ID and mobile OTP, go to "Print Ration Card" on the dashboard, and save the PDF. The state portal PDF is the legally issued document, so if there is any discrepancy between the state PDF and the Mera Ration app view, the state PDF prevails. Print a physical copy from the PDF for daily FPS use.

Mera Ration 2.0 route (recommended for travel and portable withdrawal). Download the Mera Ration 2.0 app from Google Play Store or Apple App Store. Log in with the head of family's Aadhaar number and verify OTP. Select "My Ration Card" from the main menu. The app displays the household card with every listed Samagra Member. Tap Download to save the PDF, or tap Share to send via WhatsApp. The app also supports biometric-authenticated portable withdrawal at any of the 5.44 lakh ONORC-integrated FPS across India, 13 regional languages including Hindi, family management, and transaction history.

DigiLocker route. Log into digilocker.gov.in with Aadhaar-mobile OTP, search "Ration Card" in the Issued Documents section, select Madhya Pradesh, and pull the state-issued PDF. Madhya Pradesh is onboarded to DigiLocker for ration cards, so this route works reliably for MP residents. The DigiLocker PDF is legally equivalent to the state portal PDF.

All three downloads are free of charge. Ignore any third-party app or website charging money for MP e-ration card download; the fee is always Rs 0 through official channels.

## Add or remove a family member on the MP ration card (Samagra family record linkage)

Family composition changes in MP flow through Samagra first, then reflect on the ration card automatically. Directly editing the ration card without updating Samagra is not possible on the m-Ration Mitra portal.

Add a new member (newborn, spouse after marriage, elderly parent joining). Log into samagra.gov.in with the Parivar ID and mobile OTP, go to "Add Member" on the family dashboard, enter the new member's name, DOB, relationship to head of family, and Aadhaar (or Aadhaar-enrolment slip for a newborn), upload the birth certificate for a newborn or marriage certificate for a spouse, and submit. The gram panchayat secretary or ward office verifies the addition within 15 to 30 days, issues the new Member ID, and Aadhaar-seeds it. The addition auto-reflects on rationmitra.nic.in within 48 hours of Samagra approval. No separate ration portal operation is needed.

Remove a member (death, marriage-out of the household, permanent relocation). Log into samagra.gov.in with the Parivar ID and mobile OTP, go to "Remove Member" on the family dashboard, select the member's name, choose the reason (deceased, married out, migrated), upload the death certificate, marriage certificate, or self-declaration with attested affidavit, and submit. Verification takes 15 to 30 days. On approval, the Member ID is deactivated and the ration card entitlement is auto-recalculated on the reduced household size.

For a newborn, e-KYC is exempt until age 5, so only the birth certificate and Aadhaar-enrolment slip are needed. For a spouse joining after marriage, the marriage certificate from the SDM office (or a court affidavit) is the base document. For an elderly parent joining, an affidavit of dependency plus proof of removal from the previous ration card (if applicable) is needed.

All add and remove operations are free of cost on both Samagra and rationmitra.nic.in. Ignore any private agent charging money.

## Correction, surrender and transfer on the MP portal

Post-issuance corrections cover four common scenarios in MP, and all four route through Samagra or the ration portal depending on the field.

Name spelling or DOB correction. If the field is stored in Samagra (name, DOB, gender, relationship), log into samagra.gov.in, go to "Correction Request", upload the corrected supporting document (Aadhaar, birth certificate, matric marksheet, marriage certificate), and submit. Correction is verified within 15 days. If the field is stored only on the ration card (FPS preference, address on card), log into rationmitra.nic.in, go to "Correction", and update directly. Fee is Rs 0 in both flows.

Address change within MP. Log into samagra.gov.in, go to "Change Address", upload the new address proof (voter ID, electricity bill, rent agreement), and submit. The gram panchayat or ward office at the new address verifies within 15 to 30 days, and the family record is transferred. The ration card FPS preference is auto-updated to the nearest FPS at the new address, though you can override this in the ration portal.

Surrender the ration card. Log into rationmitra.nic.in with the Parivar ID and mobile OTP, go to "Surrender Ration Card", submit a self-declaration with reason (household income above BPL ceiling, family moving out of MP permanently, duplicate card in another state), and the card is cancelled within 15 days. Surrender does not affect the Samagra record, which remains active for other state welfare programmes.

Transfer to another state. Transfer is done via ONORC after a fresh application at the new state. On approval of the new card, the MP card is auto-cancelled through the NFSA deduplication engine, so no separate surrender is needed. The Samagra record remains active until you formally exit MP through a change-of-residence declaration.

All four operations are free on official portals. Do not pay any agent for these services.

## Grievance and helplines: 181 CM helpline and 1967 food supplies

Two helplines cover grievance escalation in Madhya Pradesh, and both are toll-free and open 24x7 through the year.

181 is the Chief Minister's helpline, run by the MP state government for grievance intake across every state department including Food and Civil Supplies. Dial 181 from any mobile or landline in MP, state your grievance with the ration card acknowledgment number or Samagra Parivar ID, and get a ticket number. The CM helpline routes the complaint to the District Supply Officer with a 15-day resolution timeline and follows up on your behalf. This route works well for stalled applications, rejected files without proper reason, or FPS-level malpractice.

1967 is the all-India food and PDS helpline that works inside MP for FPS-specific grievances. Dial 1967 from any mobile, report the FPS name and code plus the specific issue (short weight, no supply, refused portable withdrawal, ePoS not working, denied AAY quantum), and the complaint is logged on the central NFSA grievance database. Resolution is expected within 15 days under NFSA Section 15.

Online grievance filing. Both nfsa.gov.in/PGRO/GRO.aspx (national) and cmhelpline.mp.gov.in (state) accept online complaints with the ration card acknowledgment number quoted. Attach any supporting evidence (screenshots of the portal status, photographs of the FPS notice board, receipts of previous withdrawals) to strengthen the complaint.

Escalation ladder for a stalled application or unresolved grievance. Step 1: portal grievance on rationmitra.nic.in or cmhelpline.mp.gov.in, wait 15 days. Step 2: escalate to the District Supply Officer with a written copy of the portal grievance, wait 15 days. Step 3: escalate to the MP State Food Commission (mpfood.gov.in), which has statutory power under NFSA Section 16 to direct the state government to act. Step 4: file a Right to Information application with the DSO office asking for the file status and reason for delay. RTI unblocks most stalled files within 30 days of the response.

## Related schemes for MP ration card holders

An MP ration card doubles as identity proof for several downstream welfare schemes that share the same Samagra family record, so the setup you did for the ration card pays off across multiple programmes.

Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY). The free 5 kg per person per month (BPL/PHH) and 35 kg per household per month (AAY) grain overlay, extended by the Union Cabinet on 29 November 2023 through 31 December 2028 with a Rs 11.80 lakh crore outlay. Every MP ration card holder in BPL or AAY category automatically draws PMGKAY grain at zero cost.

One Nation One Ration Card (ONORC). Portability across India for any MP-issued card. Rolled out from August 2019 and completed nationwide with Assam onboarding in June 2022, ONORC crossed 100 crore transactions by early 2026, delivering roughly Rs 40,000 crore of subsidised grain. MP migrants working in Delhi, Maharashtra, Gujarat, or any other state can draw ration at any ONORC-integrated FPS with biometric authentication.

Ladli Behna Yojana MP. The 35th installment of Ladli Behna Yojana worth Rs 1,836 crore was disbursed on 12 April 2026 to 1.25 crore women beneficiaries in MP, per the state Chief Minister's office announcement. Ladli Behna beneficiaries (women aged 21 to 60 from BPL and eligible APL households) get Rs 1,250 to Rs 1,500 per month DBT, and the eligibility check runs on the same Samagra Member ID that the ration card uses. If your family has a BPL ration card in MP, the women in the family are likely already eligible for Ladli Behna. Cross-check on the [Ladli Behna Yojana MP 2026 guide](/sarkari-yojana/ladli-behna-yojana-mp-2026).

e-Shram card. Unorganised worker registration under the Ministry of Labour, riding on the Aadhaar of the ration card holder. Every MP ration cardholder in BPL or AAY category who works in an unorganised sector role (construction, domestic help, street vending, agriculture labour) is eligible for e-Shram registration, which unlocks Rs 2 lakh accidental insurance and priority access to state welfare schemes.

Ayushman Bharat PM-JAY. Cashless health cover up to Rs 5 lakh per family per year at empanelled hospitals. Eligibility is based on the SECC 2011 database and every SECC-eligible family in MP is auto-enrolled through the Samagra linkage. Check eligibility at mera.pmjay.gov.in with the ration card head of family Aadhaar.

Ration card as ID proof. The MP ration card is accepted as valid identity and address proof for PAN card application, bank account opening (basic KYC), driving licence, gas connection under Ujjwala, and every state scholarship or scheme application.

## Frequently asked questions

**How to apply for MP ration card online in 2026?**

Apply on rationmitra.nic.in after first enrolling at samagra.gov.in and getting the 8-digit Parivar ID plus 9-digit Member IDs for every family member. Once Samagra is done and every Member ID is Aadhaar-seeded, open rationmitra.nic.in, click New Ration Card Application, enter the Parivar ID, verify with head of family mobile OTP, select the ration card category (BPL, APL, or AAY), upload income certificate and address proof and family photograph, and submit. Processing runs 30 to 45 days. There is no application fee.

**What is Samagra ID and why is it required for MP ration cards?**

Samagra ID is the Madhya Pradesh state government's unified beneficiary database, with an 8-digit Parivar ID per family and a 9-digit Member ID per person. Every service on rationmitra.nic.in (apply, status, download, add member, correction) is hard-gated behind the Parivar ID and Aadhaar-seeded Member IDs. Without Samagra, you cannot start any ration card operation in MP in 2026. Enrol first at samagra.gov.in, wait 15 to 30 days for gram panchayat or ward verification, then proceed to the ration portal.

**What is the income limit for a BPL ration card in Madhya Pradesh?**

The BPL income ceiling in MP is Rs 10,000 per year for the household, one of the lowest state thresholds in India compared to Uttar Pradesh (Rs 2 lakh rural, Rs 3 lakh urban) or Delhi (Rs 2.50 lakh raised on 13 July 2026). Households above Rs 10,000 per year fall into APL by default and do not draw PMGKAY free grain. AAY is criteria-based rather than income-only and is reserved for widowed, disabled, elderly-only, or destitute families identified by the gram panchayat or ward office.

**How to check MP ration card status on m-Ration Mitra?**

Two pathways work on rationmitra.nic.in. Open the portal, click Check Application Status, enter the 10-digit acknowledgment number you received on submission, and view the current status. Alternatively, log in with the 8-digit Parivar ID and mobile OTP, go to My Applications on the dashboard, and view every application filed by the family with current status, office holding the file, and expected next-step date. For files stuck beyond 45 days, escalate via CM helpline 181 with the acknowledgment number.

**How to download my MP e-ration card?**

Three free routes work in 2026. State portal: log into rationmitra.nic.in with Parivar ID and mobile OTP, go to Print Ration Card, save the PDF. Mera Ration 2.0 app: log in with Aadhaar OTP, select My Ration Card, tap Download or Share. DigiLocker: log in with Aadhaar OTP, search Ration Card in Issued Documents, select Madhya Pradesh, pull the PDF. All three PDFs are legally valid and accepted at every FPS. Ignore any third-party site charging for e-ration card download; the official fee is Rs 0.

**What documents are needed for a new MP ration card?**

Samagra Parivar ID and Member IDs for every household member (from samagra.gov.in). Aadhaar of every member (mandatory e-KYC above age 5). One address proof (voter ID, electricity bill, rent agreement, or municipal water bill). Family group photograph with every member visible. Income certificate from the tehsildar (Rs 50 fee, 15 to 30 days processing). Bank account number and IFSC for DBT-linked services. If applying for AAY, add the applicable criteria proof (widow certificate, disability certificate, senior citizen ID, or gram panchayat destitute certificate).

**Can I apply for an MP ration card without a Samagra ID?**

No. The m-Ration Mitra portal at rationmitra.nic.in requires the 8-digit Parivar ID to open any application form, and every Member ID must be Aadhaar-seeded on samagra.gov.in before it can be used. If you do not have a Samagra ID, enrol first at samagra.gov.in (free, 15 to 30 days for verification), get the Parivar ID and Member IDs issued, complete Aadhaar seeding, and then proceed to rationmitra.nic.in. There is no bypass or offline route that skips Samagra in Madhya Pradesh in 2026.

**How to add a new family member to my MP ration card?**

Add the member on samagra.gov.in first, not on the ration portal. Log into samagra.gov.in with the Parivar ID and mobile OTP, go to Add Member, enter the new member's name, DOB, relationship, and Aadhaar (or Aadhaar-enrolment slip for a newborn), upload the birth certificate for a newborn or marriage certificate for a spouse, and submit. Verification takes 15 to 30 days. On approval, the new Member ID is issued, Aadhaar-seeded, and auto-reflected on rationmitra.nic.in within 48 hours. The ration card entitlement is recalculated for the larger household. The service is free.

**What is the MP ration card helpline number?**

Two helplines cover MP ration card grievances. 181 is the MP Chief Minister's helpline, open 24x7, and covers grievance intake for every state department including Food and Civil Supplies. Dial 181, quote the acknowledgment number or Parivar ID, and get a ticket. 1967 is the all-India food and PDS helpline that works inside MP for FPS-specific issues like short weight, no supply, or ePoS malfunction. Both helplines are toll-free from any mobile or landline. Online grievance can also be filed at cmhelpline.mp.gov.in and nfsa.gov.in/PGRO/GRO.aspx.

**How is my MP ration card linked to Ladli Behna Yojana?**

Both schemes ride on the same Samagra Member ID. Ladli Behna Yojana pays Rs 1,250 to Rs 1,500 per month DBT to women aged 21 to 60 from BPL and eligible APL households, and the eligibility check runs on the Samagra family record that the ration card also uses. The 35th installment worth Rs 1,836 crore was disbursed on 12 April 2026 to 1.25 crore women beneficiaries in MP. If your family has a BPL ration card in MP with women in the eligible age band, they are likely already enrolled in Ladli Behna. Verify on cmladlibahna.mp.gov.in with the Samagra Member ID of the woman beneficiary.

## Primary sources

- m-Ration Mitra state portal: rationmitra.nic.in (apply, status, download, correction, surrender)
- Samagra unified beneficiary database: samagra.gov.in (Parivar ID and Member ID enrolment, Aadhaar seeding)
- Department of Food, Civil Supplies and Consumer Protection, Government of Madhya Pradesh: food.mp.gov.in
- National Food Security Portal: nfsa.gov.in (state directory, Know Your Ration Card, PGRO grievance)
- MP CM helpline online grievance: cmhelpline.mp.gov.in
- Mera Ration 2.0 FAQ (official): nfsa.gov.in/doc/FAQ_for_Mera_Ration_2.pdf
- Union Cabinet decisions: PMGKAY extension till 31 December 2028 (29 November 2023, outlay Rs 11.80 lakh crore); fortified rice extension (9 October 2024, Rs 17,082 crore)
- Ladli Behna Yojana MP portal: cmladlibahna.mp.gov.in (35th installment Rs 1,836 crore disbursed 12 April 2026 to 1.25 crore women)
- CM helpline: 181 (24x7 grievance intake)
- All-India food and PDS helpline: 1967
`;

const FAQS = [
  {
    question: "How to apply for MP ration card online in 2026?",
    answer: "Apply on rationmitra.nic.in after first enrolling at samagra.gov.in and getting the 8-digit Parivar ID plus 9-digit Member IDs for every family member. Once Samagra is done and every Member ID is Aadhaar-seeded, open rationmitra.nic.in, click New Ration Card Application, enter the Parivar ID, verify with head of family mobile OTP, select the ration card category (BPL, APL, or AAY), upload income certificate and address proof and family photograph, and submit. Processing runs 30 to 45 days. There is no application fee.",
  },
  {
    question: "What is Samagra ID and why is it required for MP ration cards?",
    answer: "Samagra ID is the Madhya Pradesh state government's unified beneficiary database, with an 8-digit Parivar ID per family and a 9-digit Member ID per person. Every service on rationmitra.nic.in (apply, status, download, add member, correction) is hard-gated behind the Parivar ID and Aadhaar-seeded Member IDs. Without Samagra, you cannot start any ration card operation in MP in 2026. Enrol first at samagra.gov.in, wait 15 to 30 days for gram panchayat or ward verification, then proceed to the ration portal.",
  },
  {
    question: "What is the income limit for a BPL ration card in Madhya Pradesh?",
    answer: "The BPL income ceiling in MP is Rs 10,000 per year for the household, one of the lowest state thresholds in India compared to Uttar Pradesh (Rs 2 lakh rural, Rs 3 lakh urban) or Delhi (Rs 2.50 lakh raised on 13 July 2026). Households above Rs 10,000 per year fall into APL by default and do not draw PMGKAY free grain. AAY is criteria-based rather than income-only and is reserved for widowed, disabled, elderly-only, or destitute families identified by the gram panchayat or ward office.",
  },
  {
    question: "How to check MP ration card status on m-Ration Mitra?",
    answer: "Two pathways work on rationmitra.nic.in. Open the portal, click Check Application Status, enter the 10-digit acknowledgment number you received on submission, and view the current status. Alternatively, log in with the 8-digit Parivar ID and mobile OTP, go to My Applications on the dashboard, and view every application filed by the family with current status, office holding the file, and expected next-step date. For files stuck beyond 45 days, escalate via CM helpline 181 with the acknowledgment number.",
  },
  {
    question: "How to download my MP e-ration card?",
    answer: "Three free routes work in 2026. State portal: log into rationmitra.nic.in with Parivar ID and mobile OTP, go to Print Ration Card, save the PDF. Mera Ration 2.0 app: log in with Aadhaar OTP, select My Ration Card, tap Download or Share. DigiLocker: log in with Aadhaar OTP, search Ration Card in Issued Documents, select Madhya Pradesh, pull the PDF. All three PDFs are legally valid and accepted at every FPS. Ignore any third-party site charging for e-ration card download; the official fee is Rs 0.",
  },
  {
    question: "What documents are needed for a new MP ration card?",
    answer: "Samagra Parivar ID and Member IDs for every household member (from samagra.gov.in). Aadhaar of every member (mandatory e-KYC above age 5). One address proof (voter ID, electricity bill, rent agreement, or municipal water bill). Family group photograph with every member visible. Income certificate from the tehsildar (Rs 50 fee, 15 to 30 days processing). Bank account number and IFSC for DBT-linked services. If applying for AAY, add the applicable criteria proof (widow certificate, disability certificate, senior citizen ID, or gram panchayat destitute certificate).",
  },
  {
    question: "Can I apply for an MP ration card without a Samagra ID?",
    answer: "No. The m-Ration Mitra portal at rationmitra.nic.in requires the 8-digit Parivar ID to open any application form, and every Member ID must be Aadhaar-seeded on samagra.gov.in before it can be used. If you do not have a Samagra ID, enrol first at samagra.gov.in (free, 15 to 30 days for verification), get the Parivar ID and Member IDs issued, complete Aadhaar seeding, and then proceed to rationmitra.nic.in. There is no bypass or offline route that skips Samagra in Madhya Pradesh in 2026.",
  },
  {
    question: "How to add a new family member to my MP ration card?",
    answer: "Add the member on samagra.gov.in first, not on the ration portal. Log into samagra.gov.in with the Parivar ID and mobile OTP, go to Add Member, enter the new member's name, DOB, relationship, and Aadhaar (or Aadhaar-enrolment slip for a newborn), upload the birth certificate for a newborn or marriage certificate for a spouse, and submit. Verification takes 15 to 30 days. On approval, the new Member ID is issued, Aadhaar-seeded, and auto-reflected on rationmitra.nic.in within 48 hours. The ration card entitlement is recalculated for the larger household. The service is free.",
  },
  {
    question: "What is the MP ration card helpline number?",
    answer: "Two helplines cover MP ration card grievances. 181 is the MP Chief Minister's helpline, open 24x7, and covers grievance intake for every state department including Food and Civil Supplies. Dial 181, quote the acknowledgment number or Parivar ID, and get a ticket. 1967 is the all-India food and PDS helpline that works inside MP for FPS-specific issues like short weight, no supply, or ePoS malfunction. Both helplines are toll-free from any mobile or landline. Online grievance can also be filed at cmhelpline.mp.gov.in and nfsa.gov.in/PGRO/GRO.aspx.",
  },
  {
    question: "How is my MP ration card linked to Ladli Behna Yojana?",
    answer: "Both schemes ride on the same Samagra Member ID. Ladli Behna Yojana pays Rs 1,250 to Rs 1,500 per month DBT to women aged 21 to 60 from BPL and eligible APL households, and the eligibility check runs on the Samagra family record that the ration card also uses. The 35th installment worth Rs 1,836 crore was disbursed on 12 April 2026 to 1.25 crore women beneficiaries in MP. If your family has a BPL ration card in MP with women in the eligible age band, they are likely already enrolled in Ladli Behna. Verify on cmladlibahna.mp.gov.in with the Samagra Member ID of the woman beneficiary.",
  },
];

await createScheme({
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  content: CONTENT,
  faqs: FAQS,
  ministry: "Department of Food, Civil Supplies and Consumer Protection, Government of Madhya Pradesh",
  launched_by: "Department of Food, Civil Supplies and Consumer Protection, Government of Madhya Pradesh",
  objective: "State-implemented NFSA 2013 in Madhya Pradesh via the Samagra ID unified beneficiary database. Every m-Ration Mitra operation is hard-gated behind the 8-digit Parivar ID and 9-digit Member IDs enrolled first on samagra.gov.in.",
  eligibility: [
    "Indian citizen household with permanent residence in Madhya Pradesh",
    "Samagra Parivar ID issued and every Member ID Aadhaar-seeded on samagra.gov.in",
    "BPL: household annual income under Rs 10,000 per year (state slab)",
    "APL: household income above Rs 10,000 per year (no PMGKAY free grain)",
    "AAY: criteria-based (widowed, disabled, elderly-only, destitute) as identified by gram panchayat or ward office",
    "No income tax filer, no four-wheeler owner, no permanent government job above Group C in household",
  ],
  benefits: [
    "BPL / PHH: 5 kg of grain per person per month free under PMGKAY plus state overlay",
    "AAY: 35 kg of grain per household per month free under PMGKAY plus state overlay",
    "Fortified rice with iron, folic acid, vitamin B12 (part of Rs 17,082 crore Cabinet allocation 9 October 2024)",
    "Portable draw at any of 5.44 lakh Fair Price Shops across India via ONORC",
    "Identity proof for Ladli Behna Yojana, PM-KISAN, e-Shram, PM-JAY and MP state welfare schemes",
    "Free e-ration card download via rationmitra.nic.in state portal, Mera Ration 2.0 app, and DigiLocker",
  ],
  documents: [
    "Samagra Parivar ID (8-digit) and Member IDs (9-digit) for every household member",
    "Aadhaar card of every household member (mandatory e-KYC above age 5)",
    "One address proof: voter ID, electricity bill, rent agreement, or municipal water bill",
    "Family group photograph with every member visible (passport size)",
    "Income certificate from the tehsildar (Rs 50 fee, 15 to 30 days)",
    "Bank account number and IFSC for DBT-linked services",
    "AAY criteria proof if applicable: widow certificate, disability certificate, senior citizen ID, or gram panchayat destitute certificate",
  ],
  how_to_apply: "Enrol first at samagra.gov.in and get the 8-digit Parivar ID plus 9-digit Member IDs (15 to 30 days verification). Aadhaar-seed every Member ID on samagra.gov.in. Then open rationmitra.nic.in, click New Ration Card Application, enter the Parivar ID, verify with head of family mobile OTP, select BPL, APL, or AAY, upload income certificate, address proof, family photograph, and AAY criteria proof if applicable, and submit. The portal issues a 10-digit acknowledgment number. Processing runs 30 to 45 days through document verification, field verification by gram panchayat or ward office, and DSO final approval. There is no application fee. For stalled files, escalate via CM helpline 181 or 1967.",
  official_portal: "https://rationmitra.nic.in",
  helpline_number: "181",
  category: "food-security",
  state: "madhya-pradesh",
  image: null,
  reading_time: "11 min read",
  quality_flag: ["freshness-moat", "primary-source-cited", "3000w-plus", "state-page"],
});
