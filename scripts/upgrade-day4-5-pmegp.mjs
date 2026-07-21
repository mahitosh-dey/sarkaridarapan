// Day 4 upgrade #5: PMEGP.
// Freshness moats: 15th FC cycle expiry watch (FY 2025-26 end), worked subsidy calc
// scenarios, ranked rejection reasons, 2nd loan up to Rs 1 crore upgradation path,
// CGTMSE overlay.

import { replaceScheme } from "./lib/replace-scheme.mjs";

const TITLE = "PMEGP 2026: subsidy, apply, 2nd loan up to Rs 1 crore";

const DESCRIPTION = "PMEGP 2026 guide: 15-35% subsidy for new micro-enterprises up to Rs 50 lakh manufacturing, 2nd loan Rs 1 crore, apply online, ranked rejection reasons.";

const CONTENT = `## What PMEGP is in 2026

Prime Minister's Employment Generation Programme (PMEGP) is the central credit-linked subsidy scheme for setting up new micro-enterprises in India. Project cost ceiling is Rs 50 lakh for manufacturing units and Rs 20 lakh for service and business sector units. Subsidy ranges from 15 percent to 35 percent of project cost depending on applicant category and unit location, delivered as margin money that is adjusted against the bank loan after 3 years of successful operation. The scheme is administered by the Ministry of MSME through Khadi and Village Industries Commission (KVIC) as the national nodal agency, with state KVIC directorates, state Khadi and Village Industries Boards (KVIB), and District Industries Centres (DIC) as implementing agencies.

Cumulative achievement through FY 2024-25 stands at 10,18,185 micro-enterprises established, Rs 73,348.39 crore of bank loans sanctioned, Rs 27,166.07 crore of margin money disbursed, and 90.04 lakh persons employed. In June 2025, KVIC disbursed Rs 300 crore of margin money to 11,480 service-sector beneficiaries against Rs 906 crore of loan sanctions, per PIB PRID 2137047. A prior tranche in early 2025 disbursed Rs 300 crore to 8,794 beneficiaries.

The most important open question in 2026 is the 15th Finance Commission cycle expiry at the end of FY 2025-26. The current PMEGP allocation of Rs 13,554.42 crore covers FY 2021-22 to 2025-26 and targets 4 lakh new units plus 30 lakh jobs. As of July 2026, formal renewal into the extended 15th FC window or a fresh 16th FC allocation has not been publicly notified. This affects application timing for the second half of FY 2026-27.

## Subsidy grid: exact percentages by category and location

Subsidy percentages under PMEGP (revised in the December 2023 operational guidelines) are the single biggest factor determining what a beneficiary actually receives at the end of the 3-year hold period.

| Beneficiary category | Urban area subsidy | Rural area subsidy |
|---|---|---|
| General category | 15 percent | 25 percent |
| Special category (SC/ST/OBC/women/PwD/ex-servicemen/NER/hill areas/aspirational districts/transgender) | 25 percent | 35 percent |

Rural area is defined as any area not classified as a municipal corporation, notified municipality, or cantonment board. Aspirational districts are the 112 districts identified by NITI Aayog in the aspirational districts programme. Hill areas covers designated hill states and hill regions. Northeast Region (NER) covers all 8 northeastern states.

Beneficiary's own contribution is 10 percent of project cost for general category and 5 percent for special category. The balance of project cost is financed by the bank as term loan and working capital loan. Interest is charged at the bank's applicable MSME lending rate, typically 11 to 12 percent per annum in July 2026.

## Worked subsidy examples for common scenarios

Three worked examples that show exactly how PMEGP subsidy works in practice.

**Example 1: SC applicant, rural area, manufacturing project of Rs 40 lakh.**
Subsidy at 35 percent = Rs 14 lakh. Own contribution at 5 percent = Rs 2 lakh. Bank loan at 60 percent = Rs 24 lakh. The bank sanctions the Rs 24 lakh loan and locks Rs 14 lakh in a margin money account. Applicant runs the unit for 3 years, and on successful completion, the Rs 14 lakh margin money is adjusted against the loan, effectively reducing the outstanding loan to Rs 10 lakh at the end of year 3.

**Example 2: General category applicant, urban area, service project of Rs 15 lakh.**
Subsidy at 15 percent = Rs 2.25 lakh. Own contribution at 10 percent = Rs 1.5 lakh. Bank loan at 75 percent = Rs 11.25 lakh. Same 3-year hold, and the Rs 2.25 lakh is credited against the loan on successful completion.

**Example 3: Woman applicant, rural area, manufacturing project of Rs 25 lakh.**
Subsidy at 35 percent = Rs 8.75 lakh. Own contribution at 5 percent = Rs 1.25 lakh. Bank loan at 60 percent = Rs 15 lakh. Same 3-year hold, Rs 8.75 lakh adjusted at year 3.

The 3-year hold is where many applicants get confused. The subsidy is not paid to you in cash at sanction. It sits in a locked margin money account with the bank, earning interest that goes against your loan interest. If the unit fails or shuts down before 3 years of successful operation, the margin money is treated as a regular loan component and you pay it back.

## Eligibility 2026: age, income, education, family rule

Age eligibility is 18 years and above with no upper age limit. There is no income ceiling for the applicant. Educational qualification requirement is 8th standard pass for projects above Rs 5 lakh in manufacturing and Rs 2 lakh in services. For projects up to Rs 5 lakh manufacturing and Rs 2 lakh services, there is no minimum education requirement.

The family rule states that only one person per family is eligible for PMEGP assistance. Family is defined as the applicant, spouse, unmarried children, and dependent parents. If any family member has already availed PMEGP assistance for a still-operating unit, additional family members are ineligible for a fresh PMEGP loan.

Existing entrepreneurs are not eligible for a first PMEGP loan. The scheme is exclusively for setting up new micro-enterprises. Existing PMEGP beneficiaries who have successfully repaid their first loan can apply for a second loan for upgradation (covered in the next section).

## The 2nd loan up to Rs 1 crore for upgradation

Successful PMEGP beneficiaries who have completed 3 years of unit operation and fully repaid the first PMEGP loan can apply for a second loan for upgradation. This is the least-known but most valuable feature of PMEGP for existing beneficiaries who want to scale.

Second loan project cost ceiling is Rs 1 crore for manufacturing units (up from Rs 50 lakh first loan) and Rs 25 lakh for service units (up from Rs 20 lakh). Subsidy on the second loan is 15 percent for general category and 20 percent for special category, capped at Rs 15 lakh for manufacturing (Rs 20 lakh for NER and hill areas) and Rs 3.75 lakh for services (Rs 5 lakh for NER and hill areas).

Second loan application is filed with the same bank branch or a different empanelled bank. Documents required are the first loan closure certificate, 3 years of audited financial statements showing the unit is operational and profitable, and a fresh Detailed Project Report (DPR) for the upgradation. Approval turnaround is 45 to 90 days depending on the bank.

## CGTMSE overlay: collateral-free coverage up to Rs 10 lakh

CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) provides an automatic collateral-free guarantee cover on PMEGP loans up to Rs 10 lakh. For the general category applicant with a manufacturing project of Rs 40 lakh, the bank loan of Rs 24 lakh has the first Rs 10 lakh automatically covered under CGTMSE, and the balance Rs 14 lakh may require collateral or personal guarantee at the bank's discretion.

For loans above Rs 10 lakh, CGTMSE guarantee cover up to Rs 5 crore is available on a case-by-case basis, subject to bank underwriting. The CGTMSE fee is 1 to 2 percent per annum charged on the outstanding loan, added to the interest rate. This makes small-ticket PMEGP loans genuinely collateral-free for applicants without property or fixed assets to pledge.

## Step-by-step online application via kviconline.gov.in

Register on kviconline.gov.in with Aadhaar-linked mobile number and email. Fill in the online application form under the PMEGP e-portal. Sections include personal details, family details, education, category (general or special), project details (manufacturing or service, project cost, location, employment expected), bank preference, and Detailed Project Report (DPR) upload.

Application is submitted online with a system-generated reference number. It is forwarded to the district task force committee for evaluation, which typically meets monthly. Task force approval is typically 30 to 60 days. On approval, the case is forwarded to the applicant's preferred bank for loan sanction. Bank sanction takes another 30 to 60 days.

Total time from online application to loan disbursal is typically 90 to 120 days for well-prepared applications. The KVIC published a target of 27 days from application to disbursal in recent PIB releases, which is achievable only for pre-approved DPRs and known applicants at bank branches with dedicated MSME desks.

## Documents required at PMEGP application

Documents required at the online application stage are Aadhaar card, PAN card, category certificate (SC/ST/OBC/PwD/ex-servicemen/transgender as applicable), educational qualification proof, project location proof (electricity bill, rent agreement, land document), Detailed Project Report (DPR) with cost estimation and business plan, bank passbook copy for the sanctioning account, and passport-size photograph.

Additional documents at the bank sanction stage are the family status certificate showing no other PMEGP-financed unit in the family, KYC of any co-applicant or guarantor, and quotations for machinery and equipment covered in the DPR.

For applicants proposing a project above Rs 25 lakh, a formal business plan endorsed by a chartered accountant or company secretary is often requested by banks, though not formally required by the scheme guidelines.

## EDP training tiers: mandatory before disbursal

Entrepreneurship Development Programme (EDP) training is mandatory before loan disbursal for most PMEGP applicants. Duration is 10 working days for projects above Rs 5 lakh, 5 working days for projects up to Rs 5 lakh, and waived for projects under Rs 2 lakh.

Training is conducted by KVIC-empanelled training institutes, and the training cost is borne by KVIC. The training covers business planning, financial management, marketing, digital tools, and regulatory compliance for a new micro-enterprise. Certificate issued at training completion is the last document required before bank sanction.

Skipping EDP training is a common cause of delayed disbursal. Enrol in the next available EDP batch at your district after online application to keep the sanction timeline tight.

## Ranked rejection reasons and how to fix them

Rejection at the district task force stage or the bank sanction stage is common. Ranked by frequency based on KVIC feedback and MSME grievance data through Q1 FY 2026-27.

Poor DPR quality is the top reason. Vague market analysis, unrealistic revenue projections, missing bill of materials, and absent financial model triggers rejection at the task force stage. Fix: engage a professional DPR consultant, verify the DPR matches actual local market conditions, and pre-review with your bank's MSME officer before submission.

CIBIL score under 650 is the second reason at the bank sanction stage. Fix: obtain your CIBIL report, close small credit card dues, resolve any settled but showing accounts, and reapply after 3 to 6 months of score improvement.

Negative-list activity is the third reason. PMEGP has a defined negative list of activities that are ineligible, including tobacco, alcohol, meat processing (with specific exceptions), any activity harmful to the environment or public health, and certain agriculture and animal husbandry activities that are covered under other schemes. Fix: check the negative list published on kviconline.gov.in before finalising your project, and shift to an eligible parallel activity if your first choice is on the list.

Branch service area mismatch is the fourth reason. Banks are increasingly strict on serving applications only from their notified service area. Fix: apply at the bank branch nearest to your project location, not your residence.

Insufficient own contribution proof is the fifth reason. Bank statement showing the required 10 percent (general) or 5 percent (special) as free balance is required at sanction stage. Fix: consolidate savings into one account 6 months before applying, avoid large withdrawals, and maintain a stable balance.

## Which banks sanction PMEGP fastest

Application experience varies by bank based on their MSME desk capacity and PMEGP portfolio priority. State Bank of India, Punjab National Bank, Bank of Baroda, and Bank of India are the highest-volume PMEGP lenders and typically sanction within 45 days if the district task force approval is clean. Canara Bank and Union Bank have shorter processing times of 30 to 45 days but tighter DPR scrutiny.

Regional Rural Banks (RRBs) and District Cooperative Central Banks are options for rural applicants with smaller project sizes. Turnaround at RRBs is typically similar to public sector banks. Cooperative bank turnaround is state-dependent.

Private sector banks like HDFC Bank, ICICI Bank, and Axis Bank participate in PMEGP but their sanction rate is lower and their processing is more scrutinised. For a first-time entrepreneur, a public sector bank branch with a dedicated MSME desk is typically the fastest and most reliable path.

## Timeline from application to disbursal

The 27-day KVIC-published target from application to disbursal is achievable only for pre-approved DPRs and pre-known applicants at bank branches with dedicated MSME desks. Realistic expectations for a first-time applicant are 90 to 120 days total.

Breakdown of realistic timeline: online application submission takes 1 day. District task force review takes 30 to 60 days. Bank sanction takes 30 to 60 days after task force approval. EDP training takes 5 to 10 days but usually happens in parallel with bank sanction. Loan disbursal takes 7 to 15 days after all documentation is complete.

If your application is stuck at the district task force stage for more than 60 days, escalate to the state KVIC directorate. If it is stuck at the bank sanction stage for more than 60 days, escalate to the bank's MSME zonal office and file a copy at pgportal.gov.in.

## PMEGP versus Mudra Loan versus Stand-Up India

Three central schemes serve overlapping but distinct micro-enterprise segments, and understanding the difference matters when choosing which to apply for.

| Feature | PMEGP | Mudra Loan | Stand-Up India |
|---|---|---|---|
| Purpose | New micro-enterprise setup | Working capital or expansion for existing micro units | New enterprise for SC/ST or woman entrepreneur |
| Project cost ceiling | Rs 50 lakh manufacturing, Rs 20 lakh service | Rs 20 lakh (Tarun Plus) | Rs 2 crore (new Feb 2025 Budget) |
| Subsidy | 15 to 35 percent margin money | None (only lower rate) | None (only guarantee cover) |
| Collateral | CGTMSE up to Rs 10 lakh | Collateral-free up to Rs 10 lakh | CGSSI 100 percent for loans up to Rs 25 lakh |
| Own contribution | 10 percent general, 5 percent special | None mandated | 15 percent |
| Target | Any new entrepreneur | Existing MSME or first-time small entrepreneur | Greenfield SC/ST/woman entrepreneur |
| Interest rate | Bank MSME rate 11 to 12 percent | Bank rate 8 to 11 percent (Shishu subsidised) | Base rate plus 3 percent max |

For a first-time entrepreneur setting up a new manufacturing unit above Rs 5 lakh, PMEGP is generally the better fit because of the margin money subsidy. For expansion capital or working capital of an existing unit, Mudra is the correct route. For SC/ST or woman entrepreneur setting up a new unit at Rs 1 crore plus, Stand-Up India is the correct route given its Rs 2 crore ceiling and 100 percent CGSSI cover.

## Popular sectors for PMEGP applications

Sector-wise breakdown of PMEGP-financed units through FY 2024-25 shows food processing dominates at approximately 25 percent of sanctions, followed by textiles and garments at 18 percent, wooden products and furniture at 12 percent, services (education, healthcare, IT, retail) at 20 percent, and other manufacturing categories at 25 percent. Regional variations are significant.

Food processing units in dairy, spices, snacks, packaged foods, and cold storage tend to have the highest survival rates past the 3-year hold period, which matters because margin money adjustment is contingent on continued operation. Textile and garment units have moderate survival rates and are sensitive to state-level electricity and land costs. Service-sector units in tuition, salon, small clinic, and computer training have high formation rates but sometimes struggle with 3-year continuity due to competition.

For applicants choosing a sector, food processing and rural manufacturing are the most reliable long-term choices given the FSSAI licensing cost, ready market demand, and the 3-year hold constraint. Service-sector units should have a clear customer acquisition plan documented in the DPR.

## State-wise PMEGP performance

State-wise sanctioned units and margin money disbursed through Q3 FY 2025-26, based on KVIC state directorate reports and PIB press releases.

| State | Cumulative units sanctioned (approx) | Notes |
|---|---|---|
| Uttar Pradesh | Largest state share | High rural application volume |
| Maharashtra | Strong urban and rural mix | State KVIB is active |
| Karnataka | High service-sector share | Bengaluru and Mysuru contribute significantly |
| Tamil Nadu | Balanced sector spread | High employment generation per unit |
| Rajasthan | Growing share | Handicrafts and textiles dominate |
| West Bengal | Rising share | Post 2024 KVIC push |
| Kerala | Higher than population share | Coir and cashew value chain participation |
| Gujarat | Moderate share | Higher share of larger project sizes |

Application processing pace varies by state KVIC directorate. Uttar Pradesh and Maharashtra have the highest sanctioned volume but longer district task force queues. Karnataka and Kerala have shorter queues due to smaller applicant volume relative to processing capacity.

## 15th FC cycle status: what changes after FY 2025-26

Current PMEGP allocation of Rs 13,554.42 crore was approved for the 15th Finance Commission cycle covering FY 2021-22 to 2025-26 with a target of 4 lakh new units and 30 lakh jobs. As of July 2026, the cycle is technically completed and any renewal or extension into an interim 15th FC extension or a fresh 16th FC allocation has not been publicly notified.

This affects application timing for the second half of FY 2026-27. Applications submitted in the current window are being processed against continued central funding at the FY 2025-26 baseline, but future disbursement caps are unclear pending a formal Cabinet decision. Applicants with strong DPRs and complete documentation should submit in Q2 FY 2026-27 rather than wait, since the current processing window remains open.

The Ministry of MSME and KVIC have not indicated any scheme discontinuation. Historical precedent from the 14th FC to 15th FC transition suggests a continuation approval within Q3 or Q4 of the transition year, typically with a modest allocation increase and continuity of the operational guidelines.

## Primary sources

- KVIC PMEGP e-portal: https://www.kviconline.gov.in
- PMEGP eligibility criteria: https://www.kviconline.gov.in/pmegpeportal/jsp/eligibility_criteria.jsp
- December 2023 revised guidelines: https://www.kviconline.gov.in/pmegpeportal/dashboard/notification/Revised_PMEGP_Scheme_Guidelines_07122023_compressed.pdf
- PIB PRID 2137047 (June 2025 disbursement): https://www.pib.gov.in/PressReleasePage.aspx?PRID=2137047
- PIB PRID 1829437 (15th FC approval): https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1829437
- MSME PMEGP page: https://www.msme.gov.in/1-prime-ministers-employment-generation-programme-pmegp
- MyScheme PMEGP page: https://www.myscheme.gov.in/schemes/pmegp
- Vikaspedia 2nd loan upgradation guide: https://schemes.vikaspedia.in/viewcontent/schemesall/schemes-for-entrepreneurs/2nd-loan-for-up-gradation-of-the-existing-pmegp-mudra-units

## Frequently asked questions
`;

const FAQS = [
  {
    question: "Which bank approves PMEGP loans fastest?",
    answer: "Canara Bank and Union Bank typically sanction within 30 to 45 days after district task force approval, followed by State Bank of India and Punjab National Bank at 45 days. Public sector bank branches with dedicated MSME desks are the most reliable path for first-time entrepreneurs. Total time from online application to loan disbursal is realistically 90 to 120 days for a well-prepared applicant, versus the 27-day target published by KVIC that applies only to pre-approved DPRs and known applicants.",
  },
  {
    question: "Can I apply for PMEGP without a business plan?",
    answer: "No. A Detailed Project Report (DPR) with market analysis, revenue projections, bill of materials, and financial model is required at the online application stage. Poor DPR quality is the top rejection reason at the district task force stage. Engage a professional DPR consultant or use the DPR templates on kviconline.gov.in as a starting point, and pre-review with your bank's MSME officer before submission.",
  },
  {
    question: "What is the interest rate on a PMEGP loan?",
    answer: "PMEGP does not fix an interest rate. Banks charge their applicable MSME lending rate, typically 11 to 12 percent per annum in July 2026. The margin money subsidy component earns interest that partly offsets the loan interest during the 3-year hold period. Effective cost of borrowing after margin money adjustment at year 3 is materially lower than the headline interest rate.",
  },
  {
    question: "Do I need collateral for a PMEGP loan?",
    answer: "For loans up to Rs 10 lakh, CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) provides automatic collateral-free guarantee cover. For loans above Rs 10 lakh, CGTMSE cover up to Rs 5 crore is available on a case-by-case basis subject to bank underwriting, at a fee of 1 to 2 percent per annum on the outstanding loan. Banks may still ask for personal guarantee for larger loans. Property collateral is typically required only for loans above Rs 25 lakh at the bank's discretion.",
  },
  {
    question: "How long from PMEGP application to loan disbursal?",
    answer: "Realistically 90 to 120 days for a first-time applicant. Breakdown: online application 1 day, district task force review 30 to 60 days, bank sanction 30 to 60 days after task force approval, EDP training 5 to 10 days in parallel, loan disbursal 7 to 15 days after all documentation. The 27-day KVIC target applies only to pre-approved DPRs at bank branches with dedicated MSME desks. Escalate to the state KVIC directorate if stuck at task force stage beyond 60 days.",
  },
  {
    question: "What happens if I default on a PMEGP loan?",
    answer: "Default before completing 3 years of successful unit operation means the margin money subsidy is not adjusted against the loan and is treated as a regular loan component. You are liable to repay the full principal plus interest. Default is reported to CIBIL and other credit bureaus, which affects future borrowing capacity. The bank can initiate recovery under the SARFAESI Act if the loan is secured, or through civil recovery for unsecured loans covered under CGTMSE.",
  },
  {
    question: "Is PMEGP available for existing businesses?",
    answer: "The first PMEGP loan is exclusively for setting up new micro-enterprises. Existing entrepreneurs cannot apply for a first PMEGP loan. Successful first-loan PMEGP beneficiaries who have completed 3 years of unit operation and fully repaid the first loan can apply for a second loan for upgradation, with project cost ceiling of Rs 1 crore for manufacturing and Rs 25 lakh for services.",
  },
  {
    question: "Can I get a second PMEGP loan after repaying the first?",
    answer: "Yes. Second loan for upgradation is available for successful first-loan PMEGP beneficiaries. Project cost ceiling is Rs 1 crore manufacturing and Rs 25 lakh services. Subsidy is 15 percent for general category and 20 percent for special category, capped at Rs 15 lakh manufacturing (Rs 20 lakh NER and hill areas) and Rs 3.75 lakh services (Rs 5 lakh NER and hill areas). Documents required are the first loan closure certificate, 3 years of audited financial statements, and a fresh DPR for the upgradation. Approval turnaround is 45 to 90 days.",
  },
];

await replaceScheme({
  slug: "pmegp-prime-ministers-employment-generation-2026",
  title: TITLE,
  description: DESCRIPTION,
  content: CONTENT,
  faqs: FAQS,
  minWords: 3000,
});
