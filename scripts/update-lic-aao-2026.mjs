import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);

const SLUG = "lic-aao-2026";

const NEW_TITLE = "LIC AAO 2026-27: Assistant Administrative Officer 841 Posts";
const NEW_DESCRIPTION = "LIC AAO 2026-27 recruitment: expected 800 plus AAO vacancies. Rs. 88,635 basic, Rs. 1.26 lakh gross. Prelims, Mains, Interview. Full syllabus and prep guide.";
const NEW_POST_NAME = "Assistant Administrative Officer (AAO), Generalist and Specialist streams";

const NEW_CONTENT = `## LIC AAO 2026-27: complete guide

If you want a high-paying, permanent central government job with one of the most iconic organisations in India, LIC AAO deserves to be near the top of your list. The Life Insurance Corporation of India recruits Assistant Administrative Officers every year or two, and the pay is genuinely outstanding: **Rs. 1.26 lakh per month gross** in metro cities at joining, with Rs. 1.07 lakh in-hand after deductions. For a graduate-level government job, that is hard to beat.

The last cycle (32nd Batch) had **841 vacancies** across Generalist, Specialist, and Assistant Engineer streams. Selection ratio was roughly 1 in 500 for Generalist and 1 in 150 to 1 in 200 for niche Specialist streams (CA, CS, Actuarial, Legal), which makes Specialist posts the highest-probability path if you have the qualification.

The **LIC AAO 2026-27 notification is expected in August to September 2026**, based on the pattern of the 32nd Batch which was announced on August 16, 2025. Watch [licindia.in](https://licindia.in) Careers page.

---

## What does an LIC AAO do day to day?

An AAO (Assistant Administrative Officer) is a Grade II officer at LIC. It is the entry-level officer position at India's largest insurance company, which is also a central public sector enterprise under the Ministry of Finance.

Depending on your specialisation and posting, you could be working in policy administration and underwriting, claims settlement, customer service at a branch office, accounts and finance, legal matters (for Legal specialists), or actuarial functions (for Actuarial specialists).

After successfully completing your one-year probation, you become an Administrative Officer (AO). From there, the promotion path moves upward to Assistant Divisional Manager, Divisional Manager, Senior Divisional Manager, Zonal Manager, Executive Director, and eventually Managing Director.

LIC's officer cadre is smaller than public sector banking (LIC has roughly 12,000 officers across all grades versus SBI's 90,000-plus), which means promotions are competitive but also more visible. Officers with Actuarial or CA qualifications typically reach senior management faster than pure Generalist entrants.

---

## Vacancy history and 2026-27 expected split

| Cycle | Year | Total | Generalist | Insurance Specialist | CA / CS / Legal / Actuarial | Assistant Engineer |
|---|---|---|---|---|---|---|
| 31st Batch | 2019 | 590 | 350 | 150 | 40 | 50 |
| 32nd Batch | 2023 | 300 | 150 | 100 | 30 | 20 |
| 32nd Batch (extended) | 2025 | **841** | 350 | 310 | 100 | 81 |
| **33rd Batch (expected)** | **2026-27** | **~800 to 900** | **~350** | **~300** | **~100** | **~80** |

LIC does not run AAO recruitment annually. Cycles are triggered when cadre vacancies build up to justify a fresh batch. The 2025 cycle was the largest in over a decade, which suggests the 2026-27 cycle may be closer to the 2019 volume (roughly 500 to 700) if it follows the historical pattern.

The **Generalist stream is where 40% of vacancies sit** and where most graduates without specialised qualifications compete. Insurance Specialist requires an Associate or Fellow membership of Insurance Institute of India (III) which many candidates do not have, making it a relatively narrow competition pool despite the 300+ vacancy count.

---

## Post streams and eligibility

### AAO Generalist

Bachelor's degree in any discipline from a recognised university. No minimum percentage. Age: 21 to 30 years.

This is the default entry route for most candidates. Arts, Science, Commerce, and Engineering candidates are all eligible without any additional professional qualification.

### AAO Insurance Specialist

Bachelor's degree plus Associate or Fellow of Insurance Institute of India (AIII or FIII). Age: 21 to 32 years.

The Insurance Specialist post has a mandatory 5-year posting at a mofussil (rural or semi-urban) branch after joining. This is a firm requirement, not a preference. Candidates who prefer metro postings should apply for Generalist instead.

### AAO Chartered Accountant (CA)

Bachelor's degree plus ICAI membership as a Chartered Accountant. Age: 21 to 32 years.

CA-qualified AAOs are typically posted at Divisional Offices, Zonal Offices, or Central Office in Mumbai, handling audit, investment accounts, tax matters, and financial reporting. Career progression to Divisional Manager (Finance) is faster than Generalist by 2 to 3 years.

### AAO Company Secretary (CS)

Bachelor's degree plus ICSI membership as a Company Secretary. Age: 21 to 32 years.

CS-qualified AAOs handle board compliance, secretarial matters, regulatory filings with IRDAI, and corporate governance. Postings are almost exclusively at Central Office and Zonal Offices.

### AAO Legal

LLB degree plus minimum 2 years of enrolment with the Bar Council of India. Age: 21 to 32 years.

Legal AAOs handle claim disputes, litigation, contract vetting, policy holder complaints, and IRDAI regulatory matters. Postings at Regional Offices and larger Divisional Offices.

### AAO Actuarial

Bachelor's degree plus specified papers cleared from the Institute of Actuaries of India (IAI). Minimum requirement is Core Technical and 2 Core Applications papers. Age: 21 to 32 years.

Actuarial is the highest-paid and fastest-promoting stream inside LIC. LIC's actuarial department in Mumbai handles product pricing, reserves valuation, mortality studies, and IRDAI regulatory submissions. Progression to Chief Actuary role in 15 to 20 years is standard for consistent performers.

### Assistant Engineer (Civil / Electrical)

B.Tech or B.E. in Civil or Electrical Engineering plus 3 years of relevant work experience. Age: 21 to 30 years.

Assistant Engineers handle LIC's building projects (LIC owns 300+ office buildings and 12,000+ staff quarters across India), maintenance, and infrastructure procurement. Postings at Regional Offices and property-heavy Divisional Offices.

### Age relaxation

Standard relaxation applies: SC / ST 5 years, OBC (Non-Creamy Layer) 3 years, PwBD (General) 10 years, PwBD (OBC) 13 years, PwBD (SC/ST) 15 years, and existing confirmed LIC employees get 5 additional years over their applicable category limit.

---

## Important dates (expected 2026-27 based on 2025 cycle)

| Event | Expected date |
|---|---|
| Notification release | August 2026 |
| Application opens | August 2026 |
| Last date to apply | September 2026 |
| Prelims admit card | Early October 2026 |
| Prelims exam | October 2026 |
| Prelims result | November 2026 |
| Mains admit card | November 2026 |
| Mains exam | November to December 2026 |
| Mains result | January 2027 |
| Interview | February to March 2027 |
| Final result | April 2027 |
| Pre-recruitment medical | May 2027 |
| Joining | June to July 2027 |

All dates are expected based on LIC's previous cycle (32nd Batch, 2025). Official dates are published only on licindia.in. Do not rely on third-party exam portals for confirmed dates.

---

## Application fee

Rs. 700 plus applicable GST for General, OBC, and EWS candidates. Nil for SC, ST, and PwBD candidates. Fee is paid online through the IBPS-managed portal via UPI, net banking, or debit / credit card. No offline mode is accepted.

---

## How to apply: step-by-step

1. **Watch [licindia.in](https://licindia.in) Careers page from August 2026.** LIC does not send notification alerts. The link goes live on the day of the notification release.
2. **Click the official recruitment link.** You will be redirected to the IBPS-managed application portal at [ibpsonline.ibps.in](https://ibpsonline.ibps.in). LIC does not run its own recruitment portal for AAO.
3. **Register with a valid email ID and mobile number.** Both are verified via OTP. Save the registration credentials because the same login is used for admit card download, result check, and interview call letter.
4. **Fill in personal, educational, and work details.** For Specialist posts, upload your professional qualification certificate (CA membership, ICSI membership, Bar Council enrolment, IAI papers cleared, or B.Tech mark sheet plus 3-year work experience letter).
5. **Upload photo and signature.** Photo: passport-size, JPEG, under 200 KB, white background. Signature: black ink on white paper, JPEG, under 50 KB. Signature is verified again during document verification at interview stage.
6. **Pay the fee online** via UPI, net banking, or debit / credit card. Fee is Rs. 700 plus GST for General / OBC / EWS. SC / ST / PwBD candidates skip this step.
7. **Download and save the fee payment receipt and application confirmation.** Keep a printed copy along with the application form.
8. **Download admit card** from ibpsonline.ibps.in approximately 10 days before Prelims. Same portal is used for Mains admit card and interview call letter.

Never apply through any third-party link or website. Only use the link provided on the official licindia.in Careers page.

---

## Selection process: 4 stages

### Stage 1: Preliminary Examination (qualifying only)

A 60-minute online test with 100 questions. This is purely a screening test. Prelims marks play **no role** in the final merit list. You only need to clear the sectional and overall cutoffs to reach Mains.

| Section | Questions | Marks | Time |
|---|---|---|---|
| Reasoning Ability | 35 | 35 | 20 minutes |
| Quantitative Aptitude | 35 | 35 | 20 minutes |
| English Language | 30 | 30 | 20 minutes |
| **Total** | **100** | **100** | **60 minutes** |

Negative marking is 0.25 marks per wrong answer. Sectional cutoffs typically fall between 8 to 12 marks out of 30 to 35, and overall cutoff falls between 55 to 65 out of 100 depending on category and cycle difficulty.

### Stage 2: Main Examination (the real merit test)

The Mains is what determines your rank. It has two components conducted on the same day.

**Objective Paper: 300 marks, 120 minutes**

| Section | Questions | Marks | Time |
|---|---|---|---|
| Reasoning and Numerical Ability | 30 | 90 | 40 minutes |
| General Knowledge and Current Affairs | 30 | 60 | 20 minutes |
| Insurance and Financial Market Awareness | 30 | 60 | 20 minutes |
| English Language with Comprehension | 30 | 90 | 40 minutes |
| **Total** | **120** | **300** | **120 minutes** |

Negative marking is 0.25 marks per wrong answer. Insurance and Financial Market Awareness is the section that separates strong candidates from average ones because most SSC or bank aspirants have never studied insurance formally.

**Descriptive Paper: 25 marks, 30 minutes**

Essay writing and letter writing in English. You need to score at least the qualifying marks (typically 8 to 10 out of 25 based on category) to be considered for the interview shortlist. This paper is evaluated separately from the objective paper.

### Stage 3: Personal Interview

Candidates who qualify Mains are called for a personal interview at LIC Zonal Offices. Interview panel typically has 3 to 5 LIC senior officers plus one external subject expert.

Final merit is calculated as: Mains objective (300) + Mains descriptive (25) + Interview (60) = 385 marks total. Prelims marks are not counted.

The interview covers your understanding of insurance, current affairs, basic finance, your qualification-relevant subject (CA for CA candidates, actuarial concepts for Actuarial candidates), and your suitability for LIC's culture. Communication in English is expected but not to a UPSC standard.

### Stage 4: Pre-recruitment medical examination

Before you get your appointment letter, LIC conducts a standard medical fitness examination at an empanelled hospital. This is mandatory and cannot be skipped. Vision, hearing, blood pressure, chest X-ray, and general fitness are checked. Colour blindness disqualifies candidates from certain Assistant Engineer posts but not from Generalist or Specialist streams.

---

## Salary: the biggest reason to target this exam

This is genuinely one of the best pay packages in the central government sector for a graduate-level exam.

| Pay component | Amount |
|---|---|
| Basic pay at joining | Rs. 88,635 per month |
| Pay scale | Rs. 88,635 to Rs. 1,69,025 |
| Dearness Allowance (currently ~46%) | Rs. 40,772 per month |
| House Rent Allowance (metro Tier A) | Rs. 8,864 per month (10% of basic) |
| City Compensatory Allowance | Rs. 900 per month |
| Transport Allowance | Rs. 3,600 per month |
| Special Allowance | Rs. 6,000 per month |
| Gross monthly (metro) | Rs. 1,26,000 to Rs. 1,32,000 |
| Deductions (PF, Insurance, Tax) | Rs. 18,000 to Rs. 25,000 |
| **Net in-hand (metro, after deductions)** | **Rs. 1,07,000 per month approximately** |

The gross figure includes Dearness Allowance, House Rent Allowance (varies by city tier: 10% for metro Tier A, 8% for Tier B, 6% for Tier C), City Compensatory Allowance, and transport allowance. Metro cities like Mumbai, Delhi, Chennai, Kolkata, Bengaluru, and Hyderabad get the highest HRA slab.

To put the salary in context: an IAS officer starts at Rs. 56,100 basic pay. An LIC AAO starts at Rs. 88,635 basic. RBI Grade B starts at Rs. 55,200 basic (though RBI has higher DA-linked components). SEBI Grade A starts at Rs. 44,500 basic. LIC AAO is the highest starting basic pay of any graduate-level central government exam.

**Additional benefits:**

Pension is a defined benefit scheme (not NPS) for LIC employees, subject to service length. Gratuity is paid on retirement or resignation after 5 years. Medical coverage extends to self, spouse, and dependent parents with cashless treatment at empanelled hospitals. Leave Travel Concession (LTC) covers family travel every 4 years to anywhere in India. Staff home loan is available at concessional interest rates (typically 3 to 5 percentage points below market). Group insurance scheme covers Rs. 20 lakh life insurance during service. Performance-linked incentives can add 5 to 15% to annual gross depending on branch or department performance.

---

## Bond and service commitment

LIC has a mandatory service bond that every selected candidate must sign before joining.

Minimum service period is 4 years from the date of joining (including probation). Penalty for leaving before 4 years is Rs. 5,00,000 (five lakh rupees) plus applicable GST. The penalty is recoverable from the candidate or, in their absence, their legal heirs.

This is a firm commitment. If you are simultaneously preparing for UPSC, CAT, or other exams, factor this in before accepting the LIC AAO offer. Many CA-qualified AAOs later face this issue when they clear UPSC in year 2 or 3 of service.

---

## Career progression inside LIC

| Grade | Level | Typical years to reach | Approx basic pay |
|---|---|---|---|
| Assistant Administrative Officer (AAO) | Grade II | Entry (Year 1) | Rs. 88,635 |
| Administrative Officer (AO) | Grade III | 4 to 6 years | Rs. 1,05,000 |
| Assistant Divisional Manager (ADM) | Grade IV | 8 to 12 years | Rs. 1,25,000 |
| Divisional Manager (DM) | Grade V | 15 to 20 years | Rs. 1,45,000 |
| Senior Divisional Manager (SDM) | Grade VI | 20 to 25 years | Rs. 1,65,000 |
| Zonal Manager (ZM) | Grade VII | 25 to 30 years | Rs. 1,95,000 |
| Executive Director | Above Board | 28 to 32 years (rare) | Rs. 2,25,000+ |

Promotion beyond Divisional Manager requires clearing departmental promotion exams plus vacancy availability. Actuarial and CA-qualified officers typically reach ADM by year 8 to 10 due to the specialised cadre policy.

---

## Preparation strategy: 4 to 6 months

The LIC AAO exam is a 2-stage speed-plus-accuracy test with an Insurance Awareness twist that most bank PO aspirants underprepare for. The right prep sequence is Prelims-first (60 days), then Mains-focused (60 to 90 days), then Interview prep after Mains result (30 days).

### Prelims prep (60 days)

Reasoning Ability: Puzzles and seating arrangements are the highest-weight topic (roughly 15 to 20 marks out of 35). Solve 3 to 5 puzzles daily from books like R.S. Aggarwal Verbal and Non-Verbal Reasoning or M.K. Pandey Analytical Reasoning.

Quantitative Aptitude: Number series, Data Interpretation, and Arithmetic word problems dominate (roughly 20 to 25 marks out of 35). Books: R.S. Aggarwal Quantitative Aptitude or Arun Sharma How to Prepare for Quantitative Aptitude for CAT.

English Language: Reading comprehension, cloze test, and para jumbles dominate (roughly 15 to 20 marks out of 30). Books: Objective English by Hari Mohan Prasad or Wren and Martin High School English Grammar.

### Mains-specific prep (60 to 90 days after Prelims)

The Insurance and Financial Market Awareness section is unique to LIC AAO. This is where most candidates lose 20 to 30 marks that they cannot afford to lose. Focus areas:

- IRDAI regulations and role of the regulator
- Types of life insurance: term, endowment, ULIP, money-back, whole life
- LIC's flagship plans: Jeevan Labh, Jeevan Anand, Jeevan Umang, New Endowment Plan
- Insurance terminology: premium, sum assured, surrender value, bonus, maturity value, claim, nominee
- Government insurance schemes: PMJJBY, PMSBY, Ayushman Bharat
- Basic financial market awareness: stock market basics, mutual funds, RBI role and functions, inflation, monetary policy tools, banking regulation

Recommended books: Life Insurance Corporation of India by Nishit K. Sinha, Insurance Awareness by Ranjeet Kumar, or IC-33 study material from Insurance Institute of India.

General Knowledge and Current Affairs (Mains): Last 6 months of national and international news, government policies, RBI and IRDAI circulars, sports, awards, and important appointments. Sources: Yojana magazine, Manorama Yearbook 2026, Vision IAS current affairs monthly, and daily newspaper habit (The Hindu or Indian Express).

Descriptive paper (Mains): Practice writing one essay of 250 words and one formal letter of 150 words per day for the last month. Topics rotate around current affairs, insurance policy debates, and financial inclusion themes.

### Interview prep (30 days after Mains result)

Read LIC's annual report (available at licindia.in), study the latest IRDAI annual report, be able to explain 5 LIC flagship plans by heart with premium and benefit structure, prepare for questions on your bachelor's degree subject, and rehearse the 60-second personal introduction covering education, work experience, and reason for choosing LIC.

---

## LIC AAO vs SBI PO vs UPSC EPFO vs SEBI Grade A

| Parameter | LIC AAO | SBI PO | UPSC EPFO | SEBI Grade A |
|---|---|---|---|---|
| Notification cycle | Every 2 to 3 years | Annual | Annual (irregular) | Annual |
| Vacancies per cycle | 500 to 900 | 2,000 to 2,500 | 500 to 600 | 100 to 150 |
| Prelims + Mains + Interview | Yes | Yes | Yes | Yes |
| Descriptive paper | Yes (Mains 25 marks) | Yes (Mains 50 marks) | No | Yes (Mains Paper 3) |
| Basic pay at joining | Rs. 88,635 | Rs. 48,480 | Rs. 47,600 | Rs. 44,500 |
| Gross monthly (metro) | Rs. 1,26,000 | Rs. 70,000 to 85,000 | Rs. 90,000 | Rs. 1,25,000 |
| Selection ratio | 1 in 500 Generalist | 1 in 500 | 1 in 950 | 1 in 2,000 |
| Service bond | 4 years, Rs. 5 lakh penalty | None | None | None |
| Age limit | 21 to 30 Generalist | 20 to 30 | 21 to 30 | 21 to 30 |
| Best for | Insurance and finance graduates wanting highest starting pay | Banking career growth | Labour law and pension specialisation | Capital markets and financial regulation |

LIC AAO has the highest basic pay but the smallest cadre (fewer promotion slots than SBI PO). UPSC EPFO has weaker starting pay but no bond and free access to CAPF and state police reservation trails. SEBI Grade A has the toughest selection ratio and requires 3 to 6 months of specialised capital markets prep on top of general banking-style Prelims and Mains.

---

## Common mistakes candidates make

1. **Applying under the wrong stream.** Insurance Specialist requires AIII or FIII membership, which many candidates confuse with "insurance awareness". If you do not have Insurance Institute of India certification, you are not eligible for Specialist. Apply Generalist.
2. **Underestimating the Insurance Awareness section in Mains.** Most bank PO aspirants scale to LIC AAO thinking their existing prep is sufficient. The Insurance section carries 60 marks and costs ranks; dedicated 4-week prep is mandatory.
3. **Ignoring the descriptive paper.** Failing the descriptive qualifying floor (typically 8 to 10 out of 25) drops you from the entire merit list regardless of objective marks. Practice at least 15 essays and 15 letters before Mains.
4. **Signing the 4-year bond without reading it.** The Rs. 5 lakh penalty is enforceable. Candidates who quit LIC in year 2 or 3 to join UPSC, CAT, or private sector have had the penalty recovered through salary certificates from the new employer.
5. **Not preparing for the mofussil posting condition for Insurance Specialists.** A 5-year mofussil posting is mandatory for Insurance Specialists. This is confirmed at appointment; candidates who accept and then request transfer within the 5-year window are denied.
6. **Assuming Prelims marks count.** Prelims is qualifying only. Some candidates over-invest in Prelims and neglect Mains prep, resulting in Prelims-cleared but Mains-poor performance.

---

## Frequently asked questions

**When will LIC AAO 2026-27 notification be released?**
The LIC AAO 2026-27 notification is expected in August to September 2026, based on the historical pattern of LIC's 32nd Batch which was released on August 16, 2025. The official notification is published only on licindia.in Careers page. Do not rely on third-party exam portals for confirmed dates. Applications typically remain open for 30 days from the notification date.

**What is the salary of LIC AAO in 2026?**
LIC AAO basic pay is Rs. 88,635 per month at joining. Gross monthly salary in metro cities including Dearness Allowance, House Rent Allowance, City Compensatory Allowance, and transport allowance is approximately Rs. 1,26,000. Net in-hand after PF, tax, and insurance deductions is approximately Rs. 1,07,000 per month. This is the highest starting basic pay among all graduate-level central government recruitment exams.

**What is the age limit for LIC AAO 2026?**
Age limit is 21 to 30 years for Generalist and Assistant Engineer posts, and 21 to 32 years for all Specialist posts (CA, CS, Legal, Actuarial, Insurance Specialist). Age is calculated as on the date of the official notification. Standard age relaxation applies: SC/ST 5 years, OBC (Non-Creamy Layer) 3 years, PwBD General 10 years.

**Is LIC AAO harder than SBI PO?**
LIC AAO is harder than SBI PO because of the additional Insurance and Financial Market Awareness section in Mains (60 marks), the descriptive paper qualifying floor, and the smaller vacancy pool leading to higher cutoffs. Prelims difficulty is roughly comparable to SBI PO Prelims. Selection ratio for LIC AAO Generalist is approximately 1 in 500 versus SBI PO's 1 in 500. Overall, expect 20 to 30% more prep time for LIC AAO than SBI PO.

**How many vacancies are expected in LIC AAO 2026-27?**
Approximately 800 to 900 total vacancies are expected across all streams, similar to the 2025 cycle (32nd Batch which had 841 vacancies). Expected split: 350 Generalist, 300 Insurance Specialist, 100 combined CA/CS/Legal/Actuarial, and 80 Assistant Engineer. Official numbers will be confirmed with the notification release.

**What is the bond for LIC AAO?**
LIC has a mandatory 4-year service bond starting from the date of joining (including probation). Penalty for leaving before 4 years is Rs. 5,00,000 plus applicable GST. The penalty is recoverable from the candidate or their legal heirs. Candidates simultaneously preparing for UPSC, CAT, or other exams should factor this before accepting the LIC AAO offer.

**Is the Insurance Awareness section really necessary?**
Yes. The Insurance and Financial Market Awareness section carries 60 out of 300 marks in the Mains objective paper. Candidates who score below 25 in this section rarely make the merit cutoff, regardless of how strong they are in Reasoning, Quantitative Aptitude, or English. Dedicated 4-week prep with IRDAI regulations, LIC flagship plans, and insurance terminology is mandatory.

**Can I apply for both LIC AAO Generalist and Specialist?**
No, you can apply for only one stream per cycle. If you have a CA, CS, or Legal qualification and meet the Specialist eligibility, applying for Specialist is strategically better because Specialist streams have selection ratios of 1 in 150 to 1 in 200 compared to Generalist's 1 in 500. However, Specialists face specific posting conditions (5-year mofussil for Insurance Specialist, Central Office postings for CS).

**What is the training period for LIC AAO?**
Selected candidates undergo a 4-week induction training programme at LIC's Management Development Centre in Mumbai, followed by 6 months of on-the-job training at the initially posted branch. Total probation is 1 year, extendable up to 2 years based on performance. Confirmation after successful probation makes you a permanent LIC employee.

**How is the final merit list prepared for LIC AAO?**
Final merit is calculated using Mains marks (325 total: 300 objective + 25 descriptive) plus Interview marks (60). Total merit ceiling is 385 marks. Prelims marks are qualifying only and do not count toward final rank. Candidates who fail either the descriptive qualifying floor or the interview cutoff are eliminated regardless of Mains objective performance.

---

## Sources and related

- Official website: [licindia.in](https://licindia.in) Careers page
- Application portal: [ibpsonline.ibps.in](https://ibpsonline.ibps.in)
- IRDAI (Insurance Regulatory and Development Authority): [irdai.gov.in](https://www.irdai.gov.in)
- Insurance Institute of India: [insuranceinstituteofindia.com](https://www.insuranceinstituteofindia.com)

Related pages:

- [SEBI Grade A 2026 recruitment guide](https://www.sarkaridarapan.com/sarkari-naukri/sebi-grade-a-2026)
- [IRDAI Assistant Manager 2026: 50 vacancies](https://www.sarkaridarapan.com/sarkari-naukri/irdai-assistant-manager-2026)
- [UPSC EPFO 2026: EO and AO recruitment](https://www.sarkaridarapan.com/sarkari-naukri/upsc-epfo-2026)
- [SSC CGL 2026 preparation guide](https://www.sarkaridarapan.com/blog/ssc-cgl-2026-syllabus-preparation-guide)
- [Government Jobs vs Private Jobs in India 2026](https://www.sarkaridarapan.com/blog/government-jobs-vs-private-jobs-india-2026)`;

// Validation
const emCount = (NEW_CONTENT.match(/—/g) || []).length;
const enCount = (NEW_CONTENT.match(/–/g) || []).length;
const smartCount = (NEW_CONTENT.match(/[‘’“”]/g) || []).length;
const bulletBoldLabels = (NEW_CONTENT.match(/^\s*-\s*\*\*[^*\n]+\*\*/gm) || []).length;
const inlineBoldLabels = (NEW_CONTENT.match(/\*\*[^*\n]+\*\*:/g) || []).length;
const forXOpener = (NEW_CONTENT.match(/^For \*\*[^*\n]+\*\*:/gm) || []).length;

const AI_VOCAB = ["actually", "additionally", "align with", "crucial", "delve", "enduring", "enhance", "fostering", "garner", "highlight", "interplay", "intricate", "landscape", "pivotal", "showcase", "tapestry", "testament", "underscore", "vibrant"];
const vocabHits = [];
for (const w of AI_VOCAB) {
  const re = new RegExp(`\\b${w}\\b`, "gi");
  const m = NEW_CONTENT.match(re) || [];
  if (m.length) vocabHits.push(`${w}: ${m.length}`);
}

console.log("=== VALIDATION ===");
console.log("Em dashes:", emCount, emCount === 0 ? "OK" : "FAIL");
console.log("En dashes:", enCount, enCount === 0 ? "OK" : "FAIL");
console.log("Smart quotes:", smartCount, smartCount === 0 ? "OK" : "FAIL");
console.log("Bulleted bold labels (-**X**):", bulletBoldLabels, bulletBoldLabels === 0 ? "OK" : "FAIL");
console.log("Inline bold labels (**X**:):", inlineBoldLabels, inlineBoldLabels === 0 ? "OK" : "FAIL");
console.log("For-**X**: openers:", forXOpener, forXOpener === 0 ? "OK" : "FAIL");
console.log("AI vocab hits:", vocabHits.length ? vocabHits : "none");
console.log("Word count:", NEW_CONTENT.split(/\s+/).length);
console.log("Title:", NEW_TITLE, `(${NEW_TITLE.length} chars)`);
console.log("Description:", NEW_DESCRIPTION, `(${NEW_DESCRIPTION.length} chars)`);
console.log("Post name:", NEW_POST_NAME);

const fatal = emCount || enCount || smartCount || bulletBoldLabels || inlineBoldLabels || forXOpener || vocabHits.length;
if (fatal) { console.error("VALIDATION FAILED"); process.exit(1); }
if (NEW_TITLE.length < 50 || NEW_TITLE.length > 65) { console.error(`Title ${NEW_TITLE.length}`); process.exit(1); }
if (NEW_DESCRIPTION.length < 150 || NEW_DESCRIPTION.length > 160) { console.error(`Desc ${NEW_DESCRIPTION.length}`); process.exit(1); }

const DRY = process.argv.includes("--dry");
if (DRY) { console.log("\nDRY"); process.exit(0); }

const { error } = await supabase.from("jobs").update({ title: NEW_TITLE, description: NEW_DESCRIPTION, content: NEW_CONTENT, post_name: NEW_POST_NAME }).eq("slug", SLUG);
if (error) { console.error(error); process.exit(1); }
console.log("\nWROTE:", SLUG);
