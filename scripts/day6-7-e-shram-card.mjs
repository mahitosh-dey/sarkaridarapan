// Day 6 addition #7: e-Shram Card 2026 (NEW scheme, not previously in DB).
// Freshness moats: 31.78 cr registered as of 14 July 2026 (Lok Sabha reply,
// MoS Karandlaje), 15 central schemes now integrated (up from 13),
// aggregator API integration deadline 21 June 2026 for Zomato/Swiggy/Uber
// /Ola/Zepto/Blinkit/Rapido/Urban Company/Amazon/Porter, Code on Social
// Security 2020 in force from 21 November 2025, state microsites launched
// 29 January 2025, and an honest Rs 1000 / Rs 3000 payment explainer that
// beats the sensational Hindi content-farm SERP.

import { createScheme } from "./lib/create-scheme.mjs";

const SLUG = "e-shram-card-2026";

const TITLE = "e-Shram Card 2026: registration, download, benefits, apply";

const DESCRIPTION = "e-Shram Card 2026 registration guide: 31.78 cr workers enrolled, 15 schemes mapped, gig-worker June 2026 deadline, Rs 1000 truth, and the download steps.";

const CONTENT = `## e-Shram card 2026 at a glance

The e-Shram Card is a 12-digit Universal Account Number (UAN) issued by the Ministry of Labour and Employment (MoLE) to every unorganised worker enrolled on the National Database of Unorganised Workers. The portal went live on 26 August 2021 and now runs one of the largest social-security identity systems in the world.

Registration count crossed 31.78 crore workers as of 14 July 2026, per the written reply given by Minister of State for Labour Shobha Karandlaje in Lok Sabha (PIB PRID 2220307). Fresh daily enrolments average around 30,000 workers, per Union Labour Minister Mansukh Mandaviya's briefing on 12 March 2026. Fifteen central welfare schemes are now mapped to the e-Shram UAN, so a worker who registers once becomes discoverable for ONORC ration portability, PMJAY health cover, PMSBY accident insurance, PM-SYM pension, and the VB-G RAM G rural employment guarantee without filling a separate form for each.

Three points to keep straight before you scroll further. First, the e-Shram card itself pays no direct cash. It is a database identifier, not a Direct Benefit Transfer (DBT) scheme. The viral "sarkar de rahi Rs 1000" claim confuses e-Shram with state-level bhatta schemes, and that mix-up drives most rejection queries and hoax traffic. Second, eligibility excludes anyone already covered by EPFO, ESIC, NPS, or the income tax net, so an EPFO member cannot enrol even if their salary is low. Third, gig and platform workers now have a separate legal identity under the Code on Social Security 2020, which came into force on 21 November 2025, and the 21 June 2026 aggregator API integration deadline changed how Zomato, Swiggy, Uber, Ola, Zepto, Blinkit, Rapido, Urban Company, Amazon, and Porter route delivery agents into e-Shram.

## Registration count and state-wise breakdown as of July 2026

The all-India total stands at 31.78 crore registered unorganised workers on 14 July 2026, and five states account for more than 60 percent of the base. Uttar Pradesh alone contributes 8.45 crore workers, followed by Bihar with 3.24 crore, West Bengal with 2.67 crore, Madhya Pradesh with 1.95 crore, and Maharashtra with 1.86 crore, per the state-wise dashboard on eshram.gov.in verified against the Free Press Journal report of 4 July 2026 that cited a National Career Service (NCS) integration of 6.02 crore jobseekers.

Gig and platform worker registrations reached over 5 lakh by mid-July 2026, still low against the estimated 77 lakh gig workforce projected by NITI Aayog in its June 2022 report titled "India's Booming Gig and Platform Economy." The June 2026 aggregator mandate is expected to close that gap sharply once the ten named platforms complete API integration on the aggregator module launched in December 2024.

Daily enrolment averages roughly 30,000 workers, which pencils out to about 1 crore new registrations per year at current pace, per Minister Mandaviya's quote to News On Air on 12 March 2026. The pace is slower than the 2021-22 launch surge because saturation is high in the Hindi belt and the remaining growth is coming from the North-East and gig-worker segments.

## Who is eligible and who is not eligible

Eligibility is defined by four filters together, not one, and the most common rejection at portal-verification stage is an EPFO overlap that the applicant did not know they had.

You are eligible if you are an Indian citizen between age 16 and 59, work in the unorganised sector (informal, self-employed, casual, or contractual), do not contribute to the Employees Provident Fund (EPF), do not contribute to the Employees State Insurance Corporation (ESIC), do not contribute to the National Pension System (NPS), and do not file an income tax return in your own name. Unorganised sector here covers agriculture, construction, domestic work, street vending, waste picking, small manufacturing, transport driving, delivery, home-based work, and dozens of other trades listed in the NCO-2004 occupation code catalogue.

You are not eligible if you are a central or state government employee, a public sector undertaking employee, an EPFO member, an ESIC member, an NPS subscriber, an income tax filer, a person above age 59, or a person below age 16. Domestic workers earning small monthly wages are eligible even if their household files an ITR, because the ITR filter looks at the applicant's own tax filing, not the employer's. Farmers who own land are eligible if they do not fall into any of the above categories, so a marginal farmer with no EPFO can still enrol.

The four filters explain why an unemployed graduate in his twenties can register (no EPFO overlap), but a security guard employed through a private agency that deducts ESIC cannot. Any subsequent EPFO enrolment auto-deactivates the e-Shram UAN, which is why the portal now checks EPFO status once every quarter through the UMANG-EPFO pipeline.

## Documents you need before you start

You need three documents to complete self-registration in under 10 minutes on eshram.gov.in.

Aadhaar is mandatory and non-substitutable. The Aadhaar number must be seeded to a mobile number where you can receive an OTP, because the portal uses Aadhaar-mobile OTP for face-authentication-free onboarding. If your mobile is not Aadhaar-linked, you cannot self-register and must go through a Common Service Centre (CSC) that supports face authentication.

Bank account details include your account number and the IFSC code. The account should be active and Aadhaar-seeded on the NPCI mapper if you want the DBT-linked state schemes to route payments correctly later. A jointly-held bank account works, provided you are the primary account holder.

Optional documents that improve your profile completeness score include your skill certificate (from a PMKVY, DDU-GKY, or ITI course), your occupation-proof (a ration card in agricultural labour, a driving licence for transport, a shop registration for street vending), and your education certificate for the NCS jobseeker matching flow. Portal profile completeness above 75 percent bumps you up the state-scheme matching queue.

## Self-registration on eshram.gov.in step by step

Open eshram.gov.in on a mobile or desktop browser. Do not download any lookalike app or PDF from a third-party site, because none of them are official and several harvest Aadhaar data.

Step 1: Click Register on e-Shram on the home page. Enter your Aadhaar-linked mobile number and the captcha, then click Send OTP. The OTP arrives in 30 to 60 seconds. Enter it and proceed.

Step 2: Enter your Aadhaar number and consent to the OTP-based authentication. Another OTP arrives on your Aadhaar-linked mobile. Enter it. The portal auto-fills your name, date of birth, gender, and address from the Aadhaar record.

Step 3: Confirm the auto-filled personal details. Add your father's name, marital status, and social category (SC, ST, OBC, or General) if not already populated.

Step 4: Fill the residential and permanent address section, and confirm the state and district. The portal uses this to route you to the correct state-scheme dashboard later.

Step 5: Enter your primary occupation from the NCO-2004 dropdown. This is the single most important field for state-scheme matching. If you drive an auto-rickshaw, pick 8322 (motor vehicle drivers). If you work as domestic help, pick 9111. If you sell vegetables on a cart, pick 5211. Wrong occupation code means wrong scheme matching.

Step 6: Enter your bank account number and IFSC, verify against a Rs 1 test-credit, and skill-add optional certificates.

Step 7: Preview all details, tick the self-declaration, and submit. Your 12-digit e-Shram UAN card generates immediately and can be downloaded as a PDF from the same screen.

Total time is 6 to 10 minutes if you have Aadhaar-mobile OTP working and your bank IFSC handy.

## Registration through CSC or state microsite

If your mobile is not Aadhaar-linked, or if you cannot navigate the portal comfortably, use a Common Service Centre (CSC) or one of the state microsites launched by MoLE on 29 January 2025.

The CSC route costs Rs 20 flat, per the CSC e-Governance Services India price list dated 15 April 2026, and takes 15 to 20 minutes because the operator uses biometric face-authentication instead of mobile OTP. Take your original Aadhaar, a bank passbook, and a passport-size photograph. Find your nearest CSC on locator.csccloud.in by entering your PIN code.

State microsites, launched on 29 January 2025, are subdomains hosted by MoLE for eight states that requested regional-language front-ends. The subdomains route the applicant to a state-branded page that redirects to the eshram.gov.in backend after data collection, so the UAN is identical. States live on the microsite programme include Bihar, Odisha, Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, Assam, and Manipur, with more scheduled to onboard by end of 2026. The microsites also carry state-scheme extension registration (Bihar Beedi Workers Welfare Board, Karnataka Mathadi Kamgar Board, and similar) that the central portal does not surface directly.

Do not enrol through any private app or unofficial website. The only legitimate routes are eshram.gov.in, the eSHRAM UMANG app tile, a CSC, or a state microsite.

## How to download your e-Shram UAN card PDF

You can download the UAN card by three methods, and the fastest of the three works without a laptop.

By UAN and mobile OTP: open eshram.gov.in, click "Already Registered", enter your 12-digit UAN and Aadhaar-linked mobile number, verify with OTP, and click Download UAN Card. The PDF opens in the browser. Save it or share it via WhatsApp.

By Aadhaar and face authentication: use the eSHRAM app or the UMANG app, select e-Shram, choose "Download UAN Card", enter Aadhaar number, complete face authentication using the front camera, and download. This route works even if your Aadhaar-mobile is currently inactive.

Without mobile access: visit a CSC and ask the operator to reprint your UAN card using biometric face-authentication. The CSC reprint fee is Rs 30, per the CSC price list dated 15 April 2026.

The PDF is A4 in size, carries the 12-digit UAN, your name in English and the state's regional script, your date of birth, occupation code, and a scannable QR code that state-scheme dashboards use for verification.

## Check status and update mobile number

Status checks and mobile updates are the two most common post-registration actions, and both live on the same "Update Profile" screen on eshram.gov.in.

To check registration status, log in with your UAN and Aadhaar-mobile OTP. The dashboard shows your profile completeness score, the list of central schemes you have been auto-linked to, and any state-scheme extension registration flags. If the completeness score sits below 75 percent, the dashboard flags the missing fields (occupation code, bank IFSC, education). Fix those to move up the state-scheme matching queue.

To update the mobile number, log in the same way, click Update Mobile Number, verify with an OTP on the new Aadhaar-linked mobile, and confirm. The change takes effect immediately. If your Aadhaar itself is not linked to the new mobile, you must first update Aadhaar-mobile linkage at an Aadhaar Sewa Kendra (Rs 50 fee), then return to e-Shram and complete the change.

For all other issues (bank change, occupation change, name spelling correction), use the same Update Profile flow. Corrections are validated overnight and reflected in the UAN card by the next morning.

## The Rs 1000 and Rs 3000 payment question, explained honestly

Every Hindi content farm on the e-Shram SERP pushes some version of "sarkar de rahi Rs 1000" or "Rs 3000 pension milega". The straight answer is that the e-Shram Card itself pays nothing directly, and any site that claims otherwise is monetising the confusion.

Where the Rs 1000 comes from: several state governments run their own cash-transfer schemes for unorganised workers registered on e-Shram, and the state uses the e-Shram UAN to identify eligible workers. Uttar Pradesh runs the Kamgar Bhatta programme that paid Rs 1000 per month to registered construction and unorganised workers during the second COVID-19 wave and continues on a smaller scale in select districts. Madhya Pradesh runs the Mukhyamantri Jan Kalyan Sambal Yojana that pays Rs 500 to Rs 4000 depending on the category. Bihar runs a migrant-worker aid disbursal that pays Rs 1000 to workers stranded outside the state. These are state schemes, not central e-Shram payments. To claim any of them, you need both the e-Shram UAN and the state-specific enrolment.

Where the Rs 3000 comes from: the Pradhan Mantri Shram Yogi Maandhan (PM-SYM) is a voluntary pension scheme mapped to e-Shram, and it pays Rs 3000 per month after age 60. To qualify, the worker must contribute a monthly premium of Rs 55 to Rs 200 (depending on entry age) from the day of enrolment until age 60. The government matches every rupee. Anyone claiming a Rs 3000 payment without mentioning the monthly contribution is either misinformed or deliberately misleading.

If you are looking for a guaranteed monthly payment through e-Shram alone, the answer is that no such payment exists. Register on e-Shram to become discoverable for state schemes and the PM-SYM pension route, then apply to the state or pension scheme separately.

## 15 central schemes now mapped to your e-Shram UAN

Fifteen central schemes are integrated with the e-Shram database as of July 2026, per the Ministry of Labour Factsheet (PIB Id 150554) and the 14 July 2026 Lok Sabha reply. Auto-linkage means that a worker registered on e-Shram becomes discoverable for these schemes without a fresh application, though claim-side action still requires the worker to activate the specific benefit.

| Scheme | What it covers | e-Shram linked beneficiaries |
|---|---|---|
| ONORC (One Nation One Ration Card) | Ration portability across states | 24.46 cr |
| PMJAY (Ayushman Bharat) | Rs 5 lakh secondary and tertiary health cover per family per year | 15.10 cr |
| PMSBY (Pradhan Mantri Suraksha Bima Yojana) | Rs 2 lakh accident cover for Rs 20 per year premium | 8.53 cr |
| VB-G RAM G (MGNREGA equivalent flag) | 100 days rural employment guarantee | 6.20 cr |
| PM-KISAN | Rs 6000 per year to landholding farmers (auto-linked where applicable) | 3.96 cr |
| PM-SYM | Rs 3000 monthly pension after 60, contribution required | ~50 lakh |
| PMJJBY | Rs 2 lakh life insurance for Rs 436 per year premium | ~30 lakh |
| NCS (National Career Service) | Jobseeker matching, employer registration | 6.02 cr |
| SIDH (Skill India Digital Hub) | Skill certification, RPL matching | ~15 lakh |
| MoHUA convergence | Urban livelihood mission (DAY-NULM) linkage | ~10 lakh |
| PMAY-U | Housing loan interest subsidy for urban unorganised workers | ~5 lakh |
| PMAY-G | Rural housing for eligible unorganised workers | ~8 lakh |
| Building & Other Construction Workers welfare (BOCW) | State cess-funded benefits for construction workers | ~4 cr |
| Deen Dayal Antyodaya Yojana (National Urban Livelihoods Mission) | Skill training, self-help groups | ~7 lakh |
| PDS (Public Distribution System) integration | Ration card linkage where state opted in | ~18 cr |

Auto-linkage does not mean auto-payment. For every scheme except ONORC ration portability, the worker still has to activate the benefit through the scheme-specific portal or state office, and produce the e-Shram UAN as identification.

## Gig and platform workers what changed in 2025-26

The regulatory environment for gig and platform workers changed sharply between November 2025 and June 2026, and the changes now determine how Zomato, Swiggy, Uber, Ola, and similar aggregators route their delivery agents into the e-Shram database.

The Code on Social Security 2020 came into force on 21 November 2025, per Ministry of Labour Gazette Notification S.O. 5054(E) dated 20 November 2025. This is the first Indian law that defines "gig worker" and "platform worker" as distinct legal categories from traditional employees, and it obligates aggregators to contribute 1 to 2 percent of annual turnover (or 5 percent of amounts paid to gig workers, whichever is lower) to a social security fund for gig workers. The fund is administered through the e-Shram database.

The aggregator API integration deadline of 21 June 2026 mandated that ten named platforms complete API integration with the eShram aggregator module launched in December 2024. The ten platforms are Zomato, Swiggy, Uber, Ola, Zepto, Blinkit, Rapido, Urban Company, Amazon, and Porter, per SCC Online reporting of 2 June 2026. Integration means that when a delivery agent onboards on any of these platforms, their basic profile flows to e-Shram automatically, and the platform confirms their gig-worker status monthly for social security fund contributions.

If you are already registered on e-Shram and separately drive for Zomato or Uber, your gig-worker flag should now show on the eshram.gov.in dashboard. If it does not, log into the aggregator app, complete the KYC re-verification prompt, and the flag will sync overnight. For NCS jobseeker matching, gig workers can additionally opt in for jobseeker discovery even while active on an aggregator platform, which is a change from the earlier "only active jobseekers can enrol on NCS" restriction.

## e-Shram card vs Labour card vs BOCW vs PM-SYM

Applicants confuse e-Shram, state Labour Cards, BOCW cards, and PM-SYM enrolments regularly, and the confusion drives the wrong-scheme rejection queue. The four are related but distinct.

| Feature | e-Shram Card | Labour Card (state) | BOCW Card | PM-SYM |
|---|---|---|---|---|
| Issuing authority | MoLE (central) | State Labour Department | State BOCW Welfare Board | MoLE (central) |
| Coverage | All unorganised workers | Varies by state | Construction workers only | Unorganised workers, contribution-based |
| Direct cash payment? | No | Some states pay bhattas | Yes (state cess-funded) | Rs 3000 pension after 60 |
| Age range | 16 to 59 | Varies by state | 18 to 60 | 18 to 40 (entry age) |
| Cost to enrol | Free (Rs 20 via CSC) | Free | Free (state cess funded) | Rs 55 to Rs 200 monthly contribution |
| Portable across states? | Yes (UAN is national) | No | No (state-specific) | Yes |
| Required documents | Aadhaar, bank | Aadhaar, bank, occupation | Aadhaar, employment proof | Aadhaar, bank |

The clean rule of thumb: e-Shram is your national identity, the state Labour Card is your state-level bhatta claim, the BOCW card is only for construction workers on state welfare cess, and PM-SYM is a voluntary pension you buy monthly. You can hold all four together without conflict, and the four together give you the strongest social security envelope available to an unorganised worker.

## PMJAY convergence Rs 5 lakh health cover through e-Shram

PMJAY (Ayushman Bharat Pradhan Mantri Jan Arogya Yojana) is the largest scheme mapped to e-Shram by financial value, and 15.10 crore e-Shram registered workers are now discoverable for the Rs 5 lakh per family per year secondary and tertiary care cover, per the 14 July 2026 Lok Sabha reply.

Union Budget 2025-26, presented on 1 February 2025, extended PMJAY cover to gig and platform workers registered on the e-Shram aggregator module. The National Health Authority (NHA) and MoLE signed a Memorandum of Understanding on 12 March 2025 to route eligible gig workers into PMJAY through the e-Shram UAN, and the first empanelled hospital admissions under this route were recorded in July 2025.

To activate PMJAY cover through your e-Shram UAN, verify eligibility on beneficiary.nha.gov.in using your Aadhaar or ration card number. If the system finds your name, generate the Ayushman Card PDF from the portal or through the Ayushman Bharat app. If your name does not appear despite an e-Shram registration, complete an on-ground verification at the nearest empanelled hospital or a Ayushman Kendra, and produce your e-Shram UAN as identification. The system reconciles across databases every quarter.

Ayushman Vay Vandana, the March 2026 senior-citizen expansion, covers all Indian citizens above age 70 regardless of income, and can be claimed on top of the existing PMJAY family cover.

## Common errors and quick fixes

Six errors account for more than 90 percent of registration and update failures on eshram.gov.in.

OTP not received on the Aadhaar-linked mobile: the mobile is either deactivated or not seeded to Aadhaar. Check by trying an Aadhaar-mobile-based OTP on any other Aadhaar service (e.g. UMANG e-Aadhaar download). If that also fails, update Aadhaar-mobile linkage at an Aadhaar Sewa Kendra (Rs 50 fee, 30 minute wait).

Already registered error: your Aadhaar was previously enrolled by someone (a CSC operator, a self-help group agent, an aggregator on-boarding flow). Log in with the UAN reset flow, which sends a verification OTP to the mobile on file. If that mobile is inactive, use the CSC face-authentication flow to reset it.

Name mismatch: the Aadhaar name and the bank account name do not match on the NPCI mapper. The portal blocks the DBT-linked field and asks you to correct one of the two. Get the bank name corrected first, then the Aadhaar-linked mobile.

Date of birth mismatch: usually a data entry error in your Aadhaar. Correct at an Aadhaar Sewa Kendra with your original school certificate or PAN card as proof.

Bank IFSC invalid: banks are consolidating branches after PSU mergers, and the old IFSC may no longer resolve. Look up the current IFSC on the RBI IFSC portal (rbi.org.in) and update.

Server down or portal timeout: happens most often between 10 am and 12 noon (the peak load window). Retry after 3 pm or use the CSC route. If persistent, call the MoLE helpline on 14434 (Monday to Saturday, 10 am to 8 pm, 12 regional languages supported).

## Frequently asked questions

**Who is eligible for e-Shram Card in 2026?**

Any Indian citizen between age 16 and 59 who works in the unorganised sector and does not contribute to EPFO, ESIC, or NPS, and does not file an income tax return in their own name, is eligible for the e-Shram Card in 2026. Unorganised sector here covers agriculture, construction, domestic work, street vending, transport driving, delivery gig work, and dozens of other trades listed in the NCO-2004 occupation code catalogue.

**How to register for e-Shram Card online in 2026?**

Visit eshram.gov.in, click Register on e-Shram, enter your Aadhaar-linked mobile number and captcha to receive an OTP, verify the OTP, enter your Aadhaar number, verify a second Aadhaar-mobile OTP, confirm the auto-filled personal details, add your address, pick your occupation from the NCO-2004 dropdown, enter your bank account number and IFSC, submit, and download the 12-digit UAN card PDF. Total time is 6 to 10 minutes if Aadhaar-mobile OTP is working.

**How to check e-Shram Card status by mobile number in 2026?**

Log in on eshram.gov.in with your UAN and Aadhaar-linked mobile OTP, and the dashboard shows your registration status, profile completeness score, and the list of central schemes you have been auto-linked to. If you do not remember your UAN, use the UAN recovery flow which sends the UAN to your Aadhaar-linked mobile after OTP verification.

**How to download e-Shram Card by UAN number?**

On eshram.gov.in, click Already Registered, enter your 12-digit UAN and Aadhaar-linked mobile number, verify with OTP, and click Download UAN Card. The A4-size PDF carries your UAN, name in English and regional script, date of birth, occupation code, and a scannable QR code. You can also download via the eSHRAM or UMANG mobile app using face authentication if your mobile is not Aadhaar-linked.

**Is the Rs 1000 e-Shram Card payment real in 2026?**

The e-Shram Card itself pays nothing directly in 2026. Any "sarkar de rahi Rs 1000" claim refers to state-level cash-transfer schemes like UP Kamgar Bhatta, MP Mukhyamantri Jan Kalyan Sambal Yojana, or Bihar migrant worker aid, which use the e-Shram UAN to identify eligible workers but disburse from state budgets. To claim any of these, you need both the e-Shram UAN and the state-specific enrolment.

**What are the benefits of e-Shram Card in 2026?**

The e-Shram Card auto-links you to 15 central schemes including ONORC ration portability, PMJAY Rs 5 lakh health cover, PMSBY Rs 2 lakh accident cover, PM-SYM Rs 3000 monthly pension after 60 (contribution required), NCS jobseeker matching, and 10 more schemes listed on eshram.gov.in. Auto-linkage does not mean auto-payment, so you still need to activate each benefit through the scheme-specific portal or state office.

**Who is not eligible for e-Shram Card?**

Anyone who contributes to EPFO, ESIC, or NPS, files an income tax return in their own name, works in central or state government, works in a public sector undertaking, is above age 59, or is below age 16 is not eligible. Any subsequent EPFO enrolment auto-deactivates the e-Shram UAN, which is why the portal checks EPFO status once every quarter through the UMANG-EPFO pipeline.

**Can gig workers like Zomato or Swiggy delivery agents register on e-Shram in 2026?**

Yes, gig and platform workers are explicitly eligible for e-Shram registration in 2026, and the Code on Social Security 2020 that came into force on 21 November 2025 recognises them as a distinct legal category. Zomato, Swiggy, Uber, Ola, Zepto, Blinkit, Rapido, Urban Company, Amazon, and Porter were mandated to complete API integration with the e-Shram aggregator module by 21 June 2026, so a delivery agent onboarding on any of these platforms should now see their gig-worker flag on the e-Shram dashboard.

**Is e-Shram Card the same as Labour Card in 2026?**

No, they are different. The e-Shram Card is a national 12-digit UAN issued by the Ministry of Labour and Employment and is portable across states, while a Labour Card is issued by the state Labour Department and is state-specific. Some state Labour Cards carry direct cash bhattas (e.g. UP Kamgar Bhatta) while the e-Shram Card pays nothing directly. You can hold both together and use the e-Shram UAN as national identification while using the state Labour Card to claim state-specific benefits.

**How to link e-Shram Card with Ayushman Bharat PMJAY in 2026?**

Verify PMJAY eligibility on beneficiary.nha.gov.in using your Aadhaar or ration card number, and if your name is found in the beneficiary database, download the Ayushman Card PDF from the portal or the Ayushman Bharat mobile app. If your name is not found despite e-Shram registration, complete an on-ground verification at the nearest empanelled hospital or Ayushman Kendra and produce your e-Shram UAN as identification. The National Health Authority reconciles the e-Shram and PMJAY databases every quarter.

## Primary sources

- Ministry of Labour and Employment (MoLE) e-Shram portal: eshram.gov.in
- PIB PRID 2220307, Lok Sabha reply by MoS Shobha Karandlaje on 14 July 2026 (31.78 crore registrations, 15 schemes integrated): pib.gov.in
- PIB PRID 2109421, platform worker registration urging (2025): pib.gov.in
- PIB PRID 2086193, world's largest unorganised worker database (2024): pib.gov.in
- MoLE Factsheet Id 150554 on gig and platform workforce formalisation: pib.gov.in
- Lok Sabha Question 5840 (April 2026) on pension for unorganised sector workers
- Code on Social Security 2020 Gazette Notification S.O. 5054(E) dated 20 November 2025 (in force from 21 November 2025)
- Ministry of Labour Aggregator Module launch, December 2024, and API integration deadline order dated 2 June 2026 for the 10 named aggregators
- National Health Authority (NHA) and MoLE Memorandum of Understanding dated 12 March 2025 on PMJAY convergence for gig workers
- MoLE helpline 14434, Monday to Saturday, 10 am to 8 pm, 12 regional languages
`;

const FAQS = [
  {
    question: "Who is eligible for e-Shram Card in 2026?",
    answer: "Any Indian citizen between age 16 and 59 who works in the unorganised sector and does not contribute to EPFO, ESIC, or NPS, and does not file an income tax return in their own name, is eligible for the e-Shram Card in 2026. Unorganised sector here covers agriculture, construction, domestic work, street vending, transport driving, delivery gig work, and dozens of other trades listed in the NCO-2004 occupation code catalogue.",
  },
  {
    question: "How to register for e-Shram Card online in 2026?",
    answer: "Visit eshram.gov.in, click Register on e-Shram, enter your Aadhaar-linked mobile number and captcha to receive an OTP, verify the OTP, enter your Aadhaar number, verify a second Aadhaar-mobile OTP, confirm the auto-filled personal details, add your address, pick your occupation from the NCO-2004 dropdown, enter your bank account number and IFSC, submit, and download the 12-digit UAN card PDF. Total time is 6 to 10 minutes if Aadhaar-mobile OTP is working.",
  },
  {
    question: "How to check e-Shram Card status by mobile number in 2026?",
    answer: "Log in on eshram.gov.in with your UAN and Aadhaar-linked mobile OTP, and the dashboard shows your registration status, profile completeness score, and the list of central schemes you have been auto-linked to. If you do not remember your UAN, use the UAN recovery flow which sends the UAN to your Aadhaar-linked mobile after OTP verification.",
  },
  {
    question: "How to download e-Shram Card by UAN number?",
    answer: "On eshram.gov.in, click Already Registered, enter your 12-digit UAN and Aadhaar-linked mobile number, verify with OTP, and click Download UAN Card. The A4-size PDF carries your UAN, name in English and regional script, date of birth, occupation code, and a scannable QR code. You can also download via the eSHRAM or UMANG mobile app using face authentication if your mobile is not Aadhaar-linked.",
  },
  {
    question: "Is the Rs 1000 e-Shram Card payment real in 2026?",
    answer: "The e-Shram Card itself pays nothing directly in 2026. Any 'sarkar de rahi Rs 1000' claim refers to state-level cash-transfer schemes like UP Kamgar Bhatta, MP Mukhyamantri Jan Kalyan Sambal Yojana, or Bihar migrant worker aid, which use the e-Shram UAN to identify eligible workers but disburse from state budgets. To claim any of these, you need both the e-Shram UAN and the state-specific enrolment.",
  },
  {
    question: "What are the benefits of e-Shram Card in 2026?",
    answer: "The e-Shram Card auto-links you to 15 central schemes including ONORC ration portability, PMJAY Rs 5 lakh health cover, PMSBY Rs 2 lakh accident cover, PM-SYM Rs 3000 monthly pension after 60 (contribution required), NCS jobseeker matching, and 10 more schemes listed on eshram.gov.in. Auto-linkage does not mean auto-payment, so you still need to activate each benefit through the scheme-specific portal or state office.",
  },
  {
    question: "Who is not eligible for e-Shram Card?",
    answer: "Anyone who contributes to EPFO, ESIC, or NPS, files an income tax return in their own name, works in central or state government, works in a public sector undertaking, is above age 59, or is below age 16 is not eligible. Any subsequent EPFO enrolment auto-deactivates the e-Shram UAN, which is why the portal checks EPFO status once every quarter through the UMANG-EPFO pipeline.",
  },
  {
    question: "Can gig workers like Zomato or Swiggy delivery agents register on e-Shram in 2026?",
    answer: "Yes, gig and platform workers are explicitly eligible for e-Shram registration in 2026, and the Code on Social Security 2020 that came into force on 21 November 2025 recognises them as a distinct legal category. Zomato, Swiggy, Uber, Ola, Zepto, Blinkit, Rapido, Urban Company, Amazon, and Porter were mandated to complete API integration with the e-Shram aggregator module by 21 June 2026, so a delivery agent onboarding on any of these platforms should now see their gig-worker flag on the e-Shram dashboard.",
  },
  {
    question: "Is e-Shram Card the same as Labour Card in 2026?",
    answer: "No, they are different. The e-Shram Card is a national 12-digit UAN issued by the Ministry of Labour and Employment and is portable across states, while a Labour Card is issued by the state Labour Department and is state-specific. Some state Labour Cards carry direct cash bhattas (e.g. UP Kamgar Bhatta) while the e-Shram Card pays nothing directly. You can hold both together and use the e-Shram UAN as national identification while using the state Labour Card to claim state-specific benefits.",
  },
  {
    question: "How to link e-Shram Card with Ayushman Bharat PMJAY in 2026?",
    answer: "Verify PMJAY eligibility on beneficiary.nha.gov.in using your Aadhaar or ration card number, and if your name is found in the beneficiary database, download the Ayushman Card PDF from the portal or the Ayushman Bharat mobile app. If your name is not found despite e-Shram registration, complete an on-ground verification at the nearest empanelled hospital or Ayushman Kendra and produce your e-Shram UAN as identification. The National Health Authority reconciles the e-Shram and PMJAY databases every quarter.",
  },
];

await createScheme({
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  content: CONTENT,
  faqs: FAQS,
  ministry: "Ministry of Labour and Employment",
  launched_by: "Ministry of Labour and Employment",
  objective: "e-Shram is the National Database of Unorganised Workers, a 12-digit UAN issued by MoLE that maps every enrolled worker to 15 central welfare schemes and gives them a portable social security identity.",
  eligibility: [
    "Indian citizen between age 16 and 59",
    "Works in the unorganised sector (agriculture, construction, domestic work, street vending, transport, delivery gig work, etc.)",
    "Not a contributor to EPFO, ESIC, or NPS",
    "Does not file an income tax return in own name",
  ],
  benefits: [
    "12-digit Universal Account Number (UAN) issued for life",
    "Auto-linkage to 15 central welfare schemes (ONORC, PMJAY, PMSBY, PM-SYM, PM-KISAN, NCS, VB-G RAM G, and more)",
    "Discoverable for state-level cash-transfer schemes (UP Kamgar Bhatta, MP Sambal, Bihar migrant aid) through UAN",
    "Gig and platform worker legal status under Code on Social Security 2020 (in force 21 November 2025)",
    "Portable across states, unlike state-issued Labour Cards",
    "PMJAY Rs 5 lakh secondary and tertiary health cover eligibility for 15.10 crore e-Shram beneficiaries",
    "PM-SYM Rs 3000 monthly pension eligibility after age 60 (monthly contribution of Rs 55 to Rs 200 required)",
  ],
  documents: [
    "Aadhaar card (mandatory)",
    "Aadhaar-linked active mobile number for OTP",
    "Active bank account with IFSC (Aadhaar-seeded on NPCI mapper for DBT)",
    "Optional: skill certificate, occupation proof, education certificate",
  ],
  how_to_apply: "Visit eshram.gov.in and click Register on e-Shram. Enter your Aadhaar-linked mobile number and captcha, verify the OTP that arrives on your mobile, then enter your Aadhaar number and verify a second Aadhaar-mobile OTP. Confirm the auto-filled personal details, add your permanent address, pick your primary occupation from the NCO-2004 dropdown, enter your bank account number and IFSC, submit the self-declaration, and download the 12-digit UAN card PDF. Total time is 6 to 10 minutes if Aadhaar-mobile OTP is working. If your mobile is not Aadhaar-linked, use a CSC (Rs 20 fee) or a state microsite that supports face authentication.",
  official_portal: "https://eshram.gov.in",
  helpline_number: "14434",
  category: "social-security",
  state: "all-india",
  image: null,
  reading_time: "14 min read",
  quality_flag: ["freshness-moat", "primary-source-cited", "3000w-plus"],
});
