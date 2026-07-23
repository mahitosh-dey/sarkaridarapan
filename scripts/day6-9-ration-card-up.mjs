// Day 6 addition #9: Uttar Pradesh ration card 2026 state page (NEW scheme).
// Freshness moats: largest PDS in India with 3.62 crore ration cards
// covering 14.61 crore beneficiaries (Ministry of Consumer Affairs data,
// May 2026), UP e-KYC deadline of 30 June 2026 with late-completion still
// allowed at any ePoS-equipped FPS, both fcs.up.gov.in and nfsa.up.gov.in
// portal routes documented, PHH income cap of Rs 2 lakh rural and Rs 3 lakh
// urban with 5-acre irrigated-land cap and 100 sq m residential plot cap,
// and PMGKAY free 5 kg per person per month layered on top of the state
// distribution. Cross-links to PMGKAY, ONORC, e-Shram, PM-JAY, PM-KISAN.

import { createScheme } from "./lib/create-scheme.mjs";

const SLUG = "ration-card-uttar-pradesh-2026";

const TITLE = "UP ration card 2026: fcs.up.gov.in apply, e-KYC, list check";

const DESCRIPTION = "UP ration card 2026 apply guide on fcs.up.gov.in with 3.62 cr cards, 14.61 cr beneficiaries, PHH Rs 2 lakh rural/Rs 3 lakh urban limit, e-KYC, download steps.";

const CONTENT = `## Uttar Pradesh ration card 2026 at a glance

The Uttar Pradesh ration card is the household identity document issued by the state Department of Food and Civil Supplies that lets a family draw subsidised or free wheat, rice and coarse grain from any Fair Price Shop (FPS) across the state under the National Food Security Act 2013 (NFSA). The application flow lives on fcs.up.gov.in, and the NFSA-side beneficiary dashboard runs on nfsa.up.gov.in. Both portals are official and both work, but the main application entry point is fcs.up.gov.in.

Uttar Pradesh runs the largest Public Distribution System (PDS) in India. The state has 3.62 crore ration cards covering 14.61 crore beneficiaries as of May 2026, per Ministry of Consumer Affairs data. That is more beneficiaries than any other state, and roughly 18 percent of the entire NFSA population of India draws its monthly grain from a UP Fair Price Shop.

The two active ration card slabs in UP are Priority Household (PHH) and Antyodaya Anna Yojana (AAY). The legacy APL and BPL nomenclature is being phased into the PHH and NPHH (Non-Priority Household) categories as households complete Aadhaar e-KYC and the state updates the database. PHH is the main slab most applicants qualify for, and AAY is the poorest-of-poor slab with criteria-based inclusion rather than income-only.

Income limits are Rs 2 lakh per year for rural households and Rs 3 lakh per year for urban households, notified by the state Department of Food and Civil Supplies. The rural cap also requires that the household holds no more than 5 acres of irrigated land. The urban cap requires that the household holds a residential plot smaller than 100 square metres or a commercial plot smaller than 80 square metres.

Grain quantum works on the standard NFSA scale. PHH households receive 5 kg of grain per person per month, distributed free under Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY) which the Union Cabinet extended through 31 December 2028 on 29 November 2023. AAY households receive 35 kg of grain per household per month regardless of family size, also free under PMGKAY. The wheat-rice mix varies by district and is set by the state office each quarter.

If you are landing here to apply for a new card, correct an existing one, add a family member, or download the e-ration card, this page covers each of those flows on fcs.up.gov.in step by step with the exact document list, the 30 June 2026 e-KYC deadline note, and the state and national helpline numbers.

## Who is eligible for a UP ration card in 2026

Eligibility for a UP ration card is set jointly by the National Food Security Act 2013 and the state Department of Food and Civil Supplies notification, using an inclusion and exclusion criteria framework.

Any Indian citizen household resident in Uttar Pradesh is eligible to apply, provided the household income and asset checks pass. Rural households need annual income under Rs 2 lakh, and urban households need annual income under Rs 3 lakh. The rural asset check adds a cap of 5 acres of irrigated land, and the urban asset check adds a cap of 100 square metres for a residential plot or 80 square metres for a commercial plot.

Exclusion criteria disqualify a household regardless of income. If any adult member of the household files an income tax return, the household is not eligible for PHH. If any adult member owns a four-wheeler passenger vehicle registered in their name, the household is not eligible. If the household holds an existing ration card in any other state, the UP application is auto-flagged by the One Nation One Ration Card (ONORC) deduplication engine and rejected until the earlier card is surrendered.

AAY has a separate inclusion criteria overlay on top of the PHH filter. Widows with no earning member, disabled persons with no earning member, elderly above 60 with no support, tribal households in scheduled areas, and destitute households identified by the gram panchayat or urban local body qualify for AAY. The AAY quota is finite and district-allocated, so applications are ranked by criteria strength.

Aadhaar of every household member above age 5 is mandatory. Children under 5 are exempt. Elderly whose fingerprint biometrics fail can use iris scan or OTP fallback on the ePoS device at the FPS. State-notified vulnerable groups can use alternative identity proof pending Aadhaar enrolment.

The head of family for a UP ration card must be the eldest woman in the household aged 18 or above, per NFSA Section 13. This is a statutory requirement, not a state preference, and it applies to every new card issued after 2013. If the eldest woman is not available (deceased, permanently absent), the next senior woman becomes the head, and only if no adult woman is present does the eldest male member become the head of family.

## Types of ration cards offered by UP

The Uttar Pradesh Department of Food and Civil Supplies issues two active ration card categories in 2026, plus a residual legacy category still visible in older household records.

Priority Household (PHH) is the main NFSA slab and covers the bulk of UP ration card holders. Eligibility is income and asset based (rural under Rs 2 lakh with 5-acre irrigated-land cap, urban under Rs 3 lakh with 100 sq m plot cap). PHH households receive 5 kg of grain per person per month free under PMGKAY. This is the slab most first-time applicants qualify for.

Antyodaya Anna Yojana (AAY) is the poorest-of-poor slab. Eligibility is criteria based rather than pure income (widows, disabled, elderly with no support, tribals in scheduled areas, destitute households identified by the local body). AAY households receive 35 kg of grain per household per month, free under PMGKAY, regardless of family size. The AAY card is coloured differently from the PHH card on the state portal to make FPS-side identification easier.

Non-Priority Household (NPHH), the newer category replacing legacy APL, is on the UP database but is not entitled to subsidised NFSA grain. NPHH households can still access non-food PDS services (kerosene where the state runs it) and can request an upgrade to PHH if their household income drops below the state cap. NPHH is not issued as a fresh card in 2026; instead, households previously holding an APL card are being reclassified to NPHH as they complete e-KYC.

Legacy APL and BPL nomenclature is being phased out through the ongoing e-KYC drive. If your existing card still shows APL or BPL, it remains valid at the FPS for now, but the state is progressively replacing the label with PHH or NPHH on renewal. There is no additional application needed for the reclassification; it happens automatically as part of the e-KYC verification cycle at the FPS.

The AAY card cannot be applied for directly on fcs.up.gov.in with a plain income declaration. AAY inclusion requires local body verification (gram panchayat resolution for rural, urban local body for urban) plus the applicable criteria certificate (widow certificate, disability certificate, senior citizen identification). File the AAY application through the tehsildar office rather than the online portal for a cleaner processing path.

## Documents required and the UP e-KYC deadline

The UP ration card documentation stack has three layers, and the e-KYC layer is the most common failure point for households applying or renewing in 2026.

Identity and address proofs are the base layer. Aadhaar card of every household member above age 5. One address proof from voter ID, electricity bill in the head of family's name, rent agreement with landlord signature, or the municipal water bill. Passport-size family group photograph with every listed member visible. If the head of family does not have a Voter ID or an electricity connection in her name, a landlord affidavit or a village pradhan certificate works.

Income and eligibility proofs are the second layer. Family annual income certificate from the tehsildar or SDM (Rs 50 fee, 15 to 30 days processing). Caste certificate if applying for a state-reserved AAY quota. Disability certificate from the district disability office if applying under the AAY-disability criterion. Widow certificate from the tehsildar if applying under the AAY-widow criterion.

Bank and mobile linkage is the third layer. Bank account number and IFSC (any nationalised or scheduled commercial bank operating in UP). Mobile number Aadhaar-seeded on the NPCI mapper so that DBT-enabled schemes riding on the ration card as identity proof (PM-KISAN farmer linkage, PMAY housing verification) receive the OTP correctly.

The Uttar Pradesh e-KYC deadline was 30 June 2026, per the state Department of Food and Civil Supplies notification. Households that missed the deadline face suspension of the card until e-KYC is completed. The good news is that late-completion is still allowed at any ePoS-equipped Fair Price Shop across the state, free of cost. Take the family Aadhaars to the FPS during working hours, ask the dealer to run e-KYC on the ePoS device for each listed member, and the household is reactivated within 48 hours on the state database. If a household member's fingerprint fails, the ePoS supports iris scan and OTP fallback.

Three narrow exemptions from Aadhaar e-KYC apply in UP. Children under age 5 do not need Aadhaar for ration card enrolment. Elderly with biometric failure can use iris or OTP. State-notified vulnerable groups (transgender persons, homeless documented by an urban local body) can use alternative identity proof pending Aadhaar enrolment.

## How to apply for a UP ration card on fcs.up.gov.in step by step

The fastest online route is the fcs.up.gov.in portal. The flow has eight steps and the acknowledgment is generated in one sitting if the documents are ready.

Step 1: visit fcs.up.gov.in and click the "Public Login" or "Downloadable Forms" section. First-time applicants need to register with a valid mobile number, verify OTP, and set a portal password. Existing users log in with the mobile-password combination.

Step 2: select "Apply for New Ration Card" from the citizen services menu. The system asks whether the card type is Rural or Urban and then loads the relevant form based on the selection.

Step 3: fill the household head details. Head of family name (must be the eldest woman above 18 per NFSA Section 13), father or spouse name, date of birth, Aadhaar number, permanent residential address, district, tehsil, block, gram panchayat or ward, and mobile number for OTP-linked notifications.

Step 4: add each family member one at a time. Full name, relationship to head of family, date of birth, Aadhaar number (mandatory above age 5), and occupation if adult. The system triggers an Aadhaar-based demographic match check for each member and flags any mismatch immediately for correction.

Step 5: upload documents. Head of family Aadhaar (front and back scan), address proof (voter ID or electricity bill or rent agreement), income certificate from tehsildar or SDM, family group photograph with every listed member, and bank account first-page scan. File size limit is typically 2 MB per document.

Step 6: preview the entire application, correct any errors in the household composition or the document uploads, and submit. The portal generates an application reference number (format is a 15-digit alphanumeric string starting with UP) which is used for all subsequent status checks.

Step 7: pay the application fee. The UP application fee is Rs 20 for a new PHH card and Rs 0 for AAY. Pay online through UPI or net banking on the portal itself. Cash-based offline payment at the tehsil counter is also accepted but slows down processing.

Step 8: track the application. Log back into fcs.up.gov.in, go to "Application Status", enter the reference number, and view the current stage (Received, Under Verification, Field Inspection Scheduled, Approved, Rejected, Card Issued). Field inspection by the district Supply Inspector happens for a random 20 percent sample of applications and adds 15 to 30 days. If your application is not selected for field inspection, the card is typically issued within 30 days.

If you prefer offline, download the "New Ration Card Application Form" PDF from fcs.up.gov.in, fill it by hand, attach photocopies of the documents, and submit at the nearest tehsil office or the Food Inspector office. Offline processing runs 45 to 90 days.

## How to check UP ration card status by application number or Aadhaar

Status checks on fcs.up.gov.in support three pathways, and each returns a different level of detail.

By application reference number: visit fcs.up.gov.in, click "Application Status", enter the 15-digit reference number you received on submission, and view the current stage. This is the fastest and most complete status check. If the status has not moved in 30 days beyond "Under Verification", escalate to the District Supply Officer with a written grievance.

By Aadhaar number: on nfsa.gov.in, use the "Know Your Ration Card" tool. Enter your Aadhaar number and the captcha, and the system returns the ration card number and the issuing state if one exists on the NFSA database. If the response is "No record found", the card is either not yet issued or the Aadhaar is not seeded to the UP ration card. Wait 7 to 10 days after issuance for the NFSA database to sync.

By household head mobile number: on fcs.up.gov.in, log in with the Aadhaar-linked mobile number and verify OTP. The dashboard shows the household's card status, e-KYC compliance for each listed member, and the last three FPS transactions with grain drawn, price paid, and dealer name.

If none of the three pathways return a result and the application is more than 30 days old, file a formal grievance on fcs.up.gov.in under the Grievance section, call the state helpline 1967, or escalate to the CM helpline 1076 with the reference number and the district name.

## How to download your UP e-ration card via fcs.up.gov.in, Mera Ration 2.0 and DigiLocker

The e-ration card is legally valid at every Fair Price Shop across UP and across India (via ONORC). Three download routes work, and all three are free.

fcs.up.gov.in state portal (recommended for UP residents): log into fcs.up.gov.in with the head of family's mobile number and OTP, go to "Download e-Ration Card" or "Print Ration Card", enter the ration card number, and save the PDF. The state portal PDF is the legally issued document, so if any discrepancy shows up between routes, the fcs.up.gov.in PDF prevails.

Mera Ration 2.0 (recommended for portable withdrawal): download the Mera Ration 2.0 app from the Google Play Store or the Apple App Store. Log in with your Aadhaar number and verify OTP. Select "My Ration Card" from the main menu. The app displays the household card with all listed members and their grain entitlement. Tap Download to save the PDF, or tap Share to send via WhatsApp. Mera Ration 2.0 also supports biometric-authenticated portable withdrawal at any of the 5.3 lakh ONORC-integrated FPS across India, in 13 regional languages including Hindi.

DigiLocker: log into digilocker.gov.in with your Aadhaar-mobile OTP. Search for "Ration Card" in the Issued Documents section and select Uttar Pradesh. The state-issued PDF is pulled into your DigiLocker locker and can be shared as a verified digital document. UP is fully onboarded to DigiLocker for ration cards as of 2026.

All three downloads are free. Ignore any private app or website charging money for e-ration card download; they are not authorised by the Department of Food and Civil Supplies.

## UP PDS load: largest in India with 3.62 crore cards

Uttar Pradesh operates the largest Public Distribution System in India by a wide margin. The state has 3.62 crore ration cards covering 14.61 crore beneficiaries as of May 2026, per Ministry of Consumer Affairs data cited in the department's monthly statistical bulletin.

That volume works out to roughly 18 percent of the entire NFSA-covered population of India. Every fifth Indian NFSA beneficiary lives in Uttar Pradesh, and the state runs roughly 80,000 Fair Price Shops (FPS) to serve them, ranking first nationally in FPS count as well. The average UP FPS serves about 1,800 beneficiaries per month, which is above the national average of roughly 1,500.

The 14.61 crore beneficiary count reflects the post-cleanup state of the database after the 2025-26 ineligible-card deletion drive. Uttar Pradesh removed roughly 30 lakh ineligible cards during the drive, mostly deceased-member entries that were never reported, income-tax-filer households, and duplicate ONORC-flagged entries. The department has publicly stated that room now exists for roughly 40 lakh fresh card issuances over the next 12 months as the ministry allocation opens up.

Rural districts carry the bulk of the load. Eastern UP districts (Gorakhpur, Deoria, Kushinagar, Ballia, Azamgarh) and Bundelkhand (Chitrakoot, Banda, Mahoba, Hamirpur) run the highest per-capita PDS beneficiary ratios in the state, reflecting the poverty profile and the concentration of AAY households in those regions. Urban centres (Lucknow, Kanpur, Ghaziabad, Noida, Varanasi, Agra) run lower PDS ratios but still count several lakh beneficiaries each.

The scale matters for anyone applying: field-verification queues in high-load districts can add 15 to 30 days to the processing timeline, and FPS-level e-KYC completion drives happen in weekly batches. Check with your local FPS dealer for the next batch date if you are trying to complete e-KYC.

## Add or remove a family member on the UP ration card

Post-issuance member updates are one of the most common requests on fcs.up.gov.in, and both the add and remove flows are online.

Add a new member (newborn, spouse after marriage, elderly parent joining the household): log into fcs.up.gov.in with the head of family credentials, go to "Ration Card Modification" and select "Add Member". Enter the new member's Aadhaar number (or upload birth certificate if a newborn below age 5), full name, relationship to head of family, and date of birth. Upload the supporting document (birth certificate for a newborn, marriage certificate for a spouse, Aadhaar for a joining elderly parent). Submit. The addition is verified by the district office within 15 to 30 days, and the added member's Aadhaar e-KYC is triggered automatically. The service is free.

Remove a member (death, marriage-out of the household, permanent relocation): log into fcs.up.gov.in, go to "Ration Card Modification" and select "Remove Member". Select the member's name from the household list, choose the reason (deceased, married out, migrated permanently), and upload the supporting proof (death certificate for deceased, marriage certificate for married-out, self-declaration for migration). Submit. Removal is processed within 15 to 30 days, and the remaining household continues to draw the reduced per-person entitlement from the next distribution cycle.

Marriage-related transfers are a special case. A woman moving from her parents' UP household to her in-laws' UP household needs a "Remove Member" application on the parental card and an "Add Member" application on the marital card, filed as a pair. Both are free and typically clear together in 30 days. If the marriage crosses state boundaries (say, UP to Bihar), the ONORC deduplication engine handles the reconciliation automatically once the new state's Add Member application is processed.

Death of the head of family triggers a "Change of Head" application in addition to the member removal. Log in, go to "Change Head of Family", nominate the next eligible woman member (or the eldest male if no adult woman is present), upload the death certificate of the previous head, and submit. The state processes the head change within 15 to 30 days without any fee.

## Correction, surrender and transfer on the UP portal

Beyond member additions and removals, four other post-issuance operations are done on fcs.up.gov.in.

Name spelling or date-of-birth correction: log into fcs.up.gov.in, go to "Correction", upload the corrected supporting document (Aadhaar for name, birth certificate or matric marksheet for date of birth), and submit. The correction is validated overnight against the Aadhaar database and reflects on the card within 3 to 7 days. Fee is Rs 10 per correction.

Address change within UP: log in, go to "Address Change", upload the new address proof (voter ID at the new address, or electricity bill, or rent agreement, or municipal water bill), and submit. The state processes the change within 15 days if the new address is within the same district, and within 30 days if crossing districts. Cross-district address change may involve a fresh field verification at the new address.

Surrender the ration card: log in, go to "Surrender", submit a self-declaration explaining the reason (permanent migration out of state, income risen above PHH ceiling, duplicate card discovered), and submit. The card is cancelled within 15 days. Surrender is a mandatory step before applying for a fresh card in another state to avoid ONORC deduplication rejection.

Transfer the ration card to another UP district: this happens automatically as part of the address change flow if the new address is within UP. Do not surrender the card in the old district and reapply in the new one; that resets the entire NFSA queue. Just file the Address Change on fcs.up.gov.in and let the state migrate the household record.

All four operations are done free (except the Rs 10 name-correction fee). Ignore any private agent charging money for these operations on your behalf; they are not authorised by the department.

## Grievance and helplines: 1967, 1800-1800-150 and 1076 CM helpline

UP runs three parallel grievance channels for ration card and PDS complaints, and each is answered by a different desk.

1967 is the state food and civil supplies helpline, operational across all districts of UP. Use it for application status escalation, FPS malpractice (short weighing, refusing to distribute, overcharging), and e-KYC-related issues. Response is typically within 48 hours.

1800-1800-150 is the department toll-free number, useful for policy clarifications, eligibility questions, and appeal escalation when 1967 does not resolve the issue. It also handles scheme-integration questions (PM-KISAN linkage, PMAY overlap, ONORC portability queries).

1076 is the CM helpline, which functions as a cross-department escalation line for any UP government service including ration cards. Use it when both 1967 and 1800-1800-150 have not resolved the issue within 15 days, or when the complaint involves a district-level official refusing to process a legitimate application. CM helpline complaints get logged in the state grievance dashboard and typically resolve within 7 days.

Online grievance filing runs through fcs.up.gov.in under the "Grievance" section. Enter your application reference number or ration card number, describe the complaint, upload any supporting screenshots or documents, and submit. Keep the grievance reference number for follow-up.

The formal escalation ladder under NFSA Section 25 has two statutory levels. First level is the District Grievance Redressal Officer (DGRO), typically the District Supply Officer. Second level is the UP State Food Commission, which has statutory power under NFSA Section 16 to direct the state government to act on a legitimate complaint. File a grievance on the state portal first, wait 15 days, then escalate to the DGRO with a copy of the portal complaint, wait 15 more days, then escalate to the State Food Commission. If all three levels fail, a Right to Information (RTI) application with the DSO office asking for the file status and reason for delay often unblocks the case within 30 days of the RTI response.

## Related schemes for UP ration card holders

The UP ration card is the identity document that unlocks half a dozen other subsidy and welfare schemes. Cross-link and enrol in each one that applies to the household.

[Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY)](/sarkari-yojana/pradhan-mantri-garib-kalyan-anna-yojana) is the free 5 kg of grain per person per month layered on top of the paid NFSA distribution. PMGKAY was extended by the Union Cabinet through 31 December 2028 on 29 November 2023, with a Rs 11.80 lakh crore outlay. Every PHH card in UP draws its PMGKAY entitlement automatically at the FPS; no separate enrolment needed.

[One Nation One Ration Card (ONORC)](/sarkari-yojana/one-nation-one-ration-card) is the portability layer that lets a UP ration card holder draw grain at any ONORC-integrated FPS across India using biometric authentication. Rolled out fully by June 2022, ONORC crossed 100 crore transactions by early 2026. Useful for migrant workers from eastern UP and Bundelkhand living in Delhi, Mumbai, Bengaluru, Chennai, and Hyderabad who can now draw their monthly ration in the destination city without surrendering the UP card.

[e-Shram](/sarkari-yojana/e-shram) is the unorganised worker registry. If any adult in the household works as a labourer, domestic help, street vendor, farm hand, or in any other unorganised sector, they should register on eshram.gov.in. The e-Shram card unlocks Rs 2 lakh accidental death insurance and links to pensions and welfare schemes, and the ration card serves as a valid identity proof for the registration.

[Pradhan Mantri Jan Arogya Yojana (PM-JAY / Ayushman Bharat)](/sarkari-yojana/ayushman-bharat-pradhan-mantri-jan-arogya-yojana) provides Rs 5 lakh per family per year of secondary and tertiary hospitalisation cover. PHH ration card holders in UP are eligible for PM-JAY if their household appears in the SECC 2011 deprivation database. Check eligibility on pmjay.gov.in with the ration card number.

[Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)](/sarkari-yojana/pradhan-mantri-kisan-samman-nidhi) pays Rs 6,000 per year to eligible small and marginal farmer households in three instalments of Rs 2,000. The ration card is auto-linked to the PM-KISAN farmer verification pipeline in UP, so PM-KISAN eligibility is checked against the ration card income declaration during registration. Farmers holding both a ration card and a valid land record on the bhulekh.up.nic.in portal are the primary target group.

## Frequently asked questions

**How to apply for UP ration card online in 2026?**

Apply on fcs.up.gov.in, the official Uttar Pradesh Department of Food and Civil Supplies portal. Register with a mobile number and OTP, select Apply for New Ration Card, fill the household head details (head must be the eldest woman above 18 per NFSA Section 13), add every family member with their Aadhaar, upload address and income proof plus a family group photo, pay the Rs 20 application fee for PHH (Rs 0 for AAY), and submit. The system generates a 15-digit reference number for status tracking. Field verification adds 15 to 30 days for a random 20 percent sample; other applications typically clear within 30 days.

**What is the income limit for a UP ration card in 2026?**

The UP income limit is Rs 2 lakh per year for rural households and Rs 3 lakh per year for urban households, notified by the state Department of Food and Civil Supplies. The rural cap also requires that the household holds no more than 5 acres of irrigated land. The urban cap requires that the household holds a residential plot smaller than 100 square metres or a commercial plot smaller than 80 square metres. Households with any income tax filer or any adult member owning a four-wheeler passenger vehicle are excluded regardless of income.

**How to check UP ration card status on fcs.up.gov.in?**

Log into fcs.up.gov.in, click Application Status, enter the 15-digit reference number you received on submission, and view the current stage (Received, Under Verification, Field Inspection Scheduled, Approved, Rejected, Card Issued). Alternately, log in with the head of family's Aadhaar-linked mobile number and OTP to see the full dashboard including e-KYC compliance and the last three FPS transactions. If the status has not moved in 30 days beyond Under Verification, escalate to the District Supply Officer or call 1967, the state food helpline.

**How to download my UP e-ration card?**

Three routes work. fcs.up.gov.in: log in with mobile OTP, go to Download e-Ration Card, enter the ration card number, save the PDF. Mera Ration 2.0 app: log in with Aadhaar OTP, select My Ration Card, tap Download to save the PDF or Share via WhatsApp. DigiLocker: log in with Aadhaar OTP, search Ration Card in Issued Documents, select Uttar Pradesh, pull the state-issued PDF into your locker. All three routes are free. The fcs.up.gov.in PDF is the legally issued document, so it prevails if any discrepancy appears between routes.

**What documents are needed for a new UP ration card?**

Aadhaar of every household member above age 5, one address proof (voter ID, electricity bill in the head's name, rent agreement, or municipal water bill), a family group photograph with every listed member visible, an income certificate from the tehsildar or SDM (Rs 50 fee, 15 to 30 days), and a bank account first-page scan with IFSC. If applying under AAY, add the applicable criteria certificate (widow, disability, senior citizen, tribal, gram panchayat resolution for destitute). Digital scans up to 2 MB per document are accepted on fcs.up.gov.in.

**How many people are covered by the UP ration card system in 2026?**

Uttar Pradesh has 3.62 crore ration cards covering 14.61 crore beneficiaries as of May 2026, per Ministry of Consumer Affairs data. That is the largest PDS load in India, covering roughly 18 percent of the entire NFSA-covered population of the country. The state runs approximately 80,000 Fair Price Shops, ranking first nationally in FPS count as well. Rural districts in eastern UP (Gorakhpur, Deoria, Kushinagar, Ballia, Azamgarh) and Bundelkhand (Chitrakoot, Banda, Mahoba, Hamirpur) carry the highest per-capita PDS beneficiary ratios in the state.

**How to add a new family member to my UP ration card?**

Log into fcs.up.gov.in with head of family credentials, go to Ration Card Modification, select Add Member, and enter the new member's Aadhaar number (or upload birth certificate for a newborn), full name, relationship to head of family, and date of birth. Upload the supporting document (birth certificate for a newborn, marriage certificate for a spouse, Aadhaar for a joining elderly parent) and submit. The addition is verified by the district office within 15 to 30 days, and the added member's Aadhaar e-KYC is triggered automatically. The service is free of cost.

**What is the UP ration card helpline number?**

UP runs three parallel helplines. 1967 is the state food and civil supplies helpline for application status escalation, FPS malpractice complaints, and e-KYC issues (typical response within 48 hours). 1800-1800-150 is the department toll-free number for policy questions and appeal escalations. 1076 is the CM helpline used when both 1967 and 1800-1800-150 have not resolved the issue in 15 days. Online grievances can be filed on fcs.up.gov.in under the Grievance section with the application reference number.

**Is Aadhaar e-KYC mandatory for UP ration cards?**

Yes, Aadhaar e-KYC of every listed member above age 5 is mandatory for UP ration cards in 2026. The UP e-KYC deadline was 30 June 2026, but late completion is still allowed at any ePoS-equipped Fair Price Shop across the state, free of cost. Take the family Aadhaars to the FPS during working hours, ask the dealer to run e-KYC on the ePoS device for each listed member, and the household is reactivated within 48 hours. Three exemptions apply: children under 5, elderly with biometric failure (iris or OTP fallback), and state-notified vulnerable groups.

**How much grain do I get per person on a UP ration card?**

Priority Household (PHH) cardholders receive 5 kg of grain per person per month, distributed free under PMGKAY which the Union Cabinet extended through 31 December 2028 on 29 November 2023. Antyodaya Anna Yojana (AAY) households receive 35 kg of grain per household per month, also free under PMGKAY, regardless of family size. The wheat and rice mix varies by district and is set by the state each quarter. Fortified rice with iron, folic acid and vitamin B12 has been rolled out in UP under the Rs 17,082 crore Cabinet allocation of 9 October 2024.

## Primary sources

- Uttar Pradesh Department of Food and Civil Supplies: fcs.up.gov.in (application, status, download)
- NFSA Uttar Pradesh dashboard: nfsa.up.gov.in (beneficiary lookup, e-KYC status)
- Ministry of Consumer Affairs, Food and Public Distribution: consumeraffairs.nic.in (national PDS data, May 2026 statistics)
- National Food Security Portal: nfsa.gov.in (Know Your Ration Card tool, state directory)
- Mera Ration 2.0 FAQ (official): nfsa.gov.in/doc/FAQ_for_Mera_Ration_2.pdf
- Union Cabinet decisions: PMGKAY extension through 31 December 2028 (29 November 2023, outlay Rs 11.80 lakh crore); fortified rice extension (9 October 2024, Rs 17,082 crore)
- UP State Food helpline: 1967
- Department toll-free: 1800-1800-150
- UP CM helpline: 1076
- Consumer Helpline (all-India): 1915, consumerhelpline.gov.in
`;

const FAQS = [
  {
    question: "How to apply for UP ration card online in 2026?",
    answer: "Apply on fcs.up.gov.in, the official Uttar Pradesh Department of Food and Civil Supplies portal. Register with a mobile number and OTP, select Apply for New Ration Card, fill the household head details (head must be the eldest woman above 18 per NFSA Section 13), add every family member with their Aadhaar, upload address and income proof plus a family group photo, pay the Rs 20 application fee for PHH (Rs 0 for AAY), and submit. The system generates a 15-digit reference number for status tracking. Field verification adds 15 to 30 days for a random 20 percent sample; other applications typically clear within 30 days.",
  },
  {
    question: "What is the income limit for a UP ration card in 2026?",
    answer: "The UP income limit is Rs 2 lakh per year for rural households and Rs 3 lakh per year for urban households, notified by the state Department of Food and Civil Supplies. The rural cap also requires that the household holds no more than 5 acres of irrigated land. The urban cap requires that the household holds a residential plot smaller than 100 square metres or a commercial plot smaller than 80 square metres. Households with any income tax filer or any adult member owning a four-wheeler passenger vehicle are excluded regardless of income.",
  },
  {
    question: "How to check UP ration card status on fcs.up.gov.in?",
    answer: "Log into fcs.up.gov.in, click Application Status, enter the 15-digit reference number you received on submission, and view the current stage (Received, Under Verification, Field Inspection Scheduled, Approved, Rejected, Card Issued). Alternately, log in with the head of family's Aadhaar-linked mobile number and OTP to see the full dashboard including e-KYC compliance and the last three FPS transactions. If the status has not moved in 30 days beyond Under Verification, escalate to the District Supply Officer or call 1967, the state food helpline.",
  },
  {
    question: "How to download my UP e-ration card?",
    answer: "Three routes work. fcs.up.gov.in: log in with mobile OTP, go to Download e-Ration Card, enter the ration card number, save the PDF. Mera Ration 2.0 app: log in with Aadhaar OTP, select My Ration Card, tap Download to save the PDF or Share via WhatsApp. DigiLocker: log in with Aadhaar OTP, search Ration Card in Issued Documents, select Uttar Pradesh, pull the state-issued PDF into your locker. All three routes are free. The fcs.up.gov.in PDF is the legally issued document, so it prevails if any discrepancy appears between routes.",
  },
  {
    question: "What documents are needed for a new UP ration card?",
    answer: "Aadhaar of every household member above age 5, one address proof (voter ID, electricity bill in the head's name, rent agreement, or municipal water bill), a family group photograph with every listed member visible, an income certificate from the tehsildar or SDM (Rs 50 fee, 15 to 30 days), and a bank account first-page scan with IFSC. If applying under AAY, add the applicable criteria certificate (widow, disability, senior citizen, tribal, gram panchayat resolution for destitute). Digital scans up to 2 MB per document are accepted on fcs.up.gov.in.",
  },
  {
    question: "How many people are covered by the UP ration card system in 2026?",
    answer: "Uttar Pradesh has 3.62 crore ration cards covering 14.61 crore beneficiaries as of May 2026, per Ministry of Consumer Affairs data. That is the largest PDS load in India, covering roughly 18 percent of the entire NFSA-covered population of the country. The state runs approximately 80,000 Fair Price Shops, ranking first nationally in FPS count as well. Rural districts in eastern UP (Gorakhpur, Deoria, Kushinagar, Ballia, Azamgarh) and Bundelkhand (Chitrakoot, Banda, Mahoba, Hamirpur) carry the highest per-capita PDS beneficiary ratios in the state.",
  },
  {
    question: "How to add a new family member to my UP ration card?",
    answer: "Log into fcs.up.gov.in with head of family credentials, go to Ration Card Modification, select Add Member, and enter the new member's Aadhaar number (or upload birth certificate for a newborn), full name, relationship to head of family, and date of birth. Upload the supporting document (birth certificate for a newborn, marriage certificate for a spouse, Aadhaar for a joining elderly parent) and submit. The addition is verified by the district office within 15 to 30 days, and the added member's Aadhaar e-KYC is triggered automatically. The service is free of cost.",
  },
  {
    question: "What is the UP ration card helpline number?",
    answer: "UP runs three parallel helplines. 1967 is the state food and civil supplies helpline for application status escalation, FPS malpractice complaints, and e-KYC issues (typical response within 48 hours). 1800-1800-150 is the department toll-free number for policy questions and appeal escalations. 1076 is the CM helpline used when both 1967 and 1800-1800-150 have not resolved the issue in 15 days. Online grievances can be filed on fcs.up.gov.in under the Grievance section with the application reference number.",
  },
  {
    question: "Is Aadhaar e-KYC mandatory for UP ration cards?",
    answer: "Yes, Aadhaar e-KYC of every listed member above age 5 is mandatory for UP ration cards in 2026. The UP e-KYC deadline was 30 June 2026, but late completion is still allowed at any ePoS-equipped Fair Price Shop across the state, free of cost. Take the family Aadhaars to the FPS during working hours, ask the dealer to run e-KYC on the ePoS device for each listed member, and the household is reactivated within 48 hours. Three exemptions apply: children under 5, elderly with biometric failure (iris or OTP fallback), and state-notified vulnerable groups.",
  },
  {
    question: "How much grain do I get per person on a UP ration card?",
    answer: "Priority Household (PHH) cardholders receive 5 kg of grain per person per month, distributed free under PMGKAY which the Union Cabinet extended through 31 December 2028 on 29 November 2023. Antyodaya Anna Yojana (AAY) households receive 35 kg of grain per household per month, also free under PMGKAY, regardless of family size. The wheat and rice mix varies by district and is set by the state each quarter. Fortified rice with iron, folic acid and vitamin B12 has been rolled out in UP under the Rs 17,082 crore Cabinet allocation of 9 October 2024.",
  },
];

await createScheme({
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  content: CONTENT,
  faqs: FAQS,
  ministry: "Department of Food and Civil Supplies, Government of Uttar Pradesh",
  launched_by: "Department of Food and Civil Supplies, Government of Uttar Pradesh",
  objective: "State-implemented NFSA 2013 in Uttar Pradesh, largest PDS in India with 3.62 crore cards covering 14.61 crore beneficiaries as of May 2026 per Ministry of Consumer Affairs data. Delivers 5 kg grain per person per month free (PHH) or 35 kg per household per month free (AAY) under PMGKAY, through approximately 80,000 Fair Price Shops across the state.",
  eligibility: [
    "Indian citizen household resident in Uttar Pradesh",
    "Rural household annual income under Rs 2 lakh with no more than 5 acres of irrigated land",
    "Urban household annual income under Rs 3 lakh with residential plot under 100 sq m or commercial plot under 80 sq m",
    "No income tax filer in the household and no adult member owning a four-wheeler passenger vehicle",
    "Head of family must be the eldest woman above 18 per NFSA Section 13",
    "Aadhaar e-KYC completed for every listed member above age 5 (deadline 30 June 2026, late completion allowed at any ePoS-equipped FPS)",
  ],
  benefits: [
    "5 kg of grain per person per month free under PMGKAY (Priority Household)",
    "35 kg of grain per household per month free under PMGKAY (Antyodaya Anna Yojana / AAY)",
    "Fortified rice with iron, folic acid and vitamin B12 rolled out in UP under Rs 17,082 crore Cabinet allocation (9 Oct 2024)",
    "Portable withdrawal at any of 5.3 lakh ONORC-integrated FPS across India (100 crore transactions milestone crossed by early 2026)",
    "Free digital card download via fcs.up.gov.in, Mera Ration 2.0 app, and DigiLocker",
    "Identity proof for PM-JAY (Rs 5 lakh hospitalisation cover), PM-KISAN (Rs 6,000/year to eligible farmers), e-Shram registration, PMAY housing verification, and other UP state welfare schemes",
  ],
  documents: [
    "Aadhaar of every household member above age 5 (mandatory e-KYC)",
    "One address proof: voter ID, electricity bill in head's name, rent agreement, or municipal water bill",
    "Family group photograph (passport size, every listed member visible)",
    "Income certificate from tehsildar or SDM (Rs 50 fee, 15 to 30 days processing)",
    "Bank account first-page scan with IFSC (any nationalised or scheduled commercial bank in UP)",
    "Caste, disability, widow, or senior citizen certificate if applying under AAY criteria",
  ],
  how_to_apply: "Apply on fcs.up.gov.in, the official Uttar Pradesh Department of Food and Civil Supplies portal. Register with a mobile number and OTP, select Apply for New Ration Card, choose Rural or Urban, and fill the household head details (head must be the eldest woman above 18 per NFSA Section 13). Add every family member with Aadhaar and date of birth. Upload address proof, income certificate, family group photo, and bank first-page scan (each up to 2 MB). Pay the Rs 20 fee for PHH (Rs 0 for AAY) via UPI or net banking. Submit and note the 15-digit reference number for status tracking on fcs.up.gov.in. Processing is 30 days for most applications and 45 to 60 days if selected for field verification. If stuck beyond 30 days, call 1967 or escalate to the District Supply Officer.",
  official_portal: "https://fcs.up.gov.in",
  helpline_number: "1967",
  category: "food-security",
  state: "uttar-pradesh",
  image: null,
  reading_time: "11 min read",
  quality_flag: ["freshness-moat", "primary-source-cited", "3000w-plus", "state-page"],
});
