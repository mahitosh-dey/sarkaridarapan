// v2 upgrade: Stand-Up India — extend to 3000w+ with keyword-rich sections + PAA FAQs.
// Adds two new sections:
//   1. "Stand-Up India vs Mudra vs PMEGP" comparison (comparative keyword)
//   2. "How to apply on Standupmitra.in and prepare for the successor" (transactional + hidden-gem long-tail)
// Adds 5 PAA-matched FAQs at the top of the FAQ list.

import { upgradeScheme } from "./lib/upgrade-scheme.mjs";

const APPEND_CONTENT = `## Stand-Up India vs Mudra vs PMEGP: which loan is right for you

If you're an SC, ST, or woman entrepreneur reading this because the old Stand-Up India is closed, the practical question is which alternative to use for a fresh business loan today. The table below compares Stand-Up India (old and successor) with the two closest active alternatives: PM Mudra Loan and PMEGP.

| Feature | Old Stand-Up India (closed) | New Stand-Up India (pending) | PM Mudra Loan (active) | PMEGP (active) |
|---|---|---|---|---|
| Loan range | Rs. 10 lakh to Rs. 1 crore | Up to Rs. 2 crore | Rs. 50,000 to Rs. 20 lakh | Rs. 20 lakh (services) to Rs. 50 lakh (manufacturing) |
| Interest rate | 11% to 13% | Not yet notified | 8% to 14% | 11% to 14% (with margin money subsidy) |
| Collateral required | No (up to Rs. 1 crore under CGSSI) | Expected no (guidelines pending) | No (CGFMU cover) | No (up to Rs. 25 lakh under CGTMSE) |
| Beneficiary category | SC, ST, or woman | Same, first-time only | Any first-time or repeat borrower | Any Indian citizen aged 18+ |
| Repayment tenure | Up to 7 years | Not notified | 3 to 7 years | 3 to 7 years |
| Application portal | Standupmitra.in (closed) | Successor portal pending | Bank branch, JanSamarth, Udyami Mitra | kviconline.gov.in |
| Margin money subsidy | None | Unknown | None | 15% to 35% |

For most SC, ST, or women first-time entrepreneurs waiting for the successor scheme launch, PMEGP is the closest active substitute if you're setting up a manufacturing or service enterprise. Mudra Tarun or Tarun Plus works if you need Rs. 10 lakh to Rs. 20 lakh and are willing to accept a higher interest rate on a shorter tenure.

## How to apply on standupmitra.in and prepare for the successor

Standupmitra.in remains operational for pre-31 March 2025 borrowers. If you're an existing borrower, this is where you check sanction status, download your sanction letter, request handholding, or file a service request. Log in with your registered mobile number and Aadhaar for OTP-based access.

For prospective borrowers who want to be ready the day the successor scheme's operational guidelines drop, four preparation steps will put you at the front of the queue.

**Step 1: Get your CIBIL score above 720.** The successor scheme is expected to keep CGSSI-style credit guarantee coverage, which means banks will screen on CIBIL just like the old scheme. If you're below 700, use the 3 to 6 month window to close any pending EMIs, dispute errors on your CIBIL report at cibil.com (free), and let your score rebuild.

**Step 2: Register on Udyam and reserve your enterprise activity.** Free registration at udyamregistration.gov.in. Enter your proposed activity's 4-digit NIC code, promoter details, and investment plan. A pre-launch Udyam registration signals seriousness to loan officers and can be updated when the enterprise actually starts.

**Step 3: Complete DIC-EDI training.** The District Industries Centre in your district runs a 12 to 15-day Entrepreneurship Development Institute programme for free. Attend it. The completion certificate is a standard document banks accept as evidence of business readiness, and it's a filter successful Stand-Up India applicants routinely cleared.

**Step 4: Open a current account at a scheduled commercial bank.** Public sector banks lend more comfortably to existing customers. Open a zero-balance current account at SBI, PNB, Bank of Baroda, or Union Bank of India now. Build 6 months of transaction history before the successor scheme launches so your bank has a KYC-verified profile ready.

Once the successor scheme's operational guidelines drop (expected H2 FY 2026-27 per DFS briefing), track pib.gov.in and financialservices.gov.in for the notification. We'll update this page within 24 hours of the announcement with the new application link, revised eligibility criteria, and the launch-day walkthrough.

## State-level SC/ST corporation loans while you wait

The NSFDC (National Scheduled Castes Finance and Development Corporation) and NSTFDC (National Scheduled Tribes Finance and Development Corporation) offer concessional entrepreneurship loans that most first-time SC and ST applicants overlook. Loans typically run at 4% to 6% interest, with state-level SC/ST development corporation branches handling the actual disbursement.

Loan ceilings vary by state. Maharashtra Mahatma Phule Backward Class Development Corporation offers up to Rs. 25 lakh at 6% for Term Loan and Rs. 10 lakh at 4% for Micro Credit Finance. Karnataka Dr. B.R. Ambedkar Development Corporation offers up to Rs. 30 lakh at 4% interest for entrepreneurship activities. Tamil Nadu Adi Dravidar Housing Development Corporation runs up to Rs. 15 lakh at 4% for micro-enterprise.

To apply, visit your state's SC/ST corporation branch with Aadhaar, caste certificate, income certificate, business plan, and Udyam registration. Processing takes 30 to 60 working days. The concessional rate materially beats bank-market rates and offers a viable path while the Stand-Up India successor scheme's operational guidelines are still pending.

For women entrepreneurs specifically, the Rashtriya Mahila Kosh (RMK) offers loans up to Rs. 5 lakh at 6% interest through NGO intermediaries, and various state Women Development Corporations offer schemes like Punjab Mai Bhago Vidya Scheme, Andhra Pradesh Women Empowerment loans, and Kerala Women Development Corporation's Swayamsidha loans. These layer neatly with the Stand-Up India successor scheme once it opens; you can hold both concurrently as long as total exposure stays within RBI's prudential norms.`;

const NEW_FAQS = [
  {
    question: "Is Stand-Up India scheme still active in 2026?",
    answer: "The original Stand-Up India scheme closed for fresh applications on 31 March 2025. A successor scheme announced in Union Budget 2025-26 will offer term loans up to Rs. 2 crore for 5 lakh SC, ST, and women first-time entrepreneurs over 5 years, but operational guidelines from the Department of Financial Services were still pending as of July 2026.",
  },
  {
    question: "What is the new Stand-Up India scheme announced in Budget 2025-26?",
    answer: "FM Nirmala Sitharaman announced a successor to Stand-Up India in the Union Budget 2025-26 speech on 1 February 2025. It offers term loans up to Rs. 2 crore per beneficiary, targets 5 lakh SC, ST, and women first-time entrepreneurs over FY 2025-26 to FY 2029-30, and includes online capacity building and entrepreneurship workshops. Operational guidelines are pending.",
  },
  {
    question: "What is the loan amount under the revamped Stand-Up India scheme?",
    answer: "The new Stand-Up India successor scheme offers term loans up to Rs. 2 crore per beneficiary, double the old ceiling of Rs. 1 crore. Minimum loan amount, interest rate, moratorium period, and repayment tenor have not been notified yet. Watch financialservices.gov.in for operational guidelines.",
  },
  {
    question: "Who is eligible for the Rs 2 crore SC/ST women entrepreneur scheme?",
    answer: "The successor Stand-Up India scheme targets first-time SC, ST, and women entrepreneurs setting up a greenfield enterprise. First-time means the applicant has not previously owned or promoted a formally registered enterprise. Detailed eligibility criteria including age, sector coverage, and prior business history rules will be published with the operational guidelines.",
  },
  {
    question: "How much has been sanctioned under Stand-Up India till closure?",
    answer: "Rs. 60,504 crore was sanctioned and Rs. 34,450 crore disbursed cumulatively till 28 February 2025 across roughly 2.35 lakh accounts, per Department of Financial Services parliamentary reply. Women borrowers accounted for approximately 80% of Stand-Up India loans across the scheme's life. FY 2023-24 fresh sanctions were 39,643 with disbursements down 12% year-on-year at 17,374 loans.",
  },
];

await upgradeScheme({
  slug: "stand-up-india-scheme",
  appendContent: APPEND_CONTENT,
  newFaqs: NEW_FAQS,
  minWords: 3000,
});
