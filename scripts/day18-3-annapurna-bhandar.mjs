// Day 18 (Tue 2026-08-11) — Annapurna Bhandar WB (467w -> 3000w+).
// OWNER-AUTHORISED REWRITE (2026-08-11): the previous version asserted as fact that a named
// individual had taken oath as Chief Minister of West Bengal and that a specific party won
// the 2026 Assembly election. Neither is verifiable here (knowledge cutoff May 2026), and the
// project hard rule treats post-Jan-2026 election outcomes as unverifiable. Asserting that a
// named person holds public office is a factual claim about a real individual, so it is
// removed entirely rather than hedged.
//
// SOURCING TIERS used below, stated on the page itself:
//  CONFIRMED  - newsonair.gov.in (All India Radio, government broadcaster) reported WB rolling
//               out a scheme paying Rs 3,000/month to women from 1 June 2026.
//             - socialsecurity.wb.gov.in and socialregistry.wb.gov.in are genuine wb.gov.in domains.
//  REPORTED   - age band 25-60, automatic migration of existing Lakshmir Bhandar beneficiaries,
//               ~2 crore coverage, exact 3 June launch, prior payout tiers. Aggregator sources
//               only -> labelled as reported throughout, never asserted.
//  OMITTED    - all party attribution, CM names and election outcomes.
import { createScheme } from "./lib/create-scheme.mjs";

const SLUG = "annapurna-bhandar-yojana-west-bengal-2026";

const TITLE = "Annapurna Bhandar 2026: Rs 3,000 a Month for WB Women";

const DESCRIPTION =
  "Annapurna Bhandar pays West Bengal women Rs 3,000 a month by direct transfer. Check what is confirmed, who is eligible and how existing beneficiaries migrate.";

const CONTENT = `## What the scheme pays

Annapurna Bhandar is a West Bengal cash transfer scheme paying eligible women Rs 3,000 a month directly into their bank account. The state began rolling it out from 1 June 2026.

At Rs 3,000 a month, the annual value is Rs 36,000 per beneficiary, which makes it one of the larger direct cash transfers to women run by any Indian state.

The scheme is administered through the state's social security machinery, with the official channel being socialsecurity.wb.gov.in, and household data collected through the state's social registry at socialregistry.wb.gov.in.

## What is confirmed and what is reported

This distinction matters on this page, because coverage of the scheme varies considerably in reliability and several widely-copied details do not trace to an official source.

**Confirmed.** The scheme exists and pays Rs 3,000 a month to women in West Bengal, with the rollout beginning 1 June 2026. This was reported by All India Radio, a government broadcaster. The official portals are on wb.gov.in domains.

**Reported but not officially confirmed.** An eligibility band of 25 to 60 years. Automatic migration of existing Lakshmir Bhandar beneficiaries without a fresh application. Coverage figures in the region of two crore women. The precise structure of what the scheme replaces or supersedes, and the amounts paid under the previous arrangement. These appear widely across recruitment and scheme aggregator sites, but not in a form traceable to a government order, so they are presented here as reported rather than established.

Where a detail below is uncertain, it is marked. For anything that determines whether you personally qualify, the state portal and your local office are the authorities, not this page or any other secondary site.

## Eligibility, as reported

| Condition | Reported requirement |
|---|---|
| Gender | Woman |
| Residence | Permanent resident of West Bengal |
| Age | Reported as 25 to 60 years |
| Bank account | Required, Aadhaar-linked, in the beneficiary's own name |

The age band is the condition most worth verifying before applying, since it is reported rather than confirmed and it is the condition that excludes the most people. A woman of 22 or 63 needs to know whether she qualifies before assembling documents, and the portal is where to establish that.

Note what is absent from the reported criteria: there is no stated income ceiling, no category restriction and no requirement to belong to a particular occupational group. If that holds in the government order, coverage is broad by the standards of Indian welfare schemes, which is consistent with the reported beneficiary numbers.

## How the money reaches you

The transfer is made through direct benefit transfer into the beneficiary's own Aadhaar-linked bank account.

Three practical consequences follow, and they account for most of the problems households actually encounter with schemes of this kind.

The account must be in the beneficiary's own name. A transfer to a husband's or son's account does not satisfy a scheme designed to put money in a woman's hands, and joint accounts sometimes create problems depending on how they are registered.

The Aadhaar linkage must be current. If the Aadhaar number registered with the bank differs from the one in the scheme record, or the linkage was never completed, the credit fails. This is the single most common cause of a beneficiary being approved but not paid.

The account must be active. Accounts that have gone dormant through disuse can reject credits, and a woman who opened an account years ago for a different purpose and never used it may need to reactivate it at the branch.

Checking these three things before applying saves months of chasing a payment that was authorised but never arrived.

## If you already receive Lakshmir Bhandar

Reporting indicates that existing Lakshmir Bhandar beneficiaries are migrated to Annapurna Bhandar automatically, without needing to apply again, and that only women not previously receiving that benefit need to submit a fresh application.

Treat that as reported rather than settled, and verify it for your own case rather than assuming. The practical step is to check your beneficiary status on the state portal and confirm that the amount credited to your account has changed. If you were receiving a payment and it has increased, migration has happened. If it has not changed after the rollout period, that is the signal to raise it locally rather than wait.

Keep your existing records either way. Where a scheme supersedes another, beneficiaries who can produce their prior enrolment details resolve queries far faster than those who cannot.

## How to apply if you are new

Applications for women not already covered are made through the state's channels, with the online route on the social security and social registry portals.

1. Confirm you meet the eligibility conditions, particularly the reported age band, before starting.
2. Ensure you have a bank account in your own name with current Aadhaar linkage and an active status.
3. Register on the state portal, or complete the family-level data collection form through the social registry where that is the route being used in your area.
4. Enter personal, residence and bank details exactly as they appear on your documents.
5. Upload the required documents.
6. Submit and retain the acknowledgement or application number.
7. Track the application status through the portal.

An offline route through local government offices generally operates alongside the online one for these schemes, which matters for applicants without reliable internet access. Ask at your panchayat or municipal ward office what the local process is.

## Documents you will need

1. Aadhaar card of the applicant.
2. Proof of West Bengal residence.
3. Bank passbook or account details showing the account is in the applicant's own name, with the IFSC code.
4. Age proof, given the reported age band.
5. Recent photograph.
6. Ration card, which many West Bengal schemes use as a household identifier.
7. Existing Lakshmir Bhandar enrolment details, if you were previously a beneficiary.

Names should match across documents. A discrepancy between the name on the Aadhaar card and the bank account is a common cause of a failed transfer, and correcting it after approval takes longer than correcting it before applying.

## What Rs 3,000 a month actually does

Concrete figures make the scale legible, because a monthly transfer reads differently depending on the household.

Rs 3,000 a month is Rs 36,000 a year. For a household where the woman has no independent income, that is the difference between having money of her own and not.

Against typical costs: it covers a year of school expenses for a child in a government school with room to spare; it is roughly the monthly cost of a modest quantity of pulses, oil, vegetables and milk for a family of four; it covers an LPG refill and a month's electricity in most months with the balance left over.

Set against wages, for a household where the earning member makes Rs 12,000 to Rs 15,000 a month, an additional Rs 3,000 is a 20 to 25 per cent increase in household income. That is a substantial change rather than a marginal supplement.

The design point worth understanding is that transfers of this kind are unconditional and untied. There is no requirement to spend the money on anything specific, no receipts to produce and no verification of use. That is deliberate: the evidence on cash transfers generally supports the view that recipient households allocate money reasonably without direction, and administering conditions costs more than it saves.

## Common problems and how to fix them

Approved but no credit received. Almost always an Aadhaar or bank linkage problem. Take your passbook and Aadhaar to the bank branch and ask them to confirm the linkage, then check the account name matches the scheme record exactly.

Application rejected. Establish the reason before reapplying. Age falling outside the band, a residence document that does not satisfy the requirement, or an account not in the applicant's own name are the usual causes, and each has a different fix.

Payment stopped after some months. This often follows a change in the account, such as a bank merger changing the IFSC, or the account going dormant. It can also follow a periodic verification exercise the beneficiary did not complete.

Status not visible on the portal. Allow a reasonable interval after submission before treating it as a problem, then raise it with the local office holding your acknowledgement number.

Someone asking for money to process your application. There is no fee. Any person or website charging you to apply for or expedite a state cash transfer is not legitimate, and the documents you hand over are the actual cost.

## Opening a bank account if you do not have one

Since the transfer requires an account in the woman's own name, this is the first obstacle for a significant number of otherwise eligible applicants, and it is straightforward to clear.

Any bank branch will open a basic savings account, and under the Pradhan Mantri Jan Dhan Yojana framework such accounts are available with no minimum balance requirement, which removes the usual barrier for a woman without independent income. Post office savings accounts also work for direct benefit transfer and are often the nearest option in rural areas.

What you need to open one is generally an Aadhaar card and a photograph, with the Aadhaar serving as both identity and address proof. Where the address on the Aadhaar is outdated, banks accept other address documents alongside it.

Complete the Aadhaar linkage at the time of opening rather than later. Ask the branch explicitly to seed your Aadhaar to the account, and get confirmation, because an account opened without linkage is the exact situation that produces an approved application with no payment.

If you already hold an account you have not used for years, ask the branch to confirm it is active before relying on it. Reactivating a dormant account is a simple counter procedure but it cannot be done after a failed credit has already delayed you by a month.

## How cash transfer schemes like this are meant to work

Some context helps in judging what the scheme is and is not.

Direct cash transfers to women have become a common instrument across Indian states over the past several years, and the reasoning behind them is reasonably well established. Money reaching a woman directly tends to be allocated differently from money reaching a household generally, with a larger share going to food, children's education and health. Transferring cash rather than goods avoids the leakage and administrative cost of distributing commodities. And an unconditional transfer respects the recipient's judgement about her own priorities, which both performs better in the evidence and costs far less to administer than verifying conditions.

The design choices in such schemes are where they differ. The amount determines whether the transfer is a supplement or a material change in household income. The eligibility rule determines coverage, and a broad rule without an income test reaches far more people at far greater fiscal cost than a targeted one. The payment mechanism determines reliability, since direct benefit transfer to a verified account is robust where cash disbursement is not.

Annapurna Bhandar sits at the higher end on amount and, on the reported criteria, at the broad end on eligibility. Both choices imply substantial expenditure, which is worth understanding as the context in which any future revision to the scheme would happen.

## Other West Bengal schemes worth checking

A household eligible for one West Bengal scheme is often eligible for others, and they operate independently rather than one excluding another.

Kanyashree Prakalpa supports the education of adolescent girls through annual and one-time grants, conditional on continuing study. Rupashree Prakalpa provides a one-time grant towards the marriage of adult women from economically weaker families. Swasthya Sathi provides health cover with the card issued in the name of the woman of the household. And the state's [free bus travel for women](/sarkari-yojana/free-bus-travel-scheme-for-women-west-bengal-2026), operational since 1 June 2026, removes fares on state-run buses with no application required at all.

Between them these cover cash income, education, marriage support, health cover and mobility. A household should check eligibility across the set rather than assuming one benefit rules out another.

## Keeping the payment running

Getting approved is one thing; continuing to receive the money for years is another, and the failure modes are predictable.

Do not let the account go dormant. If the scheme transfer is the only activity on the account, most banks treat that as sufficient to keep it active, but a gap in credits can tip it over. If you have missed several months for any reason, check the account status before assuming the scheme is at fault.

Update the record when your bank changes. Bank mergers change IFSC codes, and a beneficiary whose IFSC has changed without the scheme record being updated will simply stop receiving credits. This has affected large numbers of beneficiaries in schemes of this kind and the fix is a record update, not an appeal.

Complete any periodic verification the state runs. Cash transfer schemes typically re-verify beneficiaries at intervals to remove duplicates and ineligible records, and a beneficiary who does not respond to a verification notice can be suspended even though she remains eligible. Watch for messages to the mobile number on record.

Keep the mobile number current. It is how the state communicates about verification, suspension and reinstatement, and a beneficiary contactable only on a number she no longer uses will miss the notice that matters.

Retain your documents. Where a payment stops, resolving it quickly depends on being able to produce the application acknowledgement, the account details as registered and your identity documents at the local office.

## Frequently asked questions

**How much does Annapurna Bhandar pay?**
Rs 3,000 a month, credited by direct benefit transfer to the beneficiary's own Aadhaar-linked bank account, which comes to Rs 36,000 a year. West Bengal began rolling out the scheme from 1 June 2026.

**Who is eligible for Annapurna Bhandar?**
Reporting indicates women who are permanent residents of West Bengal, aged between 25 and 60, holding a bank account in their own name. The age band is reported rather than officially confirmed, so verify it on the state portal before assembling documents, since it is the condition that excludes the most applicants. No income ceiling or category restriction has been reported.

**Do existing Lakshmir Bhandar beneficiaries need to apply again?**
Reporting indicates existing beneficiaries are migrated automatically without a fresh application, and that only women not previously covered need to apply. Treat that as reported rather than settled: check your status on the state portal and confirm whether the amount credited to your account has changed. If it has not changed after the rollout period, raise it locally rather than waiting.

**Where do I apply for Annapurna Bhandar?**
Through the state's channels, with the online route on socialsecurity.wb.gov.in and household data collected through the social registry at socialregistry.wb.gov.in. An offline route through panchayat or municipal ward offices generally operates alongside the online one, which matters for applicants without reliable internet, so ask locally what process applies in your area.

**Why has my payment not arrived even though I was approved?**
Almost always an Aadhaar or bank linkage issue. The account must be in the beneficiary's own name, the Aadhaar linkage registered with the bank must match the scheme record, and the account must be active rather than dormant. Take your passbook and Aadhaar to the branch to confirm the linkage and check that the name matches exactly.

**Can the money go into my husband's account?**
No. The transfer is designed to reach the woman directly and requires an account in the beneficiary's own name. A woman without her own account will need to open one, and joint accounts can create complications depending on how they are registered.

**What documents are needed?**
Aadhaar card, proof of West Bengal residence, bank passbook or account details in the applicant's own name with the IFSC code, age proof given the reported age band, a recent photograph, and a ration card as a household identifier. Existing Lakshmir Bhandar beneficiaries should keep their prior enrolment details. Names should match across documents, since a mismatch between Aadhaar and bank records is a common cause of failed transfers.

**Is there any fee to apply?**
No. There is no fee for applying to a state cash transfer scheme. Anyone charging you to apply or to expedite an application is not legitimate, and the personal documents handed over in such an arrangement are the real cost. Applications go through government portals and offices only.

**Do I have to spend the money on anything specific?**
No. The transfer is unconditional and untied: there is no requirement to spend it on a particular purpose, no receipts to produce and no verification of use. That is a deliberate design choice, since administering spending conditions costs more than it achieves and recipient households generally allocate money sensibly without direction.

**What can Rs 3,000 a month realistically cover?**
It comes to Rs 36,000 a year. In practical terms it covers a year of school expenses for a child in a government school with room to spare, or roughly a month's staple groceries for a family of four, or an LPG refill and a month's electricity with a balance remaining. For a household where the earning member makes Rs 12,000 to Rs 15,000 a month, it represents a 20 to 25 per cent increase in household income.

**What other West Bengal schemes can I claim alongside this?**
Kanyashree Prakalpa for adolescent girls continuing education, Rupashree Prakalpa for a one-time marriage grant to women from economically weaker families, Swasthya Sathi for health cover issued in the woman's name, and free bus travel for women on state-run buses, which needs no application at all. These operate independently, so eligibility for one does not preclude another.

**Why does this page say some details are only reported?**
Because the scheme's existence and its Rs 3,000 monthly value are traceable to a government broadcaster, while several widely-copied specifics such as the exact age band, automatic migration and coverage figures appear only on secondary aggregator sites without a traceable government order. Presenting those as established fact would be misleading. For anything determining whether you personally qualify, the state portal and your local office are the authorities.`;

const FAQS = [
  {
    question: "How much does Annapurna Bhandar pay and when did it start?",
    answer:
      "Rs 3,000 a month, credited by direct benefit transfer into the beneficiary's own Aadhaar-linked bank account, which comes to Rs 36,000 a year. West Bengal began rolling out the scheme from 1 June 2026. At that value it is one of the larger direct cash transfers to women operated by any Indian state.",
  },
  {
    question: "Who is eligible for Annapurna Bhandar?",
    answer:
      "Reporting indicates women who are permanent residents of West Bengal, aged between 25 and 60, holding a bank account in their own name. The age band is reported rather than officially confirmed, so verify it on the state portal before assembling documents, since it is the condition that excludes the most applicants. No income ceiling or category restriction has been reported, which would make coverage broad by the standards of Indian welfare schemes.",
  },
  {
    question: "Do existing Lakshmir Bhandar beneficiaries need to apply again?",
    answer:
      "Reporting indicates existing beneficiaries are migrated automatically without a fresh application, and that only women not previously covered need to apply. Treat that as reported rather than settled. Check your status on the state portal and confirm whether the amount credited to your account has changed: if it has increased, migration has happened, and if it has not changed after the rollout period, raise it locally rather than waiting.",
  },
  {
    question: "Why has my payment not arrived even though I was approved?",
    answer:
      "Almost always an Aadhaar or bank linkage problem, which is the most common cause of a beneficiary being approved but unpaid. The account must be in the beneficiary's own name, the Aadhaar number registered with the bank must match the scheme record, and the account must be active rather than dormant, since dormant accounts can reject credits. Take your passbook and Aadhaar to the branch to confirm the linkage and check the name matches exactly.",
  },
  {
    question: "Can the money be paid into my husband's account?",
    answer:
      "No. The transfer is designed to reach the woman directly and requires a bank account in the beneficiary's own name. A woman without her own account will need to open one, and joint accounts can create complications depending on how they are registered. This is a deliberate feature of schemes intended to put money in women's hands rather than into household income generally.",
  },
  {
    question: "Is there any fee to apply for Annapurna Bhandar?",
    answer:
      "No. There is no fee for applying to a state cash transfer scheme. Anyone charging you to apply or to expedite an application is not legitimate, and the Aadhaar, bank and residence documents handed over in such an arrangement are the real cost. Applications go through government portals and government offices only.",
  },
  {
    question: "Do I have to spend the money on anything particular?",
    answer:
      "No. The transfer is unconditional and untied: there is no requirement to spend it on a specified purpose, no receipts to produce and no verification of use. That is a deliberate design choice, since administering spending conditions costs more than it achieves and the evidence on cash transfers generally supports the view that recipient households allocate money reasonably without direction.",
  },
  {
    question: "Which other West Bengal schemes can be claimed alongside this?",
    answer:
      "Kanyashree Prakalpa supports adolescent girls continuing their education through annual and one-time grants, Rupashree Prakalpa provides a one-time marriage grant to women from economically weaker families, Swasthya Sathi provides health cover with the card issued in the woman's name, and free bus travel for women on state-run buses has been operational since 1 June 2026 with no application required. These schemes operate independently, so eligibility for one does not preclude another.",
  },
  {
    question: "Why does this page mark some details as only reported?",
    answer:
      "Because the scheme's existence and its Rs 3,000 monthly value are traceable to a government broadcaster, while several widely-copied specifics such as the exact age band, the automatic migration of existing beneficiaries and total coverage figures appear only on secondary aggregator sites with no traceable government order behind them. Presenting those as established fact would mislead readers making decisions about documents and applications. For anything determining whether you personally qualify, the state portal and your local office are the authorities.",
  },
];

await createScheme({
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  content: CONTENT,
  faqs: FAQS,
  ministry: "Government of West Bengal, administered through the state social security machinery",
  launched_by: "Government of West Bengal",
  objective:
    "West Bengal cash transfer scheme paying eligible women Rs 3,000 a month (Rs 36,000 a year) by direct benefit transfer into the beneficiary's own Aadhaar-linked bank account, with rollout beginning 1 June 2026. Administered through socialsecurity.wb.gov.in with household data collected via the state social registry at socialregistry.wb.gov.in. The transfer is unconditional and untied, with no requirement to spend it on a specified purpose. SOURCING NOTE: the scheme's existence and its Rs 3,000 monthly value are traceable to a government broadcaster; the reported age band of 25 to 60, the automatic migration of existing Lakshmir Bhandar beneficiaries and total coverage figures appear on secondary sites without a traceable government order and are presented as reported rather than confirmed.",
  eligibility: [
    "Woman who is a permanent resident of West Bengal",
    "Age reported as 25 to 60 years, though this is reported rather than officially confirmed and should be verified on the state portal, since it is the condition excluding the most applicants",
    "Bank account in the beneficiary's OWN name, Aadhaar-linked and active; a husband's or son's account does not qualify and dormant accounts can reject credits",
    "No income ceiling or category restriction has been reported, which would make coverage broad by the standards of Indian welfare schemes",
    "Existing Lakshmir Bhandar beneficiaries are reported to be migrated automatically without a fresh application; verify your own status on the portal rather than assuming",
  ],
  benefits: [
    "Rs 3,000 per month by direct benefit transfer, amounting to Rs 36,000 per year",
    "Unconditional and untied: no requirement to spend on a specified purpose, no receipts and no verification of use",
    "Paid directly to the woman's own bank account rather than into general household income",
    "For a household where the earning member makes Rs 12,000 to Rs 15,000 a month, represents roughly a 20 to 25 per cent increase in household income",
    "Operates independently of other West Bengal schemes such as Kanyashree Prakalpa, Rupashree Prakalpa, Swasthya Sathi and free bus travel for women, so eligibility for one does not preclude another",
  ],
  documents: [
    "Aadhaar card of the applicant",
    "Proof of West Bengal residence",
    "Bank passbook or account details showing the account is in the applicant's own name, with IFSC code",
    "Age proof, given the reported age band",
    "Recent photograph",
    "Ration card, used by many West Bengal schemes as a household identifier",
    "Existing Lakshmir Bhandar enrolment details, for applicants who were previously beneficiaries",
    "Names should match across documents: a mismatch between the Aadhaar card and the bank account is a common cause of failed transfers and is far easier to correct before applying than after approval",
  ],
  how_to_apply:
    "Women not already covered apply through the state's channels, with the online route on socialsecurity.wb.gov.in and household data collected through the social registry at socialregistry.wb.gov.in. Steps: confirm you meet the eligibility conditions, particularly the reported age band; ensure you hold a bank account in your own name with current Aadhaar linkage and active status; register on the state portal or complete the family-level data collection form through the social registry where that is the route in your area; enter personal, residence and bank details exactly as on your documents; upload the required documents; submit and retain the acknowledgement or application number; then track status through the portal. An offline route through panchayat or municipal ward offices generally operates alongside the online one, so ask locally if internet access is a constraint. Existing Lakshmir Bhandar beneficiaries are reported to migrate automatically, but should verify by checking whether the credited amount has changed. There is NO fee: anyone charging to apply or expedite is not legitimate.",
  official_portal: "https://socialsecurity.wb.gov.in",
  helpline_number: "Contact your local panchayat or municipal ward office, or the helpline listed on socialsecurity.wb.gov.in",
  category: "women-and-child",
  state: "west-bengal",
  image: null,
  reading_time: "11 min read",
  quality_flag: ["sourcing-tiered", "political-framing-removed", "3000w-plus", "dbt-scheme"],
});
