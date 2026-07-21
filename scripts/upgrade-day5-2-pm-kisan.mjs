// Day 5 upgrade #2: PM Kisan Samman Nidhi.
// Freshness moats: 23rd instalment released 20 June 2026 (Rs 18,880 cr, 9.44 cr farmers,
// cumulative Rs 4.46 L cr), AgriStack Farmer ID mandatory in 14 states, state top-up
// stacking table (Namo Shetkari, CM-KISAN, Mukhyamantri Kisan Kalyan), Face Auth eKYC.

import { replaceScheme } from "./lib/replace-scheme.mjs";

const TITLE = "PM Kisan 2026: 23rd instalment, Farmer ID, state top-ups";

const DESCRIPTION = "PM Kisan 2026 guide: 23rd instalment Rs 18,880 cr released 20 June, cumulative Rs 4.46 lakh crore, AgriStack Farmer ID rule, state top-ups and eKYC steps.";

const CONTENT = `## What PM Kisan is in 2026

Pradhan Mantri Kisan Samman Nidhi (PM Kisan) is the central direct income support scheme that pays Rs 6,000 per year to eligible landholding farmer households in three equal instalments of Rs 2,000 each, transferred directly to the beneficiary's bank account through Aadhaar-linked DBT. The scheme launched on 24 February 2019 and is administered by the Ministry of Agriculture and Farmers Welfare through pmkisan.gov.in, state agriculture departments, and state land record systems.

The 23rd instalment was released on 20 June 2026 by the Prime Minister from Tarakeswar, Hooghly, West Bengal. Rs 18,880 crore was transferred to 9.44 crore farmers including 2.18 crore women farmers, per PIB PRID 2275744. Cumulative disbursement since scheme launch crossed Rs 4.46 lakh crore, making PM Kisan the largest direct cash-transfer scheme for farmers globally in absolute rupees.

Two things have changed in 2026 that most existing PM Kisan explainers do not reflect. AgriStack Farmer ID enrolment became mandatory for 23rd instalment eligibility in 14 states, and farmers without Farmer ID were blocked from the June disbursement in Gujarat, Uttar Pradesh, Maharashtra, and Madhya Pradesh in particular. State-level top-up schemes now stack on top of PM Kisan in several states, with Maharashtra and Madhya Pradesh farmers receiving Rs 12,000 per year total when the state top-up is included.

## The 23rd instalment: what actually happened on 20 June 2026

Released from a public rally in Tarakeswar, Hooghly district, West Bengal, marking the first time West Bengal became a formal release venue for a national PM Kisan disbursement. The choice signalled the political importance of getting West Bengal farmers onboarded to the scheme after years of state-level opposition.

Instalment size was Rs 2,000 per beneficiary. Total transfer was Rs 18,880 crore. Beneficiary count was 9.44 crore farmers, including 2.18 crore women farmers, per the PIB release. Cumulative disbursement since scheme inception rose to Rs 4.46 lakh crore.

The 20th, 21st, and 22nd instalments were released in August 2025, December 2025, and April 2026 respectively. The 24th instalment is expected in October or November 2026, following the roughly 4-month cadence.

Three specific data points from the 23rd instalment matter for beneficiaries checking status. Farmers whose eKYC was completed by 15 June 2026 received the instalment on 20 June. Farmers who completed eKYC between 15 June and 20 June received the instalment in a second batch within 5 to 10 working days. Farmers who had not completed eKYC or Farmer ID by 20 June were held back, and are eligible for the 24th instalment along with the pending 23rd payout once compliance is completed.

## AgriStack Farmer ID: mandatory in 14 states, blocked farmers in 2026

The AgriStack Farmer ID is a unique digital identifier linked to the farmer's land record, Aadhaar, and bank account. It replaces the earlier land-seeding process on pmkisan.gov.in with a centralised state agriculture department verification. Enrolment is through agristackfarmerregistry.org.in and state agriculture department centres.

14 states have made Farmer ID mandatory for 23rd instalment payout. Uttar Pradesh, Maharashtra, Bihar, Madhya Pradesh, Rajasthan, Gujarat, Karnataka, Andhra Pradesh, Telangana, Tamil Nadu, West Bengal, Odisha, Punjab, and Haryana. In these states, farmers without a valid Farmer ID linked to their PM Kisan beneficiary record were held back from the 23rd instalment.

Gujarat officially warned farmers on 2 May 2026 to complete Farmer ID enrolment before the 23rd instalment cutoff. Similar warnings went out from state agriculture departments in UP, Maharashtra, and MP. Farmers in the remaining states may still receive their instalment through the older land-seeding route, but Farmer ID will become mandatory nationwide during FY 2026-27.

To enrol in Farmer ID, visit agristackfarmerregistry.org.in with your Aadhaar, land record document (7/12 extract in Maharashtra, jamabandi in Punjab, khasra khatauni in UP and MP, patta in TN, RTC in Karnataka), and mobile linked to Aadhaar. Enrolment is free. Turnaround is typically 15 to 30 days depending on state processing speed.

## State-level top-ups: where PM Kisan stacks to Rs 10,000 to Rs 18,000 per year

Several states run parallel farmer income-support schemes that stack on top of PM Kisan for eligible farmers. This is a source of significant additional cash flow for smallholder farmers that most PM Kisan explainers miss.

| State | State scheme | State amount per year | Total with PM Kisan |
|---|---|---|---|
| Maharashtra | Namo Shetkari Maha Samman Nidhi | Rs 6,000 | Rs 12,000 |
| Madhya Pradesh | Mukhyamantri Kisan Kalyan | Rs 6,000 | Rs 12,000 |
| Odisha | CM-KISAN (small and marginal) | Rs 4,000 | Rs 10,000 |
| Odisha | CM-KISAN (landless agri labourer) | Rs 12,500 | Rs 12,500 standalone |
| Andhra Pradesh | YSR Rythu Bharosa (partial stacking) | Rs 7,500 | Up to Rs 13,500 |
| West Bengal | Krishak Bandhu (separate track) | Rs 10,000 | Separate, not layered |

For a Maharashtra farmer holding 2 acres of land, total annual cash inflow is Rs 6,000 PM Kisan plus Rs 6,000 Namo Shetkari, or Rs 12,000 per year in 3-plus-3 instalments. The Namo Shetkari 8th state instalment reached 90.34 lakh beneficiaries with Rs 1,774 crore, per Maharashtra agriculture department data.

For an Odisha small and marginal farmer, total is Rs 6,000 PM Kisan plus Rs 4,000 CM-KISAN or Rs 10,000 per year. Landless agri labourers in Odisha receive Rs 12,500 per year standalone under CM-KISAN even without land ownership, filling a gap that PM Kisan does not cover.

## Eight PM Kisan exclusion criteria with worked examples

PM Kisan targets landholding farmers, but has 8 specific exclusion criteria that disqualify otherwise-eligible farmers. Getting rejected on any of these grounds is a common source of grievance, and understanding the exclusions upfront helps.

Exclusion 1 is institutional landholders. If the land is held by a company, trust, cooperative, or any institution rather than an individual, PM Kisan does not apply. Fix: not applicable, since institutional holding is the exclusion.

Exclusion 2 is income tax payers in any of the preceding assessment years. If any member of the beneficiary household paid income tax in AY 2024-25 or AY 2025-26, the household is excluded. Fix: not applicable if IT filing is legitimate.

Exclusion 3 is serving or retired Central or State government employees. Excludes officers of Group A, B, and C in central and state governments. Multi Tasking Staff (MTS), Class IV, and Group D are exempted from this exclusion and remain eligible.

Exclusion 4 is constitutional post holders. Excludes former and present MPs, MLAs, state ministers, mayors, and district panchayat chairpersons.

Exclusion 5 is practising professionals such as doctors, engineers, lawyers, chartered accountants, and architects registered with their respective professional bodies. Even if they also own farm land, they are excluded on the professional-status ground.

Exclusion 6 is pensioners drawing Rs 10,000 or more per month. Note this is pension only, not combined income. A pensioner drawing Rs 8,000 per month plus rental income remains eligible if the pension component is under Rs 10,000.

Exclusion 7 is NRIs under the Income Tax Act definition. NRI status is determined by the number of days spent in India during the financial year.

Exclusion 8 is farmers where land ownership was transferred after 1 February 2019. This is to prevent gaming through backdated ownership transfers. Inheritance transfers are excepted, so a farmer who inherited land from a deceased parent after February 2019 remains eligible.

## Face Auth eKYC versus OTP eKYC versus CSC biometric

eKYC is mandatory for all PM Kisan beneficiaries. Three methods are available in July 2026.

OTP eKYC is the fastest but requires the beneficiary's Aadhaar to be linked to an active mobile number. Log in to pmkisan.gov.in, click Beneficiary Corner, enter Aadhaar, and complete the OTP received on Aadhaar-linked mobile. This takes 5 minutes.

Face Auth eKYC via the PMKISAN GoI Android app plus the Aadhaar Face RD app is the recommended path for beneficiaries whose mobile is not Aadhaar-linked. Download both apps from Google Play. Open PMKISAN GoI, enter Aadhaar and beneficiary details, then complete Aadhaar Face authentication using the Face RD app. This takes about 10 minutes and does not require Aadhaar-mobile linking.

CSC biometric eKYC is the fallback for beneficiaries who cannot complete either OTP or Face Auth. Visit the nearest Common Service Centre (CSC) with Aadhaar and complete fingerprint biometric verification. CSC charges a nominal Rs 15 to Rs 30 processing fee. Turnaround is same day.

For beneficiaries whose eKYC has been done but is showing as pending on pmkisan.gov.in, refresh the status after 24 to 48 hours. If it continues to show pending beyond 3 days, re-attempt eKYC through a different method (Face Auth after OTP, or CSC after Face Auth).

## Step-by-step: how to check PM Kisan status and beneficiary list

Log in to pmkisan.gov.in. Under the Farmers Corner section, three key options.

Beneficiary Status shows whether your Aadhaar-linked application has been approved, pending at state, or rejected. Enter Aadhaar, mobile, or bank account number to check. Turnaround for status update after eKYC completion is 3 to 5 working days.

Instalment Payment History shows the amount and date of each instalment credited to your bank account. If the latest instalment is shown as credited but has not landed in your account, check with your bank branch first, then file a grievance on pmkisan.gov.in.

Update Aadhaar and Farmer ID lets you correct Aadhaar mismatches and link Farmer ID to your beneficiary record. This is the section to use if you complete Farmer ID enrolment after the initial PM Kisan application.

For farmers without smartphone or internet, the same operations can be completed at any Common Service Centre (CSC) or through the state agriculture extension officer visit at the village level.

## Common problems that block PM Kisan payout

Ranked by frequency based on 2025-26 grievance data on pmkisan.gov.in.

Problem 1 is Aadhaar-name mismatch with land record. Payout is blocked if the Aadhaar name does not match the name on the state land record used for verification. Fix: update either Aadhaar or land record to match. Aadhaar update through Aadhaar Enrolment Centre takes 15 to 30 days. Land record correction through the tehsildar's office takes 30 to 60 days.

Problem 2 is eKYC not completed. This is the top reason for held-back instalments. Fix: complete eKYC using OTP, Face Auth, or CSC biometric as described earlier.

Problem 3 is bank account inactive or closed. If the Aadhaar-seeded bank account is closed or inactive, DBT bounces and the instalment does not credit. Fix: re-seed Aadhaar to your active bank account through NPCI BASE self-service or by visiting your bank branch.

Problem 4 is Farmer ID not enrolled in the 14 mandatory states. Fix: complete Farmer ID enrolment on agristackfarmerregistry.org.in.

Problem 5 is land record dispute or lack of self-declaration. If your land record shows joint ownership without a signed self-declaration form, payout is blocked. Fix: submit self-declaration form at the tehsildar's office or state agriculture office.

## Historical evolution: PM Kisan from 2019 to 2026

PM Kisan launched on 24 February 2019 as a Rs 6,000 per year direct income support scheme targeting all landholding farmer households, initially capped at 2 hectares. In June 2019, the Cabinet removed the 2-hectare cap, extending coverage to all landholding farmers regardless of holding size. The scheme was budgeted at Rs 75,000 crore per year at that time.

Between February 2019 and June 2026, PM Kisan disbursed 23 instalments totalling Rs 4.46 lakh crore to more than 10 crore farmers cumulatively. The first instalment in February 2019 reached 3.16 crore beneficiaries with Rs 6,300 crore, growing to 9.44 crore beneficiaries and Rs 18,880 crore in the 23rd instalment of June 2026.

Two major policy shifts happened during this window. eKYC became mandatory in 2021-22 to eliminate ghost beneficiaries and duplicate enrolment. AgriStack Farmer ID integration began in 2024-25 and became mandatory in 14 states by the 23rd instalment. These two shifts have narrowed the beneficiary base from roughly 11 crore during peak enrolment to 9.44 crore currently, a reduction attributed to eKYC and Farmer ID compliance gates.

Union Budget 2026-27 allocated Rs 60,000 crore for PM Kisan, unchanged from FY 2025-26. This aligns with the current beneficiary base at Rs 6,000 per year multiplied by roughly 10 crore beneficiaries.

## Instalment cadence and cumulative disbursement

PM Kisan follows a roughly 4-month cadence between instalments. Actual disbursement dates vary by 2 to 4 weeks depending on political and administrative calendar. Recent instalments below.

| Instalment | Release date | Amount released | Beneficiaries |
|---|---|---|---|
| 20th | 2 August 2025 | Rs 20,500 crore | 9.7 crore |
| 21st | December 2025 | Approx Rs 20,000 crore | Approx 9.5 crore |
| 22nd | April 2026 | Approx Rs 19,500 crore | Approx 9.5 crore |
| 23rd | 20 June 2026 | Rs 18,880 crore | 9.44 crore |
| 24th | Expected Oct-Nov 2026 | Awaiting | Awaiting |

The gradual reduction in disbursement amount and beneficiary count reflects continued cleaning of the beneficiary base through eKYC and Farmer ID compliance gates. This is a positive signal for scheme integrity even though headline numbers appear to be shrinking.

## Kisan Credit Card integration with PM Kisan

PM Kisan beneficiaries are eligible for pre-approved Kisan Credit Card (KCC) at their nearest bank branch. KCC provides short-term credit for cultivation, harvest, and post-harvest costs at 7 percent nominal interest, reduced to 4 percent effective after interest subvention and prompt-repayment incentive.

Since 2021, the government simplified the KCC application process for PM Kisan beneficiaries. A one-page form is available at any bank branch, and the KCC is issued within 14 days of application. The credit limit is fixed per acre based on the crop-specific scale of finance notified by NABARD.

For a small farmer with 2 acres of paddy in Punjab, the standard KCC scale is Rs 60,000 per acre for paddy, or Rs 1.2 lakh total credit limit. At 4 percent effective interest with prompt repayment, this is materially cheaper than any informal credit source. PM Kisan beneficiaries who have not availed KCC should visit their nearest bank branch with Aadhaar, PM Kisan beneficiary ID, and land record to apply.

Union Budget 2025-26 hiked the KCC collateral-free credit limit to Rs 5 lakh (from Rs 3 lakh earlier), which further expands the credit headroom for PM Kisan beneficiaries with larger landholdings.

## PMFBY overlay for PM Kisan beneficiaries

PM Kisan beneficiaries who take crop loans through KCC are automatically enrolled in Pradhan Mantri Fasal Bima Yojana (PMFBY), the central crop insurance scheme. Premium is heavily subsidised (2 percent for kharif, 1.5 percent for rabi, 5 percent for commercial and horticulture crops) with the balance paid by central and state governments.

For a non-loanee PM Kisan beneficiary, PMFBY enrolment is voluntary and can be done through the state agriculture department during the enrolment window (typically 45 days before the sowing season starts). Enrolment covers the entire cropped area against yield loss due to natural calamities, pest, and disease.

Insurance payout is triggered by yield-loss surveys conducted by state agriculture and revenue departments, or by satellite-based yield estimation in some states. Payout timeline is typically 60 to 90 days from the yield-loss survey conclusion.

## PMKISAN GoI mobile app features and usage

The PMKISAN GoI Android app is the recommended path for most beneficiary interactions in 2026. Key features are OTR-linked login (Aadhaar-based, no separate password), Beneficiary Status check, Instalment Payment History, Face Auth eKYC, Farmer ID linkage, self-declaration form submission, grievance filing with reference number tracking, and multilingual UI in 12 Indian languages.

Download from Google Play Store. iOS users can use the UMANG app which includes PM Kisan as a mini-app. The app is free and does not require ongoing internet after login for offline status viewing.

For beneficiaries who cannot use the app due to lack of smartphone, the same operations can be completed at any Common Service Centre (CSC), through the state agriculture extension officer visit at the village level, or by calling the PM Kisan helpline at 155261 or 011-24300606.

## Comparison with other central and state farmer income schemes

Multiple central and state schemes target farmer income support with different design choices. Understanding the layering helps beneficiaries maximise their entitlements.

PM Kisan (central) is universal for landholding farmers subject to 8 exclusions. Rs 6,000 per year in 3 instalments.

Namo Shetkari Maha Samman Nidhi (Maharashtra) is a state top-up on PM Kisan. Rs 6,000 per year in 3 instalments matching PM Kisan cadence. Combined Rs 12,000 for Maharashtra farmers.

Mukhyamantri Kisan Kalyan (Madhya Pradesh) is a state top-up on PM Kisan. Rs 6,000 per year in 3 instalments. Combined Rs 12,000 for MP farmers.

CM-KISAN (Odisha) is a state scheme layered on PM Kisan for small and marginal farmers (Rs 4,000 additional) and standalone for landless agri labourers (Rs 12,500 total).

Rythu Bharosa (Andhra Pradesh) is a state scheme currently under transition. Some AP farmers receive PM Kisan plus partial Rythu Bharosa layering, others receive only Rythu Bharosa.

Krishak Bandhu (West Bengal) is a state scheme parallel to PM Kisan at Rs 10,000 per year. West Bengal onboarded to PM Kisan in 2021, so most WB farmers now receive both PM Kisan (Rs 6,000) and Krishak Bandhu (Rs 10,000) as separate credits.

KALIA (Odisha earlier version) was replaced by CM-KISAN in 2024. Legacy KALIA beneficiaries were migrated to CM-KISAN.

Confirm your state stacking rule at the district agriculture office or on the state agriculture portal before assuming eligibility for both central and state schemes. Some states also run one-off crop compensation and disaster relief schemes that layer on top of PM Kisan during specific years, so track state agriculture department notifications actively.

## Primary sources

- PM Kisan official portal: https://pmkisan.gov.in
- PIB 23rd instalment release (20 June 2026): https://www.pib.gov.in/PressReleasePage.aspx?PRID=2275744
- PIB 23rd instalment advance notice: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2274616
- AgriStack Farmer Registry: https://agristackfarmerregistry.org.in
- PMKISAN GoI Android app: Google Play Store
- Aadhaar Face RD app: Google Play Store
- Union Budget 2026-27 (Rs 60,000 cr PM Kisan allocation): https://www.indiabudget.gov.in

## Frequently asked questions
`;

const FAQS = [
  {
    question: "When will PM Kisan 24th instalment be released?",
    answer: "The 24th instalment is expected in October or November 2026, following the roughly 4-month cadence between instalments. The 23rd instalment was released on 20 June 2026 (Rs 18,880 crore to 9.44 crore farmers). The 22nd was released in April 2026 and the 21st in December 2025. To be ready, complete eKYC and Farmer ID enrolment (in the 14 mandatory states) at least 15 days before the expected disbursement.",
  },
  {
    question: "How to check PM Kisan 23rd instalment status by Aadhaar?",
    answer: "Log in to pmkisan.gov.in, click Beneficiary Status under Farmers Corner, enter your Aadhaar number, and complete OTP verification. The portal shows current instalment status (credited, pending at state, held back). If credited but not landed in bank, check with your bank branch first, then file a grievance on pmkisan.gov.in with instalment reference number.",
  },
  {
    question: "Why did I not get PM Kisan instalment despite eligibility?",
    answer: "Five common reasons ranked by frequency: Aadhaar-name mismatch with land record, eKYC not completed, bank account inactive or closed, Farmer ID not enrolled in the 14 mandatory states (UP, Maharashtra, Bihar, MP, Rajasthan, Gujarat, Karnataka, AP, Telangana, TN, WB, Odisha, Punjab, Haryana), and land record dispute or lack of self-declaration. Fix each specific reason before the next instalment.",
  },
  {
    question: "How to complete PM Kisan eKYC via Face Authentication?",
    answer: "Download PMKISAN GoI app and Aadhaar Face RD app from Google Play. Open PMKISAN GoI, enter Aadhaar number and beneficiary details, then complete Aadhaar Face authentication through the Face RD app in daylight or good indoor lighting. This does not require Aadhaar-mobile linking, unlike OTP eKYC. Turnaround is about 10 minutes. Alternative is CSC biometric eKYC at Rs 15 to Rs 30 at any Common Service Centre.",
  },
  {
    question: "Who is not eligible for PM Kisan Yojana?",
    answer: "Eight exclusions: institutional landholders, income tax payers in any preceding AY, serving or retired Central and State government employees (excluding MTS/Class IV/Group D), constitutional post holders (former and present MPs, MLAs, state ministers, mayors, district panchayat chairpersons), practising professionals (doctors, engineers, lawyers, CAs, architects), pensioners drawing Rs 10,000 or more per month (pension only, not combined income), NRIs, and farmers where land ownership was transferred after 1 February 2019 (inheritance excepted).",
  },
  {
    question: "Is Farmer ID mandatory for PM Kisan in 2026?",
    answer: "Yes, in 14 states as of the 23rd instalment on 20 June 2026. UP, Maharashtra, Bihar, MP, Rajasthan, Gujarat, Karnataka, AP, Telangana, TN, WB, Odisha, Punjab, and Haryana require Farmer ID for payout. Enrol through agristackfarmerregistry.org.in with Aadhaar, state land record, and mobile linked to Aadhaar. Enrolment is free and turnaround is 15 to 30 days. Farmer ID will become mandatory nationwide during FY 2026-27.",
  },
  {
    question: "What is PM Kisan land seeding and how to fix it?",
    answer: "Land seeding is the process of linking your land record to your PM Kisan beneficiary record so the state agriculture department can verify landholding eligibility. Historical route was through pmkisan.gov.in Update Aadhaar section. In 14 states with Farmer ID mandate, land seeding is now done through AgriStack Farmer ID enrolment. If your land seeding shows failed, verify your land record shows your Aadhaar-linked name and there is no ownership dispute. Correct at tehsildar's office if needed.",
  },
  {
    question: "Which states give extra money on top of PM Kisan?",
    answer: "Maharashtra adds Rs 6,000 per year through Namo Shetkari Maha Samman Nidhi (total Rs 12,000 with PM Kisan). Madhya Pradesh adds Rs 6,000 through Mukhyamantri Kisan Kalyan (total Rs 12,000). Odisha adds Rs 4,000 through CM-KISAN for small and marginal farmers (total Rs 10,000), and Rs 12,500 standalone for landless agri labourers. Andhra Pradesh YSR Rythu Bharosa can layer partially up to Rs 13,500. West Bengal Krishak Bandhu is a separate track at Rs 10,000 per year and does not layer.",
  },
];

await replaceScheme({
  slug: "pm-kisan-samman-nidhi-yojana-2026",
  title: TITLE,
  description: DESCRIPTION,
  content: CONTENT,
  faqs: FAQS,
  minWords: 3000,
});
