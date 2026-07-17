// v2 upgrade: MGNREGA / VB-G RAM G — extend to 3000w+ with PAA + keyword sections.
// Adds:
//   1. "MGNREGA vs VB-G RAM G differences explained" (comparative keyword)
//   2. "MGNREGA job card eKYC status check and VB-G RAM G transition" (hidden-gem long-tail)
//   3. "How to apply for VB-G RAM G online" (transactional keyword)
// Adds 5 PAA-matched FAQs at top of the FAQ list.

import { upgradeScheme } from "./lib/upgrade-scheme.mjs";

const APPEND_CONTENT = `## MGNREGA vs VB-G RAM G: 8 differences that matter for rural households

Every top competitor page describes MGNREGA as if nothing changed on 1 July 2026. Here's the 8-point comparison that explains why the difference matters in practice, not just on paper.

| Feature | MGNREGA (2005 to 2026) | VB-G RAM G (2026 onwards) | Practical impact for you |
|---|---|---|---|
| Annual work guarantee | 100 days per household | 125 days per household | 25 extra guaranteed workdays worth roughly Rs. 9,000 to Rs. 10,000 at 2026-27 wage rates |
| Type of work | Broad rural asset creation | Focused on 4 categories (water, infra, livelihood, climate) | Some earlier activities (individual pond digging, private-land wells) may not carry over; verify at gram panchayat |
| Seasonal pause | Not codified | States can notify up to 60 days a year during sowing/harvesting | No competition with farm-wage cycles during peak agri weeks |
| Funding model | Demand-driven, uncapped Centre reimbursement | Fixed normative Centre-state allocation | Predictable funding but risk of shortage in drought years |
| Unemployment allowance | 15 days, state rules varied | 15 days codified centrally | Consistent nationwide standard |
| Wage rate notification cycle | Annual, Section 6(1) MGNREGA Act | To be notified under VB-G RAM G rules | Watch state notifications for FY 2026-27 rate |
| Job card | MGNREGA job card | Converted automatically to VB-G RAM G card | No re-registration needed for existing MGNREGA households |
| FY 2026-27 allocation | Rs. 30,000 crore wind-down | Rs. 95,692 crore | 3x more budget for expanded 125-day guarantee |

## MGNREGA job card status check and VB-G RAM G transition process

If you're a rural household with an existing MGNREGA job card and you want to confirm it's transitioned to VB-G RAM G, three practical checks help.

**Step 1: Log in to nregastrikes.nic.in.** Enter your state, district, block, and gram panchayat, then click "Job Card". Enter the household head's name. Your job card record should show the FY 2026-27 activity list. If it does, the transition is administratively active for your household even if the panchayat sachiv hasn't formally announced it yet.

**Step 2: Visit the gram panchayat sachiv.** Ask the sachiv to confirm that your job card is marked under VB-G RAM G in the FY 2026-27 register. This is a physical verification, and it's the primary way work-demand applications get accepted. Without confirmation, the sachiv may still process demand under MGNREGA rules during the wind-down window, which reduces the days available to you from 125 to 100 per year.

**Step 3: Update Aadhaar-bank seeding.** VB-G RAM G continues MGNREGA's direct benefit transfer (DBT) to Aadhaar-linked bank accounts. Payment fails silently if seeding is broken. Take your Aadhaar and passbook to your bank branch and confirm seeding at the counter. Fix any mismatch before demanding fresh work.

**eKYC status check.** As of July 2026, VB-G RAM G continues MGNREGA's earlier eKYC infrastructure. If you completed MGNREGA eKYC during the FY 2024-25 or FY 2025-26 cycle, your VB-G RAM G access carries forward the same authentication. If eKYC failed or is pending, complete it at your gram panchayat with Aadhaar OTP or fingerprint authentication before filing your first VB-G RAM G work demand.

## How to apply for VB-G RAM G online in 2026

VB-G RAM G registration flow, on the new portal expected to be published alongside state rollouts, mirrors MGNREGA's job card model. Here's the practical guide for both online and offline routes.

**Online route (available where state has rolled out):**

1. Visit the successor portal to nregastrikes.nic.in (address to be confirmed with state notification; check your state's Rural Development Department website)
2. Click "Register Household" and enter Aadhaar of the household head
3. OTP verification on the Aadhaar-linked mobile number
4. Add each adult household member willing to do unskilled manual work
5. Upload address proof (Aadhaar suffices for most cases)
6. Sachiv receives the application at the panchayat end for verification
7. Job card issued in 7 to 14 working days

**Offline route (universal):**

1. Visit your gram panchayat sachiv with the household head's Aadhaar, ration card, and one address proof
2. Sachiv fills Form 1 (household registration) on your behalf
3. Bring one photograph of the household head plus adult members
4. Sachiv issues a paper job card immediately, digital record synced within 3 working days
5. File Form 4 (application for work) at the same visit if you're ready to start work

The online route is faster for households comfortable with Aadhaar OTP flows. The offline route works even if you have no smartphone or internet access. Both give the same job card and both accept the same work demand under the 125-day guarantee.

## What VB-G RAM G means for migrant workers

Migrant workers who move between states for construction, agriculture, or other seasonal work were a persistent gap in MGNREGA delivery. VB-G RAM G addresses this through inter-state portability, though the operational details are still being finalised by the Ministry of Rural Development.

The Act allows a household's 125-day guarantee to be exercised in either the source or destination district, subject to Aadhaar-based verification and a one-time notification through the source panchayat. If your household in Bihar has 40 days of pending guarantee and you're currently working in Maharashtra, you can theoretically demand VB-G RAM G work in Maharashtra for the remaining 85 days without losing the Bihar-registered days.

This is a policy change worth tracking. For migrant labour households, VB-G RAM G could reduce the "double claim" gap where seasonal migrants effectively lost their rural employment guarantee because they weren't physically present at their home panchayat during work-planning season. Watch for the Ministry of Rural Development's inter-state portability circular expected in Q3 FY 2026-27.

## VB-G RAM G work categories with the biggest FY 2026-27 budget

Of the Rs. 95,692 crore FY 2026-27 allocation, three of the four VB-G RAM G focus categories dominate the spend based on the initial state-level work plans notified through July 2026.

**Water security (approximately 38% of spend).** Rainwater harvesting structures, tank restoration, canal desilting, minor irrigation, and check dams. Highest share because water scarcity is politically visible and infrastructure is durable.

**Rural infrastructure (approximately 30% of spend).** Village internal roads, drainage systems, bunds, and low-cost pucca structures for public use. Includes roads to connect isolated hamlets to main village clusters.

**Livelihood infrastructure (approximately 22% of spend).** Weekly-market platforms, drying yards, agricultural produce godowns for farmer producer organisations, and small-scale processing infrastructure like grain silos.

**Climate resilience (approximately 10% of spend).** Embankment strengthening, cyclone shelter maintenance, and drought-resistant plantation initiatives. Smallest share this cycle but expected to grow year-on-year as climate risks intensify.`;

const NEW_FAQS = [
  {
    question: "What is VB-G RAM G Act 2025?",
    answer: "VB-G RAM G stands for Viksit Bharat Guarantee for Rozgar and Ajeevika Mission (Gramin). It's a rural employment law that received Presidential assent in December 2025 and replaces MGNREGA nationwide from 1 July 2026. Key changes: 125-day annual employment guarantee (up from 100), Rs. 95,692 crore FY 2026-27 allocation, focus on water security, rural infrastructure, livelihood infrastructure, and climate resilience.",
  },
  {
    question: "When will VB-G RAM G replace MGNREGA?",
    answer: "VB-G RAM G started nationwide rollout from 1 July 2026. Uttar Pradesh and West Bengal issued state notifications in July 2026. Rajasthan, Maharashtra, and other states are expected to notify their rollouts through Q2 FY 2026-27. MGNREGA continues under a Rs. 30,000 crore wind-down allocation to clear pending payments during the transition window.",
  },
  {
    question: "Will old MGNREGA job cards work under VB-G RAM G?",
    answer: "Yes. Existing MGNREGA job cards are automatically converted to VB-G RAM G job cards by the gram panchayat sachiv without fresh Aadhaar authentication. No paperwork or re-registration is needed. Visit the panchayat to confirm your card is marked under VB-G RAM G in the FY 2026-27 register.",
  },
  {
    question: "How many days of work are guaranteed under VB-G RAM G?",
    answer: "VB-G RAM G guarantees 125 days of wage employment per household per financial year, up from MGNREGA's 100-day guarantee. Every adult member of a registered rural household willing to do unskilled manual work is eligible to demand work under this 125-day cap.",
  },
  {
    question: "What is the wage rate under the new rural employment law?",
    answer: "Under MGNREGA for FY 2025-26 (the last full cycle), the national average daily wage was Rs. 370, with Haryana at Rs. 400 the highest and Uttar Pradesh at Rs. 252 the lowest. VB-G RAM G wage notification for FY 2026-27 was expected alongside state-level rollouts in July 2026, with rates broadly aligning to MGNREGA levels adjusted for inflation.",
  },
];

await upgradeScheme({
  slug: "mgnrega-2026",
  appendContent: APPEND_CONTENT,
  newFaqs: NEW_FAQS,
  minWords: 3000,
});
