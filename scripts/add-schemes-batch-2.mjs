// ============================================================
// Schemes Batch 2 — 13 New Government Schemes
// All facts double-checked from official government sources
// Created: 2026-06-15
// ============================================================

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xtjbijvxxeoopcqxycpz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY"
);

const schemes = [

  // ─────────────────────────────────────────────────────────────
  // 1. PM JEEVAN JYOTI BIMA YOJANA (PMJJBY)
  // Source: financialservices.gov.in / jansuraksha.gov.in
  // Premium revised June 2022: ₹330 → ₹436/year
  // ─────────────────────────────────────────────────────────────
  {
    slug: "pm-jeevan-jyoti-bima-yojana",
    title: "PM Jeevan Jyoti Bima Yojana (PMJJBY) — ₹2 Lakh Life Cover at ₹436/Year",
    ministry: "Ministry of Finance, Department of Financial Services, Government of India",
    launched_by: "Government of India — launched May 9, 2015",
    objective:
      "Provide affordable life insurance cover to all Indians, especially those from the low-income segment who cannot access private insurance, through a simple bank account-linked annual subscription.",
    eligibility: [
      "Must have a savings bank account",
      "Age 18 to 50 years at the time of joining",
      "Auto-debit consent required from your bank account",
      "No medical examination required — anyone with a bank account can enrol",
      "Multiple bank accounts: you can enrol through one bank account only",
      "Joint account holders can each enrol separately by paying ₹436 each",
    ],
    benefits: [
      "₹2 lakh paid to the nominee on the subscriber's death due to any cause (accident, illness, or natural death)",
      "Annual premium: ₹436 per year (auto-debited from bank account every June 1)",
      "Cover period: June 1 to May 31 every year (renewable annually)",
      "Pro-rata premium if enrolled mid-year",
      "No medical test, no paperwork complexity — just give auto-debit consent at your bank",
    ],
    documents: [
      "Aadhaar card (mandatory for identification and bank linking)",
      "Savings bank account (any participating bank — SBI, PNB, Canara, UCO, BOI, etc.)",
      "Nominee details (name, relationship, date of birth)",
      "Auto-debit consent form (available at your bank or online)",
    ],
    how_to_apply:
      "Visit your bank branch and ask for the PMJJBY enrolment form. Fill in your personal details and nominee information, sign the auto-debit consent, and submit. You can also enrol online through your bank's net banking portal (SBI, HDFC, ICICI, PNB all support online enrolment). Your annual premium of ₹436 will be auto-debited every June 1. For claims, your nominee needs to submit the claim form at your bank branch within 30 days of death with the death certificate and identity proof.",
    official_portal: "https://jansuraksha.gov.in",
    helpline_number: "1800-180-1111 / 1800-110-001",
    category: "financial-inclusion",
    state: "all-india",
    description:
      "PMJJBY gives every Indian with a savings bank account a ₹2 lakh life cover for just ₹436 per year. No medical test, no age barrier (18–50 years), no complex paperwork. Auto-renewed every year by deducting ₹436 from your account on June 1. Launched May 9, 2015.",
    is_active: true,
    content: `## PM Jeevan Jyoti Bima Yojana — Life Insurance for ₹1.19 a Day

Think about it — ₹436 per year works out to just about ₹1.19 per day. For that amount, your family gets ₹2 lakh if anything happens to you. No medical test, no complex eligibility, no agent commission — just a bank account and your consent.

That is what the Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) offers. It was launched on May 9, 2015 and is one of the three Jan Suraksha schemes introduced to bring insurance to people who never had access to it.

---

## What You Get

- **Life cover:** ₹2 lakh paid to your nominee if you die — for any reason (accident, illness, or natural death)
- **Annual premium:** ₹436 per year (auto-debited from your bank account every June 1)
- **No medical test required**
- **No income limit** — anyone with a savings bank account can enrol

---

## Who Is Eligible

| Criteria | Detail |
|---|---|
| Age | 18 to 50 years at the time of joining |
| Account required | Savings bank account with any participating bank |
| Medical test | Not required |
| Enrolment | Multiple accounts allowed, but cover through one account only |

Even if you have multiple bank accounts, you can only take PMJJBY cover once — through one account. The premium is ₹436 per account per year.

---

## Premium Details

The annual premium is **₹436 per year**, auto-debited from your bank account on June 1 every year. If you enrol mid-year, the premium is pro-rated:

| Enrolment Month | Premium Payable |
|---|---|
| June, July, August | ₹436 |
| September, October, November | ₹342 |
| December, January, February | ₹228 |
| March, April, May | ₹114 |

---

## How to Enrol

**At the bank branch:**
1. Visit any branch of your bank (SBI, PNB, BOI, Canara, UCO, or other participating banks)
2. Ask for the PMJJBY application/enrolment form
3. Fill in your name, Aadhaar number, nominee name, relationship, and date of birth
4. Sign the auto-debit consent form
5. Submit — your cover starts from the date of enrolment

**Online:**
Most banks including SBI, HDFC, ICICI, and PNB allow enrolment through net banking. Log in → Insurance → PMJJBY → Enrol.

---

## How the Claim Works

If a subscriber passes away, the nominee must:
1. Contact the bank branch where the subscriber had the PMJJBY-linked account
2. Submit the claim form (available at the bank or at jansuraksha.gov.in)
3. Attach: Death certificate + Nominee's identity proof + Nominee's bank account details
4. Claim must be filed within 30 days of death

The claim amount of ₹2 lakh is transferred directly to the nominee's bank account.

---

## Important Things to Know

- The cover period is **June 1 to May 31** every year. Make sure your account has ₹436 balance every June 1.
- If the auto-debit fails and premium is not paid, the cover lapses — you can re-enrol but with a declaration of good health.
- There is no survival benefit — this is a pure term life insurance scheme.
- The insurance is underwritten by Life Insurance Corporation of India (LIC) and other life insurers through bank tie-ups.

---

## Quick Links

- **Official Website:** [jansuraksha.gov.in](https://jansuraksha.gov.in)
- **Department of Financial Services:** [financialservices.gov.in](https://financialservices.gov.in)
- **Helpline:** 1800-180-1111 / 1800-110-001 (toll-free)

If you have a bank account and don't have this, enrol today. ₹436 a year is a small price for a ₹2 lakh safety net for your family.
`,
  },

  // ─────────────────────────────────────────────────────────────
  // 2. PM SURAKSHA BIMA YOJANA (PMSBY)
  // Source: jansuraksha.gov.in / financialservices.gov.in
  // Premium revised June 2022: ₹12 → ₹20/year
  // ─────────────────────────────────────────────────────────────
  {
    slug: "pm-suraksha-bima-yojana",
    title: "PM Suraksha Bima Yojana (PMSBY) — ₹2 Lakh Accident Cover at Just ₹20/Year",
    ministry: "Ministry of Finance, Department of Financial Services, Government of India",
    launched_by: "Government of India — launched May 9, 2015",
    objective:
      "Provide affordable accidental death and disability insurance to all Indians, especially those in the unorganised sector, through a simple bank account-linked annual subscription.",
    eligibility: [
      "Age 18 to 70 years",
      "Must have a savings bank account with a participating bank",
      "Auto-debit consent required",
      "No medical examination required",
      "Multiple bank accounts: enrolment through one account only",
      "Joint account holders can each enrol separately by paying ₹20 each",
    ],
    benefits: [
      "₹2 lakh paid on accidental death or total permanent disability",
      "₹1 lakh paid for partial permanent disability (loss of one eye, one hand, or one foot)",
      "Annual premium: ₹20 per year — one of the cheapest insurance products in the world",
      "Cover period: June 1 to May 31 every year, renewable annually",
      "Premium auto-debited from bank account every June 1",
    ],
    documents: [
      "Aadhaar card",
      "Savings bank account at a participating bank",
      "Nominee details (name, relationship)",
      "Auto-debit consent form",
    ],
    how_to_apply:
      "Visit your bank branch and ask for the PMSBY enrolment form, fill in your personal and nominee details, sign the auto-debit consent, and submit. You can also enrol via net banking on SBI, PNB, BOI, and other participating banks. Your ₹20 premium is auto-debited every June 1. For accident claims, submit the claim form at your bank with the FIR, medical records (for disability), or death certificate and post-mortem report (for death claims).",
    official_portal: "https://jansuraksha.gov.in",
    helpline_number: "1800-180-1111 / 1800-110-001",
    category: "financial-inclusion",
    state: "all-india",
    description:
      "PMSBY provides ₹2 lakh accidental death and disability cover for just ₹20 per year. Any Indian between 18 and 70 years with a savings bank account can enrol. No medical test, auto-renewed every year. Launched May 9, 2015 by Government of India.",
    is_active: true,
    content: `## PM Suraksha Bima Yojana — Accident Insurance at ₹20 a Year

₹20 per year. That is less than the price of a cup of tea. And for that, you get ₹2 lakh in accident insurance cover. If you have a savings bank account and are between 18 and 70 years old, there is simply no reason not to be enrolled in this scheme.

The Pradhan Mantri Suraksha Bima Yojana (PMSBY) was launched on May 9, 2015 as one of the Jan Suraksha schemes — three government initiatives to bring insurance and pension coverage to the unorganised sector. PMSBY specifically covers accidental death and disability.

---

## What You Get

| Event | Payout |
|---|---|
| Accidental death | ₹2 lakh to nominee |
| Total permanent disability (both eyes, or both hands/feet, or one eye and one hand/foot) | ₹2 lakh |
| Partial permanent disability (one eye, or one hand, or one foot) | ₹1 lakh |

**Note:** This is an accident-only scheme. Death due to illness is not covered under PMSBY (for that, enrol in PMJJBY separately).

---

## Who Is Eligible

| Criteria | Detail |
|---|---|
| Age | 18 to 70 years |
| Account required | Savings bank account with a participating bank |
| Medical test | Not required |
| Annual premium | ₹20 (auto-debited June 1 every year) |

---

## How to Enrol

**At your bank branch:**
1. Ask for the PMSBY enrolment/consent form
2. Fill in your name, Aadhaar, nominee details
3. Sign the auto-debit mandate
4. Submit — your accident cover starts immediately

**Online:**
Log in to your bank's net banking → Insurance / Social Security Schemes → PMSBY → Enrol.

Most major banks including SBI, Punjab National Bank, Bank of India, Canara Bank, HDFC, ICICI and others offer online enrolment.

---

## What Counts as Total vs. Partial Disability

**Total permanent disability (₹2 lakh):**
- Loss of use of both eyes
- Loss of use of both hands or both feet
- Loss of use of one eye and one hand or one foot

**Partial permanent disability (₹1 lakh):**
- Total and irrecoverable loss of sight in one eye
- Loss of use of one hand or one foot

---

## How the Claim Works

**For accidental death:**
- Nominee submits claim form at the bank
- Required: Death certificate, FIR/police report, post-mortem report, nominee's ID proof

**For disability:**
- Subscriber submits claim form
- Required: FIR/accident report, medical certificate from a government hospital doctor confirming disability, disability certificate

Claims should be filed within 30 days of the accident. The payout comes directly to the nominee's/subscriber's bank account.

---

## Things to Remember

- Premium of ₹20 is auto-debited every June 1 — keep that balance in your account
- Cover is for the period June 1 to May 31 each year
- If the premium auto-debit fails, your cover lapses — re-enrolment requires a declaration of good health
- You can hold both PMSBY (accident) and PMJJBY (life) — they are separate and complementary
- Maximum cover per person is ₹2 lakh even if you enrol through multiple banks (government restricts benefits to one)

---

## Quick Links

- **Official Website:** [jansuraksha.gov.in](https://jansuraksha.gov.in)
- **Helpline:** 1800-180-1111 / 1800-110-001 (toll-free)

Enrol today if you haven't already. The premium is ₹20 — it costs you almost nothing and protects your family from financial crisis in case of an accident.
`,
  },

  // ─────────────────────────────────────────────────────────────
  // 3. PM GARIB KALYAN ANNA YOJANA (PMGKAY)
  // Source: pib.gov.in, nfsa.gov.in
  // Extended to December 2028 — announced November 2023
  // ─────────────────────────────────────────────────────────────
  {
    slug: "pm-garib-kalyan-anna-yojana",
    title: "PM Garib Kalyan Anna Yojana (PMGKAY) — 5 Kg Free Ration Per Month for 81 Crore People",
    ministry: "Ministry of Consumer Affairs, Food and Public Distribution, Government of India",
    launched_by: "Government of India — launched March 26, 2020 (merged into NFSA from January 1, 2023)",
    objective:
      "Provide free food grain to NFSA (National Food Security Act) ration card holders every month to ensure no family in India goes hungry, regardless of economic hardship.",
    eligibility: [
      "Must have a valid ration card under NFSA (National Food Security Act, 2013)",
      "Antyodaya Anna Yojana (AAY) card holders: 35 kg per family per month (free)",
      "Priority Household (PHH) card holders: 5 kg per person per month (free)",
      "State government may also extend benefits to non-NFSA beneficiaries under state programmes",
      "No separate registration needed if you already have an NFSA ration card",
    ],
    benefits: [
      "5 kg rice or wheat per person per month — completely free (₹0 cost to beneficiary)",
      "AAY family card holders receive 35 kg per family per month",
      "Available at your local Fair Price Shop (ration shop) using your ration card",
      "Can be collected from any FPS in India using One Nation One Ration Card (ONORC) portability",
      "Scheme extended to December 31, 2028 — secure for the next 5 years",
      "Total government allocation: ₹11.8 lakh crore over 5 years",
    ],
    documents: [
      "NFSA ration card (Antyodaya or Priority Household)",
      "Aadhaar card (for biometric verification at Fair Price Shop)",
      "If ration card is not yet made: apply at your state's Food Department or online on the state PDS portal",
    ],
    how_to_apply:
      "If you already have an NFSA ration card, you are automatically a beneficiary — collect your free ration every month from your designated Fair Price Shop using Aadhaar-based biometric verification. If you do not have a ration card, apply at your local District Food and Civil Supplies Office or on your state's PDS portal. To check eligibility or apply online, visit nfsa.gov.in or your state Food Department portal. Under One Nation One Ration Card (ONORC), migrant workers can collect their ration from any FPS in India using Aadhaar.",
    official_portal: "https://nfsa.gov.in",
    helpline_number: "1967 / 14445 (PDS helpline, toll-free)",
    category: "rural-development",
    state: "all-india",
    description:
      "PMGKAY provides 5 kg free rice or wheat per person per month to 81 crore NFSA ration card holders across India. Launched in 2020 as COVID relief, merged into NFSA from January 2023, and extended to December 2028. No application needed if you have a ration card.",
    is_active: true,
    content: `## PM Garib Kalyan Anna Yojana — Free Ration for 81 Crore Indians

India's largest food security programme. The Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY) provides free food grain every month to over 81 crore people who hold ration cards under the National Food Security Act (NFSA). As of 2026, this scheme is active, extended to **December 31, 2028**, and the government is spending ₹11.8 lakh crore over five years to fund it.

If you or anyone in your family has an NFSA ration card, you are already a beneficiary. No separate application is needed.

---

## What You Get

| Card Type | Monthly Allocation | Cost |
|---|---|---|
| Priority Household (PHH) | 5 kg per person | Free (₹0) |
| Antyodaya Anna Yojana (AAY) | 35 kg per family | Free (₹0) |

Food grain options: Rice, wheat, or coarse grains (millets) depending on what your state provides and what is available at your Fair Price Shop.

---

## How to Collect Your Ration

1. Visit your local **Fair Price Shop (FPS/ration shop)** — the same one where your ration card is registered
2. Carry your **Aadhaar card** — biometric verification (fingerprint or iris scan) is done at the FPS machine
3. Collect your monthly allocation

If your state has set a specific date range for distribution, go during those days. Many states allow collection on any working day within the month.

---

## One Nation One Ration Card (ONORC)

This is especially useful for migrant workers. If you have moved to a different state for work, you can collect your ration from **any Fair Price Shop in India** using your Aadhaar card — you are not locked to your home state's FPS. This portability is called ONORC (One Nation One Ration Card) and works across all states and union territories.

---

## Who Is Eligible

Everyone who holds an NFSA ration card — either **Priority Household (PHH)** or **Antyodaya Anna Yojana (AAY)**. These cards are issued by state governments based on income and poverty criteria.

If you don't have a ration card, you need to apply for one through your state's Food Department.

---

## How to Get a Ration Card (If You Don't Have One)

1. Visit your local **District Food and Civil Supplies Office**
2. Submit your application with family members' Aadhaar details, income proof, and address proof
3. Many states also allow online ration card applications — check your state's Food Department website

Once your ration card is issued and registered under NFSA, you automatically become eligible for free grain under PMGKAY.

---

## Current Status (2026)

The scheme has been running continuously since January 2023 after being merged into the NFSA framework. The government extended it for five more years in November 2023, covering the period from January 1, 2024 to December 31, 2028. Over 81 crore people are currently receiving free grain every month.

---

## Quick Links

- **Official Website:** [nfsa.gov.in](https://nfsa.gov.in)
- **PDS Helpline:** 1967 / 14445 (toll-free)
- **Check Ration Card Status:** Visit your state's Food Department portal

This is one scheme you don't need to apply for separately — if you have an NFSA ration card, your free ration is waiting for you at your nearest ration shop every month.
`,
  },

  // ─────────────────────────────────────────────────────────────
  // 4. LAKHPATI DIDI YOJANA
  // Source: lakhpatididi.gov.in / Ministry of Rural Development
  // Launched: August 15, 2023 (Independence Day)
  // ─────────────────────────────────────────────────────────────
  {
    slug: "lakhpati-didi-yojana",
    title: "Lakhpati Didi Yojana 2026 — Free Skill Training for SHG Women to Earn ₹1 Lakh+ Per Year",
    ministry: "Ministry of Rural Development, Government of India (DAY-NRLM)",
    launched_by: "PM Narendra Modi — announced August 15, 2023 (Independence Day address)",
    objective:
      "Empower 3 crore women Self Help Group (SHG) members across rural India to earn a sustainable annual income of ₹1 lakh or more through skill training, micro-enterprise support, and market linkages.",
    eligibility: [
      "Women who are active members of a Self Help Group (SHG) registered under DAY-NRLM (Deendayal Antyodaya Yojana – National Rural Livelihoods Mission)",
      "Age: 18 to 60 years",
      "Must be a rural resident",
      "Must be part of an active, functioning SHG with regular savings and meetings",
      "Priority given to women from BPL families and economically weaker sections",
    ],
    benefits: [
      "Free skill training in high-demand vocations including LED bulb making, plumbing, drone operation, solar panel installation, and repair & maintenance",
      "Access to micro-credit and loans through SHG bank linkage for starting small enterprises",
      "Market linkages — help to sell products to government departments, corporates, and retail markets",
      "Business mentorship and entrepreneurship development",
      "Goal: achieve ₹1 lakh annual income within 4 agricultural seasons or business cycles",
      "Connection to Namo Drone Didi scheme (selected SHGs get drones for agricultural services)",
    ],
    documents: [
      "SHG membership certificate or SHG passbook",
      "Aadhaar card",
      "Bank account linked to SHG",
      "Residence proof (ration card, voter ID, or any government-issued address proof)",
    ],
    how_to_apply:
      "Contact your local Gram Panchayat or the Block Resource Centre under your district's NRLM office. Women who are already part of an SHG under DAY-NRLM are automatically in the programme pipeline — your SHG Cluster Coordinator or Panchayat-level Federation (PLF) will guide your SHG members through the training selection process. You can also visit lakhpatididi.gov.in for information and your state's NRLM website to find the nearest resource centre.",
    official_portal: "https://lakhpatididi.gov.in",
    helpline_number: "1800-180-5999 (DAY-NRLM helpline)",
    category: "women-and-child",
    state: "all-india",
    description:
      "Lakhpati Didi Yojana targets 3 crore women SHG members across rural India to earn ₹1 lakh+ per year through free skill training in LED bulb making, drone operation, solar installation, and other high-demand trades. Launched by PM Modi on August 15, 2023 under DAY-NRLM.",
    is_active: true,
    content: `## Lakhpati Didi Yojana — Making 3 Crore Rural Women Earn ₹1 Lakh a Year

On Independence Day 2023, PM Narendra Modi announced a target that caught everyone's attention: make 3 crore women from Self Help Groups (SHGs) earn at least ₹1 lakh per year. Not charity, not a monthly transfer — but sustained income through skills and enterprise. That is the core of the Lakhpati Didi Yojana.

The scheme runs under DAY-NRLM (Deendayal Antyodaya Yojana – National Rural Livelihoods Mission), the central government's rural women's empowerment mission that already has over 9 crore women in SHGs across India.

---

## What "Lakhpati Didi" Means

A Lakhpati Didi is a woman SHG member who earns **₹1 lakh or more per year** (approximately ₹8,300/month) on a sustainable basis — for at least 4 agricultural seasons or business cycles in a row. The income must come from the skills or enterprise she develops, not from temporary wage work.

---

## What You Get Under This Scheme

**1. Free Skill Training**
Training in practical, income-generating vocations:
- LED bulb making and repair
- Plumbing and water supply maintenance
- Solar panel installation and maintenance
- Drone piloting for agriculture (linked to Namo Drone Didi scheme)
- Agarbatti making, candle making, handicrafts
- Tailoring, stitching, textile work
- Papad, pickle, and food processing

**2. Credit Access**
Bank loans through SHG bank linkage at concessional interest rates to start or expand a small enterprise.

**3. Market Linkages**
Government agencies, local bodies, and corporate buyers are connected to SHG products. Lakhpati Didis get preference in government procurement of specific items.

**4. Business Mentorship**
Community Resource Persons (CRPs) and enterprise facilitators guide women through setting up and running their micro-businesses.

---

## Who Can Apply

Any woman who is an **active member of an SHG registered under DAY-NRLM**. Age 18 to 60 years. Rural resident.

If you are in an SHG already, you are in the programme ecosystem. Your SHG coordinator or Cluster Coordinator at the Block level will connect you to training opportunities.

If you are not in an SHG yet, join one first through your Gram Panchayat or Anganwadi centre — it is free and the benefits are extensive beyond just this scheme.

---

## Current Progress (2026)

As of early 2026, over **1 crore women** have been declared Lakhpati Didis with verified annual income of ₹1 lakh or more. The government has set a target of 3 crore by 2025, which it is working to achieve in 2026.

---

## How to Find Out If You Qualify

1. Ask at your local **Gram Panchayat office** — they have NRLM contact details
2. Contact the **Block Resource Centre (BRC)** in your district
3. Visit **lakhpatididi.gov.in** for programme details and your state's NRLM link
4. Call **DAY-NRLM helpline: 1800-180-5999** (toll-free)

---

## Quick Links

- **Official Portal:** [lakhpatididi.gov.in](https://lakhpatididi.gov.in)
- **DAY-NRLM Portal:** [aajeevika.gov.in](https://aajeevika.gov.in)
- **Helpline:** 1800-180-5999
`,
  },

  // ─────────────────────────────────────────────────────────────
  // 5. NAMO DRONE DIDI YOJANA
  // Source: namodronedidi.da.gov.in / Cabinet approval November 28, 2023
  // Budget: ₹1,261 crore for 2023-24 to 2025-26
  // ─────────────────────────────────────────────────────────────
  {
    slug: "namo-drone-didi-yojana",
    title: "Namo Drone Didi Yojana 2026 — Free Drone for Women SHGs + ₹15,000/Month Earnings",
    ministry: "Ministry of Agriculture and Farmers Welfare, Government of India (under DAY-NRLM)",
    launched_by: "Cabinet approved November 28, 2023; PM Modi launched December 2023",
    objective:
      "Provide agricultural drones to 15,000 Women Self Help Groups (SHGs) to enable them to offer drone-based fertiliser and pesticide spraying services to farmers, creating a sustainable income source for rural women.",
    eligibility: [
      "Only Women Self Help Groups (SHGs) registered under DAY-NRLM are eligible — not individuals",
      "The SHG must be active and engaged in or linked to agricultural activities",
      "From the SHG, one woman aged 18-50 years (minimum 10th pass) is selected for 15-day drone pilot training",
      "A second member or family member of the SHG is trained as a drone assistant (for minor repairs and maintenance)",
      "Priority given to SHGs in major farming regions",
    ],
    benefits: [
      "One agricultural drone provided per selected SHG — government covers 80% cost (up to ₹8 lakh)",
      "SHG pays only 20% of drone cost (can be financed through loan — no upfront burden)",
      "15-day training program covering drone flying, agriculture use, safety, and minor repairs",
      "SHG can provide drone spraying services to local farmers and charge a service fee",
      "Trained drone pilot earns approximately ₹15,000 per month from spraying services",
      "Total financial assistance per SHG: up to ₹10 lakh (drone + accessories + training)",
    ],
    documents: [
      "SHG registration certificate under DAY-NRLM",
      "SHG passbook and bank account details",
      "Aadhaar card of selected drone pilot member",
      "10th pass certificate of the woman selected for pilot training",
      "SHG resolution (meeting minutes) nominating the drone pilot member",
    ],
    how_to_apply:
      "This scheme is not applied for individually. SHGs are selected and approached by their district NRLM office or the Agriculture Department. Contact your local Gram Panchayat, Block Agriculture Office, or Pradhan Mantri Kisan Samriddhi Kendra (PMKSK) to express interest. The NRLM district team verifies the SHG and processes the selection. You can also visit namodronedidi.da.gov.in for the official process.",
    official_portal: "https://namodronedidi.da.gov.in",
    helpline_number: "1800-180-5999 (DAY-NRLM helpline)",
    category: "women-and-child",
    state: "all-india",
    description:
      "Namo Drone Didi provides one agricultural drone per Women SHG with 80% government subsidy. Trained SHG members earn ₹15,000/month by offering drone spraying services to farmers. Targets 15,000 SHGs. Cabinet approved November 2023. Total budget ₹1,261 crore.",
    is_active: true,
    content: `## Namo Drone Didi Yojana — When Rural Women Become Drone Pilots

Agriculture meets technology, and at the centre of it is a rural woman from a Self Help Group. The Namo Drone Didi Yojana provides agricultural drones to Women SHGs so they can offer pesticide and fertiliser spraying services to farmers — and earn ₹15,000 a month doing it.

The Cabinet approved the scheme on **November 28, 2023** with an outlay of **₹1,261 crore** for 15,000 Women SHGs across India.

---

## What the Scheme Provides

**For the SHG:**
- One complete agricultural drone package per SHG
- Government covers **80% of the drone cost, up to ₹8 lakh**
- The remaining 20% can be financed through a loan — the SHG does not need to pay upfront
- Total support per SHG: up to ₹10 lakh (drone + accessories + charging equipment)

**For the trained drone pilot:**
- 15-day training at an authorised training centre
- Training covers: drone flying, safety rules under DGCA drone regulations, applying nutrients and pesticides for crops, and minor repair and maintenance
- After training: the pilot operates the drone commercially for farmers in the area

**Earnings:**
- SHG members providing drone spraying services to farmers can earn approximately **₹15,000 per month**
- Charges collected from farmers for spraying services generate income for the SHG

---

## Who Gets Selected

This scheme works at the SHG level, not the individual level:

1. Women SHGs registered under **DAY-NRLM** and engaged in agricultural work are identified
2. The district NRLM team selects eligible SHGs
3. The selected SHG nominates one woman member (aged 18–50, minimum 10th pass) for drone pilot training
4. A second member is nominated as a drone assistant

---

## The Training Programme

**Duration:** 15 days at an authorised drone training institute

**What it covers:**
- Drone components, assembly, and pre-flight checklist
- Flying practice (simulator + actual field flying)
- DGCA Drone Rules — operational regulations, restricted zones, flight safety
- Agriculture-specific operations: spraying patterns for different crops, coverage calculation
- Minor maintenance and battery handling
- Documentation — maintaining spray logs for farmers

After completing training, the pilot gets a **Remote Pilot Certificate** from DGCA (Directorate General of Civil Aviation), which is mandatory to fly drones commercially in India.

---

## How to Express Interest

SHGs cannot apply directly online for a drone. The process goes through the government machinery:

1. **Contact your Block Agriculture Office** or **Pradhan Mantri Kisan Samriddhi Kendra (PMKSK)** in your district
2. **Contact your NRLM Block Resource Centre** — they have lists of SHGs being considered
3. **Visit namodronedidi.da.gov.in** for the latest updates, training centre lists, and selected SHG announcements
4. **Call DAY-NRLM helpline:** 1800-180-5999

---

## Quick Links

- **Official Website:** [namodronedidi.da.gov.in](https://namodronedidi.da.gov.in)
- **Lakhpati Didi Portal:** [lakhpatididi.gov.in](https://lakhpatididi.gov.in)
- **Helpline:** 1800-180-5999
`,
  },

  // ─────────────────────────────────────────────────────────────
  // 6. SUBHADRA YOJANA (ODISHA)
  // Source: subhadra.odisha.gov.in
  // Launched: September 17, 2023 by PM Modi in Bhubaneswar
  // ─────────────────────────────────────────────────────────────
  {
    slug: "subhadra-yojana-odisha",
    title: "Subhadra Yojana Odisha 2026 — ₹10,000/Year for 5 Years to Women Aged 21–60",
    ministry: "Government of Odisha, Women and Child Development Department",
    launched_by: "PM Narendra Modi, launched September 17, 2024 in Bhubaneswar, Odisha",
    objective:
      "Provide direct financial assistance of ₹50,000 over 5 years to eligible women in Odisha to enhance their economic self-reliance and financial inclusion.",
    eligibility: [
      "Must be a permanent resident of Odisha",
      "Age: 21 to 60 years",
      "Must be a woman (men are not eligible)",
      "Must hold NFSA ration card OR have annual family income ≤ ₹2.5 lakh",
      "Must have Aadhaar card and Aadhaar-linked bank account",
      "NOT eligible: Income tax payers, current or former MPs/MLAs, government employees receiving salary or pension, holders of constitutional posts",
    ],
    benefits: [
      "₹10,000 per year paid in two instalments of ₹5,000 each",
      "Instalment 1: Raksha Bandhan / Independence Day (August 15) every year",
      "Instalment 2: International Women's Day (March 8) every year",
      "Total benefit over 5 years: ₹50,000 per woman",
      "Additional: ₹500 gift voucher on the beneficiary's birthday",
      "All payments directly into Aadhaar-linked bank account via DBT",
    ],
    documents: [
      "Aadhaar card",
      "Aadhaar-linked bank account passbook (DBT enabled)",
      "NFSA ration card OR income certificate showing annual family income ≤ ₹2.5 lakh",
      "Residence certificate / Odisha domicile proof",
      "Passport-size photograph",
      "Self-declaration that you do not belong to excluded categories",
    ],
    how_to_apply:
      "Visit subhadra.odisha.gov.in to apply online. You will need your Aadhaar number and mobile number for OTP-based login. Fill in the application form, upload required documents, and submit. Offline applications can be submitted at your nearest Anganwadi centre, Gram Panchayat office, Mo Seba Kendra, or CSC (Common Service Centre). Applications are verified by ward/panchayat level officials before approval.",
    official_portal: "https://subhadra.odisha.gov.in",
    helpline_number: "14678 (Odisha government helpline)",
    category: "women-and-child",
    state: "odisha",
    description:
      "Subhadra Yojana provides ₹10,000 per year for 5 years (total ₹50,000) to women aged 21–60 in Odisha. Two instalments of ₹5,000 on Independence Day and Women's Day each year. Plus ₹500 birthday voucher. Launched September 17, 2024 by PM Modi.",
    is_active: true,
    content: `## Subhadra Yojana Odisha — ₹50,000 Over 5 Years for Women of Odisha

The Government of Odisha launched the Subhadra Yojana on **September 17, 2024** — and it is one of the most generous women's cash transfer schemes in India right now. Every eligible woman between 21 and 60 years gets ₹10,000 per year for five years, adding up to ₹50,000 in her bank account.

The scheme is named after Goddess Subhadra, and was launched by PM Narendra Modi in Bhubaneswar.

---

## How the Money Comes

The ₹10,000 annual amount is split into **two instalments of ₹5,000 each**:

| Instalment | Date |
|---|---|
| 1st Instalment | **August 15** (Independence Day / Raksha Bandhan period) |
| 2nd Instalment | **March 8** (International Women's Day) |

In addition, eligible beneficiaries receive a **₹500 voucher on their birthday** every year.

All payments go directly into the Aadhaar-linked bank account through DBT (Direct Benefit Transfer) — no middlemen, no cash handling.

---

## Who Is Eligible

| Criteria | Requirement |
|---|---|
| Resident | Permanent resident of Odisha |
| Age | 21 to 60 years |
| Income/Card | NFSA ration card holder OR annual family income ≤ ₹2.5 lakh |
| Bank account | Aadhaar-linked, DBT-enabled bank account |

**Not eligible:**
- Income tax payers (or those whose husband pays income tax)
- Current or former MPs, MLAs
- Government employees in service or drawing pension
- Holders of constitutional posts

---

## Documents Required

- Aadhaar card (mandatory)
- Aadhaar-linked bank account passbook
- NFSA ration card OR income certificate ≤ ₹2.5 lakh
- Odisha residence/domicile certificate
- Passport-size photo

---

## How to Apply

**Online:**
1. Visit **subhadra.odisha.gov.in**
2. Click on 'Apply' and log in with your Aadhaar-linked mobile number (OTP)
3. Fill in the application form — personal details, bank account details, ration card number
4. Upload required documents
5. Submit — you will receive an application number for tracking

**Offline:**
Visit your nearest Anganwadi centre, Gram Panchayat, Mo Seba Kendra, or CSC (Common Service Centre) with your documents.

Applications are verified by ward or panchayat officials before approval.

---

## How to Check Application Status

Visit **subhadra.odisha.gov.in** → Check Status → Enter your Aadhaar number or application number.

---

## Quick Links

- **Official Website:** [subhadra.odisha.gov.in](https://subhadra.odisha.gov.in)
- **Helpline:** 14678
`,
  },

  // ─────────────────────────────────────────────────────────────
  // 7. MAHTARI VANDANA YOJANA (CHHATTISGARH)
  // Source: mahtarivandan.cgstate.gov.in / pmindia.gov.in
  // Launched: March 1, 2024
  // ─────────────────────────────────────────────────────────────
  {
    slug: "mahtari-vandana-yojana-chhattisgarh",
    title: "Mahtari Vandana Yojana Chhattisgarh 2026 — ₹1,000/Month for Women Directly in Bank Account",
    ministry: "Women and Child Development Department, Government of Chhattisgarh",
    launched_by: "CM Vishnu Deo Sai — launched March 1, 2024 in Chhattisgarh",
    objective:
      "Provide direct monthly financial assistance of ₹1,000 to eligible married, widowed, and divorced women in Chhattisgarh to improve their economic independence and financial security.",
    eligibility: [
      "Permanent resident of Chhattisgarh",
      "Married, widowed, or divorced woman",
      "Age: 21 years and above",
      "Annual family income: Below ₹2.5 lakh per year",
      "Must have Aadhaar card and Aadhaar-linked bank account",
      "eKYC must be completed (current deadline: June 30, 2026)",
      "NOT eligible: Income tax payers, female MLAs/MPs, government employees drawing salary or pension, women holding constitutional posts",
    ],
    benefits: [
      "₹1,000 per month paid directly into Aadhaar-linked bank account via DBT",
      "₹12,000 per year total",
      "Monthly payment, typically released between 1st to 10th of every month",
      "Currently 68.48 lakh women are receiving this benefit",
      "26th instalment released in April 2026; total ₹16,881 crore disbursed so far",
    ],
    documents: [
      "Aadhaar card (mandatory)",
      "Aadhaar-linked bank account passbook",
      "Marriage certificate (for married women) or death certificate of husband (for widows) or divorce certificate (for divorced women)",
      "Chhattisgarh domicile / residence certificate",
      "Passport-size photograph",
      "Income certificate showing family income below ₹2.5 lakh",
    ],
    how_to_apply:
      "Visit mahtarivandan.cgstate.gov.in to apply or check status online. Log in with your Aadhaar-linked mobile number. For offline applications, visit your nearest Anganwadi centre, Gram Panchayat Bhawan (rural) or Ward Office (urban), or CSC centre. Complete your eKYC before June 30, 2026 at the Gram Panchayat Bhawan or Ward Office — otherwise your monthly payment may be stopped. For status check and payment verification, visit mahtarivandan.cgstate.gov.in.",
    official_portal: "https://mahtarivandan.cgstate.gov.in",
    helpline_number: "181 (CG Women & Child Development helpline)",
    category: "women-and-child",
    state: "chhattisgarh",
    description:
      "Mahtari Vandana Yojana gives ₹1,000 per month (₹12,000/year) directly to married, widowed, and divorced women of Chhattisgarh aged 21+. Over 68 lakh women currently benefit. Launched March 1, 2024 by CG CM Vishnu Deo Sai. eKYC must be completed by June 30, 2026.",
    is_active: true,
    content: `## Mahtari Vandana Yojana — ₹1,000 Every Month for Women of Chhattisgarh

Every month, ₹1,000 lands directly in the bank account of over **68 lakh women** in Chhattisgarh. No one to ask for it, no queue to stand in, no form to fill every month. Once registered and approved, the money comes automatically.

The Mahtari Vandana Yojana was launched on **March 1, 2024** by the BJP government of Chhattisgarh under Chief Minister Vishnu Deo Sai. By April 2026, the 26th monthly instalment has been released and the state has disbursed over **₹16,881 crore** in total under this scheme.

---

## Who Is Eligible

| Criteria | Requirement |
|---|---|
| State residency | Permanent resident of Chhattisgarh |
| Marital status | Married, widowed, or divorced |
| Age | 21 years or above |
| Annual family income | Below ₹2.5 lakh per year |
| Bank account | Aadhaar-linked, DBT-enabled |
| eKYC | Must be completed (deadline: June 30, 2026) |

**Who is NOT eligible:**
- Women who are MLAs, MPs, or holders of constitutional posts
- Women who are Central or State Government employees drawing salary or pension
- Women or whose husband is an income tax payer

---

## How the Payment Works

- ₹1,000 per month → ₹12,000 per year
- Payment credited directly to your Aadhaar-linked bank account
- Typically released between the 1st and 10th of every month
- Payment mode: DBT (Direct Benefit Transfer)

---

## Important: eKYC Deadline June 30, 2026

The state government has started an eKYC drive from April 3, 2026. If you are an existing beneficiary and your eKYC is pending, you must complete it **before June 30, 2026** at:
- Your **Gram Panchayat Bhawan** (for village residents)
- Your **Ward Office** (for town/city residents)

If eKYC is not done by June 30, 2026, your monthly payment of ₹1,000 may be stopped.

---

## How to Apply (New Applicants)

**Online:**
1. Visit **mahtarivandan.cgstate.gov.in**
2. Register with your Aadhaar-linked mobile number
3. Fill the application form — personal details, bank account, marital status proof
4. Upload documents and submit

**Offline:**
Visit your nearest Anganwadi centre, Gram Panchayat (village), or Ward Office (urban) with all documents.

---

## How to Check Payment Status

Visit **mahtarivandan.cgstate.gov.in** → Login → Check Payment Status / Instalment Details

---

## Documents Required

- Aadhaar card
- Aadhaar-linked bank passbook (DBT enabled)
- Marriage / widowhood / divorce certificate
- Income certificate (family income < ₹2.5 lakh)
- Chhattisgarh residence certificate
- Passport-size photo

---

## Quick Links

- **Official Website:** [mahtarivandan.cgstate.gov.in](https://mahtarivandan.cgstate.gov.in)
- **Helpline:** 181 (CG Women & Child Development)
`,
  },

  // ─────────────────────────────────────────────────────────────
  // 8. MUKHYAMANTRI MAJHI LADKI BAHIN YOJANA (MAHARASHTRA)
  // Source: ladakibahin.maharashtra.gov.in
  // Launched: June 28, 2024
  // ─────────────────────────────────────────────────────────────
  {
    slug: "majhi-ladki-bahin-yojana-maharashtra",
    title: "Mukhyamantri Majhi Ladki Bahin Yojana Maharashtra 2026 — ₹1,500/Month for Women",
    ministry: "Women & Child Development Department, Government of Maharashtra",
    launched_by: "Mahayuti Government of Maharashtra — launched June 28, 2024",
    objective:
      "Provide monthly financial assistance of ₹1,500 to economically weaker women in Maharashtra to enhance their financial independence and self-reliance.",
    eligibility: [
      "Permanent resident of Maharashtra",
      "Married, widowed, divorced, abandoned, or destitute woman",
      "Age: 21 to 65 years",
      "Annual family income: Below ₹2.5 lakh",
      "Must have Aadhaar card and Aadhaar-linked bank account (DBT enabled)",
      "eKYC must be completed",
      "NOT eligible: Income tax payers, women who are MPs/MLAs/government employees in service, women receiving pension or salary from government",
    ],
    benefits: [
      "₹1,500 per month paid directly to Aadhaar-linked bank account via DBT",
      "₹18,000 per year",
      "Payments made through the Women & Child Development Department",
    ],
    documents: [
      "Aadhaar card",
      "Aadhaar-linked bank account passbook (DBT enabled)",
      "Maharashtra domicile / residence certificate",
      "Income certificate (family income < ₹2.5 lakh)",
      "Ration card (yellow/orange/white)",
      "Marital status proof (marriage certificate / death certificate of husband for widows / divorce certificate)",
      "Passport-size photograph",
    ],
    how_to_apply:
      "Apply online at ladakibahin.maharashtra.gov.in or via the Nari Shakti Doot mobile app (available on Android). You can also apply offline at any Anganwadi centre, Setu Suvidha Kendra, or Aaple Sarkar Seva Kendra. Complete your Aadhaar-based eKYC during or after registration. The Maharashtra government has conducted multiple rounds of applications — check the official portal for whether new applications are currently open.",
    official_portal: "https://ladakibahin.maharashtra.gov.in",
    helpline_number: "181 (Maharashtra Women & Child Helpline)",
    category: "women-and-child",
    state: "maharashtra",
    description:
      "Ladki Bahin Yojana gives ₹1,500 per month (₹18,000/year) directly to eligible women in Maharashtra aged 21–65 from families earning under ₹2.5 lakh. Applies to married, widowed, divorced, abandoned, or destitute women. Launched June 28, 2024 by Maharashtra's Mahayuti government.",
    is_active: true,
    content: `## Mukhyamantri Majhi Ladki Bahin Yojana — ₹1,500 Every Month for Maharashtra's Women

Maharashtra's Mahayuti government launched the Mukhyamantri Majhi Ladki Bahin Yojana on **June 28, 2024** — and it quickly became one of the most talked-about welfare schemes in the state. Eligible women receive **₹1,500 every month** directly in their bank account, no questions asked, as long as they meet the eligibility criteria.

---

## Who Is Eligible

| Criteria | Requirement |
|---|---|
| State residency | Permanent resident of Maharashtra |
| Marital status | Married, widowed, divorced, abandoned, or destitute |
| Age | 21 to 65 years |
| Annual family income | Below ₹2.5 lakh |
| Bank account | Aadhaar-linked with DBT activated |

**Who is NOT eligible:**
- Income tax payers (or whose husband pays income tax)
- Government employees receiving salary
- Women drawing pension from central/state government
- Current MPs, MLAs, or holders of constitutional posts

---

## Monthly Payment

**₹1,500 per month → ₹18,000 per year**

The amount is transferred directly to your Aadhaar-linked bank account through DBT. No cash, no cheque, no third party.

---

## Documents Required

- Aadhaar card
- Aadhaar-linked bank account passbook (DBT enabled)
- Maharashtra domicile certificate or valid residence proof
- Ration card (yellow, orange, or white)
- Income certificate showing annual family income below ₹2.5 lakh
- Marriage / widowhood / divorce certificate (as applicable)
- Recent passport-size photograph

---

## How to Apply

**Online (ladakibahin.maharashtra.gov.in):**
1. Go to the official portal
2. Register with your Aadhaar-linked mobile number
3. Fill in the application form with personal, family, and bank details
4. Upload required documents
5. Complete Aadhaar eKYC
6. Submit and save your application number

**Mobile App:**
Download **Nari Shakti Doot** from Google Play Store → Apply directly from the app.

**Offline:**
Visit your nearest:
- Anganwadi centre
- Setu Suvidha Kendra
- Aaple Sarkar Seva Kendra

---

## How to Check Payment Status

Visit **ladakibahin.maharashtra.gov.in** → Login → Payment Status / Instalment Details

---

## Quick Links

- **Official Website:** [ladakibahin.maharashtra.gov.in](https://ladakibahin.maharashtra.gov.in)
- **Helpline:** 181 (Women Helpline)
`,
  },

  // ─────────────────────────────────────────────────────────────
  // 9. GRUHA LAKSHMI YOJANA (KARNATAKA)
  // Source: sevasindhu.karnataka.gov.in
  // Launched: August 19, 2023
  // ─────────────────────────────────────────────────────────────
  {
    slug: "gruha-lakshmi-yojana-karnataka",
    title: "Gruha Lakshmi Yojana Karnataka 2026 — ₹2,000/Month for Women Heads of Household",
    ministry: "Women & Child Development Department, Government of Karnataka",
    launched_by: "CM Siddaramaiah — launched August 19, 2023 in Karnataka",
    objective:
      "Provide monthly direct financial assistance to women who are the head of their family in Karnataka, recognising their role in household management and improving their economic independence.",
    eligibility: [
      "Permanent resident of Karnataka",
      "Woman identified as the 'head of family' in the ration card (Antyodaya, BPL, or APL)",
      "Aadhaar card linked to bank account for DBT",
      "NOT eligible: Women who are income tax payers",
      "NOT eligible: Women whose husband is an income tax payer",
      "Government employees may have restrictions — check the official portal for current norms",
      "Age: No specific age restriction — the head of family in the ration card is eligible",
    ],
    benefits: [
      "₹2,000 per month paid directly to Aadhaar-linked bank account via DBT",
      "₹24,000 per year",
      "Over 1.3 crore women are already registered and receiving the benefit",
      "Part of the Karnataka government's 5 Guarantee schemes (Pancha Guarantees)",
    ],
    documents: [
      "Aadhaar card",
      "Aadhaar-linked bank account passbook (DBT enabled)",
      "Ration card showing the applicant as head of family (Antyodaya / BPL / APL)",
      "Karnataka domicile proof",
      "Passport-size photograph",
    ],
    how_to_apply:
      "Apply online at the Seva Sindhu portal: sevasindhu.karnataka.gov.in → Apply for Services → Search 'Gruha Lakshmi' → Click 'Application for Gruhalakshmi Scheme'. You can also apply offline at Grama One centres, Bangalore One centres, Karnataka One service centres, Bapuji Seva Kendras, and Nada Kacheris. Your application is verified by the local revenue and ration card authorities.",
    official_portal: "https://sevasindhu.karnataka.gov.in",
    helpline_number: "1902 (Karnataka Seva Sindhu helpline)",
    category: "women-and-child",
    state: "karnataka",
    description:
      "Gruha Lakshmi Yojana provides ₹2,000 per month to women who are the head of the family in Karnataka's ration cards. Over 1.3 crore women registered. Part of Karnataka's Pancha Guarantees. Launched August 19, 2023 by CM Siddaramaiah. Apply at sevasindhu.karnataka.gov.in.",
    is_active: true,
    content: `## Gruha Lakshmi Yojana — ₹2,000 a Month for Women Who Run the House

The woman who is the head of the household in a Karnataka ration card gets **₹2,000 every month** from the state government. No complex application, no big criteria — if your name is listed as the head of family in your Antyodaya, BPL, or APL ration card, you qualify.

Gruha Lakshmi is part of Karnataka's **Pancha Guarantees** (five election promises that the Congress government delivered after coming to power in 2023). Over **1.3 crore women** are registered and receiving the benefit as of 2026.

---

## Who Is Eligible

| Criteria | Requirement |
|---|---|
| State residency | Permanent resident of Karnataka |
| Ration card status | Listed as **head of family** in Antyodaya / BPL / APL ration card |
| Bank account | Aadhaar-linked, DBT enabled |
| Tax status | NOT eligible if woman or husband pays income tax |

---

## How Much You Get

**₹2,000 per month → ₹24,000 per year**

Transferred directly into your Aadhaar-linked bank account via DBT every month.

---

## How to Apply

**Online (Seva Sindhu Portal):**
1. Go to **sevasindhu.karnataka.gov.in**
2. Click on "Apply For Services"
3. Search "Gruha Lakshmi Scheme"
4. Click "Application for Gruhalakshmi Scheme"
5. Log in with your Aadhaar-linked mobile number
6. Fill in details and upload your ration card, Aadhaar, and bank passbook
7. Submit — track your application with the reference number given

**Offline:**
Visit any of these centres with your original documents:
- Grama One (village level)
- Bangalore One / Karnataka One (urban)
- Bapuji Seva Kendra
- Nada Kacheri (Nadakacheri office)

---

## Documents Required

- Aadhaar card
- Aadhaar-linked bank account passbook (DBT enabled)
- Ration card (where your name appears as head of family)
- Karnataka residence proof (if not already in ration card)
- Passport-size photo

---

## How to Check Application / Payment Status

Visit **sevasindhu.karnataka.gov.in** → Track Application → Enter your application number or Aadhaar number.

---

## Quick Links

- **Official Portal:** [sevasindhu.karnataka.gov.in](https://sevasindhu.karnataka.gov.in)
- **Helpline:** 1902
`,
  },

  // ─────────────────────────────────────────────────────────────
  // 10. PM SVANIDHI YOJANA
  // Source: pmsvanidhi.mohua.gov.in
  // Launched: June 1, 2020
  // ─────────────────────────────────────────────────────────────
  {
    slug: "pm-svanidhi-yojana",
    title: "PM SVANidhi Yojana 2026 — Collateral-Free Loan Up to ₹50,000 for Street Vendors",
    ministry: "Ministry of Housing and Urban Affairs, Government of India",
    launched_by: "Government of India — launched June 1, 2020",
    objective:
      "Provide affordable working capital loans to street vendors who lost their livelihoods during the COVID-19 pandemic, help them restart their businesses, and enable their graduation to formal financial services.",
    eligibility: [
      "Street vendors who vend in urban areas (cities, towns, peri-urban areas)",
      "Must have a Certificate of Vending or Identity Card issued by Urban Local Body (ULB)",
      "OR a Letter of Recommendation (LoR) from ULB or Town Vending Committee (TVC) if not surveyed",
      "OR vendors identified in ULB-led surveys as conducting vending but not issued a certificate yet",
      "All categories of street vendors — food vendors, vegetable sellers, fruit sellers, cobblers, pan shops, tea stalls, barbers, laundry, book stalls, textile sellers, etc.",
    ],
    benefits: [
      "1st Loan: ₹10,000 — collateral-free, no guarantor required",
      "2nd Loan: ₹20,000 — after timely repayment of 1st loan",
      "3rd Loan: ₹50,000 — after timely repayment of 2nd loan",
      "Interest subsidy: 7% per annum on timely or early repayment",
      "Cashback incentive: Up to ₹100 per month for digital transactions (UPI, debit card)",
      "Loan tenure: 12 months (1st), 18 months (2nd), 36 months (3rd)",
      "No collateral, no guarantor required for any of the three loan stages",
    ],
    documents: [
      "Certificate of Vending / Identity Card from ULB (if available)",
      "Letter of Recommendation from ULB or TVC (if no certificate)",
      "Aadhaar card (mandatory for application)",
      "Bank account details (for loan disbursal)",
      "Mobile number linked to Aadhaar",
    ],
    how_to_apply:
      "Apply online at pmsvanidhi.mohua.gov.in. Click on 'Apply Loan 10K' (for first-time applicants) and log in with your Aadhaar-linked mobile number. Fill in your personal and vending details, upload your Certificate of Vending or Letter of Recommendation, and submit. You can also apply through any nearby bank (SBI, PNB, UCO, BOI, Canara, etc.) or MFI (Micro Finance Institution) or NBFC that participates in the scheme. Alternatively, visit a nearby CSC (Common Service Centre) for assisted application.",
    official_portal: "https://pmsvanidhi.mohua.gov.in",
    helpline_number: "1800-11-6446 (PM SVANidhi helpline)",
    category: "employment",
    state: "all-india",
    description:
      "PM SVANidhi provides collateral-free working capital loans to street vendors — ₹10,000 first, then ₹20,000, then ₹50,000 — with 7% interest subsidy and ₹100/month cashback for digital payments. Launched June 1, 2020. Apply at pmsvanidhi.mohua.gov.in.",
    is_active: true,
    content: `## PM SVANidhi — Loans Up to ₹50,000 for India's Street Vendors

Street vendors are the backbone of urban India's food economy. The sabzi wala, the chaiwala, the cobbler at the corner — they support millions of families. The PM SVANidhi scheme exists specifically for them: **collateral-free working capital loans starting at ₹10,000**, going up to ₹50,000 as the vendor grows their business.

PM SVANidhi (Pradhan Mantri Street Vendor's AtmaNirbhar Nidhi) was launched on **June 1, 2020** after COVID-19 crippled the livelihoods of millions of street vendors.

---

## The Three Loan Stages

| Stage | Loan Amount | Tenure | Condition |
|---|---|---|---|
| 1st Loan | ₹10,000 | 12 months | New applicants |
| 2nd Loan | ₹20,000 | 18 months | After timely repayment of 1st loan |
| 3rd Loan | ₹50,000 | 36 months | After timely repayment of 2nd loan |

**No collateral. No guarantor. No property papers.** The loan is given purely on the basis of your vending identity.

---

## Extra Benefits

**7% Interest Subsidy:**
If you repay your loan on time (or early), the government reimburses 7% per annum interest directly to your bank account as a subsidy. This makes the effective interest rate significantly lower.

**₹100/Month Cashback:**
Use digital payment methods at your stall (UPI, debit card reader) and earn up to ₹100 per month as cashback. This incentive is given to encourage adoption of digital payments.

---

## Who Can Apply

Any street vendor in an urban area who falls into one of these categories:

1. **Has a Certificate of Vending or Vendor ID card** issued by the Urban Local Body (municipality)
2. **Has a Letter of Recommendation (LoR)** from the ULB or Town Vending Committee (TVC) — given to vendors who were missed in surveys or started vending after the survey
3. **Was surveyed by ULB but not yet given a certificate** — they can also apply

Types of vendors covered: food vendors, vegetable/fruit sellers, tea/snack stalls, cobblers, tailors, pan shops, barbers, laundry services, book/stationery stalls, flower vendors, textile sellers, toy vendors, and more.

---

## How to Apply

**Online:**
1. Go to **pmsvanidhi.mohua.gov.in**
2. Click "Apply Loan 10K" (for first-time applicants)
3. Log in with your Aadhaar-linked mobile number (OTP verification)
4. Fill in personal details, vending location, business type
5. Upload Certificate of Vending or LoR
6. Select your preferred bank/MFI
7. Submit — the bank processes the loan application

**Through a bank branch:**
Visit any SBI, PNB, Canara, UCO, BOI, or other participating bank branch with your documents and apply directly.

**Through a CSC:**
Visit your nearest Common Service Centre for assisted application.

---

## Quick Links

- **Official Portal:** [pmsvanidhi.mohua.gov.in](https://pmsvanidhi.mohua.gov.in)
- **Helpline:** 1800-11-6446 (toll-free)
`,
  },

  // ─────────────────────────────────────────────────────────────
  // 11. STAND UP INDIA SCHEME
  // Source: standupmitra.in / SIDBI
  // Launched: April 5, 2016
  // ─────────────────────────────────────────────────────────────
  {
    slug: "stand-up-india-scheme",
    title: "Stand Up India Scheme 2026 — Loans ₹10 Lakh to ₹1 Crore for SC/ST and Women Entrepreneurs",
    ministry: "Ministry of Finance, Government of India (implemented through SIDBI and Scheduled Commercial Banks)",
    launched_by: "PM Narendra Modi — launched April 5, 2016",
    objective:
      "Facilitate bank loans to SC, ST, and women entrepreneurs for setting up greenfield enterprises (first-time businesses) in manufacturing, services, trading, or agriculture-allied sectors.",
    eligibility: [
      "Must belong to SC (Scheduled Caste), ST (Scheduled Tribe) category — OR be a woman",
      "Age: 18 years and above (no upper age limit)",
      "First-time enterprise only — 'greenfield' means a new business venture you are starting for the first time",
      "In partnership or company: at least 51% controlling stake must be held by SC/ST or woman",
      "Must not be in default with any bank or financial institution",
      "The enterprise should be in manufacturing, services, trading, or agri-allied sectors",
    ],
    benefits: [
      "Composite loan from ₹10 lakh to ₹1 crore (covering 75% of project cost including term loan and working capital)",
      "At least one loan per bank branch to one SC/ST borrower and one woman borrower",
      "Repayment period up to 7 years with an 18-month moratorium",
      "Margin money: Borrower contributes minimum 10% of project cost",
      "Loans available through all Scheduled Commercial Banks across India",
      "SIDBI's Stand Up India portal (standupmitra.in) provides hand-holding support, training resources, and digital tools for first-time entrepreneurs",
    ],
    documents: [
      "Identity proof: Aadhaar card + SC/ST certificate (from competent authority) OR proof that applicant is a woman",
      "Address proof",
      "Business plan / project report",
      "Bank account details",
      "Passport-size photographs",
      "No-objection certificate from local authority if applicable",
    ],
    how_to_apply:
      "Apply online at standupmitra.in — SIDBI's dedicated portal for the scheme. You can browse partner banks, create a profile, submit a preliminary application online, and get connected to the nearest bank branch that handles Stand Up India loans. Alternatively, visit any Scheduled Commercial Bank branch directly and ask for a Stand Up India loan application. The Lead District Manager (LDM) at district level also coordinates with banks for this scheme.",
    official_portal: "https://standupmitra.in",
    helpline_number: "1800-180-1111 (SIDBI / MSME helpline)",
    category: "employment",
    state: "all-india",
    description:
      "Stand Up India provides bank loans from ₹10 lakh to ₹1 crore for SC/ST and women entrepreneurs to set up their first business. Repayment up to 7 years with 18-month moratorium. Launched April 5, 2016. Apply at standupmitra.in through any Scheduled Commercial Bank.",
    is_active: true,
    content: `## Stand Up India — Bank Loans Up to ₹1 Crore for SC/ST and Women First-Time Business Owners

If you are a woman, or belong to SC or ST category, and want to start your first business but don't have the capital — Stand Up India can get you a bank loan from **₹10 lakh to ₹1 crore** without complicated equity or collateral requirements.

The scheme was launched by PM Narendra Modi on **April 5, 2016** with a simple philosophy: every bank branch in India must support at least one SC/ST borrower and one woman borrower to set up a new enterprise.

---

## What "Greenfield" Means (Important)

Stand Up India is specifically for **greenfield enterprises** — meaning this must be your **first business venture**. If you already run an existing business and want to expand it, this scheme is not for you. But if you are starting fresh, this is exactly what you need.

---

## Loan Details

| Feature | Detail |
|---|---|
| Loan range | ₹10 lakh to ₹1 crore |
| Coverage | Up to 75% of project cost |
| Borrower's contribution | Minimum 10% of project cost |
| Loan type | Composite (term loan + working capital) |
| Repayment period | Up to 7 years |
| Moratorium | 18 months (no repayment required for first 18 months) |
| Sectors | Manufacturing, services, trading, agri-allied |

---

## Who Is Eligible

| Criteria | Requirement |
|---|---|
| Category | Must be SC/ST OR a woman (any caste/religion) |
| Age | 18 years or above |
| Business type | First-time (greenfield) enterprise only |
| Stake in business | 51% controlling ownership by SC/ST or woman |
| Credit history | No default with any bank |

---

## How to Apply

**Online via Stand Up Mitra Portal:**
1. Visit **standupmitra.in**
2. Create an applicant profile — fill in your personal details, business idea, loan requirement
3. Browse participating banks and select your preferred bank
4. Submit preliminary application
5. Bank branch contacts you for further verification and documentation

**Directly at a bank branch:**
Walk into any Scheduled Commercial Bank (SBI, PNB, BOI, Canara, Axis, HDFC, ICICI, etc.) and ask specifically for the Stand Up India loan. Every branch is mandated to handle this.

**Via Lead District Manager (LDM):**
Your district's LDM coordinates with banks to facilitate Stand Up India loans. Contact your district's NABARD or SIDBI office if you face difficulty at the bank branch level.

---

## Documents Required

- Aadhaar card
- SC/ST certificate issued by competent authority (for SC/ST applicants)
- Business plan / detailed project report
- Address proof of business location
- Bank account statements (last 6 months)
- 2 passport-size photographs

---

## Quick Links

- **Official Portal:** [standupmitra.in](https://standupmitra.in)
- **Helpline:** 1800-180-1111
`,
  },

  // ─────────────────────────────────────────────────────────────
  // 12. BETI BACHAO BETI PADHAO (BBBP)
  // Source: wcd.nic.in / bbbp.gov.in
  // Launched: January 22, 2015 (Panipat, Haryana)
  // ─────────────────────────────────────────────────────────────
  {
    slug: "beti-bachao-beti-padhao",
    title: "Beti Bachao Beti Padhao Yojana 2026 — Girl Child Welfare, Education & Sex Ratio Scheme",
    ministry: "Ministry of Women and Child Development + Ministry of Health & Family Welfare + Ministry of Education, Government of India",
    launched_by: "PM Narendra Modi — launched January 22, 2015, Panipat, Haryana",
    objective:
      "Prevent female foeticide and girl child abandonment, improve the Child Sex Ratio (CSR) across India, ensure the survival and protection of the girl child, and promote girl education and participation in society.",
    eligibility: [
      "All families with a girl child in India are the target group",
      "Special focus on districts with low Child Sex Ratio (CSR)",
      "Financial benefits (through linked Sukanya Samriddhi Yojana): Girl child below 10 years at time of account opening",
      "One SSY account per girl child, maximum two accounts per family (twins/triplets as a special case)",
      "No income restriction — all families can participate",
    ],
    benefits: [
      "Mass awareness campaigns to change mindset against girl child discrimination",
      "Financial benefits through Sukanya Samriddhi Yojana (SSY): 8.2% interest, tax-free savings for girl child education and marriage",
      "Scholarships and educational support for girl children in targeted districts",
      "Health initiatives: improved antenatal care, registration of births, sex determination ban enforcement",
      "Girl child immunisation drives",
      "State governments run their own cash incentive schemes under BBBP framework",
    ],
    documents: [
      "Girl child's birth certificate",
      "Parent/guardian's Aadhaar card",
      "For Sukanya Samriddhi Yojana account (linked scheme): Aadhaar of girl child + parents + proof of address",
    ],
    how_to_apply:
      "BBBP is primarily an awareness and advocacy scheme — there is no single application form. Families benefit through several linked programmes. For the Sukanya Samriddhi Yojana (SSY) financial component, visit any Post Office or authorised bank (SBI, HDFC, etc.) and open an SSY account in your daughter's name. The minimum deposit is ₹250/year; maximum is ₹1.5 lakh/year. The account matures when the girl turns 21, and the full corpus with 8.2% interest is tax-free under Section 80C.",
    official_portal: "https://wcd.nic.in",
    helpline_number: "1091 (Women Helpline) / 181 (WCD helpline)",
    category: "women-and-child",
    state: "all-india",
    description:
      "Beti Bachao Beti Padhao is a national programme to stop female foeticide, improve child sex ratio, and promote girl education across India. Launched January 22, 2015. Financial benefits through linked Sukanya Samriddhi Yojana — 8.2% interest, tax-free savings for girls. No income restriction.",
    is_active: true,
    content: `## Beti Bachao Beti Padhao — India's Mission to Protect and Educate the Girl Child

India's Child Sex Ratio had fallen to an alarming 918 girls per 1000 boys (Census 2011). PM Modi launched Beti Bachao Beti Padhao (BBBP) on **January 22, 2015 in Panipat, Haryana** — one of the worst-affected districts — with a clear message: a girl child's life has equal value, equal right to exist, and equal right to education.

BBBP is not just a single scheme — it is a nationwide social campaign backed by programmes, funds, and linked financial schemes.

---

## What BBBP Does

**1. Prevents Female Foeticide**
Strict enforcement of the Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act to ban sex-selective abortions. Awareness campaigns against dowry and son preference.

**2. Protects the Girl Child**
Better birth registration, girl child immunisation drives, tracking girls who drop out of school, and sensitising community leaders, police, and health workers.

**3. Promotes Girl Education**
Encouraging girl enrolment in schools, reducing dropout rates, and providing scholarships and support to girls to continue education beyond class 8.

---

## The Financial Component — Sukanya Samriddhi Yojana (SSY)

BBBP's savings component is the **Sukanya Samriddhi Yojana (SSY)**. If you have a daughter below 10 years of age, you can open an SSY account at any Post Office or authorised bank.

| Feature | Detail |
|---|---|
| Interest rate | **8.2% per annum** (revised April 2024) |
| Minimum deposit | ₹250 per year |
| Maximum deposit | ₹1.5 lakh per year |
| Tax benefit | Deposits deductible under Section 80C; interest and maturity are tax-free |
| Account maturity | When the girl turns 21 (partial withdrawal for education allowed at 18) |

This is one of the highest interest-earning, fully government-backed savings schemes available to any family in India.

---

## State-Level BBBP Schemes

Many states run their own cash incentive programmes under the BBBP framework:
- **Rajasthan Aapki Beti Yojana** — annual scholarship for girls
- **Mukhyamantri Kanya Sumangala Yojana UP** — ₹25,000 for girl child in 6 stages
- **Mukhyamantri Rajshri Yojana** — cash transfers at multiple stages of girl's life (Rajasthan)
- **Bhagya Lakshmi** (Karnataka/UP) — insurance and cash at birth and key life stages

---

## How to Participate

**For SSY (savings):**
1. Visit your nearest Post Office or authorised bank branch
2. Ask for Sukanya Samriddhi Yojana account opening form
3. Submit: Girl's birth certificate, parent/guardian Aadhaar, address proof, initial deposit (minimum ₹250)
4. Account is opened in the girl's name; deposits up to ₹1.5 lakh/year until she turns 15; account matures at 21

**For BBBP awareness and community programmes:**
Contact your district's Women & Child Development office or visit wcd.nic.in for district-level activities.

---

## Quick Links

- **Official Website:** [wcd.nic.in](https://wcd.nic.in)
- **Sukanya Samriddhi Yojana (linked):** Available at any Post Office or authorised bank
- **Women Helpline:** 1091
- **WCD Helpline:** 181
`,
  },

  // ─────────────────────────────────────────────────────────────
  // 13. PM MATSYA SAMPADA YOJANA (PMMSY)
  // Source: dof.gov.in / pmmsy.dof.gov.in
  // Launched: September 10, 2020
  // Total outlay: ₹20,050 crore (2020-2025)
  // ─────────────────────────────────────────────────────────────
  {
    slug: "pm-matsya-sampada-yojana",
    title: "PM Matsya Sampada Yojana (PMMSY) 2026 — ₹20,050 Crore Fisheries Development Scheme",
    ministry: "Ministry of Fisheries, Animal Husbandry and Dairying, Government of India",
    launched_by: "PM Narendra Modi — launched September 10, 2020",
    objective:
      "Develop the fisheries sector in India sustainably, create infrastructure for fish production and processing, double the income of fishers and fish farmers, generate 55 lakh employment opportunities, and bring fisheries exports to ₹1 lakh crore by 2024-25.",
    eligibility: [
      "Fishers (traditional and inland fishers)",
      "Fish farmers",
      "Fish workers and fish vendors",
      "Self Help Groups (SHGs) involved in fisheries",
      "Fisheries cooperatives",
      "Fisheries development corporations",
      "State Fisheries Departments",
      "Fish Processing Enterprises and startups",
      "SC/ST and women fishers get 60% subsidy (general category gets 40%)",
    ],
    benefits: [
      "Subsidy on fish farm infrastructure: 40% for general, 60% for SC/ST and women",
      "Financial assistance for fishing boats, nets, and equipment",
      "Cold chain and fish processing infrastructure support",
      "Fish feed units and fish seed hatchery support",
      "Insurance cover for fishers: ₹5 lakh accident cover for fishers at sea",
      "Kisan Credit Card (KCC) extended to fishers and aquaculture farmers",
      "Support for seaweed cultivation, ornamental fisheries, and deep-sea fishing",
      "Bio-toilet installation in fishing vessels support",
    ],
    documents: [
      "Aadhaar card",
      "Farmer / fisher registration or certificate from state fisheries department",
      "Bank account details",
      "Land documents or water body lease documents (for aquaculture)",
      "Project proposal/DPR (for infrastructure units)",
      "SC/ST certificate (if applicable, for higher subsidy)",
    ],
    how_to_apply:
      "Apply through your State Fisheries Department — PMMSY is implemented at the state level through State Fisheries Departments and UTs. Visit your district's Fisheries Development Officer (FDO) office to learn about the specific components for which you are eligible and how to apply. You can also visit pmmsy.dof.gov.in for component-wise details, subsidy rates, and state-level nodal officer contacts.",
    official_portal: "https://pmmsy.dof.gov.in",
    helpline_number: "1800-425-1660 (Fisheries helpline, toll-free)",
    category: "agriculture",
    state: "all-india",
    description:
      "PM Matsya Sampada Yojana is India's largest fisheries scheme with ₹20,050 crore outlay. Supports fishers, fish farmers, and fish vendors through subsidised infrastructure, insurance, equipment, and cold chain support. SC/ST and women get 60% subsidy. Launched September 10, 2020.",
    is_active: true,
    content: `## PM Matsya Sampada Yojana — Transforming India's Fisheries Sector

India is the third-largest fish-producing country in the world, with about 1.6 crore people working in fisheries and aquaculture. But their income remained low, infrastructure poor, and post-harvest losses high. PM Matsya Sampada Yojana (PMMSY) is the government's answer — a ₹20,050 crore investment to transform the sector over 5 years (2020–25).

Launched by PM Modi on **September 10, 2020**, PMMSY is the most significant fisheries scheme India has ever had.

---

## Who Benefits

- Traditional marine fishers (sea fishers)
- Inland fishers (river, lake, reservoir)
- Aquaculture fish farmers (pond farming, cage farming)
- Fish seed producers (hatchery operators)
- Fish processors and fish feed manufacturers
- Fish vendors and retail traders
- Fisheries cooperatives and SHGs

---

## Key Benefits and Subsidies

**For individual fishers and fish farmers:**

| Component | Subsidy — General | Subsidy — SC/ST/Women |
|---|---|---|
| Fish pond construction | 40% | 60% |
| Biofloc/RAS (advanced aquaculture) | 40% | 60% |
| Fishing boats and nets | 40% | 60% |
| Fish feed unit | 40% | 60% |
| Ice plant, cold storage, refrigerated vehicles | 40% | 60% |
| Fish kiosks and retail outlets | 40% | 60% |

**Accident Insurance for Fishers:**
- Fishers working at sea get **₹5 lakh accident cover** and **₹25 lakh accidental death cover** under the scheme framework
- Group accident insurance provided at low or zero cost

**Kisan Credit Card for Fishers:**
- The KCC facility has been extended to fishers and aquaculture farmers
- Working capital for fishing operations at concessional interest rates

---

## Special Focus Areas

**Seaweed Cultivation:**
Financial assistance to develop India's seaweed farming sector, with high export potential.

**Ornamental Fish:**
Support for setting up ornamental fish (aquarium fish) breeding and rearing units — a high-income niche.

**Deep Sea Fishing:**
Assistance for larger, ocean-going fishing vessels to access deeper waters and higher-value marine catch.

**Fish Processing:**
Cold chain infrastructure — ice plants, cold rooms, refrigerated transport vans — to reduce post-harvest losses.

---

## How to Apply

PMMSY is implemented **state by state** through the State Fisheries Department. The central government releases funds to states, and states identify and support eligible beneficiaries.

**Step 1:** Visit your district's **Fisheries Development Officer (FDO)** or the **District Fisheries Office**
**Step 2:** Ask about the components available for your type of activity (marine fishing, pond aquaculture, fish processing, etc.)
**Step 3:** Submit your application with documents — the FDO will guide you on what project report to prepare
**Step 4:** Application is reviewed, subsidy is approved, and you receive the assistance either as direct bank transfer or reimbursement

You can also visit **pmmsy.dof.gov.in** for the full list of components, subsidy rates, and state nodal officer contacts.

---

## Quick Links

- **Official Website:** [pmmsy.dof.gov.in](https://pmmsy.dof.gov.in)
- **Ministry:** [dof.gov.in](https://dof.gov.in)
- **Helpline:** 1800-425-1660 (toll-free)
`,
  },
];

async function main() {
  console.log(`Adding ${schemes.length} new government schemes...\n`);

  for (const scheme of schemes) {
    const { data, error } = await supabase
      .from("schemes")
      .upsert([scheme], { onConflict: "slug" })
      .select("slug, title");

    if (error) {
      console.error(`❌ ${scheme.slug}: ${error.message}`);
    } else {
      console.log(`✅ ${data[0].slug}`);
      console.log(`   ${data[0].title.substring(0, 70)}...`);
    }
  }

  console.log("\nAll done!");
}

main();
