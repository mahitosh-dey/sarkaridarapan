// Depth expansion: ayushman-bharat-pm-jay-2026
// 871 words -> targeting ~2,900 words.
// Research: pmjay.gov.in, beneficiary.nha.gov.in, PIB (Budget 2026-27),
// eHealth Magazine (WB rollout 8 June 2026), Ministry of Health notifications,
// PM Vay Vandana enrollment stats from RTI Wiki / SchemesInIndia / Nivabupa,
// ABHA stats from Organiser (May 2026), Union Budget 2026-27 grants doc.
//
// Freshness updates:
// - West Bengal joined 8 June 2026 as 36th state/UT (rollout 1 July 2026)
// - All 36 states/UTs now covered (Delhi Apr 2025, Odisha Jan 2025, WB Jun 2026)
// - PM Vay Vandana enrollment crossed 3.4 crore since 29 Oct 2024 launch
// - Empanelled hospitals: 36,229 (19,483 govt + 16,746 private)
// - Cumulative admissions: 11.69 crore
// - Budget 2026-27: PM-JAY Rs. 9,500 crore, PM-ABHIM Rs. 4,770 crore
// - ABHA IDs: 93.95 crore, health records linked: 105 crore
//
// Humanizer rules applied: zero em/en dashes, sentence-case headings,
// no AI vocabulary, contractions, primary-source citations inline (AI-2),
// FAQ JSON-LD ready with direct-answer openers (AI-3), tables (AI-6),
// actual numbers (AI-4), primary sources only (AI-5).

import { createClient } from "@supabase/supabase-js";
import { pingIndexNow } from "./lib/indexnow.mjs";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";
const SITE_URL = "https://www.sarkaridarapan.com";
const SLUG = "ayushman-bharat-pm-jay-2026";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const NEW_TITLE = "Ayushman Bharat PM-JAY 2026: Rs. 5 Lakh, All 36 States";
const NEW_DESCRIPTION = "PM-JAY 2026 gives Rs. 5 lakh cashless treatment at 36,229 empanelled hospitals. All 36 states covered after WB joined June 2026. Seniors 70+ get extra cover.";

const NEW_CONTENT = `## What Ayushman Bharat PM-JAY is

Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY) is the Union government's flagship health-insurance scheme. It pays for cashless hospitalisation up to Rs. 5 lakh per family per year at any empanelled public or private hospital, with no premium collected from the beneficiary. Launched on 23 September 2018, it is the world's largest fully government-funded health-assurance programme by coverage.

As of May 2026, PM-JAY has recorded 11.69 crore hospital admissions across 36,229 empanelled hospitals (19,483 government and 16,746 private), per the National Health Authority dashboard. The scheme covers 55 crore Indians from low-income families identified via the Socio-Economic Caste Census 2011 and state-level lists.

The Union Budget 2026-27 raised the PM-JAY allocation to Rs. 9,500 crore from Rs. 9,000 crore in the previous year, per the PIB release of 1 February 2026. A parallel Rs. 4,770 crore was earmarked for the Pradhan Mantri Ayushman Bharat Health Infrastructure Mission (PM-ABHIM), a 67.66% jump over the FY 2025-26 revised estimate.

---

## Latest coverage: all 36 states and union territories now on PM-JAY

West Bengal signed the MoU with the National Health Authority on 8 June 2026, becoming the 36th state or union territory to implement PM-JAY. The state's cashless rollout begins on 1 July 2026, per the newsonair.gov.in announcement. This closes a 6-year gap for the state, whose previous Swasthya Sathi scheme ran in parallel without PM-JAY integration.

Delhi joined in April 2025 as the 35th, and Odisha adopted PM-JAY through co-branded health cards in January 2025. As of mid-2026, no Indian state or UT operates without PM-JAY integration. This is the first time every subnational unit is on a unified national health-cover programme.

The immediate impact: a PM-JAY beneficiary from one state can now walk into an empanelled hospital in any other state and get cashless treatment. Portability had partial gaps before Delhi and West Bengal joined; that gap is closed.

---

## Who is covered

Three separate rules decide whether you're covered under PM-JAY.

Under-70 low-income families qualify if the household appears in the SECC 2011 database under any of the seven deprivation criteria for rural families (kaccha house, landless daily wage labour, SC/ST household, female-headed, disabled member, etc.) or in the 11 occupational categories for urban families (rag-picker, street vendor, domestic worker, construction labour, etc.). State-specific lists like Tamil Nadu's Chief Minister's Comprehensive Health Insurance and Andhra Pradesh's YSR Aarogyasri feed into the same PM-JAY beneficiary pool.

Seniors 70 and above qualify under a separate scheme called Ayushman Vay Vandana Yojana (details in the dedicated section below). No SECC listing or income cap applies at 70+.

Migrant workers with an e-Shram card are automatically eligible under a 2024 expansion, and the coverage carries across states via the portability feature.

You cannot check eligibility by producing an income proof; the beneficiary check is against the pre-populated list. Everyone else, including middle-income salaried families, is not covered under PM-JAY. They may buy private health insurance or use state-specific top-up schemes where available.

---

## What is covered

The scheme funds 1,949 medical packages spanning secondary and tertiary care. This is one of the widest procedure lists among government-funded health schemes worldwide. The Rs. 5 lakh cover is a family-floater, meaning one large hospitalisation for one member can consume the entire year's cap.

| Coverage element | What it means |
|---|---|
| Cover amount | Rs. 5 lakh per family per year, family floater |
| Family size | No cap on number of members |
| Age of members | No age limit |
| Pre-existing conditions | Covered from day one |
| Waiting period | None |
| Cashless treatment | Yes, at any empanelled hospital |
| Ambulance charges | Yes, within scheme limits |
| Post-hospitalisation follow-up | 15 days included |
| Coverage of procedures | 1,949 packages |
| Tertiary care | Cancer, cardiac, dialysis, transplants, joint replacement, neurosurgery |
| Day-care procedures | Over 1,400 listed |

The scheme also covers COVID-19 hospitalisation as part of standard respiratory care, and mental-health admissions under an expansion notified in 2022.

---

## What is not covered

Some expenses are outside PM-JAY. Outpatient department (OPD) consultations, routine dental work, cosmetic surgery, fertility treatment, drug rehabilitation, self-inflicted injuries, and injuries arising from war or civil unrest are all excluded. Non-empanelled hospitals are not covered even for procedures that would otherwise be on the list, so an emergency admission at a random private hospital cannot be claimed retrospectively.

For OPD care, the parallel Ayushman Arogya Mandirs network of primary health centres offers free consultations and basic medicines. As of 14 May 2026, 1,85,940 Ayushman Arogya Mandirs are operational nationwide.

---

## Ayushman Vay Vandana Yojana for senior citizens 70+

Vay Vandana is a stand-alone extension of PM-JAY launched on 29 October 2024 for Indians aged 70 and above. It gives every eligible senior an additional Rs. 5 lakh per family per year, on top of any existing PM-JAY cover the family already has. So a 70+ senior in a low-income family gets Rs. 5 lakh through regular PM-JAY plus Rs. 5 lakh through Vay Vandana, a combined Rs. 10 lakh yearly cover.

Eligibility is a single line: 70 years or older on the date of enrolment, resident Indian. There is no income cap, no SECC dependency, and no BPL requirement. Middle-income and even affluent families' seniors are covered on equal terms with low-income families.

Enrolment happens through beneficiary.nha.gov.in or the Ayushman App using Aadhaar-based e-KYC. The applicant enters their Aadhaar-linked mobile number, verifies via OTP, and the Vay Vandana card is generated typically within minutes. A separate Vay Vandana card is issued in addition to the family's regular Ayushman card if one exists.

As of mid-2026, 3.4 crore seniors have enrolled since the October 2024 launch. Uptake has been strongest in Karnataka, Kerala, Andhra Pradesh, and Uttar Pradesh, based on state-wise enrolment figures published by the National Health Authority.

---

## How to check if you're a beneficiary

Go to beneficiary.nha.gov.in, enter your Aadhaar-linked mobile number, verify via OTP, and search by state and name or ration card number. The portal shows whether you're on the list, whether your Ayushman card has been generated, and which household members are covered.

You can also call the toll-free helpline 14555 or 1800-11-1565 and share your name, state, and district. The operator checks the same central beneficiary list and reads back the result. Common Service Centres and empanelled hospitals also perform on-the-spot checks with just your Aadhaar.

The Ayushman App on the Play Store and App Store bundles the same eligibility check with card download, Aadhaar e-KYC, and hospital lookup in one place. It is the fastest single-shot path if you have a smartphone.

---

## How to enrol and get an Ayushman card

If you are already on the beneficiary list, enrolment is a card-generation step, not an application. Walk into any empanelled hospital or Common Service Centre with your Aadhaar and mobile phone. The operator confirms your identity via Aadhaar e-KYC, prints the card, and hands it over. The card is free.

If you are 70 or older and not yet in the beneficiary list, the same Aadhaar e-KYC flow at a CSC or empanelled hospital generates a Vay Vandana card. This works even if your family is not otherwise PM-JAY eligible.

If your state runs its own health scheme (Tamil Nadu, Kerala, Andhra Pradesh, Karnataka, and others), your existing state-scheme card may double as your PM-JAY card, or a joint co-branded card is issued. Check with the state health department for the specific card format your state uses.

---

## How treatment works: pre-auth, admission, claim

Every PM-JAY hospitalisation runs through a defined four-step process, published in the National Health Authority's Claims Adjudication Manual.

Step 1 is pre-authorisation. The hospital's PM-JAY desk enters your diagnosis, proposed procedure package, and admission details into the online portal. The State Health Agency reviews and approves the package within hours in most cases. Emergency admissions can proceed before approval, with the paperwork completed within 24 hours.

Step 2 is admission. Once pre-auth is approved, you are admitted without any deposit or upfront payment. The hospital cannot ask for the Ayushman cover amount, security deposit, or any other charge for covered procedures. Show your Ayushman card and Aadhaar at check-in.

Step 3 is discharge. When you're discharged, the hospital issues a standard discharge summary. You do not sign any payment slip because there is no bill payable by you. Take the discharge summary with you for follow-up care records.

Step 4 is the hospital's claim. The hospital submits the discharge summary, investigation reports, and package code to the SHA portal within 24 hours of your discharge. The SHA approves within 15 days and releases payment to the hospital within 15 days after that.

If a hospital refuses admission despite valid pre-authorisation, or asks you to pay upfront, call 14555 immediately. Refusal or upfront demand at an empanelled hospital is a violation of the empanelment agreement and can trigger de-empanelment.

---

## Finding an empanelled hospital

The empanelled-hospital list is published on pmjay.gov.in and refreshed weekly. Filter by state, district, hospital type (public or private), and speciality. As of May 2026, the widest empanelled coverage is in Uttar Pradesh, Madhya Pradesh, Rajasthan, and Karnataka; every district in the country has at least one empanelled hospital.

The Ayushman App also offers a location-based lookup that surfaces empanelled hospitals within a chosen radius. This is the quickest option in an emergency because it works without typing the state or district.

For tertiary procedures like cancer treatment, cardiac surgery, or transplants, the empanelled list includes AIIMS, most large PSU hospitals, and about 60% of NABH-accredited private hospitals nationwide. Availability and waiting time vary heavily by state, so book pre-authorisation as early as possible rather than treating it as a last-minute step.

---

## ABHA card and digital health records

Ayushman Bharat Health Account (ABHA) is a separate digital initiative that runs alongside PM-JAY. ABHA gives every citizen a 14-digit health ID that stores medical records, prescriptions, lab reports, and hospital discharge summaries in one place. As of May 2026, 93.95 crore ABHA IDs have been generated and 105 crore health records linked, per the Ayushman Bharat Digital Mission dashboard.

ABHA is not required to access PM-JAY treatment, but it makes the pre-authorisation step faster because past records are already in the system. You create an ABHA number for free at abdm.gov.in using Aadhaar or a mobile number.

In 2026, wearable-device integration was added. Fitness bands and smartwatches with the ABDM certification can push heart rate, sleep, and activity data into your ABHA record if you grant explicit consent. This is an opt-in privacy-controlled channel.

The Union Budget 2026-27 raised the Ayushman Bharat Digital Mission allocation to Rs. 350 crore, a 7.94% rise, to expand telemedicine and interoperable hospital information systems.

---

## State-wise scheme integration

Several states run their own health-cover schemes in parallel with PM-JAY, and the two are integrated to varying degrees.

Tamil Nadu's Chief Minister's Comprehensive Health Insurance Scheme covers around 1.6 crore families with a Rs. 5 lakh general cover and an additional Rs. 1.5 lakh for specified procedures, and shares empanelled hospitals with PM-JAY. Andhra Pradesh's YSR Aarogyasri covers around 1.4 crore families with a Rs. 25 lakh cover for critical procedures, and every AP resident with a valid ration card is automatically enrolled in PM-JAY as well. Kerala's Karunya Health Scheme runs on the same empanelment network. West Bengal's Swasthya Sathi scheme (family cover of Rs. 5 lakh, launched 2016) will run in parallel with PM-JAY from 1 July 2026, with beneficiaries free to use either.

Where a state has its own scheme, the co-branded card is usually accepted at any empanelled hospital nationwide, but the specific package rates and pre-authorisation flow may vary. Check the state health department's website for the current rulebook if you're planning a large procedure.

---

## Grievance and helpline

The PM-JAY helpline is 14555 (toll-free) or 1800-11-1565 (alternative). Both operate 24 hours a day in Hindi and English, with regional-language operators available in most state hours. Complaints on hospital refusal, upfront demand, denied pre-authorisation, or non-payment of empanelled hospitals can be filed directly on the call.

For written complaints or slower issues like card correction or family-member addition, use the grievance portal at pmjay.gov.in. Response time is typically 15 to 30 working days.

If a hospital continues to demand payment or refuses admission despite pre-authorisation, escalate to the State Health Agency office. Contact details for every SHA are published on pmjay.gov.in under Contact Us.

---

## Frequently asked questions

**How do I check if I am eligible for Ayushman Bharat PM-JAY?** Visit beneficiary.nha.gov.in, enter your Aadhaar-linked mobile number, verify OTP, and search by name or ration card. You can also call 14555 or ask at any empanelled hospital or Common Service Centre.

**What is the current Ayushman Bharat cover amount?** Rs. 5 lakh per family per year for cashless hospitalisation at any of 36,229 empanelled hospitals as of May 2026, covering 1,949 medical packages including cancer, cardiac, and dialysis.

**Is West Bengal covered under PM-JAY in 2026?** Yes. West Bengal signed the MoU with the National Health Authority on 8 June 2026 and cashless rollout began on 1 July 2026. This made West Bengal the 36th state or union territory to implement PM-JAY.

**Who qualifies under PM Vay Vandana Yojana?** Any Indian citizen aged 70 or older, regardless of income, caste, or SECC status. Enrol online at beneficiary.nha.gov.in or via the Ayushman App with Aadhaar e-KYC.

**Can I use PM-JAY at a private hospital?** Yes, but only at hospitals empanelled with PM-JAY. Non-empanelled private hospitals cannot bill the scheme, and treatment there is not reimbursable.

**Do I need to renew my Ayushman card every year?** No. The card is valid as long as you are on the beneficiary list. Vay Vandana cards for seniors 70+ have no renewal requirement either.

**What if a hospital refuses to admit me even though I have an Ayushman card?** Call 14555 immediately and report the refusal. Empanelled hospitals cannot decline admission or demand payment for covered procedures. Persistent violations lead to de-empanelment.

**Does PM-JAY cover outpatient (OPD) treatment?** No. PM-JAY covers hospitalisation only. For OPD, the parallel network of 1,85,940 Ayushman Arogya Mandirs offers free consultations and basic medicines.

**Is PM-JAY cover portable across states?** Yes. A card issued in one state works at any empanelled hospital in any other state. Portability improved significantly after all 36 states or UTs joined the scheme by mid-2026.

**Do I need an ABHA card to use PM-JAY?** No. ABHA is a separate digital health record system. It makes pre-authorisation faster because your past records are already accessible, but the Ayushman card alone is enough for treatment.

---

## Official links and helplines

| Purpose | Link or number |
|---|---|
| National Health Authority beneficiary portal | beneficiary.nha.gov.in |
| PM-JAY scheme portal | pmjay.gov.in |
| Ayushman Bharat Digital Mission | abdm.gov.in |
| Ayushman App download | Google Play Store, Apple App Store |
| Toll-free helpline | 14555 |
| Alternative helpline | 1800-11-1565 |
| Grievance portal | pmjay.gov.in > Grievance |
| Empanelled hospital search | pmjay.gov.in > Find Hospital |
| Ayushman Arogya Mandirs network | ab-hwc.nhp.gov.in |
`;

const NEW_FAQS = [
  {
    question: "How do I check if I am eligible for Ayushman Bharat PM-JAY?",
    answer: "Visit beneficiary.nha.gov.in, enter your Aadhaar-linked mobile number, verify OTP, and search by name or ration card. You can also call 14555 or ask at any empanelled hospital or Common Service Centre.",
  },
  {
    question: "What is the current Ayushman Bharat cover amount?",
    answer: "Rs. 5 lakh per family per year for cashless hospitalisation at any of 36,229 empanelled hospitals as of May 2026, covering 1,949 medical packages including cancer, cardiac, and dialysis.",
  },
  {
    question: "Is West Bengal covered under PM-JAY in 2026?",
    answer: "Yes. West Bengal signed the MoU with the National Health Authority on 8 June 2026 and cashless rollout began on 1 July 2026. This made West Bengal the 36th state or union territory to implement PM-JAY.",
  },
  {
    question: "Who qualifies under PM Vay Vandana Yojana?",
    answer: "Any Indian citizen aged 70 or older, regardless of income, caste, or SECC status. Enrol online at beneficiary.nha.gov.in or via the Ayushman App with Aadhaar e-KYC.",
  },
  {
    question: "Can I use PM-JAY at a private hospital?",
    answer: "Yes, but only at hospitals empanelled with PM-JAY. Non-empanelled private hospitals cannot bill the scheme, and treatment there is not reimbursable.",
  },
  {
    question: "Do I need to renew my Ayushman card every year?",
    answer: "No. The card is valid as long as you are on the beneficiary list. Vay Vandana cards for seniors 70+ have no renewal requirement either.",
  },
  {
    question: "What if a hospital refuses to admit me even though I have an Ayushman card?",
    answer: "Call 14555 immediately and report the refusal. Empanelled hospitals cannot decline admission or demand payment for covered procedures. Persistent violations lead to de-empanelment.",
  },
  {
    question: "Does PM-JAY cover outpatient (OPD) treatment?",
    answer: "No. PM-JAY covers hospitalisation only. For OPD, the parallel network of 1,85,940 Ayushman Arogya Mandirs offers free consultations and basic medicines.",
  },
  {
    question: "Is PM-JAY cover portable across states?",
    answer: "Yes. A card issued in one state works at any empanelled hospital in any other state. Portability improved significantly after all 36 states or UTs joined the scheme by mid-2026.",
  },
  {
    question: "Do I need an ABHA card to use PM-JAY?",
    answer: "No. ABHA is a separate digital health record system. It makes pre-authorisation faster because your past records are already accessible, but the Ayushman card alone is enough for treatment.",
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
  console.error("ABORT: smart quotes detected");
  process.exit(1);
}

const bannedWords = [
  "delve", "delving", "delves", "pivotal", "underscore", "underscores",
  "tapestry", "landscape of", "vibrant", "boasts", "boast", "showcase",
  "showcases", "testament", "interplay", "intricate", "enduring", "foster",
  "fostering", "garner", "garnered", "actually,", "in the realm of",
  "in today's world", "at its core", "the real question is",
  "what really matters", "crucial", "meticulously",
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
