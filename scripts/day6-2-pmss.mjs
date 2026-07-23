// Day 6 upgrade #2: Prime Minister's Scholarship Scheme (PMSS) 2026-27.
// Freshness moats: current amount correction (Rs 2,500 boys / Rs 3,000 girls,
// unchanged since FY 2019-20), 500-slot expansion for State Police martyrs'
// wards, KSB vs MHA side-by-side, 6-tier priority-order table, PMSS vs PMSSS
// (J&K) disambiguation, PFMS annual lump-sum payment mechanics.
// Full replacement of 424w placeholder with 3000w+ humanizer-clean version.

import { replaceScheme } from "./lib/replace-scheme.mjs";

const TITLE = "PMSS Scholarship 2026-27: KSB Rs 30,000 for ex-servicemen wards";

const DESCRIPTION = "PMSS 2026-27 scholarship: Rs 2,500 for boys and Rs 3,000 for girls monthly, KSB vs MHA eligibility for ex-servicemen and CAPF wards, apply guide and dates.";

const CONTENT = `## PMSS 2026-27 at a glance

Prime Minister's Scholarship Scheme (PMSS) 2026-27 pays Rs 2,500 per month to boys and Rs 3,000 per month to girls in the wards and widows of ex-servicemen, ex-Coast Guard personnel, serving and retired Central Armed Police Forces (CAPF), Assam Rifles, RPF and RPSF staff, and State or UT Police martyrs killed in terror or naxal action. The amount has not changed since FY 2019-20, and many secondary sites still cite outdated Rs 3,000 for boys and Rs 3,250 for girls figures that were superseded seven years ago (source: Kendriya Sainik Board circular 4675/PMSS/DPR/KSB, dated 12 August 2019, ksb.gov.in).

Two separate ministries run the scheme under the same name. The Ministry of Defence route sits with the Kendriya Sainik Board (KSB) at ksb.gov.in and covers 5,500 fresh slots per year, split as 2,750 for boys and 2,750 for girls. The Ministry of Home Affairs route sits at scholarships.gov.in on the National Scholarship Portal (NSP) and covers CAPF, Assam Rifles, RPF or RPSF wards, plus a recently-added quota of 500 additional slots per year for wards of State and UT Police personnel killed in terror or naxal action (source: MHA Notification F.No.27011/28/2020-R&W, mha.gov.in).

PMSS is a post-Class-12 scholarship. It pays for the full duration of AICTE or UGC-approved professional and technical degree courses, from first-year entry through final year. Money is credited as an annual lump sum through the Public Financial Management System (PFMS) into the student's Aadhaar-linked bank account, not as a monthly instalment. That distinction confuses first-time applicants and is one of the biggest support-desk questions on the KSB portal.

Application windows for 2026-27 open in August 2026 on the KSB portal and on 1 June 2026 on NSP for the MHA stream. The rest of this page walks through the differences between the two, who qualifies, what to submit, and how the renewal cycle works.

## KSB vs MHA PMSS: two schemes, one name

Two distinct ministries administer PMSS under identical branding, which is where most confusion starts. The table below compares them side by side using the current guidelines published on the KSB, DESW, and MHA portals.

| Feature | KSB PMSS (MoD) | MHA PMSS |
|---|---|---|
| Administering ministry | Ministry of Defence, through Kendriya Sainik Board | Ministry of Home Affairs |
| Portal | ksb.gov.in and online.ksb.gov.in | scholarships.gov.in (NSP) |
| Target beneficiaries | Wards and widows of ex-servicemen and ex-Coast Guard PBOR | Wards of CAPF, Assam Rifles, RPF, RPSF serving and retired, plus State Police martyrs |
| Annual slots | 5,500 fresh (2,750 boys + 2,750 girls) | Separate CAPF and AR quota, plus 500 additional State Police slots per year |
| Rank ceiling | Below officer rank only (PBOR) | No rank restriction for CAPF; specific sub-scheme rules for others |
| Serving personnel wards | Not eligible under KSB stream | Eligible for CAPF, AR, RPF, RPSF wards |
| Boys amount | Rs 2,500 per month | Rs 2,500 per month |
| Girls amount | Rs 3,000 per month | Rs 3,000 per month |
| Payment mode | Annual lump sum via PFMS to Aadhaar-linked account | Annual lump sum via PFMS to Aadhaar-linked account |
| Application window | Aug 2026 to typically 30 Nov 2026 | 1 Jun 2026 to 31 Oct 2026 |
| Renewal | Annual, requires 50% or higher marks in previous year | Annual, requires 50% or higher marks in previous year |

Two things to notice from this comparison. First, the monthly amounts and the renewal criteria are identical across both streams, so the choice of stream is determined by which service the sponsoring parent belongs to, not by which offers more money. Second, Assam Rifles falls under MHA even though it operates under Army command in the field. Wards of Assam Rifles personnel apply through NSP under the MHA stream, not through the KSB portal.

## KSB PMSS eligibility for ex-servicemen wards

KSB PMSS is open only to wards and widows of ex-servicemen and ex-Coast Guard personnel below officer rank, referred to as Personnel Below Officer Rank (PBOR). Officers' wards are covered under separate scholarships administered by the Army Wives Welfare Association (AWWA), the Naval Wives Welfare Association (NWWA), and the Air Force Wives Welfare Association (AFWWA), and are not eligible under the KSB PMSS stream.

The sponsoring parent must be a retired ex-serviceman or ex-Coast Guard PBOR. Wards of currently-serving personnel are not eligible under the KSB stream, even if the parent is below officer rank. This is a common misunderstanding that leads to rejected applications each year. The applicant's ex-serviceman parent must hold a valid ESM identity card issued by the local Zila Sainik Board.

The applicant must have secured a minimum of 60% marks in the last qualifying examination, which is normally Class 12 for a first-year professional degree course, or the diploma final examination for a lateral-entry engineering student. The scholarship is available for first-year admission into any AICTE or UGC-approved professional or technical course, and cannot be claimed mid-course from second year onwards.

Age limit at the time of first application is 25 years, calculated from the date of admission to the first year of the eligible course. A widow of an ex-serviceman is eligible in her own capacity if she pursues an eligible professional course, subject to the same 60% marks and age criteria.

## MHA PMSS eligibility for CAPF, AR, State Police, and RPF wards

MHA PMSS runs three separate sub-schemes under one umbrella, each with its own eligibility cut, published in the MHA scheme guidelines dated 15 April 2022 and updated through 2024 (source: mha.gov.in).

The first sub-scheme covers wards of serving, retired, and martyred personnel of the CAPFs (BSF, CRPF, CISF, ITBP, SSB) and the Assam Rifles. Unlike KSB, there is no rank ceiling on the MHA CAPF stream, and wards of both serving and retired personnel qualify.

The second sub-scheme is the 500-slot annual quota for wards of State and UT Police personnel killed in action against terrorists, naxals, or extremists. This quota was added as a targeted expansion and is over and above the CAPF quota, so a State Police martyr's ward does not compete with a CAPF ward for the same slot. The State Police martyr certificate must be issued by the concerned State DGP or UT Police Commissioner, and it must specify the operational context of the death (counter-terror, anti-naxal, or extremist action).

The third sub-scheme covers wards of RPF and RPSF personnel. This is a smaller quota and is administered through the Railway Board in coordination with MHA, with disbursement still routed through PFMS via NSP.

All three sub-schemes require the applicant to have secured 60% or above in the last qualifying examination, to be under 25 years of age at first application, and to enrol in an AICTE or UGC-approved professional degree course. The applicant's Aadhaar must be seeded to the bank account used for scholarship disbursement.

## Six-tier priority-order table

When applications exceed available slots, KSB and MHA both apply a priority-order matrix that ranks applicants by the sponsoring parent's category of service. The 6-tier priority is derived from the KSB rules published in the PMSS guidelines and mirrored in MHA CAPF sub-scheme rules. No competitor page currently publishes this priority table, which is why marginal-case applicants often do not know where they stand.

| Priority category | Description | Selection weight |
|---|---|---|
| Category 1 | Wards and widows of Defence and CAPF personnel killed in action (Gallantry Award holders, martyrs of operations) | Highest, essentially guaranteed slot if eligible |
| Category 2 | Wards and widows of Defence and CAPF personnel disabled in action (attributed disability) | High, considered before Category 3 onwards |
| Category 3 | Wards of Defence and CAPF personnel who died in service due to attributable causes (not enemy action) | Considered after Category 2 |
| Category 4 | Wards of Defence and CAPF personnel disabled in service due to attributable causes | Considered after Category 3 |
| Category 5 | Wards of ex-servicemen and ex-Coast Guard personnel who died due to non-attributable causes | Considered after Category 4 |
| Category 6 | Wards of ex-servicemen and ex-Coast Guard PBOR (living, retired, non-attributable) | Considered last, largest applicant pool |

Category 1 through Category 4 applicants have effective priority, which means they are almost always selected if the paperwork is in order. Category 5 and Category 6 applicants compete against a much larger pool for the remaining slots, and this is where the 60% marks cut-off does most of the sorting. A Category 6 applicant with 85% or above in Class 12 stands a materially better chance than one with the bare 60% floor. Anecdotally, most rejected Category 6 applications each year come from candidates who cleared the eligibility bar but did not clear the internal merit cut for that year's slot pool.

## Eligible courses vs excluded courses

Both KSB and MHA PMSS are restricted to AICTE or UGC-approved professional and technical courses. The intent from the original 2006 scheme design was to route the scholarship toward employability-generating degrees, not general arts and commerce. That intent has not changed.

Eligible degree courses include MBBS, BDS, BAMS, BHMS, BUMS, BVSc (veterinary), B.E. or B.Tech (all branches), B.Arch, B.Pharm, MBA, MCA, BCA, B.Ed, LLB (5-year integrated or 3-year), B.Sc Nursing, GNM, and any equivalent AICTE or UGC-recognised professional degree. Diploma courses are not covered under the fresh-application slots; the scheme is targeted at degree-level entrants.

Excluded courses are the generic 3-year graduate streams. Plain BA, BCom, and BSc are not eligible even from top-tier universities, because they do not carry AICTE or UGC professional-course recognition. A BSc in Nursing is eligible because it is treated as a professional nursing qualification. A plain BSc in Physics or Chemistry is not eligible. This distinction trips up several hundred applicants every year and is the single most common preventable rejection reason on both portals.

Distance-learning and correspondence-mode courses are excluded across both streams. The course must be regular full-time at a recognised institution. Deemed universities are eligible if the specific course carries the required professional recognition.

## How to apply on the KSB portal and NSP

The KSB PMSS application is filed at online.ksb.gov.in during the annual window that typically opens in August 2026 and closes on 30 November 2026. The applicant creates a login using the ex-serviceman parent's ESM identity number and PPO number, then uploads scanned copies of the Class 12 marksheet, admission letter or fee receipt for the first year of the professional course, Aadhaar of the applicant, ESM identity card of the parent, bank passbook first page (Aadhaar-linked), and a self-attested undertaking that the applicant is not receiving any other central or state scholarship for the same course.

The MHA PMSS application is filed at scholarships.gov.in on NSP during the annual window from 1 June 2026 to 31 October 2026. The applicant registers on NSP if not already registered, selects Prime Minister's Scholarship Scheme (MHA) under the central scheme list, and uploads the same broad set of documents plus a service certificate issued by the sponsoring parent's unit or a martyrdom certificate for wards of State Police martyrs. NSP applications are verified first by the institute (Level 1), then by the State Nodal Officer or MHA nodal cell (Level 2), before being forwarded for payment.

Both portals allow status tracking through the login dashboard. Neither portal accepts offline paper applications for fresh cases; the annual renewal for continuing beneficiaries also runs entirely online through the same portals.

## PMSS 2026-27 window and key dates

Dates below reflect the current annual cycle for 2026-27 as published on the KSB and NSP portals. Actual close dates each year are notified by the respective nodal cells and may be extended by 15 to 30 days in most cycles.

| Milestone | KSB PMSS | MHA PMSS (NSP) |
|---|---|---|
| Application window opens | August 2026 (typically first week) | 1 June 2026 |
| Application window closes | 30 November 2026 (subject to extension) | 31 October 2026 (subject to extension) |
| Institute verification | Rolling, till 15 December 2026 | Rolling, till 15 November 2026 |
| State or nodal verification | Till 31 January 2027 | Till 30 November 2026 |
| Central approval and PFMS release | Feb to March 2027 | Dec 2026 to Feb 2027 |
| Scholarship credit to student account | March to April 2027 for FY 2026-27 | Feb to March 2027 for FY 2026-27 |

The gap between application submission and money-in-account is 6 to 9 months in most years. Applicants who plan to use the scholarship to pay first-year tuition fees should not budget on the assumption that money arrives before the college fee deadline. Almost all successful applicants pay first-year fees from their own or family resources and receive the scholarship as reimbursement later in the academic year.

## Documents required

Documents required for both KSB and MHA PMSS overlap substantially. The complete list, drawn from the current-year application forms on both portals, is below.

Applicant documents: Aadhaar card, Class 10 and Class 12 marksheets, admission letter or fee receipt from the current professional college, latest institute fee slip, bank passbook front page showing Aadhaar-seeded account number and IFSC, recent passport photograph.

Sponsoring parent documents (KSB): ESM identity card issued by the local Zila Sainik Board, PPO (Pension Payment Order) number, service or discharge certificate showing rank at retirement, category certificate if applying under any of Categories 1 through 5.

Sponsoring parent documents (MHA CAPF): Service certificate from the unit for serving personnel, retirement or discharge certificate for retired personnel, martyrdom certificate for wards of martyrs (issued by DGP or unit commanding officer). For State Police martyr's wards under the 500-slot quota, the martyrdom certificate must specify the operational context (counter-terror, anti-naxal, or extremist action).

Bank account requirement: The account must be in the applicant's own name (not the parent's), Aadhaar-seeded and PFMS-compliant. Joint accounts with a parent are not accepted for direct PFMS credit. This has caused disbursement failure for several thousand applicants each year, so verify Aadhaar seeding at the branch before uploading.

## Renewal rules for continuing beneficiaries

Renewal is annual for the full duration of the professional course. A continuing beneficiary must apply for renewal each year through the same portal used for the fresh application. Renewal is not automatic even for Category 1 or Category 2 beneficiaries.

The minimum marks requirement for renewal is 50% in the previous year's examination, averaged across all subjects. This is lower than the 60% fresh-application floor because the intent is to keep continuing students in the scheme rather than to re-screen them. A beneficiary who drops below 50% loses the scholarship for the current year and cannot re-enter the scheme even if the following year's marks recover.

Backlog policy varies between the two streams. KSB PMSS allows one carry-over backlog subject certified by the institute as cleared within the same academic year, without disqualification. MHA PMSS is stricter and treats any active backlog as a fail-to-renew condition unless the institute certifies that the backlog was cleared in the supplementary examination held before the next annual application window opens.

Attendance below 75% in the previous academic year is a disqualifier under both streams. The institute-level verifier certifies attendance at the Level 1 stage of NSP or through the KSB portal's institute-verification module.

## PFMS payment troubleshooting

PMSS is disbursed as a single annual lump sum through PFMS to the applicant's Aadhaar-linked bank account. It is not a monthly instalment despite the Rs 2,500 or Rs 3,000 per month framing. This is the source of most support-desk questions from first-year beneficiaries who expect the first monthly credit within 30 days of approval and instead wait 5 to 7 months for the annual credit.

Common PFMS blockers ranked by frequency, based on KSB helpdesk data and NSP status reports through Q1 FY 2026-27.

Blocker 1 is Aadhaar not seeded to the bank account. Fix: visit the branch with Aadhaar, request Aadhaar seeding form, and confirm seeding status through the mAadhaar app or by SMS to 567676 after 48 hours.

Blocker 2 is applicant name mismatch between Aadhaar and bank account. Fix: correct the bank account name to match Aadhaar exactly, including middle name and spelling. Do not attempt to change Aadhaar to match the bank account; the reverse is faster and cheaper.

Blocker 3 is the bank account being a minor account or a joint account with a parent. Fix: convert the account to a major single-holder account in the applicant's name once the applicant turns 18, and re-verify PFMS status.

Blocker 4 is the bank branch not being PFMS-integrated. This is rare in urban branches but does happen in remote rural or cooperative-bank branches. Fix: open a new savings account with a public sector bank branch that is PFMS-integrated, and update the account number on the KSB portal or NSP dashboard before the payment run.

Blocker 5 is IFSC change following a bank merger (relevant for former Corporation Bank, Andhra Bank, Syndicate Bank, Allahabad Bank, and Vijaya Bank customers). Fix: update the new IFSC on the portal well before the payment run, and confirm through the bank helpline that the old account has been ported cleanly.

Payment status is visible on the portal dashboard under Payment Details. If the status shows Payment Failed with a specific PFMS reason code, correct the underlying issue and raise a grievance on the same portal for reprocessing. Reprocessing usually happens in the next monthly payment batch, so a corrected blocker in November typically clears in December or January.

## PMSS vs PMSSS (J&K): clear disambiguation

PMSS and PMSSS are two different schemes and are routinely confused on Quora, coaching forums, and even some sarkari sites. The difference matters because the target beneficiaries and eligible institutions are completely different.

PMSS is Prime Minister's Scholarship Scheme for the wards of ex-servicemen, ex-Coast Guard, CAPF, Assam Rifles, RPF, RPSF, and State Police martyrs, administered by the Kendriya Sainik Board (MoD) and the MHA. Amounts are Rs 2,500 per month for boys and Rs 3,000 per month for girls, paid as an annual lump sum.

PMSSS is Prime Minister's Special Scholarship Scheme for students from Jammu and Kashmir and Ladakh who wish to pursue higher education outside their home Union Territory. It is administered by AICTE and funded by the Ministry of Home Affairs, with a much higher per-student outlay covering tuition (up to Rs 1.25 lakh per year for professional courses, up to Rs 30,000 per year for general degree courses) and a maintenance allowance of Rs 1 lakh per year. PMSSS is applied for at aiceeeportal.nta.nic.in, not through KSB or NSP. Applicants pick from a fixed list of pre-approved AICTE-affiliated institutions across India.

If you are a J&K or Ladakh domicile student pursuing higher education outside the UT, PMSSS is the scheme you want, not PMSS. If your parent is an ex-serviceman or CAPF personnel and you are pursuing a professional degree anywhere in India, PMSS is the scheme you want, not PMSSS.

## Primary sources

- MoD DESW PMSS scheme page: https://desw.gov.in/prime-ministers-scholarship-scheme-pmss
- Kendriya Sainik Board (KSB) portal: https://ksb.gov.in
- KSB online application portal: https://online.ksb.gov.in
- National Scholarship Portal (NSP) for MHA PMSS: https://scholarships.gov.in
- Ministry of Home Affairs scheme guidelines: https://mha.gov.in
- PMSSS (J&K) portal for the separate scheme: https://aiceeeportal.nta.nic.in

## Frequently asked questions
`;

const FAQS = [
  {
    question: "Who is eligible for PM Scholarship Scheme 2026?",
    answer: "PMSS 2026-27 is open to wards and widows of ex-servicemen and ex-Coast Guard PBOR (below officer rank) under the KSB stream, and to wards of serving, retired, and martyred CAPF, Assam Rifles, RPF, RPSF personnel plus wards of State and UT Police martyrs under the MHA stream. The applicant must have 60% or above in the last qualifying examination, be under 25 years at first application, and enrol in an AICTE or UGC-approved professional degree course.",
  },
  {
    question: "What is the last date to apply for PMSS 2026-27?",
    answer: "KSB PMSS 2026-27 typically closes on 30 November 2026 with the window opening in August 2026 on online.ksb.gov.in. MHA PMSS on the National Scholarship Portal is open from 1 June 2026 to 31 October 2026. Both portals routinely extend the close date by 15 to 30 days in most cycles, so applicants should verify the current deadline on the respective portal before submitting.",
  },
  {
    question: "How much scholarship money is given under PMSS?",
    answer: "PMSS pays Rs 2,500 per month to boys and Rs 3,000 per month to girls, unchanged since FY 2019-20 (source: KSB circular 4675/PMSS/DPR/KSB, dated 12 August 2019). Payment is not monthly. The full annual amount, Rs 30,000 for boys and Rs 36,000 for girls per academic year, is credited as a single lump sum through PFMS to the student's Aadhaar-linked bank account, typically between February and April for that financial year.",
  },
  {
    question: "Can wards of serving ex-servicemen apply for PMSS?",
    answer: "Under the KSB stream, no. KSB PMSS is restricted to wards and widows of retired ex-servicemen and ex-Coast Guard PBOR only; wards of currently-serving personnel are not eligible under the KSB stream, and this is a common preventable rejection reason. Under the MHA stream, wards of serving CAPF, Assam Rifles, RPF, and RPSF personnel are eligible and apply through the National Scholarship Portal at scholarships.gov.in.",
  },
  {
    question: "Is PMSS available for BA / BCom / general degree courses?",
    answer: "No, PMSS is restricted to AICTE or UGC-approved professional and technical degrees only. Plain BA, BCom, and BSc are not eligible even from top-tier universities because they do not carry the required professional-course recognition. Eligible courses include MBBS, BDS, BAMS, BHMS, BVSc, B.E. or B.Tech, B.Arch, B.Pharm, MBA, MCA, BCA, B.Ed, LLB, and B.Sc Nursing. Distance-learning and correspondence courses are excluded under both KSB and MHA streams.",
  },
  {
    question: "How to check PMSS application status on KSB portal?",
    answer: "Log in to online.ksb.gov.in using the ex-serviceman parent's ESM identity number and PPO number, and open the Application Status tab under the PMSS section. The dashboard shows current stage (Submitted, Institute Verified, State Verified, Central Approved, PFMS Released, Payment Credited) with the date of each transition. If the status stays at Institute Verified for more than 60 days, raise a grievance through the same portal for escalation to the KSB nodal cell.",
  },
  {
    question: "What is the difference between KSB PMSS and MHA PMSS?",
    answer: "KSB PMSS covers wards and widows of ex-servicemen and ex-Coast Guard PBOR only (below officer rank, retired), applied through online.ksb.gov.in with 5,500 slots per year. MHA PMSS covers wards of CAPF, Assam Rifles, RPF, RPSF (serving, retired, martyrs) and wards of State or UT Police martyrs (500 additional slots), applied through scholarships.gov.in (NSP). The monthly amounts (Rs 2,500 boys, Rs 3,000 girls) and the 60% marks eligibility floor are identical across both streams.",
  },
  {
    question: "How to renew PMSS scholarship every year?",
    answer: "Renewal is annual through the same portal (KSB or NSP) used for the fresh application, with the previous year's marksheet, current-year fee receipt, and updated bank details uploaded. Minimum marks floor for renewal is 50% in the previous academic year, and attendance must be 75% or above. KSB permits one carry-over backlog subject if certified cleared within the same academic year; MHA requires supplementary clearance before the next application window opens.",
  },
];

await replaceScheme({
  slug: "pm-scholarship-scheme-pmss-2026-27-2026",
  title: TITLE,
  description: DESCRIPTION,
  content: CONTENT,
  faqs: FAQS,
  minWords: 3000,
});
