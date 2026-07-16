// Depth expansion: atal-pension-yojana-apy-2026
// 779 words -> targeting ~2,600 words.
// Research: pfrda.org.in, jansuraksha.gov.in, npscra.nsdl.co.in, PIB (21 Jan 2026 Cabinet
// extension till FY 2030-31, PRID 2216727), BusinessToday (Apr 2026 subscriber milestone),
// Outlook Money (higher-pension reform coverage 2026).
//
// Freshness updates:
// - Cabinet extended APY till FY 2030-31, approved 21 January 2026
// - 9.10 crore gross enrolments as of 18 May 2026 (PFRDA)
// - 1.35 crore new subscribers in FY26, highest annual addition since launch
// - AUM crossed Rs. 54,000 crore FY26 close
// - Higher pension slab reform under PFRDA consideration 2026 (no notification yet)
// - Income taxpayer bar effective 1 October 2022
//
// Humanizer rules applied: zero em/en dashes, sentence-case headings, no AI vocabulary,
// contractions, primary-source citations inline (AI-2), FAQ JSON-LD ready with
// direct-answer openers (AI-3), tables (AI-6), actual numbers (AI-4), primary sources (AI-5).
//
// Run modes:
//   DRY_RUN=1 node scripts/expand-atal-pension-yojana-2026.mjs   (pre-flight only, no DB write)
//   node scripts/expand-atal-pension-yojana-2026.mjs             (full run: pre-flight + DB write + revalidate + IndexNow)

import { createClient } from "@supabase/supabase-js";
import { pingIndexNow } from "./lib/indexnow.mjs";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";
const SITE_URL = "https://www.sarkaridarapan.com";
const SLUG = "atal-pension-yojana-apy-2026";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const NEW_TITLE = "Atal Pension Yojana 2026: Rs. 5,000/month, Extended till 2031";
const NEW_DESCRIPTION = "Atal Pension Yojana 2026 gives guaranteed monthly pension of Rs. 1,000 to Rs. 5,000 after 60. Cabinet extended scheme till FY 2030-31. 9.10 crore enrolled.";

const NEW_CONTENT = `## What Atal Pension Yojana is

Atal Pension Yojana (APY) is a government-backed pension scheme for workers in the unorganised sector. It guarantees a fixed monthly pension between Rs. 1,000 and Rs. 5,000 after the subscriber turns 60, in exchange for monthly contributions between age 18 and 40. The Pension Fund Regulatory and Development Authority (PFRDA) administers the scheme, and any bank or post office savings account can be used to enrol.

As of 18 May 2026, APY has 9.10 crore gross enrolments and total assets under management above Rs. 54,000 crore, per PFRDA. FY26 added 1.35 crore new subscribers, the highest single-year addition since APY launched in 2015.

APY replaced the earlier Swavalamban Yojana in 2015 and covers more low and middle-income Indians than any other voluntary retirement product regulated by PFRDA. The pension amount is not a projection or a market return. It's a legally-guaranteed monthly payout for life, funded by the subscriber's contribution stream and a central government backstop.

---

## Cabinet extended APY till FY 2030-31

On 21 January 2026, the Union Cabinet approved the continuation of Atal Pension Yojana till FY 2030-31 and cleared gap-funding support for the scheme's promotional and developmental activities, per PIB PRID 2216727. The extension answers what happens to APY after the original 2025-26 fund-support window.

For existing subscribers, the extension changes nothing about your contribution amount or pension terms. Your promised pension continues under the same rules you enrolled under. The extension matters for new enrolments in 2026 and beyond, since APY now has a clear five-year runway with committed government support for administrative costs and PFRDA's promotional push in rural areas.

Alongside the extension, PFRDA is reviewing a proposal to raise the maximum pension slab from Rs. 5,000 to a higher figure. As of mid-2026, no notification has been issued, but Outlook Money and other financial press have reported the reform is under active PFRDA consideration. Existing subscribers can migrate to the higher slab if it goes through, though contribution amounts would need to be recalculated for the extra corpus.

---

## Who can join APY

Four rules decide APY eligibility.

You must be between 18 and 40 years old on the date of enrolment. Below 18 you can't enrol; at 41 or older the scheme is closed to you. Anyone in the 18 to 40 window with a valid savings bank or post office account can apply.

You need an Aadhaar-linked mobile number. Aadhaar is used for e-KYC at enrolment, and monthly SMS confirmations of the auto-debit go to the linked mobile.

You can't be an income taxpayer. Since 1 October 2022, individuals who have filed an income tax return in the preceding financial year are barred from new APY enrolment. Existing pre-2022 subscribers who now file ITR are grandfathered in, but no new enrolments open for taxpayers.

You must consent to an auto-debit mandate on your bank or post office account. APY contributions are pulled automatically each month, with no manual payment option.

The typical APY subscriber is a domestic worker, farmer, driver, small shopkeeper, factory worker, self-employed tradesperson, or private-sector low-wage employee. Government employees under NPS and formal-sector workers under EPFO are usually better served by their existing scheme rather than APY.

---

## Contribution chart: what you pay each month

Your monthly contribution depends on two variables: the pension slab you choose (Rs. 1,000, 2,000, 3,000, 4,000, or 5,000 per month after 60), and your age at enrolment. The lower the entry age, the lower your monthly contribution for the same pension.

The canonical PFRDA contribution chart is below (all figures in rupees per month):

| Entry age | Rs. 1,000 pension | Rs. 2,000 pension | Rs. 3,000 pension | Rs. 4,000 pension | Rs. 5,000 pension |
|---|---|---|---|---|---|
| 18 | 42 | 84 | 126 | 168 | 210 |
| 20 | 50 | 100 | 150 | 198 | 248 |
| 25 | 76 | 151 | 226 | 301 | 376 |
| 30 | 116 | 231 | 347 | 462 | 577 |
| 35 | 181 | 362 | 543 | 722 | 902 |
| 40 | 291 | 582 | 873 | 1,164 | 1,454 |

Source: NSDL APY Subscribers Contribution Chart (npscra.nsdl.co.in).

The contribution stays fixed for the entire deferment period. You can't pause and resume, and you can't vary the amount month to month.

You can switch pension slabs once a year on 1 April. Upgrading from Rs. 2,000 to Rs. 3,000 for a 30-year-old, for example, would raise the monthly contribution from Rs. 231 to Rs. 347. Downgrading is also allowed once a year on the same date.

---

## Worked example: pension math at three entry ages

Concrete numbers make APY easier to compare against other retirement products. Three scenarios computed on the PFRDA base chart show the effect of entry age.

An 18-year-old on the Rs. 1,000 pension slab pays Rs. 42 per month for 42 years to age 60. Total contribution comes to Rs. 21,168. Guaranteed pension is Rs. 1,000 per month for life after 60. On subscriber death, the spouse gets the same Rs. 1,000; on spouse death, the nominee gets the returnable corpus of approximately Rs. 1.7 lakh (per PFRDA formula).

A 25-year-old on the Rs. 3,000 pension slab pays Rs. 226 per month for 35 years. Total contribution comes to Rs. 94,920. Guaranteed pension is Rs. 3,000 per month for life. Returnable corpus to nominee is approximately Rs. 5.1 lakh.

A 40-year-old on the Rs. 5,000 pension slab pays Rs. 1,454 per month for 20 years. Total contribution comes to Rs. 3.49 lakh. Guaranteed pension is Rs. 5,000 per month for life. Returnable corpus to nominee is approximately Rs. 8.5 lakh.

The younger the entry age, the higher the effective return on contribution. The 18-year-old puts in Rs. 21,168 across a working life and draws pension for 20+ years plus leaves Rs. 1.7 lakh corpus. The 40-year-old puts in Rs. 3.49 lakh across 20 years for the same monthly pension pattern.

The returnable corpus is a distinct feature of APY versus most other Indian pension products. On spouse death after the subscriber's death, the corpus goes to the nominee as a lump sum. Neither the subscriber nor spouse can withdraw the corpus while alive. This design keeps the guaranteed monthly pension solvent for every participant in the pool.

---

## What happens if you miss auto-debit

APY assumes the auto-debit succeeds every month. If your bank account has insufficient balance on the debit date, penalty and freeze rules kick in.

The penalty starts at Re 1 per Rs. 100 missed for pension slabs Rs. 1,000 and Rs. 2,000, rises to Rs. 2 per Rs. 100 for the Rs. 3,000 slab, Rs. 5 per Rs. 100 for the Rs. 4,000 slab, and Rs. 10 per Rs. 100 for the Rs. 5,000 slab.

If contributions are missed for 6 continuous months, the account is frozen. You can still make a lump-sum payment for the missed months plus penalty to unfreeze it.

After 12 months of continuous missed contributions, the account is deactivated. Reactivation requires PFRDA nodal-bank approval and full penalty payment.

After 24 continuous months of default, the account is closed. The subscriber's contributions plus interest are returned to the bank account, and pension entitlement is lost.

The simplest way to avoid all of the above is to keep at least three months' worth of contributions in the linked bank account as buffer, especially around your annual bonus or salary hike when the account balance can dip.

---

## How to enrol in APY

Two paths lead to APY enrolment: through your bank or post office branch, or through the online net-banking portal of banks that support digital APY registration.

The branch path starts at any nationalised, private, or cooperative bank where you have a savings account. Ask for the APY subscriber registration form (SRF). Fill in your Aadhaar number, mobile number, chosen pension slab, and auto-debit consent. The branch employee submits the form to the bank's APY nodal desk and issues an acknowledgement number. Your APY account is activated within 3 to 5 working days, and the first monthly contribution is debited automatically.

The online path works inside the net-banking apps of SBI, HDFC, ICICI, Axis, PNB, Bank of Baroda, and Union Bank. Log in, look for PMSBY / PMJJBY / APY in the insurance-scheme menu, enter Aadhaar and OTP, choose pension slab, and confirm the auto-debit consent. The account is active from the next debit cycle.

The documents needed are an Aadhaar card, an Aadhaar-linked mobile number, a savings bank or post office account, and a self-declaration of non-taxpayer status. No income proof, no PAN card, no separate address proof.

Once the account is active, the bank issues a Permanent Retirement Account Number (PRAN) and mails a physical statement of accounts annually. You can also check the account online at npscra.nsdl.co.in using PRAN and date of birth.

---

## Withdrawal and exit rules

APY is designed as a long-hold pension product. Exit rules reflect that design.

At regular exit at 60, the subscriber starts receiving the guaranteed monthly pension for life from the month after they turn 60. Pension is credited via NEFT to the linked bank account and continues till the subscriber's death.

On subscriber death, the spouse becomes the default nominee and receives the same monthly pension for life. On spouse death, the returnable corpus (per PFRDA formula) goes to the nominated beneficiary as a lump sum.

Voluntary exit before 60 is only allowed in exceptional cases: terminal illness of the subscriber or death of the subscriber before 60. In terminal illness cases, the accumulated contributions and any interest are returned to the subscriber, and pension entitlement is closed. This is the only pre-60 exit path for a living subscriber.

If the subscriber dies before 60, the spouse can either continue the account by paying remaining contributions until the subscriber would have turned 60 and then draw pension for life, or withdraw the accumulated corpus immediately.

APY doesn't allow partial withdrawals, loans against corpus, or premature exits for personal financial emergencies. The rules exist to keep the guaranteed pension solvent for every subscriber in the pool.

---

## Tax benefit under Section 80CCD

Contributions to Atal Pension Yojana qualify for tax deduction under Section 80CCD of the Income Tax Act. Two provisions apply.

Under Section 80CCD(1), APY contributions count within the overall Rs. 1.5 lakh deduction under Section 80C. This isn't an additional benefit. APY simply becomes eligible for the same pool that also holds LIC premium, EPF, PPF, and ELSS.

Under Section 80CCD(1B), an additional Rs. 50,000 deduction is available for APY and NPS contributions above the Rs. 1.5 lakh 80C limit. This is a separate ceiling and stacks on top of 80C.

The taxpayer paradox is that since 1 October 2022, income taxpayers cannot enrol in new APY accounts. Existing pre-2022 subscribers who now file ITR can still claim the deduction on their ongoing contributions. New enrolments are restricted to non-taxpayers, who by definition earn below the Rs. 2.5 lakh basic-exemption threshold and rarely have significant tax to save.

For a Rs. 5,000 pension slab at entry age 25, the annual contribution is Rs. 376 x 12 = Rs. 4,512. For a 40-year entry with the same slab, annual contribution is Rs. 1,454 x 12 = Rs. 17,448. Both fit inside 80CCD(1) if the subscriber ever crosses the tax threshold in later years.

---

## APY vs NPS Vatsalya vs PMVVY: how they compare

APY sits alongside two other government-backed retirement products. The three are worth comparing side by side.

| Feature | APY | NPS Vatsalya | PMVVY (closed to new enrolments Mar 2023) |
|---|---|---|---|
| Target user | Unorganised sector adult 18 to 40 | Minor children 0 to 18 | Senior citizen 60+ |
| Pension guarantee | Yes, Rs. 1,000 to 5,000 fixed slab | No, market-linked corpus | Yes, 7.4% fixed for 10 years |
| Contribution period | Till age 60 | Till child turns 18 (then convert to NPS) | Lump-sum purchase |
| Return-of-corpus | Yes, to nominee after spouse | Yes, at 60 to subscriber | Yes, at 10 years to nominee |
| Tax benefit | 80CCD | 80CCD | 80C |
| Regulator | PFRDA | PFRDA | LIC |
| Withdrawal before term | Only on terminal illness or death | Restricted till 18 | 3 years partial |

APY fits if you are 18 to 40, not a taxpayer, want guaranteed monthly pension after 60, can commit to an unbroken auto-debit for 20 to 40 years, and are comfortable with pension capped at Rs. 5,000/month.

NPS Vatsalya fits if you are a parent starting retirement savings for a young child, willing to accept market-linked returns, and want to lock the money till 18.

PMVVY fits if you were already 60+ before 31 March 2023, already have an existing PMVVY policy, and want to complete the 10-year fixed-return term. New enrolments have been closed since 31 March 2023.

---

## Common rejection reasons for APY enrolment

Applications get rejected at the bank nodal desk stage for a small set of common issues. Fixing these upfront saves a re-submission cycle.

The most common rejection is an Aadhaar and mobile mismatch. The Aadhaar on the SRF must match the mobile number the OTP was sent to. Update your mobile at the Aadhaar seva kendra if there is a mismatch.

The taxpayer status flag catches anyone who filed an income tax return in the preceding financial year. This is verified through PAN linkage with the Aadhaar backend. Non-filers who receive Form 16 from an employer but did not file ITR are still eligible.

Age outside the 18 to 40 window is checked on the date of enrolment using the Aadhaar date of birth. 40 years plus 1 day is rejected. Below 18 the SRF cannot even be submitted.

Joint account attempts are rejected because APY is a single-holder product. Joint bank accounts cannot be used for auto-debit. Open a single-holder account first and then apply.

Duplicate PRAN triggers rejection because one person can hold only one APY account. If the Aadhaar is already linked to an APY PRAN, the new SRF is rejected. If you want to move to a different bank, use the inter-bank shift form rather than opening a fresh account.

---

## Frequently asked questions

**Am I eligible for Atal Pension Yojana in 2026?** You qualify if you are 18 to 40 years old, an Indian citizen with a savings bank or post office account, and not an income taxpayer. Aadhaar and a linked mobile number are also mandatory.

**What is the current maximum APY pension?** Rs. 5,000 per month for life after age 60. PFRDA is reviewing a higher slab in 2026, but no notification has been issued yet.

**How is APY different from NPS?** APY is a small-corpus, guaranteed-pension scheme aimed at the unorganised sector. NPS is a market-linked accumulation scheme with no guaranteed pension amount and is used by government employees and higher-income private-sector workers. Both are regulated by PFRDA.

**Can I hold both APY and NPS accounts?** Yes. There is no conflict, and both accounts can be held simultaneously. Each has its own PRAN.

**What happens if I stop APY contributions?** Penalty accrues per missed month at Re 1 to Rs. 10 per Rs. 100 depending on your slab. After 6 months of continuous default the account is frozen, after 12 months it is deactivated, and after 24 months it is closed with only contributions plus interest returned.

**Is Atal Pension Yojana taxable?** Contributions qualify for deduction under Section 80CCD. The pension received after 60 is taxable as income under normal income-tax rules.

**Can I withdraw APY money before 60?** Only in specific cases: terminal illness of the subscriber (accumulated contributions returned), or death of the subscriber before 60 (spouse can continue or withdraw the corpus). Voluntary withdrawal for other reasons is not allowed.

**Which bank should I open APY at?** Any bank or post office where you already have a savings account. The bank does not affect pension amount or subscription terms since PFRDA runs the pool centrally.

**Is APY safe if the scheme faces a funding gap?** APY contributions are pooled and invested by PFRDA in a regulated pension fund. The government's guaranteed pension is a legal commitment. In the case of any shortfall between actual corpus and promised pension, the central government funds the difference from budget resources.

**How do I check my APY account balance and PRAN statement?** Log in to npscra.nsdl.co.in with PRAN and date of birth. The e-statement shows total contributions, latest contribution, and projected pension based on current contribution pattern. The physical annual statement is also mailed to the linked address.

---

## Official links and helplines

| Purpose | Link or number |
|---|---|
| Official APY portal | jansuraksha.gov.in |
| PFRDA main site | pfrda.org.in |
| NSDL Central Recordkeeping Agency | npscra.nsdl.co.in |
| APY contribution chart PDF | npscra.nsdl.co.in/nsdl/scheme-details/APY_Subscribers_Contribution_Chart_1.pdf |
| APY subscriber registration form | jansuraksha.gov.in/APY-Forms.aspx |
| Toll-free helpline | 1800-11-0069 |
| PFRDA grievance | pfrda.org.in > Grievance |
| PRAN statement download | npscra.nsdl.co.in |
| e-PRAN download | enps.nsdl.com |
`;

const NEW_FAQS = [
  {
    question: "Am I eligible for Atal Pension Yojana in 2026?",
    answer: "You qualify if you are 18 to 40 years old, an Indian citizen with a savings bank or post office account, and not an income taxpayer. Aadhaar and a linked mobile number are also mandatory.",
  },
  {
    question: "What is the current maximum APY pension?",
    answer: "Rs. 5,000 per month for life after age 60. PFRDA is reviewing a higher slab in 2026, but no notification has been issued yet.",
  },
  {
    question: "How is APY different from NPS?",
    answer: "APY is a small-corpus, guaranteed-pension scheme aimed at the unorganised sector. NPS is a market-linked accumulation scheme with no guaranteed pension amount and is used by government employees and higher-income private-sector workers. Both are regulated by PFRDA.",
  },
  {
    question: "Can I hold both APY and NPS accounts?",
    answer: "Yes. There is no conflict, and both accounts can be held simultaneously. Each has its own PRAN.",
  },
  {
    question: "What happens if I stop APY contributions?",
    answer: "Penalty accrues per missed month at Re 1 to Rs. 10 per Rs. 100 depending on your slab. After 6 months of continuous default the account is frozen, after 12 months it is deactivated, and after 24 months it is closed with only contributions plus interest returned.",
  },
  {
    question: "Is Atal Pension Yojana taxable?",
    answer: "Contributions qualify for deduction under Section 80CCD. The pension received after 60 is taxable as income under normal income-tax rules.",
  },
  {
    question: "Can I withdraw APY money before 60?",
    answer: "Only in specific cases: terminal illness of the subscriber (accumulated contributions returned), or death of the subscriber before 60 (spouse can continue or withdraw the corpus). Voluntary withdrawal for other reasons is not allowed.",
  },
  {
    question: "Which bank should I open APY at?",
    answer: "Any bank or post office where you already have a savings account. The bank does not affect pension amount or subscription terms since PFRDA runs the pool centrally.",
  },
  {
    question: "Is APY safe if the scheme faces a funding gap?",
    answer: "APY contributions are pooled and invested by PFRDA in a regulated pension fund. The government's guaranteed pension is a legal commitment. In the case of any shortfall between actual corpus and promised pension, the central government funds the difference from budget resources.",
  },
  {
    question: "How do I check my APY account balance and PRAN statement?",
    answer: "Log in to npscra.nsdl.co.in with PRAN and date of birth. The e-statement shows total contributions, latest contribution, and projected pension based on current contribution pattern.",
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

// MDX-safety: reject angle-bracket tag-like patterns that MDX parses as JSX.
// Anything matching <lowercase-tag-name> breaks the build during prerender.
const mdxUnsafe = fullText.match(/<[a-z][a-z0-9-]*>/g);
if (mdxUnsafe && mdxUnsafe.length) {
  console.error("ABORT: MDX-unsafe angle-bracket tag-like patterns:", [...new Set(mdxUnsafe)]);
  console.error("  Fix: replace <foo-bar> with [foo-bar] or (foo bar).");
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

if (process.env.DRY_RUN === "1") {
  console.log("=== DRY_RUN=1 detected: stopping before DB write ===");
  process.exit(0);
}

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
