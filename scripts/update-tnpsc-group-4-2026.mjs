import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);

const SLUG = "tnpsc-group-4-2026";

const NEW_TITLE = "TNPSC Group 4 2026: 6,244 Posts, Junior Assistant, Typist";
const NEW_DESCRIPTION = "TNPSC Group 4 (CCSE IV) 2026: 6,244 vacancies for Junior Assistant, Typist, Field Surveyor. Apply by March 31. Exam June 28. Syllabus, salary, prep guide.";

const NEW_CONTENT = `## TNPSC Group 4 2026: complete guide (CCSE IV)

TNPSC Group 4 2026, formally known as Combined Civil Services Examination IV (CCSE IV), has **6,244 vacancies** for Junior Assistant, Typist, Field Surveyor, Draftsman, Bill Collector, and other Group 4 posts across Tamil Nadu government departments. Applications open **March 1, 2026** and close **March 31, 2026**, with the written exam scheduled for **June 28, 2026**.

TNPSC Group 4 receives roughly 15 to 20 lakh applications every recruitment cycle against 5,000 to 7,000 vacancies, giving a selection ratio of about 1 in 300. That is more competitive than SSC MTS (roughly 1 in 200) and less competitive than TNPSC Group 2 (roughly 1 in 500), making Group 4 the sweet spot for 10+2 candidates in Tamil Nadu who want a state-secretariat posting without the aptitude bar of Group 2.

Unlike central government exams (SSC, Railway, IBPS) where English or Hindi is the medium, TNPSC Group 4 tests **General Tamil for 100 of 200 marks**. This is a decisive advantage for Tamil-medium school candidates and a serious barrier for CBSE / ICSE / English-medium candidates who never studied Tamil literature formally.

---

## What is TNPSC Group 4 (CCSE IV)?

TNPSC Group 4 is the Tamil Nadu Public Service Commission's largest annual recruitment cycle by volume. It fills clerical, junior administrative, and technical assistant posts in every state government department: Revenue, Land Records, Registration, Cooperation, Excise, Transport, Rural Development, Local Bodies, and Secretariat.

The exam is called Combined Civil Services Examination IV (CCSE IV) because it is one of four grouped exams in the TNPSC ladder:

- Group 1 (CCSE I): Deputy Collector, DSP, Assistant Commissioner. Bachelor's degree, aptitude-heavy
- Group 2 (CCSE II): Assistant Section Officer, Sub Registrar, Deputy Commercial Tax Officer. Bachelor's degree
- Group 3 (CCSE III): Junior Inspector, Cooperative Sub Registrar. 10+2 or higher
- Group 4 (CCSE IV): Junior Assistant, Typist, Field Surveyor. 10+2 minimum

Group 4 stands out because it is accessible (only 10+2 needed), has **no interview**, and the vacancy count is massive compared to any other TNPSC recruitment. Successful candidates enter Tamil Nadu Ministerial Service and can eventually be promoted to Senior Assistant, Superintendent, and Assistant Section Officer over 15 to 25 years of service.

---

## Posts offered and department distribution

| Post | Qualification | Typical department | Approximate vacancies (2026) |
|---|---|---|---|
| Junior Assistant (Non-Security) | 10+2 any stream | Secretariat, District Offices | ~4,500 |
| Junior Assistant (Security) | 10+2 any stream | Prisons Department | ~200 |
| Junior Assistant (Accounts) | 10+2 with Commerce preferred | Treasuries, Audit | ~400 |
| Typist (Tamil) | 10+2 + Tamil typewriting | Secretariat, Courts | ~500 |
| Typist (English) | 10+2 + English typewriting | Secretariat, Courts | ~150 |
| Steno-Typist Grade III | 10+2 + shorthand + typewriting | Secretariat | ~50 |
| Field Surveyor | 10+2 + relevant training | Revenue, Land Records | ~150 |
| Draftsman | Diploma in Civil / Mechanical | PWD, Highways | ~50 |
| Bill Collector | 10+2 | Local Bodies (Municipal, Panchayat) | ~150 |
| Village Administrative Officer | 10+2 | Revenue Department | ~50 |
| Forest Guard / Foreseter (linked) | 10+2 + physical fitness | Forest Department | Separate notification |

Junior Assistant (Non-Security) is by far the largest post and the default first preference for most candidates. Typist posts add a typewriting proficiency test after the main written exam. Steno-Typist adds a shorthand test.

---

## Vacancy history and cycle pattern

| Year | Total vacancies | Applications | Selection ratio |
|---|---|---|---|
| 2019 (CCSE IV) | 8,969 | ~18 lakh | 1 in 200 |
| 2022 (CCSE IV) | 7,301 | ~19 lakh | 1 in 260 |
| 2023 (CCSE IV) | 8,825 | ~21 lakh | 1 in 240 |
| 2024 (CCSE IV) | 5,215 | ~16 lakh | 1 in 310 |
| **2026 (CCSE IV)** | **6,244** | Data awaited | Expected 1 in 300 |

TNPSC does not run CCSE IV every year; there was no 2020 or 2021 notification (delayed by COVID). Since 2022, the cycle has been roughly biennial with a large batch each time. 2026 is a scheduled year.

---

## Eligibility

### Age limit (as on July 1, 2026)

| Category | Age range |
|---|---|
| General (Others) | 18 to 32 years |
| BC / MBC / DNC / BCM / SC(A) | 18 to 35 years |
| SC / ST | 18 to 42 years |
| PwBD | 18 to 42 years (with departmental fitness certification) |
| Ex-Servicemen | Standard + service length relaxation |
| Destitute Widows | 18 to 42 years |

Tamil Nadu domicile is required. Candidates from other states who claim Tamil Nadu domicile through parental residence must produce a Nativity Certificate issued by the Tamil Nadu Revenue Department.

### Educational qualification

Minimum qualification is **10+2 (Higher Secondary) pass** from Tamil Nadu State Board or any board recognised as equivalent (CBSE, ICSE, National Institute of Open Schooling). Junior Assistant (Accounts) has a preference for Commerce stream but does not exclude Arts or Science candidates.

For Typist posts: Government Technical Examination (GTE) certificate in typewriting is required. Higher Grade (30 wpm Tamil / 40 wpm English) is the standard; Lower Grade (20 wpm Tamil / 30 wpm English) is not sufficient for direct recruitment.

For Draftsman: 3-year Diploma in Civil Engineering, Mechanical Engineering, or Architecture from a recognised State Board of Technical Education.

### Tamil language proficiency

Every Group 4 candidate must clear General Tamil as part of the main written exam. There is no separate Tamil eligibility test at application stage, but the 100-mark Tamil paper effectively serves as the language gate. A candidate who scores below 40 in General Tamil is very unlikely to make the cut, regardless of General Studies and Aptitude scores.

---

## Important dates (2026)

| Event | Date |
|---|---|
| Notification released | February 2026 |
| Application opens | March 1, 2026 |
| Application closes | **March 31, 2026** |
| Correction window | April 1 to 4, 2026 |
| Admit card release | June 15, 2026 (approximately) |
| Written exam | **June 28, 2026** |
| Answer key release | July 5, 2026 (approximately) |
| Result declaration | September-October 2026 |
| Certificate verification and counselling | November-December 2026 |
| Joining date | January-March 2027 |

There is no Prelims and Mains split for Group 4. It is a single-day, single-paper exam of 200 marks over 3 hours.

---

## Application fee

| Category | Fee |
|---|---|
| General / OBC / EWS (Others) | Rs. 150 |
| SC / ST | Nil |
| PwBD | Nil |
| Women (all categories) | Nil |
| Destitute Widows | Nil |
| Ex-Servicemen (first two attempts) | Nil |

Fee is paid online during registration through UPI, net banking, or debit / credit card. TNPSC's One Time Registration (OTR) system charges a separate one-time fee of Rs. 150 which covers all TNPSC exams for 5 years, so first-time applicants effectively pay Rs. 300 up front but pay nothing for subsequent TNPSC exams during the OTR validity period.

---

## How to apply: step-by-step

1. **Register for TNPSC One Time Registration (OTR)** at [tnpscexams.in](https://www.tnpscexams.in) if not already registered. OTR is a one-time process valid for 5 years across all TNPSC recruitments.
2. **Log in to the OTR portal** using your registration number and password.
3. **Select the Group 4 / CCSE IV 2026 recruitment** from the active notifications list.
4. **Fill personal details, educational qualification, community, and post preference.** You can select preference order across all applicable posts (Junior Assistant, Typist, Field Surveyor, etc.). The system uses preference order for post allotment based on merit rank.
5. **Upload documents:** passport-size photo (JPEG, under 100 KB), signature (JPEG, under 50 KB), left thumb impression (JPEG, under 50 KB), community certificate (if claiming reservation), and 10+2 mark sheet.
6. **Pay Rs. 150 fee** (if applicable) via UPI, net banking, or debit / credit card. SC/ST/PwBD/Women/Destitute Widow candidates skip this step.
7. **Submit and download confirmation.** The system emails a confirmation to your registered email. Save a soft copy and print at least two hard copies.
8. **Download admit card** from tnpscexams.in approximately 10 to 15 days before the exam.
9. **Appear for the exam** with printed admit card and one government photo ID (Aadhaar, PAN, Voter ID, Driving Licence, or Passport).

---

## Exam pattern

**Written examination (single stage, objective)**

| Section | Marks | Question count | Difficulty |
|---|---|---|---|
| General Studies | 75 | 75 | Class 10 to 12 level |
| Aptitude and Mental Ability (AMCAT) | 25 | 25 | Class 10 arithmetic and reasoning |
| General Tamil (or General English for those exempted) | 100 | 100 | Higher Secondary Tamil literature and grammar |
| **Total** | **200** | **200** | **3 hours** |

**No negative marking.** No interview. Direct recruitment from written test merit list.

For candidates who studied outside Tamil Nadu and never had Tamil as a subject at 10+2 level, General English is available in place of General Tamil (subject to Nativity Certificate proving non-Tamil-medium schooling). Very few candidates choose this option because General English cutoffs run higher than General Tamil cutoffs at the 6,000+ vacancy scale.

**For Typist posts:** Additional typewriting proficiency test held after the main written exam:

| Language | Speed requirement | Duration |
|---|---|---|
| Tamil typewriting | 30 wpm | 10 minutes |
| English typewriting | 40 wpm | 10 minutes |

Typewriting test is qualifying only, not merit-generating. Candidates failing typewriting are removed from Typist post consideration but retained in the Junior Assistant merit pool if preference was listed.

---

## Detailed syllabus

### General Studies (75 marks)

Unit 1 covers General Science: Physics fundamentals, Chemistry basics, Biology at Class 10 level, Environment and Ecology, and Space technology basics. Unit 2 covers Current Events: Tamil Nadu state affairs, national affairs, international events, government schemes, and sports for the last 12 months.

Unit 3 covers History of India and Tamil Nadu, including the Sangam period, Cholas, Pandyas, Pallavas, Vijayanagar, Nayaks, British rule in Tamil Nadu, and the Indian freedom struggle with Tamil Nadu focus. Unit 4 covers Indian Polity: Constitution basics, Fundamental Rights, DPSP, Panchayati Raj, Union executive, and Judiciary. Unit 5 covers Indian Economy and Geography: Indian economy fundamentals, Tamil Nadu economy, physical geography of India, agriculture, industry, and transportation.

### Aptitude and Mental Ability (25 marks)

- Logical reasoning (series, analogy, coding-decoding, blood relations)
- Quantitative aptitude (percentage, ratio, average, time and work, profit and loss, simple interest)
- Data interpretation (bar charts, line graphs, tables)
- Number series and pattern recognition

### General Tamil (100 marks)

Ilakkanam (Grammar) covers Eluthu (letters), Sol (words), Porul (meaning), Yaappilakkanam (prosody), and Ani Ilakkanam (rhetoric). Ilakkiyam (Literature) covers Sangam literature (Ettuthogai, Pathupattu), medieval poetry (Kambaramayanam, Silappathikaram, Manimekalai), Bhakti literature, modern prose and poetry, and freedom struggle era Tamil writers.

Comprehension is tested through prose passages with 5 to 10 comprehension questions per passage. Contemporary Tamil covers Tamil in administration, official terminology, and newspaper Tamil.

Tamil is the biggest merit-determining section. A candidate scoring 75+ in Tamil enters the safe zone; below 60 in Tamil almost always means missing the cut.

---

## Salary and pay level

| Post | Pay Level | Basic pay | DA (currently 46%) | HRA (city A / B) | Approximate gross |
|---|---|---|---|---|---|
| Junior Assistant (Level 4) | 4 | Rs. 20,600 | Rs. 9,476 | Rs. 5,562 | Rs. 35,638 to Rs. 38,000 |
| Typist (Level 5) | 5 | Rs. 25,300 | Rs. 11,638 | Rs. 6,831 | Rs. 43,769 to Rs. 46,000 |
| Field Surveyor (Level 5) | 5 | Rs. 25,300 | Rs. 11,638 | Rs. 6,831 | Rs. 43,769 to Rs. 46,000 |
| Steno-Typist Gr III (Level 5) | 5 | Rs. 25,300 | Rs. 11,638 | Rs. 6,831 | Rs. 43,769 to Rs. 46,000 |
| Draftsman (Level 6) | 6 | Rs. 26,300 | Rs. 12,098 | Rs. 7,101 | Rs. 45,499 to Rs. 47,500 |

Deductions from gross to arrive at in-hand: NPS contribution (10% of basic + DA), Income Tax (as applicable), Professional Tax (Rs. 200 per month), and any voluntary deductions. In-hand for Junior Assistant typically Rs. 28,000 to Rs. 30,000 per month in the first year.

---

## Career progression in Tamil Nadu Ministerial Service

| Post | Pay level | Typical years to reach |
|---|---|---|
| Junior Assistant | Level 4 | Entry (Year 1) |
| Assistant | Level 5 | 4 to 7 years |
| Senior Assistant | Level 6 | 10 to 15 years |
| Superintendent | Level 7 | 15 to 20 years |
| Assistant Section Officer | Level 8 | 20 to 25 years |
| Section Officer | Level 10 | 25 to 30 years (rare, competitive) |

Promotion is based on seniority combined with departmental exams and confidential ratings. Group 4 entrants who clear Group 2 Departmental Test can accelerate progression significantly.

---

## Preparation strategy: 3 to 4 months

### General Tamil (100 marks): the merit-determining section

For Tamil-medium school candidates this is largely revision of 10+2 syllabus with focused grammar practice. For CBSE / ICSE / English-medium candidates it is a serious rebuild.

- Buy TNPSC Group 4 dedicated Tamil textbooks: Suvakkam Publications, Nithra Books, or Sri Ganga Publications guides
- Grammar drills daily (Eluthu, Sol, Porul rules are consistent across TNPSC exams and predictable)
- Sangam literature and Bhakti literature quick-reference tables (memorise poets, works, and one distinctive feature of each)
- 10 previous year Tamil papers solved in the final month

### General Studies (75 marks)

- History of Tamil Nadu is the highest weightage subject (roughly 15 to 20 marks)
- Current affairs from last 12 months (roughly 15 marks): Yojana, Kurukshetra, Manorama Yearbook, Vision IAS current affairs monthly
- Indian Polity: Laxmikanth Class 11 NCERT depth is sufficient
- Geography and Economy: NCERT Class 11-12, Tamil Nadu Economic Survey summary

### AMCAT (25 marks)

2 to 3 weeks of focused practice with R.S. Aggarwal or Arihant Fast Track. This section is a straight-scoring opportunity for anyone with Class 10 arithmetic comfort.

### For Typist aspirants

Start typewriting practice on Day 1 of preparation. 30 wpm Tamil or 40 wpm English is achievable with 60 minutes of daily practice over 3 months. Use free online typing tools (KeyBr, Typing Master) or enrol in a Tamil Nadu Government Technical Examination (GTE) coaching centre for structured drill.

### Weekly rhythm

- 5 days: General Tamil (2 hours), General Studies (2 hours), current affairs (30 minutes)
- 1 day: AMCAT full-length practice
- 1 day: Previous year paper under timed conditions + wrong-answer analysis

---

## TNPSC Group 4 vs TNPSC Group 2 vs SSC MTS

| Parameter | TNPSC Group 4 | TNPSC Group 2 | SSC MTS |
|---|---|---|---|
| Qualification | 10+2 | Bachelor's | 10th pass |
| Language of exam | Tamil / English | Tamil / English | English / Hindi + 13 regional |
| Total marks | 200 | 300 | 270 |
| Interview | No | Prelims + Mains + Interview (some posts) | No |
| Vacancies per cycle | 5,000 to 9,000 | 2,000 to 5,000 | 8,000 to 12,000 |
| Selection ratio | 1 in 300 | 1 in 500 | 1 in 200 |
| Starting basic pay | Rs. 20,600 | Rs. 35,400 | Rs. 18,000 |
| Posting state | Tamil Nadu only | Tamil Nadu only | Pan-India |
| Domicile requirement | Tamil Nadu | Tamil Nadu | None |
| Best fit for | 10+2 Tamil-medium candidates | Graduates targeting state administration | 10th pass, pan-India willing |

Group 4 offers the fastest state-secretariat entry for 10+2 Tamil Nadu candidates. Group 2 pays substantially more from Day 1 but requires a Bachelor's degree and clears at a lower selection ratio. SSC MTS is more competitive at the entry point but opens central government service anywhere in India.

---

## Common mistakes candidates make

1. **Under-preparing General Tamil.** Non-Tamil-medium candidates often assume "I speak Tamil at home so I can manage the paper." Sangam literature, Bhakti-era poets, and formal Ilakkanam rules are not conversational Tamil. Formal preparation is mandatory.
2. **Ignoring post preference order.** The application form uses your preference order to allot posts if you clear the merit cutoff. Not filling preferences (or filling arbitrarily) can result in a Junior Assistant posting in a district you did not want.
3. **Missing the OTR window.** One Time Registration is mandatory. Applicants who wait until March 30 to register OTR often miss the deadline because OTR verification can take 24 to 48 hours.
4. **Typewriting speed under-developed for Typist posts.** Candidates who list Typist as first preference but cannot clear 30 wpm Tamil / 40 wpm English are downgraded to Junior Assistant even if they cleared the written test in high rank.
5. **Ignoring current affairs from Tamil Nadu specifically.** TNPSC tests state-specific current affairs more heavily than national. Read Dinamalar, The Hindu Tamil Nadu edition, or state-focused GK apps.
6. **Not carrying original certificates for verification.** Post-result document verification requires all original certificates (10th, 12th, community, nativity, transfer, conduct). Missing certificate is grounds for candidate rejection at the verification stage.

---

## Frequently asked questions

**What is the total number of vacancies for TNPSC Group 4 2026?**
The 2026 recruitment cycle has 6,244 vacancies across Junior Assistant, Typist, Field Surveyor, Draftsman, Bill Collector, and other Group 4 posts across Tamil Nadu government departments. Junior Assistant (Non-Security) is the largest post at approximately 4,500 vacancies.

**When is the TNPSC Group 4 2026 exam date?**
The written examination is scheduled for June 28, 2026. Applications open on March 1, 2026 and close on March 31, 2026. Admit cards are released approximately 10 to 15 days before the exam. Results are expected in September to October 2026.

**What is the eligibility for TNPSC Group 4 2026?**
Minimum qualification is 10+2 (Higher Secondary) pass from any recognised board. Age is 18 to 32 years for General category (up to 35 for BC/MBC and 42 for SC/ST) as on July 1, 2026. Tamil Nadu domicile is required. Typist posts also need a Government Technical Examination (GTE) typewriting certificate.

**Is there an interview in TNPSC Group 4?**
No, TNPSC Group 4 has no interview. Selection is based entirely on the written examination merit list. This is one of the biggest attractions of Group 4 over Group 2, which has an interview stage for certain posts.

**What is the salary for TNPSC Group 4 Junior Assistant?**
Junior Assistant is Pay Level 4 with basic pay of Rs. 20,600. With DA (currently 46%), HRA (city category dependent), and other allowances, the gross monthly salary is approximately Rs. 35,000 to Rs. 38,000. In-hand after deductions is roughly Rs. 28,000 to Rs. 30,000 per month in the first year.

**Is Tamil language mandatory for TNPSC Group 4?**
Yes, General Tamil is the largest section at 100 out of 200 marks. Candidates who never studied Tamil as a subject at 10+2 can opt for General English in place of General Tamil (with Nativity Certificate proof of non-Tamil-medium schooling), but this option is used by very few candidates because General English cutoffs run higher than General Tamil cutoffs.

**How to apply for TNPSC Group 4 2026?**
Register through TNPSC One Time Registration (OTR) at tnpscexams.in if not already registered. Log in, select Group 4 / CCSE IV 2026, fill personal and educational details, list post preferences, upload photo and signature, pay Rs. 150 fee (SC/ST/PwBD/Women exempted), and submit. Print the confirmation for records.

**What is the selection process for TNPSC Group 4 2026?**
Single-stage written examination of 200 marks over 3 hours. Sections: General Studies (75 marks), Aptitude and Mental Ability (25 marks), and General Tamil (100 marks). No negative marking. No interview. Typist posts add a qualifying typewriting speed test at 30 wpm Tamil or 40 wpm English.

**Can I apply for TNPSC Group 4 from outside Tamil Nadu?**
Yes, but only if you can produce a Tamil Nadu Nativity Certificate (issued by the Tamil Nadu Revenue Department) establishing residence in Tamil Nadu. Candidates with parents domiciled in Tamil Nadu are eligible even if they studied outside the state. Nativity documentation is verified at the certificate verification stage after results.

**What is the difference between TNPSC Group 4 and Group 2?**
Group 4 requires only 10+2 qualification and has no interview; Group 2 requires a Bachelor's degree and has Prelims + Mains + Interview for certain posts. Group 4 posts start at Pay Level 4 (Rs. 20,600 basic); Group 2 posts start at Pay Level 8 (Rs. 35,400 basic). Group 4 has larger vacancy volume (5,000 to 9,000 per cycle) than Group 2 (2,000 to 5,000).

---

## Sources and related

- Official website: [tnpsc.gov.in](https://www.tnpsc.gov.in)
- Apply Online: [tnpscexams.in](https://www.tnpscexams.in)
- Official notification: [tnpsc.gov.in](https://www.tnpsc.gov.in) under Latest Notifications
- Tamil Nadu Government Gazette: [stationeryprinting.tn.gov.in](https://stationeryprinting.tn.gov.in)

Related pages:

- [TNPSC Group 2 2026: Tamil Nadu State Services Recruitment](https://www.sarkaridarapan.com/sarkari-naukri/tnpsc-group-2-2026)
- [SSC MTS 2026 recruitment guide](https://www.sarkaridarapan.com/sarkari-naukri/ssc-mts-2026)
- [Government Jobs vs Private Jobs in India 2026](https://www.sarkaridarapan.com/blog/government-jobs-vs-private-jobs-india-2026)
- [SSC CGL 2026 preparation guide](https://www.sarkaridarapan.com/blog/ssc-cgl-2026-preparation-guide)`;

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

const fatal = emCount || enCount || smartCount || bulletBoldLabels || inlineBoldLabels || forXOpener || vocabHits.length;
if (fatal) { console.error("VALIDATION FAILED"); process.exit(1); }
if (NEW_TITLE.length < 50 || NEW_TITLE.length > 65) { console.error(`Title ${NEW_TITLE.length}`); process.exit(1); }
if (NEW_DESCRIPTION.length < 150 || NEW_DESCRIPTION.length > 160) { console.error(`Desc ${NEW_DESCRIPTION.length}`); process.exit(1); }

const DRY = process.argv.includes("--dry");
if (DRY) { console.log("\nDRY"); process.exit(0); }

const { error } = await supabase.from("jobs").update({ title: NEW_TITLE, description: NEW_DESCRIPTION, content: NEW_CONTENT }).eq("slug", SLUG);
if (error) { console.error(error); process.exit(1); }
console.log("\nWROTE:", SLUG);
