import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xtjbijvxxeoopcqxycpz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY",
);

const SLUG = "gruha-lakshmi-yojana-karnataka";

const NEW_TITLE = "Gruha Lakshmi Yojana 2026: Rs. 2,000 Monthly for Karnataka Women";
const NEW_DESCRIPTION = "Gruha Lakshmi Yojana pays Rs. 2,000 a month to women listed as head of family on Karnataka ration cards. 1.3 crore women enrolled. Apply on Seva Sindhu.";

const NEW_CONTENT = `## Gruha Lakshmi Yojana at a glance

Gruha Lakshmi is a Karnataka state cash transfer that pays Rs. 2,000 every month to the woman named as head of family on a state-issued ration card. The scheme was launched on August 19, 2023 by Chief Minister Siddaramaiah in Mysuru and is administered by the Directorate of Women and Child Development, Government of Karnataka. Over 1.28 crore women are enrolled and receive the monthly credit through Direct Benefit Transfer to their Aadhaar-seeded bank accounts, per the state government's official Gruha Lakshmi portal.

The annual payout works out to Rs. 24,000 per beneficiary. Gruha Lakshmi is one of the largest women-focused welfare lines in the Karnataka state budget.

Gruha Lakshmi is one of five election guarantees that the Karnataka Congress delivered after coming to power in May 2023. The other four are Anna Bhagya (10 kg free rice per BPL person), Gruha Jyothi (200 units of free electricity per household), Shakti (free bus travel for women in state buses), and Yuva Nidhi (unemployment allowance for degree and diploma holders).

## Who qualifies for the Rs. 2,000 monthly payment

A woman qualifies for Gruha Lakshmi if all four conditions are satisfied. The scheme deliberately kept the entry bar low so that first-time applicants would not need any new government paperwork beyond what a family already has for ration.

| Requirement | Detail |
|---|---|
| Residency | Permanent resident of Karnataka with a state-issued ration card |
| Ration card type | Antyodaya Anna Yojana (AAY), Below Poverty Line (BPL), or Above Poverty Line (APL) card |
| Ration card status | The applicant must be recorded as head of family (Yajamani or Kutumbada Pramukhi) on the card |
| Tax status | Neither the applicant nor her spouse is an income tax payer or a GST payer |

The scheme does not fix any minimum age. A woman who is above 18 and named as head of family on the ration card qualifies. There is no upper age limit either, which means senior women who continue to be listed as household heads keep receiving the payment as long as tax and residency conditions hold.

Note that the head-of-family rule is strict. If the ration card lists a man (typically the husband or father-in-law) as head, the woman does not become eligible by simply applying. She has to first request a change of head on the ration card by visiting the Nada Kacheri or the Food and Civil Supplies office. The change usually takes 15 to 30 working days and requires the current head's consent unless the current head is deceased.

## Why some women are excluded

Two categories of income tax status disqualify the household from Gruha Lakshmi. The rule looks at both the woman and her spouse. If either has ever filed an income tax return in the recent past, or is registered under GST, the household is excluded regardless of the ration card category.

The state government's interpretation is straightforward. If income is high enough to trigger a tax filing (currently Rs. 2.5 lakh annual income for the old regime and Rs. 3 lakh for the new regime, per the Income Tax Act as amended), the household is presumed capable of running itself without the Rs. 2,000 monthly transfer. Similarly, a GST registration signals an active business large enough to fall under the tax net.

This exclusion is verified at two stages. During application, the applicant self-declares the family's tax status. After approval, the Food and Civil Supplies Department cross-references PAN records with the Income Tax Department database and the GSTIN registry maintained by the Central Board of Indirect Taxes and Customs. A mismatch discovered later results in a stop payment order and, in some cases, recovery of amounts already paid.

Women whose husbands work in the unorganised sector, own small businesses that do not require GST registration (turnover under Rs. 40 lakh), or run their household on agricultural income are generally safe. Women whose husbands are salaried employees earning above the tax threshold, professionals with a GST-registered practice, or owners of a GST-registered shop are the most common cases that get flagged post-approval.

## Bank account and Aadhaar seeding requirements

The Rs. 2,000 comes through Direct Benefit Transfer using the National Payments Corporation of India's Aadhaar Payment Bridge. This means your bank account has to be seeded with your Aadhaar before the first credit can go through. Simply having the same name on your Aadhaar and passbook is not enough. The bank has to have run a specific NPCI mapping process against your account.

You can verify Aadhaar seeding in three ways. Log in to your bank's mobile app and look for an Aadhaar section under Account Services. Alternatively, dial *99*99*1# from your Aadhaar-registered mobile number and follow the IVR prompts to check the mapping status. The most reliable check is on the UIDAI portal itself at resident.uidai.gov.in, where the Check Aadhaar and Bank Account Linking Status service returns your currently mapped bank name.

If your Aadhaar is mapped to an old account (say, your first salary account from a previous job) rather than your active account, Gruha Lakshmi credits will go to that old account. Two things fix this. Submit an Aadhaar seeding request at the branch of the bank where you want the money, and simultaneously ask that bank to set your account as the primary mapping. The change reflects in NPCI records within 3 to 7 working days.

Joint accounts are accepted only if the woman is the primary holder. If the account is held in her husband's name with her as second holder, the DBT will fail and the payment will bounce back to the state treasury.

## Step-by-step online application on Seva Sindhu

The online route is the fastest for women with a smartphone or computer access. The Karnataka government routes the application through the Seva Sindhu portal at sevasindhu.karnataka.gov.in.

1. Open sevasindhu.karnataka.gov.in on any browser. The portal works on Chrome, Firefox, and Edge. Older browsers may fail to load the OTP screen.
2. Click Apply for Services on the home page. If you are a first-time user, register with your Aadhaar-linked mobile number and set a password.
3. Log in and search Gruha Lakshmi in the search bar. Click the result labelled Application for Gruhalakshmi Scheme.
4. Enter your ration card number in the field marked Ration Card Number. The system auto-fetches your family details from the Food and Civil Supplies database.
5. Confirm that your name appears as head of family in the fetched details. If it does not, stop here and get the ration card corrected before continuing.
6. Enter your bank account number and IFSC code. The portal validates that the account is Aadhaar-seeded before letting you proceed.
7. Upload scanned copies of Aadhaar, ration card, bank passbook first page, and a recent passport-size photograph. Each file must be under 200 KB in PDF or JPG format.
8. Tick the self-declaration box confirming that neither you nor your spouse pays income tax or GST.
9. Submit the application. The portal generates a Sakala reference number. Note this down and take a screenshot.

The Sakala service delivery guarantee for Gruha Lakshmi is 45 working days. If your application is not disposed of within this window, you can escalate on the Sakala portal at sakala.kar.nic.in.

Common errors people hit at each step and how to fix them. If the mobile OTP fails to arrive during registration, the most common reason is that the mobile number is not linked to your Aadhaar. Update the mobile number at any Aadhaar Seva Kendra first, then retry. If the ration card auto-fetch shows an error, the card may be temporarily blocked for eKYC. Complete the ration card eKYC at a Nyaya Bele centre or Grama One centre before reapplying.

## Offline application options for rural applicants

Not every applicant has a smartphone or reliable internet. The Karnataka government designated five categories of offline service centres to handle Gruha Lakshmi applications with the same weight as an online submission.

- Grama One centres serve villages and gram panchayat headquarters. There are over 6,700 Grama One centres across Karnataka.
- Karnataka One centres serve district and taluk headquarters as well as smaller towns.
- Bangalore One centres serve the Bengaluru urban district.
- Bapuji Seva Kendra centres focus on rural clusters and are typically run out of gram panchayat offices.
- Nada Kacheri (also called Nadakacheri) offices are the traditional revenue department front offices in each hobli.

Walk into any of these with the same set of documents you would upload online. The operator fills the form on your behalf, scans the documents, and gives you a printed Sakala acknowledgement slip. Service charges are capped at Rs. 15 per application per the Karnataka Sakala Act.

Home enrolment was also offered in 2023 and 2024 through appointed volunteers who went door to door. This drive is no longer active, so any new applicant in 2026 should use one of the five centre types listed above.

## Documents you need before you apply

Keep these five documents ready before you begin the application, whether online or at a service centre. Missing even one causes the application to be sent back for correction, which resets the 45-day Sakala clock.

- Aadhaar card of the applicant (original for verification, scanned copy for upload)
- Ration card that lists the applicant as head of family
- Aadhaar-linked bank account passbook, front page showing account number and IFSC
- Passport-size photograph taken within the last six months
- Self-declaration form stating that neither the applicant nor her spouse pays income tax or GST (the format is available on the Seva Sindhu portal and at every service centre)

Optional but useful. A Karnataka domicile certificate can speed up verification for applicants whose ration card is under three years old. Similarly, a copy of the previous year's electricity bill in the same household name helps clear residency doubts if the ration card address is different from the current address.

## What happens after you apply

Once submitted, your application moves through three stages. First, the Food and Civil Supplies Department verifies that you are recorded as head of family on the cited ration card. This typically takes 5 to 10 working days.

Second, the Income Tax verification runs against PAN records. This is automated and completes within 24 to 48 hours if the PAN is clean. If there is a match against a tax return or GST registration, the application is flagged for manual review by a Group A officer at the district level.

Third, the Directorate of Women and Child Development sanctions the payment and adds the account to the monthly disbursement roll. The first credit lands in your account on the 10th to 15th of the month after sanction. All subsequent credits arrive between the 10th and 20th of every month.

You will get an SMS on your Aadhaar-linked mobile number at each stage. The messages come from KAWCD (Karnataka Women and Child Development) and typically read Your Gruha Lakshmi application ARN123456 has been approved followed by the sanction date.

## How to check if your Rs. 2,000 has been credited

The state provides four separate ways to check payment status. Use whichever fits your access.

The Seva Sindhu portal has a Track Your Application section that shows both application status and payment history. Enter your ARN (application reference number) or your Aadhaar number. The credit dates for the last 12 months are listed.

Your bank's SMS alert service is the fastest confirmation. Every DBT credit generates a message that includes the sender name KAWCDDBT or KARWCD. If you have not received the current month's SMS by the 20th, the payment is likely delayed.

The Public Financial Management System portal at pfms.nic.in has a Know Your Payment section. Enter your bank account number and IFSC to retrieve the latest 30 credits including the reference number and date.

Grama One and Karnataka One centres can also print your Gruha Lakshmi payment statement for any month on request. Charges are Rs. 10 per printout.

## What to do if your payment is missing this month

The most common cause of a missed payment is that your Aadhaar seeding has broken. Banks periodically require re-KYC, and if you missed the deadline, the account is delinked from NPCI mapping until re-KYC is complete. Visit your bank with your Aadhaar and rebuild the seeding.

The second most common cause is that your ration card head-of-family status changed. If someone else in your household applied for and received a fresh ration card that lists a different person as head, your Gruha Lakshmi eligibility is automatically suspended. This usually happens when a young couple splits from the parents' household. The fix is to file for restoration or to reapply as head of a new card.

The third cause is a Karnataka Treasury delay. In months where the state has liquidity issues (typically April to June, when GST devolution from the Centre lags), payments can be delayed by two to four weeks. When this happens, the missed month is usually clubbed with the next month's credit and both amounts are transferred together. Do not reapply during a treasury delay because it can duplicate your entry.

If none of these apply, call the Seva Sindhu helpline on 1902 with your ARN. The operator can raise a grievance ticket that goes directly to the district-level Grievance Redressal Officer for Gruha Lakshmi. Grievances are supposed to be resolved within 15 working days per the scheme guidelines.

## Common rejection reasons and how to appeal

Around 8 percent of first-time applications get rejected per the Directorate of Women and Child Development's 2024-25 status report. The reasons cluster into a small set that a careful applicant can avoid.

The applicant is not head of family on the ration card. This is the single largest rejection reason. Fix it by first changing the head on the ration card before applying.

Tax or GST record found for the applicant or spouse. If this is a wrongly matched PAN (say, a distant relative shares your name), file an appeal with the district-level Special Officer under the Directorate. Attach a Form 26AS and an income tax filing NIL certificate for both the applicant and the spouse for the last three years.

Bank account is not Aadhaar-seeded. This shows up as a technical rejection. Complete the Aadhaar seeding first and then reapply on Seva Sindhu with the updated bank details.

Ration card is dormant or blocked. Some ration cards get temporarily blocked when the annual eKYC deadline is missed. Complete the eKYC at any Grama One centre and the block clears within 3 working days.

Appeal window is 30 days from the rejection SMS. Appeals are filed at the taluk-level Assistant Director of Women and Child Development office. Bring the rejection SMS printout, all original documents, and any corrective proof (updated ration card, income tax NIL certificate, or bank re-KYC receipt).

## Gruha Lakshmi vs other state women cash transfer schemes

Several states have launched similar direct cash transfers to women in the last three years, borrowing the political and administrative playbook. Here is how Gruha Lakshmi compares against the three closest analogues.

| Feature | Gruha Lakshmi (Karnataka) | Ladki Bahin (Maharashtra) | Subhadra (Odisha) | Mahtari Vandana (Chhattisgarh) |
|---|---|---|---|---|
| Monthly amount | Rs. 2,000 | Rs. 1,500 | Rs. 833 (Rs. 10,000 a year in 2 installments) | Rs. 1,000 |
| Annual payout | Rs. 24,000 | Rs. 18,000 | Rs. 10,000 | Rs. 12,000 |
| Beneficiary count | 1.28 crore | 2.34 crore | 1.05 crore | 70 lakh |
| Age eligibility | 18 and above, no upper limit | 21 to 65 | 21 to 60 | 21 and above (married only) |
| Income cap | No income cap, tax filing disqualifies | Rs. 2.5 lakh annual household income | Rs. 2.5 lakh annual household income | Rs. 2.5 lakh annual household income |
| Marital status | No requirement | No requirement | No requirement | Married only (widows and divorcees also eligible) |
| Head-of-family rule | Must be head of ration card family | Not required | Not required | Not required |
| Launch date | August 19, 2023 | July 1, 2024 | September 17, 2024 | March 1, 2024 |
| Delivery mechanism | DBT via Aadhaar-seeded account | DBT via Aadhaar-seeded account | DBT to Subhadra debit card (separate account) | DBT via Aadhaar-seeded account |
| Portal | sevasindhu.karnataka.gov.in | ladakibahin.maharashtra.gov.in | subhadra.odisha.gov.in | mahtarivandan.cgstate.gov.in |

Karnataka's per-beneficiary payout is the highest of the four, but the head-of-family filter also makes it the hardest to qualify for. Maharashtra's Ladki Bahin has the largest beneficiary base because it uses the simplest eligibility screen. Odisha's Subhadra is unique in that it delivers through a separate branded debit card rather than the existing bank account, which reduces the risk of the money being spent on shared household expenses.

## Central schemes you can also stack with Gruha Lakshmi

Gruha Lakshmi is a state benefit and does not stop a beneficiary from claiming any Government of India welfare scheme she qualifies for. Women who are already receiving Rs. 2,000 monthly should check these five central schemes for additional coverage.

[PM Suraksha Bima Yojana (PMSBY)](https://www.sarkaridarapan.com/sarkari-yojana/pm-suraksha-bima-yojana) gives Rs. 2 lakh accident insurance for a premium of Rs. 20 per year. Available to anyone aged 18 to 70 with a savings bank account. Auto-debited every June.

Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) gives Rs. 2 lakh life insurance for a premium of Rs. 436 per year. Covers death from any cause, including illness. Available to anyone aged 18 to 50 with a savings bank account.

Pradhan Mantri Matru Vandana Yojana (PMMVY) pays Rs. 5,000 for the birth of the first child and Rs. 6,000 for the second child if the second is a girl. Applies to all women whose age is 19 and above at the time of first pregnancy. Different application flow through the Anganwadi worker.

Atal Pension Yojana (APY) is a co-contributory pension scheme for unorganised workers. A woman aged 18 to 40 can choose a pension of Rs. 1,000 to Rs. 5,000 per month payable from age 60. Contributions vary from Rs. 42 to Rs. 291 per month depending on entry age and target pension.

Pradhan Mantri Jan Dhan Yojana (PMJDY) is a zero-balance account with a Rs. 10,000 overdraft facility, a RuPay debit card, and Rs. 2 lakh accident insurance built in. Any adult with valid Aadhaar can open one at any public sector bank branch.

There is no scheme-to-scheme conflict when a Gruha Lakshmi beneficiary also enrols in any of these five. The tax-status filter for Gruha Lakshmi remains the same regardless of how many central schemes she joins because central schemes do not push her into tax-payer status.

## The politics behind Karnataka's Pancha Guarantees

Gruha Lakshmi came out of a specific political calculation. In the run-up to the May 2023 Karnataka Assembly elections, the Congress party made five election guarantees a central plank of its campaign. The party had seen the electoral upside of similar cash-transfer schemes in Tamil Nadu (DMK's Kalaignar Magalir Urimai Thogai), Andhra Pradesh (YSRCP's Amma Vodi), and Telangana (Rythu Bandhu). The Karnataka Congress consolidated the model into the Pancha Guarantees.

Direct cash transfers to women are widely considered more electorally productive than in-kind subsidies to households, because the money reliably flows into food, children's education, and small savings rather than into discretionary spending. Karnataka's per-beneficiary amount of Rs. 2,000 is currently the highest among comparable state schemes.

The scheme faces two standing criticisms. Fiscal conservatives argue that a multi-thousand-crore annual outlay for a single guarantee scheme constrains capital spending on higher education and public health. Karnataka's fiscal deficit has moved closer to the 3 percent ceiling under the Karnataka Fiscal Responsibility Act since the Pancha Guarantees rolled out.

The second criticism is that the head-of-family filter excludes women in traditional joint families where the husband or father-in-law does not agree to change the ration card head. A woman who otherwise meets every eligibility bar can still be locked out purely by household dynamics. The state government has indicated it is studying an alternate route through the Family ID system introduced in 2024, but no policy change has been notified so far.

## Frequently asked questions

**Who is eligible for Gruha Lakshmi Yojana in Karnataka?**
Any woman who is listed as head of family on a Karnataka state ration card (AAY, BPL, or APL), is a permanent resident of Karnataka, and whose family does not pay income tax or GST. There is no minimum or maximum age.

**How much money will I receive under Gruha Lakshmi?**
Rs. 2,000 every month, credited directly to your Aadhaar-seeded bank account. The annual total is Rs. 24,000.

**Can I apply if my husband is listed as head of family on the ration card?**
No. You have to first change the ration card head to your name by visiting the Nada Kacheri or the Food and Civil Supplies office. The process takes 15 to 30 working days and needs the current head's consent (or a death certificate if the current head is deceased).

**Is Gruha Lakshmi available to APL card holders?**
Yes. All three ration card categories (AAY, BPL, and APL) are eligible, provided the applicant is head of family and the household does not fall under the tax-payer exclusion.

**What if my bank account is not Aadhaar-seeded?**
Complete the seeding at your bank branch before applying. Aadhaar seeding is different from just having the same name on your Aadhaar and passbook. Bank staff has to run an NPCI mapping request. Confirm the seeding status on the UIDAI portal at resident.uidai.gov.in before submitting the Gruha Lakshmi application.

**How do I check if my Gruha Lakshmi payment has been credited?**
Four options. Check the Seva Sindhu Track Your Application section, look for the KAWCDDBT SMS from your bank, query pfms.nic.in with your account number and IFSC, or ask any Grama One or Karnataka One centre to print your payment statement.

**What happens if I miss a month's payment?**
Most commonly the Aadhaar seeding has broken. Redo the seeding at your bank and the delayed amount will be released along with the current month's credit. If the delay is state-wide (usually April to June when GST devolution is late), payments arrive later but never lapse.

**Can I apply if I moved to Karnataka from another state?**
You need a Karnataka ration card that shows you as head of family. If you have moved recently, first apply for a new Karnataka ration card by visiting the Food and Civil Supplies office in your current taluk. The card usually takes 30 to 60 working days.

**Is there any application fee for Gruha Lakshmi?**
No application fee. Service centres are allowed to charge up to Rs. 15 per application form assistance per the Karnataka Sakala Act. Beware of anyone asking for higher amounts.

**Will the Rs. 2,000 stop if my income situation changes?**
Yes. If your family becomes an income tax payer or registers under GST at any point, your eligibility ends from that financial year onwards. The state cross-checks PAN and GSTIN records every quarter and issues stop payment orders on newly disqualified accounts.

## Sources and related pages

- Karnataka Government Gruha Lakshmi portal: [gruhalakshmi.karnataka.gov.in](https://gruhalakshmi.karnataka.gov.in)
- Seva Sindhu application portal: [sevasindhu.karnataka.gov.in](https://sevasindhu.karnataka.gov.in)
- Sakala service delivery portal: [sakala.kar.nic.in](https://sakala.kar.nic.in)
- Directorate of Women and Child Development: [dwcdkar.gov.in](https://dwcdkar.gov.in)
- Public Financial Management System (payment tracking): [pfms.nic.in](https://pfms.nic.in)
- UIDAI Aadhaar bank seeding status: [resident.uidai.gov.in](https://resident.uidai.gov.in)

Related pages on this site:

- [PM Suraksha Bima Yojana (PMSBY)](https://www.sarkaridarapan.com/sarkari-yojana/pm-suraksha-bima-yojana)
- [Mahtari Vandana Yojana Chhattisgarh](https://www.sarkaridarapan.com/sarkari-yojana/mahtari-vandana-yojana-chhattisgarh)
- [Subhadra Yojana Odisha](https://www.sarkaridarapan.com/sarkari-yojana/subhadra-yojana-odisha)
- [Majhi Ladki Bahin Yojana Maharashtra](https://www.sarkaridarapan.com/sarkari-yojana/majhi-ladki-bahin-yojana-maharashtra)
- [Government schemes in Karnataka](https://www.sarkaridarapan.com/state/karnataka)`;

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

// Show current state before write
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
