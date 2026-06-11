// add-schemes-batch-1.mjs — Insert 8 pending government schemes into Supabase
// Schemes: MGNREGA, PM Ujjwala, Sukanya Samriddhi, Ladli Behna MP,
//          PM Fasal Bima, PMEGP, Jal Jeevan Mission, PMKVY 4.0
// Run: node scripts/add-schemes-batch-1.mjs

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xtjbijvxxeoopcqxycpz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY"
);

const schemes = [
  // ─────────────────────────────────────────────────────────────
  // 1. MGNREGA
  // ─────────────────────────────────────────────────────────────
  {
    slug: "mgnrega-2026",
    title: "MGNREGA 2026 — 100 Days Guaranteed Work for Every Rural Family",
    ministry: "Ministry of Rural Development, Government of India",
    launched_by: "UPA Government",
    objective:
      "Provide at least 100 days of guaranteed wage employment in a financial year to every rural household whose adult members volunteer to do unskilled manual work.",
    eligibility: [
      "Adult member (18+ years) of a rural household",
      "Willing to do unskilled manual work",
      "Must have a MGNREGA Job Card issued by the Gram Panchayat",
      "Job card is free — issued within 15 days of application",
    ],
    benefits: [
      "100 days of guaranteed wage employment per household per year",
      "Wage rate ₹241 to ₹400 per day (varies by state; revised April 2025)",
      "Work provided within 5 km of your home",
      "Unemployment allowance if work not provided within 15 days of demand",
      "Payment directly into your bank/post office account within 15 days",
      "Social security benefits — work site facilities including shade, drinking water, first aid",
    ],
    documents: [
      "Aadhaar card (all willing adult household members)",
      "Proof of residence (ration card, electricity bill, or residence certificate)",
      "Bank or post office account details (for wage payment)",
      "2 passport-size photographs",
    ],
    how_to_apply:
      "Visit your Gram Panchayat office → Ask for MGNREGA Job Card application form (free) → Fill in names and Aadhaar details of all adult household members → Submit with photographs → Job Card issued within 15 days. Alternatively, apply online via the UMANG mobile app (search 'MGNREGA' → 'Apply for Job Card').",
    official_portal: "https://nrega.nic.in/",
    helpline_number: "1800-11-1551",
    category: "rural-development",
    state: "all-india",
    description:
      "MGNREGA guarantees 100 days of paid work per year to every rural household in India. Adults who want work can demand it from their Gram Panchayat — by law, employment must be provided within 15 days or the worker is entitled to unemployment allowance.",
    content: `## What MGNREGA Is

MGNREGA — the Mahatma Gandhi National Rural Employment Guarantee Act — is not a charity programme. It is a legal right. Any adult member of a rural household can walk into their Gram Panchayat and demand work. The government is legally bound to provide it within 15 days or pay an unemployment allowance.

The scheme has been running since 2005 and remains the world's largest employment guarantee programme. In 2025-26, the budget allocation is **₹86,000 crore** — the highest since the scheme's inception. Around **10.96 crore workers** are actively drawing wages under MGNREGA.

---

## Who Is Eligible

Anyone aged 18 or above who is part of a rural household and is willing to do unskilled manual work. There is no income criterion — rich or poor, if you live in a rural area and want to work, you can apply.

The only requirement is a **Job Card**, which the Gram Panchayat must issue free of charge within 15 days of your application.

---

## What Kind of Work MGNREGA Provides

Work is always in the public interest — things that benefit the village as a whole:
- Building and repairing village roads and drains
- Soil conservation and watershed management
- Renovation of ponds, wells, and water bodies
- Afforestation and land development
- Construction of Anganwadi centres and rural housing

Work is provided within 5 km of your home. If work is provided beyond 5 km, you're entitled to 10% extra wages plus travel allowance.

---

## Wage Rates (2025-26)

Wages were revised from **April 1, 2025**, with an average 5% increase across states:

| State | Daily Wage (2025-26) |
|---|---|
| Haryana | ₹400 (highest in India) |
| Kerala | ₹369 |
| Karnataka | ₹349 |
| Andhra Pradesh | ₹300 |
| Maharashtra | ₹317 |
| Uttar Pradesh | ₹237 |
| Bihar | ₹245 |
| Arunachal Pradesh / Nagaland | ₹241 (lowest) |

Wages are paid directly into your bank or post office account, usually within 7-15 days of work completion.

---

## How to Get a Job Card

**At the Gram Panchayat (offline):**
1. Go to your local Gram Panchayat office
2. Ask for the MGNREGA Job Card application form — it's free
3. Enter the names, ages, and Aadhaar details of all adult household members who want to work
4. Submit the form with 2 photographs
5. Job Card booklet is issued within 15 days, free of cost

**Via UMANG App (online):**
1. Open UMANG app → search "MGNREGA"
2. Tap "Apply for Job Card"
3. Fill in your state, district, block, and personal details
4. Upload documents and submit
5. Download digital job card once approved

---

## Demanding Work Under MGNREGA

Once you have a Job Card:
1. Submit a work demand (written or verbal) to your Gram Rozgar Sahayak (GRS) at the Gram Panchayat
2. You'll be assigned work within **15 days**
3. If work is not provided within 15 days, you're entitled to an **unemployment allowance** — this is your legal right, not a favour

---

## Check Your Payment Status

Visit **nrega.nic.in** → select your state → district → block → panchayat → view job card list and payment history. All MGNREGA data is public — you don't need to log in to check.

---

## Common Questions

**Can I demand work any time of year?** Yes. Work can be demanded at any time during the financial year (April to March). There is no application season.

**I have a job card but haven't worked in years — is it still valid?** Job cards don't expire. As long as the household is registered, you can demand work at any time.

**Can women demand work separately from their husbands?** Yes. Each adult household member gets their own entry on the job card and can work independently. One-third of workers must be women — it's legally mandated.

**What if the Gram Panchayat refuses to give work?** This is illegal. You can file a complaint at the Block Development Office or call the helpline (1800-11-1551). The District Programme Coordinator is responsible for ensuring work is provided.

**Is the wage the same across the year?** Yes, revised every April 1. The wage for 2025-26 is fixed for the full financial year.

---

## Official Links

| | |
|---|---|
| MGNREGA Portal | nrega.nic.in |
| Job Card Status | nrega.nic.in → Job Card → Job Card Search |
| Payment Status | nrega.nic.in → Payment → Wage Payment Status |
| UMANG App | Download from Play Store / App Store |
| Helpline | 1800-11-1551 (toll-free) |`,
    reading_time: "7 min read",
    faqs: [
      {
        question: "How many days of work does MGNREGA guarantee per year?",
        answer:
          "100 days per household per financial year (April to March). If work is not provided within 15 days of demand, the worker is entitled to an unemployment allowance.",
      },
      {
        question: "What is a Job Card and how do I get one?",
        answer:
          "A Job Card is your MGNREGA registration document listing all adult household members who want work. Apply free at your Gram Panchayat — must be issued within 15 days.",
      },
      {
        question: "What are the current MGNREGA daily wages?",
        answer:
          "Wages range from ₹241 (Arunachal Pradesh/Nagaland) to ₹400 (Haryana) per day as revised from April 1, 2025. Check nrega.nic.in for your state's rate.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. PM UJJWALA YOJANA
  // ─────────────────────────────────────────────────────────────
  {
    slug: "pm-ujjwala-yojana-pmuy-2026",
    title:
      "PM Ujjwala Yojana 2026 — Free LPG Connection + ₹300 Subsidy Per Cylinder",
    ministry: "Ministry of Petroleum and Natural Gas, Government of India",
    launched_by: "PM Narendra Modi (Phase 1: May 2016, Phase 2: August 2021)",
    objective:
      "Provide free LPG connections to women from poor households to move them away from unhealthy cooking fuel (wood, cow dung, coal) and reduce indoor air pollution.",
    eligibility: [
      "Adult woman (18+ years) from a poor household",
      "Household must not already have an LPG connection",
      "Name listed in SECC-2011 BPL data OR ration card holder OR SC/ST household",
      "Beneficiary of PMAY-G, Antyodaya Anna Yojana, forest dwellers, or Most Backward Class families are also eligible",
      "Any poor household can apply using a simple self-declaration (Deprivation Declaration)",
    ],
    benefits: [
      "Free LPG connection — no deposit or installation charges",
      "Free first LPG refill and free hotplate/stove on connection",
      "₹300 subsidy per 14.2 kg cylinder (up to 9 refills per year via DBT)",
      "All connection components provided free: cylinder, pressure regulator, safety hose",
      "10.55 crore women have already benefited; 25 lakh new connections in 2025-26",
    ],
    documents: [
      "Aadhaar card of applicant and adult family members",
      "Ration card (any type)",
      "Bank account details (Aadhaar-linked, for DBT subsidy)",
      "Proof of BPL/poor household status (SECC-2011 data, or deprivation self-declaration)",
      "Passport-size photograph",
    ],
    how_to_apply:
      "Online: Visit pmuy.gov.in → 'Apply for New Ujjwala 2.0 Connection' → fill Aadhaar, mobile, bank details, upload documents → submit. Offline: Visit nearest authorized LPG distributor (Indian Oil / Bharat Gas / HP Gas) with required documents and fill the application form there.",
    official_portal: "https://www.pmuy.gov.in/",
    helpline_number: "1800-266-6696",
    category: "women-and-child",
    state: "all-india",
    description:
      "PM Ujjwala Yojana gives free LPG connections to women from poor families. No deposit, no installation charges, free first refill — plus ₹300 subsidy on each cylinder refill (up to 9 per year) directly in your bank account.",
    content: `## What PM Ujjwala Yojana Is

PM Ujjwala Yojana (PMUY) started in May 2016 with a single goal: get poor households off wood fires and cow dung cakes, and onto clean LPG cooking gas. Burning solid fuel indoors causes severe respiratory disease, and the burden falls mostly on women who spend hours cooking.

The scheme gives a **free LPG connection** — no security deposit, no installation fee, free cylinder, regulator, hose, and stove. Women from poor households are the sole beneficiaries: the connection is issued in the woman's name.

As of 2026, **10.55 crore women** across India have received Ujjwala connections. For 2025-26, the Cabinet approved **25 lakh additional new connections** and a subsidy budget of **₹12,000 crore**.

---

## The Subsidy (₹300 per cylinder)

Even after getting the connection, cooking gas refills cost money. The government bridges this with a direct subsidy:

- **₹300 per 14.2 kg cylinder** per refill
- Up to **9 refills per year**
- Paid directly into your Aadhaar-linked bank account via DBT
- Approved by Cabinet for all of FY 2025-26

So if a cylinder costs ₹900 in the market, Ujjwala beneficiaries effectively pay around ₹600.

---

## Who Can Apply

The eligibility net is wide. You can apply if your household is:

1. Listed in the **SECC-2011 BPL data** (Socio-Economic Caste Census)
2. **SC/ST household**
3. A beneficiary of **PMAY-Gramin, Antyodaya Anna Yojana**, or a similar welfare scheme
4. A **forest dwelling, Most Backward Class, or river island** family
5. **Any poor household** — even if not in any list — can apply by submitting a simple self-declaration called a "Deprivation Declaration"

The only hard rule: the connection must go in the **adult woman's name**, and the household must not already have an LPG connection.

---

## What You Get (Free)

- 14.2 kg LPG cylinder
- Pressure regulator
- Safety suraksha hose
- Domestic Gas Consumer Card (DGCC) booklet
- Installation — free
- **First refill — free**
- **Hotplate / gas stove — free**

---

## How to Apply

**Online:**
1. Go to **pmuy.gov.in** → click "Apply for New Ujjwala 2.0 Connection"
2. Enter Aadhaar number, mobile number (OTP verification)
3. Fill personal details and bank account details
4. Upload documents: Aadhaar, ration card, deprivation declaration
5. Submit — you'll get an application reference number

**Offline:**
1. Visit the nearest LPG distributor (Indian Oil, Bharat Gas, or HP Gas)
2. Collect the Ujjwala application form
3. Submit it with documents
4. The distributor will process the connection

---

## Check Application Status

Go to **pmuy.gov.in** → Check Status → enter your registration number.

---

## Common Questions

**I don't have my name in the SECC-2011 list. Can I still apply?** Yes. Submit a "Deprivation Declaration" — a simple self-certification that your household is poor. This was introduced to remove the barrier of the BPL list requirement.

**My mother already has an Ujjwala connection. Can I apply for one in my name?** No. Only one connection per household. If your mother has a connection and lives with you, the household is already covered.

**I got the connection but haven't taken any refills in over a year. Is my connection still active?** It may have gone inactive. Visit your LPG distributor to reactivate it and resume the subsidy.

**How do I check whether the ₹300 subsidy has been credited to my account?** Check your Aadhaar-linked bank account after each refill. The credit usually arrives within 3-5 working days of the refill transaction.

**Can the connection be transferred to another name?** No. Ujjwala connections cannot be transferred.

---

## Official Links

| | |
|---|---|
| Official Portal | pmuy.gov.in |
| Apply Online | pmuy.gov.in → Apply for New Connection |
| Check Status | pmuy.gov.in → Check Status |
| Helpline | 1800-266-6696 (toll-free) |
| Emergency LPG | 1906 |`,
    reading_time: "6 min read",
    faqs: [
      {
        question: "What is the subsidy amount under PM Ujjwala Yojana in 2026?",
        answer:
          "₹300 per 14.2 kg cylinder refill, up to 9 refills per year. The subsidy is credited directly to your Aadhaar-linked bank account via DBT.",
      },
      {
        question: "Can I apply for Ujjwala if my name is not in the BPL list?",
        answer:
          "Yes. Submit a 'Deprivation Declaration' — a simple self-certification form — at the LPG distributor or online at pmuy.gov.in. You don't need to be in the SECC-2011 list.",
      },
      {
        question: "How many connections have been given under PM Ujjwala Yojana?",
        answer:
          "Over 10.55 crore connections have been released across Phase 1 and Phase 2. An additional 25 lakh connections are being released in FY 2025-26.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. SUKANYA SAMRIDDHI YOJANA
  // ─────────────────────────────────────────────────────────────
  {
    slug: "sukanya-samriddhi-yojana-ssy-2026",
    title:
      "Sukanya Samriddhi Yojana (SSY) 2026 — 8.2% Interest, Tax-Free Savings for Your Daughter",
    ministry:
      "Ministry of Finance — National Savings Institute (Post Office Scheme)",
    launched_by: "PM Narendra Modi (January 2015, under Beti Bachao Beti Padhao)",
    objective:
      "Encourage parents to save for their girl child's higher education and marriage by offering the highest guaranteed interest rate among small savings schemes, with full tax exemption.",
    eligibility: [
      "Girl child must be under 10 years old at the time of account opening",
      "Only resident Indian girls are eligible (NRIs cannot open SSY accounts)",
      "Maximum 2 SSY accounts per family (one per girl child; third account allowed only for twins/triplets)",
      "Account opened by parent or legal guardian in the girl's name",
    ],
    benefits: [
      "8.2% per annum interest rate — highest among all Post Office/small savings schemes (FY 2025-26)",
      "Deposits up to ₹1.5 lakh per year qualify for Section 80C income tax deduction",
      "EEE tax status — interest earned and maturity amount are completely tax-free",
      "Partial withdrawal: up to 50% of balance allowed after girl turns 18 (for education)",
      "Account matures after 21 years from opening — can be used for higher education or marriage",
    ],
    documents: [
      "Birth certificate of the girl child",
      "Aadhaar, PAN, or Voter ID of parent/guardian",
      "Address proof of parent/guardian (utility bill, rent agreement, or Aadhaar)",
      "Passport-size photographs of parent/guardian",
    ],
    how_to_apply:
      "Visit any India Post branch or authorised bank (SBI, PNB, Bank of Baroda, ICICI, HDFC, Axis, etc.) with your documents. Fill the SSY account opening form. Minimum opening deposit is ₹250. You will receive a passbook. Note: SSY accounts cannot be opened fully online — in-person visit is required for the initial opening.",
    official_portal: "https://www.nsiindia.gov.in/",
    helpline_number: "1800-266-6868",
    category: "women-and-child",
    state: "all-india",
    description:
      "Sukanya Samriddhi Yojana lets you open a savings account in your daughter's name (must be under 10) earning 8.2% interest per year — the best rate among all Post Office schemes. The account is fully tax-free and matures when your daughter turns 21.",
    content: `## What Sukanya Samriddhi Yojana Is

Sukanya Samriddhi Yojana (SSY) is a dedicated savings account for girl children, launched under the Beti Bachao Beti Padhao campaign. The idea is straightforward: open an account in your daughter's name before she turns 10, deposit regularly, and by the time she needs money for college or marriage, there's a meaningful corpus waiting — entirely tax-free.

The current interest rate is **8.2% per annum**, compounded annually. This rate has held steady across all four quarters of FY 2025-26, and it is the **highest guaranteed rate** among all Post Office small savings schemes — higher than PPF (7.1%), NSC (7.7%), and fixed deposits at most banks.

---

## How the Account Works

| Feature | Details |
|---|---|
| Interest Rate | 8.2% p.a. (FY 2025-26, all quarters) |
| Minimum Annual Deposit | ₹250 |
| Maximum Annual Deposit | ₹1.5 lakh |
| Deposit Period | 15 years from opening |
| Maturity | 21 years from opening |
| Partial Withdrawal | 50% of balance after girl turns 18 |
| Tax Status | EEE — fully exempt at all stages |

**Important:** You only need to make deposits for the first **15 years**. After that, the account earns interest for the remaining 6 years without any further deposits. At year 21, it matures.

---

## Tax Benefits — Why SSY Is Special

SSY has **EEE (Exempt-Exempt-Exempt)** tax status:
1. **Deposits:** Up to ₹1.5 lakh/year deductible under Section 80C
2. **Interest:** 100% exempt from income tax every year
3. **Maturity Amount:** No tax on the final corpus at all

Very few investments in India offer EEE status. It puts SSY in the same league as EPF — but with a better interest rate.

---

## Who Can Open an SSY Account

- The girl child must be **under 10 years old** on the date of opening
- She must be a **resident Indian** (NRIs are not eligible)
- A parent or legal guardian opens and manages the account until the girl turns 18
- After 18, she operates the account herself
- Maximum **2 accounts per family** — one per girl. (Twins/triplets at second birth: a third account is allowed)

---

## Partial Withdrawal Rules

Once your daughter turns **18** (or after passing Class 10, whichever is earlier):
- Withdraw up to **50% of the account balance** as shown at the end of the previous financial year
- Purpose must be higher education or school fees
- This is a one-time withdrawal — not a running facility

---

## Premature Closure

The account can be closed before 21 years in specific situations:
1. **Girl's marriage** — after she turns 18 (not before)
2. **Extreme financial hardship** of the guardian — on medical or compassionate grounds
3. **Change of citizenship/residency** to NRI status (account must be closed)

---

## How to Open an SSY Account

1. Visit any **India Post branch** or an **authorised bank** (SBI, PNB, Bank of Baroda, Canara Bank, ICICI, HDFC, Axis Bank, Kotak)
2. Ask for the Sukanya Samriddhi Account opening form
3. Submit the form with documents
4. Make the minimum deposit of **₹250**
5. Receive the passbook — this is your account record

**Online management after opening:** Once opened, you can manage deposits online via India Post Payments Bank (IPPB) app or net banking at authorised banks. But the initial opening must be done in person.

---

## What Happens If You Forget to Deposit in a Year?

If you don't deposit the minimum ₹250 in any year, the account becomes inactive ("silent account"). To reactivate it, pay the outstanding minimum deposits for all missed years plus a penalty of **₹50 per missed year**. The account itself doesn't close — it just becomes inactive until you regularise it.

---

## Common Questions

**My daughter is exactly 10 years old today. Can I still open?** SSY requires the girl to be "below 10 years." If today is her 10th birthday, technically she is now 10 — check with the post office, but most require the account to be opened before the 10th birthday.

**I have a son and a daughter. Can I open SSY for my son?** No. SSY is exclusively for girl children.

**Can I open SSY in a public sector bank rather than the post office?** Yes. All major public sector banks and several private banks are authorised to offer SSY — same terms, same interest rate.

**What if my daughter doesn't need money at 21?** If the account is not closed at maturity, it continues to earn interest for 2 more years (but no deposits can be made). After that, no further interest is earned.

---

## Official Links

| | |
|---|---|
| National Savings Institute | nsiindia.gov.in |
| India Post | indiapost.gov.in |
| Interest Rate (Current) | RBI/Ministry of Finance quarterly notification |
| Authorised Banks | SBI, PNB, Bank of Baroda, Canara, ICICI, HDFC, Axis, Kotak |`,
    reading_time: "7 min read",
    faqs: [
      {
        question: "What is the SSY interest rate in 2025-26?",
        answer:
          "8.2% per annum, compounded annually. This rate has been constant across all four quarters of FY 2025-26 and is the highest guaranteed rate among all Post Office savings schemes.",
      },
      {
        question: "Up to what age can I open an SSY account for my daughter?",
        answer:
          "The girl child must be under 10 years old on the date of account opening. Once the account is open, it runs until she turns 21.",
      },
      {
        question: "Is SSY completely tax-free?",
        answer:
          "Yes. SSY has EEE status — deposits qualify for Section 80C deduction, interest earned is fully exempt, and the maturity amount is also tax-free.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. LADLI BEHNA YOJANA MP
  // ─────────────────────────────────────────────────────────────
  {
    slug: "ladli-behna-yojana-mp-2026",
    title:
      "Mukhyamantri Ladli Behna Yojana MP 2026 — ₹1,500/Month Direct to Women's Accounts",
    ministry: "Government of Madhya Pradesh",
    launched_by:
      "CM Shivraj Singh Chouhan (launched March 5, 2023; continued by CM Mohan Yadav)",
    objective:
      "Provide monthly financial assistance to women of Madhya Pradesh to strengthen their economic independence and improve the overall standard of living of women in the state.",
    eligibility: [
      "Married, widow, divorced, or abandoned woman (unmarried women are NOT eligible)",
      "Age between 21 and 60 years",
      "Permanent resident of Madhya Pradesh",
      "Annual family income below ₹2.5 lakh",
      "No family member should be a government employee",
      "Open to all castes and religions — no caste restriction",
    ],
    benefits: [
      "₹1,500 per month (increased from ₹1,000 in 2023 → ₹1,250 in 2024 → ₹1,500 from Diwali 2025)",
      "₹18,000 per year directly in your Aadhaar-linked bank account",
      "Payment credited on 10th of every month via DBT",
      "1.26 crore women across MP are currently receiving the benefit",
      "Over ₹48,632 crore disbursed since scheme launch",
    ],
    documents: [
      "Aadhaar card",
      "Samagra ID (Madhya Pradesh family identification number — mandatory)",
      "Bank account number and IFSC code (Aadhaar-linked DBT account)",
      "Proof of Madhya Pradesh residence",
      "Income declaration (self-declaration accepted)",
    ],
    how_to_apply:
      "New registrations are accepted in batches by the MP government. When registration opens: visit the official portal cmladlibahna.mp.gov.in → click Registration → enter Samagra ID and Aadhaar → fill personal and bank details → submit. You can also register through your ward/village-level operator at government camps. Check the portal for current registration status.",
    official_portal: "https://cmladlibahna.mp.gov.in/",
    helpline_number: "0755-2700800",
    category: "women-and-child",
    state: "madhya-pradesh",
    description:
      "Ladli Behna Yojana is Madhya Pradesh's flagship women welfare scheme — ₹1,500 every month directly into the bank account of eligible married, widowed, or divorced women between 21 and 60 years. Over 1.26 crore women are currently enrolled.",
    content: `## What Ladli Behna Yojana Is

Mukhyamantri Ladli Behna Yojana was launched on **5 March 2023** by then-Chief Minister Shivraj Singh Chouhan. The scheme puts cash directly into the hands of women — specifically, women who are married, widowed, divorced, or abandoned, between the ages of 21 and 60, living in Madhya Pradesh, with a family income below ₹2.5 lakh.

The amount started at **₹1,000/month** in 2023. It was raised to **₹1,250/month** in 2024, and increased again to **₹1,500/month** from Diwali 2025. Current CM Mohan Yadav has continued the scheme without interruption.

As of June 2026, **1.26 crore women** receive the benefit every month. Payments are made on the **10th of each month** via DBT into the beneficiary's Aadhaar-linked bank account.

---

## Who Is Eligible

**You qualify if:**
- You are a **married, widowed, divorced, or abandoned** woman (unmarried women are not eligible)
- You are between **21 and 60 years** of age
- You are a **permanent resident of Madhya Pradesh**
- Your **annual family income is below ₹2.5 lakh**
- No family member holds a **government job**

There is **no caste or religion restriction**. General, OBC, SC, ST women are all eligible.

---

## How Much You Receive

| Period | Monthly Amount |
|---|---|
| March 2023 – 2024 | ₹1,000/month |
| 2024 – Diwali 2025 | ₹1,250/month |
| Diwali 2025 onwards | **₹1,500/month** |

Annual benefit: **₹18,000 per year**
Payment date: **10th of every month**

---

## How to Check If You're Already Enrolled

Go to **cmladlibahna.mp.gov.in** → Registration Status → enter your application number or Samagra ID. You can also check DBT payment status on the same portal.

---

## How to Apply (When Registration Is Open)

The MP government opens new registrations in batches. When registration is open:

1. Visit **cmladlibahna.mp.gov.in** or go to your nearest government registration camp
2. Enter your **Samagra ID** (the MP family ID number — if you don't have one, get it made first at your Panchayat/Ward office)
3. Complete Aadhaar e-KYC verification
4. Enter bank account details (must be in your name, Aadhaar-linked)
5. Submit the form
6. You'll receive an application reference number

Registration camps are usually set up in gram panchayats and ward offices. Watch for official announcements on cmladlibahna.mp.gov.in.

---

## What Is Samagra ID?

Samagra ID is a unique family identification number issued by the Madhya Pradesh government. Every MP resident family has one. It's required for almost all MP government schemes. If your family doesn't have a Samagra ID, get it made at your gram panchayat or ward office — it's free.

---

## Common Questions

**I am unmarried at 25. Am I eligible?** No. The scheme is specifically for married, widowed, divorced, or abandoned women. Unmarried women are excluded.

**My husband is a government employee. Am I eligible?** No. If any family member holds a government job, the household is ineligible.

**I live in MP but I'm from another state originally. Am I eligible?** You need to be a **permanent resident** of MP. If you have your Samagra ID and live here permanently, you likely qualify — but residency proof is needed.

**What if my bank account is not Aadhaar-linked?** You need to link your Aadhaar to your bank account first. Visit your bank branch with your Aadhaar to do this before applying.

**Is there any chance the scheme will be stopped?** The scheme has continued across two chief ministers and has seen three consecutive increases in the monthly amount. It has become a major political commitment in MP.

---

## Official Links

| | |
|---|---|
| Official Portal | cmladlibahna.mp.gov.in |
| Registration Status | cmladlibahna.mp.gov.in → Registration Status |
| Payment Status | cmladlibahna.mp.gov.in → DBT Status |
| Helpline | 0755-2700800 |`,
    reading_time: "6 min read",
    faqs: [
      {
        question: "How much money does Ladli Behna Yojana give per month?",
        answer:
          "₹1,500 per month as of Diwali 2025, up from the original ₹1,000/month when the scheme launched in March 2023. This is ₹18,000 per year, credited on the 10th of each month.",
      },
      {
        question: "Is Ladli Behna Yojana available for unmarried women?",
        answer:
          "No. The scheme covers married, widowed, divorced, or abandoned women between 21 and 60 years. Unmarried women are not eligible.",
      },
      {
        question: "What is the Samagra ID and why is it needed for Ladli Behna?",
        answer:
          "Samagra ID is Madhya Pradesh's unique family identification number. It is mandatory for all MP government scheme registrations. Get it from your gram panchayat or ward office if you don't have one.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. PM FASAL BIMA YOJANA
  // ─────────────────────────────────────────────────────────────
  {
    slug: "pm-fasal-bima-yojana-pmfby-2026",
    title:
      "PM Fasal Bima Yojana 2026 — Crop Insurance at 2% Premium for Kharif Farmers",
    ministry: "Ministry of Agriculture & Farmers Welfare, Government of India",
    launched_by: "PM Narendra Modi (January 2016)",
    objective:
      "Provide financial support to farmers suffering crop loss or damage due to natural calamities, pests, or diseases — at a very low premium that the farmer pays, with the government bearing the rest.",
    eligibility: [
      "All farmers (loanee and non-loanee) growing notified crops in notified areas",
      "Loanee farmers: automatically enrolled through crop loan/KCC (can opt out)",
      "Non-loanee farmers: voluntarily enroll within prescribed deadline (within 10 days of sowing)",
      "Tenant farmers and sharecroppers are also eligible",
      "Applicable for both Kharif and Rabi crops, and annual commercial/horticultural crops",
    ],
    benefits: [
      "Farmer pays only 2% premium for Kharif crops (government bears remaining actuarial premium)",
      "Farmer pays only 1.5% premium for Rabi crops",
      "Farmer pays only 5% for annual commercial/horticultural crops",
      "Sum insured equals Kisan Credit Card loan limit (or scale of finance)",
      "Claims paid for yield loss, prevented sowing, post-harvest loss, and localized calamities",
      "Total claims disbursed since 2016: over ₹1.83 lakh crore to 22.67 crore farmers",
      "Claims now paid with 12% annual penalty on delayed payments — directly to farmer's account",
    ],
    documents: [
      "Land records / lease agreement (for tenant farmers)",
      "Sowing certificate from revenue authority (submit within 10 days of sowing)",
      "Aadhaar card",
      "Bank passbook (for claim payment)",
      "KCC/crop loan details (for loanee farmers)",
    ],
    how_to_apply:
      "Loanee farmers: automatically covered through your bank when you take a crop loan (you can opt out if you prefer). Non-loanee farmers: Apply at your nearest bank branch, CSC (Common Service Centre), or online at pmfby.gov.in → Farmer Corner → Guest Farmer → Register → fill crop and land details → pay the premium. Deadline: within 10 days of sowing.",
    official_portal: "https://pmfby.gov.in/",
    helpline_number: "14447",
    category: "agriculture",
    state: "all-india",
    description:
      "PM Fasal Bima Yojana insures your crop against natural disasters, pests, and unseasonal rain. Farmers pay just 2% of the sum insured for Kharif crops — the government covers the rest. Over ₹1.83 lakh crore in claims have been paid to 22.67 crore farmers since 2016.",
    content: `## What PM Fasal Bima Yojana Is

PM Fasal Bima Yojana (PMFBY) is India's largest crop insurance scheme. It covers farmers against losses from floods, drought, hailstorm, cyclones, unseasonal rain, and pest attacks. The key feature: farmers pay very little — just 2% of the sum insured for Kharif crops, 1.5% for Rabi — and the central and state governments pay the rest.

Since its launch in January 2016, the scheme has paid out **₹1.83 lakh crore in claims to 22.67 crore farmers** (as of 2025). In August 2025 alone, ₹3,200 crore was transferred to 30+ lakh farmers in a single day.

---

## Premium Rates You Pay

| Crop Type | Farmer's Premium (% of Sum Insured) |
|---|---|
| Kharif crops (paddy, maize, soybean, etc.) | **2%** |
| Rabi crops (wheat, mustard, gram, etc.) | **1.5%** |
| Annual commercial/horticultural crops | **5%** |

The actual actuarial premium (what insurance really costs) is much higher. The government — Centre and State — pays the difference.

---

## What Is Covered

**PMFBY covers losses from:**
- Yield loss due to flood, drought, hailstorm, cyclone, pest attack, disease
- Prevented sowing/planting — if widespread calamity stops you from sowing
- Post-harvest losses — for crops left in the field to dry (up to 14 days after harvest)
- Localized calamities — hailstorm, landslide, inundation affecting individual farms

**Not covered:**
- War, nuclear risks, riots, malicious damage
- Theft
- Loss from domestic or wild animals that you could have prevented

---

## Who Must Enroll (and Who Can Opt Out)

**Loanee farmers (those who took crop loans or KCC):**
You are automatically enrolled for the notified crops you grow. The premium is deducted from your loan account. You CAN opt out — by giving a declaration to your bank before the deadline.

**Non-loanee farmers:**
Enrollment is voluntary. Apply through your bank, CSC, or online at pmfby.gov.in within **10 days of sowing**. This deadline is strict.

**Tenant farmers:**
Eligible. Need a lease agreement and sowing certificate.

---

## How Claims Are Paid

Claims are settled based on:
1. **Yield data** from Crop Cutting Experiments (CCEs) — government-conducted field surveys in your area
2. **Weather data** — from automated weather stations (for weather-based insurance, RWBCIS)
3. **Satellite data** and AIDE Mobile App reports for localized/post-harvest claims

If the average yield in your area falls below the "Threshold Yield," all insured farmers in that area automatically receive claims — you don't need to file a separate claim for yield loss.

For localized calamities (hailstorm, landslide), you do need to **report loss within 72 hours** on the PMFBY app or through the helpline (14447).

**New penalty rule:** If the insurance company or state government delays your payment, they pay a **12% annual penalty** — credited directly to your account on top of the claim amount.

---

## How to Apply (Non-Loanee Farmers)

1. Go to **pmfby.gov.in** → Farmer Corner → Guest Farmer (or register/login)
2. Enter your details: state, district, sub-district, village, crop
3. Fill land records and bank details
4. Pay the premium online
5. Save the acknowledgement

**Alternatively:** Visit your nearest bank branch or CSC with land records and sowing certificate.

**Critical deadline: Within 10 days of sowing.**

---

## Common Questions

**My crop failed last year but I didn't get any claim. Why?** Either you were not enrolled, or the average yield in your area was above the threshold (meaning claims are calculated area-wide, not individual-wise for yield loss). Check enrollment status at pmfby.gov.in.

**I took a crop loan. Does that mean I'm automatically insured?** For notified crops in notified areas, yes. But confirm with your bank — some branches may not have enrolled you. Also, you can still opt out if you prefer not to pay the premium.

**How do I report crop loss in case of hailstorm or localized damage?** Call the PMFBY helpline **14447** within 72 hours of the event, or report through the PMFBY mobile app. Delayed reporting can disqualify your localized claim.

**When are Kharif claims paid?** Usually December to March, after Crop Cutting Experiments are complete. The government has been working to speed this up to 2 months after harvest.

---

## Official Links

| | |
|---|---|
| PMFBY Portal | pmfby.gov.in |
| Farmer Registration | pmfby.gov.in → Farmer Corner |
| Claim Status | pmfby.gov.in → Farmer Corner → Claim Status |
| Helpline | 14447 (toll-free, 24/7) |
| WhatsApp | 7065514447 |`,
    reading_time: "8 min read",
    faqs: [
      {
        question: "What is the farmer's premium for Kharif crops under PMFBY?",
        answer:
          "Only 2% of the sum insured. For Rabi crops, it is 1.5%, and for annual commercial crops, 5%. The government (Centre + State) pays the remaining actuarial premium.",
      },
      {
        question: "Do I need to apply separately for PMFBY if I have a crop loan?",
        answer:
          "If you're a loanee farmer, you're automatically enrolled for notified crops when you take a crop loan. Confirm with your bank. Non-loanee farmers must apply voluntarily within 10 days of sowing.",
      },
      {
        question: "How do I claim if my crop is damaged by hailstorm?",
        answer:
          "Call helpline 14447 or report on the PMFBY app within 72 hours of the damage. For yield loss claims, no separate filing is needed — claims are settled automatically based on area-wide crop cutting data.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. PMEGP
  // ─────────────────────────────────────────────────────────────
  {
    slug: "pmegp-prime-ministers-employment-generation-2026",
    title:
      "PMEGP 2026 — Start Your Own Business with Up to ₹50 Lakh Subsidy Loan",
    ministry:
      "Ministry of Micro, Small & Medium Enterprises (MSME) — Implemented by KVIC",
    launched_by: "Government of India (merged PMRY + REGP into PMEGP in 2008)",
    objective:
      "Generate employment in rural and urban areas by helping individuals start new micro-enterprises through a combination of bank loan and government subsidy — with no collateral requirement on the government subsidy portion.",
    eligibility: [
      "Any individual aged 18 years or above",
      "No income ceiling — anyone can apply regardless of their current income",
      "For projects above ₹10 lakh (manufacturing) or ₹5 lakh (service), minimum Class VIII pass required",
      "Only NEW projects are eligible — existing businesses or previous subsidy recipients under PMRY/REGP are NOT eligible",
      "Non-farm sector activities only (agriculture is excluded)",
      "Institutions: SHGs, production co-operative societies, charitable trusts also eligible",
    ],
    benefits: [
      "Government subsidy 15–35% of project cost — no repayment required on subsidy portion",
      "Manufacturing sector: maximum project cost ₹50 lakh",
      "Service/business sector: maximum project cost ₹20 lakh",
      "General category: 15% subsidy (urban) / 25% subsidy (rural) of project cost",
      "Special categories (SC/ST/Women/Ex-Servicemen/Minorities/PH): 25% (urban) / 35% (rural)",
      "NE Region / Hill / Border areas: 25% (urban) / 35% (rural)",
      "Bank provides term loan for balance (90% for general, 95% for special categories)",
      "89,118 enterprises supported in 2023-24 alone; over 4 lakh enterprises created since 2021",
    ],
    documents: [
      "Aadhaar card",
      "PAN card",
      "Educational qualification certificates (Class VIII onwards)",
      "Caste certificate (for SC/ST/OBC applicants)",
      "Detailed project report / business plan",
      "Bank account details and 3-6 months bank statements",
      "EDP (Entrepreneurship Development Programme) training completion certificate",
      "Declaration that no prior government subsidy has been received under any scheme",
    ],
    how_to_apply:
      "Apply online at kviconline.gov.in/pmegp/ → fill application form with personal details and project plan → submit → Bank/DIC reviews and contacts you within 30-45 days → upon approval, Bank sanctions the loan and subsidy portion is locked in a TDR → subsidy released to borrower's account after 3 years of satisfactory loan repayment.",
    official_portal: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp",
    helpline_number: "1800-3000-0034",
    category: "employment",
    state: "all-india",
    description:
      "PMEGP gives you a government subsidy of 15–35% of your business startup cost — no repayment needed on that portion. Manufacturing projects up to ₹50 lakh, service projects up to ₹20 lakh. Open to anyone 18+. Over 4 lakh enterprises have been set up through PMEGP since 2021.",
    content: `## What PMEGP Is

PMEGP — Prime Minister's Employment Generation Programme — is one of India's most impactful self-employment schemes. If you want to start a small business but don't have enough capital, PMEGP bridges the gap with a combination of **bank loan + government subsidy**.

The subsidy portion — 15% to 35% of your project cost — never needs to be repaid. You repay only the bank loan portion. And there is no collateral on the subsidy portion.

Since 2021-22, PMEGP has supported **over 4 lakh micro-enterprises** and generated around **36 lakh jobs** across India.

---

## How the Funding Works

Let's say you're a woman from a rural area applying for a ₹10 lakh manufacturing project:

| Component | Amount |
|---|---|
| Your contribution (5% for special category) | ₹50,000 |
| Government subsidy (35% rural for special category) | ₹3,50,000 |
| Bank loan (95% of project — including your 5%) | ₹9,50,000 |
| **Total project cost** | **₹10 lakh** |

The subsidy of ₹3.5 lakh is locked in a Term Deposit Receipt (TDR) with the bank. After you repay the loan for **3 years without default**, the subsidy is credited to your account.

---

## Subsidy Rates by Category and Location

| Category | Urban Subsidy | Rural Subsidy |
|---|---|---|
| General category | 15% | 25% |
| SC / ST / Women / Ex-Servicemen / Minorities / PH / NE Region / Hill / Border | **25%** | **35%** |

Beneficiary contribution:
- General: 10% of project cost
- Special categories: 5% of project cost

---

## Project Cost Limits

- **Manufacturing sector:** Up to ₹50 lakh
- **Service/business sector:** Up to ₹20 lakh

For second loans (PMEGP beneficiaries who have repaid and want to expand): up to ₹1 crore (manufacturing) and ₹25 lakh (service).

---

## What Kind of Business Can You Start?

PMEGP covers almost all non-farm activities:
- Food processing (bakery, dairy, pickle, murabba, papad)
- Garment stitching and textiles
- Handicrafts and handloom
- Electronics repair and assembly
- Furniture making
- Agarbatti / candle / soap / cosmetics manufacturing
- Computer training centres, coaching institutes
- Automobile repair workshops
- Catering and food stalls
- Logistics and delivery services

**Not covered:** Pure agriculture/farming, grocery shops, liquor, and activities on the official negative list.

---

## EDP Training — Mandatory

Before getting the loan sanctioned, you must complete an **Entrepreneurship Development Programme (EDP)** — a short training (typically 3-7 days) on running a business. This is conducted by KVIC, KVIB, or District Industries Centres. It's free, and the certificate is required for your application.

---

## How to Apply

1. Go to **kviconline.gov.in/pmegp/**
2. Register and fill the online application form
3. Enter your personal details, project details, and upload documents
4. Select your implementing agency (KVIC / KVIB / DIC) and bank
5. Submit the application — you'll get a reference number
6. The implementing agency and bank will review and call you for an interview
7. Bank sanctions the loan → you receive the sanctioned amount minus your contribution
8. After 3 years of regular repayment → subsidy released

---

## Common Questions

**Can I apply if I'm already running a small business?** No. PMEGP is only for **new projects**. If you already have a business, you're not eligible. (However, if you're a previous PMEGP beneficiary who has fully repaid the first loan, you can apply for a second loan for expansion.)

**I got a subsidy under PMRY some years ago. Can I apply for PMEGP?** No. Previous beneficiaries of government subsidy schemes like PMRY, REGP, or state-level schemes are not eligible.

**Is EDP training free?** Yes, completely free. It's conducted by KVIC, KVIB, or DICs.

**How long does the approval process take?** Typically 30-90 days from application to loan sanction, depending on the bank and the completeness of your project report.

**Can women get a higher subsidy?** Yes. Women fall in the "special category" and get 25% subsidy in urban areas and 35% in rural areas — 10 percentage points higher than the general category.

---

## Official Links

| | |
|---|---|
| PMEGP Portal | kviconline.gov.in/pmegp/ |
| Apply Online | kviconline.gov.in/pmegpeportal/pmegphome/index.jsp |
| MSME Ministry | msme.gov.in |
| KVIC | kvic.gov.in |
| Helpline | 1800-3000-0034 (toll-free) |`,
    reading_time: "8 min read",
    faqs: [
      {
        question: "What is the maximum subsidy I can get under PMEGP?",
        answer:
          "Up to 35% of project cost for special categories (SC/ST/Women/Ex-Servicemen/PH) in rural areas. For a ₹50 lakh manufacturing project, that's ₹17.5 lakh in non-repayable subsidy.",
      },
      {
        question: "Is PMEGP only for people who are unemployed?",
        answer:
          "No. There is no income or employment criterion. Any Indian citizen aged 18+ can apply, as long as they are starting a new project and haven't received government subsidy for a previous venture.",
      },
      {
        question: "What is EDP training and is it mandatory for PMEGP?",
        answer:
          "EDP (Entrepreneurship Development Programme) is a free 3-7 day training on running a business. It is mandatory for PMEGP — you need the completion certificate before your loan can be sanctioned.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 7. JAL JEEVAN MISSION
  // ─────────────────────────────────────────────────────────────
  {
    slug: "jal-jeevan-mission-har-ghar-jal-2026",
    title:
      "Jal Jeevan Mission 2026 — Free Tap Water Connection for Every Rural Household (Har Ghar Jal)",
    ministry: "Ministry of Jal Shakti (Department of Drinking Water and Sanitation)",
    launched_by: "PM Narendra Modi (August 15, 2019 — from Red Fort)",
    objective:
      "Provide every rural household in India with a functional household tap connection (FHTC) supplying 55 litres of safe drinking water per person per day by December 2028.",
    eligibility: [
      "Every rural household in India — by right, not by application",
      "No income or category criteria — all rural families are entitled",
      "Priority given to households without any water connection",
      "Anganwadi centres, schools, and government health institutions in rural areas are also covered",
    ],
    benefits: [
      "Free functional household tap connection (FHTC) — no installation fee for households",
      "55 litres of safe drinking water per person per day — guaranteed standard",
      "15.82 crore rural households (81%) already connected as of 2025-26",
      "11 states/UTs have achieved 100% Har Ghar Jal coverage",
      "Water quality tested in 4.49 lakh villages across the country in 2025-26",
      "Budget 2025-26: ₹67,000 crore allocated — largest single-year water mission budget",
    ],
    documents: [
      "No formal application or documents required from households",
      "Gram Panchayat identifies all unconnected households during Village Action Plan preparation",
      "Aadhaar linking of tap connections is being implemented for tracking",
    ],
    how_to_apply:
      "You don't apply individually — Jal Jeevan Mission connections are provided by the state government through the Gram Panchayat's Village Water and Sanitation Committee (VWSC/Paani Samiti). If your household has not received a tap connection yet, report it to your Gram Panchayat Sarpanch or VWSC. You can also file a complaint at jalsamadhan.in or call the helpline.",
    official_portal: "https://jaljeevanmission.gov.in/",
    helpline_number: "1800-121-2164",
    category: "rural-development",
    state: "all-india",
    description:
      "Jal Jeevan Mission provides free tap water connections to every rural home in India under the Har Ghar Jal initiative. Launched in August 2019, it has connected 15.82 crore rural households (81%) so far. The mission is extended till December 2028 with ₹67,000 crore budget for 2025-26.",
    content: `## What Jal Jeevan Mission Is

On Independence Day 2019, PM Narendra Modi announced a simple but enormous goal: **every rural home in India will have a tap with clean drinking water**. That is Jal Jeevan Mission — also called Har Ghar Jal (water in every home).

Before 2019, only **3.23 crore rural households (17%)** had tap water. The rest depended on hand pumps, open wells, rivers, or walking long distances — and it was overwhelmingly women who carried that burden.

By June 2026, **15.82 crore rural households (81%)** have tap connections. The mission has been extended to **December 2028** under JJM 2.0, with a budget of **₹67,000 crore for 2025-26** alone — the largest single-year investment in rural drinking water in India's history.

---

## States That Have Achieved 100% Coverage

Eleven states and UTs have achieved "Har Ghar Jal" status — all rural households with tap connections:

Goa, Haryana, Gujarat, Himachal Pradesh, Jharkhand, Kerala, Odisha, Punjab, Uttarakhand, Andaman & Nicobar Islands, and Dadra & Nagar Haveli and Daman & Diu.

---

## How JJM Works in Your Village

The Mission doesn't operate from Delhi — it works through every village:

**Paani Samiti / VWSC (Village Water and Sanitation Committee):**
Each Gram Panchayat sets up a water committee with at least 50% women members. This committee:
- Plans the village water supply system
- Oversees construction of water infrastructure
- Collects a small user charge (decided by the gram sabha)
- Maintains the system after installation
- Monitors water quality

**Village Action Plan (VAP):**
Before any work begins, the Gram Panchayat surveys every household, maps water sources, and prepares a plan covering every home, school, and Anganwadi centre in the village.

**What "Functional" means:**
A tap connection is counted as functional only if it delivers at least **55 litres of clean water per person per day** on a regular basis. A tap that runs dry most of the time doesn't count.

---

## What Is a Har Ghar Jal Certificate?

A Gram Sabha passes a formal resolution certifying that all households, schools, and Anganwadi Centres in the village are getting regular tap water supply. This is the final "Har Ghar Jal" certification. Only a few states — Goa, Dadra & Nagar Haveli, Daman & Diu — have full certification. Other states have connections but are still working toward full functional coverage.

---

## Water Quality Monitoring

JJM includes a major focus on water safety. In 2025-26:
- **2,843 laboratories** tested water samples across India
- **38.78 lakh water samples** tested in 4,49,961 villages
- **24.80 lakh women** trained in Field Testing Kits to monitor local water quality

If your tap water seems unsafe, you or the Paani Samiti can collect a sample and send it to the district water testing lab for free.

---

## What If Your House Hasn't Got a Tap Yet?

1. Speak to your **Gram Panchayat Sarpanch** or the VWSC secretary
2. File a complaint at **jalsamadhan.in** (the official grievance portal for JJM)
3. Call the JJM helpline: **1800-121-2164**
4. Contact your district's Public Health Engineering Department (PHED) or equivalent

The target is **100% coverage by December 2028**. Unconnected households in JJM areas are being prioritised.

---

## Common Questions

**Do I have to pay for the tap connection?** No installation charge for households. However, a small recurring water user charge (decided by the village gram sabha) may apply — typically a nominal amount like ₹50-100/month — to fund the O&M (operation and maintenance) of the village system.

**My village has a tap but there's no water pressure and the supply is irregular. What should I do?** Report to the VWSC/Paani Samiti first, then to the Gram Panchayat. If unresolved, file a complaint at jalsamadhan.in or call 1800-121-2164.

**Does JJM cover urban areas?** No. JJM covers only rural areas. Urban areas are covered under AMRUT 2.0 (Atal Mission for Rejuvenation and Urban Transformation).

**What does "55 litres per capita per day" mean?** This is the national standard for basic rural water supply. It includes drinking, cooking, and personal hygiene but not agricultural use.

---

## Official Links

| | |
|---|---|
| JJM Official Portal | jaljeevanmission.gov.in |
| Coverage Dashboard | ejalshakti.gov.in |
| Grievance Portal | jalsamadhan.in |
| Helpline | 1800-121-2164 (toll-free) |`,
    reading_time: "7 min read",
    faqs: [
      {
        question:
          "How many rural households have got tap water under Jal Jeevan Mission?",
        answer:
          "15.82 crore households — about 81% of all rural households in India. The mission started from a base of just 3.23 crore (17%) in August 2019 and is targeting 100% by December 2028.",
      },
      {
        question: "Is the tap water connection under JJM free for households?",
        answer:
          "Yes, there is no installation charge. Households may pay a small recurring maintenance charge (decided by the village gram sabha) to keep the system running.",
      },
      {
        question:
          "What is the deadline for Jal Jeevan Mission to achieve 100% coverage?",
        answer:
          "December 2028 under JJM 2.0, extended from the original 2024 target. The government has allocated ₹67,000 crore for 2025-26 alone to accelerate the remaining connections.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 8. PMKVY / SKILL INDIA
  // ─────────────────────────────────────────────────────────────
  {
    slug: "pm-kaushal-vikas-yojana-pmkvy-4-0-2026",
    title:
      "PM Kaushal Vikas Yojana 4.0 (PMKVY) 2026 — Free Skill Training with ₹8,000 Monthly Stipend",
    ministry: "Ministry of Skill Development and Entrepreneurship (MSDE)",
    launched_by:
      "FM Nirmala Sitharaman (PMKVY 4.0 launched February 1, 2023, in Union Budget); implementing agency: NSDC",
    objective:
      "Train youth in industry-relevant skills through certified short-term courses, enable employment and entrepreneurship, and recognise prior work experience through formal certification.",
    eligibility: [
      "Indian citizen aged 15–45 years",
      "Open to all — school dropouts, college dropouts, unemployed youth, and those seeking to upgrade skills",
      "Aadhaar card mandatory for enrollment",
      "For RPL (Recognition of Prior Learning): must have relevant prior work experience",
      "No income restriction — all economic backgrounds are eligible",
    ],
    benefits: [
      "Free training — no fee for the candidate",
      "Monthly stipend of ₹8,000 during training period",
      "Post-training cash incentive of ₹8,000 on certification",
      "Nationally recognised NSQF-aligned certificate (QR-coded)",
      "Accident insurance cover of ₹2 lakh for 3 years after certification",
      "Placement support through Rozgar Melas (government job fairs)",
      "Access to MUDRA loan for entrepreneurship after training",
      "25+ lakh candidates trained under PMKVY 4.0 as of July 2025",
      "14,843 training centres across 734 districts of India",
    ],
    documents: [
      "Aadhaar card (mandatory — linked to biometric attendance system)",
      "Academic mark sheet or educational certificate",
      "Bank account details (Aadhaar-linked, for stipend payment)",
      "Passport-size photographs",
    ],
    how_to_apply:
      "Visit skillindiadigital.gov.in → search for courses near you → select a training centre → register online with Aadhaar → the training centre will contact you with enrollment details. You can also walk directly into any PMKVY-affiliated training centre in your area — they will help you with enrollment. Enrollment is free.",
    official_portal: "https://www.skillindiadigital.gov.in/",
    helpline_number: "1800-123-9626",
    category: "employment",
    state: "all-india",
    description:
      "PMKVY 4.0 provides free skill training in 5,000+ job roles across 36+ sectors. Trainees get ₹8,000/month stipend, a nationally recognised certificate, accident insurance, and job placement support. 25+ lakh candidates trained as of 2025. Find training centres near you at skillindiadigital.gov.in.",
    content: `## What PMKVY Is

PM Kaushal Vikas Yojana (PMKVY) is India's flagship skill development programme, run by the Ministry of Skill Development and Entrepreneurship through the National Skill Development Corporation (NSDC). The idea is simple: if you don't have a formal degree or job, a short-term skill certificate can open doors.

PMKVY 4.0 was launched in the **February 2023 Union Budget**. It runs through March 2026 and covers courses in over **5,000 job roles across 36+ sectors** — from IT and electronics to construction, healthcare, beauty, and emerging areas like AI, drones, electric vehicles, and cybersecurity.

Key numbers: **25+ lakh candidates trained** as of July 2025; **14,843 training centres** across **734 districts** of India.

---

## What You Get Under PMKVY 4.0

| Benefit | Details |
|---|---|
| Training fees | Completely free |
| Monthly stipend | ₹8,000 per month during training |
| Post-certification incentive | ₹8,000 (lump sum after passing assessment) |
| Accident insurance | ₹2 lakh coverage for 3 years |
| Certificate | NSQF-aligned, nationally recognised, QR-coded |
| Job support | Placement through Rozgar Melas |
| MUDRA loan access | Easier access to startup loan after training |

---

## Types of Training Under PMKVY

**1. Short-Term Training (STT)**
Duration: 150–600 hours depending on the course (typically 2–6 months)
For: School/college dropouts, unemployed youth, those looking to switch careers
Assessment: By NCVET-approved agencies → certificate upon passing

**2. Recognition of Prior Learning (RPL)**
Duration: 30–132 hours
For: People already working in a field but without formal certification
Example: A cook who has worked for 10 years but has no certificate can take RPL and get a nationally recognised certificate after a short assessment + orientation
No need to retrain from scratch

**3. Special Projects**
For: Training in specific government/industry locations, targeting particular communities or sectors

---

## Sectors Covered

PMKVY 4.0 includes both traditional sectors and new-age ones:

**Traditional:** Construction, textiles, automotive, retail, agriculture, plumbing, IT-ITeS, BFSI (banking/finance/insurance), tourism and hospitality, healthcare, beauty and wellness, logistics

**New-age (added in 4.0):** Artificial Intelligence, drones, electric vehicles, green hydrogen, cybersecurity

---

## How to Find a Training Centre Near You

1. Go to **skillindiadigital.gov.in**
2. Search for courses by your district or state
3. Browse available courses and training centres
4. Select a centre and register online with Aadhaar
5. The centre will confirm your enrollment and training schedule

You can also walk into any NSDC-affiliated training centre and ask about enrollment — most will help you directly.

---

## Certificate Validity

PMKVY certificates are:
- Aligned to the **National Skills Qualifications Framework (NSQF)**
- Issued by sector skill councils and NCVET-approved assessment agencies
- **Nationally recognised** across India
- Carry a **QR code** for authenticity verification
- Accepted by employers, for further education, and for MUDRA loan applications

---

## PMKVY 3.0 vs 4.0: What Changed?

| Feature | PMKVY 3.0 | PMKVY 4.0 |
|---|---|---|
| Scale | Pilot — 2.78 lakh trained | Full-scale — 25+ lakh trained |
| Focus | Traditional skills | New-age + traditional |
| Digital system | Limited | Fully digitized via Skill India Digital Hub |
| Learning mode | Classroom only | Online, blended, hybrid |
| Employer alignment | Moderate | Mandatory On-the-Job Training |
| Certificate | Standard | QR-coded, NCVET assessed |

---

## Common Questions

**I'm 35 and haven't studied past Class 10. Can I still enroll?** Yes. PMKVY accepts candidates aged 15–45 with no minimum education requirement for most courses.

**Will completing PMKVY training guarantee me a job?** Not guaranteed, but training centres provide placement support and connect trainees with job fairs. The certificate improves your chances — especially for sectors like construction, logistics, IT support, and retail where formal certification is increasingly expected.

**I already work as a plumber but have no certificate. Can PMKVY help?** Yes — through the RPL (Recognition of Prior Learning) pathway. You'll do a short assessment + orientation and get a nationally recognised certificate without retraining.

**Is the ₹8,000 stipend paid monthly?** Yes, ₹8,000 per month during the training period, paid into your Aadhaar-linked bank account.

**Can I do PMKVY training while working?** Some centres offer flexible timing, and blended/online options are available in PMKVY 4.0. Check with your nearest training centre.

---

## Official Links

| | |
|---|---|
| Skill India Digital Hub | skillindiadigital.gov.in |
| NSDC | nsdcindia.org |
| Ministry of Skill Development | msde.gov.in |
| Helpline | 1800-123-9626 (toll-free) |`,
    reading_time: "8 min read",
    faqs: [
      {
        question: "Is PMKVY training really free? Are there any hidden charges?",
        answer:
          "Yes, completely free for eligible candidates. There are no course fees. You also receive a ₹8,000/month stipend during training and ₹8,000 after getting your certificate.",
      },
      {
        question: "What is NSQF and why does it matter for the certificate?",
        answer:
          "NSQF (National Skills Qualifications Framework) is India's national system for recognising vocational qualifications at different levels. PMKVY certificates are NSQF-aligned, which means they are officially recognised by employers and government across India.",
      },
      {
        question: "How can I find PMKVY training centres near me?",
        answer:
          "Go to skillindiadigital.gov.in, search by your district, and browse available courses and centres. There are 14,843 accredited centres across 734 districts in India.",
      },
    ],
  },
];

async function insertSchemes() {
  console.log(`=== Inserting ${schemes.length} schemes ===\n`);

  for (const scheme of schemes) {
    const { data, error } = await supabase
      .from("schemes")
      .insert(scheme)
      .select("slug")
      .single();

    if (error) {
      console.error(`❌  ERROR — ${scheme.title}\n   ${error.message}`);
    } else {
      console.log(`✅  INSERTED — ${scheme.title} (${data.slug})`);
    }
  }

  console.log("\n=== Done ===");
}

insertSchemes();
