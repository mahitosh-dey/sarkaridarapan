import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);

const SLUG = "indian-air-force-agniveer-vayu-2026";

const NEW_TITLE = "Indian Air Force Agniveer Vayu 01/2026: 2,500 Vacancies";
const NEW_DESCRIPTION = "IAF Agniveer Vayu 01/2026 recruitment: 2,500 vacancies for 10+2 candidates. Written exam March 30 to 31, 2026. Salary, PFT, medical, syllabus, prep guide.";
const NEW_POST_NAME = "Agniveer Vayu, Science (PCM), Science (PCB / Non-PCM), and Other Streams";

const NEW_CONTENT = `## Indian Air Force Agniveer Vayu 2026: complete guide

If you want to serve in the Indian Air Force as an airman, Agniveer Vayu is how you get in. The 01/2026 batch has approximately **2,500 vacancies** for 10+2 qualified candidates across Science (PCM), Science (PCB / Non-PCM), and Other streams. Registration opened on **January 12, 2026**, and the written exam was held on **March 30 to 31, 2026** at CDAC test centres across India.

The Indian Air Force Agniveer Vayu selection ratio in 2024 was roughly 1 selected candidate per 250 to 300 applicants (about 3,500 selected against a reported 8 lakh-plus applications). That is far friendlier than Air Force Common Admission Test (AFCAT) at 1:1,500, but still competitive enough that only prepared candidates clear Phase 1 with a call for PFT and medical.

Unlike the Army Agniveer CEE and Navy SSR / MR entries, IAF's Agniveer Vayu requires you to score at least **50% in English separately**, not just in the overall aggregate. This is a firm cut-off that surprises many first-time candidates who cleared their 10+2 with an English score in the 40s.

---

## What is Agniveer Vayu?

Agniveer Vayu is the Indian Air Force's entry track under the Agnipath Scheme, launched in June 2022. You serve as an Airman (Agniveervayu) for **4 years** in the IAF. During service you work in ground support roles: electronics, electrical, mechanical, air traffic services, meteorological, radio and radar operations, accounts, education, ground training, and administrative branches, depending on your trade group and 10+2 stream.

After 4 years, **up to 25% of Agniveers are permanently enrolled** as regular IAF airmen through a merit-plus-performance evaluation during service. The remaining 75% exit with a **Seva Nidhi package of Rs. 10.04 lakh** (fully tax-free), an IAF service record, a skill certificate, and priority in Central Armed Police Forces (CRPF, BSF, CISF, ITBP, SSB) recruitment plus reservation quotas in many state government jobs and state police forces.

Agniveer Vayu is different from earlier Airmen Recruitment (X-Group, Y-Group) which ran until 2022 with 20-plus year service contracts. The current track is fixed 4-year service for 75% of Agniveers, with retention decisions made in the fourth year based on aptitude tests, physical fitness, disciplinary record, and trade proficiency.

---

## Trade groups and eligibility

| Trade group | 10+2 qualification | Marks floor | Typical postings |
|---|---|---|---|
| Science (PCM) | Physics, Maths, English | 50% aggregate, 50% in English | Electronics fitter, radar, mechanical, IT, air traffic control assist |
| Science (PCB / Non-PCM) | Biology, Chemistry, English | 50% aggregate, 50% in English | Medical assistant, laboratory, dental, medical stores |
| Other stream (Non-Science) | Any subjects with English | 50% aggregate, 50% in English | Accounts, education, ground training, administrative, catering, security |

Your trade group in the IAF is fixed by your 10+2 stream. PCM candidates are eligible for technical trades that involve aircraft ground support, radar and air traffic. PCB candidates go to medical support trades. Non-Science candidates handle administrative, accounts, education, and security-related ground roles.

Diploma holders in Engineering (3-year diploma after 10th) are eligible for Science (PCM) provided they have 50% aggregate and 50% in English at the diploma level. 2-year vocational course holders and correspondence 10+2 are also accepted if the board is recognised by COBSE or state education boards.

---

## Age limit and marital status

**17½ to 21 years** at the time of enrolment. For the 01/2026 batch, candidates must have been born between **July 3, 2004 and January 3, 2008** (both dates inclusive). Age is calculated based on the certified 10th class certificate date of birth, not any subsequent affidavit.

Only **unmarried** Indian citizens (male and female) are eligible. Agniveervayu cannot marry during the 4-year service period. Marriage during service is a ground for discharge without Seva Nidhi payment beyond the government contribution portion. Nepal candidates are eligible under separate bilateral provisions but must produce required certificates from the Ministry of Home Affairs, Government of India.

Physical standards for enrolment include a minimum height of 152.5 cm (with weight in proportion, as per medical charts) and a minimum chest measurement of 77 cm with 5 cm expansion. Regional relaxations apply for candidates from North East states, Lakshadweep, Ladakh, Sikkim, and Andaman and Nicobar.

---

## Vacancy history

| Batch | Vacancies notified | Applications received | Selection ratio |
|---|---|---|---|
| 01/2023 | ~3,000 | ~7.5 lakh | 1 in 250 |
| 02/2023 | ~2,000 | ~5 lakh | 1 in 250 |
| 01/2024 | ~3,500 | ~8 lakh | 1 in 230 |
| 02/2024 | ~2,000 | ~6 lakh | 1 in 300 |
| 01/2025 | ~2,500 | ~7 lakh | 1 in 280 |
| **01/2026** | **~2,500** | Data awaited | Expected 1 in 280 |

Vacancy count has narrowed since the peak 01/2024 batch as the IAF completes the initial ramp-up of Agnipath intake. Expect similar or slightly lower numbers for 02/2026, with distribution weighted toward Science (PCM) trades.

---

## Important dates (01/2026 batch)

| Event | Date |
|---|---|
| Notification released | January 12, 2026 |
| Registration opens | January 12, 2026 |
| Application closes | Approximately February 10, 2026 |
| Admit card release | Approximately March 20, 2026 |
| Written exam (Phase 1) | **March 30 to 31, 2026** |
| Phase 1 result | June 2026 |
| PFT and medical (Phase 2) | July to August 2026 |
| Adaptability Test 1 and 2 | September 2026 |
| Provisional Select List | October 2026 |
| Enrolment and Basic Training | December 2026 (tentative) |

Basic training is conducted at the Airmen Training School (ATS), Belagavi, Karnataka. Duration is approximately 24 weeks, after which Agniveers are posted to their respective trade-specific training establishments before deployment.

---

## Application fee

**Rs. 250** for all candidates including SC, ST, OBC, and EWS categories. Paid online during registration at agnipathvayu.cdac.in through UPI, net banking, or debit / credit card. No offline mode is accepted.

Female candidates in Central Armed Police Forces reserved category (as declared during application) pay the same Rs. 250 fee. There is no fee waiver for reserved categories, which is a departure from most SSC and Railway recruitments.

---

## How to apply: step-by-step

1. **Visit the official portal** at [agnipathvayu.cdac.in](https://agnipathvayu.cdac.in). This is the only authorised registration platform. Third-party sites listing "IAF Agniveer form" are unofficial.
2. **Register with valid email ID and mobile number.** Both are verified via OTP. Use an email you will monitor for the next 12 months since all communications flow through it.
3. **Complete the online application form.** Select trade group (Science PCM, Science PCB / Non-PCM, or Non-Science), enter educational details, and choose exam centre from the drop-down list.
4. **Upload documents:** recent passport-size photo (JPEG, 10 to 50 KB, on white background), signature (JPEG, 5 to 20 KB), left thumb impression (JPEG, 5 to 20 KB), 10th and 12th mark sheets (PDF, under 500 KB each).
5. **Pay Rs. 250 fee** through the integrated payment gateway. Fee is non-refundable regardless of application outcome or subsequent withdrawal.
6. **Submit and download registration slip.** Save a soft copy and print at least two hard copies for reference. The registration number is required for admit card download.
7. **Download admit card** from agnipathvayu.cdac.in approximately 10 days before the exam. Carry a printed admit card and one government photo ID (Aadhaar, PAN, Voter ID, Driving Licence, or Passport) to the exam centre.

---

## Selection process: 4 stages

### Stage 1: online written test (Phase 1)

Held at CDAC-authorised test centres on March 30 to 31, 2026. Language options: English, Hindi, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Tamil, and Telugu.

**Science (PCM) Group paper**

| Section | Questions | Marks | Time weight |
|---|---|---|---|
| English | 20 | 20 | 12 minutes |
| Physics | 25 | 25 | 16 minutes |
| Maths | 25 | 25 | 17 minutes |
| **Total** | **70** | **70** | **45 minutes** |

**Science (Other) / Non-Science Group paper**

| Section | Questions | Marks | Time weight |
|---|---|---|---|
| English | 20 | 20 | 12 minutes |
| Reasoning and Military Aptitude | 30 | 30 | 18 minutes |
| General Awareness | 20 | 20 | 15 minutes |
| **Total** | **70** | **70** | **45 minutes** |

Negative marking is **0.25 marks per wrong answer** in both papers. Sectional pass marks differ by group but candidates typically need around 25 out of 70 with a minimum of 10 out of 20 in English to clear.

Common streams (candidates applying to both PCM and Non-Science) attempt a combined 85-question paper of 60-minute duration.

### Stage 2: physical fitness test (PFT)

At Air Force Selection Centres (Delhi, Bengaluru, Chennai, Kolkata, Mumbai, and Guwahati).

| Test | Male standard | Female standard |
|---|---|---|
| 1.6 km run | Under 6 minutes 30 seconds | Under 8 minutes |
| Push-ups | 10 | Not applicable |
| Sit-ups | 10 | 10 |
| Squats | 20 | 15 |

Candidates failing any single component of PFT are disqualified. There is no second attempt in the same recruitment cycle.

### Stage 3: medical examination

At Air Force Medical Examination Centres. Vision must be 6/6 in each eye without correction; distant vision correctable to 6/6 with spectacles is disqualifying for many technical trades. Hearing is checked via whisper test at 6 metres in each ear. Chest measurement must be at least 77 cm with 5 cm expansion, weight proportional to height as per IAF medical charts, and Body Mass Index between 18.5 and 25.

Disqualifying conditions include colour blindness (for technical trades), history of chronic disease, night blindness, deviated nasal septum requiring surgery, and skin diseases. A defective vision certificate from a non-IAF centre is not accepted.

### Stage 4: adaptability test and enrolment

**Adaptability Test 1:** Objective test in English covering current affairs, general knowledge, and reasoning. Duration 30 minutes.

**Adaptability Test 2:** Situational reasoning test to assess ability to work in a group and follow orders. Duration 20 minutes.

Both are qualifying tests, not merit-generating. Candidates failing either are dropped from the merit list even if their Phase 1 rank was high.

Final merit is prepared based on Phase 1 written test marks (main scoring criterion) with PFT, medical, and adaptability as qualifying gates. Provisional Select List is published at agnipathvayu.cdac.in.

---

## Salary and Seva Nidhi

| Year | Monthly package | In-hand | Seva Nidhi contribution (employee 30%) |
|---|---|---|---|
| Year 1 | Rs. 30,000 | Rs. 21,000 | Rs. 9,000 |
| Year 2 | Rs. 33,000 | Rs. 23,100 | Rs. 9,900 |
| Year 3 | Rs. 36,500 | Rs. 25,550 | Rs. 10,950 |
| Year 4 | Rs. 40,000 | Rs. 28,000 | Rs. 12,000 |

**Seva Nidhi payout at exit: Rs. 10.04 lakh** (fully tax-free). Employee contribution across 4 years totals approximately Rs. 5.02 lakh; the government matches this rupee-for-rupee plus interest, resulting in the final Rs. 10.04 lakh number.

Additional in-service benefits:

- Risk and Hardship Allowance (varies by posting: Rs. 6,000 to Rs. 17,000 per month)
- Dress Allowance: Rs. 10,000 per year
- Travel Allowance for leave and posting moves
- Non-contributory life insurance cover of Rs. 48 lakh during the 4-year service
- Free medical care during service (for self, not dependents)
- IAF accommodation during training and posting (barracks; family accommodation is not provided for Agniveers)

Agniveers do not qualify for gratuity, pension, or DA-linked salary revisions applicable to regular airmen who joined before Agnipath.

---

## Career progression: in-service and post-4-year

**During 4 years of service:** Agniveervayu holds the rank of Agniveer (equivalent in status to a junior airman). No time-scale promotion. All are treated as one rank throughout the 4-year term.

**Post-exit path for 75%:**

- Central Armed Police Forces (CRPF, BSF, CISF, ITBP, SSB) reservation of 10% in constable / Assistant Sub-Inspector recruitment
- State police reservation (Uttar Pradesh, Haryana, Madhya Pradesh, Uttarakhand have announced 10-20% quotas)
- Age relaxation of 3 to 5 years for future government recruitment applications
- Skill certificate recognised across public sector undertakings for lateral entry
- Seva Nidhi corpus can seed a small business or fund further education

**Retention path for 25%:** Agniveers selected for permanent enrolment continue as regular IAF Airmen with all associated benefits (pension, DA, promotion cycle up to Master Warrant Officer, and post-retirement CGHS coverage). Selection is based on the 4-year performance evaluation composite: written aptitude tests during service (30%), PT performance (20%), trade proficiency (30%), and superior officer's Annual Confidential Report (20%).

---

## Preparation strategy: 3 to 6 months

The Agniveer Vayu written test is a speed-plus-accuracy paper, not a depth test. 70 questions in 45 minutes leaves under 40 seconds per question. Preparation focus should shift from concept coverage to timed practice by the last 4 weeks.

**Months 1 and 2 (concept and syllabus):**

- Physics: NCERT Class 11 and 12 (Mechanics, Optics, Modern Physics, Current Electricity are highest weight)
- Maths: NCERT Class 11 and 12 (Trigonometry, Coordinate Geometry, Probability, Calculus basics)
- English: Vocabulary building (Word Power Made Easy, Norman Lewis), grammar (Wren and Martin key chapters), reading comprehension practice
- Reasoning: R.S. Aggarwal Verbal and Non-Verbal Reasoning (Non-Science candidates)
- General Awareness: Lucent's General Knowledge, current affairs for last 6 months

**Month 3 (practice and speed):**

- Solve 3 previous year papers per week under timed conditions
- Focus on wrong-answer analysis; track weakest section
- Mock tests: aim for 55 to 60 out of 70 in mocks by end of month 3

**Month 4 (revision and PFT prep):**

- Physical prep: start 1.6 km run 3 times a week, target under 6:30
- Push-ups and sit-ups: 3 sets of 15 daily
- Revise vocabulary and formula sheets

Recommended books:

- Physics and Maths: NCERT Class 11-12 (core), Arihant's Study Package for Agniveer Vayu (targeted)
- English: Objective English by Hari Mohan Prasad
- Reasoning: R.S. Aggarwal
- General Awareness: Lucent GK, Manorama Yearbook 2026
- Previous papers: Kiran's Agniveer Vayu Solved Papers (last 5 years)

---

## Agniveer Vayu vs Army Agniveer CEE vs Navy SSR

| Parameter | IAF Agniveer Vayu | Army Agniveer CEE | Navy SSR |
|---|---|---|---|
| Notification | January and July annually | March and September | March and October |
| Vacancies per batch | ~2,500 | ~40,000 | ~2,500 |
| Written exam | 45 minutes, 70 questions | 60 minutes, 50 questions | 60 minutes, 100 questions |
| English cut-off | 50% separately | Combined aggregate | Combined aggregate |
| PFT run standard | 1.6 km under 6:30 | 1.6 km under 5:30 | 1.6 km under 7:00 |
| Selection ratio | 1 in 250 | 1 in 300 (General Duty) | 1 in 400 |
| Base monthly Year 1 | Rs. 30,000 | Rs. 30,000 | Rs. 30,000 |
| Seva Nidhi at exit | Rs. 10.04 lakh | Rs. 11.71 lakh | Rs. 10.04 lakh |
| Training location | Belagavi, Karnataka | Regimental centres across India | INS Chilka, Odisha |
| Marital during service | Not permitted | Not permitted | Not permitted |

The Army CEE has larger vacancy volume but tougher PFT (1.6 km in 5:30 vs 6:30). Navy SSR requires the toughest written test but has the lowest PFT bar. IAF Agniveer Vayu is in the middle on both dimensions but has the strictest English cut-off.

---

## Common mistakes candidates make

1. **Missing the 50% English cut-off.** Many candidates focus on aggregate 50% but miss that English marks separately must be 50%. If your 12th English score was 39 out of 100, you are ineligible even if your aggregate is 85%.
2. **Applying under wrong trade group.** Diploma holders sometimes apply under Non-Science thinking their diploma is not "Science" for the exam. Diploma in Engineering after 10th is eligible under Science (PCM). Confirm with the notification's Annexure I.
3. **Wrong document upload.** Photos with border, dark backgrounds, or half-body cropping get rejected. White background, front-facing, head-and-shoulders only.
4. **Marrying during service.** Some Agniveers marry secretly during 4 years. If discovered, discharge follows without full Seva Nidhi.
5. **Ignoring PFT prep until Phase 1 result.** Phase 1 result is in June; PFT is in July. Six weeks is not enough time to build 1.6 km under 6:30 from a sedentary base. Start PFT training the day you register.
6. **Colour blindness not tested before application.** Technical trades require normal colour vision. Test at a private centre before applying if there is family history of colour blindness.

---

## Frequently asked questions

**What is the total number of vacancies for Indian Air Force Agniveer Vayu 01/2026?**
The 01/2026 batch has approximately 2,500 vacancies across Science (PCM), Science (PCB / Non-PCM), and Other Stream (Non-Science) trade groups. Actual distribution is announced with the Provisional Select List after Phase 2. Historically 60% of vacancies go to Science (PCM), 15% to Science (Other), and 25% to Non-Science.

**When was the Indian Air Force Agniveer Vayu 01/2026 written exam?**
The Phase 1 online written exam was conducted on March 30 and 31, 2026 at CDAC-authorised test centres across India. Phase 1 results are expected in June 2026, followed by PFT and medical in July-August 2026.

**What is the minimum English marks requirement for IAF Agniveer Vayu?**
50% in English separately in the 10+2 mark sheet, in addition to 50% aggregate across all subjects. This is stricter than Army Agniveer CEE and Navy SSR, both of which require only combined aggregate. English marks must be from the qualifying 10+2 board result, not any subsequent improvement exam.

**Can females apply for Indian Air Force Agniveer Vayu 2026?**
Yes, unmarried Indian female citizens between 17.5 and 21 years are eligible for Agniveer Vayu across all trade groups. Female Agniveers receive the same Rs. 30,000 to Rs. 40,000 monthly package as males, with the same Rs. 10.04 lakh Seva Nidhi at exit. Female PFT run standard is 1.6 km under 8 minutes vs 6:30 for males; push-ups are not tested for females.

**What is the salary and Seva Nidhi for Indian Air Force Agniveer Vayu?**
Monthly package starts at Rs. 30,000 in Year 1 (Rs. 21,000 in-hand, Rs. 9,000 to Seva Nidhi) and rises to Rs. 40,000 in Year 4. At end of 4 years, Agniveers receive a Rs. 10.04 lakh Seva Nidhi payout (fully tax-free). Risk and Hardship Allowance of Rs. 6,000 to Rs. 17,000 per month is paid based on posting location.

**Are Indian Air Force Agniveers eligible for CAPF and state police recruitment?**
Yes, exited Agniveers get 10% reservation in Central Armed Police Forces (CRPF, BSF, CISF, ITBP, SSB) constable and Assistant Sub-Inspector recruitment. Uttar Pradesh, Haryana, Madhya Pradesh, and Uttarakhand have announced 10 to 20% quotas in state police recruitment for Agniveer alumni. Age relaxation of 3 to 5 years is standard across future government job applications.

**What is the difference between Airmen and Agniveer Vayu?**
Airmen was the pre-Agnipath recruitment track (X-Group and Y-Group) with a 20-plus year service contract, pension, and full military benefits. Agniveer Vayu is the current entry with 4-year service, of which 25% are retained as regular Airmen after performance evaluation. The remaining 75% exit with Seva Nidhi corpus and CAPF reservation but no pension.

**What is the training location for Indian Air Force Agniveer Vayu?**
Basic training is conducted at the Airmen Training School (ATS), Belagavi, Karnataka. Duration is approximately 24 weeks. After basic training, Agniveers move to trade-specific training at technical training establishments (Bengaluru, Jalahalli, and Tambaram for technical trades; Belagavi for administrative trades) before final posting.

**Can I apply for both Army Agniveer and IAF Agniveer Vayu in the same year?**
Yes, applications to Army Agniveer CEE and IAF Agniveer Vayu are independent and can run in parallel. If selected in both, you must accept one and forfeit the other before enrolment. Many candidates apply to Army CEE (higher vacancy) as backup and Agniveer Vayu (better English fit for arts students) as first preference.

**What are the physical standards for Indian Air Force Agniveer Vayu?**
Minimum height 152.5 cm (relaxation for North East, Ladakh, Sikkim, Andaman candidates). Weight proportional to height as per IAF medical charts. Chest minimum 77 cm with 5 cm expansion. Vision 6/6 in each eye without correction. Whisper hearing at 6 metres. No colour blindness for technical trades. Body Mass Index between 18.5 and 25.

---

## Sources and related

- Official portal: [agnipathvayu.cdac.in](https://agnipathvayu.cdac.in)
- Official notification: [AGNIVEER_VAYU_01-2026.pdf](https://agnipathvayu.cdac.in/AV/img/upcoming/AGNIVEER_VAYU_01-2026.pdf)
- Pay and Perks details: agnipathvayu.cdac.in > Pay & Perks
- Ministry of Defence Agnipath Scheme: [mod.gov.in](https://www.mod.gov.in)

Related pages:

- [Agniveer Army CEE Result 2026: how to check](https://www.sarkaridarapan.com/blog/agniveer-army-cee-result-2026-how-to-check)
- [SSC CGL 2026 preparation guide](https://www.sarkaridarapan.com/blog/ssc-cgl-2026-syllabus-preparation-guide)
- [Government Jobs vs Private Jobs in India 2026](https://www.sarkaridarapan.com/blog/government-jobs-vs-private-jobs-india-2026)
- [IB ACIO 2026: intelligence bureau recruitment guide](https://www.sarkaridarapan.com/sarkari-naukri/ib-acio-2026)`;

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
console.log("Inline bold labels (**X**:):", inlineBoldLabels, inlineBoldLabels === 0 ? "OK" : "check context");
console.log("For-**X**: openers:", forXOpener, forXOpener === 0 ? "OK" : "FAIL");
console.log("AI vocab hits:", vocabHits.length ? vocabHits : "none");
console.log("Word count:", NEW_CONTENT.split(/\s+/).length);
console.log("Title:", NEW_TITLE, `(${NEW_TITLE.length} chars)`);
console.log("Description:", NEW_DESCRIPTION, `(${NEW_DESCRIPTION.length} chars)`);
console.log("Post name:", NEW_POST_NAME);

const fatalIssues = emCount || enCount || smartCount || bulletBoldLabels || forXOpener || vocabHits.length;
if (fatalIssues) { console.error("VALIDATION FAILED - not writing"); process.exit(1); }
if (NEW_TITLE.length < 50 || NEW_TITLE.length > 65) { console.error(`Title length ${NEW_TITLE.length} out of 50-65`); process.exit(1); }
if (NEW_DESCRIPTION.length < 150 || NEW_DESCRIPTION.length > 160) { console.error(`Desc length ${NEW_DESCRIPTION.length} out of 150-160`); process.exit(1); }

const DRY = process.argv.includes("--dry");
if (DRY) { console.log("\nDRY - not writing"); process.exit(0); }

const { error } = await supabase.from("jobs")
  .update({ title: NEW_TITLE, description: NEW_DESCRIPTION, content: NEW_CONTENT, post_name: NEW_POST_NAME })
  .eq("slug", SLUG);
if (error) { console.error("Write error:", error); process.exit(1); }
console.log("\nWROTE:", SLUG);
