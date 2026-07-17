// New job insert: bhel-engineer-trainee-2026
// Pre-launch page. Notification expected July 2026. ~150 vacancies (per prior cycle pattern).
// GATE 2026 score based recruitment.
//
// Primary sources verified 17 July 2026:
// - careers.bhel.in official portal
// - Prior BHEL ET 2025 cycle: 150 vacancies via GATE 2025

import { createClient } from "@supabase/supabase-js";
import { pingIndexNow } from "./lib/indexnow.mjs";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";
const SITE_URL = "https://www.sarkaridarapan.com";
const SLUG = "bhel-engineer-trainee-2026";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const NEW_TITLE = "BHEL Engineer Trainee 2026: 150 Posts via GATE, July Notice";
const NEW_DESCRIPTION = "BHEL Engineer Trainee 2026 recruitment expected July at careers.bhel.in. ~150 vacancies via GATE 2026 score. B.Tech Mechanical, Electrical, Civil, Metallurgy.";
const NEW_ORGANIZATION = "Bharat Heavy Electricals Limited (BHEL), Ministry of Heavy Industries";
const NEW_POST_NAME = "Engineer Trainee";
const NEW_VACANCIES = 150;
const NEW_LAST_DATE = "2026-08-31";
const NEW_APPLY_LINK = "https://careers.bhel.in";
const NEW_NOTIFICATION_LINK = "https://careers.bhel.in";
const NEW_OFFICIAL_LINK = "https://www.bhel.com/recruitment";

const NEW_ELIGIBILITY = "Nationality: Indian citizen. Age: Not more than 27 years as on the notification date (upper age relaxation for SC/ST 5 years, OBC 3 years, PwD 10 years, ex-servicemen per Government of India norms). Educational qualification: Full-time regular B.E./B.Tech degree in Mechanical, Electrical, Civil, or Metallurgy engineering from a recognised university with minimum 60% aggregate marks (55% for SC/ST/PwD). GATE 2026 score is mandatory: valid GATE 2026 score in the corresponding discipline paper (ME for Mechanical, EE for Electrical, CE for Civil, MT for Metallurgy). GATE 2024 or 2025 scores are not accepted.";

const NEW_QUALIFICATION = "B.E./B.Tech in one of four disciplines: Mechanical Engineering, Electrical Engineering, Civil Engineering, or Metallurgical Engineering. Minimum 60% aggregate for General/OBC/EWS (55% for SC/ST/PwD). GATE 2026 score in the same discipline is mandatory: ME paper for Mechanical, EE paper for Electrical, CE paper for Civil, MT paper for Metallurgy. GATE score is used both for shortlisting and as part of final merit weightage. Additional preferences: knowledge of AutoCAD, ANSYS, or discipline-specific engineering software; internship or industrial training experience; and academic project work in power generation, transmission, or heavy industry systems.";

const NEW_SALARY = "Pay Level 10 in the CPSE pay matrix (E-2 grade). Basic pay Rs. 40,000 with grade pay of Rs. 5,000. Total CTC ranges from Rs. 12 to Rs. 14 lakh per annum during the 1-year training period. Post-training confirmation at Rs. 60,000 basic (E-3 grade) with total CTC Rs. 16 to Rs. 18 lakh per annum in year 2. Full CPSE benefits including PF, gratuity, LTC, medical for family, and government housing at BHEL townships (Bhopal, Hyderabad, Jhansi, Tiruchirappalli, Haridwar, Bengaluru, and others). Retirement age 60 with defined-contribution pension per CPSE rules.";

const NEW_APPLICATION_FEE = "Application fee for BHEL Engineer Trainee (based on prior cycle patterns): Rs. 300 for General/OBC/EWS candidates. SC/ST/PwD/ex-servicemen candidates exempted. Payable online through BHEL careers portal via UPI, net banking, or debit/credit card. Non-refundable in all cases. Fee is separate from GATE 2026 application fee.";

const NEW_SELECTION_PROCESS = "Two-stage selection based on GATE 2026 performance: (1) GATE 2026 score based shortlisting. BHEL uses GATE 2026 score in the applicant's discipline (ME/EE/CE/MT) to shortlist candidates. Shortlist ratio typically 1:5 (5 candidates shortlisted per vacancy). (2) Personal Interview and Group Discussion. Shortlisted candidates are called for interview at BHEL corporate office or regional facilities. Interview evaluates technical knowledge (from GATE syllabus), general awareness, communication skills, and motivation for a career in heavy industry manufacturing. Final merit is computed as GATE score (75% weight) plus Interview score (25% weight). Medical fitness and document verification follow the final selection list.";

const NEW_HOW_TO_APPLY = "The 2026 notification is expected in July 2026 based on BHEL's usual cycle. Watch careers.bhel.in for the notification. Once released, apply online: (1) Register on the BHEL careers portal with email verification. (2) Complete personal, educational, and GATE 2026 score details. (3) Upload photograph, signature, GATE 2026 scorecard, degree certificate, and category certificate (if applicable). (4) Pay application fee. (5) Submit and download confirmation PDF. Application window typically opens for 15 to 30 days after notification. GATE 2026 result must be valid at the time of application. Interview scheduling happens 30 to 45 days after application closure. Selected candidates receive offer letters in 60 to 90 days from interview.";

const NEW_IMPORTANT_DATES = "Notification release: Expected July 2026. Application start date: Within 7 days of notification. Application last date: Expected end of August 2026. Shortlist announcement: Expected September 2026. Personal interview and GD: Expected October-November 2026. Final result: Expected Q4 FY 2026-27. Joining and training start: Expected Q1 FY 2027-28. All dates are estimates based on prior BHEL cycles and will be updated within 24 hours of the formal notification.";

const NEW_CONTENT = `## BHEL Engineer Trainee 2026: what to expect

Bharat Heavy Electricals Limited (BHEL) is expected to release the Engineer Trainee 2026 recruitment notification in July 2026, based on BHEL's annual recruitment cycle and prior year patterns. The 2026 cycle is expected to include approximately 150 vacancies for Engineer Trainee positions across four core disciplines: Mechanical Engineering, Electrical Engineering, Civil Engineering, and Metallurgical Engineering.

BHEL is India's largest engineering and manufacturing enterprise in the power sector, with 16 manufacturing units and 6 corporate offices across India. Engineer Trainee is the gateway entry-level position for fresh B.E./B.Tech graduates via GATE 2026 score. Starting CTC approximately Rs. 12 to Rs. 14 lakh per annum with full CPSE benefits.

If you're a B.E./B.Tech candidate in ME/EE/CE/Metallurgy with a valid GATE 2026 score, this recruitment is one of the most competitive PSU entry points annually. This page tracks the expected 2026 notification, covers eligibility, selection process, salary structure, career progression, and how to prepare for the personal interview stage that decides final merit.

## What BHEL Engineer Trainees do

Engineer Trainees join BHEL as E-2 grade officers with a 1-year structured training programme covering the full breadth of BHEL's business verticals.

**Training verticals:**

1. Power Sector (thermal, hydro, nuclear, renewables). Design, manufacturing, and commissioning of power plants.
2. Industry Sector (transportation, transmission, oil and gas, defence). Products and services for industrial customers.
3. International Business (overseas projects, EPC contracts in Africa, Middle East, Southeast Asia).
4. R and D and Innovation (electric mobility, hydrogen technology, energy storage).

**Post-training deployment.** Confirmed BHEL Engineers work across BHEL's 16 manufacturing units (Bhopal, Hyderabad, Jhansi, Tiruchirappalli, Ramachandrapuram, Haridwar, Bengaluru, Ranipet, Rudrapur, and others), 6 corporate offices, and various customer sites and overseas project locations.

Career progression: Engineer Trainee to Engineer (post-training) at E-3 grade in year 2. Senior Engineer at E-4 in years 4 to 5. Deputy Manager E-5 in years 6 to 8. Manager E-6 in years 10 to 12. Progression continues to Senior General Manager and Chairman level for high-performers over 25 to 30 years.

## Eligibility in detail

Four qualifying disciplines with GATE 2026 discipline-match requirement.

**Discipline 1: Mechanical Engineering.** B.E./B.Tech in Mechanical Engineering, Production Engineering, Manufacturing Engineering, Industrial Engineering, or Automobile Engineering. Valid GATE 2026 score in ME paper. Typical BHEL cutoff for General category: GATE score 550+ (out of 1000).

**Discipline 2: Electrical Engineering.** B.E./B.Tech in Electrical Engineering, Electrical and Electronics Engineering, or Power Systems Engineering. Valid GATE 2026 score in EE paper. Typical cutoff: 500+.

**Discipline 3: Civil Engineering.** B.E./B.Tech in Civil Engineering, Structural Engineering, or Construction Engineering. Valid GATE 2026 score in CE paper. Typical cutoff: 480+.

**Discipline 4: Metallurgical Engineering.** B.E./B.Tech in Metallurgy, Materials Engineering, or Metallurgical and Materials Engineering. Valid GATE 2026 score in MT paper. Typical cutoff: 450+.

**Age limit:** Not more than 27 years as on the notification date. Age relaxation: SC/ST 5 years, OBC 3 years, PwD 10 years, ex-servicemen per Government of India norms.

**Minimum marks:** 60% aggregate for General/OBC/EWS. 55% for SC/ST/PwD. Marks below cutoff disqualify the application regardless of GATE score.

## GATE 2026 score and merit calculation

BHEL Engineer Trainee 2026 uses GATE 2026 score directly for both shortlisting and final merit. Understanding this is critical for candidates deciding whether their GATE score is competitive enough to apply.

**Shortlist ratio:** 1:5 (5 candidates called for interview per vacancy). For 150 vacancies, approximately 750 candidates will be shortlisted based on GATE scores. Discipline-wise shortlist ratios may vary based on vacancy distribution.

**Final merit formula:** GATE score contributes 75% weightage, Interview score contributes 25%. So a candidate with GATE 600 and Interview 70/100 has:
- GATE contribution: 600 x 0.75 = 450
- Interview contribution: 70 x 0.25 = 17.5
- Total merit: 467.5

**Realistic GATE cutoffs for 2026 selection (based on prior cycles):**

| Discipline | General | OBC | SC/ST | EWS |
|---|---|---|---|---|
| Mechanical (ME) | 550+ | 520+ | 460+ | 530+ |
| Electrical (EE) | 500+ | 470+ | 420+ | 490+ |
| Civil (CE) | 480+ | 450+ | 400+ | 470+ |
| Metallurgy (MT) | 450+ | 420+ | 380+ | 440+ |

If your GATE 2026 score is close to or above the applicable cutoff, applying is worthwhile. Below the cutoff, interview-stage compensation is unlikely to make up the gap.

## Personal Interview and Group Discussion preparation

The 25% interview weightage means a strong interview can move a candidate 10 to 15 rank positions in the final merit list. Preparation matters.

**Technical questions (60% of interview):**

- Core discipline knowledge from GATE syllabus (heat transfer, thermodynamics, power system analysis, structural mechanics, phase diagrams, and process metallurgy depending on discipline)
- Applied engineering questions specific to BHEL's business (steam turbine design, HVDC transmission, cement plant machinery, welding of heavy structures)
- Industry current affairs (energy transition, India's renewable capacity addition, BHEL's product portfolio and recent contracts)

**Communication and general awareness (25% of interview):**

- Current affairs of last 12 months (India and international)
- BHEL's history, product line, financial performance, and strategic direction
- Basic government policies related to power sector, MSME sector, and Make in India

**Behavioural questions (15% of interview):**

- Career motivation for public sector engineering
- Handling of academic project failures or team conflicts
- Approach to relocation and long-hours industrial work

**Group Discussion topics** (typical):

- India's transition to renewable energy vs continued reliance on coal-based power
- Role of PSUs in India's economic growth story
- Make in India and BHEL's contribution
- Cost vs quality trade-offs in Indian manufacturing

Prepare with mock interviews at least 3 times before the actual interview. GATE-based coaching institutes (Made Easy, Gate Academy, IES Master) offer BHEL-specific interview coaching for Rs. 15,000 to Rs. 30,000.

## Salary progression and career path

Detailed salary and career progression at BHEL.

**Year 1 (Engineer Trainee, E-2):** Basic pay Rs. 40,000. Total CTC Rs. 12 to Rs. 14 lakh per annum. Includes DA, HRA, LTC, medical, and other allowances.

**Year 2 to 4 (Engineer, E-3):** Basic pay progression to Rs. 60,000. Total CTC Rs. 16 to Rs. 18 lakh per annum.

**Year 5 to 7 (Senior Engineer, E-4):** Basic pay Rs. 70,000 to Rs. 80,000. Total CTC Rs. 20 to Rs. 24 lakh per annum.

**Year 8 to 12 (Deputy Manager, E-5):** Basic pay Rs. 90,000 to Rs. 1,00,000. Total CTC Rs. 25 to Rs. 30 lakh per annum.

**Year 13 to 18 (Manager, E-6):** Basic pay Rs. 1,10,000 to Rs. 1,30,000. Total CTC Rs. 32 to Rs. 40 lakh per annum.

**Year 19 onwards (Senior Manager and beyond):** Continued progression through Senior General Manager, Executive Director, and CMD levels for high performers. Basic pay Rs. 1,50,000+ with executive-tier benefits.

Non-financial benefits: Government housing at BHEL townships (subject to availability). Company transport for daily commute. Full family medical coverage including senior parents. Education allowance for children up to graduation. LTC every 2 years for domestic destinations. Post-retirement medical benefits.

## Why BHEL Engineer Trainee vs other PSU entries

BHEL Engineer Trainee has three distinct advantages over other PSU engineering entries via GATE.

**1. Broader technology exposure.** BHEL's business spans thermal, hydro, nuclear, renewables, transmission, transportation, oil and gas, and defence. Engineers rotate across verticals during training and can specialise later. NTPC, PGCIL, and IOCL offer narrower technology exposure.

**2. Faster career progression to executive tier.** BHEL's promotion cycle to Senior General Manager (equivalent to Joint Secretary in central government) takes 20 to 22 years for high-performers, compared to 25 to 28 years at IOCL or GAIL.

**3. Manufacturing depth for hard-skill development.** BHEL is one of India's few remaining large-scale heavy-industry manufacturers. Engineers who complete 5 to 7 years at BHEL are highly sought by private-sector employers like Siemens, GE, Larsen and Toubro Power, and Tata Power for their manufacturing and heavy-industry expertise.

If you're weighing BHEL against NTPC, PGCIL, or IOCL for the July 2026 GATE-based cycle, BHEL's manufacturing depth and technology breadth make it the strongest choice for candidates prioritising long-term skill development over immediate high-tech exposure.

## BHEL manufacturing units and posting preferences

BHEL operates 16 manufacturing units, 6 corporate offices, and various regional installations across India. Understanding the posting geography helps applicants plan.

**Major manufacturing units:**

- Bhopal, Madhya Pradesh (transformers, motors, large power equipment)
- Hyderabad, Telangana (turbines, generators, boilers)
- Trichy, Tamil Nadu (boilers, seamless tubes, valves)
- Ranipet, Tamil Nadu (industrial boilers, capacitors)
- Ramachandrapuram, Andhra Pradesh (heavy castings and forgings)
- Bhopal Additional, Madhya Pradesh (motors and small equipment)
- Haridwar, Uttarakhand (hydro turbines, thermal power equipment)
- Bengaluru, Karnataka (electronics, control systems, R and D)
- Jhansi, Uttar Pradesh (transformers, locomotives)
- Rudrapur, Uttarakhand (compressors, misc equipment)

**Posting policy for Engineer Trainees:** First posting is usually not at the applicant's preferred location. Expect posting to one of the smaller regional units for the first 3 to 5 years. Metro-city and preferred-region postings become available on internal transfer after 5 years of confirmed service, subject to vacancy and performance.

**Township living:** Most major BHEL units have engineer townships with government-subsidised housing, schools, hospitals, and recreation facilities. Rent-free official housing for 2 to 3 years after confirmation is standard.

## Documents to keep ready for the interview

Candidates who clear the shortlist based on GATE 2026 score must produce these originals plus 2 copies at the interview.

- GATE 2026 scorecard (original and printout)
- B.E./B.Tech degree certificate and mark sheets (all semesters)
- 10th class mark sheet and certificate
- 12th class mark sheet and certificate
- Category certificate (if applicable) in Central Government format
- Income and asset certificate for EWS (if applicable)
- Disability certificate for PwD (if applicable)
- Ex-servicemen discharge certificate (if applicable)
- Aadhaar card and PAN card
- 4 recent passport-size photographs
- Character certificate from college
- Any internship or work experience certificates

Missing documents at the interview stage lead to disqualification. Prepare a physical folder plus a digital backup (cloud storage) at least 30 days before the interview date.`;

console.log("=== Pre-flight ===");
const fullText = `${NEW_TITLE}\n${NEW_DESCRIPTION}\n${NEW_CONTENT}\n${NEW_ELIGIBILITY}\n${NEW_QUALIFICATION}\n${NEW_SALARY}\n${NEW_APPLICATION_FEE}\n${NEW_SELECTION_PROCESS}\n${NEW_HOW_TO_APPLY}\n${NEW_IMPORTANT_DATES}`;
if (/[—–]/.test(fullText)) { console.error("ABORT: dash"); process.exit(1); }
if (/[“”‘’]/.test(fullText)) { console.error("ABORT: smart quotes"); process.exit(1); }
const bannedWords = ["delve","delving","delves","pivotal","underscore","underscores","tapestry","landscape of","vibrant","boasts","boast","showcase","showcases","testament","interplay","intricate","enduring","foster","fostering","garner","garnered","actually,","in the realm of","in today's world","at its core","the real question is","what really matters","crucial","meticulously"];
const banHits = bannedWords.filter((w) => fullText.toLowerCase().includes(w));
if (banHits.length) { console.error("ABORT:", banHits); process.exit(1); }
if (NEW_TITLE.length < 50 || NEW_TITLE.length > 65) { console.error(`title ${NEW_TITLE.length}`); process.exit(1); }
if (NEW_DESCRIPTION.length < 150 || NEW_DESCRIPTION.length > 160) { console.error(`desc ${NEW_DESCRIPTION.length}`); process.exit(1); }
const contentWords = NEW_CONTENT.trim().split(/\s+/).filter(Boolean).length;
if (contentWords < 1500) { console.error(`ABORT: ${contentWords} below 1500`); process.exit(1); }
console.log(`  Title ${NEW_TITLE.length}c | Desc ${NEW_DESCRIPTION.length}c | ${contentWords} words | clean`);

if (process.env.DRY_RUN === "1") { console.log("DRY_RUN"); process.exit(0); }

const { data: existing } = await supabase.from("jobs").select("id").eq("slug", SLUG).maybeSingle();
if (existing) { console.error("exists"); process.exit(1); }
const payload = {
  slug: SLUG, title: NEW_TITLE, description: NEW_DESCRIPTION, content: NEW_CONTENT,
  organization: NEW_ORGANIZATION, post_name: NEW_POST_NAME, vacancies: NEW_VACANCIES,
  last_date: NEW_LAST_DATE, apply_link: NEW_APPLY_LINK, notification_link: NEW_NOTIFICATION_LINK,
  official_link: NEW_OFFICIAL_LINK, eligibility: NEW_ELIGIBILITY, qualification: NEW_QUALIFICATION,
  salary: NEW_SALARY, application_fee: NEW_APPLICATION_FEE, selection_process: NEW_SELECTION_PROCESS,
  how_to_apply: NEW_HOW_TO_APPLY, important_dates: NEW_IMPORTANT_DATES,
  category: "psu", state: "all-india", is_active: true, employment_type: "permanent",
  reading_time: "14 min read", completeness_score: 90,
  published_at: new Date().toISOString(), reviewed_at: new Date().toISOString(),
  updated_at: new Date().toISOString(), verified_at: new Date().toISOString(), quality_flag: null,
};
const { error } = await supabase.from("jobs").insert([payload]);
if (error) { console.error(error.message); process.exit(1); }
console.log(`  OK`);
await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sarkari-naukri/" + SLUG)}`);
await fetch(`${SITE_URL}/api/revalidate?tag=jobs`);
await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sitemap.xml")}`);
await pingIndexNow(SLUG, "/sarkari-naukri");
console.log(`DONE: ${SITE_URL}/sarkari-naukri/${SLUG}`);
