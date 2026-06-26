// add-pm-kisan-scheme.mjs — Insert PM Kisan Samman Nidhi Yojana into Supabase
// Run: node scripts/add-pm-kisan-scheme.mjs

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xtjbijvxxeoopcqxycpz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY"
);

const scheme = {
  slug: "pm-kisan-samman-nidhi-yojana-2026",
  title: "PM Kisan Samman Nidhi Yojana 2026: Rs. 6,000 per year for farmers",
  ministry: "Ministry of Agriculture and Farmers' Welfare, Government of India",
  launched_by: "Narendra Modi Government",
  objective:
    "Transfer Rs. 6,000 per year directly into the bank accounts of eligible farmer families in three installments of Rs. 2,000 each, to supplement their income and help meet agricultural input costs.",
  eligibility: [
    "All landholder farmer families with cultivable land in their name as per state revenue records",
    "Both rural and urban farmer families are covered",
    "Land can be of any size (no upper or lower limit)",
    "Not eligible: income tax payers in the last financial year",
    "Not eligible: retired or serving government employees drawing pension above Rs. 10,000 per month",
    "Not eligible: constitutional post holders (President, MP, MLA, Minister, Mayor, District Panchayat Chairperson)",
    "Not eligible: professionals registered with statutory councils (doctors, engineers, lawyers, chartered accountants)",
    "Not eligible: tenant farmers and sharecroppers who do not own land in their name",
  ],
  benefits: [
    "Rs. 6,000 per year transferred in three installments of Rs. 2,000 each",
    "First installment: April to July",
    "Second installment: August to November",
    "Third installment: December to March",
    "Payment via Direct Benefit Transfer (DBT) directly into Aadhaar-linked bank account",
    "No deductions, no intermediaries",
    "Covers both agricultural and allied activities",
  ],
  documents: [
    "Aadhaar card (mandatory for eKYC and DBT payment)",
    "Bank account linked to Aadhaar via NPCI (savings or Jan Dhan account)",
    "Land ownership records (khasra, khatauni, or patta as per state revenue records)",
    "Mobile number linked to Aadhaar (for OTP-based eKYC)",
  ],
  how_to_apply:
    "Go to pmkisan.gov.in → click 'Farmers Corner' → click 'New Farmer Registration' → select Rural or Urban Farmer → enter Aadhaar number and captcha → fill in state, district, sub-district, block, and village → enter bank account number and IFSC code → enter land details (khasra/survey number) → submit. State government verifies against land records in 15 to 30 days. Alternatively, register at your nearest Common Service Centre (CSC) or through your local Patwari, Revenue Officer, or Block Agriculture Officer.",
  official_portal: "https://pmkisan.gov.in/",
  helpline_number: "155261",
  category: "agriculture",
  state: "all-india",
  description:
    "PM Kisan Samman Nidhi gives Rs. 6,000 per year to eligible farmer families in three installments of Rs. 2,000 each, paid directly into Aadhaar-linked bank accounts. Over 11 crore farmers are registered as of 2025, per the Ministry of Agriculture.",
  reading_time: "7 min read",
  faqs: [
    {
      question: "What is PM Kisan Samman Nidhi Yojana?",
      answer:
        "PM Kisan Samman Nidhi is a Central Sector Scheme that transfers Rs. 6,000 per year to eligible farmer families in three installments of Rs. 2,000 each. The Ministry of Agriculture and Farmers' Welfare manages the scheme, which launched on February 24, 2019.",
    },
    {
      question: "Who is eligible for PM Kisan?",
      answer:
        "All landholder farmer families who own cultivable land in their name as per state revenue records are eligible. You're not eligible if you paid income tax in the last financial year, draw a government pension above Rs. 10,000 per month, hold a constitutional post, or are a registered professional (doctor, engineer, lawyer, CA).",
    },
    {
      question: "How much money does PM Kisan pay and when?",
      answer:
        "PM Kisan pays Rs. 6,000 per year in three installments of Rs. 2,000 each. The first installment covers April to July, the second covers August to November, and the third covers December to March. Check pmkisan.gov.in for the exact release date of each installment.",
    },
    {
      question: "How do I apply for PM Kisan online?",
      answer:
        "Go to pmkisan.gov.in, click 'Farmers Corner', then 'New Farmer Registration'. Enter your Aadhaar number, fill in your state and village details, add your bank account and land records, and submit. Your state government verifies the application against revenue records, which takes 15 to 30 days.",
    },
    {
      question: "How do I check my PM Kisan installment status?",
      answer:
        "Go to pmkisan.gov.in, click 'Farmers Corner', then 'Beneficiary Status'. Enter your Aadhaar number, mobile number, or bank account number to see all installments released to your account along with their dates.",
    },
    {
      question: "Is eKYC mandatory for PM Kisan?",
      answer:
        "Yes, eKYC has been mandatory since 2022. Without it, your installment is withheld even if you're a registered and eligible beneficiary. Complete it online at pmkisan.gov.in under 'Farmers Corner' > 'eKYC' using your Aadhaar OTP, or visit a Common Service Centre (CSC) for biometric verification if your mobile isn't linked to Aadhaar.",
    },
    {
      question: "Why is my PM Kisan payment stopped?",
      answer:
        "Common reasons include incomplete eKYC, bank account not seeded with Aadhaar through NPCI, incorrect IFSC code or account number in registration, or a name mismatch between PM Kisan records and state revenue records. Check the specific reason at pmkisan.gov.in under 'Beneficiary Status'.",
    },
    {
      question: "Can tenant farmers apply for PM Kisan?",
      answer:
        "No. PM Kisan covers only farmer families who own cultivable land in their name as per revenue records. Tenant farmers and sharecroppers who don't own land are not eligible for this scheme.",
    },
  ],
  content: `## What PM Kisan is

6,000 rupees a year, deposited directly into a farmer's bank account in three installments of Rs. 2,000 each. That's PM Kisan Samman Nidhi.

PM Kisan is a Central Sector Scheme run by the Ministry of Agriculture and Farmers' Welfare. It launched on February 24, 2019, and was revised in June 2019 to cover all landholder farmer families in India, removing the earlier restriction to small and marginal farmers. Over 11 crore farmers have registered for the scheme as of 2025, per the Ministry of Agriculture.

The money arrives via Direct Benefit Transfer into the bank account linked to the farmer's Aadhaar, without going through any state government disbursement channel.

## Who qualifies

All landholder farmer families are eligible. A "farmer family" means a husband, wife, and their minor children who own cultivable land in their name, as per the land records of the concerned state or union territory. The land can be of any size.

You're not eligible if:
- You or your spouse hold a constitutional post (President, MP, MLA, or similar)
- You're a retired or serving government employee drawing a monthly pension above Rs. 10,000
- You're a current or former minister, mayor, or district panchayat chairperson
- You paid income tax in the last financial year
- You're a professional registered with a statutory council (doctor, engineer, lawyer, or chartered accountant)

Tenant farmers and sharecroppers who don't own land in their name can't apply under this scheme.

## How much money you get and when

Rs. 6,000 per year, in three equal installments of Rs. 2,000 each.

| Installment | Approximate period |
|---|---|
| First | April to July |
| Second | August to November |
| Third | December to March |

For the exact release date of the current installment, check pmkisan.gov.in. Dates shift by a few weeks each year depending on the budget cycle.

## eKYC requirement

Since 2022, eKYC is mandatory. Without it, your installment is withheld even if you're an eligible, registered beneficiary.

You can complete eKYC online if your mobile number is linked to Aadhaar. Go to pmkisan.gov.in, click "Farmers Corner", then "eKYC". Enter your Aadhaar number, confirm the OTP sent to your mobile, and you're done. The process takes about two minutes.

If your mobile number isn't linked to Aadhaar, go to your nearest Common Service Centre (CSC) for biometric-based verification. It's free.

## How to register online

1. Go to pmkisan.gov.in
2. Click "Farmers Corner" on the homepage
3. Click "New Farmer Registration"
4. Select Rural or Urban Farmer Registration
5. Enter your Aadhaar number and captcha
6. Fill in your state, district, sub-district, block, and village
7. Enter your bank account number and IFSC code
8. Enter your land details as per revenue records (khasra or survey number)
9. Submit the form

Your state government verifies the application against land records. Approval typically takes 15 to 30 days. You can track the status at pmkisan.gov.in under "Beneficiary Status".

You can also register at your nearest CSC or through your local Patwari, Revenue Officer, or Block Agriculture Officer.

## How to check your installment status

Go to pmkisan.gov.in, click "Farmers Corner", then "Beneficiary Status". Enter your Aadhaar number, mobile number, or bank account number and click "Get Data".

The portal lists every installment released to your account along with payment dates.

## Common reasons for stopped or failed payments

- eKYC not completed
- Bank account not seeded with Aadhaar through NPCI
- Incorrect IFSC code or account number in your registration
- Land records mismatch (your name in PM Kisan registration differs from revenue records)
- You've become ineligible (income tax filer, government pensioner above the threshold, etc.)

The Beneficiary Status page at pmkisan.gov.in shows the reason your payment is on hold.

## Grievance redressal

Call the PM Kisan helpline at 155261 or 1800-115-526 (toll-free, available on working days). You can also email pmkisan-ict@gov.in.

On the portal, go to "Help Desk", pick the issue type, and enter your Aadhaar number to file a complaint. Most payment failure complaints are resolved within 7 to 15 working days, provided the beneficiary's bank account and Aadhaar details are correctly updated.`,
};

async function insertScheme() {
  console.log("=== Inserting PM Kisan Samman Nidhi Yojana ===\n");

  const { data, error } = await supabase
    .from("schemes")
    .insert(scheme)
    .select("slug")
    .single();

  if (error) {
    console.error(`ERROR: ${error.message}`);
  } else {
    console.log(`INSERTED: ${data.slug}`);
    console.log(`URL: https://www.sarkaridarapan.com/sarkari-yojana/${data.slug}`);
  }
}

insertScheme();
