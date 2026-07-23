// Day 6 addition #8: Ration Card 2026 national hub (NEW scheme, not in DB).
// Freshness moats: 2.21 crore ineligible cards deleted (Pralhad Joshi
// statement 18 June 2026), 3 crore fresh cards on the way, PMGKAY free
// ration extended to 31 December 2028 (Cabinet 29 Nov 2023, outlay
// Rs 11.80 lakh crore), ONORC crossed 100 crore transactions delivering
// Rs 40,000 crore of subsidised grain, Mera Ration 2.0 feature set with
// 13-language biometric FPS withdrawal, 100 percent digitisation
// achieved (Pralhad Joshi announcement), and 28 Nov 2025 wheat-rice
// ratio revision under PMGKAY. Hub links out to 5 state pages.

import { createScheme } from "./lib/create-scheme.mjs";

const SLUG = "ration-card-2026";

const TITLE = "Ration Card 2026: apply online, NFSA rules, e-KYC, list check";

const DESCRIPTION = "Ration Card 2026 apply online guide: 81.35 cr NFSA covered, 2.21 cr bogus cards deleted, PMGKAY till Dec 2028, e-KYC steps and Mera Ration 2.0 download.";

const CONTENT = `## Ration card 2026 at a glance

A ration card is the household identity document issued under the National Food Security Act 2013 (NFSA) that lets an Indian family draw subsidised or free wheat, rice, coarse grain, and sugar from the Public Distribution System (PDS). It is issued by the state Food and Civil Supplies department, not the central government, and each of India's 28 states and 8 union territories runs its own portal and application flow.

The system now covers 81.35 crore beneficiaries across 20.58 crore ration cards, distributed through 5.44 lakh Fair Price Shops (FPS), per Ministry of Consumer Affairs data cited by Union Minister Pralhad Joshi in a press briefing on 18 June 2026 (PIB). The Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY), which pays for the free 5 kg per person per month, was extended by the Union Cabinet on 29 November 2023 through 31 December 2028, with a total financial outlay of Rs 11.80 lakh crore.

Three things changed in 2025-26 that most competitor guides miss. First, the government deleted 2.21 crore ineligible ration cards during the 2025-26 cleanup drive, and Minister Joshi confirmed on 18 June 2026 that this creates room for 3 crore fresh card issuances over the next 12 months. Second, One Nation One Ration Card (ONORC) crossed 100 crore inter-state and intra-state portability transactions, delivering roughly Rs 40,000 crore of subsidised grain to migrant workers who no longer need to surrender the card in their home state to draw ration in the state they work in. Third, the Ministry announced near-100 percent digitisation of ration cards, and the Mera Ration 2.0 mobile app now supports 13 regional languages, biometric-authenticated portable withdrawal, family management, and digital card download.

If you land here looking to apply for a ration card, the answer is not "one national portal" but "your state's Food and Civil Supplies portal". This page covers the national rules and eligibility framework, then links to five deep-dive state pages for the biggest PDS states (Uttar Pradesh, Bihar, Delhi, Madhya Pradesh, Maharashtra) plus a state-wise table for the rest.

## Who is eligible under NFSA in 2026

Eligibility under the National Food Security Act 2013 is set at the state level, using an inclusion-exclusion criteria model where each state notifies its own priority-household definition within a central beneficiary cap.

The all-India cap is 75 percent of the rural population and 50 percent of the urban population, which pencils out to the 81.35 crore beneficiaries currently on the rolls. Within that cap, states classify households into three broad NFSA categories. Antyodaya Anna Yojana (AAY) is the poorest slab, typically covering roughly 2.5 crore households across India, and gets 35 kg of grain per household per month. Priority Household (PHH) is the next slab, covering roughly 18 crore households, and gets 5 kg of grain per person per month. Non-Priority Household (NPHH, also called APL in some state nomenclatures) is not entitled to subsidised grain under NFSA, but the household is still recorded on the ration database and can access non-food PDS services.

Income limits vary by state and are the single most common source of confusion. Delhi doubled its Priority Household income limit from Rs 1.20 lakh to Rs 2.50 lakh per year on 13 July 2026 via the Delhi Food Security (Amendment) Rules 2026, and became the first state to reopen ration card issuance after a 13-year gap on 15 May 2026. Uttar Pradesh caps rural income at Rs 2 lakh and urban income at Rs 3 lakh. Bihar does not publish a hard rupee ceiling but ranks households on NFSA priority scoring instead.

Nationality is Indian citizen only. Every household member above age 5 must complete Aadhaar e-KYC, which is now mandatory statewide with three narrow exemptions. Children under 5 are exempt from Aadhaar. Elderly with biometric failure can use OTP or iris fallback. State-notified vulnerable groups (transgender persons, homeless in some states) can use alternative identity proof pending Aadhaar enrolment.

## Types of ration cards in India

There are six ration card categories in circulation as of 2026, and knowing which one you should apply for saves multiple rejection cycles.

Antyodaya Anna Yojana (AAY) is the poorest-of-poor slab. Eligibility is criteria-based rather than income-only, covering widows, disabled with no earning member, elderly above 60 with no support, tribal households in scheduled areas, and destitute households identified by the gram panchayat or urban local body. AAY draws 35 kg of grain per household per month regardless of family size.

Priority Household (PHH) is the main NFSA slab. Eligibility uses a state-notified inclusion-exclusion filter, and the card draws 5 kg of grain per person per month. This is the slab most applicants qualify for.

Non-Priority Household (NPHH), sometimes labelled APL (Above Poverty Line) in older state nomenclature, is not entitled to subsidised NFSA grain but is on the state ration database. NPHH households can still access non-food PDS services like kerosene distribution (where the state runs one), and can move up to PHH if their household situation changes.

State-specific colour-coded cards are the fourth layer. Maharashtra runs Yellow (BPL/AAY), Saffron (APL Rs 15,000 to Rs 1 lakh), and White (APL above Rs 1 lakh) cards. Delhi runs PR (Priority) and PR-S (Priority-State pool for households beyond the central NFSA cap). Bihar runs a state "Anna Yojana" pink card overlay.

Special-purpose cards include the Annapurna Yojana card for destitute elderly, which draws 10 kg of grain per person per month, and the Farmer APL card in Maharashtra for households in Vidarbha and Marathwada districts, which gives PDS access even to households above the general APL income line.

Pick the category that matches your household situation, not the one with the highest quantum. AAY is not open to everyone, and applying for AAY when you qualify only for PHH slows the whole file down.

## 2.21 crore ineligible cards deleted, 3 crore fresh cards on the way

Union Minister of Consumer Affairs, Food and Public Distribution Pralhad Joshi confirmed on 18 June 2026 that the ministry has deleted 2.21 crore ineligible ration cards during the 2025-26 cleanup drive, and this creates administrative headroom for issuing roughly 3 crore fresh cards over the next 12 months, per Business Standard reporting (18 June 2026).

The 2.21 crore deletions came from four ineligibility categories. Deceased members whose names were not reported to the state PDS office. Households where an income tax return was filed by an adult member, disqualifying the entire household from PHH. Households owning a four-wheeler passenger vehicle registered in an adult member's name. Duplicate entries where the same Aadhaar was linked to two ration cards in different states, which the ONORC deduplication engine catches.

Roughly 8.51 crore beneficiaries were flagged for verification during the drive, of which 2.21 crore turned out to be genuinely ineligible and were removed after a notice-and-hearing process. The remaining 6.30 crore were verified as eligible and stayed on the rolls. The verification process ran on the electronic Point-of-Sale (ePoS) transaction data, cross-linked to the Aadhaar e-KYC database and the ONORC deduplication engine.

The 3 crore fresh-card opportunity means that families who were denied a card between 2015 and 2024 because their state had hit its NFSA cap should reapply now. Delhi has already resumed issuance on 15 May 2026 after a 13-year freeze, and other states are expected to follow through FY26-27 as ministry allocations open up. Track the fresh-card announcements on your state's Food and Civil Supplies portal, or check the state page linked in the table below.

## How to apply for a ration card online, state by state

Every state runs its own PDS portal, and there is no single national "apply for ration card" form on nfsa.gov.in. The national portal only maintains a directory of state portal links. The application flow itself lives on the state portal.

The five biggest PDS states are covered in dedicated deep-dive pages linked below. For the remaining 25 states and 8 union territories, use the state directory on nfsa.gov.in/portal/apply_ration_card to find the correct portal URL, then follow the state-specific flow.

The generic online application flow is broadly similar across states. Register on the state portal with a mobile number and OTP. Fill the household details form with head-of-family Aadhaar, spouse Aadhaar, and dependent members' Aadhaars in one go. Upload income certificate (or self-declaration where the state allows one), residence proof (voter ID, electricity bill, rent agreement), and a family group photograph. Pay the application fee, which is Rs 0 to Rs 45 depending on the state. Submit and note the acknowledgment number.

Application processing is capped at 30 days under NFSA Section 14, though in practice it takes 15 to 60 days depending on district workload. If the file crosses 30 days without a decision, the applicant can escalate to the District Supply Officer, and further to the State Food Commission if the DSO does not respond within 15 days.

Offline application through the nearest FPS or the tehsil-level Food Inspector office is also allowed in every state, with the same form and documents. Offline is slower (typically 45 to 90 days) but works for applicants without smartphone or internet access.

## Documents required and the e-KYC checklist

The documentation stack has three layers, and the e-KYC layer is the most common failure point in 2026.

Identity and address proofs are the base layer. Aadhaar card of every household member. One address proof from voter ID, electricity bill, rent agreement, or municipal water bill. Passport-size family group photograph. If the head of family does not have a Voter ID or electricity connection in their name, a landlord's affidavit works in most states.

Income and eligibility proofs are the second layer. Family annual income certificate from the tehsildar or SDM (Rs 50 fee, 15 to 30 days). Self-declaration is accepted in Bihar, Odisha, and Assam. Caste certificate if applying for a state-reserved AAY quota. Disability certificate if applying under the AAY-disability criterion.

Bank and mobile linkage is the third layer. Bank account number and IFSC (any nationalised or scheduled commercial bank). Mobile number Aadhaar-seeded on the NPCI mapper for DBT-enabled schemes that ride on the ration card as an identity proof (PM-KISAN, PMAY, and select state schemes).

Aadhaar e-KYC of every listed member above age 5 is now mandatory across all states as of 2026, and the deadline was 31 March 2026 in Bihar, 30 June 2026 in Uttar Pradesh, and 31 December 2025 in Delhi. Missed-deadline households risk suspension of the card until e-KYC is completed, which can be done free of cost at any ePoS-equipped FPS. Take the family Aadhaars to the FPS during working hours, ask the dealer to run e-KYC on the ePoS device, and the household is reactivated within 48 hours.

Three narrow exemptions from Aadhaar e-KYC apply. Children under age 5 (Aadhaar is optional at this age). Elderly whose fingerprint biometrics fail can use iris scan or OTP fallback on the ePoS. State-notified vulnerable groups (transgender persons, homeless in some states) can use alternative identity pending Aadhaar enrolment.

## How to check ration card status by Aadhaar or reference number

Status checks are the second most common post-application action after the initial submission, and every state portal supports at least one of three status-check pathways.

By application reference number: visit your state's PDS portal, go to the "Application Status" or "Track Application" section, enter the reference number you received on submission, and view the current status (Received, Under Verification, Approved, Rejected, Card Issued). This is the fastest route.

By Aadhaar number: on nfsa.gov.in, use the "Know Your Ration Card" tool. Enter your Aadhaar and the captcha, and the system returns the ration card number and issuing state if one exists. Then click through to the state portal for the full status.

By household head mobile number: on the state portal, enter the head of family's Aadhaar-linked mobile number and verify OTP. The dashboard shows the household's card status, e-KYC compliance, and last three PDS transactions.

If none of the three pathways return a result, the application is either not yet keyed into the system by the district office, or the acknowledgment number was mistyped. Wait 7 to 10 days after submission before treating a "no record" response as concerning.

For applications that have been pending beyond the 30-day NFSA statutory ceiling, file a formal grievance through the state portal's Grievance section or call the state helpline (numbers listed in the "Grievance and helpline numbers" section below).

## How to download your e-ration card via Mera Ration 2.0 DigiLocker and state portal

The e-ration card, launched under the digitisation drive that reached near-100 percent coverage as of 2026, is now accepted as a valid ration document at every FPS across India. Three download routes work.

Mera Ration 2.0 (recommended): download the Mera Ration 2.0 app from the Google Play Store or Apple App Store. Log in with your Aadhaar number and verify OTP. Select "My Ration Card" from the main menu. The app displays the household card with all listed members. Tap Download to save the PDF, or tap Share to send via WhatsApp. The app also supports biometric-authenticated portable withdrawal at any of the 5.3 lakh ONORC-integrated FPS across India, family management (add/remove member requests), digital surrender, and 13 regional languages including Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Odia, Punjabi, Assamese, Urdu, and English.

DigiLocker: log into digilocker.gov.in with Aadhaar-mobile OTP. Search for "Ration Card" in the Issued Documents section, select your state, and pull the state-issued PDF. Not all states are onboarded to DigiLocker for ration cards yet, so this route works reliably for Delhi, Maharashtra, Karnataka, Andhra Pradesh, Telangana, and Kerala, and partially for others.

State portal download: on your state's PDS portal, log in with mobile or Aadhaar OTP, go to "Download e-Ration Card" or "Print Ration Card", and save the PDF. The state portal PDF is the legally issued document, so if there is any discrepancy between the state PDF and the Mera Ration app view, the state PDF prevails.

All three downloads are free. Ignore any third-party app or website charging money for e-ration card download.

## One Nation One Ration Card explained with the 100 crore transactions milestone

One Nation One Ration Card (ONORC) is the portability layer on top of NFSA that lets a beneficiary draw subsidised grain from any Fair Price Shop across India using the same ration card, regardless of the state that issued the card. It was rolled out in phases from August 2019 and completed nationwide with Assam onboarding in June 2022.

The scheme crossed 100 crore inter-state and intra-state portability transactions by early 2026, per PIB reporting cited by policy hub sites, and has delivered roughly Rs 40,000 crore worth of subsidised grain to migrant workers, seasonal labourers, and students living outside their home state, per Ministry of Consumer Affairs data.

Portable withdrawal works through biometric authentication on the ePoS device at any ONORC-integrated FPS. Take your ration card (physical or the e-ration card on Mera Ration 2.0), give the FPS dealer your ration card number, and complete Aadhaar biometric verification on the ePoS. The device pulls your household's monthly entitlement from the central NFSA database, deducts the drawn quantity, and issues the grain at the same price as your home state.

Two edge cases matter. Split households, where some members live in one state and others in another, can each draw their per-person entitlement in their respective state without surrendering or transferring the card. Reverse portability, where a migrant returning home can draw the balance of that month's entitlement, works from the day of return without any waiting period.

Track your ONORC transactions on the Mera Ration 2.0 app under Transaction History. Each transaction shows the FPS name, state, quantity drawn, price paid, and the date and time.

## PMGKAY free ration till December 2028 what you actually receive each month

Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY) is the free-grain top-up scheme layered on the paid NFSA distribution. It was launched during the COVID-19 wave in April 2020, extended multiple times, and the current extension runs from 1 January 2024 through 31 December 2028 per the Union Cabinet decision of 29 November 2023.

The total financial outlay for the 5-year extension is Rs 11.80 lakh crore, which is one of the largest single-scheme allocations in Indian budget history. The Cabinet also approved an additional Rs 17,082 crore on 9 October 2024 for fortified rice (with iron, folic acid, and vitamin B12) to be distributed through the same PMGKAY channel to combat micronutrient deficiency.

Under PMGKAY, every Priority Household (PHH) member receives 5 kg of grain per person per month at zero cost. Every AAY household receives 35 kg of grain per household per month at zero cost. The grain mix is state-notified and changed on 28 November 2025 to reflect the current wheat-rice ratio revision. As of July 2026, most states distribute a mix of wheat and rice, with fortified rice replacing regular rice in states that have completed the rollout (Uttar Pradesh, Madhya Pradesh, Chhattisgarh, Jharkhand, Odisha, West Bengal, and select others).

The PMGKAY 5 kg is separate from any state-level top-up scheme, so a beneficiary can draw the free 5 kg under PMGKAY and additional grain (like 2 kg of dal in Andhra Pradesh, or state rice in Tamil Nadu) under the state overlay. Ask your FPS dealer for the itemised distribution slip to see exactly which quantum came from which scheme.

## State-wise ration card apply links

Use the table below to jump to the state page for the five biggest PDS states, or visit nfsa.gov.in/portal/apply_ration_card for the remaining 25 states and 8 union territories.

| State | Portal | RC types | Income limit | Latest 2026 news | Full guide |
|---|---|---|---|---|---|
| Uttar Pradesh | fcs.up.gov.in | PHH, AAY | Rural Rs 2L / urban Rs 3L | Largest PDS load, 3.62 cr cards, 14.61 cr beneficiaries | [UP ration card apply online 2026](/sarkari-yojana/ration-card-uttar-pradesh-2026) |
| Bihar | epds.bihar.gov.in | PHH, AAY, Anna Yojana | NFSA priority ranking | 1.65 cr e-KYC pending, suspension risk live | [Bihar ration card apply epds.bihar.gov.in 2026](/sarkari-yojana/ration-card-bihar-2026) |
| Delhi | nfs.delhigovt.nic.in | AAY, PR, PR-S | Rs 2.50 lakh per year | Income cap raised 13 Jul 2026, first fresh cards after 13-year freeze from 15 May 2026 | [Delhi ration card apply nfs.delhigovt.nic.in 2026](/sarkari-yojana/ration-card-delhi-2026) |
| Madhya Pradesh | rationmitra.nic.in | BPL, APL, AAY | BPL under Rs 10,000 per year | Samagra ID hard gate for all PDS operations | [MP ration card apply Samagra 2026](/sarkari-yojana/ration-card-madhya-pradesh-2026) |
| Maharashtra | mahafood.gov.in | Yellow, Saffron, White, APL Farmer | Yellow up to Rs 15k / Saffron Rs 15k-1L / White above Rs 1L | 18 lakh bogus cards cancelled in 2025-26 drive | [Maharashtra ration card apply mahafood.gov.in 2026](/sarkari-yojana/ration-card-maharashtra-2026) |

For remaining states, common state portal URLs are ahara.kar.nic.in (Karnataka), tnpds.gov.in (Tamil Nadu), civilsupplieskerala.gov.in (Kerala), epds.telangana.gov.in (Telangana), epds.andhra.gov.in (Andhra Pradesh), food.wb.gov.in (West Bengal), foodgov.gujarat.gov.in (Gujarat), food.raj.nic.in (Rajasthan), and pdsportalodisha.gov.in (Odisha).

## Ration card correction, add/remove member and surrender

Post-issuance corrections cover four common scenarios, and all four are done through the state portal or the FPS ePoS device.

Name spelling or date-of-birth correction: log into the state portal, go to Correction section, upload the corrected supporting document (Aadhaar, birth certificate, matric marksheet), and submit. The correction is validated overnight and reflects on the card within 3 to 7 days. Fee is Rs 0 to Rs 10 depending on the state.

Add a new member (newborn, spouse after marriage, elderly parent joining the household): log into the state portal, go to Add Member, enter the new member's Aadhaar and relationship to head of family, upload birth certificate for a newborn or marriage certificate for a spouse, and submit. The addition is verified by the district office within 15 to 30 days. Aadhaar e-KYC of the added member is triggered automatically.

Remove a member (death, marriage-out of the household, permanent relocation): log into the state portal, go to Remove Member, select the member's name, choose the reason (deceased, married out, migrated), upload supporting proof (death certificate, marriage certificate, or self-declaration), and submit. Removal is processed within 15 to 30 days. The remaining household continues to draw the reduced per-person entitlement.

Surrender or transfer the ration card: surrender is done when the entire household is moving out of state permanently or if the household's income has risen above the PHH ceiling. Log into the state portal, go to Surrender, submit self-declaration, and the card is cancelled within 15 days. Transfer to a different state is done via ONORC after a fresh application at the new state, so the old card is auto-cancelled once the new one is issued.

All four operations are free except name-correction which carries a nominal fee in some states. Ignore any private agent charging money for these operations.

## Grievance and helpline numbers

Every state runs a toll-free helpline and an online grievance portal, and NFSA Section 25 mandates a two-level grievance redress mechanism (District Grievance Redressal Officer at the first level, State Food Commission at the second level).

National-level helplines and portals: 1967 (all-India food and PDS helpline, works in every state). 14434 (Ministry of Labour helpline, useful when e-Shram and PDS overlap). NFSA grievance portal at nfsa.gov.in/PGRO/GRO.aspx for online complaint filing. Consumer Helpline at 1915 or consumerhelpline.gov.in for FPS malpractice complaints.

State-specific helplines are listed on each of the five state pages linked above. Uttar Pradesh runs 1076 (CM helpline) in addition to 1967. Delhi runs 1800-11-0841 (department toll-free) and 1031 (grievance). Maharashtra runs 1800-22-4950. Bihar runs 1800-345-6194. Madhya Pradesh runs 181 (CM helpline).

Escalation ladder for a stalled application or a rejected file. Step 1: file a written grievance on the state portal, keep the reference number, wait 15 days. Step 2: escalate to the District Supply Officer (DSO) with a copy of the portal grievance, wait 15 days. Step 3: escalate to the State Food Commission, which has statutory power under NFSA Section 16 to direct the state government to act. Step 4: file a Right to Information (RTI) application with the DSO office asking for the status and reason for the delay. This often unblocks the file within 30 days of the RTI response.

## Frequently asked questions

**How can I apply for a ration card online in 2026?**

Apply on your state's Food and Civil Supplies portal, not on the national NFSA portal which only maintains a state directory. Register with a mobile number and OTP, fill the household details form with the Aadhaar of every listed member, upload income and address proof plus a family group photo, pay the application fee (Rs 0 to Rs 45 depending on state), and submit. The application is processed within 30 days under NFSA Section 14, though actual timelines run 15 to 60 days by district. If stuck beyond 30 days, escalate to the District Supply Officer.

**Who is eligible for a new ration card under NFSA in 2026?**

Any Indian citizen household within the state's Priority Household inclusion criteria is eligible. Income limits are state-notified, with Delhi at Rs 2.50 lakh per year (raised from Rs 1.20 lakh on 13 July 2026), Uttar Pradesh at Rs 2 lakh rural and Rs 3 lakh urban, and Bihar using NFSA priority ranking instead of a rupee cap. Households with an income tax filer, a four-wheeler passenger vehicle in an adult member's name, or an existing ration card in any other state are ineligible under the exclusion criteria.

**How can I check my ration card status by Aadhaar number?**

On nfsa.gov.in, use the Know Your Ration Card tool. Enter your Aadhaar number and the captcha, and the system returns the ration card number and issuing state if one exists in the NFSA database. For full application status (pending, under verification, approved, rejected), click through to the state portal and use the reference number or Aadhaar-linked mobile OTP flow.

**How do I download my ration card online in 2026?**

Three routes work. Mera Ration 2.0 app: log in with Aadhaar OTP, select My Ration Card, tap Download to save the PDF or Share via WhatsApp. DigiLocker: log in with Aadhaar OTP, search Ration Card in Issued Documents, pull the state-issued PDF (works for Delhi, Maharashtra, Karnataka, Andhra Pradesh, Telangana, Kerala). State portal: log into your state's PDS portal, go to Print Ration Card, save the PDF. All three routes are free.

**What is the income limit for a ration card in 2026?**

Income limits are state-notified and vary widely. Delhi raised the Priority Household limit to Rs 2.50 lakh per year on 13 July 2026. Uttar Pradesh caps rural income at Rs 2 lakh and urban at Rs 3 lakh. Madhya Pradesh caps BPL at Rs 10,000 per year for the state slab. Bihar does not publish a rupee ceiling and uses NFSA priority scoring instead. Check your state page for the exact figure and the effective date.

**How to add a new family member to a ration card?**

Log into your state's PDS portal, go to Add Member, enter the new member's Aadhaar number and relationship to the head of family, upload the supporting document (birth certificate for a newborn, marriage certificate for a spouse, Aadhaar for a joining elderly parent), and submit. The addition is verified by the district office within 15 to 30 days, and Aadhaar e-KYC of the added member is triggered automatically. The service is free in most states.

**What documents are required for a new ration card?**

Aadhaar of every household member, one address proof (voter ID, electricity bill, rent agreement, or municipal water bill), a family group photograph, and an income certificate from the tehsildar or SDM (or a self-declaration in states that allow it, like Bihar and Odisha). If applying under AAY, add the applicable criteria proof (widow certificate, disability certificate, senior citizen ID). Also add bank account number and IFSC for DBT-linked services that ride on the card.

**Is Aadhaar mandatory for a ration card in 2026?**

Yes, Aadhaar e-KYC of every listed member above age 5 is mandatory in 2026, with three narrow exemptions. Children under age 5 (Aadhaar is optional at this age). Elderly whose fingerprint biometrics fail can use iris scan or OTP fallback on the ePoS. State-notified vulnerable groups (transgender persons, homeless in some states) can use alternative identity pending Aadhaar enrolment. Missed-deadline households face suspension until e-KYC is completed at any FPS.

**What is Mera Ration 2.0 app and how do I use it?**

Mera Ration 2.0 is the official Ministry of Consumer Affairs mobile app for ration card management, available on Google Play Store and Apple App Store. It supports 13 regional languages, biometric-authenticated portable withdrawal at any of 5.3 lakh ONORC-integrated FPS, family management (add or remove member requests), digital card download, digital surrender, and transaction history. Log in with Aadhaar-mobile OTP to access your household card. The app is the recommended route for anyone travelling across states or looking to download the e-ration card without visiting a portal.

**What is One Nation One Ration Card and how does it work in 2026?**

One Nation One Ration Card (ONORC) is the portability layer that lets a beneficiary draw subsidised grain from any Fair Price Shop across India using the same card, regardless of the issuing state. Rolled out from August 2019 and completed with Assam onboarding in June 2022, ONORC crossed 100 crore transactions by early 2026, delivering roughly Rs 40,000 crore of subsidised grain to migrant workers. Portable withdrawal works through Aadhaar biometric authentication on the ePoS device at any ONORC-integrated FPS.

## Primary sources

- National Food Security Portal: nfsa.gov.in (state directory, e-KYC status, Know Your Ration Card)
- Ministry of Consumer Affairs, Food and Public Distribution: consumeraffairs.nic.in
- Mera Ration 2.0 FAQ (official): nfsa.gov.in/doc/FAQ_for_Mera_Ration_2.pdf
- PIB press briefings by Union Minister Pralhad Joshi, June 2026 (81.35 cr beneficiaries, 2.21 cr deletions, 3 cr fresh cards, 100 percent digitisation)
- Business Standard reporting on ration card cleanup and 2.21 crore ineligible-card deletions, 18 June 2026
- Union Cabinet decisions: PMGKAY extension till 31 December 2028 (29 November 2023, outlay Rs 11.80 lakh crore); fortified rice extension (9 October 2024, Rs 17,082 crore)
- Delhi Food Security (Amendment) Rules 2026, effective 13 July 2026 (income cap Rs 1.20 lakh to Rs 2.50 lakh)
- Consumer Helpline: 1915, consumerhelpline.gov.in
- All-India food and PDS helpline: 1967
`;

const FAQS = [
  {
    question: "How can I apply for a ration card online in 2026?",
    answer: "Apply on your state's Food and Civil Supplies portal, not on the national NFSA portal which only maintains a state directory. Register with a mobile number and OTP, fill the household details form with the Aadhaar of every listed member, upload income and address proof plus a family group photo, pay the application fee (Rs 0 to Rs 45 depending on state), and submit. The application is processed within 30 days under NFSA Section 14, though actual timelines run 15 to 60 days by district. If stuck beyond 30 days, escalate to the District Supply Officer.",
  },
  {
    question: "Who is eligible for a new ration card under NFSA in 2026?",
    answer: "Any Indian citizen household within the state's Priority Household inclusion criteria is eligible. Income limits are state-notified, with Delhi at Rs 2.50 lakh per year (raised from Rs 1.20 lakh on 13 July 2026), Uttar Pradesh at Rs 2 lakh rural and Rs 3 lakh urban, and Bihar using NFSA priority ranking instead of a rupee cap. Households with an income tax filer, a four-wheeler passenger vehicle in an adult member's name, or an existing ration card in any other state are ineligible under the exclusion criteria.",
  },
  {
    question: "How can I check my ration card status by Aadhaar number?",
    answer: "On nfsa.gov.in, use the Know Your Ration Card tool. Enter your Aadhaar number and the captcha, and the system returns the ration card number and issuing state if one exists in the NFSA database. For full application status (pending, under verification, approved, rejected), click through to the state portal and use the reference number or Aadhaar-linked mobile OTP flow.",
  },
  {
    question: "How do I download my ration card online in 2026?",
    answer: "Three routes work. Mera Ration 2.0 app: log in with Aadhaar OTP, select My Ration Card, tap Download to save the PDF or Share via WhatsApp. DigiLocker: log in with Aadhaar OTP, search Ration Card in Issued Documents, pull the state-issued PDF (works for Delhi, Maharashtra, Karnataka, Andhra Pradesh, Telangana, Kerala). State portal: log into your state's PDS portal, go to Print Ration Card, save the PDF. All three routes are free.",
  },
  {
    question: "What is the income limit for a ration card in 2026?",
    answer: "Income limits are state-notified and vary widely. Delhi raised the Priority Household limit to Rs 2.50 lakh per year on 13 July 2026. Uttar Pradesh caps rural income at Rs 2 lakh and urban at Rs 3 lakh. Madhya Pradesh caps BPL at Rs 10,000 per year for the state slab. Bihar does not publish a rupee ceiling and uses NFSA priority scoring instead. Check your state page for the exact figure and the effective date.",
  },
  {
    question: "How to add a new family member to a ration card?",
    answer: "Log into your state's PDS portal, go to Add Member, enter the new member's Aadhaar number and relationship to the head of family, upload the supporting document (birth certificate for a newborn, marriage certificate for a spouse, Aadhaar for a joining elderly parent), and submit. The addition is verified by the district office within 15 to 30 days, and Aadhaar e-KYC of the added member is triggered automatically. The service is free in most states.",
  },
  {
    question: "What documents are required for a new ration card?",
    answer: "Aadhaar of every household member, one address proof (voter ID, electricity bill, rent agreement, or municipal water bill), a family group photograph, and an income certificate from the tehsildar or SDM (or a self-declaration in states that allow it, like Bihar and Odisha). If applying under AAY, add the applicable criteria proof (widow certificate, disability certificate, senior citizen ID). Also add bank account number and IFSC for DBT-linked services that ride on the card.",
  },
  {
    question: "Is Aadhaar mandatory for a ration card in 2026?",
    answer: "Yes, Aadhaar e-KYC of every listed member above age 5 is mandatory in 2026, with three narrow exemptions. Children under age 5 (Aadhaar is optional at this age). Elderly whose fingerprint biometrics fail can use iris scan or OTP fallback on the ePoS. State-notified vulnerable groups (transgender persons, homeless in some states) can use alternative identity pending Aadhaar enrolment. Missed-deadline households face suspension until e-KYC is completed at any FPS.",
  },
  {
    question: "What is Mera Ration 2.0 app and how do I use it?",
    answer: "Mera Ration 2.0 is the official Ministry of Consumer Affairs mobile app for ration card management, available on Google Play Store and Apple App Store. It supports 13 regional languages, biometric-authenticated portable withdrawal at any of 5.3 lakh ONORC-integrated FPS, family management (add or remove member requests), digital card download, digital surrender, and transaction history. Log in with Aadhaar-mobile OTP to access your household card. The app is the recommended route for anyone travelling across states or looking to download the e-ration card without visiting a portal.",
  },
  {
    question: "What is One Nation One Ration Card and how does it work in 2026?",
    answer: "One Nation One Ration Card (ONORC) is the portability layer that lets a beneficiary draw subsidised grain from any Fair Price Shop across India using the same card, regardless of the issuing state. Rolled out from August 2019 and completed with Assam onboarding in June 2022, ONORC crossed 100 crore transactions by early 2026, delivering roughly Rs 40,000 crore of subsidised grain to migrant workers. Portable withdrawal works through Aadhaar biometric authentication on the ePoS device at any ONORC-integrated FPS.",
  },
];

await createScheme({
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  content: CONTENT,
  faqs: FAQS,
  ministry: "Ministry of Consumer Affairs, Food and Public Distribution",
  launched_by: "Ministry of Consumer Affairs, Food and Public Distribution (NFSA 2013)",
  objective: "National Food Security Act 2013 (NFSA) covers 81.35 crore beneficiaries across 20.58 crore ration cards through 5.44 lakh Fair Price Shops. PMGKAY, extended to 31 December 2028, funds the free 5 kg per person per month. ONORC portability allows any beneficiary to draw ration at any FPS across India.",
  eligibility: [
    "Indian citizen household within the state's Priority Household inclusion criteria",
    "State-notified income limit (Delhi Rs 2.50 lakh per year raised 13 Jul 2026, UP Rs 2 lakh rural / Rs 3 lakh urban, Bihar uses NFSA priority ranking)",
    "No income tax filer in the household (four-wheeler owners and multi-state cardholders also excluded)",
    "Aadhaar e-KYC completed for every member above age 5 (children under 5 and biometric-failure elderly are exempt)",
  ],
  benefits: [
    "5 kg of grain per person per month free under PMGKAY (Priority Household)",
    "35 kg of grain per household per month free under PMGKAY (Antyodaya Anna Yojana / AAY)",
    "Fortified rice with iron, folic acid, vitamin B12 in states rolled out (Rs 17,082 crore Cabinet allocation 9 Oct 2024)",
    "Portable draw at any of 5.44 lakh Fair Price Shops across India via ONORC (100 crore transactions milestone crossed)",
    "Identity proof for downstream schemes including PMAY, PM-KISAN, e-Shram, and state welfare programmes",
    "Free digital card download via Mera Ration 2.0 app (13 regional languages, biometric-authenticated withdrawal)",
  ],
  documents: [
    "Aadhaar card of every household member (mandatory e-KYC above age 5)",
    "One address proof: voter ID, electricity bill, rent agreement, or municipal water bill",
    "Family group photograph (passport size, all members)",
    "Income certificate from tehsildar or SDM (or self-declaration in Bihar, Odisha, Assam)",
    "Bank account number and IFSC for DBT-linked schemes riding on the card",
    "Caste or disability or senior-citizen certificate if applying under AAY criteria",
  ],
  how_to_apply: "Apply on your state's Food and Civil Supplies portal (fcs.up.gov.in for UP, epds.bihar.gov.in for Bihar, nfs.delhigovt.nic.in for Delhi, rationmitra.nic.in for MP, mahafood.gov.in for Maharashtra). Register with a mobile number and OTP, fill the household details form with the Aadhaar of every listed member, upload income and address proof plus a family group photograph, pay the application fee (Rs 0 to Rs 45 depending on state), and submit. Track the acknowledgment number on the same portal. Processing is capped at 30 days under NFSA Section 14. If stuck beyond 30 days, escalate to the District Supply Officer, then the State Food Commission.",
  official_portal: "https://nfsa.gov.in",
  helpline_number: "1967",
  category: "food-security",
  state: "all-india",
  image: null,
  reading_time: "13 min read",
  quality_flag: ["freshness-moat", "primary-source-cited", "3000w-plus", "hub-page"],
});
