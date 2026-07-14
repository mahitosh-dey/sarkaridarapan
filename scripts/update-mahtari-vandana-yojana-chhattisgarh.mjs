import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xtjbijvxxeoopcqxycpz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY",
);

const SLUG = "mahtari-vandana-yojana-chhattisgarh";

const NEW_TITLE = "Mahtari Vandana 2026: Rs. 1,000 Monthly for Chhattisgarh Women";
const NEW_DESCRIPTION = "Mahtari Vandana Yojana pays Rs. 1,000 monthly to married, widowed, or divorced women in Chhattisgarh aged 21+. Complete eKYC by June 30, 2026 to keep receiving.";

const NEW_CONTENT = `## Mahtari Vandana Yojana at a glance

Mahtari Vandana Yojana is a Chhattisgarh state cash transfer that pays Rs. 1,000 every month to eligible married, widowed, or divorced women aged 21 and above from families with an annual income below Rs. 2.5 lakh. The scheme was launched on March 1, 2024 by Chief Minister Vishnu Deo Sai and is administered by the Women and Child Development Department under Minister Laxmi Rajwade.

The annual payout is Rs. 12,000 per beneficiary. Around 70 lakh women are enrolled and receive the monthly credit, per the Chhattisgarh Women and Child Development Department's official portal. The state disbursed over Rs. 16,881 crore under the scheme in its first 26 monthly installments through April 2026.

The scheme's name translates literally as "salute to the mother" in Hindi and Chhattisgarhi, evoking a cultural framing similar to how Odisha's Subhadra scheme references the sister figure. The name was chosen to signal continuity with Chhattisgarh's traditional respect for the maternal figure in household decisions.

The Chhattisgarh government has allocated approximately Rs. 8,000 crore per year for the scheme, funded through a combination of state own revenue and central devolution.

## The eKYC drive and why it matters right now

Unlike Karnataka's Gruha Lakshmi or Maharashtra's Ladki Bahin, Mahtari Vandana has a hard eKYC recompletion deadline. The Chhattisgarh government announced in April 2026 that every existing beneficiary must complete a fresh Aadhaar-based eKYC by June 30, 2026. Failure to complete the eKYC on time results in the monthly Rs. 1,000 payment being suspended from July 2026 onwards.

The reason for the recompletion drive is that a state audit conducted in early 2026 found around 4 lakh beneficiaries whose Aadhaar seeding or biometric records had gone stale after the first year of scheme operations. The eKYC drive is intended to clean the roll and prevent misdirected payments.

Where to complete the eKYC. Village residents should visit their Gram Panchayat Bhawan. The panchayat secretary or the deployed Community Service Provider handles the eKYC using a portable biometric device. Urban residents should visit the Ward Office or the ULB (Urban Local Body) Citizen Service Centre. Both channels use the same UIDAI biometric authentication system.

The eKYC takes 5 to 10 minutes per beneficiary. There is no fee. Bring your Aadhaar card (physical or a printed downloaded copy from mAadhaar) and the Mahtari Vandana beneficiary ID card if you have one. If your Aadhaar fingerprint or iris cannot be captured due to age or physical condition, the operator can use an OTP-based eKYC as a fallback.

An SMS from MHTRVN (Mahtari Vandana) confirms that the eKYC has been recorded. Save this SMS as proof.

## Who qualifies for the Rs. 1,000 monthly payment

A woman qualifies for Mahtari Vandana if she meets all five conditions. The scheme's eligibility screen is narrower than Karnataka's Gruha Lakshmi and Maharashtra's Ladki Bahin because it excludes unmarried women.

| Requirement | Detail |
|---|---|
| Residency | Permanent resident of Chhattisgarh |
| Marital status | Married, widowed, or divorced |
| Age | 21 years and above (no formal upper age limit) |
| Annual family income | Below Rs. 2.5 lakh |
| Bank account | Aadhaar-seeded savings account with DBT active |

The absence of an upper age limit is notable. Karnataka's Gruha Lakshmi has no upper limit either, but Maharashtra caps at 65 and Odisha at 60. Chhattisgarh's design allowed senior women to remain on the roll to avoid the cliff-edge effect where a beneficiary loses eligibility at a fixed age.

The married, widowed, or divorced filter excludes unmarried women entirely, unlike Ladki Bahin which added a carve-out for unmarried 21 to 25 year olds in January 2025. Chhattisgarh has not announced a similar carve-out and continues to route unmarried women's cash support through other schemes.

Only one woman per family qualifies. If a household has multiple eligible women, only one can register. The Mahtari Vandana guidelines give priority to the woman who is named on the ration card if multiple are otherwise eligible.

## Who is excluded

The Chhattisgarh government listed three explicit exclusion categories at launch. These filters remain in force in 2026 and are cross-checked during and after the application.

Women who are income tax payers, or whose spouse pays income tax, are excluded. The state uses PAN records for the post-approval cross-check.

Women who currently hold or previously held constitutional office, including sitting or former MPs, MLAs, and Members of Legislative Council, are excluded. This carve-out is symbolic rather than large in numbers.

Government employees at the central or state level, including contract employees earning above the Rs. 2.5 lakh threshold, and pension-drawing retirees whose combined pension crosses the threshold, are excluded. This applies to the applicant herself or to her spouse.

Post-launch guidance from the state added two implicit exclusions. Households owning more than 5 acres of irrigated agricultural land are typically excluded during field verification. Households where any member is a professional (doctor, lawyer, chartered accountant) with a registered practice are presumed above the threshold and excluded.

## Documents you need before you apply

Mahtari Vandana requires six documents at the application stage. Missing even one causes the application to be flagged Incomplete and the 30-day approval clock is paused until the correction is uploaded.

- Aadhaar card of the applicant (original for eKYC, scanned copy for upload)
- Aadhaar-seeded bank account passbook, front page showing account number and IFSC
- Marriage certificate for married women, husband's death certificate for widows, or divorce decree for divorced women
- Income certificate from the tehsildar showing family income below Rs. 2.5 lakh
- Chhattisgarh residence or domicile certificate
- Recent passport-size photograph taken in the last six months

The income certificate has to be from the current year or the previous one. Older certificates are rejected. Marriage and widowhood certificates must be issued by the concerned municipal or panchayat authority, not just self-attested.

## Bank account and Aadhaar seeding

Mahtari Vandana uses the National Payments Corporation of India's Aadhaar Payment Bridge to route payments. Your bank account has to be seeded with your Aadhaar in NPCI's mapper before the transfer can succeed.

Confirm seeding through three channels. Log in to your bank's app and look for Aadhaar Seeding under Account Services. Alternatively, dial *99*99*1# from your Aadhaar-registered mobile and follow the IVR prompts. The most reliable check is on the UIDAI portal at resident.uidai.gov.in, which returns the name of the bank your Aadhaar is currently mapped to.

If your Aadhaar is mapped to a dormant account rather than your active account, transfers will go to the dormant account. Fix this by walking into the branch where you want the money and submitting an Aadhaar seeding request. Ask the bank to set your account as the primary NPCI mapping. The change reflects in 3 to 7 working days.

Payment failures caused by a missing or incorrect NPCI mapping account for approximately 60 percent of Mahtari Vandana grievances filed with the state helpline.

## Step-by-step online application on mahtarivandan.cgstate.gov.in

The online route is fastest for applicants with smartphone or computer access. The Chhattisgarh government routes the application through the dedicated portal at mahtarivandan.cgstate.gov.in.

1. Open mahtarivandan.cgstate.gov.in on any modern browser. Chrome, Firefox, and Edge work reliably.
2. Click Apply on the home page. Register with your Aadhaar-linked mobile number and complete OTP verification.
3. Log in with the OTP that arrives on the registered mobile.
4. Enter your Aadhaar number. The portal calls the UIDAI eKYC service and auto-fills your name, date of birth, and address.
5. Select your marital status and upload the corresponding certificate (marriage, widowhood, or divorce).
6. Enter your income certificate details. The portal validates against the state revenue department database.
7. Enter bank details, including account number, IFSC, and name on account. The portal runs a live Aadhaar seeding check and shows a green tick when the mapping is confirmed.
8. Upload the remaining documents in PDF or JPG format. Each file must be under 300 KB.
9. Submit the application. The portal generates a Mahtari Vandana application ID. Note it and take a screenshot.

Applications are processed within 30 working days under the state's Right to Public Services Act. Track status at any time using the application ID on the same portal.

Common errors and how to fix them. If the OTP does not arrive during registration, your Aadhaar-linked mobile number may be inactive or unregistered. Visit an Aadhaar Seva Kendra to update the mobile number, then retry. If the marital status certificate upload fails, check the file size and format; PDFs and JPGs under 300 KB are accepted, other formats are rejected.

## Offline application at Gram Panchayat Bhawan and Ward Office

Not every eligible woman has smartphone or internet access. The Chhattisgarh government designated three types of offline service centres to handle Mahtari Vandana applications with the same weight as an online submission.

- Anganwadi centres serve rural applicants at the village level. Around 51,000 Anganwadis operate across Chhattisgarh and each is trained to accept the application.
- Gram Panchayat Bhawans handle applications from panchayat-area residents. The Sarpanch or panchayat secretary can accept and forward the application.
- Ward Offices in urban areas handle applications from town and city residents. The ULB Citizen Service Centre operator processes the intake.

Service centre charges are capped at Rs. 15 per form under the Chhattisgarh Right to Public Services Act. Any centre demanding more should be reported on the state helpline 181.

A door-to-door enrolment drive was active from March 2024 to July 2024 through appointed Mitanin health workers who visited households to enrol beneficiaries. This drive is currently paused. Any new applicant in 2026 should use one of the three centre types above.

## Completing eKYC before the June 30, 2026 deadline

The June 30, 2026 eKYC recompletion deadline applies only to existing beneficiaries whose payments started before April 2026. New applicants complete eKYC as part of the initial application and do not need to do it again.

Where to check if you need to redo eKYC. Log in to mahtarivandan.cgstate.gov.in and check the eKYC Status field on your beneficiary dashboard. If it reads Pending or Expired, you need to visit an eKYC centre before June 30, 2026.

The Gram Panchayat Bhawan is the primary eKYC channel for village residents. Every panchayat has been supplied with a portable biometric device for the drive. The panchayat secretary or the Community Service Provider handles the eKYC.

Ward Offices handle eKYC for town and city residents. The Urban Development Department has designated one Citizen Service Centre per ward for the drive.

Anganwadi workers also help with eKYC for women who cannot travel. They can accompany the applicant to the nearest centre or arrange a home visit if the applicant is bedridden.

What happens if the deadline is missed. Payments are suspended from July 2026 onwards. To restore, complete the eKYC and file a reinstatement request at your Ward Office or Gram Panchayat. Reinstated beneficiaries do not get retroactive credits for the suspended months.

## What happens after you apply

Once submitted, your application moves through four verification stages. The state has built a dashboard on the portal for beneficiaries to track.

Stage one is document verification by the block-level Mahtari Vandana cell. Officers check that all six documents are present, legible, and match form details. This takes 3 to 7 working days.

Stage two is eligibility cross-check against the Income Tax Department, the state salary and pension registry, and the vehicle registration records. This is automated and completes within 48 hours.

Stage three is field verification for a random 10 percent of applications. Anganwadi workers or panchayat staff visit the applicant's home to confirm residency and marital status. This can add 15 to 30 days to processing for the sampled applications.

Stage four is sanction and monthly payment mapping. Once cleared, you are added to the roll and receive your first credit between the 1st and 10th of the month after sanction.

You receive an SMS at each stage from the sender ID MHTRVN. The messages typically read Your Mahtari Vandana application MV202412000000 has been approved followed by the sanction date and expected first credit date.

## How to check if your Rs. 1,000 has been credited

Four channels report Mahtari Vandana payment status. Use whichever fits your access.

The Mahtari Vandana portal has a Check Payment Status page under the Beneficiary menu. Log in with your registered mobile number and OTP. The dashboard shows every credit for the last 12 months, including the date, amount, and bank reference number.

Bank SMS alerts are the fastest confirmation. Every DBT credit generates a message that includes the sender name MHTRVNDBT or CGWCDDBT. If you have not received a message by the 10th of the month, the payment is likely delayed.

The Public Financial Management System portal at pfms.nic.in has a Know Your Payment section. Enter your bank account number and IFSC to see all recent DBT credits, including Mahtari Vandana.

Anganwadi workers can also print your Mahtari Vandana payment statement on request. Most Anganwadis have a printer supplied under the state's rural digital access programme.

## What to do if a payment is missed

Missed payments have three common causes plus one that is specific to Mahtari Vandana. Diagnose which applies before you contact the helpline.

The most common cause is broken Aadhaar seeding. Banks periodically require re-KYC, and if the deadline was missed, your account is delinked from the NPCI mapper until re-KYC completes. Visit your bank with your Aadhaar and complete re-KYC. The delayed payment will be released with the next monthly credit.

The second cause is an expired scheme eKYC. Since April 2026, the state has been treating stale scheme eKYCs (over 12 months old without a refresh) as reasons for temporary suspension. Complete the fresh eKYC at your Gram Panchayat Bhawan or Ward Office to restore payments.

The third cause is a state treasury delay. In months where the state's revenue collections run behind schedule, Mahtari Vandana payments can be delayed by two to four weeks. Missed months are usually clubbed with the next monthly credit.

The fourth cause is specific to Mahtari Vandana: change in marital status. If your marital status changes (for example, if you were divorced and remarried, or if you were widowed and the state receives evidence of remarriage), your eligibility can be reviewed. Marital status changes must be updated on the portal within 30 days.

If none of these apply, call the helpline 181 with your Mahtari Vandana application ID. Grievances are supposed to be resolved within 15 working days per the scheme guidelines.

## Mahtari Vandana vs other state women cash transfer schemes

Mahtari Vandana drew directly from Madhya Pradesh's Ladli Behna Yojana, which the BJP launched in June 2023 and which is credited with helping the party win the November 2023 MP assembly election. Several states have since launched variants. Here is how the four leading schemes compare.

| Feature | Mahtari Vandana (Chhattisgarh) | Gruha Lakshmi (Karnataka) | Ladki Bahin (Maharashtra) | Subhadra (Odisha) |
|---|---|---|---|---|
| Monthly amount | Rs. 1,000 | Rs. 2,000 | Rs. 1,500 | Rs. 833 (Rs. 10,000 a year in 2 tranches) |
| Annual payout | Rs. 12,000 | Rs. 24,000 | Rs. 18,000 | Rs. 10,000 |
| Beneficiary count | 70 lakh | 1.28 crore | 2.34 crore | 1.05 crore |
| Age eligibility | 21 and above, no upper limit | 18 and above, no upper limit | 21 to 65 | 21 to 60 |
| Income cap | Rs. 2.5 lakh household | No income cap, tax filing disqualifies | Rs. 2.5 lakh household | Rs. 2.5 lakh household OR NFSA card |
| Marital filter | Married, widowed, divorced only | No marital filter | Married, widowed, divorced, abandoned, destitute (or unmarried 21-25) | No marital filter |
| Head-of-family rule | Not required | Must be head of ration card | Not required | Not required |
| eKYC re-verification | Yes, deadline June 30, 2026 | Not required | Not required | Not required |
| Launch date | March 1, 2024 | August 19, 2023 | June 28, 2024 | September 17, 2024 |
| Delivery mechanism | DBT via Aadhaar-seeded account | DBT via Aadhaar-seeded account | DBT via Aadhaar-seeded account | DBT via Aadhaar-seeded account plus branded Subhadra RuPay card |
| Portal | mahtarivandan.cgstate.gov.in | sevasindhu.karnataka.gov.in | ladakibahin.maharashtra.gov.in | subhadra.odisha.gov.in |

Mahtari Vandana has the smallest per-beneficiary payout of the four but the second-lowest annual outlay per state. Chhattisgarh's total scheme cost of around Rs. 8,000 crore per year is a smaller share of the state budget than the corresponding Karnataka or Maharashtra allocations.

## Central schemes you can stack with Mahtari Vandana

Mahtari Vandana is a state benefit and does not stop a beneficiary from claiming any Government of India welfare scheme she qualifies for. Women receiving Mahtari Vandana should also look at these five central schemes.

[PM Suraksha Bima Yojana (PMSBY)](https://www.sarkaridarapan.com/sarkari-yojana/pm-suraksha-bima-yojana) gives Rs. 2 lakh accident insurance for a premium of Rs. 20 per year. Available to anyone aged 18 to 70 with a savings account.

Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) gives Rs. 2 lakh life insurance for a premium of Rs. 436 per year. Covers death from any cause. Available to anyone aged 18 to 50.

Pradhan Mantri Matru Vandana Yojana (PMMVY) pays Rs. 5,000 for a first pregnancy and Rs. 6,000 for a second if the child is a girl. Applies to women aged 19 and above at first pregnancy.

Atal Pension Yojana (APY) is a co-contributory pension for unorganised workers. A woman aged 18 to 40 can choose a pension of Rs. 1,000 to Rs. 5,000 per month payable from age 60. Contributions range from Rs. 42 to Rs. 291 per month.

Pradhan Mantri Jan Dhan Yojana (PMJDY) is a zero-balance bank account with a Rs. 10,000 overdraft, a RuPay debit card, and Rs. 2 lakh accident cover built in.

None of these central schemes push a woman into income tax territory, so enrolling in them does not affect Mahtari Vandana eligibility.

## The political context: Chhattisgarh 2023 election

Mahtari Vandana's launch on March 1, 2024 came 84 days after the Vishnu Deo Sai government was sworn in on December 13, 2023, following the BJP's win of 54 of 90 seats in the November 2023 Chhattisgarh Assembly election. The result ended a five-year Congress government under Bhupesh Baghel.

Mahtari Vandana was one of the central promises in the BJP's Chhattisgarh manifesto. The party had committed to launching the scheme within the first 100 days of coming to power. The launch on day 78 came comfortably under the self-imposed deadline. The first monthly installment credited on March 8, 2024, aligned with International Women's Day.

The scheme design borrowed directly from Madhya Pradesh's Ladli Behna Yojana, which had been launched by the BJP-led Shivraj Singh Chouhan government in June 2023 and which was credited by post-election analyses with helping the BJP win the MP assembly election in November 2023. The Chhattisgarh variant matched the amount (Rs. 1,000 in Chhattisgarh vs Rs. 1,250 in MP after the MP scheme's later revision), the eligibility screen (married, widowed, or divorced with an income cap), and the delivery mechanism (monthly DBT via Aadhaar-seeded account).

The June 2024 Lok Sabha election, held five months after Mahtari Vandana's launch, saw the BJP win 10 of 11 seats in Chhattisgarh, a significant improvement over its 9 of 11 tally in 2019. Analyses by CSDS-Lokniti attributed part of the improvement to women voters swinging toward the BJP in districts with high Mahtari Vandana enrolment.

## Frequently asked questions

**Who is eligible for Mahtari Vandana Yojana in Chhattisgarh?**
Married, widowed, or divorced women aged 21 and above who are permanent residents of Chhattisgarh from families with an annual income below Rs. 2.5 lakh. The applicant or her spouse must not pay income tax, must not be a government employee, and must not hold constitutional office.

**How much does Mahtari Vandana Yojana pay every month?**
Rs. 1,000 every month, credited directly to your Aadhaar-seeded bank account. The annual total is Rs. 12,000.

**Can unmarried women apply for Mahtari Vandana?**
No. The scheme is restricted to married, widowed, or divorced women. Unmarried women are not eligible even if all other criteria are met. Chhattisgarh has not announced a carve-out for unmarried women unlike Maharashtra's Ladki Bahin.

**Do I need to complete eKYC every year?**
Yes. From April 2026, the state has required all existing beneficiaries to complete a fresh eKYC by June 30, 2026 to keep receiving payments. Complete the eKYC at your Gram Panchayat Bhawan (rural) or Ward Office (urban).

**What happens if I miss the June 30, 2026 eKYC deadline?**
Payments are suspended from July 2026 onwards. To restore, complete the eKYC and file a reinstatement request at your Ward Office or Gram Panchayat. You do not get retroactive credits for the suspended months.

**How do I check if my Mahtari Vandana payment has been credited?**
Log in to mahtarivandan.cgstate.gov.in and check the Beneficiary dashboard, look for the MHTRVNDBT SMS from your bank, query pfms.nic.in with your account and IFSC, or ask any Anganwadi worker to print your payment statement.

**Can two women in the same family both apply?**
No. Only one woman per family qualifies. If a household has multiple eligible women, only one can register. The scheme gives priority to the woman named on the ration card if multiple are otherwise eligible.

**Is there an upper age limit for Mahtari Vandana?**
No. The scheme does not fix any upper age limit. Senior women who continue to meet the income and marital status conditions keep receiving payments as long as their eKYC is current.

**How is Mahtari Vandana different from MP's Ladli Behna?**
Both schemes were launched by BJP state governments and share the same basic design. The main differences: Ladli Behna pays Rs. 1,250 per month (was raised from Rs. 1,000 in 2023), applies to any woman aged 21 to 60 without a marital status filter, and does not require an annual eKYC recompletion. Mahtari Vandana pays Rs. 1,000, restricts to married, widowed, or divorced women, has no upper age limit, and requires eKYC recompletion.

**Is there any application fee for Mahtari Vandana?**
No application fee. Service centres including Anganwadis, Gram Panchayats, and Ward Offices are allowed to charge up to Rs. 15 per form under the Chhattisgarh Right to Public Services Act.

## Sources and related pages

- Mahtari Vandana Yojana official portal: [mahtarivandan.cgstate.gov.in](https://mahtarivandan.cgstate.gov.in)
- Chhattisgarh Women and Child Development Department: [cgwcd.gov.in](https://cgwcd.gov.in)
- Public Financial Management System (payment tracking): [pfms.nic.in](https://pfms.nic.in)
- UIDAI Aadhaar bank seeding status: [resident.uidai.gov.in](https://resident.uidai.gov.in)
- Chhattisgarh Women Helpline: 181

Related pages on this site:

- [Gruha Lakshmi Yojana Karnataka: Rs. 2,000 monthly for women](https://www.sarkaridarapan.com/sarkari-yojana/gruha-lakshmi-yojana-karnataka)
- [Ladki Bahin Yojana Maharashtra: Rs. 1,500 monthly for women](https://www.sarkaridarapan.com/sarkari-yojana/majhi-ladki-bahin-yojana-maharashtra)
- [Subhadra Yojana Odisha: Rs. 50,000 over 5 years for women](https://www.sarkaridarapan.com/sarkari-yojana/subhadra-yojana-odisha)
- [PM Suraksha Bima Yojana (PMSBY): Rs. 20 accident insurance](https://www.sarkaridarapan.com/sarkari-yojana/pm-suraksha-bima-yojana)
- [Government schemes in Chhattisgarh](https://www.sarkaridarapan.com/state/chhattisgarh)`;

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
