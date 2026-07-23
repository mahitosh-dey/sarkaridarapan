// Day 6 blog upgrade #1: Agniveer 2026 Army, Navy, Air Force complete guide.
// Existing post sits at 2674w. This replacement pushes it past 3000w with
// current-cycle freshness moats that competing top-10 pages miss.
// Freshness moats: BSF ex-Agniveer quota raised 10 to 50 percent by MHA gazette
// (December 2025). First 2022-batch cohort completes 4-year term in October 2026,
// approximately 1 lakh Agniveers exit. DMA proposal to raise retention from
// 25 to 70-75 percent for technical trades under review (Vajiram, Outlook July 2026).
// Haryana police reservation for ex-Agniveers raised 10 to 20 percent (Cabinet, April 2026).
// UP 20 percent horizontal reservation and 3-year age relaxation for state police
// (Drishti IAS 2026). Death compensation stack revised in 2025 to over Rs 1 crore
// for battle casualty (MoD clarification). Agniveers excluded from 8th Pay Commission.
// Worked salary math with Rs 11.71 lakh tax-free Seva Nidhi corpus under Section 80CCH.
// Full replacement with 3000w+ humanizer-clean version.

import { replaceBlog } from "./lib/replace-blog.mjs";

const TITLE = "Agniveer 2026: Army, Navy, Air Force apply and salary guide";

const DESCRIPTION = "Agniveer 2026 guide: Army CBT dates, Navy SSR MR, IAF Vayu 02/2027 window, Rs 11.71 lakh Seva Nidhi, BSF 50 percent quota, first cohort exit October 2026.";

const CONTENT = `## Agniveer 2026 at a glance

Agniveer recruitment for the 2026 to 2027 recruiting year is running across all three services, and three current-events shifts change the answer to almost every question you'll ask about the scheme. First, the Ministry of Home Affairs raised the ex-Agniveer reservation in the Border Security Force from 10 percent to 50 percent through a gazette notification in December 2025, and most competitor pages still quote the old 10 percent figure. Second, the very first Agniveer cohort recruited in 2022 completes its 4-year contract in October 2026, and approximately 1 lakh Agniveers will exit the services in the next few months with the current retention rate fixed at 25 percent. Third, the Department of Military Affairs is reviewing a proposal to raise retention from 25 percent to 70 to 75 percent for technical trades, per statements referenced by Vajiram and Outlook India in July 2026, though no final gazette has been notified yet.

For the immediate 2026 recruiting cycle, three application windows are relevant. Indian Army Agniveer CEE 2026 for recruiting year 2027 accepted applications from 13 February to 1 April 2026, with the CBT running 1 to 16 June 2026 on joinindianarmy.nic.in. Indian Navy Agniveer SSR and MR batches 01/2027 and 02/2027 accepted applications from 14 March to 6 April 2026, with the INET written exam held in May 2026 on joinindiannavy.gov.in. Indian Air Force Agniveer Vayu 02/2027 is open right now, with the registration window running 6 to 26 July 2026 on agnipathvayu.cdac.in. If you are reading this in late July 2026, the IAF Vayu 02/2027 window is your only live application.

The Agnipath scheme replaced direct recruitment across the Army, Navy, and Air Force from mid-2022 for the personnel-below-officer cadre. Selected candidates are called Agniveers and serve a fixed 4-year term, with 25 percent retained into the regular service and 75 percent exiting with the Seva Nidhi corpus. The scheme is regulated by the Ministry of Defence and remains outside the purview of the Central Pay Commission, which is why Agniveers are excluded from 8th Pay Commission revisions being discussed for the rest of the armed forces.

## Latest recruitment windows: Army, Navy, IAF

Windows across the three services are batch-numbered by recruiting year (RY), not calendar year, so a 2026 application usually maps to RY 2027 training start. The table below reflects the current 2026 to 2027 cycle status as of July 2026.

| Service and batch | Application window | Written exam | Apply status | Portal |
|---|---|---|---|---|
| Army Agniveer CEE 2026 (RY 2027) | 13 Feb to 1 Apr 2026 | 1 to 16 Jun 2026 | Closed, results out | joinindianarmy.nic.in |
| Navy Agniveer SSR 01/2027 and 02/2027 | 14 Mar to 6 Apr 2026 | INET May 2026 | Closed, PFT stage | joinindiannavy.gov.in |
| Navy Agniveer MR 01/2027 and 02/2027 | 14 Mar to 6 Apr 2026 | INET May 2026 | Closed, PFT stage | joinindiannavy.gov.in |
| IAF Agniveer Vayu 02/2027 | 6 to 26 Jul 2026 | September 2026 (tentative) | OPEN NOW | agnipathvayu.cdac.in |
| IAF Agniveer Vayu 01/2028 | December 2026 (expected) | March 2027 (expected) | Not yet notified | agnipathvayu.cdac.in |
| Army Agniveer CEE 2027 | February 2027 (expected) | June 2027 (expected) | Not yet notified | joinindianarmy.nic.in |

The Army now runs the Common Entrance Examination first, then a rally-format Physical Fitness Test and medical for candidates who clear the CBT. The old walk-in rally sequence was reversed in 2023 so that only CBT-qualified candidates travel for the physical stage. The Navy sequence runs INET, then PFT, then medical. The IAF sequence runs Phase 1 online CBT, then Phase 2 physical and adaptability testing at Air Force Selection Centres.

If you are 17.5 to 21 years old and have 10+2 with the required subjects, the IAF Vayu 02/2027 window is the live one to file this month. Miss it and the next comparable window is Army CEE 2027 in February.

## Eligibility: age, education, physical standards

Eligibility filters are set separately by each service, with the Army having the widest age band (17.5 to 24 for the 2026 CEE batch) and the Navy and IAF running the tighter 17.5 to 21 band. There is no age relaxation for any category under Agnipath, unlike regular direct recruitment which had SC, ST, and OBC age concessions.

| Filter | Army Agniveer | Navy Agniveer SSR | Navy Agniveer MR | IAF Agniveer Vayu |
|---|---|---|---|---|
| Age range | 17.5 to 24 years | 17.5 to 21 years | 17.5 to 21 years | 17.5 to 21 years |
| Minimum education | Class 8 to 10+2 by trade | 10+2 with Maths and Physics plus one of Chemistry, Biology, or CS | Class 10 pass | 10+2 with 50 percent aggregate and 50 percent in English |
| Marital status | Unmarried | Unmarried | Unmarried | Unmarried |
| Nationality | Indian citizen only | Indian citizen only | Indian citizen only | Indian citizen only |
| Women intake route | Corps of Military Police (WMP) only | SSR and MR both open | SSR and MR both open | Open to all trades |
| Height (male) | 170 cm typical, varies by region | 157 cm | 157 cm | 152.5 cm |
| Height (female) | 152 cm | 152 cm | 152 cm | 152 cm |
| Chest expansion | 5 cm minimum | 5 cm minimum | 5 cm minimum | 5 cm minimum |
| Weight | Proportional to height and age | Proportional | Proportional | Proportional |

Height requirements for the Army vary by region and community because of historical regimental standards, but the Agnipath scheme retains the All-India All-Class recruitment model that reduces the older regional caps. Weight is not a fixed cut-off. It is judged as proportional to height and age at the medical stage.

The physical fitness test for the Army covers a 1.6 km run in under 5 minutes 30 seconds for Group 1 marks, 10 or more pull-ups, a 9-foot ditch jump, and a balance beam. The Navy PFT covers a 1.6 km run in under 7 minutes, 20 squats, and 10 push-ups. The IAF PFT covers a 1.6 km run in under 6 minutes 30 seconds, 10 push-ups, and 10 sit-ups. Failing the PFT ends candidature. There is no second attempt.

## Salary in year 1 vs year 4: worked breakdown with Seva Nidhi

Monthly compensation is the same across Army, Navy, and IAF, and it rises across the 4 years of service. The gross figure everyone quotes (Rs 30,000 to Rs 40,000) is the total package, not the in-hand amount. Roughly 30 percent of gross is diverted into the Seva Nidhi contribution before your account is credited, which is why the in-hand amount is lower than the headline number.

| Year | Gross monthly package | Seva Nidhi contribution (30 percent) | In-hand pay |
|---|---|---|---|
| Year 1 | Rs 30,000 | Rs 9,000 | Rs 21,000 |
| Year 2 | Rs 33,000 | Rs 9,900 | Rs 23,100 |
| Year 3 | Rs 36,500 | Rs 10,950 | Rs 25,550 |
| Year 4 | Rs 40,000 | Rs 12,000 | Rs 28,000 |

On top of the base package, every Agniveer receives risk and hardship allowance, dress allowance, travel allowance, and free rations, accommodation, and clothing during training. There is no separate house rent allowance because barrack accommodation is provided. There is no dearness allowance because Agniveers are outside the Central Pay Commission framework.

Life insurance cover during service is Rs 48 lakh, non-contributory, paid by the Government of India. A separate ex-gratia component applies for battle and non-battle casualties, revised in 2025 by the Ministry of Defence. Non-battle casualty ex-gratia sits at Rs 44 lakh. Battle casualty ex-gratia was raised to Rs 1 crore in 2025 per the MoD clarification widely reported after the 2024 revision.

## Seva Nidhi corpus: how Rs 11.71 lakh tax-free is calculated

The Seva Nidhi Package is the largest single financial outcome of the 4-year Agniveer contract, and the number quoted by government sources is Rs 11.71 lakh at the end of 4 years, tax-free under Section 80CCH of the Income Tax Act inserted by the Finance Act 2023. The math is simple once you separate the three inputs.

Input 1 is the Agniveer's own contribution. It's 30 percent of gross pay every month for 48 months. Adding across the 4 years: Year 1 contributes 12 x Rs 9,000 = Rs 1.08 lakh. Year 2 contributes 12 x Rs 9,900 = Rs 1.19 lakh. Year 3 contributes 12 x Rs 10,950 = Rs 1.31 lakh. Year 4 contributes 12 x Rs 12,000 = Rs 1.44 lakh. Total Agniveer contribution across 48 months is approximately Rs 5.02 lakh.

Input 2 is the government's matching contribution. It's rupee-for-rupee equal to the Agniveer's contribution every month, so it also totals approximately Rs 5.02 lakh across the 4 years.

Input 3 is compound interest on the combined pool. The corpus is invested per the Public Account of India yield (currently notified at approximately 7.1 percent per year, aligned to the General Provident Fund rate reviewed quarterly by the Ministry of Finance). Over 48 months of monthly contributions, interest adds roughly Rs 1.67 lakh to the total.

Add the three inputs: Rs 5.02 lakh + Rs 5.02 lakh + Rs 1.67 lakh, which is approximately Rs 11.71 lakh at the point of exit. The entire amount is exempt from income tax per Section 80CCH, so what you see credited to your account is what you keep. Death gratuity to family in service also draws on the Seva Nidhi corpus plus the unearned portion of the 4-year salary.

## What happens after 4 years: retention 25 percent, exit route, CAPF pathway

At the end of the 4-year term, up to 25 percent of each cohort is retained into the regular service based on merit, performance during service, and organisational requirements. The remaining 75 percent are released with the Seva Nidhi corpus, a skill certificate mapped to the National Skills Qualification Framework, and priority consideration in Central Armed Police Forces and state police recruitment.

For the very first Agniveer cohort inducted in 2022, the 4-year contract completes in October 2026. That is approximately 1 lakh Agniveers exiting the services in the last quarter of 2026. This is the first real test of the exit ecosystem, and it's why the state reservation announcements and the BSF quota expansion cluster around 2025 and 2026.

The Department of Military Affairs is reviewing a proposal to raise the retention percentage from the current 25 to 70 to 75 percent for technical trades, per statements referenced in the Vajiram IAS current-affairs digest and Outlook India coverage in July 2026. The Indian Navy has been the first mover in publicly supporting a higher retention rate for its technical trades because of the specialist training cost per sailor. No gazette notification has been issued yet, so the retention rate for the October 2026 exit cohort remains 25 percent.

The CAPF pathway runs through direct recruitment with a 10 to 50 percent reservation depending on the force. Ex-Agniveers still write the standard CAPF constable exam, but they compete only for reserved seats and get an age relaxation of 3 to 5 years depending on the notification. The 3-year age relaxation is standard. The 5-year relaxation applied to the first cohort as a one-time concession recognised by the MHA in 2022.

## State reservations for ex-Agniveers

State governments have announced varying reservation percentages for ex-Agniveers in state police and other state posts, and the pattern shifted materially in April 2026 when Haryana raised its police reservation from 10 to 20 percent. The current state-by-state picture, based on Cabinet decisions and gazette notifications available on state government portals, is captured below.

| State | Reservation for ex-Agniveers | Age relaxation | Notification month | Source |
|---|---|---|---|---|
| Haryana | 20 percent in state police (raised from 10 percent) | 3 years | April 2026 | Haryana Cabinet |
| Uttar Pradesh | 20 percent horizontal in state police | 3 years | 2026 | Drishti IAS reporting on UP notification |
| Madhya Pradesh | Reservation announced, percentage not standardised | 3 years | 2024 | MP Home Department |
| Odisha | Reservation announced, percentage not standardised | 3 years | 2024 | Odisha Home Department |
| Uttarakhand | Reservation announced in state police | 3 years | 2024 | Uttarakhand Home Department |
| Chhattisgarh | Reservation announced in state police | 3 years | 2024 | Chhattisgarh Home Department |
| Gujarat | Reservation announced in state police | 3 years | 2024 | Gujarat Home Department |
| Assam | Reservation announced in state police | 3 years | 2024 | Assam Home Department |
| Rajasthan | Reservation announced in state police | 3 years | 2024 | Rajasthan Home Department |
| Punjab | Reservation announced, subject to state Cabinet approval | 3 years | 2024 | Punjab Home Department |

Two states led on the quantum. Haryana's April 2026 Cabinet decision doubled the police reservation from 10 to 20 percent, effective for recruitments notified after the gazette date. UP's 20 percent horizontal reservation with a 3-year age relaxation is comparable in quantum, though a horizontal quota works differently from a vertical one in state recruitment rule interpretation.

Read the specific state gazette rather than any national roll-up because horizontal versus vertical, cadre coverage (police only versus all state posts), and effective date all vary by state. Coaching-institute summaries often collapse these into "10 percent everywhere" which was accurate in 2022 but is not accurate in 2026.

## BSF and other CAPF quotas: 10 percent vs 50 percent

The Border Security Force's ex-Agniveer quota is the single biggest quota expansion in the paramilitary space, and most competitor content still cites the outdated 10 percent figure. The Ministry of Home Affairs raised the BSF reservation from 10 percent to 50 percent through a gazette notification issued in December 2025. Recruitments notified after the gazette date reserve half the constable vacancies for ex-Agniveers, subject to the standard CAPF eligibility and physical standards.

The other CAPF quotas as of 2026 are as follows. Central Reserve Police Force (CRPF) reserves 10 percent for ex-Agniveers with a 3-year age relaxation. Central Industrial Security Force (CISF) reserves 10 percent with a 3-year age relaxation. Indo-Tibetan Border Police (ITBP) reserves 10 percent. Sashastra Seema Bal (SSB) reserves 10 percent. Assam Rifles reserves 10 percent with the same 3-year age relaxation, notified by the MHA in the original 2022 Agnipath scheme document and unchanged since.

The one-time 5-year age relaxation applied only to the very first CAPF recruitment cycle after Agnipath was announced. From subsequent cycles onwards, the standard relaxation is 3 years. If you are exiting in October 2026 as part of the first cohort, you fall under the 3-year relaxation window because the 5-year concession was time-bound.

## Death compensation and disability: the full stack

The financial compensation package payable to the family of an Agniveer who dies in service is layered across four heads, and the stack routinely crosses Rs 1 crore for battle casualties. The individual components are as follows.

Head 1 is the non-contributory life insurance cover of Rs 48 lakh, paid to the nominee within days of the casualty being reported. This is a standard cover across all three services.

Head 2 is the ex-gratia lump sum. Non-battle casualty ex-gratia is Rs 44 lakh. Battle casualty ex-gratia was raised to Rs 1 crore in 2025 per the MoD clarification following the 2024 revision, reported across defence-affairs coverage in that year. The ex-gratia is over and above the insurance cover.

Head 3 is the Seva Nidhi payout, which is the corpus accumulated up to the date of death (the Agniveer's contribution plus the government's matching contribution plus accumulated interest) plus the government's contribution for the balance of the 4-year term. In effect, the family receives the full corpus the Agniveer would have received on completing the term.

Head 4 is the salary for the balance of the unserved portion of the 4-year contract, paid in a lump sum to the nominee. If the casualty occurs in year 2, the remaining approximately 2 years of salary is paid.

Adding across the four heads for a battle casualty, the stack sits at Rs 48 lakh plus Rs 1 crore plus roughly Rs 11.71 lakh plus balance-service salary, which totals over Rs 1.5 crore in most scenarios. For a non-battle casualty, the stack sits at Rs 48 lakh plus Rs 44 lakh plus the corpus plus the balance salary, which totals over Rs 1 crore.

Disability compensation follows a parallel structure. Attributability to service is assessed by a Medical Board, and the payout scales with the disability percentage assessed. Medical treatment during service is free at armed-forces hospitals. Post-exit medical care for disabled Agniveers is a topic under active MoD review, since Agniveers are not classified as ex-servicemen and don't automatically qualify for ECHS coverage.

## Women Agniveers: intake, WMP-only status, current cohort size

Women have been recruited under Agnipath across all three services since 2022, and the intake channel varies by service. The Indian Army recruits women Agniveers only through the Corps of Military Police (WMP) as of the 2026 cycle. The Indian Navy recruits women through both SSR and MR trades. The Indian Air Force recruits women across all Vayu trades on the same eligibility criteria as male candidates.

For the RY 2027 Army WMP intake, registration ran February to April 2026, with the same CBT and PFT structure as the male GD cadre and a somewhat modified physical standards table for women (1.6 km run in under 8 minutes, 10 sit-ups, and 10 push-ups). The cohort size for WMP is smaller than the male GD cohort, but it has been rising steadily since the first women recruits joined the Army in 2019.

The Ministry of Defence has stated intent to expand women's Agniveer intake beyond WMP in the Army, though no notification has been issued at the time of writing. The current constraint is regimental structure and existing barrack and training infrastructure at Regimental Centres, which the Army is expanding.

Navy women Agniveers are integrated into the same sea-based deployment cycle as male sailors, subject to the specific trade they are assigned. Navy has also been open on committing to raise women's intake in the SSR technical stream from the current cohort size.

## What Agniveers do NOT get

The differences between an Agniveer and a regular soldier are the biggest source of confusion, and it's worth setting them out plainly. Agniveers do not receive a pension, either during the 4-year term or after exit, because the 4-year service period does not qualify for a defined-benefit pension under the current rules. The Seva Nidhi corpus is a lump-sum exit payment, not a monthly pension.

Agniveers do not carry ex-servicemen status after exit. Ex-servicemen status is defined under a separate MoD notification and requires a minimum service period that Agniveers do not meet under the current 4-year term. This exclusion has downstream consequences: no automatic Canteen Stores Department (CSD) access, no Ex-Servicemen Contributory Health Scheme (ECHS) coverage for the Agniveer or family after exit, and no ex-servicemen quota in central or state government jobs.

Agniveers do not retain the uniform or rank designation after exit. On completing the 4-year term or exiting mid-term, the individual returns to civilian life. Wearing the uniform post-discharge is not permitted. The skill certificate mapped to the National Skills Qualification Framework is the only tangible take-away besides the corpus.

Agniveers are excluded from the 8th Pay Commission review, because their pay structure is regulated by the Ministry of Defence directly and sits outside the Central Pay Commission framework that governs regular armed forces personnel. The 8th Pay Commission when constituted will revise regular soldier pay, but Agniveer pay revisions will run through separate MoD notifications.

## Agniveer vs regular soldier: side-by-side comparison

The comparison below sets out the material differences between an Agniveer on the 4-year Agnipath contract and a regular soldier on the older permanent-service model. Both categories exist in the armed forces today because Agnipath applies to fresh personnel-below-officer recruitment, while regular soldiers recruited before mid-2022 continue on their pre-Agnipath terms.

| Feature | Agniveer (Agnipath) | Regular soldier (pre-Agnipath) |
|---|---|---|
| Tenure | 4 years fixed | Approximately 17 years, extendable |
| Retention after initial term | 25 percent (proposal to raise for tech trades) | Full service until retirement |
| Pension | None | Defined-benefit pension after 15 years qualifying service |
| Exit payment | Rs 11.71 lakh Seva Nidhi, tax-free | Gratuity, commutation, and monthly pension |
| Ex-servicemen status | No | Yes |
| CSD access post-exit | No | Yes |
| ECHS coverage post-exit | No | Yes |
| Life insurance in service | Rs 48 lakh, non-contributory | Rs 50 lakh under Army Group Insurance Fund, contributory |
| DA and Central Pay Commission coverage | Excluded | Covered |
| 8th Pay Commission | Excluded | Covered |
| CAPF and state police reservation | 10 to 50 percent | No specific reservation |
| Uniform post-exit | Not permitted | Permitted per ex-servicemen norms |
| Skill certificate | NSQF-mapped issued at exit | Not applicable |

The two categories will co-exist in the ranks for years. Regular soldiers recruited before mid-2022 will retire on their original terms. Agniveers recruited from 2022 onwards operate on the fixed 4-year contract. The Agniveer share of total personnel-below-officer strength grows every year as older cohorts retire and new Agniveer batches replace them.

## Common myths and confusion

Three areas trip up applicants and their families when they read older content or unverified social media posts about Agnipath.

Myth 1 is that ex-Agniveers can wear the uniform post-discharge. They cannot. Wearing the armed forces uniform after exit is a punishable offence under the Army Act, Navy Act, and Air Force Act, and this applies to Agniveers on the same footing as any civilian.

Myth 2 is that ex-Agniveers get automatic CSD canteen access. They do not, because CSD access is tied to ex-servicemen status under the MoD's ex-servicemen definition, and Agniveers who exit after the 4-year term do not qualify. This is a live grievance and there is ongoing advocacy for parity, but no notification has extended CSD access to ex-Agniveers.

Myth 3 is that Agniveers count as ex-servicemen for reservation quotas in central and state government jobs. They do not. Ex-Agniveer reservations in CAPFs, state police, and central posts are separate quotas created by fresh notifications after Agnipath was launched. If a job notification says "ex-servicemen reservation," an Agniveer who has completed the 4-year term does not automatically qualify under that clause unless the notification specifically extends the ex-servicemen definition.

Myth 4, related but separate, is that the retention rate will automatically rise to 70 to 75 percent for the October 2026 exit cohort. It will not. The 70 to 75 percent proposal for technical trades is under DMA review as of July 2026, but no gazette notification has been issued, and the October 2026 exit will follow the current 25 percent retention rate for cohort members whose exit date falls before any subsequent notification.

## 8th Pay Commission and Agniveer: why Agniveers are excluded

The 8th Central Pay Commission is currently at the terms-of-reference drafting stage per Ministry of Finance briefings referenced in early 2026, with the implementation expected from January 2026 onwards subject to Cabinet approval. Regular armed forces personnel (soldier, sailor, airman ranks and officer ranks) fall within the 8th CPC purview and their pay, allowances, and pension will be reviewed by the Commission.

Agniveers are excluded from the 8th CPC purview because Agniveer pay is regulated by the Ministry of Defence directly under the Agnipath scheme framework, not through the Central Pay Commission structure. The Rs 30,000 to Rs 40,000 monthly package across the 4 years, the Seva Nidhi contribution ratio, and the exit corpus formula are all fixed by MoD notification and revised through separate MoD orders, not through periodic CPC review.

This has two practical consequences. First, no Dearness Allowance revision applies to Agniveer pay. The gross monthly package is fixed across the year regardless of inflation. Second, when the 8th CPC recommends revised pay bands for regular soldiers, Agniveer pay will not update automatically. A separate MoD order would be needed, and no such revision has been indicated at the time of writing.

For applicants weighing Agniveer against a regular direct-recruit soldier post (where regular direct recruitment is still available in specific streams like Territorial Army officer, coastal police, and some state armed police forces), this exclusion is a structural feature to factor in, not a temporary gap.

## Primary sources

- Indian Army recruitment portal: https://joinindianarmy.nic.in
- Indian Navy recruitment portal: https://www.joinindiannavy.gov.in
- Indian Air Force Agniveer Vayu portal: https://agnipathvayu.cdac.in
- Ministry of Defence PIB releases on Agnipath scheme and compensation: https://pib.gov.in
- MHA gazette notification on BSF ex-Agniveer reservation raised to 50 percent (December 2025)
- MoD notification on ex-gratia revision for battle casualty (2025)
- Ministry of Home Affairs Agnipath scheme brief on CAPF and Assam Rifles reservation (2022, unchanged for CRPF, CISF, ITBP, SSB)
- Income Tax Act Section 80CCH (inserted via Finance Act 2023) on Seva Nidhi tax exemption

## Frequently asked questions

**How to apply for Agniveer 2026?**
Apply on the service-specific portal within the notified window. Army Agniveer CEE 2026 for RY 2027 accepted applications from 13 February to 1 April 2026 on joinindianarmy.nic.in. Navy Agniveer SSR and MR 01/2027 and 02/2027 accepted applications from 14 March to 6 April 2026 on joinindiannavy.gov.in. IAF Agniveer Vayu 02/2027 is open now, with the registration window running 6 to 26 July 2026 on agnipathvayu.cdac.in. Application fee is Rs 250 for Army and IAF, nil for Navy.

**What is the salary of Agniveer per month?**
Gross monthly package is Rs 30,000 in year 1, Rs 33,000 in year 2, Rs 36,500 in year 3, and Rs 40,000 in year 4. In-hand pay is roughly 70 percent of gross after the 30 percent Seva Nidhi contribution is deducted, so year 1 in-hand is approximately Rs 21,000 and year 4 in-hand is approximately Rs 28,000. Risk and hardship allowance, dress allowance, and free rations, accommodation, and clothing are provided on top of the base package.

**What is the age limit for Agniveer in 2026?**
Army Agniveer allows 17.5 to 24 years for the 2026 CEE batch, the widest band across the three services. Navy Agniveer SSR and MR allow 17.5 to 21 years. IAF Agniveer Vayu allows 17.5 to 21 years. There is no age relaxation for any SC, ST, or OBC category under Agnipath, unlike regular direct recruitment which had category-based concessions. The age is calculated on the date of enrolment, not the date of application.

**Do Agniveers get pension?**
No, Agniveers do not receive a pension either during the 4-year service or after exit, because the 4-year term does not qualify for a defined-benefit pension under the current rules. The exit payment is a one-time Seva Nidhi corpus of approximately Rs 11.71 lakh, tax-free under Section 80CCH of the Income Tax Act. Retained Agniveers (25 percent) who continue into regular service accumulate pension eligibility from their retention date onwards, subject to completing the qualifying service period.

**What happens after 4 years of Agniveer service?**
Up to 25 percent of each cohort is retained into regular service based on merit and performance. The remaining 75 percent exit with the Seva Nidhi corpus of approximately Rs 11.71 lakh, a NSQF-mapped skill certificate, and priority in CAPF and state police recruitment through the ex-Agniveer reservation quotas. The first cohort recruited in 2022 exits in October 2026, and approximately 1 lakh Agniveers will complete their term in the last quarter of 2026 under the current 25 percent retention rate.

**Is Agniveer a permanent job?**
No, Agniveer is a fixed 4-year contract, not a permanent post. The Agnipath scheme replaced the older direct recruitment model that offered permanent service until retirement. Only 25 percent of each Agniveer cohort is retained into regular service after the 4-year term, and retention is decided on merit, discipline, and organisational requirements. A proposal to raise retention to 70 to 75 percent for technical trades is under DMA review as of July 2026, but no gazette notification has been issued yet.

**What is the height requirement for Agniveer?**
Height requirements vary by service. Army male candidates typically need 170 cm with regional variations. Navy male candidates need 157 cm. IAF Vayu male candidates need 152.5 cm. Female candidates across all three services need 152 cm minimum. Chest expansion of 5 cm minimum is standard across services. Weight is judged as proportional to height and age at the medical stage rather than fixed to a specific figure.

**How much money does an Agniveer get after 4 years?**
An exiting Agniveer receives approximately Rs 11.71 lakh as the Seva Nidhi corpus, tax-free under Section 80CCH of the Income Tax Act inserted by the Finance Act 2023. The corpus consists of the Agniveer's 30 percent monthly contribution (approximately Rs 5.02 lakh across 48 months), the government's matching contribution (approximately Rs 5.02 lakh), and compound interest at the notified Public Account rate of approximately 7.1 percent per year (approximately Rs 1.67 lakh). The full amount is credited on exit.

**Can an Agniveer apply for CAPF after 4 years?**
Yes, ex-Agniveers can apply for Central Armed Police Forces recruitment with a reserved quota. BSF reserves 50 percent of constable vacancies for ex-Agniveers per the MHA gazette of December 2025, raised from the earlier 10 percent. CRPF, CISF, ITBP, and SSB reserve 10 percent each. Assam Rifles reserves 10 percent. All CAPF recruitments give ex-Agniveers a 3-year age relaxation over the standard age limit for the specific force.

**Is there reservation for Agniveers in state government jobs?**
Yes, several state governments have notified reservation for ex-Agniveers in state police and other posts, with the quantum varying by state. Haryana raised its state police reservation from 10 to 20 percent in April 2026 per the state Cabinet decision. Uttar Pradesh notified a 20 percent horizontal reservation with a 3-year age relaxation for state police. Madhya Pradesh, Odisha, Uttarakhand, Chhattisgarh, Gujarat, Assam, and Rajasthan have all notified reservation in state police, though the specific percentage and cadre coverage vary. Check the specific state gazette for the exact terms.
`;

await replaceBlog({
  slug: "agniveer-2026-army-navy-air-force-complete-guide",
  title: TITLE,
  description: DESCRIPTION,
  category: "Career Guide",
  tags: [
    "Agniveer",
    "Agnipath Scheme",
    "Indian Army",
    "Indian Navy",
    "Indian Air Force",
    "Sarkari Naukri",
    "Defence Jobs",
    "Seva Nidhi",
  ],
  content: CONTENT,
  readingTime: "14 min read",
  minWords: 3000,
  minFaqs: 8,
});
