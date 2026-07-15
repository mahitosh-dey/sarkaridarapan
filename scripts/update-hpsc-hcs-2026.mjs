import { createClient } from "@supabase/supabase-js";
import { pingIndexNow } from "./lib/indexnow.mjs";

const supabase = createClient(
  "https://xtjbijvxxeoopcqxycpz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY",
);

const SLUG = "hpsc-hcs-2026";

const NEW_TITLE = "HPSC HCS 2026: Haryana Civil Services Recruitment and Prep";
const NEW_DESCRIPTION = "HPSC HCS 2026 fills 156 Haryana Group A posts including SDM, DSP, ETO, and BDPO. Apply on hpsc.gov.in between March 20 and April 20, 2026 for July 19 Prelims.";

const NEW_CONTENT = `## HPSC HCS at a glance

HPSC HCS 2026 is the Haryana Public Service Commission's Combined Civil Services Examination for 156 Group A gazetted posts across the Haryana state civil, police, revenue, excise, employment, and allied services. The exam covers Haryana Civil Service (Executive Branch) posts including Sub-Divisional Magistrate (SDM), Deputy Superintendent of Police (DSP), Excise and Taxation Officer (ETO), Block Development and Panchayat Officer (BDPO), Employment Officer, and District Food and Supplies Controller across Haryana's 22 districts and 154 blocks.

The commission notified the 2026 cycle in February 2026 with the online application window running March 20, 2026 to April 20, 2026 on hpsc.gov.in. The Preliminary Examination is scheduled for July 19, 2026, Mains in November 2026, and Viva Voce in February to March 2027.

Around 1.2 lakh candidates typically appear for HPSC HCS Prelims, giving a 1 in 770 selection ratio for the 156 vacancies in this cycle. That places HPSC HCS in a comparable difficulty band with UPSC Civil Services by ratio. SDM in Haryana Civil Service (Executive Branch) and DSP in Haryana Police are the two most-sought posts because they carry field-level administrative and policing authority in a state that is one of India's most agriculturally productive per hectare and home to the Manesar-Gurugram industrial corridor and the Panipat-Sonipat manufacturing belt.

## Posts recruited under HPSC HCS

The 156 vacancies span 6 post categories in the Group A gazetted cadre of Haryana state administration.

| Post | Group / Level | Typical initial posting |
|---|---|---|
| Haryana Civil Service (Executive Branch) SDM | Group A, Level 10 | Sub-Divisional Office in a district |
| Deputy Superintendent of Police (DSP) | Group A, Level 10 | Sub-divisional police headquarters |
| Excise and Taxation Officer (ETO) | Group A, Level 10 | Excise and taxation circle |
| Block Development and Panchayat Officer (BDPO) | Group A, Level 10 | Block headquarters, Panchayati Raj administration |
| Employment Officer | Group A, Level 10 | District employment exchange |
| District Food and Supplies Controller | Group A, Level 10 | District food and civil supplies office |
| Other Group A allied posts | Group A, Level 10 | State department postings |

SDM and DSP carry the highest applicant pressure because they are field cadres with the widest career progression scope. Postings in Gurugram, Faridabad, Panipat, and Sonipat (the National Capital Region and industrial belt) carry high administrative complexity because of the industrial economy, migrant labour issues, and metropolitan planning demands. Excise and Taxation Officer has grown in importance since the Haryana Excise Policy 2024 reforms and the GST rollout.

## Who qualifies for HPSC HCS

HPSC HCS has five eligibility conditions that must be satisfied on July 1, 2026.

| Requirement | Detail |
|---|---|
| Nationality | Indian citizen |
| Age | 21 to 40 years for General category on July 1, 2026 |
| Education | Bachelor's degree from a UGC-recognised university, any stream |
| Language | Hindi in Devanagari script at Matriculation level required |
| Domicile | Haryana domicile required for reserved category benefits and specific women-quota posts |

Age relaxations follow Haryana state government norms. Scheduled Caste and Backward Classes (BC-A and BC-B) candidates with Haryana domicile get 5 years extra (up to 45). Persons with Benchmark Disability (PwBD) get 10 years extra over the applicable category limit. Haryana government employees get 5 years extra. Ex-servicemen relaxations follow standard central government norms. Widows, judicially separated women, and divorced women with Haryana domicile get up to 45 years subject to specific documentation.

The Hindi language requirement is a hard eligibility gate. Every applicant must furnish proof of Hindi study in Devanagari script at Matriculation level or above, either as a subject in the 10th class certificate or as the medium of instruction. Non-Hindi-medium candidates who cannot furnish this proof at document verification are disqualified. The commission accepts a Haryana Board of School Education certificate showing Hindi as a subject, or a certified proficiency test conducted by any recognised Board of Secondary Education.

Haryana domicile is required for Scheduled Caste, Backward Classes, women horizontal reservation (33 percent for Haryana-domicile women in specific reserved posts), and state government employee reservation. Domicile is proved through the Haryana State Domicile Certificate issued by the Tehsildar, which requires 15 years of continuous residence in Haryana or a birth certificate showing Haryana (or the erstwhile Punjab region that became Haryana in 1966) as the place of birth for the applicant or the applicant's father.

## Application fee and how to apply on hpsc.gov.in

The commission charges Rs. 1,000 for General category male candidates, Rs. 250 for General category female candidates and Haryana SC / BC-A / BC-B male candidates, and Rs. 0 for Haryana SC / BC-A / BC-B female candidates and all PwBD candidates. Fee is paid online only through Net Banking, UPI, or credit and debit card.

1. Open hpsc.gov.in on Chrome, Firefox, or Edge. Older browsers may fail at OTP screens.
2. Click Apply Online next to the HCS 2026 notification.
3. Register with your name, date of birth, mobile number, email, and Aadhaar number exactly as they appear on your 10th class certificate.
4. Verify mobile OTP and email OTP. Both are needed.
5. Complete the personal details page including caste category, Haryana domicile status, women horizontal reservation claim if applicable, PwBD certification, and mother tongue.
6. Fill educational qualifications with your graduation degree, university name, roll number, year of passing, and class or percentage.
7. Enter post preferences in order. You can pick up to 6 post categories. Give your most-preferred first.
8. Upload photograph (JPEG, 20 to 50 KB, taken within the last 3 months) and signature (JPEG, 10 to 20 KB, on white background).
9. Pay the application fee online. Retain the payment reference number.
10. Submit and download the Confirmation Page. Print two copies for your records.

Common errors and how to fix them. If the mobile OTP does not arrive, telecom spam filters may be blocking HPSC SMS. Wait 5 minutes and retry, or use a different mobile number. If your photograph gets rejected for size, use online image compressors to reach the 20 to 50 KB band. If your domicile status shows a mismatch, upload the Tehsildar-issued Haryana Domicile Certificate at document verification. Post preference order is locked at submission and cannot be changed later.

## Selection process: three stages

HPSC uses a three-stage selection process with the Preliminary Examination as a screening filter, the Main Examination as the merit-determining written test, and the Viva Voce for evaluation of shortlisted candidates.

Stage 1 is the Preliminary Examination scheduled for July 19, 2026. This is a single-paper objective test on General Studies.

| Paper | Marks | Duration | Format |
|---|---|---|---|
| General Studies | 100 | 2 hours | Multiple choice, negative marking of 1 by 4 mark per wrong answer |

Prelims is qualifying only. Marks are not counted toward the final merit list. Candidates need to score above the category cutoff to advance to Mains. Around 10 to 12 times the number of Mains slots are shortlisted from Prelims.

Stage 2 is the Main Examination, a six-paper descriptive test with 1,200 total merit marks.

| Paper | Topic | Marks | Included in merit |
|---|---|---|---|
| Paper I | General Studies I | 200 | Merit |
| Paper II | General Studies II | 200 | Merit |
| Paper III | General Studies III | 200 | Merit |
| Paper IV | General Studies IV: Haryana-specific study | 200 | Merit |
| Paper V | Hindi (compulsory) | 100 | Qualifying, need 33 percent to pass |
| Paper VI | English (compulsory) | 100 | Qualifying, need 33 percent to pass |
| Paper VII | Optional Subject Paper I | 200 | Merit |
| Paper VIII | Optional Subject Paper II | 200 | Merit |
| Total merit marks | | 1,200 | |

Optional Subjects are available in 22 subjects including Hindi Literature, English Literature, Sanskrit, Urdu, Punjabi, History, Political Science and International Relations, Public Administration, Sociology, Economics, Anthropology, Psychology, Geography, Commerce and Accountancy, Law, Botany, Zoology, Chemistry, Mathematics, Physics, Statistics, and Agriculture.

Stage 3 is the Viva Voce or Personality Test held at the HPSC office in Panchkula. Marks weightage is 75 for all Group A posts. Total maximum marks for merit calculation is 1,200 (Mains) + 75 (Viva Voce) = 1,275.

## Detailed syllabus and recommended books

HPSC HCS syllabus overlaps significantly with UPSC Civil Services on core General Studies, but Haryana-specific history, agricultural economy, sports achievements, and NCR industrial context are the differentiators. Paper IV Haryana-specific study is the single-biggest differentiator with 200 merit marks.

Prelims General Studies covers eight areas. Indian History (Ancient, Medieval, Modern, with focus on Haryana's role including the Indus Valley Civilisation at Rakhigarhi, the three Battles of Panipat 1526, 1556, and 1761, the Kurukshetra battlefield and Mahabharata connection, Haryana's role in the 1857 revolt, and the Haryana state formation on November 1, 1966 through the Punjab Reorganisation Act 1966). Indian Polity (Constitution, Panchayati Raj in Haryana, Haryana Reservation of Backward Classes Act, women reservation policies). Indian Economy (five-year plans, Haryana economy, Green Revolution wheat and rice, Manesar-Gurugram automotive hub with Maruti Suzuki, Hero MotoCorp, Panipat oil refinery, textiles). Geography (physical, economic, and Haryana physical geography including Yamuna river, Aravalli hills, canal irrigation network, and the SYL canal dispute with Punjab). Science and Technology (general awareness, biotechnology). General Awareness (schemes, sports, awards, Haryana Olympic medal record). Haryana-specific General Knowledge (state formation 1966, chief ministers, Nayab Singh Saini era from 2024, Manohar Lal Khattar era 2014 to 2024, farm laws protest 2020 to 2021, Haryana Kisan Andolan, government schemes). Current Affairs (last 12 months).

Recommended books for Prelims. Bipin Chandra "India's Struggle for Independence" for modern history, with supplementary reading on Haryana's role in 1857. K C Yadav "Modern Haryana: History and Culture" for state-specific history. Suraj Bhan and Vijay Malik on Rakhigarhi excavations for the Indus Valley section. Laxmikanth "Indian Polity" for constitutional topics. NCERT Class 11 and 12 for economics and geography basics. Haryana at a Glance published by the state Directorate of Economics and Statistics for state-specific facts. Punjab Reorganisation Act 1966 text for historical context on Haryana's formation and the ongoing SYL dispute.

Mains Paper IV Haryana-specific study covers state history from the Kuru kingdom through the three Battles of Panipat, state formation in 1966, chief ministers from Bhagwat Dayal Sharma onwards, Haryana Olympic sports culture (Karnam Malleshwari inspiration, Sushil Kumar wrestling, Vijender Singh boxing, Sakshi Malik wrestling gold, Bajrang Punia, Neeraj Chopra javelin Olympic gold 2020 and 2024, Bhagwati Devi Paralympic medals), state economy (agriculture, industry, Kundli-Manesar-Palwal expressway, KMP metro projects, IMT Manesar), state culture (Ragini folk music, Saang folk theatre, Puran Bhagat legends, wrestling akhara tradition), Haryana government schemes (Mhara Pani Mhara Virasat, Haryana Kishori Samman, Ayushman Bharat Haryana), Farm Laws protest and Kisan Andolan legacy, and current affairs.

Mains Paper VII and VIII Optional Subject choice is important. Native Haryanvi and Hindi speakers should consider Hindi Literature. History and Political Science and International Relations offer strong Haryana-specific coverage in their syllabi.

Hindi Compulsory Paper V covers essay writing, précis writing, grammar, and comprehension in formal Hindi. English Compulsory Paper VI covers similar in English. Both are qualifying at 33 percent (33 out of 100). Failing either disqualifies from Mains regardless of merit scores on other papers.

## Salary breakdown and career progression

HPSC-recruited officers start at Pay Level 10 across all six post categories under the Haryana Civil Services (Revised Pay) Rules 2016.

| Post | Basic pay | Gross monthly | In-hand monthly |
|---|---|---|---|
| HCS SDM, DSP, ETO, BDPO, Employment Officer, District Food and Supplies Controller (Level 10) | Rs. 56,100 | Rs. 90,000 to Rs. 1,00,000 | Rs. 75,000 to Rs. 82,000 |

Gross pay includes Dearness Allowance (currently 46 percent of basic under Haryana norms), House Rent Allowance (30 percent for Gurugram and Faridabad, 24 percent for Panchkula, Panipat, Sonipat, Rohtak, and Karnal, 16 percent for other municipal areas, 8 percent elsewhere), Transport Allowance (Rs. 7,200 to Rs. 15,000 per month based on city class), and Haryana-specific allowances. The HRA for Gurugram and Faridabad is one of the highest among State PSCs because both cities are classified as X-category cities in the pay matrix.

Career progression for an HCS SDM typically moves through Additional District Magistrate, District Magistrate on deputation, Divisional Commissioner (Ambala or Hisar or Rohtak or Gurugram division), and Principal Secretary in the state government at Level 15 to 16 over 25 to 30 years. Reaching Chief Secretary (Level 17) requires IAS deputation through a Union Public Service Commission promotion process.

DSP progression moves through Sub-Divisional Police Officer, Additional Superintendent of Police, Superintendent of Police in a district, Deputy Inspector General at range level, and Inspector General at zonal level over 20 to 25 years.

BDPO promotions go through Additional District Development Commissioner, Additional District Magistrate (Development), and Divisional Commissioner over 20 to 25 years. Postings in the NCR belt (Gurugram, Faridabad, Sonipat) carry additional promotion weight because of the metropolitan planning complexity.

## Six to twelve month prep timeline

Month 1-2: Complete NCERT History (Class 6-12) with supplementary reading on the three Battles of Panipat, Haryana's role in 1857, and Haryana state formation for state-specific coverage. Read Laxmikanth for polity. Start daily current affairs from Dainik Jagran, Amar Ujala, or The Tribune with Haryana focus.

Month 3-4: Deep-dive into Indian and Haryana Geography (Yamuna river, Aravalli hills, canal irrigation, SYL canal dispute) and Economy (Indian and Haryana, including Green Revolution, Manesar-Gurugram automotive hub, Panipat oil refinery, textiles, farm laws legacy). Begin Optional Subject preparation in parallel; aim for 2 hours per day. Write 3 answers per week on GS topics.

Month 5-6: Focus on Paper IV Haryana-specific study in depth. Cover state history, sports culture, government schemes, and current affairs. Also start Hindi and English Compulsory Paper practice with weekly essays. Continue Optional Subject deep-dive.

Month 7: Prelims focused mode. Daily current affairs revision, mock tests every 3 days, detailed Haryana GK sweep (chief ministers, Nayab Singh Saini era schemes, Manohar Lal Khattar era legacy, budget highlights, Farm Laws aftermath, Kisan Andolan updates, Olympic medal count). Prelims on July 19, 2026 sits at the end of this window.

Month 8-11 (post-Prelims): Full Mains preparation mode. Answer writing practice for all three GS papers (I to III), Paper IV Haryana study, Hindi and English Compulsory Papers, and the two Optional Subject papers. Viva Voce preparation from Month 10 onwards for candidates confident of Mains qualification.

Candidates with prior UPSC preparation can compress the plan to 8 months by focusing on Paper IV Haryana-specific study and the Optional Subject, since UPSC prep covers the core GS syllabus adequately.

## Common mistakes candidates make

Seven mistakes account for most HPSC HCS rejections across cycles.

Under-preparing Paper IV Haryana-specific study. This paper carries 200 merit marks (roughly 17 percent of merit ceiling) and covers state history, sports, culture, schemes, and current affairs. Candidates who rely only on general UPSC preparation score 40 to 50 percent on this paper, which drops final rank by 150 to 250 positions.

Wrong Optional Subject choice. Picking a subject you never studied at graduation and cannot cover in 6 months is a self-inflicted wound. Optional papers together carry 400 merit marks, roughly 33 percent of merit ceiling. History and Political Science and International Relations offer good state-context coverage.

Ignoring the Hindi or English Compulsory Papers. Both are qualifying at 33 percent (33 out of 100). Failing either disqualifies from Mains regardless of merit scores on other papers. Non-native candidates need 2 to 3 months of structured Hindi essay and grammar practice.

Skipping mock tests for Prelims. Prelims has negative marking of 1 by 4 (higher penalty than most State PSCs). Candidates who do not practise the negative-marking calculus tend to over-attempt and lose net marks.

Missing the Haryana domicile certificate at document verification. Candidates who claim SC, BC-A, BC-B reservation or women horizontal reservation must present the Tehsildar-issued Haryana Domicile Certificate at document verification. Missing this document triggers a downgrade to General category and loss of the women reservation for Haryana-domicile women.

Post preference order errors. The commission allocates posts based on merit rank and preference order at application. Putting Employment Officer as first preference when the real target is SDM is a common mistake that gets locked at application and cannot be changed later.

Ignoring Haryana current affairs. National current affairs are covered by every candidate. Haryana-specific current affairs (state budget, Nayab Singh Saini era schemes, court judgments on state issues including the SYL canal case, Farm Laws protest updates, sports scheme announcements, Manesar-KMP expressway developments) differentiate serious candidates. Read Dainik Jagran or The Tribune Haryana edition daily.

## HPSC HCS vs UPSC Civil Services

HPSC HCS and UPSC CSE overlap significantly on syllabus but diverge on scale, competition, and career trajectory. This comparison helps candidates decide whether to target HPSC as primary or as backup to UPSC.

| Feature | HPSC HCS 2026 | UPSC Civil Services 2026 |
|---|---|---|
| Vacancies | 156 | 1,056 |
| Selection ratio | 1 in 770 | 1 in 800 |
| Age (General) | 21 to 40 | 21 to 32 |
| Attempts limit | No cap, only age ceiling | 6 for General, 9 for OBC, unlimited for SC/ST |
| Prelims marks | 100 (single paper, qualifying only) | 400 |
| Mains merit marks | 1,200 (4 GS + 2 Optional + 200 Haryana study) | 1,750 |
| Interview / Viva marks | 75 | 275 |
| Total merit ceiling | 1,275 | 2,025 |
| Salary entry (Level 10) | Rs. 56,100 basic | Rs. 56,100 basic |
| HRA (NCR posting) | 30 percent | 30 percent |
| Career ceiling | Principal Secretary, IAS deputation rare | Cabinet Secretary direct |
| Home state posting | Guaranteed (Haryana cadre) | Depends on cadre allocation |
| Prep time typical | 8 to 12 months | 12 to 24 months |
| Syllabus overlap | 70 percent with UPSC CSE | Baseline |
| Language paper | Hindi + English 100 each (qualifying) | Indian language + English 300 each (qualifying) |
| Women reservation | 33 percent horizontal for Haryana-domicile women | 10 percent |

HPSC HCS is the right primary target for candidates with Haryana domicile ties who prioritise home state posting, especially the NCR belt (Gurugram, Faridabad, Sonipat) with its 30 percent HRA. The 33 percent women horizontal reservation for Haryana-domicile women is a distinctive advantage. UPSC is the right primary target for candidates aiming at national-level cadres. Many candidates prepare for both in parallel because the syllabus overlap is around 70 percent, with the Paper IV Haryana study and Optional Subject requiring dedicated HPSC-side preparation.

## Frequently asked questions

**Who is eligible for HPSC HCS 2026?**
Indian citizens aged 21 to 40 (General category on July 1, 2026) with a Bachelor's degree from a UGC-recognised university and Hindi in Devanagari script at Matriculation level. Haryana SC / BC-A / BC-B candidates get 5 years extra (up to 45), women with Haryana domicile get 5 years extra, PwBD get 10 years extra, and Haryana government employees get 5 years extra.

**How many vacancies are in HPSC HCS 2026?**
156 vacancies across 6 post categories including Haryana Civil Service (Executive Branch) SDM, Deputy Superintendent of Police (DSP), Excise and Taxation Officer (ETO), Block Development and Panchayat Officer (BDPO), Employment Officer, and District Food and Supplies Controller.

**What is the last date to apply for HPSC HCS 2026?**
April 20, 2026. Online applications open March 20, 2026 on hpsc.gov.in. The Preliminary Examination is scheduled for July 19, 2026.

**Is Haryana domicile required for HPSC HCS?**
Not for base eligibility. Any Indian citizen aged 21 to 40 with a Bachelor's degree can apply. Haryana State Domicile Certificate is required for SC, BC-A, BC-B reservation, for the 33 percent women horizontal reservation for Haryana-domicile women, and for state government employee age relaxation.

**How much is the application fee?**
Rs. 1,000 for General category male candidates, Rs. 250 for General category female candidates and Haryana SC / BC-A / BC-B male candidates, and Rs. 0 for Haryana SC / BC-A / BC-B female candidates and all PwBD candidates. Payment is online only through Net Banking, UPI, or credit and debit card.

**What is the exam pattern for HPSC HCS?**
Three stages. Prelims is a single 100-mark General Studies paper (qualifying only, negative marking of 1 by 4). Mains is eight papers including four GS papers of 200 marks each (Paper IV is Haryana-specific study), two Optional Subject papers of 200 marks each, and two qualifying language papers (Hindi and English at 100 marks each). Total merit marks are 1,200. Viva Voce carries 75 marks.

**What is the salary of an HPSC HCS SDM?**
Pay Level 10, basic pay Rs. 56,100 under the Haryana Civil Services (Revised Pay) Rules 2016. Gross monthly Rs. 90,000 to Rs. 1,00,000 including DA at 46 percent, HRA at 30 percent for Gurugram and Faridabad postings, and other allowances. In-hand around Rs. 75,000 to Rs. 82,000 after standard deductions.

**Can I become an IAS officer through HPSC HCS?**
Not directly. HPSC HCS recruits into Haryana state services. IAS deputation is available to a small fraction of HCS officers who clear a Union Public Service Commission promotion process later in their career, typically after 15 to 20 years of state service.

**Why is Paper IV Haryana-specific study important?**
Paper IV carries 200 merit marks (17 percent of merit ceiling) and covers state history including the three Battles of Panipat, Haryana Olympic sports culture (Neeraj Chopra, Sushil Kumar, Sakshi Malik, Vijender Singh), state economy, government schemes, and current affairs. This is a state-specific paper without UPSC equivalent and needs 3 to 4 months of dedicated study from Haryana-specific primary sources.

**Should I prepare for HPSC HCS alongside UPSC Civil Services?**
Yes if you have Haryana domicile ties. The syllabus overlap is around 70 percent. Add Haryana-specific study for Paper IV (2 to 3 hours per day for 2 months) and choose an Optional Subject you graduated in. Many candidates clear HPSC as a fallback while continuing UPSC attempts, especially those targeting NCR postings with 30 percent HRA.

## Sources and related pages

- HPSC official portal: [hpsc.gov.in](https://hpsc.gov.in/)
- HPSC online application: [hpsc.gov.in](https://hpsc.gov.in/)
- Haryana Government official portal: [haryana.gov.in](https://haryana.gov.in/)
- Punjab Reorganisation Act 1966 reference (Haryana formation): [india.gov.in](https://india.gov.in/)
- Union Public Service Commission (for UPSC CSE comparison): [upsc.gov.in](https://upsc.gov.in)

Related pages on this site:

- [BPSC 70th CCE 2026: Bihar Civil Services Recruitment Guide](https://www.sarkaridarapan.com/sarkari-naukri/bpsc-70th-cce-2026)
- [MPPSC State Service Exam 2026: Madhya Pradesh Civil Services](https://www.sarkaridarapan.com/sarkari-naukri/mppsc-state-service-exam-2026)
- [PPSC PCS 2026: Punjab Civil Services Recruitment and Prep](https://www.sarkaridarapan.com/sarkari-naukri/ppsc-pcs-2026)
- [UKPSC PCS 2026: Uttarakhand Civil Services Recruitment Guide](https://www.sarkaridarapan.com/sarkari-naukri/ukpsc-pcs-2026)
- [Mahila Kishori Samman Yojana Haryana 2026: Free Sanitary Pads](https://www.sarkaridarapan.com/sarkari-yojana/mahila-evam-kishori-samman-yojana-haryana-2026)
- [SSC CGL 2026 syllabus and preparation guide](https://www.sarkaridarapan.com/blog/ssc-cgl-2026-syllabus-preparation-guide)
- [Government jobs vs private jobs in India 2026](https://www.sarkaridarapan.com/blog/government-jobs-vs-private-jobs-india-2026)`;

// Validation
const emCount = (NEW_CONTENT.match(/—/g) || []).length;
const enCount = (NEW_CONTENT.match(/–/g) || []).length;
const smartCount = (NEW_CONTENT.match(/[‘’“”]/g) || []).length;
const bulletBoldLabels = (NEW_CONTENT.match(/^\s*-\s*\*\*[^*\n]+\*\*/gm) || []).length;
const inlineBoldLabels = (NEW_CONTENT.match(/\*\*[^*\n]+\*\*:/g) || []).length;
const forXOpener = (NEW_CONTENT.match(/^For \*\*[^*\n]+\*\*:/gm) || []).length;

const AI_VOCAB = ["actually","additionally","align with","crucial","delve","enduring","enhance","fostering","garner","highlight","interplay","intricate","landscape","pivotal","showcase","tapestry","testament","underscore","vibrant"];
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
console.log("Bulleted bold labels:", bulletBoldLabels, bulletBoldLabels === 0 ? "OK" : "FAIL");
console.log("Inline bold labels:", inlineBoldLabels, inlineBoldLabels === 0 ? "OK" : "FAIL");
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

const { data: before, error: bErr } = await supabase.from("jobs").select("slug, title, description, content").eq("slug", SLUG).single();
if (bErr) { console.error("Read-before failed:", bErr); process.exit(1); }
console.log("\n=== BEFORE ===");
console.log("Title:", before.title, "(" + before.title.length + " chars)");
console.log("Description:", before.description, "(" + before.description.length + " chars)");
console.log("Content word count:", before.content?.split(/\s+/).length ?? 0);

const { error: uErr } = await supabase.from("jobs").update({ title: NEW_TITLE, description: NEW_DESCRIPTION, content: NEW_CONTENT, updated_at: new Date().toISOString() }).eq("slug", SLUG);
if (uErr) { console.error("Update failed:", uErr); process.exit(1); }

console.log("\n=== AFTER ===");
console.log("Title:", NEW_TITLE, "(" + NEW_TITLE.length + " chars)");
console.log("Description:", NEW_DESCRIPTION, "(" + NEW_DESCRIPTION.length + " chars)");
console.log("Content word count:", NEW_CONTENT.split(/\s+/).length);

const revalRes = await fetch(`https://www.sarkaridarapan.com/api/revalidate?path=/sarkari-naukri/${SLUG}`);
const revalJson = await revalRes.json().catch(() => ({}));
console.log("Revalidate:", revalJson.revalidated ? "OK" : "FAIL", revalJson);

await pingIndexNow(SLUG, "/sarkari-naukri");

console.log("\nUpdate successful. Verify at https://www.sarkaridarapan.com/sarkari-naukri/" + SLUG);
