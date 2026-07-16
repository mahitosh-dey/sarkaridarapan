// Depth expansion: pm-kisan-samman-nidhi-pm-kisan-2026
// 804 words -> targeting ~2,800 words.
// Research: cleartax.in, pmkisan.gov.in, PIB releases for instalments 19-23,
// DD News (₹4.27 lakh crore total disbursed as of 24 March 2026, per Parliament).
//
// Humanizer rules applied: zero em/en dashes, sentence-case headings,
// no AI vocabulary, contractions, primary-source citations inline (AI-2),
// FAQ JSON-LD ready with direct-answer openers (AI-3), tables for comparisons
// (AI-6), actual numbers (AI-4), primary sources only (AI-5).

import { createClient } from "@supabase/supabase-js";
import { pingIndexNow } from "./lib/indexnow.mjs";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";
const SITE_URL = "https://www.sarkaridarapan.com";
const SLUG = "pm-kisan-samman-nidhi-pm-kisan-2026";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const NEW_TITLE = "PM Kisan Samman Nidhi 2026: 23rd Instalment, Status, eKYC";
const NEW_DESCRIPTION = "PM Kisan 23rd instalment of Rs. 2,000 released 20 June 2026 to 9.44 crore farmers. Total scheme payout crosses Rs. 4.27 lakh crore. Check status, eKYC guide.";

const NEW_CONTENT = `## What PM-KISAN is

PM Kisan Samman Nidhi (PM-KISAN) pays every eligible farmer family in India Rs. 6,000 per year, split into three Rs. 2,000 instalments and sent straight to Aadhaar-linked bank accounts. The Ministry of Agriculture and Farmers' Welfare runs the scheme with the Union government funding 100% of it.

Launched on 24 February 2019, the scheme crossed Rs. 4.27 lakh crore in cumulative transfers as of 24 March 2026, per Union Agriculture Minister Shivraj Singh Chouhan's written reply in Parliament. Around 9.44 crore farmer families received the 23rd instalment in June 2026, the highest coverage in the last four rounds.

Farmers can spend the money on anything: seeds, fertilisers, small equipment, or household needs. The scheme places no restriction on how the Rs. 2,000 is used, and no repayment is required.

---

## Latest instalment: 23rd released on 20 June 2026

Prime Minister Narendra Modi released the 23rd PM-KISAN instalment on 20 June 2026 from Tarakeswar in West Bengal's Hooghly district. The Centre transferred Rs. 18,880 crore to 9.44 crore farmer families in a single day through Direct Benefit Transfer, per the PIB release covering the event.

The 24th instalment is expected between October and December 2026, in line with the standard three-times-a-year schedule. No official date has been announced yet.

If pmkisan.gov.in shows the credit as 'sent' but your passbook shows nothing, the block is almost always at the bank end. Common causes are NPCI mapping failure, a dormant account, or the wrong bank branch listed in your PM-KISAN profile. Fixes are listed in the withheld-payment section below.

---

## Complete instalment history: 19th to 23rd

The table lists every PM-KISAN instalment released since February 2025, with the release date, the total amount disbursed, and the number of farmer families that received Rs. 2,000. Sources are the official PIB press releases for each event.

| Instalment | Release date | Released from | Amount transferred | Beneficiaries |
|---|---|---|---|---|
| 19th | 24 February 2025 | Bhagalpur, Bihar | Rs. 22,000 crore | 9.8 crore |
| 20th | 2 August 2025 | Varanasi, Uttar Pradesh | Rs. 20,500 crore | 9.7 crore |
| 21st | 19 November 2025 | Coimbatore, Tamil Nadu | Rs. 18,000 crore | 9 crore |
| 22nd | 13 March 2026 | Guwahati, Assam | Rs. 18,640 crore | 9.32 crore |
| 23rd | 20 June 2026 | Tarakeswar, West Bengal | Rs. 18,880 crore | 9.44 crore |

Beneficiary numbers dip whenever a fresh round of exclusion checks removes ineligible cases. Cumulative registered farmers is higher at around 11 crore since 2019, but per-instalment eligibility depends on live eKYC status and land-record verification at the time of transfer.

---

## Who is eligible

You qualify if your family owns cultivable agricultural land as per official land records, and the ownership was registered on or before 1 February 2019. A family means the husband, wife, and minor children treated as one unit, so only one member of the household is entitled to the benefit even if the land is jointly held.

There's no cap on landholding size for the current version of the scheme. The earlier 2-hectare cap was removed on 1 June 2019, so any landowning farmer meeting the other conditions can enrol.

The scheme covers all 28 states and 8 union territories. Enrolment happens through the state's revenue and agriculture departments, which verify land records before forwarding beneficiary data to the Centre for payment.

---

## Detailed exclusion categories

Not every farmer is eligible. The exclusion list is deliberate and enforced through cross-checks with income tax, service records, and land databases.

You cannot enrol if you or your spouse:

Hold or ever held a constitutional post: President, Vice-President, Prime Minister, Union or State Minister, Member of Parliament, MLA, MLC, Mayor of a Municipal Corporation, or Chairperson of a Zila Panchayat.

Are a serving or retired officer of the Central or State Government, PSUs, or autonomous bodies. Multi-tasking staff, Group D employees, and Class IV staff are the only exceptions.

Receive a monthly pension of Rs. 10,000 or more, excluding multi-tasking staff and Group D retirees.

Paid income tax in the last assessment year. Filing a return with zero tax liability doesn't disqualify you, but any actual tax payment does.

Are a professional registered with a statutory body: doctor, engineer, lawyer, chartered accountant, or architect practising the profession.

Own institutional land, meaning land recorded in the name of a company, trust, or organisation rather than an individual person.

Acquired the land after 1 February 2019. The ownership cut-off is strict. Post-2019 transfers through inheritance are allowed if the original owner was eligible and the mutation is properly recorded.

---

## Payment schedule and how DBT works

Three instalments go out every financial year, roughly one every four months. The typical window is April to July for the first, August to November for the second, and December to March for the third, though the exact release date depends on state-level data readiness.

Payments move through Direct Benefit Transfer, meaning the Centre credits the amount to the beneficiary's Aadhaar-seeded bank account with no state-level pass-through. This removes the middleman and cuts transfer time to a single day.

You can track any instalment on the Public Financial Management System dashboard maintained by the Centre, or through the 'Know Your Status' page on pmkisan.gov.in.

---

## eKYC: OTP, biometric, and 2026 face authentication

eKYC is compulsory. Skip it and the next instalment won't credit even if you're otherwise eligible. Three modes are available in 2026, and any one works.

Aadhaar OTP is the fastest. Log in to pmkisan.gov.in, click eKYC in the Farmers' Corner, enter your Aadhaar number, and type the OTP sent to your Aadhaar-linked mobile. The whole flow takes under two minutes if your mobile number is active on your Aadhaar record.

Biometric verification is the fallback if your mobile isn't linked to Aadhaar. Visit the nearest Common Service Centre with your Aadhaar card and any secondary photo ID. The CSC operator captures a fingerprint or iris scan and pushes the verification to UIDAI. Fee is nominal, around Rs. 15 to Rs. 20 depending on the centre.

Face authentication is the newest method, added in the PM-KISAN mobile app in early 2026. Download the app from the Play Store or App Store, log in with your Aadhaar and mobile OTP, and complete a face scan in-app. This is useful for farmers whose fingerprints have worn down from years of manual work.

Check your eKYC status any time under the 'Know About eKYC' section on pmkisan.gov.in. A green tick means you're clear until the next revalidation cycle.

---

## New farmer registration: step by step

Registration is free and takes about 15 minutes online. Start at pmkisan.gov.in, click 'New Farmer Registration' under Farmers' Corner, choose 'Rural Farmer Registration' or 'Urban Farmer Registration' based on your location, and enter your Aadhaar number.

Fill in personal details: full name as per Aadhaar, category (SC, ST, or General), date of birth, gender, and mobile number. Add bank account details: account holder name, IFSC code, account number, and bank name. This account must be Aadhaar-seeded to receive DBT.

Enter land details next: state, district, sub-district, block, village, Khasra or Khatauni number, and total cultivable area. Upload scanned land records (Khasra, Khatauni, Patta, or the equivalent state land document). Submit.

Verification runs at two levels. The village-level worker or Patwari checks your land record, and the district agricultural officer signs off. Typical timeline is 30 to 90 days depending on state workload. You can also register offline through your nearest Patwari or a Common Service Centre operator if you don't have internet access.

---

## How to check your payment status

Go to pmkisan.gov.in, click 'Know Your Status' under Farmers' Corner, and enter your registration number, Aadhaar number, or mobile number. Add the captcha and click 'Get Data'. The page then shows every instalment released against your account, the payment date, the amount, and the status: Paid, Pending, or Failed.

If the status shows Pending or Failed, click the linked reason. The system prints a specific error code and a plain-English explanation of why the payment didn't credit.

You can also check status through the PM-KISAN mobile app using the same identifiers. The app additionally shows push-notification alerts when a new instalment lands or if any action is required on your account.

---

## 8 reasons your payment is withheld, and how to fix each

If the 23rd instalment didn't reach your account, one of these eight issues is almost certainly the cause. Fixes for each are listed alongside.

**eKYC pending.** Complete it via OTP on pmkisan.gov.in, biometric at a CSC, or face authentication in the mobile app. Payment reprocesses in the next batch cycle after verification.

**Aadhaar name mismatch.** The name in your PM-KISAN profile doesn't match your Aadhaar exactly. Update through the 'Update Missing Info' page on pmkisan.gov.in or file a correction at your CSC.

**Aadhaar not linked to bank account.** DBT fails without Aadhaar-bank seeding. Visit your bank branch with your Aadhaar and PAN, or use net banking's Aadhaar-seeding option. Verify via *99*99*1# USSD code or through NPCI's Bharat Aadhaar Seeding Enabler portal.

**Wrong bank account details.** Common mistakes: outdated IFSC after a bank merger, mistyped account number, or closed account. Update via the 'Edit Registration' page on the portal, then wait for the next batch cycle.

**Land record verification pending.** The state-level worker hasn't verified your Khatauni yet. Contact your Patwari or Village Level Worker with a copy of the land document and follow up with the district agricultural officer if needed.

**NPCI mapping issue.** Your account is Aadhaar-seeded but not mapped to NPCI as the payment-receiving account. Ask your bank to submit an NPCI mapping request. This often happens after account merging or bank branch shifts.

**Duplicate registration in the same family.** Only one member per family gets the benefit. If your spouse is separately registered, one entry is flagged as a duplicate. Voluntarily surrender the duplicate registration through the 'Voluntary Surrender' link on pmkisan.gov.in.

**State-level verification pending.** New registrations sit in a state queue until cleared. There's no user-side fix. Contact the district agricultural officer or the state PM-KISAN nodal officer whose contact is listed on pmkisan.gov.in under 'Search State Nodal Officer'.

---

## State-wise beneficiary breakdown

Payout distribution isn't uniform across India. Some states, thanks to large farming populations and better land-record digitisation, receive a bigger share of every instalment. The table shows top states by eligible beneficiaries as of April 2025, per the state-wise PM-KISAN dashboard.

| Rank | State | Eligible beneficiaries | Fund transferred (households) |
|---|---|---|---|
| 1 | Uttar Pradesh | 2,44,27,949 | 2,38,96,267 |
| 2 | Maharashtra | 93,53,951 | 93,25,774 |
| 3 | Madhya Pradesh | 85,60,464 | 85,00,199 |
| 4 | Rajasthan | 78,54,000 (approx) | 77,80,000 (approx) |
| 5 | Bihar | 76,00,000 (approx) | 75,20,000 (approx) |

Total registered beneficiaries stood at 9,59,30,093 across 28 states for FY 2024-25, with 9,46,78,840 unique farmers actually receiving fund transfers, per data placed in Parliament. The gap of around 12.5 lakh reflects pending verifications, incomplete eKYC, and bank-account issues in that fiscal year.

---

## Kisan Credit Card linkage: Rs. 5 lakh at 4% effective interest

PM-KISAN and the Kisan Credit Card (KCC) scheme run in parallel and are increasingly bundled. Banks have been directed to issue KCCs to every PM-KISAN beneficiary who doesn't already hold one, and 78% of registered PM-KISAN farmers now have an active KCC.

The KCC gives short-term crop loans at a base rate of 7% per year. The Centre pays a 3% interest subvention if you repay on time, so the effective rate drops to 4%. In the 2026 budget, the credit limit under this subvention was raised from Rs. 3 lakh to Rs. 5 lakh per farmer, and the collateral-free ceiling went from Rs. 1.6 lakh to Rs. 2 lakh.

More than 7.72 crore KCCs are currently operational with a total outstanding of Rs. 10.2 lakh crore, per PIB data from May 2026. To apply, walk into any nationalised or scheduled cooperative bank branch with your PM-KISAN registration number, Aadhaar, land record, and passport photo. Some banks offer a five-minute in-branch approval flow for existing PM-KISAN beneficiaries.

---

## Grievance redressal

Two channels handle PM-KISAN complaints. The web helpdesk sits at pmkisan.gov.in under the 'Grievance' link and accepts complaints on registration, status, eKYC, and payment issues. Response typically takes 15 to 30 working days.

For urgent issues, the Centre operates two national helplines: 155261 (toll-free) and 011-24300606. Both work between 9 AM and 6 PM on working days and route calls to state-level PM-KISAN nodal officers. Keep your registration number handy before calling.

---

## Frequently asked questions

**When was the 23rd PM-KISAN instalment released?** The 23rd instalment was released on 20 June 2026 from Tarakeswar, West Bengal. Rs. 18,880 crore reached 9.44 crore farmer families that day through DBT.

**How many instalments has PM-KISAN completed?** 23 instalments have been released as of June 2026. The first was on 24 February 2019, and each round pays every eligible family Rs. 2,000.

**Is eKYC mandatory for PM-KISAN?** Yes. eKYC is compulsory and no instalment credits without it. Complete via OTP on pmkisan.gov.in, biometric at a CSC, or face authentication in the PM-KISAN mobile app.

**How much has PM-KISAN disbursed in total since 2019?** Rs. 4.27 lakh crore has been transferred to farmers cumulatively as of 24 March 2026, per Agriculture Minister Shivraj Singh Chouhan's Parliament reply.

**Can tenant farmers or sharecroppers get PM-KISAN?** No. The scheme covers landowner families only. If you farm land you don't own, you're not eligible under PM-KISAN, though you may qualify for state-level tenant-farmer schemes.

**Why did my payment fail even though my status shows eligible?** The most common reasons are Aadhaar not linked to your bank, wrong IFSC after a bank merger, or NPCI mapping missing. Fix via your bank branch or the update pages on pmkisan.gov.in.

**Can husband and wife both get PM-KISAN?** No. Only one member per farmer family gets the Rs. 2,000. If both are registered, the second entry is flagged and both payments may be withheld pending duplicate check.

**How do I apply for a KCC using my PM-KISAN registration?** Visit any bank branch with your PM-KISAN registration number, Aadhaar, land record, and photo. Banks are directed to issue KCC to PM-KISAN beneficiaries on priority, and existing beneficiaries often get a same-day approval.

---

## Official links

| Purpose | Link |
|---|---|
| PM-KISAN portal | pmkisan.gov.in |
| New farmer registration | pmkisan.gov.in > Farmers' Corner > New Farmer Registration |
| Know your status | pmkisan.gov.in > Farmers' Corner > Know Your Status |
| eKYC | pmkisan.gov.in > Farmers' Corner > eKYC |
| Beneficiary list | pmkisan.gov.in > Farmers' Corner > Beneficiary List |
| Grievance | pmkisan.gov.in > Grievance |
| Toll-free helpline | 155261 or 011-24300606 |
| PM-KISAN mobile app | Google Play Store, Apple App Store |
`;

const NEW_FAQS = [
  {
    question: "When was the 23rd PM-KISAN instalment released?",
    answer: "The 23rd instalment was released on 20 June 2026 from Tarakeswar, West Bengal. Rs. 18,880 crore reached 9.44 crore farmer families that day through DBT.",
  },
  {
    question: "How many instalments has PM-KISAN completed?",
    answer: "23 instalments have been released as of June 2026. The first was on 24 February 2019, and each round pays every eligible family Rs. 2,000.",
  },
  {
    question: "Is eKYC mandatory for PM-KISAN?",
    answer: "Yes. eKYC is compulsory and no instalment credits without it. Complete via OTP on pmkisan.gov.in, biometric at a CSC, or face authentication in the PM-KISAN mobile app.",
  },
  {
    question: "How much has PM-KISAN disbursed in total since 2019?",
    answer: "Rs. 4.27 lakh crore has been transferred to farmers cumulatively as of 24 March 2026, per Agriculture Minister Shivraj Singh Chouhan's Parliament reply.",
  },
  {
    question: "Can tenant farmers or sharecroppers get PM-KISAN?",
    answer: "No. The scheme covers landowner families only. If you farm land you don't own, you're not eligible under PM-KISAN, though you may qualify for state-level tenant-farmer schemes.",
  },
  {
    question: "Why did my payment fail even though my status shows eligible?",
    answer: "The most common reasons are Aadhaar not linked to your bank, wrong IFSC after a bank merger, or NPCI mapping missing. Fix via your bank branch or the update pages on pmkisan.gov.in.",
  },
  {
    question: "Can husband and wife both get PM-KISAN?",
    answer: "No. Only one member per farmer family gets the Rs. 2,000. If both are registered, the second entry is flagged and both payments may be withheld pending duplicate check.",
  },
  {
    question: "How do I apply for a KCC using my PM-KISAN registration?",
    answer: "Visit any bank branch with your PM-KISAN registration number, Aadhaar, land record, and photo. Banks are directed to issue KCC to PM-KISAN beneficiaries on priority, and existing beneficiaries often get a same-day approval.",
  },
];

// ==========================
// Pre-flight humanizer check
// ==========================
console.log("=== Pre-flight humanizer check ===");
const fullText = `${NEW_TITLE}\n${NEW_DESCRIPTION}\n${NEW_CONTENT}\n${JSON.stringify(NEW_FAQS)}`;

if (/[—–]/.test(fullText)) {
  console.error("ABORT: em/en dash detected");
  process.exit(1);
}
if (/[“”‘’]/.test(fullText)) {
  console.error("ABORT: smart quotes detected (use straight quotes only)");
  process.exit(1);
}

const bannedWords = [
  "delve", "delving", "pivotal", "underscore", "underscores", "tapestry",
  "landscape of", "vibrant", "boasts", "boast", "showcase", "showcases",
  "testament", "interplay", "intricate", "enduring", "foster", "fostering",
  "garner", "garnered", "actually,", "in the realm of", "in today's world",
  "at its core", "the real question is", "what really matters",
];
const contentLower = fullText.toLowerCase();
const banHits = bannedWords.filter((w) => contentLower.includes(w));
if (banHits.length) {
  console.error("ABORT: banned words:", banHits);
  process.exit(1);
}

const titleLen = NEW_TITLE.length;
const descLen = NEW_DESCRIPTION.length;
if (titleLen < 50 || titleLen > 65) {
  console.error(`ABORT: title length ${titleLen} outside [50,65]`);
  process.exit(1);
}
if (descLen < 150 || descLen > 160) {
  console.error(`ABORT: description length ${descLen} outside [150,160]`);
  process.exit(1);
}

const contentWords = NEW_CONTENT.trim().split(/\s+/).filter(Boolean).length;
if (contentWords < 2500) {
  console.error(`ABORT: content ${contentWords} words, below 2500 target`);
  process.exit(1);
}

console.log(`  Title: ${titleLen}c OK`);
console.log(`  Description: ${descLen}c OK`);
console.log(`  Content: ${contentWords} words OK`);
console.log(`  No em/en dashes: OK`);
console.log(`  No smart quotes: OK`);
console.log(`  No banned words: OK`);
console.log();

// ==========================
// Phase 1: DB update
// ==========================
console.log("=== PHASE 1: Update scheme row ===");
const { error } = await supabase
  .from("schemes")
  .update({
    title: NEW_TITLE,
    description: NEW_DESCRIPTION,
    content: NEW_CONTENT,
    faqs: NEW_FAQS,
    updated_at: new Date().toISOString(),
  })
  .eq("slug", SLUG);
if (error) {
  console.error("  FAIL:", error.message);
  process.exit(1);
}
console.log(`  OK schemes/${SLUG}`);

// ==========================
// Phase 2: revalidate
// ==========================
console.log("\n=== PHASE 2: Revalidate ===");
const rev = await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sarkari-yojana/" + SLUG)}`);
console.log(`  Path revalidate: HTTP ${rev.status}`);
const tag = await fetch(`${SITE_URL}/api/revalidate?tag=schemes`);
console.log(`  Schemes tag revalidate: HTTP ${tag.status}`);

// ==========================
// Phase 3: IndexNow ping
// ==========================
console.log("\n=== PHASE 3: IndexNow ping ===");
await pingIndexNow(SLUG, "/sarkari-yojana");

console.log("\n=== DONE ===");
console.log(`Verify live: ${SITE_URL}/sarkari-yojana/${SLUG}`);
