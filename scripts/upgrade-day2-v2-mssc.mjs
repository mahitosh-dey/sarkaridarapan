// v2 upgrade: MSSC — extend to 3000w+ with keyword sections + PAA FAQs.
// Adds:
//   1. "Mahila Samman vs Sukanya Samriddhi comparison" (comparative keyword)
//   2. "MSSC maturity calculator with 2026-27 worked examples" (hidden-gem long-tail)
//   3. "MSSC withdrawal rules FAQ deep-dive" (informational keyword)
// Adds 5 PAA-matched FAQs.

import { upgradeScheme } from "./lib/upgrade-scheme.mjs";

const APPEND_CONTENT = `## Mahila Samman vs Sukanya Samriddhi Yojana: which is better for women investors

Since MSSC is closed for fresh deposits, women investors comparing small-savings options in 2026 often ask whether their existing MSSC and a fresh Sukanya Samriddhi Yojana (SSY) account should sit together or if one is materially better. The comparison table below settles the question.

| Feature | Mahila Samman (existing accounts only) | Sukanya Samriddhi Yojana (SSY) |
|---|---|---|
| Interest rate | 7.5% p.a. compounded quarterly | 8.2% p.a. compounded annually (Q2 FY 2026-27) |
| Fresh deposits allowed | No, closed since 1 April 2025 | Yes |
| Maximum deposit | Rs. 2 lakh per account | Rs. 1.5 lakh per financial year |
| Tenure | 2 years from deposit | 21 years or age 18 (whichever earlier) |
| Eligible person | Any woman or girl | Girl child under 10 years at account opening |
| Tax treatment | Interest fully taxable | Section 80C deduction on deposit, EEE (interest and maturity tax-free) |
| Premature withdrawal | 40% after 1 year | 50% at age 18 for education or marriage |
| Best for | Existing account holders till maturity | Long-term corpus for daughters' education/marriage |

For a woman with a daughter under 10, SSY at 8.2% and EEE tax treatment is superior on every dimension. For a woman over 40 without eligible dependents, PPF at 7.1% remains the closest alternative to MSSC's guaranteed-return profile. The 70-basis-point rate gap between MSSC 7.5% and PPF 7.1% is a lot smaller than most people realise once you factor in PPF's tax-free interest.

## MSSC maturity calculator worked examples for 2026-27

Since existing MSSC accounts continue earning 7.5% till their 2-year maturity, women investors are running maturity math for their FY 2026-27 payout. Here are three worked examples for common deposit dates.

**Example 1: Rs. 2 lakh deposit on 15 April 2023 (maturity 15 April 2025).**
This account already matured. Maturity payout was approximately Rs. 2,31,125 at 7.5% compounded quarterly. If you have not yet claimed maturity, visit your India Post branch or bank branch with passbook, Aadhaar, PAN, and cancelled cheque. Interest between maturity date and claim date is at Post Office Savings Account rate (4% p.a.), not 7.5%, so don't delay.

**Example 2: Rs. 1.5 lakh deposit on 1 September 2023 (maturity 1 September 2025).**
This account matured in September 2025. Maturity payout was approximately Rs. 1,73,344. Same claim process applies.

**Example 3: Rs. 2 lakh deposit on 15 March 2024 (maturity 15 March 2026).**
This account matured in March 2026. Maturity payout was approximately Rs. 2,32,044. If you haven't claimed maturity as of July 2026, you are earning only 4% p.a. on the balance since 15 March 2026, roughly Rs. 2,540 in lost interest so far. Claim immediately.

**Example 4: Rs. 2 lakh deposit on 30 March 2025 (maturity 30 March 2027).**
This is the last-batch MSSC account, opened one day before the 31 March 2025 fresh-deposit cutoff. Maturity payout will be approximately Rs. 2,32,044 on 30 March 2027, calculated at 7.5% compounded quarterly. Set a calendar reminder for early March 2027 to visit the branch and submit the maturity claim.

**Partial withdrawal calculator.** If you took an MSSC account with Rs. 2 lakh deposit and haven't withdrawn anything, at the end of year 1 your balance is approximately Rs. 2,15,340. You can withdraw up to 40% of this balance = Rs. 86,136. The remaining Rs. 1,29,204 continues to earn 7.5% for the second year.

## MSSC withdrawal rules FAQ deep-dive

Existing MSSC account holders often have detailed questions about withdrawal mechanics that generic explainer pages skip. Here's the definitive rulebook, straight from the Gazette Notification G.S.R. 237(E).

**Partial withdrawal after 1 year:** Up to 40% of the running balance, once per year. No penalty. Remaining balance continues to earn 7.5%. Withdrawn amount is credited to the linked savings account within 3 to 5 working days.

**Premature closure for medical emergency:** Only for life-threatening medical emergencies of the account holder or spouse. Requires hospital records and a doctor's certificate. Full interest at 7.5% is retained on the withdrawn amount. Two-day processing at most branches.

**Premature closure on death of account holder:** Full balance including accrued interest is paid to the registered nominee. If no nominee, legal heir needs a succession certificate. Legal heir claims take 4 to 8 weeks. Interest continues at 7.5% until the claim date, not at 4%.

**Voluntary premature closure:** Interest recalculated at 5.5% p.a. instead of 7.5% for the actual holding period. The differential is deducted from the payout. Fill Form-2 at the branch. Not recommended unless the alternative is significantly worse.

**Maturity claim:** Submit at the same branch where the account was opened, ideally within 30 days before or after the maturity date. Beyond the maturity window, interest drops to the 4% Post Office Savings Account rate. Documents: passbook, Aadhaar, PAN, cancelled cheque.

**Account transfer to another branch:** Free of cost. Fill Form-3 (transfer request) at the current branch. Takes 15 to 21 working days. Useful if you've moved cities and want your maturity credit to reach a branch in your new city.

**Tax on withdrawal:** Interest income is taxable per your income tax slab. TDS applies if annual interest exceeds Rs. 40,000 (Rs. 50,000 for senior citizens). Report under "income from other sources" in your ITR.

## Post office scheme for women 2026: MSSC replacements ranked

For women investors looking for a safe, guaranteed-return small-savings product to replace MSSC, five options are currently active at India Post. The ranking below is based on effective post-tax yield for a woman in the 20% tax bracket, plus lock-in flexibility.

**Rank 1: Senior Citizens Savings Scheme (SCSS) for women 60 and above.** 8.2% p.a., pays interest quarterly, 5-year tenure extendable 3 years. Section 80C deduction on deposit up to Rs. 1.5 lakh. Effective post-tax yield is roughly 6.6% for a 20%-bracket investor, superior to any FD in the same tenor.

**Rank 2: PPF for long-horizon women investors.** 7.1% p.a., 15-year tenure with 5-year extension blocks. EEE tax treatment (deposit gets 80C, interest and maturity tax-free). Effective yield is the same 7.1% because it's fully tax-free. Best for corpus building.

**Rank 3: Post Office Monthly Income Scheme (POMIS) for steady monthly cash flow.** 7.4% p.a., pays interest monthly. Max Rs. 9 lakh single, Rs. 15 lakh joint account. 5-year lock-in. Interest is taxable, so effective post-tax yield in 20% bracket is roughly 5.9%.

**Rank 4: Post Office 5-year Time Deposit.** 7.5% p.a., matches the old MSSC rate. Section 80C deduction if held 5 years. Interest is taxable. Effective post-tax yield is roughly 6% for a 20%-bracket investor.

**Rank 5: Post Office Recurring Deposit.** 6.7% p.a. compounded quarterly, 5-year tenure. Suitable for salaried women investing small monthly amounts. Interest is taxable, effective yield around 5.4%.`;

const NEW_FAQS = [
  {
    question: "Is Mahila Samman Savings Certificate still available in 2026?",
    answer: "No. MSSC closed for fresh deposits on 31 March 2025 per the original 2-year sunset in the operational notification. Union Budget 2026-27 did not extend or relaunch the scheme. India Post branches and the 15 authorised public sector banks do not accept new MSSC applications from 1 April 2025 onwards.",
  },
  {
    question: "What happens to existing MSSC accounts after 31 March 2025?",
    answer: "Existing MSSC accounts opened before 31 March 2025 continue earning 7.5% per annum compounded quarterly until their 2-year maturity date. All partial withdrawal and premature closure rules work as originally notified. Small-savings quarterly rate revisions notified by the Department of Economic Affairs do not change the rate for existing MSSC accounts.",
  },
  {
    question: "What is the interest rate on MSSC in 2026?",
    answer: "7.5% per annum compounded quarterly, as originally notified when the scheme launched in April 2023. This rate is locked for the life of each account and continues until the 2-year maturity date. Since the scheme closed for fresh deposits on 31 March 2025, no new accounts can be opened at this rate.",
  },
  {
    question: "Can I withdraw MSSC before 2 years?",
    answer: "Yes, in three cases. Partial withdrawal up to 40% of the balance is allowed after 1 year from account opening, once per year, without penalty. Premature closure is allowed for life-threatening medical emergency of the account holder or spouse, with full 7.5% interest retained. Voluntary premature closure is allowed with interest recalculated at 5.5% instead of 7.5% for the actual holding period.",
  },
  {
    question: "What is the best alternative to MSSC for women investors?",
    answer: "For a girl child under 10, Sukanya Samriddhi Yojana at 8.2% with EEE tax treatment is the strongest option. For a woman aged 18 to 59, PPF at 7.1% for 15 years or a 2-year Post Office Time Deposit at approximately 7.0% is the closest guaranteed-return alternative to MSSC. For a woman aged 60 and above, Senior Citizens Savings Scheme at 8.2% for a 5-year lock-in is materially better than MSSC ever was.",
  },
];

await upgradeScheme({
  slug: "mahila-samman-savings-certificate-2026",
  appendContent: APPEND_CONTENT,
  newFaqs: NEW_FAQS,
  minWords: 3000,
});
