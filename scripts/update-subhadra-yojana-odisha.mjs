import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xtjbijvxxeoopcqxycpz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY",
);

const SLUG = "subhadra-yojana-odisha";

const NEW_TITLE = "Subhadra Yojana 2026: Rs. 50,000 for Odisha Women in 5 Years";
const NEW_DESCRIPTION = "Subhadra Yojana pays Odisha women aged 21 to 60 a total of Rs. 50,000 over 5 years in two annual tranches. Apply on subhadra.odisha.gov.in for the RuPay card.";

const NEW_CONTENT = `## Subhadra Yojana at a glance

Subhadra Yojana is an Odisha state cash transfer that pays Rs. 10,000 per year for five years, totalling Rs. 50,000, to eligible women aged 21 to 60. The scheme was launched on September 17, 2024 by Prime Minister Narendra Modi in Bhubaneswar and is administered by the Women and Child Development Department under Minister Pravati Parida. It was the first flagship welfare programme of the Mohan Charan Majhi government, which came to power in June 2024.

The annual Rs. 10,000 is split into two equal tranches of Rs. 5,000. The first tranche is credited around August 15 (aligned with Raksha Bandhan and Independence Day), and the second around March 8 (International Women's Day). A Rs. 500 birthday voucher is credited separately on each beneficiary's birthday.

Around 1.05 crore women were enrolled by the second anniversary of the scheme, per the Odisha government's official Subhadra portal. The state has budgeted approximately Rs. 55,825 crore over the five-year scheme period.

The scheme is named after Goddess Subhadra, the sister of Lord Jagannath in the Odia religious tradition, giving it a state cultural resonance that the government uses in outreach material.

## The Subhadra RuPay card and how it works

Subhadra is the only major state cash transfer scheme that issues a physical branded debit card to every beneficiary in addition to the standard bank credit. The Subhadra card is a RuPay ATM-cum-debit card issued in the beneficiary's name and linked to her Aadhaar-seeded bank account.

Every approved beneficiary receives the card by post at the address on her ration card, typically 30 to 60 days after enrolment. The card can be used at any RuPay-accepting ATM for cash withdrawal, at PoS terminals for card payments, and online for e-commerce transactions up to the daily transaction limit set by the issuing bank.

The card is issued by one of five participating public sector banks based on the beneficiary's existing account: State Bank of India, Bank of India, Punjab National Bank, Canara Bank, or UCO Bank. If the beneficiary's Aadhaar-seeded account is with another bank, a new zero-balance account is opened with a participating bank for scheme purposes.

The card also functions as an identity marker for a set of additional Subhadra benefits including discounted travel on state road transport corporation buses (on selected routes), priority access at state government hospitals for reproductive and child health services, and a 5 percent discount at Odisha State Handloom Cooperative outlets.

## The digital transaction reward

Subhadra includes a novel design feature that other state cash transfer schemes do not have. The top 100 women per gram panchayat area, ranked by number of digital transactions using their Subhadra card in the previous financial year, receive an additional Rs. 500 as a digital transaction reward.

The reward is credited in April each year based on the previous year's transaction count. The design goal is to push digital payment adoption in rural Odisha, where UPI and card usage lag urban rates. Around 5,000 gram panchayats participate in the reward programme, meaning approximately 5 lakh beneficiaries qualify for the additional Rs. 500 each year.

Transactions are tracked automatically by the National Payments Corporation of India based on card usage data. Beneficiaries do not have to apply separately for the reward. A quarterly leaderboard is visible on the Subhadra portal.

## Who qualifies for Subhadra

A woman qualifies for Subhadra if she meets all four core eligibility conditions. The scheme was designed with a broader eligibility screen than Karnataka's Gruha Lakshmi (which requires head-of-family status) but narrower than Maharashtra's Ladki Bahin (which extends the upper age to 65).

| Requirement | Detail |
|---|---|
| Residency | Permanent resident of Odisha |
| Age | 21 to 60 years as of April 1 of the application year |
| Income | Holder of a National Food Security Act (NFSA) ration card OR annual family income below Rs. 2.5 lakh |
| Bank account | Aadhaar-seeded savings account with DBT active |

Only one woman per family qualifies. If a household has multiple eligible women, only one can register. The Subhadra guidelines prioritise the woman named on the NFSA ration card as the head of the household when more than one is otherwise eligible.

The 60-year upper age is a deliberate policy choice. Women above 60 are already covered under the state's Madhu Babu Pension Yojana (which pays a monthly pension), so the Subhadra design avoids stacking two similar transfers on the same beneficiary.

## Who is excluded

The Odisha government listed five explicit exclusion categories at launch and added two more during the January 2025 rules clarification.

Income tax payers, and women whose spouse pays income tax, are excluded. The state uses PAN records for the post-approval cross-check. Similarly, women whose spouse runs a GST-registered business above the exemption threshold are excluded.

Government employees at the central or state level, contract employees earning above the Rs. 2.5 lakh threshold, and pension-drawing retirees whose combined pension crosses the threshold are excluded. This applies to the applicant herself or her spouse.

Sitting and former MPs, MLAs, and Members of Legislative Council are excluded. Panchayat Presidents (Sarpanch) at the gram panchayat level are excluded during their tenure but become eligible one year after tenure ends.

Owners of four-wheelers other than tractors are excluded (the exclusion applies to any four-wheeler registered in the applicant's or spouse's name). Households owning more than five acres of irrigated agricultural land are excluded.

The January 2025 clarification added two more exclusions. Women whose spouse holds a professional practice registration (medical, legal, chartered accountancy) are presumed above the threshold. Women employed at private schools recognised under the Right to Education Act are treated as government-adjacent and excluded.

## Documents you need to apply

Subhadra requires seven documents at the application stage. Missing documents cause the application to be flagged Incomplete and the 45-day disposal clock is paused until the correction is uploaded.

- Aadhaar card of the applicant (original for eKYC, scanned copy for upload)
- NFSA ration card OR income certificate from the tehsildar showing family income below Rs. 2.5 lakh
- Odisha domicile certificate (or a ration card that shows an Odisha address for at least the last three years)
- Aadhaar-seeded bank account passbook, front page showing account number and IFSC
- Recent passport-size photograph taken in the last six months
- Self-declaration confirming the applicant and spouse do not pay income tax, are not in government service, and do not fall under any exclusion category
- Marriage certificate, widowhood certificate, or divorce decree, whichever applies (unmarried women aged 21 to 25 attach the father's income certificate instead)

The income certificate has to be from the current year or the previous one. The Subhadra portal rejects certificates older than 18 months.

## Bank account and Aadhaar seeding

Subhadra uses the National Payments Corporation of India's Aadhaar Payment Bridge for the primary DBT credit, and issues a separate RuPay Subhadra card as described above. Your bank account has to be seeded with your Aadhaar in NPCI's mapper before the transfer can succeed.

Confirm seeding through three channels. Log in to your bank's app and look for Aadhaar Seeding under Account Services. Alternatively, dial *99*99*1# from your Aadhaar-registered mobile and follow the IVR prompts. The most reliable check is on the UIDAI portal at resident.uidai.gov.in, which returns the name of the bank your Aadhaar is currently mapped to.

If your Aadhaar is mapped to a dormant account, both the DBT credit and the Subhadra card will be linked to that dormant account. Fix this by walking into the branch where you want the money and submitting an Aadhaar seeding request. Ask the bank to set your account as the primary NPCI mapping. The change reflects in 3 to 7 working days.

Subhadra beneficiaries whose Aadhaar seeding is with one of the five participating banks (SBI, BOI, PNB, Canara, UCO) receive the Subhadra card at their existing account. Beneficiaries whose Aadhaar is seeded with any other bank get a new zero-balance account opened for them with SBI (the default fallback bank).

## Step-by-step online application on subhadra.odisha.gov.in

The online route is fastest for applicants with computer or smartphone access. The Odisha government routes the application through the dedicated portal at subhadra.odisha.gov.in.

1. Open subhadra.odisha.gov.in on any modern browser. Chrome, Firefox, and Edge work reliably.
2. Click Apply on the home page. Register with your Aadhaar-linked mobile number and complete OTP verification.
3. Log in with the OTP that arrives on the registered mobile.
4. Enter your Aadhaar number. The portal calls the UIDAI eKYC service and auto-fills your name, date of birth, and address.
5. Enter your NFSA ration card number OR upload your income certificate. The portal validates the ration card against the Food Supplies and Consumer Welfare Department database.
6. Enter bank details, including account number, IFSC, and name on account. The portal runs a live Aadhaar seeding check and shows a green tick when the mapping is confirmed.
7. Upload the remaining documents in PDF or JPG format. Each file must be under 500 KB.
8. Complete the self-declaration by ticking each of the five exclusion category checkboxes.
9. Submit the application. The portal generates a Subhadra application ID starting with SUB. Note it and take a screenshot.

Applications are processed within 45 working days under the state's Right to Public Services Act. Track status at any time using the application ID on the same portal.

Common errors and how to fix them. If the OTP does not arrive during registration, your Aadhaar-linked mobile number may be inactive or unregistered. Visit an Aadhaar Seva Kendra to update the mobile number, then retry. If the ration card auto-fetch shows an error, the card may need re-eKYC. Complete the ration card eKYC at any Mo Seva Kendra before reapplying.

## Offline application at Mo Seva Kendra and Common Service Centres

Not every eligible woman has smartphone or internet access. The Odisha government designated four types of offline service centres to handle Subhadra applications with the same weight as an online submission.

- Anganwadi centres serve the closest reach for rural applicants. Around 74,000 Anganwadis operate across Odisha and each has been trained on Subhadra intake.
- Gram Panchayat offices handle applications for panchayat-area residents. The Sarpanch or panchayat secretary can accept and forward the application.
- Mo Seva Kendra centres are the Odisha government's dedicated citizen service centres, launched under the Ama Odisha Nabin Odisha programme. Around 6,800 Mo Seva Kendras operate across the state.
- Common Service Centres (CSCs) run under the central government's e-governance framework and can also process Subhadra applications.

Service centre charges are capped at Rs. 20 per form under the Odisha Right to Public Services Act. Any centre demanding more should be reported on the Subhadra helpline.

A door-to-door enrolment drive was active from October 2024 to March 2025 through Subhadra Sathis, trained women volunteers who visited households to enrol beneficiaries directly. This drive is currently paused. Any new applicant in 2026 should use one of the four centre types above.

## What happens after you apply

Once submitted, your application moves through four verification stages. The state has built a real-time dashboard on the portal for beneficiaries to track.

Stage one is document verification by the block-level Subhadra cell. Officers verify all seven documents are present, legible, and match form details. This takes 3 to 7 working days.

Stage two is eligibility cross-check against the Income Tax Department, GSTIN registry, vehicle registration records, and land ownership records maintained by the Odisha Revenue Department. This is automated and completes within 48 hours.

Stage three is field verification for a random 15 percent of applications. Anganwadi workers or panchayat staff visit the applicant's home to confirm residency and household composition. This adds 15 to 30 days to processing for the sampled applications.

Stage four is sanction, bank account mapping, and Subhadra card issue. Once cleared, the sanction letter is generated and the Subhadra card is printed at the issuing bank. The card is dispatched by India Post within 30 to 60 days of sanction.

You receive an SMS at each stage from the sender ID ODSUBH. The messages read Your Subhadra application SUB2412345 has been approved followed by the sanction date and expected first tranche credit date.

## How to check if your Rs. 5,000 tranche has been credited

Four channels report Subhadra payment status. Use whichever fits your access.

The Subhadra portal has a Check Payment Status page under the Beneficiary menu. Log in with your registered mobile number and OTP. The dashboard shows the two tranches per year plus the birthday voucher and any digital transaction reward.

Bank SMS alerts are the fastest confirmation. Every DBT credit generates a message with the sender name ODSUBHDBT. Debit card transactions on the Subhadra card generate normal bank SMS.

The Public Financial Management System portal at pfms.nic.in has a Know Your Payment section. Enter your bank account number and IFSC to see all Subhadra credits.

Mo Seva Kendra and Anganwadi centres can also print your Subhadra payment statement on request, free of charge for beneficiaries.

## What to do if a tranche is delayed or missing

Missed tranches have three common causes. Diagnose which applies before you contact the helpline.

The most common cause is broken Aadhaar seeding. Banks periodically require re-KYC, and if the deadline was missed, your account is delinked from the NPCI mapper until re-KYC completes. Visit your bank with your Aadhaar and complete re-KYC. The delayed tranche will be released with the next scheduled credit.

The second cause is a change in your ration card. If a family member applied for a fresh ration card that removed your name, your Subhadra eligibility can suspend automatically. Restore your name at the Food Supplies and Consumer Welfare Department office. Payment resumes from the next tranche.

The third cause is a treasury delay. In months where state revenue collections run behind schedule (typically April and May), tranches can be delayed by two to four weeks. Missed tranches are usually clubbed with the next scheduled credit.

If none of these apply, call the Odisha government helpline on 14678 with your Subhadra application ID. Grievances are supposed to be resolved within 15 working days per the scheme guidelines. Escalation goes to the District Social Welfare Officer.

## Subhadra vs other state women cash transfer schemes

Subhadra sits alongside three other flagship state schemes launched between 2023 and 2024. Here is how it compares against the closest analogues.

| Feature | Subhadra (Odisha) | Gruha Lakshmi (Karnataka) | Ladki Bahin (Maharashtra) | Mahtari Vandana (Chhattisgarh) |
|---|---|---|---|---|
| Annual payout | Rs. 10,000 in 2 tranches + Rs. 500 birthday voucher | Rs. 24,000 monthly | Rs. 18,000 monthly | Rs. 12,000 monthly |
| 5-year total | Rs. 50,000 plus vouchers and digital rewards | Not fixed (monthly, open-ended) | Not fixed (monthly, open-ended) | Not fixed (monthly, open-ended) |
| Payment cadence | Twice a year (Aug 15, Mar 8) | Monthly | Monthly | Monthly |
| Beneficiary count | 1.05 crore | 1.28 crore | 2.34 crore | 70 lakh |
| Age eligibility | 21 to 60 | 18 and above, no upper limit | 21 to 65 | 21 and above (married only) |
| Income cap | Rs. 2.5 lakh household OR NFSA ration card | No income cap, tax filing disqualifies | Rs. 2.5 lakh household | Rs. 2.5 lakh household |
| Physical card | Subhadra RuPay debit card issued in beneficiary's name | None | None | None |
| Digital transaction reward | Rs. 500/year for top 100 women per gram panchayat | None | None | None |
| Head-of-family rule | Not required | Must be head of ration card | Not required | Not required |
| Launch date | September 17, 2024 | August 19, 2023 | June 28, 2024 | March 1, 2024 |
| Portal | subhadra.odisha.gov.in | sevasindhu.karnataka.gov.in | ladakibahin.maharashtra.gov.in | mahtarivandan.cgstate.gov.in |

Subhadra's bi-annual cadence is unique among the four. The other three pay monthly, which creates a steady household budgeting rhythm. Subhadra's Rs. 5,000 lump sum twice a year is structured for larger single-purpose spending (school fees, festival expenses, or health emergencies) rather than routine monthly needs.

## Central schemes you can stack with Subhadra

Subhadra is a state benefit and does not stop a beneficiary from claiming any Government of India welfare scheme she qualifies for. Women receiving Subhadra tranches should also look at these five central schemes.

[PM Suraksha Bima Yojana (PMSBY)](https://www.sarkaridarapan.com/sarkari-yojana/pm-suraksha-bima-yojana) gives Rs. 2 lakh accident insurance for a premium of Rs. 20 per year. Available to anyone aged 18 to 70 with a savings account.

Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) gives Rs. 2 lakh life insurance for a premium of Rs. 436 per year. Covers death from any cause. Available to anyone aged 18 to 50.

Pradhan Mantri Matru Vandana Yojana (PMMVY) pays Rs. 5,000 for a first pregnancy and Rs. 6,000 for a second if the child is a girl. Applies to women aged 19 and above at first pregnancy.

Atal Pension Yojana (APY) is a co-contributory pension for unorganised workers. A woman aged 18 to 40 can choose a pension of Rs. 1,000 to Rs. 5,000 per month payable from age 60. Contributions range from Rs. 42 to Rs. 291 per month.

Pradhan Mantri Jan Dhan Yojana (PMJDY) is a zero-balance bank account with a Rs. 10,000 overdraft, a RuPay debit card, and Rs. 2 lakh accident cover built in.

Subhadra beneficiaries with the Subhadra RuPay card already have de facto PMJDY-equivalent card coverage, so opening a separate PMJDY account is usually not needed.

## The political context: Odisha 2024 election

Subhadra's launch on September 17, 2024 came 87 days after the Mohan Charan Majhi government was sworn in on June 12, 2024, following the June 2024 Odisha Assembly election in which the BJP won 78 of 147 seats. This was the first time the BJP formed a government in Odisha and ended a 24-year continuous run of Biju Janata Dal (BJD) rule under Naveen Patnaik.

Subhadra was one of the central promises in the BJP's Odisha manifesto. The party had committed to launching the scheme within the first 100 days of coming to power. The launch on day 97 came just under the self-imposed deadline. PM Modi personally attended the Bhubaneswar launch event, which underscored the scheme's political importance to the party.

Post-launch analyses by CSDS-Lokniti and other research groups noted the scheme's design deliberately borrowed from Madhya Pradesh's Ladli Behna Yojana (2023) and Maharashtra's Ladki Bahin Yojana (2024), both credited with helping the BJP or its allies win state assembly elections in those states. The Subhadra card and digital transaction reward were novel additions that distinguished the Odisha scheme.

The BJD had promised a similar scheme (Subhadra Yojana was named after a scheme concept BJD had unveiled shortly before the election), but the BJP variant was launched first after the election result. The Odisha government has stressed that the BJP-launched Subhadra should not be confused with the BJD proposal, which is now shelved.

## Frequently asked questions

**Who is eligible for Subhadra Yojana in Odisha?**
Women aged 21 to 60 who are permanent residents of Odisha, hold an NFSA ration card or have an annual family income below Rs. 2.5 lakh, and have an Aadhaar-seeded bank account. The applicant or her spouse must not pay income tax, must not be a government employee, and must not fall under any of the seven exclusion categories.

**How much money does Subhadra Yojana pay?**
Rs. 10,000 per year for five years, totalling Rs. 50,000. This is paid in two annual tranches of Rs. 5,000 each: one around August 15 and one around March 8. A Rs. 500 voucher is credited separately on each beneficiary's birthday.

**What is the Subhadra RuPay card and how do I get it?**
The Subhadra card is a branded RuPay ATM-cum-debit card issued in each beneficiary's name and linked to her Aadhaar-seeded bank account. It is issued by one of five participating public sector banks (SBI, BOI, PNB, Canara, UCO) and dispatched by post within 30 to 60 days after your Subhadra application is approved.

**What is the digital transaction reward?**
The top 100 women per gram panchayat area, ranked by number of digital transactions using their Subhadra card in the previous financial year, get an additional Rs. 500 credited in April each year. Around 5 lakh beneficiaries across Odisha qualify for the reward every year.

**Can unmarried women apply for Subhadra?**
Yes. Unmarried women aged 21 to 60 are eligible provided they meet the ration card or income cap conditions. Unmarried applicants attach the father's income certificate rather than a spouse's certificate.

**How do I check if my Subhadra tranche has been credited?**
Log in to subhadra.odisha.gov.in and check the Beneficiary dashboard, look for the ODSUBHDBT SMS from your bank, query pfms.nic.in with your account and IFSC, or ask any Mo Seva Kendra or Anganwadi to print your payment statement.

**When are the two annual tranches paid?**
The first tranche of Rs. 5,000 is credited around August 15 (aligned with Raksha Bandhan and Independence Day). The second tranche of Rs. 5,000 is credited around March 8 (International Women's Day). Both dates can shift by a few days depending on state treasury readiness.

**What if I did not receive my Subhadra card by post?**
If the card does not arrive within 60 days of your approval SMS, contact your issuing bank branch. The card may have been returned due to an incorrect address. Update your address at the bank and request a re-issue. There is no fee for the first re-issue.

**Can two women in the same family both apply for Subhadra?**
No. Only one woman per family qualifies. If a household has multiple eligible women, only one can register. The scheme gives priority to the woman named on the NFSA ration card as the head of the household.

**Is there any application fee for Subhadra?**
No application fee. Service centres including Mo Seva Kendras, Anganwadis, and CSCs are allowed to charge up to Rs. 20 per form under the Odisha Right to Public Services Act. Do not pay anyone more than that.

## Sources and related pages

- Subhadra Yojana official portal: [subhadra.odisha.gov.in](https://subhadra.odisha.gov.in)
- Odisha Women and Child Development Department: [wcdodisha.gov.in](https://wcdodisha.gov.in)
- Public Financial Management System (payment tracking): [pfms.nic.in](https://pfms.nic.in)
- UIDAI Aadhaar bank seeding status: [resident.uidai.gov.in](https://resident.uidai.gov.in)
- Odisha government helpline: 14678

Related pages on this site:

- [Gruha Lakshmi Yojana Karnataka: Rs. 2,000 monthly for women](https://www.sarkaridarapan.com/sarkari-yojana/gruha-lakshmi-yojana-karnataka)
- [Ladki Bahin Yojana Maharashtra: Rs. 1,500 monthly for women](https://www.sarkaridarapan.com/sarkari-yojana/majhi-ladki-bahin-yojana-maharashtra)
- [Mahtari Vandana Yojana Chhattisgarh: Rs. 1,000 monthly for women](https://www.sarkaridarapan.com/sarkari-yojana/mahtari-vandana-yojana-chhattisgarh)
- [PM Suraksha Bima Yojana (PMSBY): Rs. 20 accident insurance](https://www.sarkaridarapan.com/sarkari-yojana/pm-suraksha-bima-yojana)
- [Government schemes in Odisha](https://www.sarkaridarapan.com/state/odisha)`;

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
