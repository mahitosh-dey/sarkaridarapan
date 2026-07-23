// Day 6 addition #13: Maharashtra ration card 2026 state page.
// Freshness moats: 18 lakh bogus ration cards cancelled in the 2025-26
// state cleanup drive (largest state cleanup on record), Aadhaar seeding
// at 87 percent statewide and 93 percent in Mumbai, e-ration card is now
// default with the physical card being phased out, and the state-unique
// APL Farmer carve-out for households in Vidarbha and Marathwada
// districts. Uses the Yellow, Saffron, White colour-coded card system
// that no other Indian state runs in the same way. Cross-links to the
// national hub, PMGKAY, ONORC, e-Shram, PM-JAY, and Majhi Ladki Bahin.

import { createScheme } from "./lib/create-scheme.mjs";

const SLUG = "ration-card-maharashtra-2026";

const TITLE = "Maharashtra Ration Card 2026: apply mahafood.gov.in guide";

const DESCRIPTION = "Maharashtra ration card 2026 apply on rcms.mahafood.gov.in: Yellow, Saffron, White colour cards, APL Farmer carve-out, 18 lakh bogus cards cancelled 2025-26.";

const CONTENT = `## Maharashtra ration card 2026 at a glance

The Maharashtra ration card is a household identity document issued by the Department of Food, Civil Supplies and Consumer Protection, Government of Maharashtra under the National Food Security Act 2013 (NFSA), and the state runs India's only three-tier colour-coded system of Yellow, Saffron, and White cards backed by strict income slabs. Applications are filed on the Ration Card Management System at rcms.mahafood.gov.in, and the parent department portal at mahafood.gov.in carries all circulars, notifications, and the fresh-card cleanup data.

The single biggest story for 2025-26 is the cancellation of roughly 18 lakh bogus ration cards during the state cleanup drive, per the Department of Food, Civil Supplies and Consumer Protection release on the mahafood portal ghost-card detection page. That figure is the largest state-level PDS cleanup on record in India, ahead of the 16.36 lakh cards cancelled by Uttar Pradesh in the same window and 15.5 lakh by Bihar. The trigger was Aadhaar deduplication running against the state's ePoS transaction data. Aadhaar seeding on the state's ration base now stands at 87 percent, with Mumbai at 93 percent, per the department's July 2026 status update.

Three other 2026 shifts change how a family should approach a new application. The state moved the e-ration card to default output, and the printed physical card is being phased out. Fresh applications get a digital-first card that families download from rcms.mahafood.gov.in, from the Mera Ration 2.0 app, or from DigiLocker. Second, the APL Farmer card, which is a Maharashtra-specific carve-out for households in the Vidarbha and Marathwada suicide-affected districts, was renewed in the 2026 budget cycle and covers about 14 farmer-distress districts. Third, the free-grain top-up under Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY) continues through 31 December 2028 per the Union Cabinet extension of 29 November 2023.

If your household falls in a yellow-card income bracket, apply as soon as the ration cleanup opens fresh slots. The 18 lakh vacated slots are being reissued in phases through FY26-27, and each district office is running its own re-verification calendar. Check the mahafood portal's fresh-issuance notice for your district before submitting.

## Who is eligible for a Maharashtra ration card in 2026

Any Indian citizen household resident in Maharashtra is eligible to apply for a ration card, and the state assigns the colour category based on the household's declared annual income against the state-notified slab.

Yellow card eligibility covers Below Poverty Line (BPL) households with a total annual family income up to Rs 15,000. The AAY (Antyodaya Anna Yojana) subset within the yellow band is criteria-based rather than income-only, covering widows with no earning male member, disabled persons with no support, elderly above age 60 with no household support, tribal households in scheduled areas, and homeless households identified by the gram panchayat or municipal ward office.

Saffron card eligibility covers Above Poverty Line (APL) households with a declared annual family income between Rs 15,000 and Rs 1 lakh. The saffron card is the largest slab in Maharashtra by beneficiary count and gets subsidised grain from the state overlay, though at a lower quantum than the yellow band. White card eligibility covers APL households with a declared annual family income above Rs 1 lakh. The white card does not draw subsidised NFSA grain, but it is a valid state-issued identity document and is used for address proof on multiple state services.

Exclusion criteria apply across all three colours. Any household with an income tax filer as an adult member is disqualified from the yellow and saffron bands. Any household with a four-wheeler passenger vehicle (car or SUV) registered in an adult member's name is capped at white. Any household already holding a ration card in a different state is barred until the previous card is surrendered, and the ONORC deduplication engine catches this within 48 hours of a duplicate submission.

Aadhaar e-KYC of every listed member above age 5 is mandatory in 2026 to keep the card active, and the state deadline for the current e-KYC cycle was 30 June 2026 per the mahafood circular of April 2026. Missed-deadline households risk suspension until e-KYC is completed at any ePoS-equipped Fair Price Shop.

## The Yellow, Saffron and White colour-coded card system explained

Maharashtra is the only Indian state that runs a three-tier colour-coded ration card system, and understanding which colour maps to your household is the first practical step before opening the application form.

The colour on the card is not decorative. It gates every downstream entitlement, from the monthly grain quantum to eligibility for the state's health insurance scheme cross-links.

| Colour | Income slab | Category | Grain quantum | Notes |
|---|---|---|---|---|
| Yellow | Up to Rs 15,000 per year | BPL / AAY | AAY 35 kg per household per month, PHH 5 kg per person per month, free under PMGKAY | Includes AAY subset for widows, disabled, elderly above 60, tribal, homeless |
| Saffron | Rs 15,000 to Rs 1 lakh per year | APL priority | State overlay subsidised grain at lower quantum than yellow | Largest slab by cardholder count |
| White | Above Rs 1 lakh per year | APL general | No NFSA grain entitlement | Valid state identity document, address proof, used for downstream state services |
| APL Farmer | Farm household in 14 suicide-affected districts | State carve-out | PDS access even above the general APL line | Vidarbha and Marathwada belt only |

The colour is assigned automatically by the RCMS system based on the declared income and the supporting income certificate. Applying for a lower colour (yellow when the family actually qualifies for saffron) is treated as a false declaration and triggers a re-verification. If the household's income changes after the card is issued, use the Colour Change or Category Change request on rcms.mahafood.gov.in with a fresh income certificate, and the card is reissued within 15 to 30 days.

## The APL Farmer card for Vidarbha and Marathwada districts

The APL Farmer ration card is a state-only category that Maharashtra runs for farm households in the Vidarbha and Marathwada regions, and it does not exist in any other Indian state's PDS. It was designed as a targeted safety net for the districts that have seen sustained farmer distress over the last two decades.

The scheme covers about 14 farmer-distress districts across the two regions, including Yavatmal, Amravati, Akola, Buldhana, Washim, Wardha, and Nagpur in Vidarbha, and Aurangabad (now Chhatrapati Sambhajinagar), Beed, Jalna, Latur, Osmanabad (now Dharashiv), Nanded, Parbhani, and Hingoli in Marathwada. Farm households in these districts get PDS access even when their declared income places them in the white card slab above Rs 1 lakh, on the argument that agricultural income in these districts is volatile enough that a rupee-only cut-off does not reflect real food security.

The APL Farmer card draws grain at a state-subsidised price that is lower than the open market rate but higher than the yellow-band price. Eligibility requires a valid 7/12 extract (satbara utara) showing the applicant's landholding, a residence proof in one of the notified districts, and Aadhaar e-KYC of every listed member. Applications go through the standard RCMS flow at rcms.mahafood.gov.in with the farmer category selected during category assignment.

The APL Farmer carve-out was renewed in the 2026 state budget cycle for a further three years, per the Finance Department budget circular of March 2026. If you are a farm household in any of the 14 notified districts and currently hold a white card, apply for a category change to APL Farmer through the same portal.

## 18 lakh bogus cards cancelled: what the 2025-26 cleanup drive means for you

The Department of Food, Civil Supplies and Consumer Protection cancelled roughly 18 lakh bogus and ghost ration cards during the 2025-26 cleanup drive, per the department release on the mahafood portal ghost-card detection page. This is the largest state-level PDS cleanup on record in India for a single audit cycle.

The 18 lakh deletions came from four categories. Deceased members whose names were never reported to the district PDS office and continued to draw grain on the household card. Households where an income tax return was filed by an adult member, disqualifying the entire household from the yellow and saffron slabs. Duplicate entries where the same Aadhaar was linked to two ration cards in Maharashtra and another state, caught by the ONORC deduplication engine. Ghost cards, which are entries with no matching Aadhaar, created before the mandatory Aadhaar seeding cycle began.

The audit ran on the ePoS transaction data cross-linked to the Aadhaar database, and every flagged household received a written notice with 15 days to respond before the card was cancelled. Households that failed to respond or failed re-verification saw the card go inactive on the ePoS device. Card cancellations are reversible if the household files a grievance on the mahafood portal with the supporting Aadhaar and income proofs within 60 days of cancellation.

For a family looking to apply for a fresh card in 2026, the 18 lakh vacated slots translate into a real reissuance window. The state has committed to reissuing the vacated slots in phases through FY26-27, with priority given to households that were denied a card between 2015 and 2024 due to the state PDS cap. Check the fresh-issuance calendar for your district on the mahafood portal before submitting, since some districts have already run their first reissuance batch and others are scheduled for later in 2026.

Aadhaar seeding on the state's ration base stands at 87 percent statewide and 93 percent in Mumbai as of July 2026, per the department's monthly seeding dashboard. Households that have not yet completed e-KYC should do so at the nearest ePoS-equipped FPS before applying, since the RCMS system now blocks fresh applications from households with any non-seeded member above age 5.

## Documents required for a new Maharashtra ration card

The documentation stack for a fresh Maharashtra ration card sits in three layers, and the department accepts scans of originals rather than notarised copies for most items.

Identity and address proofs are the first layer. Aadhaar card of every household member, with e-KYC completed for every member above age 5. One address proof from voter ID, electricity bill in the head of family's name, rent agreement with the landlord's signature, gas connection bill, or municipal water bill. Passport-size family group photograph with all listed members in a single frame. If the head of family does not hold an electricity or gas connection in their own name, a landlord affidavit works, and the RCMS system provides the standard format under the Downloads section.

Income and eligibility proofs are the second layer. Family annual income certificate from the tehsildar or the SDM office (Rs 25 fee, 15 to 30 days processing). Self-declaration on Rs 100 stamp paper is accepted only for the white card slab. Caste certificate if applying under an AAY reserved criterion. Disability certificate from a district civil surgeon if applying under the AAY disability criterion. Senior citizen ID if applying under the AAY elderly criterion. 7/12 extract if applying for the APL Farmer card.

Bank and mobile linkage is the third layer. Bank account number and IFSC code (any nationalised or scheduled commercial bank operating in Maharashtra). Aadhaar-seeded mobile number, since OTP verification is used at multiple points in the RCMS flow. The mobile number should be linked to the head of family's Aadhaar on the NPCI mapper for DBT-enabled cross-scheme applications (PM-KISAN, PMAY, Majhi Ladki Bahin).

Households in scheduled tribe areas or hilly talukas can substitute the tehsildar income certificate with a gram sabha resolution certifying the family's annual income, and RCMS accepts the substitute for the yellow and saffron slabs.

## How to apply for a Maharashtra ration card on rcms.mahafood.gov.in step by step

The RCMS online flow at rcms.mahafood.gov.in is the recommended route for a fresh Maharashtra ration card, since it takes about 30 to 45 days end-to-end against 60 to 90 days for the offline tehsil-office route.

1. Open rcms.mahafood.gov.in in a browser and click on "Public Login" or "New Ration Card Application". First-time applicants create a login with a mobile number and OTP.
2. Fill in the household head details: full name as per Aadhaar, father or spouse name, date of birth, gender, Aadhaar number, PAN if available, and residential address with district, taluka, and pincode.
3. Add every family member in the Household Composition section: Aadhaar number, relationship to head of family, date of birth, gender, and occupation. The RCMS system triggers Aadhaar e-KYC for every added member above age 5 through an OTP or biometric prompt.
4. Enter the annual family income from all sources in the Income Declaration section. The system assigns the card colour (Yellow, Saffron, White, or APL Farmer) automatically based on the declared figure and the district notification.
5. Upload all required documents: Aadhaar copies, address proof, income certificate, family group photograph, bank passbook first page, and any criteria-specific certificates. Every scan must be under 1 MB in PDF or JPEG format.
6. Pay the application fee of Rs 45 online through the payment gateway (UPI, debit card, or net banking). The fee is Rs 0 for AAY applications.
7. Review the entire application in the Preview section, click Submit, and download the acknowledgment slip with the application reference number (a 14-digit alphanumeric code starting with MH).
8. Track the application status on rcms.mahafood.gov.in using the reference number or the head-of-family Aadhaar-linked mobile. The application flows through auto-verification (2 to 5 days), field verification by the tehsil food inspector (7 to 21 days), and district office approval (5 to 15 days), after which the e-ration card is issued and available for download.

If any stage stalls beyond the stated window, escalate to the District Supply Officer through the Grievance section on the same portal, with the reference number and a screenshot of the current status.

## How to check Maharashtra ration card status by application number or Aadhaar

Status checks on the RCMS portal work through three pathways, and all three are free of cost.

By application reference number: open rcms.mahafood.gov.in, click on "Track Application Status", enter the 14-digit MH reference number and the captcha, and view the current stage (Received, Auto-Verification, Field Verification, District Approval, Card Issued, or Rejected). This is the fastest route and returns real-time data.

By Aadhaar number: on the same portal, use the "Know Your Ration Card" or "Search by Aadhaar" tool. Enter the head-of-family Aadhaar number and the captcha, and the system returns the ration card number, colour category, issuing tehsil, and the number of listed members if a card exists. If no card exists, the system returns a "no record found" message.

By mobile OTP: on the RCMS login page, enter the head-of-family Aadhaar-linked mobile number, verify the OTP, and view the household dashboard. The dashboard shows the card status, e-KYC compliance for every listed member, the last three PDS transactions with FPS name and quantity, and any pending action items.

If none of the three pathways return a result within 7 to 10 days of submission, the application may not yet be keyed into the RCMS system by the district office, or the reference number may have been mistyped. For applications pending beyond 45 days, file a written grievance on the portal's Grievance section, and the district office is required to respond within 15 days under the Maharashtra Right to Public Services Act 2015.

## How to download your Maharashtra e-ration card

The e-ration card is now the default output for Maharashtra fresh applications, and the printed physical card is being phased out in favour of the digital format. Three download routes work, all free of cost.

rcms.mahafood.gov.in: log into the portal with your Aadhaar-linked mobile OTP, go to the "Download Ration Card" or "Print e-Ration Card" section, and save the state-issued PDF. This is the legally issued document, and it prevails over any other digital copy if there is a discrepancy. The PDF carries a QR code that Fair Price Shops scan on the ePoS device.

Mera Ration 2.0 app: download the app from Google Play Store or Apple App Store, log in with your Aadhaar-mobile OTP, and select "My Ration Card". The app displays the household card with every listed member, and Download saves the PDF. The app supports 13 regional languages including Marathi, biometric-authenticated portable withdrawal at any ONORC-integrated FPS across India, family management requests, and transaction history.

DigiLocker: log into digilocker.gov.in with your Aadhaar-mobile OTP, search for "Ration Card" in the Issued Documents section, select Maharashtra as the issuing state, and pull the state-issued PDF. Maharashtra is fully onboarded to DigiLocker for ration cards, so this route works reliably.

The physical printed card is still accepted at every FPS in Maharashtra for households that already hold one, but the state has stopped issuing new physical cards from January 2025. Fresh applicants receive the e-ration card only. If you need a printed copy for elderly parents who prefer a physical document, print the RCMS PDF on plain A4 paper. The printout carries the same QR code and is accepted at every FPS.

Ignore any third-party app or website that charges money for e-ration card download. The service is free through all three official routes.

## Add or remove a family member on the Maharashtra ration card

Household composition changes are handled through the RCMS Add Member or Remove Member workflow, and both are free.

Adding a new member covers a newborn, a spouse joining after marriage, an elderly parent joining the household, or a returning family member (for example, a son coming back from another state's ration base). Log into rcms.mahafood.gov.in, go to the Add Member section, enter the new member's Aadhaar number and relationship to head of family, upload the supporting document (birth certificate for a newborn, marriage certificate for a spouse, Aadhaar and previous card surrender proof for a returning member), and submit. The addition is verified by the district office within 15 to 30 days, and Aadhaar e-KYC of the new member is triggered automatically through an OTP prompt.

Removing a member covers a deceased member, a daughter married out of the household, a member permanently relocating to another state, or a member whose Aadhaar is being moved to a different card. Log into the portal, go to Remove Member, select the member's name from the household list, choose the reason from the dropdown (deceased, married out, migrated, split household), upload supporting proof (death certificate, marriage certificate, or self-declaration for a split household), and submit. Removal is processed within 15 to 30 days, and the remaining household continues to draw the reduced per-person entitlement from the next month's cycle.

For a newborn addition, the department accepts the hospital-issued birth certificate immediately, and the municipal birth certificate can be submitted later as an update. Newborn additions in the yellow band trigger an automatic per-person grain quantum increase from the next PMGKAY cycle.

## Correction, surrender and transfer on the mahafood portal

Post-issuance corrections fall into four common scenarios, and all four are handled on rcms.mahafood.gov.in.

Name spelling or date-of-birth correction: log into the portal, go to Correction Application, upload the corrected supporting document (Aadhaar update proof, birth certificate, matric mark sheet), and submit. The correction is validated overnight and reflects on the card within 3 to 7 days. Fee is Rs 10.

Address change within the same district: log into the portal, go to Address Change, upload the new address proof (voter ID, electricity bill, rent agreement), and submit. The change is processed within 15 to 30 days by the tehsil office.

Card colour or category change (for example, from saffron to yellow when household income drops, or from white to APL Farmer for a household that has moved to a notified farm district): log into the portal, go to Category Change, upload the fresh income certificate or the 7/12 extract for the farmer category, and submit. The category change is verified by the district office within 15 to 30 days and the reissued card is downloadable from the portal.

Surrender or transfer: surrender is required when the entire household is moving out of Maharashtra permanently, or when household income has risen above the white card threshold and the family voluntarily exits the ration base. Log into the portal, go to Surrender Application, submit a self-declaration on Rs 100 stamp paper, and the card is cancelled within 15 days. Transfer to a different state is done through a fresh application at the new state's PDS portal, and the Maharashtra card is auto-cancelled once the new state's card is issued (the ONORC deduplication engine catches the duplicate within 48 hours).

All four operations are free except name correction, which carries a nominal Rs 10 fee. Ignore any private agent charging money for these services.

## Grievance and helplines: 1800-22-4950 and 1967

The Department of Food, Civil Supplies and Consumer Protection runs a two-level grievance redress mechanism, and every fresh applicant should note the contact numbers before submitting.

State-level helplines: 1800-22-4950 is the department toll-free number, staffed on working days from 10 AM to 6 PM in Marathi, Hindi, and English. 1967 is the state PDS helpline, staffed round the clock and integrated with the ePoS complaint routing system. Both numbers accept complaints on fresh application status, ePoS transaction disputes, dealer malpractice, and card cancellations.

Online grievance: use the Grievance section on rcms.mahafood.gov.in, enter the application reference number or the ration card number, describe the complaint, and upload any supporting document. The system generates a grievance ID, and the district office is required to respond within 15 days under the Maharashtra Right to Public Services Act 2015.

Escalation ladder. Step 1: file a written grievance on the portal, note the grievance ID, wait 15 days. Step 2: escalate to the District Supply Officer with a copy of the portal grievance, wait 15 days. Step 3: escalate to the State Food Commission, which has statutory power under NFSA Section 16 to direct the state government to act on the complaint. Step 4: file a Right to Information application with the DSO office asking for the status and the reason for the delay. RTI responses often unblock a stalled file within 30 days.

For dealer malpractice at a Fair Price Shop (short-weight grain, refusing to accept the ration card, demanding extra payment), report on the state helpline 1967 with the FPS code and the transaction date. The consumer helpline 1915 also handles FPS malpractice complaints at the national level.

## Related schemes for Maharashtra ration card holders

The Maharashtra ration card is not a standalone document. It is the identity anchor for a full stack of central and state welfare schemes, and every Maharashtra household holding an active card should map the cross-links to draw the full basket of benefits.

Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY) is the free-grain top-up that runs through 31 December 2028. Every yellow-band household with an active ration card draws 5 kg per person per month (PHH) or 35 kg per household per month (AAY) at zero cost. See the [PMGKAY guide](/sarkari-yojana/pradhan-mantri-garib-kalyan-anna-yojana-2026) for the full quantum and district rollout schedule.

One Nation One Ration Card (ONORC) is the portability layer that lets a Maharashtra card holder draw ration at any Fair Price Shop across India, and vice versa. See the [national ration card hub](/sarkari-yojana/ration-card-2026) for the 100 crore transactions milestone and the biometric withdrawal flow.

e-Shram is the unorganised worker registration, and holding a Maharashtra ration card speeds up the e-Shram enrolment because the ration card serves as address proof. See the [e-Shram card 2026 guide](/sarkari-yojana/e-shram-card-2026) for the linkage.

Ayushman Bharat PM-JAY provides Rs 5 lakh per family per year cashless hospitalisation cover, and the yellow-band ration card is one of the accepted eligibility proofs for the PM-JAY beneficiary list in Maharashtra. See the [PM-JAY guide](/sarkari-yojana/pradhan-mantri-jan-arogya-yojana-2026) for the enrolment flow.

Majhi Ladki Bahin Yojana is the Maharashtra state cash-transfer scheme that pays Rs 1,500 per month to eligible women aged 21 to 65 from households below the Rs 2.5 lakh annual income line, and a valid Maharashtra ration card is one of the accepted household-income proofs on the application form. See the [Majhi Ladki Bahin Yojana guide](/sarkari-yojana/majhi-ladki-bahin-yojana-2026) for the full eligibility and application flow.

Farm households in the notified Vidarbha and Marathwada districts should also check PM-KISAN, the state farm loan waiver notifications, and the state crop insurance overlays, since the APL Farmer ration card carries the 7/12 extract linkage that these schemes verify against.

## Frequently asked questions

**How to apply for Maharashtra ration card online in 2026?**

Apply on rcms.mahafood.gov.in. Register with a mobile number and OTP, fill the household head details and every member's Aadhaar in the Household Composition section, declare annual family income for automatic colour assignment (Yellow, Saffron, White, or APL Farmer), upload Aadhaar, address proof, income certificate, family group photograph, and bank passbook, pay the Rs 45 fee online, and submit. The application flows through auto-verification, field verification by the tehsil food inspector, and district office approval, with the e-ration card issued in 30 to 45 days. Track status on the same portal with the 14-digit MH reference number.

**What is the income limit for Yellow, Saffron and White ration cards in Maharashtra?**

Yellow card covers households with annual family income up to Rs 15,000 (BPL and AAY subset). Saffron card covers households with annual family income between Rs 15,000 and Rs 1 lakh (APL priority). White card covers households with annual family income above Rs 1 lakh (APL general, no NFSA grain but valid state ID). The APL Farmer card is a state carve-out for farm households in 14 Vidarbha and Marathwada districts and gives PDS access even above the general APL line.

**How to check Maharashtra ration card status on rcms.mahafood.gov.in?**

Three routes. By application reference number: click Track Application Status, enter the 14-digit MH reference number, and view the current stage. By Aadhaar: use the Know Your Ration Card or Search by Aadhaar tool with the head-of-family Aadhaar number. By mobile OTP: log into the portal with the Aadhaar-linked mobile, verify OTP, and view the household dashboard with card status, e-KYC compliance, and last three PDS transactions. If no result returns within 7 to 10 days of submission, file a written grievance on the Grievance section.

**How to download my Maharashtra e-ration card?**

Three free routes. rcms.mahafood.gov.in: log in with Aadhaar-mobile OTP, go to Download Ration Card, save the state-issued PDF (this is the legally issued document). Mera Ration 2.0 app: log in with Aadhaar OTP, select My Ration Card, tap Download to save the PDF. DigiLocker: log in with Aadhaar OTP, search Ration Card in Issued Documents, select Maharashtra, pull the state PDF. Fresh applicants receive the e-ration card only, since the state stopped issuing new physical cards from January 2025.

**What documents are needed for a new Maharashtra ration card?**

Aadhaar of every household member with e-KYC done for members above age 5, one address proof (voter ID, electricity bill, rent agreement, gas or water bill), family group photograph, family annual income certificate from the tehsildar or SDM (Rs 25 fee, 15 to 30 days), bank account number and IFSC, and any criteria-specific certificate (caste, disability, senior citizen ID for AAY, 7/12 extract for APL Farmer). Households in scheduled tribe areas can substitute the tehsildar income certificate with a gram sabha resolution.

**What is the difference between Yellow, Saffron and White ration cards in Maharashtra?**

Yellow is the BPL and AAY category (up to Rs 15,000 annual income) and draws the full PMGKAY entitlement free of cost. Saffron is the APL priority category (Rs 15,000 to Rs 1 lakh annual income) and draws state-overlay subsidised grain at a lower quantum than yellow. White is the APL general category (above Rs 1 lakh annual income) and does not draw NFSA grain, but is a valid state identity and address proof. The colour is auto-assigned by RCMS based on the declared income and the supporting certificate.

**What is the APL Farmer ration card in Maharashtra?**

The APL Farmer card is a Maharashtra-only category for farm households in 14 Vidarbha and Marathwada suicide-affected districts, including Yavatmal, Amravati, Akola, Buldhana, Washim, Wardha, Nagpur, Chhatrapati Sambhajinagar, Beed, Jalna, Latur, Dharashiv, Nanded, Parbhani, and Hingoli. It gives PDS access even to households above the general APL income line, on the argument that agricultural income in these districts is volatile enough that a rupee-only cut-off does not reflect real food security. Requires a valid 7/12 extract and residence proof in a notified district.

**How many bogus ration cards were cancelled in Maharashtra in 2025-26?**

Roughly 18 lakh bogus and ghost ration cards were cancelled in the Maharashtra 2025-26 state cleanup drive, per the Department of Food, Civil Supplies and Consumer Protection release on the mahafood portal ghost-card detection page. That figure is the largest state-level PDS cleanup on record in India, ahead of Uttar Pradesh at 16.36 lakh and Bihar at 15.5 lakh in the same window. Categories flagged were deceased-member entries, income tax filer households, multi-state duplicates caught by ONORC deduplication, and ghost cards with no matching Aadhaar. The vacated 18 lakh slots are being reissued in phases through FY26-27.

**How to add a new family member to my Maharashtra ration card?**

Log into rcms.mahafood.gov.in, go to Add Member, enter the new member's Aadhaar number and relationship to head of family, upload the supporting document (birth certificate for a newborn, marriage certificate for a spouse, Aadhaar plus previous card surrender proof for a returning member), and submit. The addition is verified by the district office within 15 to 30 days, and Aadhaar e-KYC of the new member is triggered automatically through an OTP or biometric prompt. Newborn additions in the yellow band trigger an automatic per-person grain quantum increase from the next PMGKAY cycle.

**What is the Maharashtra ration card helpline number?**

Two numbers work. 1800-22-4950 is the Department of Food, Civil Supplies and Consumer Protection toll-free helpline, staffed on working days from 10 AM to 6 PM in Marathi, Hindi, and English. 1967 is the state PDS helpline, staffed round the clock and integrated with the ePoS complaint routing system. Both numbers accept complaints on fresh application status, ePoS transaction disputes, dealer malpractice, and card cancellations. Online grievance is also filed on the Grievance section of rcms.mahafood.gov.in, and the district office is required to respond within 15 days under the Maharashtra Right to Public Services Act 2015.

## Primary sources

- Department of Food, Civil Supplies and Consumer Protection, Government of Maharashtra: mahafood.gov.in
- Ration Card Management System (RCMS): rcms.mahafood.gov.in
- Mahafood ghost-card detection and 2025-26 cleanup drive page (18 lakh bogus cards cancelled)
- Mera Ration 2.0 app FAQ (Ministry of Consumer Affairs): nfsa.gov.in/doc/FAQ_for_Mera_Ration_2.pdf
- National Food Security Portal: nfsa.gov.in
- Union Cabinet decision on PMGKAY extension till 31 December 2028 (29 November 2023, outlay Rs 11.80 lakh crore)
- Maharashtra Right to Public Services Act 2015 (grievance response window)
- Department state helpline: 1800-22-4950
- State PDS helpline: 1967
- Consumer helpline: 1915, consumerhelpline.gov.in
`;

const FAQS = [
  {
    question: "How to apply for Maharashtra ration card online in 2026?",
    answer: "Apply on rcms.mahafood.gov.in. Register with a mobile number and OTP, fill the household head details and every member's Aadhaar in the Household Composition section, declare annual family income for automatic colour assignment (Yellow, Saffron, White, or APL Farmer), upload Aadhaar, address proof, income certificate, family group photograph, and bank passbook, pay the Rs 45 fee online, and submit. The application flows through auto-verification, field verification by the tehsil food inspector, and district office approval, with the e-ration card issued in 30 to 45 days. Track status on the same portal with the 14-digit MH reference number.",
  },
  {
    question: "What is the income limit for Yellow, Saffron and White ration cards in Maharashtra?",
    answer: "Yellow card covers households with annual family income up to Rs 15,000 (BPL and AAY subset). Saffron card covers households with annual family income between Rs 15,000 and Rs 1 lakh (APL priority). White card covers households with annual family income above Rs 1 lakh (APL general, no NFSA grain but valid state ID). The APL Farmer card is a state carve-out for farm households in 14 Vidarbha and Marathwada districts and gives PDS access even above the general APL line.",
  },
  {
    question: "How to check Maharashtra ration card status on rcms.mahafood.gov.in?",
    answer: "Three routes. By application reference number: click Track Application Status, enter the 14-digit MH reference number, and view the current stage. By Aadhaar: use the Know Your Ration Card or Search by Aadhaar tool with the head-of-family Aadhaar number. By mobile OTP: log into the portal with the Aadhaar-linked mobile, verify OTP, and view the household dashboard with card status, e-KYC compliance, and last three PDS transactions. If no result returns within 7 to 10 days of submission, file a written grievance on the Grievance section.",
  },
  {
    question: "How to download my Maharashtra e-ration card?",
    answer: "Three free routes. rcms.mahafood.gov.in: log in with Aadhaar-mobile OTP, go to Download Ration Card, save the state-issued PDF (this is the legally issued document). Mera Ration 2.0 app: log in with Aadhaar OTP, select My Ration Card, tap Download to save the PDF. DigiLocker: log in with Aadhaar OTP, search Ration Card in Issued Documents, select Maharashtra, pull the state PDF. Fresh applicants receive the e-ration card only, since the state stopped issuing new physical cards from January 2025.",
  },
  {
    question: "What documents are needed for a new Maharashtra ration card?",
    answer: "Aadhaar of every household member with e-KYC done for members above age 5, one address proof (voter ID, electricity bill, rent agreement, gas or water bill), family group photograph, family annual income certificate from the tehsildar or SDM (Rs 25 fee, 15 to 30 days), bank account number and IFSC, and any criteria-specific certificate (caste, disability, senior citizen ID for AAY, 7/12 extract for APL Farmer). Households in scheduled tribe areas can substitute the tehsildar income certificate with a gram sabha resolution.",
  },
  {
    question: "What is the difference between Yellow, Saffron and White ration cards in Maharashtra?",
    answer: "Yellow is the BPL and AAY category (up to Rs 15,000 annual income) and draws the full PMGKAY entitlement free of cost. Saffron is the APL priority category (Rs 15,000 to Rs 1 lakh annual income) and draws state-overlay subsidised grain at a lower quantum than yellow. White is the APL general category (above Rs 1 lakh annual income) and does not draw NFSA grain, but is a valid state identity and address proof. The colour is auto-assigned by RCMS based on the declared income and the supporting certificate.",
  },
  {
    question: "What is the APL Farmer ration card in Maharashtra?",
    answer: "The APL Farmer card is a Maharashtra-only category for farm households in 14 Vidarbha and Marathwada suicide-affected districts, including Yavatmal, Amravati, Akola, Buldhana, Washim, Wardha, Nagpur, Chhatrapati Sambhajinagar, Beed, Jalna, Latur, Dharashiv, Nanded, Parbhani, and Hingoli. It gives PDS access even to households above the general APL income line, on the argument that agricultural income in these districts is volatile enough that a rupee-only cut-off does not reflect real food security. Requires a valid 7/12 extract and residence proof in a notified district.",
  },
  {
    question: "How many bogus ration cards were cancelled in Maharashtra in 2025-26?",
    answer: "Roughly 18 lakh bogus and ghost ration cards were cancelled in the Maharashtra 2025-26 state cleanup drive, per the Department of Food, Civil Supplies and Consumer Protection release on the mahafood portal ghost-card detection page. That figure is the largest state-level PDS cleanup on record in India, ahead of Uttar Pradesh at 16.36 lakh and Bihar at 15.5 lakh in the same window. Categories flagged were deceased-member entries, income tax filer households, multi-state duplicates caught by ONORC deduplication, and ghost cards with no matching Aadhaar. The vacated 18 lakh slots are being reissued in phases through FY26-27.",
  },
  {
    question: "How to add a new family member to my Maharashtra ration card?",
    answer: "Log into rcms.mahafood.gov.in, go to Add Member, enter the new member's Aadhaar number and relationship to head of family, upload the supporting document (birth certificate for a newborn, marriage certificate for a spouse, Aadhaar plus previous card surrender proof for a returning member), and submit. The addition is verified by the district office within 15 to 30 days, and Aadhaar e-KYC of the new member is triggered automatically through an OTP or biometric prompt. Newborn additions in the yellow band trigger an automatic per-person grain quantum increase from the next PMGKAY cycle.",
  },
  {
    question: "What is the Maharashtra ration card helpline number?",
    answer: "Two numbers work. 1800-22-4950 is the Department of Food, Civil Supplies and Consumer Protection toll-free helpline, staffed on working days from 10 AM to 6 PM in Marathi, Hindi, and English. 1967 is the state PDS helpline, staffed round the clock and integrated with the ePoS complaint routing system. Both numbers accept complaints on fresh application status, ePoS transaction disputes, dealer malpractice, and card cancellations. Online grievance is also filed on the Grievance section of rcms.mahafood.gov.in, and the district office is required to respond within 15 days under the Maharashtra Right to Public Services Act 2015.",
  },
];

await createScheme({
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  content: CONTENT,
  faqs: FAQS,
  ministry: "Department of Food, Civil Supplies and Consumer Protection, Government of Maharashtra",
  launched_by: "Department of Food, Civil Supplies and Consumer Protection, Government of Maharashtra",
  objective: "State-implemented NFSA 2013 in Maharashtra with a unique Yellow, Saffron, and White colour-coded card system based on annual family income, plus the APL Farmer state carve-out for farm households in 14 Vidarbha and Marathwada suicide-affected districts. Applications run on rcms.mahafood.gov.in and the e-ration card is now the default output.",
  eligibility: [
    "Indian citizen household resident in Maharashtra (Yellow up to Rs 15,000/year, Saffron Rs 15,000 to Rs 1 lakh, White above Rs 1 lakh)",
    "AAY subset criteria: widows, disabled with no earning member, elderly above 60 with no support, tribal in scheduled areas, homeless",
    "APL Farmer carve-out for farm households in 14 notified Vidarbha and Marathwada districts (7/12 extract required)",
    "No income tax filer in the household (disqualifies from Yellow and Saffron slabs)",
    "No four-wheeler passenger vehicle in an adult member's name (caps household at White)",
    "Aadhaar e-KYC completed for every listed member above age 5 (state deadline was 30 June 2026)",
  ],
  benefits: [
    "PHH households draw 5 kg of grain per person per month free under PMGKAY (yellow band)",
    "AAY households draw 35 kg of grain per household per month free under PMGKAY (yellow band, AAY subset)",
    "Saffron band draws state-overlay subsidised grain at a lower quantum than yellow",
    "APL Farmer card gives PDS access in 14 Vidarbha and Marathwada districts even above the general APL income line",
    "Portable withdrawal at any of India's 5.44 lakh Fair Price Shops via ONORC (Aadhaar biometric on the ePoS device)",
    "Valid state identity and address proof for downstream schemes (PMAY, PM-KISAN, PM-JAY, Majhi Ladki Bahin, e-Shram)",
    "Free e-ration card download from rcms.mahafood.gov.in, Mera Ration 2.0 app, or DigiLocker",
  ],
  documents: [
    "Aadhaar of every household member (mandatory e-KYC above age 5)",
    "One address proof: voter ID, electricity bill, rent agreement, gas connection bill, or municipal water bill",
    "Family group photograph (passport size, all listed members in a single frame)",
    "Family annual income certificate from the tehsildar or SDM office (Rs 25 fee, 15 to 30 days)",
    "Bank account number and IFSC (any nationalised or scheduled commercial bank operating in Maharashtra)",
    "7/12 extract (satbara utara) if applying for the APL Farmer category",
    "Caste, disability, or senior citizen certificate if applying under an AAY criterion",
  ],
  how_to_apply: "Open rcms.mahafood.gov.in and register with a mobile number and OTP. Fill the household head details (name as per Aadhaar, DOB, gender, Aadhaar number, address with district, taluka, pincode), add every family member's Aadhaar in the Household Composition section (triggers e-KYC OTP), declare annual family income for automatic colour assignment (Yellow, Saffron, White, or APL Farmer), upload Aadhaar copies, address proof, income certificate, family group photograph, and bank passbook (each scan under 1 MB), pay the Rs 45 fee online (Rs 0 for AAY), and submit. Download the acknowledgment with the 14-digit MH reference number. Track through auto-verification (2 to 5 days), field verification by the tehsil food inspector (7 to 21 days), and district office approval (5 to 15 days). The e-ration card is issued in 30 to 45 days end-to-end.",
  official_portal: "https://mahafood.gov.in",
  helpline_number: "1800-22-4950",
  category: "food-security",
  state: "maharashtra",
  image: null,
  reading_time: "11 min read",
  quality_flag: ["freshness-moat", "primary-source-cited", "3000w-plus", "state-page"],
});
