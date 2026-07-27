// Day 7 update #2: Aapki Beti Yojana (Rajasthan) rewrite.
// Existing 354-word page replaced with 3000w+ deep guide covering full eligibility,
// Rs 26,800 cumulative math, Shala Darpan BSP portal walkthrough, five BSF scheme
// comparison table, five rejection-reason diagnostic, and the "Rs 2,100 unchanged
// since 2013" editorial angle with Rajasthan Budget 2026-27 (11 Feb 2026, Diya
// Kumari) context. Sarkari-vertical vacuum: SarkariResult/FreeJobAlert/SarkariExam/
// JobRiya/NaukriHub have NO dedicated page. Primary sources: rajshaladarpan.rajasthan.gov.in,
// wcd.rajasthan.gov.in, rajras.in budget coverage.

import { replaceScheme } from "./lib/replace-scheme.mjs";

const CONTENT = `## Aapki Beti Yojana 2026 at a glance

Aapki Beti Yojana is a Rajasthan state scholarship that pays Rs 2,100 per year to girls in Classes 1 to 8 and Rs 2,500 per year to girls in Classes 9 to 12, provided the girl is studying in a government school in Rajasthan, her family holds a BPL card, and at least one of her parents (father or mother) has passed away. The scheme is administered by the Balika Shiksha Foundation (BSF), Rajasthan, a state government body established on 30 March 1995 under the Department of School Education to run girl-child scholarships and awards.

Across 12 years of schooling, a single eligible girl can receive a cumulative Rs 26,800 through this one scheme, calculated as 8 years times Rs 2,100 (Classes 1 to 8) plus 4 years times Rs 2,500 (Classes 9 to 12). That's not life-changing money, but for a single-parent BPL household in a district like Barmer, Jaisalmer, or Dungarpur, it can be the difference between a girl staying in school and dropping out to help at home. The scheme sits inside a wider BSF portfolio that also includes Mukhyamantri Rajshri Yojana, Gargi Puraskar, Kali Bai Bhil Medhavi Chatra Scooty, and Balika Protsahan Yojana, and it works best when read alongside those.

Three things about Aapki Beti Yojana 2026 that most top-ranking pages either miss or bury. First, the benefit amount hasn't been revised since 2013, which means the real value of the Rs 2,100 and Rs 2,500 grants has dropped sharply against 12+ years of school-cost inflation. Second, Jan Aadhaar seeding is now compulsory for the transfer, a procedural tightening that has caused a lot of rejections in the 2024 and 2025 cycles. Third, no dedicated page on SarkariResult, FreeJobAlert, SarkariExam, JobRiya, or NaukriHub covers this scheme in depth, which is unusual for a Rajasthan girl-child scheme with lakhs of potential beneficiaries.

## Who qualifies: eligibility for Aapki Beti Yojana

The eligibility rules are tight and specific. All four conditions must be met at the same time for a girl to be considered for the annual grant.

1. The applicant is a girl student. Boys are not eligible under Aapki Beti; they are covered by separate BSF and Department of Social Justice and Empowerment schemes.
2. She is enrolled in a government school in Rajasthan. Private schools, aided private schools, and unaided schools are outside the scope of this specific scheme. Government schools include Rajasthan state government schools, government-aided model schools, Kasturba Gandhi Balika Vidyalayas (KGBV) that are state-run, and Rajkiya Adarsh schools.
3. Her family holds a valid Below Poverty Line (BPL) ration card issued by the Rajasthan Food and Civil Supplies Department. Antyodaya Anna Yojana (AAY) card holders are treated as BPL for this scheme. State BPL (SBPL) card holders should verify with the school principal because inclusion has varied by year.
4. At least one of her parents is deceased. This is the single-parent-household condition. If both parents are alive, the girl is not eligible under Aapki Beti even if she meets the other three conditions. She may still qualify under Mukhyamantri Rajshri Yojana, Gargi Puraskar, or Balika Protsahan Yojana depending on birth date, class, and marks.

Additional procedural conditions. The girl must be a resident of Rajasthan. She must have a Jan Aadhaar number linked to the family (Jan Aadhaar seeding has become compulsory for the Direct Benefit Transfer). She must have her own bank account or a joint account with the surviving parent or legal guardian, with the IFSC code and account number verified. Attendance in the school year must be at least 50 percent for the renewal to trigger from the second year onward.

Not eligible under Aapki Beti: girls in private schools, girls above the poverty line, girls with both parents alive (even if the family income is very low), and girls who have dropped out of government school for more than one academic year without a documented medical or family reason.

## Benefit amount: Rs 2,100 for primary, Rs 2,500 for secondary

The amount an eligible girl receives depends on the class she is in during that academic year. The scholarship is paid annually, once per academic year, directly to her bank account via DBT.

| Class band | Annual amount | Years covered | Cumulative for this band |
|---|---|---|---|
| Class 1 to 8 (Primary and Upper Primary) | Rs 2,100 | 8 years | Rs 16,800 |
| Class 9 to 12 (Secondary and Senior Secondary) | Rs 2,500 | 4 years | Rs 10,000 |
| Total across Class 1 to Class 12 | | 12 years | Rs 26,800 |

A girl who enrols in Class 1 with a valid eligibility record and continues to Class 12 in a Rajasthan government school without a drop-out year and without falling below the 50 percent attendance threshold can receive Rs 26,800 total under Aapki Beti Yojana over the full 12-year school career. The payment is annual, not monthly, and lands in the bank account typically between October and March of each academic year once the school has uploaded the verified beneficiary list to the Shala Darpan BSP portal.

The scheme is not means-tested beyond the BPL condition. Whether the family's monthly income is Rs 500 or Rs 5,000, the payment is the same. This is a flat grant, not a graduated one.

## Worked example: Priya, Class 9, Barmer, father deceased

Priya is a 14-year-old girl studying in Class 9 at a Rajkiya Uchcha Madhyamik Vidyalaya in Barmer district. Her father, a marginal farmer, passed away in 2023. Her mother works as a MGNREGA labourer and holds a BPL card issued in 2019. Priya has a Jan Aadhaar number linked to the family and a bank account in her name with State Bank of India, Barmer branch.

Her school principal downloads the Aapki Beti application form from the Shala Darpan Balika Shiksha Portal (BSP) at rajshaladarpan.rajasthan.gov.in/SD4/BSP/Home/HomePage.aspx, fills in the school details, and asks Priya's mother to bring the death certificate of the father, the BPL card, Priya's Aadhaar, Jan Aadhaar, bank passbook first page, and a passport photo. The principal verifies all documents against the originals, uploads the scanned copies to the BSP portal, and submits the online application before the annual cutoff.

The application is verified at the block education office level and then at the district education office (DEO) level. Once approved, the payment of Rs 2,500 for Class 9 lands in Priya's SBI account via DBT, typically 4 to 6 months after submission. In Class 10 (Rs 2,500), Class 11 (Rs 2,500), and Class 12 (Rs 2,500), the renewal is auto-generated by the school subject to Priya maintaining at least 50 percent attendance. Cumulative benefit from Class 9 to Class 12 for Priya: Rs 10,000.

If Priya had joined the scheme in Class 1 (with the same eligibility conditions met from that age), her cumulative benefit from Class 1 to Class 12 would be Rs 26,800, of which Rs 16,800 covers primary (Class 1 to 8) and Rs 10,000 covers secondary (Class 9 to 12).

## How to apply on Shala Darpan BSP portal (step by step)

Aapki Beti Yojana applications are filed by the school principal on behalf of the eligible girl through the Shala Darpan Balika Shiksha Portal (BSP). Individual online applications by families are not accepted; the school is the anchor. Parents whose daughters they believe are eligible should approach the school principal or the class teacher directly.

Step 1. The parent or guardian collects the documents: death certificate of the deceased parent (issued by the local municipal or panchayat authority), BPL ration card, Aadhaar card of the girl, Jan Aadhaar card of the family, bank passbook first page of the girl (with IFSC and account number visible), one passport-size photograph of the girl, and the school ID card or bonafide certificate.

Step 2. The school principal logs in to rajshaladarpan.rajasthan.gov.in/SD4/BSP/Home/HomePage.aspx using the school's registered UDISE code and password. The principal opens the Aapki Beti Yojana module inside the Balika Shiksha Portal.

Step 3. The principal enters the girl's basic details (SR number, name, father's or mother's name as applicable, date of birth, class, section, category), uploads scans of the documents listed in Step 1, and marks the eligibility flags (BPL, single-parent, government school).

Step 4. The principal submits the application. The system generates an application reference number that the school records in the register and shares with the parent.

Step 5. Verification happens at two levels. First, the Block Elementary Education Officer (BEEO) or the Panchayat Samiti Education Officer verifies the school-level data. Second, the District Education Officer (Elementary or Secondary, depending on the class) approves the beneficiary list. Rejections at either stage are flagged back to the school for correction.

Step 6. Approved beneficiaries are pushed to the DBT sanction list. Payment is processed through the state treasury and lands in the girl's bank account via NPCI DBT. Standard turnaround is 4 to 6 months from application to payment.

Step 7. Renewal for the next academic year is generated automatically by the school on the BSP portal, subject to the girl maintaining at least 50 percent attendance and continuing enrolment in a Rajasthan government school. Fresh documents are not required at renewal unless the BPL card, bank details, or family status has changed.

## BSF girl-child schemes: Aapki Beti vs Rajshri vs Gargi vs Kali Bai Bhil vs Balika Protsahan

The Balika Shiksha Foundation runs five girl-child schemes that most families confuse with each other. This table breaks the differences down.

| Scheme | Trigger | Amount | Target girl | Payment schedule |
|---|---|---|---|---|
| Aapki Beti Yojana | Enrolment in Rajasthan govt school + BPL + single-parent household | Rs 2,100 (Class 1-8), Rs 2,500 (Class 9-12) | Any BPL girl who has lost father OR mother | Annual, during school career |
| Mukhyamantri Rajshri Yojana | Girl child born in Rajasthan on or after 1 June 2016 | Rs 50,000 cumulative in 6 instalments (birth, 1 year, Class 1, Class 6, Class 10, Class 12) | Any girl born in Rajasthan (subject to institutional delivery and vaccination conditions) | Instalment-based, birth to Class 12 |
| Gargi Puraskar | Class 10 board result | Rs 3,000+ (varies by year) | Girls scoring 75 percent or more in Class 10 in Rajasthan state board | One-time on Class 10 result |
| Kali Bai Bhil Medhavi Chatra Scooty | Class 12 board result | Free scooty | Meritorious girls topping Class 12 board (RBSE and CBSE streams have separate quotas) | One-time on Class 12 result |
| Balika Protsahan Yojana | Class 10 board topper | Rs 5,000 | Girls ranking in top merit list of Rajasthan Board Class 10 | One-time on Class 10 result |

These schemes are not mutually exclusive. A single girl can benefit from Aapki Beti, Mukhyamantri Rajshri, Gargi, and Balika Protsahan sequentially through her school years if she meets each scheme's specific eligibility. A Class 10 topper girl from a single-parent BPL family born after 1 June 2016 could in principle be receiving benefits from four of these five schemes at various points in her school career.

## Why applications get rejected: five common reasons

Rejection rates on Aapki Beti Yojana applications tend to spike in the September to November verification window. The block office reviews hundreds of applications per district and pushes back on the ones that fall short on documentation. Here are the five most common rejection triggers and the fixes.

| Rejection reason | What goes wrong | Fix |
|---|---|---|
| BPL card expired or not renewed | Old paper BPL cards from before 2019 don't always show up in the current Rajasthan Food and Civil Supplies Department database | Get the BPL card renewed through the Panchayat Samiti or the nearest e-Mitra kiosk before the school submits |
| Death certificate missing or issued by wrong authority | Family submits a hospital discharge slip or a hand-written village record instead of the municipal or panchayat death certificate | Obtain the official death certificate from the municipal corporation, nagar palika, or gram panchayat; e-Mitra can generate a duplicate if the original is lost |
| Jan Aadhaar not seeded with bank account | Jan Aadhaar is generated but the bank account linkage is not complete, so the DBT push fails | Visit the bank branch with Jan Aadhaar and Aadhaar, request NPCI mapping, get an SMS confirmation of the mapping |
| Attendance below 50 percent in previous year | Girl was absent for extended periods due to illness, family duties, or transport issues, and the school register shows less than 50 percent attendance | The school principal can add a documented medical or family-reason note; the district officer has discretion in genuine cases |
| Class 9 to 12 girl enrolled in a private school for a year | Family moved the girl to a private school for one year (e.g., Class 9) and back to a government school for Class 10; the continuity break flags a rejection | Provide the Transfer Certificate (TC) showing return to government school and a written explanation from the parent; the DEO can approve continuation |

Applications that get rejected can be resubmitted in the next academic year with the corrections in place. The rejection doesn't disqualify the girl permanently.

## Rs 2,100 has not been revised since 2013: what that means for beneficiaries

The Rs 2,100 (Class 1 to 8) and Rs 2,500 (Class 9 to 12) amounts under Aapki Beti Yojana were fixed in 2013 and have not been revised in any Rajasthan state budget since. That's 12+ years of no revision. Rajasthan Budget 2026-27, presented on 11 February 2026 by Deputy Chief Minister and Finance Minister Diya Kumari in the state Assembly (per NewsOnAir and RajRAS coverage), continued the scheme allocation but did not announce a hike in the per-girl grant.

To put the erosion in context. If the Rs 2,100 grant had kept pace with CPI-Rural inflation from 2013 to 2026 at an average of roughly 6 percent per year, the current annual grant would be near Rs 4,500. Instead it remains at Rs 2,100, which today covers roughly one term's worth of stationery, uniform maintenance, and travel for a Class 5 girl in rural Rajasthan.

The 2026-27 budget did announce Rs 225 crore for Nand Ghar upgrades and continued rollouts of Mukhyamantri Rajshri Yojana, but the Aapki Beti amount stayed frozen. This is the editorial angle most competitor pages don't surface, and it matters because families and school principals often plan on the assumption that the annual grant covers a meaningful share of school-year costs. It doesn't anymore.

The advocacy question is whether the 2027-28 budget will revise the amounts to reflect the 12-year gap. Rajasthan-based education NGOs and the BSF's own annual report (October 2023, ~4.6 lakh cumulative beneficiaries across all BSF girl-child schemes) have argued for a revision to at least Rs 3,600 (primary) and Rs 4,500 (secondary), but no line-item change has been announced as of the 11 February 2026 budget presentation.

## Documents required for the application

The document list is short but strict. Every document must be current and issued by the correct authority. Photocopies work for the initial upload; originals are verified at the school.

1. Death certificate of the deceased parent (father or mother), issued by the municipal corporation, nagar palika, or gram panchayat. Hospital discharge papers and hand-written village records are not accepted.
2. BPL ration card (current and renewed) issued by the Rajasthan Food and Civil Supplies Department. AAY card holders are treated as BPL.
3. Aadhaar card of the girl.
4. Jan Aadhaar card of the family, with the girl's name enrolled.
5. Bank passbook first page of the girl (or joint account with surviving parent), showing IFSC code, account number, and NPCI-mapping status.
6. School ID card, bonafide certificate, or admission register (SR) number to prove current enrolment in a Rajasthan government school.
7. One passport-size photograph of the girl.
8. Caste certificate if applicable (only required for reserved-category tracking; not an eligibility gate).

Additional documents that the school principal may ask for. Domicile certificate (in cases where family origin is questioned). Affidavit signed by the surviving parent confirming single-parent status (in cases where the death certificate is old or the family situation is complex). Aadhaar seeding SMS confirmation from the bank (in cases where DBT has failed in the previous year).

## Renewal every year and the 50 percent attendance rule

Aapki Beti Yojana pays annually. Renewal for each subsequent academic year is not automatic in the sense that no verification happens. It's auto-generated by the school on the Shala Darpan BSP portal, but the school must confirm two things at each renewal cycle: the girl is still enrolled in the same government school (or has transferred to another Rajasthan government school with a valid TC), and her attendance in the previous academic year was at least 50 percent.

The 50 percent attendance rule is enforced strictly at the block and district level. If the school register shows less than 50 percent attendance, the renewal is flagged. In genuine cases (documented illness, family bereavement, transport disruption, natural disaster), the school principal can add a note explaining the shortfall, and the DEO has discretion to approve.

Absence from school for more than one full academic year without a documented reason breaks the eligibility chain. The girl would then have to reapply as a fresh case in the year of re-enrolment, and the school would treat her application as a new one rather than a renewal.

Transfer between government schools within Rajasthan is allowed without breaking eligibility, provided the TC is generated correctly and the new school picks up the beneficiary record. Transfer to a private school (even for one year) breaks eligibility for that year; the girl can be reinstated in the year she returns to a government school, with the TC as proof.

## Grievance and helpline

If an application is rejected without a clear reason, if the payment doesn't land in the bank account despite approval, or if the school principal is not filing the application at all, families have three grievance routes.

Route 1. Approach the Block Elementary Education Officer (BEEO) or the District Education Officer (Elementary or Secondary) directly with the application reference number. The DEO has authority to override a block-level rejection.

Route 2. Call the Rajasthan Education Department helpline at 1800-180-6127 (toll-free). The helpline handles queries related to Shala Darpan, BSP scholarships including Aapki Beti Yojana, and school-level grievances. Timings are typically 10 am to 5 pm on working days.

Route 3. File a written complaint with the Balika Shiksha Foundation (BSF), Rajasthan, at the Directorate of Elementary Education, Bikaner. BSF is the implementing agency for Aapki Beti and can escalate systemic issues that a single school or block officer cannot resolve.

For technical issues with the Shala Darpan BSP portal (login failures, upload errors, document verification loops), the school principal should raise the ticket through the Shala Darpan helpdesk rather than the parent contacting the helpline directly. Portal-level issues are resolved at the state IT cell.

## Frequently asked questions

### What is Aapki Beti Yojana Rajasthan?

Aapki Beti Yojana is a Rajasthan state scholarship scheme run by the Balika Shiksha Foundation (BSF) that pays Rs 2,100 per year to girls in Classes 1 to 8 and Rs 2,500 per year to girls in Classes 9 to 12. The girl must be studying in a government school in Rajasthan, her family must hold a BPL card, and at least one of her parents (father or mother) must be deceased. Across 12 years of schooling, the cumulative benefit is Rs 26,800. Applications are filed by the school principal on the Shala Darpan BSP portal.

### Who is eligible for Aapki Beti Yojana in 2026?

A girl is eligible if she meets all four conditions: she is enrolled in a Rajasthan government school, her family holds a valid BPL or AAY ration card, at least one of her parents is deceased (single-parent household), and she has a Jan Aadhaar number linked to a bank account for DBT. She must also maintain at least 50 percent attendance from the second year onward for the renewal to continue. Girls in private schools, girls above the poverty line, and girls with both parents alive are not eligible.

### What is the benefit amount under Aapki Beti Yojana?

The scheme pays Rs 2,100 per year for girls in Class 1 to Class 8, and Rs 2,500 per year for girls in Class 9 to Class 12. The payment is annual, made once per academic year, and lands in the girl's bank account via Direct Benefit Transfer. Cumulative benefit across the full 12-year school career is Rs 26,800 (Rs 16,800 for the primary band plus Rs 10,000 for the secondary band). The amounts were fixed in 2013 and haven't been revised in any Rajasthan budget since, including Budget 2026-27 presented on 11 February 2026.

### How to apply for Aapki Beti Yojana online?

Individual online applications by families are not accepted. The school principal files the application on behalf of the eligible girl through the Shala Darpan Balika Shiksha Portal (BSP) at rajshaladarpan.rajasthan.gov.in/SD4/BSP/Home/HomePage.aspx. Parents should collect the documents (death certificate, BPL card, Aadhaar, Jan Aadhaar, bank passbook, photo), approach the school principal, and confirm that the application is submitted before the annual cutoff. The system generates a reference number that the school shares with the parent.

### Which documents are needed for Aapki Beti Yojana?

The eight required documents are: (1) death certificate of the deceased parent issued by the municipal corporation, nagar palika, or gram panchayat; (2) valid BPL or AAY ration card; (3) Aadhaar card of the girl; (4) Jan Aadhaar card of the family with the girl's name enrolled; (5) bank passbook first page with IFSC and account number visible; (6) school ID card or bonafide certificate; (7) one passport-size photograph; and (8) caste certificate if applicable. Hospital discharge slips and hand-written village death records are not accepted.

### Is Aapki Beti Yojana amount the same for all classes?

No. The amount differs by class band. Girls in Class 1 to Class 8 receive Rs 2,100 per year. Girls in Class 9 to Class 12 receive Rs 2,500 per year. The payment is flat within each band, so a Class 1 girl gets the same Rs 2,100 as a Class 8 girl, and a Class 9 girl gets the same Rs 2,500 as a Class 12 girl. The scheme is not means-tested beyond the BPL condition, so family monthly income does not change the payment amount.

### Can I get Aapki Beti Yojana if I am in a private school?

No. Aapki Beti Yojana covers only girls enrolled in government schools in Rajasthan, including Rajasthan state government schools, government-aided model schools, state-run Kasturba Gandhi Balika Vidyalayas, and Rajkiya Adarsh schools. Private schools (aided and unaided) are outside the scope. If a girl transfers from a government school to a private school for one year, eligibility breaks for that year; she can be reinstated when she returns to a government school with a valid Transfer Certificate.

### When will Aapki Beti Yojana payment come to the bank account?

Standard turnaround from application submission to DBT payment is 4 to 6 months. Applications submitted at the start of the academic year (June to August) typically see payments land between October and March of that academic year. Delays happen when the BPL card verification, Jan Aadhaar seeding, or bank account NPCI mapping is incomplete. If the payment hasn't arrived within 6 months of school-level submission, parents should follow up with the school principal, who can check the sanction status on the Shala Darpan BSP portal.

### What if my Aapki Beti application is rejected?

The five most common rejection reasons are: expired or unrenewed BPL card, missing or incorrectly issued death certificate, Jan Aadhaar not seeded with the bank account, attendance below 50 percent in the previous year, and enrolment gap due to a year in a private school. Each of these has a fix: renew the BPL card at e-Mitra, get an official death certificate from the local body, complete NPCI mapping at the bank branch, get a written medical or family reason from the school for the attendance shortfall, and provide the Transfer Certificate for the private school year. Rejected applications can be resubmitted the next academic year.

### Is Jan Aadhaar mandatory for Aapki Beti Yojana?

Yes. Jan Aadhaar seeding is now compulsory for the Direct Benefit Transfer under Aapki Beti Yojana. The family must have a Jan Aadhaar with the girl's name enrolled, and the girl's bank account must be NPCI-mapped to her Aadhaar (which in turn ties to the Jan Aadhaar). Applications without valid Jan Aadhaar linkage are rejected at the block verification stage. Parents can generate or update Jan Aadhaar at any e-Mitra kiosk with the family's Aadhaar and address proof.

### Can I get Aapki Beti Yojana and Rajshri Yojana together?

Yes. Aapki Beti Yojana and Mukhyamantri Rajshri Yojana are separate BSF schemes with different eligibility triggers, and a single girl can benefit from both if she meets each scheme's conditions. Rajshri Yojana pays Rs 50,000 cumulative in six instalments (birth to Class 12) for any girl born in Rajasthan on or after 1 June 2016, subject to institutional delivery and vaccination conditions. Aapki Beti adds Rs 26,800 across 12 years for BPL single-parent households. A girl who qualifies for both can receive Rs 76,800 in total across the two schemes through her school years.

### Where can I check my Aapki Beti application status?

The school principal can check the application status on the Shala Darpan BSP portal at rajshaladarpan.rajasthan.gov.in/SD4/BSP/Home/HomePage.aspx by logging in with the school's UDISE code and password. Parents don't have direct login access but can ask the school principal for the current status, including block-level verification, DEO approval, DBT sanction, and payment release stages. For grievances or delayed payments, call the Rajasthan Education Department helpline at 1800-180-6127 or approach the District Education Officer directly with the application reference number.

## Sources

- Balika Shiksha Foundation, Rajasthan (implementing agency): https://wcd.rajasthan.gov.in
- Shala Darpan Balika Shiksha Portal (BSP) for online applications: https://rajshaladarpan.rajasthan.gov.in/SD4/BSP/Home/HomePage.aspx
- Rajasthan Budget 2026-27 (presented 11 February 2026 by Deputy CM Diya Kumari): https://rajras.in/rajasthan-budget-2026-27/
- Rajasthan Budget 2026-27 NewsOnAir coverage: https://www.newsonair.gov.in/rajasthan-deputy-cm-finance-minister-diya-kumari-presents-budget-2026-27-in-assembly
- Rajasthan Department of Women and Child Development: https://wcd.rajasthan.gov.in
- Rajasthan Education Department helpline: 1800-180-6127
`;

const FAQS = [
  { question: "What is Aapki Beti Yojana Rajasthan?", answer: "Aapki Beti Yojana is a Rajasthan state scholarship scheme run by the Balika Shiksha Foundation (BSF) that pays Rs 2,100 per year to girls in Classes 1 to 8 and Rs 2,500 per year to girls in Classes 9 to 12. The girl must be studying in a government school in Rajasthan, her family must hold a BPL card, and at least one of her parents (father or mother) must be deceased. Across 12 years of schooling, the cumulative benefit is Rs 26,800. Applications are filed by the school principal on the Shala Darpan BSP portal." },
  { question: "Who is eligible for Aapki Beti Yojana in 2026?", answer: "A girl is eligible if she meets all four conditions: she is enrolled in a Rajasthan government school, her family holds a valid BPL or AAY ration card, at least one of her parents is deceased (single-parent household), and she has a Jan Aadhaar number linked to a bank account for DBT. She must also maintain at least 50 percent attendance from the second year onward for the renewal to continue. Girls in private schools, girls above the poverty line, and girls with both parents alive are not eligible." },
  { question: "What is the benefit amount under Aapki Beti Yojana?", answer: "The scheme pays Rs 2,100 per year for girls in Class 1 to Class 8, and Rs 2,500 per year for girls in Class 9 to Class 12. The payment is annual, made once per academic year, and lands in the girl's bank account via Direct Benefit Transfer. Cumulative benefit across the full 12-year school career is Rs 26,800 (Rs 16,800 for the primary band plus Rs 10,000 for the secondary band). The amounts were fixed in 2013 and haven't been revised in any Rajasthan budget since, including Budget 2026-27 presented on 11 February 2026." },
  { question: "How to apply for Aapki Beti Yojana online?", answer: "Individual online applications by families are not accepted. The school principal files the application on behalf of the eligible girl through the Shala Darpan Balika Shiksha Portal (BSP) at rajshaladarpan.rajasthan.gov.in/SD4/BSP/Home/HomePage.aspx. Parents should collect the documents (death certificate, BPL card, Aadhaar, Jan Aadhaar, bank passbook, photo), approach the school principal, and confirm that the application is submitted before the annual cutoff. The system generates a reference number that the school shares with the parent." },
  { question: "Which documents are needed for Aapki Beti Yojana?", answer: "The eight required documents are: (1) death certificate of the deceased parent issued by the municipal corporation, nagar palika, or gram panchayat; (2) valid BPL or AAY ration card; (3) Aadhaar card of the girl; (4) Jan Aadhaar card of the family with the girl's name enrolled; (5) bank passbook first page with IFSC and account number visible; (6) school ID card or bonafide certificate; (7) one passport-size photograph; and (8) caste certificate if applicable. Hospital discharge slips and hand-written village death records are not accepted." },
  { question: "Is Aapki Beti Yojana amount the same for all classes?", answer: "No. The amount differs by class band. Girls in Class 1 to Class 8 receive Rs 2,100 per year. Girls in Class 9 to Class 12 receive Rs 2,500 per year. The payment is flat within each band, so a Class 1 girl gets the same Rs 2,100 as a Class 8 girl, and a Class 9 girl gets the same Rs 2,500 as a Class 12 girl. The scheme is not means-tested beyond the BPL condition, so family monthly income does not change the payment amount." },
  { question: "Can I get Aapki Beti Yojana if I am in a private school?", answer: "No. Aapki Beti Yojana covers only girls enrolled in government schools in Rajasthan, including Rajasthan state government schools, government-aided model schools, state-run Kasturba Gandhi Balika Vidyalayas, and Rajkiya Adarsh schools. Private schools (aided and unaided) are outside the scope. If a girl transfers from a government school to a private school for one year, eligibility breaks for that year; she can be reinstated when she returns to a government school with a valid Transfer Certificate." },
  { question: "When will Aapki Beti Yojana payment come to the bank account?", answer: "Standard turnaround from application submission to DBT payment is 4 to 6 months. Applications submitted at the start of the academic year (June to August) typically see payments land between October and March of that academic year. Delays happen when the BPL card verification, Jan Aadhaar seeding, or bank account NPCI mapping is incomplete. If the payment hasn't arrived within 6 months of school-level submission, parents should follow up with the school principal, who can check the sanction status on the Shala Darpan BSP portal." },
  { question: "What if my Aapki Beti application is rejected?", answer: "The five most common rejection reasons are: expired or unrenewed BPL card, missing or incorrectly issued death certificate, Jan Aadhaar not seeded with the bank account, attendance below 50 percent in the previous year, and enrolment gap due to a year in a private school. Each of these has a fix: renew the BPL card at e-Mitra, get an official death certificate from the local body, complete NPCI mapping at the bank branch, get a written medical or family reason from the school for the attendance shortfall, and provide the Transfer Certificate for the private school year. Rejected applications can be resubmitted the next academic year." },
  { question: "Is Jan Aadhaar mandatory for Aapki Beti Yojana?", answer: "Yes. Jan Aadhaar seeding is now compulsory for the Direct Benefit Transfer under Aapki Beti Yojana. The family must have a Jan Aadhaar with the girl's name enrolled, and the girl's bank account must be NPCI-mapped to her Aadhaar (which in turn ties to the Jan Aadhaar). Applications without valid Jan Aadhaar linkage are rejected at the block verification stage. Parents can generate or update Jan Aadhaar at any e-Mitra kiosk with the family's Aadhaar and address proof." },
  { question: "Can I get Aapki Beti Yojana and Rajshri Yojana together?", answer: "Yes. Aapki Beti Yojana and Mukhyamantri Rajshri Yojana are separate BSF schemes with different eligibility triggers, and a single girl can benefit from both if she meets each scheme's conditions. Rajshri Yojana pays Rs 50,000 cumulative in six instalments (birth to Class 12) for any girl born in Rajasthan on or after 1 June 2016, subject to institutional delivery and vaccination conditions. Aapki Beti adds Rs 26,800 across 12 years for BPL single-parent households. A girl who qualifies for both can receive Rs 76,800 in total across the two schemes through her school years." },
  { question: "Where can I check my Aapki Beti application status?", answer: "The school principal can check the application status on the Shala Darpan BSP portal at rajshaladarpan.rajasthan.gov.in/SD4/BSP/Home/HomePage.aspx by logging in with the school's UDISE code and password. Parents don't have direct login access but can ask the school principal for the current status, including block-level verification, DEO approval, DBT sanction, and payment release stages. For grievances or delayed payments, call the Rajasthan Education Department helpline at 1800-180-6127 or approach the District Education Officer directly with the application reference number." },
];

await replaceScheme({
  slug: "rajasthan-aapki-beti-yojana-2026",
  title: "Aapki Beti Yojana 2026: Rs 2,100 to Rs 2,500 for BPL girls",
  description:
    "Aapki Beti Yojana pays Rs 2,100 (Class 1-8) and Rs 2,500 (Class 9-12) to BPL single-parent girls in Rajasthan govt schools. Full 2026 eligibility guide.",
  content: CONTENT,
  faqs: FAQS,
});
