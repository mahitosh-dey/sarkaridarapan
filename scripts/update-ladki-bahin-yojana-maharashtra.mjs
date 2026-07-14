import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xtjbijvxxeoopcqxycpz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY",
);

const SLUG = "majhi-ladki-bahin-yojana-maharashtra";

const NEW_TITLE = "Ladki Bahin Yojana 2026: Rs. 1,500 Monthly for Maharashtra Women";
const NEW_DESCRIPTION = "Ladki Bahin Yojana pays Rs. 1,500 a month to Maharashtra women aged 21 to 65 from families earning below Rs. 2.5 lakh. Apply via Nari Shakti Doot app.";

const NEW_CONTENT = `## Ladki Bahin Yojana at a glance

Mukhyamantri Majhi Ladki Bahin Yojana is a Maharashtra state cash transfer that pays Rs. 1,500 every month to eligible women aged 21 to 65 from families with an annual income below Rs. 2.5 lakh. The scheme was launched on June 28, 2024 by the Mahayuti government (BJP, Shiv Sena Shinde faction, and NCP Ajit Pawar faction) and is administered by the Women and Child Development Department of Maharashtra under Minister Aditi Tatkare.

The annual payout is Rs. 18,000 per beneficiary. Around 2.34 crore women are enrolled as of early 2026, making Ladki Bahin the single largest state-run cash transfer for women in India by beneficiary count, per the Maharashtra Women and Child Development Department's official portal.

The state has budgeted approximately Rs. 46,000 crore per year for the scheme. The first installment was credited in July 2024, and payments have continued monthly since, with the exception of two months when the government released clubbed transfers covering multiple months in one credit.

## Who qualifies for the Rs. 1,500 monthly payment

A woman qualifies for Ladki Bahin if she meets all five conditions. The eligibility bar was designed to be broad, which is one reason the beneficiary count grew so quickly in the first six months.

| Requirement | Detail |
|---|---|
| Residency | Permanent resident of Maharashtra |
| Age | 21 to 65 years as of the application date |
| Marital status | Married, widowed, divorced, abandoned, or destitute women. Unmarried women aged 21 to 25 are also eligible under a January 2025 amendment |
| Annual family income | Below Rs. 2.5 lakh (based on income certificate) |
| Bank account | Aadhaar-seeded savings account with DBT active |

Only one woman per family qualifies. If a household has multiple eligible women (say, a mother and a married daughter), only one can register and receive the transfer. The scheme guidelines give the mother priority when both are otherwise eligible.

The upper age of 65 is notable because it is higher than most comparable state schemes. Odisha's Subhadra caps at 60 and Madhya Pradesh's Ladli Behna caps at 60 too. Maharashtra kept the ceiling higher to include senior women who are typically excluded from central social security schemes because of asset or pension tests.

## Who is excluded

The Maharashtra government listed six explicit exclusion categories at launch. These filters remain in force in 2026 and are cross-checked during and after the application.

Women whose family pays income tax, or whose spouse pays income tax, are excluded. The state uses PAN records to run the check post-approval. Women whose spouse or immediate family runs a GST-registered business with turnover above the exemption threshold are similarly excluded.

Government employees at the central or state level, including contract employees earning above the Rs. 2.5 lakh threshold, are excluded. This applies whether the applicant herself is employed or her spouse is. Pension-drawing widows and retired employees whose combined pension crosses the threshold do not qualify either.

Women who currently hold or previously held constitutional office, including sitting or former MPs, MLAs, Members of Legislative Council, and Panchayat Adhyaksha positions, are excluded. Women whose family owns four-wheelers other than a tractor are excluded (the vehicle test comes from the ration card style socio-economic classification).

Households that own more than five acres of agricultural land are excluded. Households where any member is a professional (doctor, lawyer, chartered accountant, engineer) with a registered practice are excluded because the professional registration itself is treated as evidence of income above the threshold.

## Documents you need before you apply

Ladki Bahin requires eight documents at the application stage. Missing even one causes the application to be flagged Incomplete on the portal and the 30-day approval clock is paused until the correction is uploaded.

- Aadhaar card of the applicant (original for eKYC, scanned copy for upload)
- Maharashtra domicile certificate (or a ration card that shows a Maharashtra address for at least the last three years)
- Ration card showing family details, in one of the colours yellow, orange, or white
- Aadhaar-seeded bank account passbook, front page showing account number and IFSC
- Income certificate from the tehsildar or Setu Kendra showing annual family income below Rs. 2.5 lakh
- Marriage certificate, widowhood certificate, or divorce decree, whichever applies
- Recent passport-size photograph taken in the last six months
- Self-declaration confirming that neither the applicant nor her spouse pays income tax and that she is not a government employee

Two documents are frequently missed by first-time applicants. First, the income certificate must be from the current year or the previous one. Older certificates are rejected. Second, unmarried applicants aged 21 to 25 need to attach a father's income certificate rather than a spouse's, and this must be clearly labelled.

## Bank account and Aadhaar seeding

Ladki Bahin uses the National Payments Corporation of India's Aadhaar Payment Bridge to route payments. Your bank account has to be seeded with your Aadhaar in NPCI's mapper before the transfer can go through. Having a matching name across Aadhaar and passbook is not enough.

Confirm seeding through any of three channels. Log into your bank's app and look for the Aadhaar Seeding status under Account Services. Alternatively, dial *99*99*1# from your Aadhaar-registered mobile and follow the IVR prompts. The most reliable check is on the UIDAI portal at resident.uidai.gov.in, which returns the name of the bank your Aadhaar is currently mapped to.

If your Aadhaar is mapped to a bank that you no longer use, transfers will go to that dormant account. Fix this by walking into the branch where you want the money and submitting an Aadhaar seeding request. Ask the bank to set your account as the primary mapping in the NPCI record. The change reflects in 3 to 7 working days.

Payment failures caused by a missing or incorrect NPCI mapping are the single most common technical rejection during the first three months of a new applicant's Ladki Bahin cycle.

## Step-by-step online application on ladakibahin.maharashtra.gov.in

The online route is fastest for applicants with computer access. The Maharashtra government routes the application through the dedicated portal at ladakibahin.maharashtra.gov.in.

1. Open ladakibahin.maharashtra.gov.in on any modern browser. Chrome, Firefox, and Edge work reliably. Internet Explorer is not supported.
2. Click Applicant Registration on the home page. Enter your Aadhaar-linked mobile number and complete OTP verification.
3. Set a password and log in. First-time users are asked to complete a short profile setup screen.
4. Select Apply for Scheme and choose Mukhyamantri Majhi Ladki Bahin Yojana from the dropdown.
5. Enter your Aadhaar number. The portal calls the UIDAI eKYC service and auto-fills your name, date of birth, address, and photograph.
6. Enter your ration card number. The portal pulls family details from the Food and Civil Supplies database. Verify these are correct.
7. Enter bank details, including account number, IFSC, and name on account. The portal runs a live Aadhaar seeding check and shows a green tick when the mapping is confirmed.
8. Upload all eight documents in the required formats. PDFs must be under 200 KB each. JPGs must be under 100 KB.
9. Submit the application. The portal generates a 12-digit application reference number. Take a screenshot and note it in a safe place.

The scheme guarantees a 30-day disposal window under the state's Right to Public Services Act. If your application is not approved or rejected within 30 working days, you can escalate through the Aaple Sarkar grievance portal at aaplesarkar.mahaonline.gov.in.

Common errors and how to fix them. If the OTP does not arrive during registration, your Aadhaar-linked mobile number may be inactive or unregistered. Visit an Aadhaar Seva Kendra to update the mobile number, then retry. If the ration card auto-fetch shows an error, the card may have been temporarily blocked for pending eKYC. Complete the ration card eKYC at any Setu Suvidha Kendra before reapplying.

## Applying through the Nari Shakti Doot mobile app

The Maharashtra government also publishes an official mobile application called Nari Shakti Doot on the Google Play Store. The app supports the full Ladki Bahin application flow from a smartphone without needing a computer.

Download only the Nari Shakti Doot app published by the Maharashtra Government Women and Child Development Department. Several fake or lookalike apps have appeared on the Play Store since launch. Check the publisher name before installing. The official app has over one crore downloads and shows a verified developer badge.

The app flow mirrors the web portal. Register with the Aadhaar-linked mobile, complete eKYC, enter ration card and bank details, upload documents, and submit. The app has a scan-to-upload feature that lets you photograph documents directly from the camera rather than uploading from your gallery.

The app is especially useful in rural areas where mobile data is more reliable than broadband. Field-level Anganwadi workers are trained to help women complete the application on the app when they visit for other services.

## Offline application at Anganwadi and Setu centres

Not every eligible woman has a smartphone or internet access. The Maharashtra government designated three types of offline service centres to handle Ladki Bahin applications with the same weight as a self-submitted online form.

- Anganwadi centres are the closest for most rural applicants. There are 97,000 Anganwadis across Maharashtra and each is staffed to help with the scheme application. The Anganwadi worker fills the form, scans your documents on a smartphone provided by the department, and uploads on your behalf.
- Setu Suvidha Kendras handle all state citizen services and are found in taluk and district headquarters. They also help with the income certificate and domicile certificate that Ladki Bahin requires.
- Aaple Sarkar Seva Kendras are the state government's citizen service centres and are present in urban clusters, including Mumbai, Pune, and Nagpur.

Service centre charges are capped at Rs. 15 per form under the Maharashtra Right to Public Services Act. Beware of anyone charging more.

Home enrolment through appointed volunteers was active during the July to October 2024 election-run-up campaign but has since been discontinued. Any new applicant in 2026 should use one of the three centre types above.

## What happens after you apply

Once submitted, your application moves through four verification stages. The state has built a dashboard that beneficiaries can watch in real time on the portal.

Stage one is document verification by the district-level Ladki Bahin cell. Officers check that all eight required documents are present, legible, and match the details entered on the form. This takes 3 to 7 working days.

Stage two is eligibility cross-check against the Income Tax Department database (via PAN) and the GSTIN registry. This is automated and completes within 24 to 48 hours. If a hit is found, the application is flagged for manual review by a Group A officer at the district level.

Stage three is field verification for a random sample of applicants. Around 10 percent of applications are physically verified by Anganwadi workers or revenue department staff who visit the applicant's home to confirm residency and household composition. This can add 15 to 30 days to the total processing time for the sampled applications.

Stage four is sanction and payment mapping. Once cleared, your details are added to the monthly Direct Benefit Transfer roll maintained by the treasury. The first credit typically lands in your account between the 15th and 25th of the month after sanction.

You receive an SMS on your Aadhaar-linked mobile at each stage. Messages come from the sender ID MHNSD (Maharashtra Nari Shakti Doot) and typically read Your Ladki Bahin application 202412000000 has been approved followed by the sanction date and expected first credit date.

## How to check if your Rs. 1,500 has been credited

Four channels report Ladki Bahin payment status. Use whichever works fastest for you.

The Ladki Bahin portal itself has a Check Payment Status page under the Beneficiary menu. Log in with your registered mobile number and OTP. The dashboard shows every credit for the last 12 months, including the date, amount, and bank reference number.

Bank SMS alerts are the fastest confirmation. Every DBT credit generates a message that includes the sender name MHNSDDBT or MHWCDDBT. If you have not received a message by the 25th of the month, the payment is likely delayed.

The Public Financial Management System portal at pfms.nic.in has a Know Your Payment section. Enter your bank account number and IFSC to see all recent DBT credits, including Ladki Bahin, in a single list.

Anganwadi workers can also print your Ladki Bahin payment statement on request. Most Anganwadis have a printer supplied under the state's rural digital access programme. There is no fee for this service.

## What to do if a payment is missed or you were removed

Missed payments have three common causes and one less obvious one. Diagnose which applies before you take any action.

The most common cause is broken Aadhaar seeding. Banks periodically require re-KYC, and if the deadline was missed, your account is delinked from NPCI mapping until re-KYC is complete. Visit your bank with your Aadhaar and complete re-KYC. The delayed payment will be released along with the current month's credit within 5 to 10 days.

The second cause is that your ration card was updated in a way that changed your household composition. If someone else in your family applied for and received a fresh card that removed your name, your Ladki Bahin eligibility can suspend automatically. Restore your name to the ration card at the Food and Civil Supplies office and the payment resumes from the next month.

The third cause is a state treasury delay. When Maharashtra's GST devolution from the Centre or state revenue collections run behind schedule (typically in April, May, and June), Ladki Bahin payments can be delayed by two to four weeks. Missed months are usually clubbed with the next month's credit rather than being lost.

The fourth cause is targeted removal following the 2025 eligibility re-verification drive. If you received an SMS from MHNSD stating your enrolment has been suspended pending review, follow the appeal procedure below.

## The 2025 eligibility re-verification drive

Between January and April 2025, the Maharashtra government undertook a state-wide re-verification of all Ladki Bahin beneficiaries. The drive was triggered by media reports that a significant fraction of enrolled women exceeded the income cap or fell into an excluded category. The re-verification used PAN cross-checks, income tax filing data, vehicle registration records, and land ownership records.

Around 5 lakh beneficiaries were removed from the rolls between February and April 2025 after failing one or more of the checks. The government issued removal SMS notices with the specific reason for each removal.

If you were removed, you have a 60-day window to file an appeal. Appeals are submitted at the district-level Women and Child Development Officer's office with the following documents: the removal SMS printout, the specific document that disproves the removal reason (an income tax NIL certificate, a vehicle deregistration certificate, or a land ownership disclaimer), and a fresh self-declaration.

Around 15 percent of appeals filed in this window succeeded and the beneficiary was restored to the roll from the following month, per the state's April 2025 status update. If your appeal is rejected, you can escalate to the Divisional Commissioner within a further 30 days.

## Ladki Bahin vs other state women cash transfer schemes

Maharashtra's Ladki Bahin drew directly from Madhya Pradesh's Ladli Behna Yojana, which the BJP launched in 2023 and which is credited with the Shivraj Singh Chouhan government's third-consecutive victory that November. Several states have since launched variants. Here is how the leading four compare.

| Feature | Ladki Bahin (Maharashtra) | Gruha Lakshmi (Karnataka) | Ladli Behna (Madhya Pradesh) | Subhadra (Odisha) |
|---|---|---|---|---|
| Monthly amount | Rs. 1,500 | Rs. 2,000 | Rs. 1,250 | Rs. 833 (Rs. 10,000 a year in 2 tranches) |
| Annual payout | Rs. 18,000 | Rs. 24,000 | Rs. 15,000 | Rs. 10,000 |
| Beneficiary count | 2.34 crore | 1.28 crore | 1.29 crore | 1.05 crore |
| Age eligibility | 21 to 65 | 18 and above, no upper limit | 21 to 60 | 21 to 60 |
| Income cap | Rs. 2.5 lakh household | No income cap, tax filing disqualifies | Rs. 2.5 lakh household | Rs. 2.5 lakh household |
| Marital filter | Married, widowed, divorced, abandoned, destitute (or unmarried 21-25) | No marital filter | No marital filter | No marital filter |
| Head-of-family rule | Not required | Must be head of ration card | Not required | Not required |
| Launch date | June 28, 2024 | August 19, 2023 | June 5, 2023 | September 17, 2024 |
| Delivery mechanism | DBT via Aadhaar-seeded account | DBT via Aadhaar-seeded account | DBT via Aadhaar-seeded account | DBT via Aadhaar-seeded account plus branded Subhadra RuPay card |
| Portal | ladakibahin.maharashtra.gov.in | sevasindhu.karnataka.gov.in | cmladlibahna.mp.gov.in | subhadra.odisha.gov.in |

Ladki Bahin has the largest beneficiary base of the four because the eligibility screen deliberately avoided the head-of-family filter that limits Karnataka's Gruha Lakshmi. Karnataka's per-beneficiary transfer is higher, but Maharashtra's total outlay is bigger at around Rs. 46,000 crore per year.

## Central schemes you can stack with Ladki Bahin

Ladki Bahin is a state benefit and does not stop a beneficiary from claiming any Government of India welfare scheme she qualifies for. Women already receiving the Rs. 1,500 monthly should look at these five central schemes for additional coverage.

[PM Suraksha Bima Yojana (PMSBY)](https://www.sarkaridarapan.com/sarkari-yojana/pm-suraksha-bima-yojana) gives Rs. 2 lakh accident insurance for a premium of Rs. 20 per year. Available to anyone aged 18 to 70 with a savings account.

Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) gives Rs. 2 lakh life insurance for a premium of Rs. 436 per year. Covers death from any cause. Available to anyone aged 18 to 50 with a savings account.

Pradhan Mantri Matru Vandana Yojana (PMMVY) pays Rs. 5,000 for a first pregnancy and Rs. 6,000 for a second if the child is a girl. Applies to women aged 19 and above at first pregnancy. Applications are filed through the Anganwadi worker.

Atal Pension Yojana (APY) is a co-contributory pension for unorganised workers. A woman aged 18 to 40 can choose a pension of Rs. 1,000 to Rs. 5,000 per month payable from age 60. Contributions range from Rs. 42 to Rs. 291 per month depending on entry age.

Pradhan Mantri Jan Dhan Yojana (PMJDY) is a zero-balance bank account with a Rs. 10,000 overdraft, a RuPay debit card, and Rs. 2 lakh accident cover built in. Any adult with valid Aadhaar can open one at any public sector bank.

None of these central schemes conflict with Ladki Bahin. Enrolling in them does not push a woman into any income tax bracket, so her Ladki Bahin eligibility remains untouched.

## The political story: Maharashtra 2024 elections

Ladki Bahin's launch date of June 28, 2024 came four months before the Maharashtra Assembly elections held in November 2024. The scheme was announced in the state budget three weeks earlier, on June 7, 2024. The first credits landed in beneficiary accounts in mid-July, followed by five monthly installments before voters went to the polls on November 20.

The Mahayuti alliance (BJP, Shiv Sena Shinde faction, and NCP Ajit Pawar faction) won 230 of 288 assembly seats in the November 2024 result, an unusually decisive mandate. Post-election analyses by CSDS-Lokniti and other research groups noted that women voters swung sharply toward the Mahayuti in the districts where Ladki Bahin enrolments were highest.

Two elements of the scheme design were pointed to as electorally productive. First, the first installment came before the model code of conduct kicked in, which meant subsequent installments could continue without violating election law. Second, the monthly cadence created a reminder in beneficiary households every 30 days.

The opposition Maha Vikas Aghadi had committed to raising the transfer to Rs. 3,000 per month if elected. The Mahayuti countered with a promise to raise it to Rs. 2,100 per month, though the payment has remained at Rs. 1,500 through 2025 and into early 2026. The state government has cited fiscal constraints for holding the amount, with the fiscal deficit under the Maharashtra Fiscal Responsibility Act being one factor.

## Frequently asked questions

**Who is eligible for Ladki Bahin Yojana in Maharashtra?**
Women aged 21 to 65 who are permanent residents of Maharashtra, from families with an annual income below Rs. 2.5 lakh, who are married, widowed, divorced, abandoned, or destitute (or unmarried and aged 21 to 25). The applicant or her spouse must not pay income tax and must not be a government employee.

**How much does Ladki Bahin Yojana pay every month?**
Rs. 1,500 every month, credited directly to your Aadhaar-seeded bank account. The annual total is Rs. 18,000.

**Can unmarried women apply for Ladki Bahin?**
Yes, but only if they are aged 21 to 25. Unmarried women in this age band were included under a January 2025 amendment. They need to attach the father's income certificate rather than a spouse's certificate.

**What is the Nari Shakti Doot app?**
Nari Shakti Doot is the official mobile app published by the Maharashtra Women and Child Development Department for Ladki Bahin applications. Download only the version published by the state government. Several fake apps exist on the Play Store.

**Can I apply if I moved to Maharashtra from another state?**
You need a Maharashtra domicile certificate or a ration card that shows a Maharashtra address for at least the last three years. If you moved recently, apply for the domicile certificate first at the tehsildar office. It typically takes 30 to 60 days.

**How do I check if my Ladki Bahin payment has been credited?**
Four options. Log in to the Ladki Bahin portal, look for the MHNSDDBT SMS from your bank, query pfms.nic.in with your account and IFSC, or ask any Anganwadi worker to print your payment statement.

**Why did I get an SMS saying my enrolment is suspended?**
The 2025 re-verification drive removed around 5 lakh beneficiaries who exceeded the income cap, owned excluded assets, or fell into an excluded category. You have 60 days from the SMS to file an appeal at the district Women and Child Development office with proof that disproves the removal reason.

**Is there a fee to apply for Ladki Bahin?**
No application fee. Service centres including Anganwadis, Setu Kendras, and Aaple Sarkar centres are allowed to charge up to Rs. 15 per form under the Maharashtra Right to Public Services Act.

**Will Ladki Bahin be increased to Rs. 2,100 per month?**
The Mahayuti election manifesto in October 2024 promised an increase to Rs. 2,100 per month. As of early 2026, the payment remains at Rs. 1,500 per month. The state government has cited fiscal constraints for the delay.

**Can two women in the same family both apply?**
No. Only one woman per family qualifies. If a household has multiple eligible women, only one can register. The scheme guidelines give the mother priority when both are otherwise eligible.

## Sources and related pages

- Maharashtra Ladki Bahin official portal: [ladakibahin.maharashtra.gov.in](https://ladakibahin.maharashtra.gov.in)
- Nari Shakti Doot app: Google Play Store (published by Maharashtra Women and Child Development Department)
- Aaple Sarkar grievance portal: [aaplesarkar.mahaonline.gov.in](https://aaplesarkar.mahaonline.gov.in)
- Public Financial Management System (payment tracking): [pfms.nic.in](https://pfms.nic.in)
- UIDAI Aadhaar bank seeding status: [resident.uidai.gov.in](https://resident.uidai.gov.in)
- Women Helpline for Maharashtra: 181

Related pages on this site:

- [Gruha Lakshmi Yojana Karnataka: Rs. 2,000 monthly for women](https://www.sarkaridarapan.com/sarkari-yojana/gruha-lakshmi-yojana-karnataka)
- [Subhadra Yojana Odisha: Rs. 10,000 a year for women](https://www.sarkaridarapan.com/sarkari-yojana/subhadra-yojana-odisha)
- [Mahtari Vandana Yojana Chhattisgarh: Rs. 1,000 monthly for women](https://www.sarkaridarapan.com/sarkari-yojana/mahtari-vandana-yojana-chhattisgarh)
- [PM Suraksha Bima Yojana (PMSBY): Rs. 20 accident insurance](https://www.sarkaridarapan.com/sarkari-yojana/pm-suraksha-bima-yojana)
- [Government schemes in Maharashtra](https://www.sarkaridarapan.com/state/maharashtra)`;

// Validation
const emCount = (NEW_CONTENT.match(/—/g) || []).length;
const enCount = (NEW_CONTENT.match(/–/g) || []).length;
const smartCount = (NEW_CONTENT.match(/[‘’“”]/g) || []).length;
const bulletBoldLabels = (NEW_CONTENT.match(/^\s*-\s*\*\*[^*\n]+\*\*/gm) || []).length;
const inlineBoldLabels = (NEW_CONTENT.match(/\*\*[^*\n]+\*\*:/g) || []).length;
const forXOpener = (NEW_CONTENT.match(/^For \*\*[^*\n]+\*\*:/gm) || []).length;

const AI_VOCAB = [
  "actually", "additionally", "align with", "crucial", "delve", "enduring", "enhance",
  "fostering", "garner", "highlight", "interplay", "intricate", "landscape", "pivotal",
  "showcase", "tapestry", "testament", "underscore", "vibrant",
];
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

const { data: before, error: bErr } = await supabase
  .from("schemes")
  .select("slug, title, description, content")
  .eq("slug", SLUG)
  .single();

if (bErr) { console.error("Read-before failed:", bErr); process.exit(1); }
console.log("\n=== BEFORE ===");
console.log("Title:", before.title, "(" + before.title.length + " chars)");
console.log("Description:", before.description, "(" + before.description.length + " chars)");
console.log("Content word count:", before.content?.split(/\s+/).length ?? 0);

const { error: uErr } = await supabase
  .from("schemes")
  .update({ title: NEW_TITLE, description: NEW_DESCRIPTION, content: NEW_CONTENT, updated_at: new Date().toISOString() })
  .eq("slug", SLUG);

if (uErr) { console.error("Update failed:", uErr); process.exit(1); }

console.log("\n=== AFTER ===");
console.log("Title:", NEW_TITLE, "(" + NEW_TITLE.length + " chars)");
console.log("Description:", NEW_DESCRIPTION, "(" + NEW_DESCRIPTION.length + " chars)");
console.log("Content word count:", NEW_CONTENT.split(/\s+/).length);
console.log("\nUpdate successful. Verify at https://www.sarkaridarapan.com/sarkari-yojana/" + SLUG);
