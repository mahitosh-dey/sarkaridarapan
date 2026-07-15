import { createClient } from "@supabase/supabase-js";
import { pingIndexNow } from "./lib/indexnow.mjs";

const supabase = createClient(
  "https://xtjbijvxxeoopcqxycpz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY",
);

const SLUG = "opsc-ocs-2026";

const NEW_TITLE = "OPSC OCS 2026: Odisha Civil Services Recruitment and Prep";
const NEW_DESCRIPTION = "OPSC OCS 2026 fills 330 Odisha Civil Services posts including OAS Group A, OPS, and Finance Service. Apply on opsc.gov.in between April 5 and May 5, 2026.";

const NEW_CONTENT = `## OPSC OCS at a glance

OPSC OCS 2026 is the Odisha Public Service Commission's flagship recruitment cycle for 330 Group A and Group B posts across the Odisha state civil, police, revenue, and allied services. The exam covers Odisha Administrative Service (OAS Junior Branch), Odisha Police Service (OPS), Odisha Finance Service, District Registrar and Sub-Registrar cadres, and various allied service posts under the Odisha secretariat and district administration.

The commission notified the 2026 cycle in March 2026 with the online application window running April 5, 2026 to May 5, 2026 on opsc.gov.in. The Preliminary Examination is scheduled for August 2, 2026, Mains in December 2026, and Personality Test in March 2027.

Around 2 lakh candidates typically appear for OPSC OCS Prelims, translating to a 1 in 600 selection ratio for the 330 vacancies in this cycle. That places OCS between the harder UPSC CSE (1 in 800) and easier state SSC-tier exams. OAS Junior Branch and OPS are the two most-sought posts because they carry field-level administrative and policing authority within Odisha's 30-district structure.

## Posts recruited under OPSC OCS

The 330 vacancies span 8 post categories in the Group A and Group B cadres of Odisha state administration.

| Post | Group / Level | Typical initial posting |
|---|---|---|
| Odisha Administrative Service (OAS) Group A Junior Branch | Group A, Level 10 | Sub-collector office or district administration |
| Odisha Police Service (OPS) | Group A, Level 10 | Sub-divisional police headquarters |
| Odisha Finance Service | Group A, Level 10 | State treasury or finance department |
| District Registrar | Group B, Level 8 | District registration office |
| Sub-Registrar | Group B, Level 8 | Sub-registrar office at tehsil headquarters |
| Assistant Director of Fisheries | Group B, Level 8 | District fisheries office |
| Employment Officer | Group B, Level 7 | District employment exchange |
| Other Group A and B allied posts | Varies | State department postings |

OAS and OPS carry the highest applicant pressure because they are field cadres with the widest career progression scope and the highest visibility within Odisha's district administration. District Registrar and Sub-Registrar have lighter competition but narrower promotion ceilings within the registration department.

## Who qualifies for OPSC OCS

OPSC OCS has five eligibility conditions that must be satisfied on August 1, 2026.

| Requirement | Detail |
|---|---|
| Nationality | Indian citizen |
| Age | 21 to 38 years for General category on August 1, 2026 |
| Education | Bachelor's degree from a UGC-recognised university, any stream |
| Language | Odia reading, writing, and speaking proficiency required (tested in Mains) |
| Attempts | No cap on total attempts; only the upper age limit applies |

Age relaxations follow Odisha state government norms. Socially and Educationally Backward Class (SEBC) candidates get 5 years extra (up to 43). Scheduled Caste, Scheduled Tribe, women, and PwBD candidates get 5 to 10 years extra depending on category. Ex-servicemen relaxations follow standard central government norms. Serving Odisha state government employees may claim up to 5 years extra subject to continuous service.

The Odia language requirement is a hard eligibility gate. Every applicant must have passed a Middle School examination with Odia as a subject, or passed the Matriculation or equivalent with Odia as the medium of instruction or as a subject, or passed a High School Certificate exam with Odia as the medium, or passed a certified Odia proficiency test conducted by the state Board of Secondary Education. Non-Odia-medium candidates who cannot furnish this proof at document verification are disqualified regardless of Prelims or Mains performance. Applicants who studied outside Odisha should get the state Board of Secondary Education Odia proficiency certificate at least 90 days before the application deadline.

Odisha domicile is not a formal eligibility bar for General category applicants from other states, but the Odia language requirement effectively restricts the applicant pool to candidates with Odia-medium schooling. Category-based reservations (SEBC, SC, ST) do require Odisha domicile proof.

## Application fee and how to apply on opsc.gov.in

The commission charges Rs. 500 for General and OBC candidates. There is no fee for SC, ST, PwBD, and women applicants (Odisha-domicile). Fee is paid online only through Net Banking, UPI, or credit and debit card. Offline demand draft was discontinued in 2019.

1. Open opsc.gov.in on Chrome, Firefox, or Edge. Older browsers may fail at the OTP verification screen.
2. Click Apply Online next to the OCS 2026 notification.
3. Register with your name, date of birth, mobile number, email, and Aadhaar number exactly as they appear on your 10th class certificate.
4. Verify mobile OTP and email OTP. Both are needed.
5. Complete the personal details page including caste category, Odisha domicile status, PwBD certification, and Odia proficiency certificate reference number.
6. Fill educational qualifications with your graduation degree, university name, roll number, year of passing, and class or percentage.
7. Enter post preferences in order. You can pick up to 8 post categories. Give your most-preferred first.
8. Upload photograph (JPEG, 20 to 50 KB, taken within the last 3 months) and signature (JPEG, 10 to 20 KB, on white background).
9. Pay the application fee online. Retain the payment reference number.
10. Submit and download the Confirmation Page. Print two copies for your records.

Common errors and how to fix them. If the mobile OTP does not arrive, telecom spam filters may be blocking OPSC SMS. Wait 5 minutes and retry, or use a different mobile number. If your photograph gets rejected for size, use online image compressors to reach the 20 to 50 KB band. If your Odia proficiency certificate reference cannot be verified against the state Board database, contact the Board directly and get a fresh certificate before the application closing date. Post preference order is locked at submission and cannot be changed later.

## Selection process: three stages

OPSC uses a three-stage selection process with the Preliminary Examination as a screening filter, the Main Examination as the merit-determining written test, and the Personality Test for interview evaluation.

Stage 1 is the Preliminary Examination scheduled for August 2, 2026. This is a two-paper objective test on General Studies and General Studies Paper II (Aptitude and Analytical Reasoning).

| Paper | Marks | Duration | Format |
|---|---|---|---|
| General Studies Paper I | 200 | 2 hours | Multiple choice, negative marking of 1 by 3 mark per wrong answer |
| General Studies Paper II (CSAT) | 200 | 2 hours | Multiple choice, qualifying only at 33 percent |

Prelims Paper I is the merit-determining screening paper. Paper II is qualifying at 33 percent (66 out of 200). Both papers must be attempted or the candidature is void. Prelims marks do not count toward the final merit list. Around 13 times the number of Mains slots are shortlisted from Prelims for the Mains stage.

Stage 2 is the Main Examination, a nine-paper descriptive test with three qualifying papers and six merit-determining papers.

| Paper | Topic | Marks | Included in merit |
|---|---|---|---|
| Odia (compulsory language) | Odia language | 300 | Qualifying, need 30 percent to pass |
| English | English language | 300 | Qualifying, need 30 percent to pass |
| Essay | Essay writing | 200 | Merit |
| General Studies Paper I | Modern history, geography, society | 250 | Merit |
| General Studies Paper II | Polity, governance, international relations | 250 | Merit |
| General Studies Paper III | Economy, environment, science and technology | 250 | Merit |
| General Studies Paper IV | Ethics, integrity, aptitude | 250 | Merit |
| Optional Subject Paper I | Chosen optional | 250 | Merit |
| Optional Subject Paper II | Chosen optional | 250 | Merit |
| Total merit marks | | 1,700 | |

Optional Subjects are available in 25 subjects including Political Science and International Relations, History, Sociology, Public Administration, Geography, Economics, Anthropology, Psychology, Odia Literature, English Literature, Sanskrit Literature, Botany, Zoology, Chemistry, Mathematics, Physics, Statistics, Agriculture, Animal Husbandry and Veterinary Science, Commerce and Accountancy, Management, Law, Philosophy, Civil Engineering, and Mechanical Engineering.

Stage 3 is the Personality Test held at the OPSC office in Cuttack. Marks weightage is 250 for all Group A posts and applies to the shortlisted candidates from Mains. Total maximum marks for merit calculation is 1,700 (Mains) + 250 (Personality Test) = 1,950.

## Detailed syllabus and recommended books

OPSC OCS syllabus overlaps significantly with UPSC Civil Services on core General Studies, but Odisha-specific history, geography, economy, and language content are the differentiators.

Prelims General Studies Paper I covers eight areas. Indian History (Ancient, Medieval, Modern, with focus on Odisha's role in the Kalinga kingdom, Battle of Kalinga in 261 BCE, Emperor Ashoka's transformation, medieval Odisha temple architecture, and freedom struggle including Prajamandala movement). Indian Polity (Constitution, Panchayati Raj in Odisha, state-level administration). Indian Economy (five-year plans, Odisha economy, mining sector). Geography (physical, economic, and Odisha physical geography including rivers Mahanadi, Brahmani, Baitarani, and Subarnarekha). Science and Technology (general awareness, ISRO Sriharikota launches, biotechnology). General Awareness (schemes, sports, awards). Odisha-specific General Knowledge (state formation history 1936, chief ministers, state schemes, KALIA farmer scheme, Odisha tribal welfare, cyclone preparedness through ODRAF and SDRF). Current Affairs (last 12 months).

Recommended books for Prelims. Bipin Chandra "India's Struggle for Independence" for modern history, with supplementary reading on Prajamandala movement in Odisha. Nirad C Chaudhury and Kanhu Charan Panigrahi for medieval Odisha. Ram Sharan Sharma "Ancient India" for Kalinga era coverage. Laxmikanth "Indian Polity" for constitutional topics. NCERT Class 11 and 12 for economics and geography basics. Odisha at a Glance published by the state Directorate of Economics and Statistics for state-specific facts. Yojana magazine and Odisha PIB releases for current affairs.

Mains merit papers reward structured answers with introduction, body paragraphs, and conclusion. Practise writing at least 5 answers per week during the last 3 months before Mains. Optional Subject Paper I and Paper II together carry 500 merit marks, which is nearly 30 percent of the total merit ceiling. Optional Subject selection is the single most important choice in the entire preparation. If you graduated in a subject on the OPSC optional list, pick that. If not, History, Political Science and International Relations, Public Administration, Sociology, and Geography are the most accessible optionals with abundant preparation material and good coverage of Odisha-specific content.

Odia Compulsory Paper covers essay writing, précis writing, grammar, and comprehension in formal Odia. Recommended books include Odia Bhasa Sahitya by Utkal University Press, Odia Vyakaran by Golak Behari Dhal, and previous year Odia papers from OPSC. Candidates who studied Odia only at Middle School level should aim for 60 percent on this paper, which is achievable with 6 months of structured practice.

## Salary breakdown and career progression

OPSC-recruited officers start at Pay Level 7 to Level 10 depending on the post, under the 7th Central Pay Commission structure adopted by Odisha through the Odisha Revised Scales of Pay Rules 2017.

| Post | Basic pay (7th CPC) | Gross monthly | In-hand monthly |
|---|---|---|---|
| OAS Junior Branch, OPS, Finance Service (Level 10) | Rs. 56,100 | Rs. 82,000 to Rs. 92,000 | Rs. 68,000 to Rs. 76,000 |
| District Registrar (Level 8) | Rs. 47,600 | Rs. 70,000 to Rs. 80,000 | Rs. 60,000 to Rs. 66,000 |
| Sub-Registrar (Level 8) | Rs. 47,600 | Rs. 68,000 to Rs. 78,000 | Rs. 58,000 to Rs. 64,000 |
| Assistant Director of Fisheries (Level 8) | Rs. 47,600 | Rs. 68,000 to Rs. 78,000 | Rs. 58,000 to Rs. 64,000 |
| Employment Officer (Level 7) | Rs. 44,900 | Rs. 65,000 to Rs. 75,000 | Rs. 55,000 to Rs. 62,000 |

Gross pay includes Dearness Allowance (currently 50 percent of basic under central and Odisha state norms), House Rent Allowance (24 percent for Bhubaneswar and Cuttack, 16 percent for other municipal areas, 8 percent elsewhere), Transport Allowance (Rs. 7,200 to Rs. 15,000 per month based on city class), and Odisha-specific allowances.

Career progression for an OAS Junior Branch officer typically moves through Sub-Collector, Additional District Magistrate, District Magistrate on deputation, Divisional Commissioner, and Principal Secretary in the state government at Level 15 to 16 over 25 to 30 years. Reaching Chief Secretary (Level 17) requires IAS deputation through a Union Public Service Commission promotion process, typically after 15 to 20 years of state service.

OPS progression moves through Sub-Divisional Police Officer, Additional Superintendent of Police, Superintendent of Police in a district, Deputy Inspector General at range level, and Inspector General at zonal level over 20 to 25 years. Reaching Director General of Police requires Indian Police Service deputation.

Odisha Finance Service progression moves through Assistant Director of Treasuries, Deputy Director, Joint Director, Director, and Special Secretary Finance in the state Finance department.

## Six to twelve month prep timeline

Month 1-2: Complete NCERT History (Class 6-12) with supplementary reading on Kalinga, medieval Odisha, and Prajamandala movement for state-specific coverage. Read Laxmikanth for polity and start daily current affairs from Sambad, The New Indian Express, or The Hindu with Odisha-focus.

Month 3-4: Deep-dive into Indian and Odisha Geography (Mahanadi basin, coastal geography, mineral belt) and Economy (Indian and Odisha, including KALIA, Biju Setu Yojana, Mission Shakti, mining royalty). Begin Optional Subject preparation in parallel; aim for 2 to 3 hours per day on the optional. Write 3 answers per week on GS topics.

Month 5-6: Focus on Odia Compulsory Paper preparation, especially if you did not study Odia beyond Middle School. Read a standard Odia grammar text daily and write one essay per week. Continue Optional Subject deep-dive.

Month 7-8: Prelims focused mode. Daily current affairs revision, mock tests every 3 days, detailed Odisha GK sweep (chief ministers, Naveen Patnaik-era schemes, budget highlights, new districts consideration, cyclone preparedness updates, Puri Jagannath temple governance, Chilika lake). Prelims on August 2, 2026 sits at the end of this window.

Month 9-12 (post-Prelims): Full Mains preparation mode. Answer writing practice for all four GS papers and the two Optional Subject papers. Odia Compulsory and English Compulsory daily 1-hour practice with essay writing on current affairs topics. Personality Test preparation from Month 11 onwards for candidates confident of Mains qualification.

Candidates with prior UPSC preparation can compress the plan to 8 months by focusing on Odisha-specific content and Odia Compulsory Paper, since UPSC prep covers the core GS syllabus and can be adapted for the Optional Subject.

## Common mistakes candidates make

Seven mistakes account for most OPSC OCS rejections across cycles.

Under-preparing Odisha-specific General Knowledge. Standard UPSC preparation material has minimal Odisha coverage. OPSC Prelims and Mains together carry 30 to 40 questions on Odisha directly (chief ministers, Naveen Patnaik-era schemes, KALIA, Mission Shakti, tribal welfare, cyclone preparedness). Missing this is the single biggest score gap.

Ignoring the Odia Compulsory Paper. It carries 300 qualifying marks. Failing this paper below 30 percent (90 out of 300) disqualifies the candidate from the entire Mains regardless of merit scores on other papers. Non-Odia-medium candidates need 6 months of structured preparation.

Wrong Optional Subject choice. Picking a subject you never studied at graduation and cannot cover in 6 months is a self-inflicted wound. Optional papers together carry 500 merit marks, nearly 30 percent of the merit ceiling.

Skipping the Prelims Paper II (CSAT) preparation. Paper II is qualifying only, but failing to score 33 percent (66 out of 200) disqualifies the candidate from the Prelims regardless of the Paper I score. Practise at least 100 CSAT questions per week for the last 2 months before Prelims.

Missing the Odia proficiency certificate at document verification. Candidates who did not study Odia at High School level and did not get the Board of Secondary Education proficiency certificate face full disqualification regardless of exam performance. Get the certificate at least 90 days before the application deadline.

Post preference order errors. The commission allocates posts based on merit rank and preference order given at application. Putting Sub-Registrar as first preference when the real target is OAS is a common mistake that gets locked at application and cannot be changed later.

Ignoring Odisha current affairs. National current affairs are covered by every candidate. Odisha-specific current affairs (state budget, Naveen Patnaik-era schemes, court judgments on state issues, cyclone response, new schemes) differentiate serious candidates. Read Sambad or The New Indian Express daily.

## OPSC OCS vs UPSC Civil Services

OPSC OCS and UPSC CSE overlap significantly on syllabus but diverge on scale, competition, and career trajectory. This comparison helps candidates decide whether to target OCS as primary or as backup to UPSC.

| Feature | OPSC OCS 2026 | UPSC Civil Services 2026 |
|---|---|---|
| Vacancies | 330 | 1,056 |
| Selection ratio | 1 in 600 | 1 in 800 |
| Age (General) | 21 to 38 | 21 to 32 |
| Attempts limit | No cap, only age ceiling | 6 for General, 9 for OBC, unlimited for SC/ST |
| Prelims marks | 400 (Paper I 200 merit-screening + Paper II 200 qualifying) | 400 |
| Mains merit marks | 1,700 | 1,750 |
| Interview marks | 250 | 275 |
| Total merit ceiling | 1,950 | 2,025 |
| Salary entry (Level 10) | Rs. 56,100 basic | Rs. 56,100 basic |
| Career ceiling | Principal Secretary, IAS deputation rare | Cabinet Secretary direct |
| Home state posting | Guaranteed (Odisha cadre) | Depends on cadre allocation |
| Prep time typical | 8 to 14 months | 12 to 24 months |
| Syllabus overlap | 80 percent with UPSC CSE | Baseline |
| Language paper | Odia Compulsory 300 marks (qualifying) | Indian language 300 marks + English 300 marks (qualifying) |

OPSC OCS is the right primary target for candidates with Odia-medium schooling who prioritise home state posting and want a shorter preparation timeline than UPSC. UPSC is the right primary target for candidates aiming at national-level cadres with higher career ceilings and 18 to 24 months of preparation runway. Many candidates prepare for both in parallel because the syllabus overlap is around 80 percent, which is one of the highest among all state PSC and UPSC combinations.

## Frequently asked questions

**Who is eligible for OPSC OCS 2026?**
Indian citizens aged 21 to 38 (General category on August 1, 2026) with a Bachelor's degree from a UGC-recognised university and proven Odia language proficiency at Middle School level or above. SEBC candidates get 5 years extra, SC and ST candidates get 5 years extra, and women and PwBD candidates get additional relaxations per Odisha state norms.

**How many vacancies are in OPSC OCS 2026?**
330 vacancies across 8 post categories including Odisha Administrative Service (OAS Junior Branch), Odisha Police Service (OPS), Odisha Finance Service, District Registrar, Sub-Registrar, Assistant Director of Fisheries, Employment Officer, and other Group A and B allied posts.

**What is the last date to apply for OPSC OCS 2026?**
May 5, 2026. Online applications open April 5, 2026 on opsc.gov.in. The Preliminary Examination is scheduled for August 2, 2026.

**Is Odia language proficiency mandatory for OPSC OCS?**
Yes. Every applicant must furnish proof of Odia proficiency at Middle School level or above. This can be a Middle School certificate showing Odia as a subject, Matriculation with Odia as medium or subject, or a certified Odia proficiency test conducted by the Odisha Board of Secondary Education. Non-Odia-medium candidates should obtain the Board certificate at least 90 days before the application deadline.

**How much is the application fee?**
Rs. 500 for General and OBC candidates. Free for SC, ST, PwBD, and women applicants with Odisha domicile. Payment is online only through Net Banking, UPI, or credit and debit card.

**What is the exam pattern for OPSC OCS?**
Three stages. Prelims is two 200-mark papers (Paper I General Studies is merit-screening, Paper II CSAT is qualifying at 33 percent). Mains is nine papers with two qualifying language papers (Odia and English at 300 marks each) plus seven merit-determining papers totalling 1,700 marks. Personality Test carries 250 marks. Total merit ceiling is 1,950.

**What is the salary of an OAS Junior Branch officer?**
Pay Level 10, basic pay Rs. 56,100 under the 7th Central Pay Commission structure. Gross monthly Rs. 82,000 to Rs. 92,000 including DA at 50 percent of basic, HRA at 24 percent for Bhubaneswar and Cuttack, and other allowances. In-hand around Rs. 68,000 to Rs. 76,000 after standard deductions.

**Can I become an IAS officer through OPSC OCS?**
Not directly. OPSC OCS recruits into Odisha state services. IAS deputation is available to a small fraction of OAS Junior Branch officers who clear a Union Public Service Commission promotion process later in their career, typically after 15 to 20 years of state service.

**How many attempts can I make for OPSC OCS?**
No cap on total attempts. Only the upper age limit (38 for General, 43 for SEBC, and higher for SC and ST and women) applies. You can appear as many times as the age ceiling allows.

**Should I prepare for OPSC OCS alongside UPSC Civil Services?**
Yes if you have Odia-medium schooling background. The syllabus overlap between the two exams is around 80 percent, which is one of the highest among state PSC and UPSC combinations. Add Odisha-specific General Knowledge (2 hours per day for 2 months) and choose an Optional Subject you graduated in. Many candidates clear OCS as a fallback while continuing UPSC attempts.

## Sources and related pages

- OPSC official portal: [opsc.gov.in](https://opsc.gov.in/)
- OPSC online application: [opsc.gov.in](https://opsc.gov.in/)
- Odisha Government official portal: [odisha.gov.in](https://odisha.gov.in/)
- Odisha Board of Secondary Education (for Odia proficiency certificate): [bseodisha.nic.in](https://bseodisha.nic.in/)
- Union Public Service Commission (for UPSC CSE comparison): [upsc.gov.in](https://upsc.gov.in)

Related pages on this site:

- [BPSC 70th CCE 2026: Bihar Civil Services Recruitment Guide](https://www.sarkaridarapan.com/sarkari-naukri/bpsc-70th-cce-2026)
- [KPSC KAS 2026: Karnataka Administrative Service Guide](https://www.sarkaridarapan.com/sarkari-naukri/kpsc-kas-2026)
- [Subhadra Yojana 2026: Rs. 50,000 for Odisha Women in 5 Years](https://www.sarkaridarapan.com/sarkari-yojana/subhadra-yojana-odisha)
- [UPSC EPFO 2026: Enforcement Officer and Accounts Officer](https://www.sarkaridarapan.com/sarkari-naukri/upsc-epfo-2026)
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
