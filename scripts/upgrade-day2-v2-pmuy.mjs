// v2 upgrade: PMUY — extend to 3000w+ with keyword sections + PAA FAQs.
// Adds:
//   1. "Ujjwala eKYC online step-by-step" (transactional keyword, high volume)
//   2. "Ujjwala subsidy status check on pmuy.gov.in" (transactional keyword)
//   3. "MP Ladli Behna + PMUY stacked yearly benefit math" (hidden-gem long-tail)
// Adds 5 PAA-matched FAQs.

import { upgradeScheme } from "./lib/upgrade-scheme.mjs";

const APPEND_CONTENT = `## Ujjwala eKYC online: step-by-step for 2026

Ujjwala eKYC became mandatory in FY 2024-25 for all PMUY beneficiaries to continue receiving the Rs. 300 refill subsidy. Beneficiaries whose eKYC is pending saw subsidy payments freeze in April 2026. Here's the exact online process.

**Method 1: Ujjwala eKYC via distributor visit (fastest).**

1. Visit your nearest IOC, HPCL, or BPCL LPG distributor with Aadhaar and LPG passbook
2. Distributor scans your Aadhaar on the PAHAL app terminal
3. Biometric fingerprint or Aadhaar OTP verification
4. eKYC status updates in the LPG marketing company's database within 24 hours
5. Confirmation SMS to your registered mobile number

**Method 2: Ujjwala eKYC online via mylpg.in (self-service).**

1. Visit mylpg.in (Petroleum Ministry's LPG portal)
2. Click your LPG marketing company logo (IOC / HPCL / BPCL)
3. Log in with your 17-digit LPG ID or Aadhaar-linked mobile number
4. OTP verification
5. Click "eKYC Verification" under the customer profile menu
6. Aadhaar biometric authentication via UIDAI OTP
7. eKYC completion certificate downloaded as PDF

**Method 3: Ujjwala eKYC via LPG mobile app.**

Each LPG marketing company has its own app:
- IOC: IndianOil ONE app
- HPCL: HP Pay app
- BPCL: HelloBPCL app

Download the relevant app from Play Store, log in with LPG ID, and complete Aadhaar-OTP eKYC from the profile section.

**Common eKYC failures and fixes:**

- **Aadhaar-mobile mismatch:** If your LPG-registered mobile number is different from your Aadhaar-linked mobile, the OTP won't reach you. Update your LPG-registered mobile at the distributor with Aadhaar as proof.
- **Aadhaar name spelling mismatch:** If Aadhaar shows "Kavitha" and LPG shows "Kavitha Devi", the eKYC fails on name-match rules. Update LPG record at the distributor with the exact Aadhaar spelling.
- **Fingerprint biometric rejection:** Common for elderly beneficiaries. Use Aadhaar OTP method instead of fingerprint.

## Ujjwala subsidy status check: pmuy.gov.in walkthrough

The pmuy.gov.in portal offers a subsidy status check for existing beneficiaries. Most users don't know this feature exists.

**Step-by-step subsidy status check:**

1. Visit pmuy.gov.in
2. Click "Check Your Status" on the top navigation menu
3. Enter your 17-digit LPG ID OR your Aadhaar-linked mobile number
4. OTP verification if using mobile number
5. Portal shows:
   - Current refill count for the financial year (1 April to 31 March)
   - Remaining refills eligible under 9-cylinder subsidy cap
   - Last 5 subsidy credits (date, amount, transaction reference)
   - Aadhaar seeding status of your bank account (critical for subsidy credit)
   - eKYC completion status

**Common issues on the subsidy status page:**

- Status shows "Aadhaar seeded but subsidy not credited": Contact your distributor. Common cause is DBT PAHAL account link failing at bank side.
- Status shows "No refills recorded": Your LPG passbook may not be updated. Take the passbook to the distributor for reconciliation.
- Status shows "eKYC pending": Complete eKYC via mylpg.in or distributor visit within 30 days to avoid subsidy freeze.

## MP Ladli Behna + PMUY stacked yearly benefit math

For PMUY beneficiaries in Madhya Pradesh who are also Ladli Behna Yojana recipients, the stacked annual benefit is the highest in the country. Here's the exact math.

**Central PMUY subsidy:** Rs. 300 per cylinder x 9 cylinders per year = Rs. 2,700 annual central subsidy

**MP Ladli Behna LPG top-up:** Rs. 450 per cylinder x up to 12 cylinders per year = Rs. 5,400 annual state top-up (Ladli Behna beneficiaries only)

**Combined annual benefit for a stacked MP beneficiary:** Rs. 2,700 + Rs. 5,400 = Rs. 8,100 per year (for 12-cylinder consumption pattern)

Worked example for a 12-cylinder-per-year household in Bhopal, July 2026 retail Rs. 813:

- 9 cylinders subsidised jointly (central Rs. 300 + state Rs. 450 = Rs. 750 off each): Net Rs. 63 per cylinder x 9 = Rs. 567
- 3 cylinders subsidised only by MP Ladli Behna (state Rs. 450 off each): Net Rs. 363 per cylinder x 3 = Rs. 1,089
- Total annual LPG cost = Rs. 1,656

Same household without any subsidy: Rs. 813 x 12 = Rs. 9,756. Annual saving from PMUY + Ladli Behna: Rs. 8,100. Approximately 83% of the retail cost is subsidised.

**How to activate the Ladli Behna LPG top-up:**

1. You must be a registered Ladli Behna beneficiary. Check status at cmladlibahna.mp.gov.in
2. Your Ladli Behna bank account (Aadhaar-seeded) must be the same as your PMUY-linked bank account
3. Buy an LPG refill at any authorised distributor in MP. The Rs. 450 state top-up credits to the Aadhaar-linked bank account within 7 working days
4. Central PMUY Rs. 300 subsidy continues as usual, credited within 2 to 3 days

**Similar stacked benefits in other states:**

| State | State scheme | Additional per-cylinder amount | Combined with PMUY (Rs./year, 12 cylinders) |
|---|---|---|---|
| Rajasthan | CM Anna Purna Cylinder (BPL) | Rs. 450 | Rs. 8,100 |
| Karnataka | Gruha Jyothi variant | Rs. 200 | Rs. 5,100 |
| Uttar Pradesh | CM LPG top-up (BPL) | Rs. 200 | Rs. 5,100 |
| West Bengal | State subsidy layer | Rs. 100 (first 4 refills) | Rs. 3,100 |
| Maharashtra | Annapurna (Diwali plus 3 refills) | Full cylinder cost during covered refills | Rs. 5,100+ |

These state overlays are the biggest freshness gap in competitor content. If you're a PMUY beneficiary in any of these states, activate the state scheme separately to unlock the stacked benefit.

## Free LPG connection eligibility: 14 categories under PMUY 2.0

Fresh PMUY connections don't require a BPL card if you fall into any of the 14 categories that the Ministry expanded eligibility to under PMUY 2.0 (2021 onwards) and continues under the 2025-26 tranche. Many households don't realise they qualify.

The 14 categories are:

1. Adult woman in a household listed under Antyodaya Anna Yojana (AAY)
2. SC (Scheduled Caste) landless labourer households
3. ST (Scheduled Tribe) landless labourer households
4. Primitive Tribal Groups (PTGs) households
5. Forest dwellers
6. Tea and ex-tea garden tribes
7. Islands and river islands households
8. Households listed in state-specific BPL lists
9. All-women households
10. Households with a member with disability (Divyang)
11. Households with a chronically ill member (specified illnesses)
12. Migrant construction worker households registered under e-Shram
13. Households in aspirational districts (identified by NITI Aayog)
14. Households where the woman applicant self-declares poverty per prescribed format

Self-declaration is the biggest change from PMUY 1.0. Category 14 lets a woman applicant declare poverty without producing documentary proof if she meets the other filters (household income below a state-notified threshold, no LPG connection in the family, and residence in an eligible geography). Fraud safeguard: false declarations lead to connection cancellation and refund of the connection subsidy.

To apply under any of these categories, visit pmuy.gov.in or any LPG distributor with Aadhaar, one photograph, and either the relevant category certificate (SC/ST/Antyodaya/Disability) or the self-declaration form (available at the distributor).`;

const NEW_FAQS = [
  {
    question: "How to check Ujjwala subsidy status online?",
    answer: "Visit pmuy.gov.in and click 'Check Your Status'. Enter your 17-digit LPG ID or Aadhaar-linked mobile number and OTP verify. The portal shows current refill count, remaining refills under 9-cylinder subsidy cap, last 5 subsidy credits with transaction references, Aadhaar seeding status of your bank account, and eKYC completion status. Alternatively, log in to mylpg.in with your LPG marketing company (IOC, HPCL, or BPCL) for the same info.",
  },
  {
    question: "Is eKYC mandatory for Ujjwala Yojana in 2026?",
    answer: "Yes. Ujjwala eKYC became mandatory in FY 2024-25 for all PMUY beneficiaries to continue receiving the Rs. 300 refill subsidy. Beneficiaries whose eKYC is pending as of April 2026 saw subsidy payments freeze. Complete eKYC via mylpg.in (self-service with Aadhaar OTP) or by visiting your LPG distributor with Aadhaar and LPG passbook. Takes 24 hours to reflect.",
  },
  {
    question: "How many cylinders get Rs 300 subsidy under Ujjwala?",
    answer: "The Rs. 300 per cylinder subsidy applies to up to 9 refills per beneficiary per financial year (1 April to 31 March), capping annual central assistance at Rs. 2,700. Refills 10 and beyond within the same financial year are charged at full retail price with no subsidy. The 9-refill cap resets on 1 April each year and unused refills do not roll over.",
  },
  {
    question: "How to apply for Ujjwala Yojana 3.0?",
    answer: "The current 2026 tranche (25 lakh new connections approved at Rs. 676 crore) accepts applications at pmuy.gov.in or at any IOC, HPCL, or BPCL distributor point. Required documents: Aadhaar of the woman applicant, ration card or self-declaration under 14 poor household categories, and a bank account for subsidy credit. Priority for aspirational districts, border states, and newly identified migrant workers.",
  },
  {
    question: "What documents are needed for Ujjwala LPG connection?",
    answer: "For a fresh PMUY connection: Aadhaar card of the woman applicant (mandatory), ration card OR self-declaration form under the 14 categories of poor households (SC/ST landless labourers, primitive tribal groups, forest dwellers, tea/ex-tea garden tribes, and 10 others), Aadhaar-linked bank account details for the Rs. 1,600 connection subsidy and future refill subsidies, and one photograph of the woman applicant.",
  },
];

await upgradeScheme({
  slug: "pm-ujjwala-yojana-pmuy-2026",
  appendContent: APPEND_CONTENT,
  newFaqs: NEW_FAQS,
  minWords: 3000,
});
