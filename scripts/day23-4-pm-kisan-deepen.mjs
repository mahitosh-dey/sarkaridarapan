// PM-KISAN scheme — deepen 2503w -> 3000w+ and address the live 24th-instalment query
//
// Verified 2026-08-15.
//
// WHY
// The scheme page is well built and factually current: the 23rd instalment
// (20 June 2026) IS still the latest released. But the live search intent has
// moved to the 24th instalment, which the page did not address at all.
//
// FACT CHECK ON THE 24TH (verified 2026-08-15 across Free Press Journal,
// Business Today, LatestLY, Karmactive):
//   - NOT announced. The Centre has not published a release date.
//   - Coverage saying "expected October 2026" is an inference from the
//     four-month disbursement cycle, not an announcement.
//   - The 23rd covered the April-July tranche; the 24th covers August-November.
// Per the project no-fabrication rule this page states the cycle and says the
// date is unannounced, rather than printing an expected date as though it were
// scheduled. That is the differentiator: most coverage leads with "October
// 2026" in the headline without flagging that nobody has announced it.
//
// This deepening also UNBLOCKS three redirects held back because this
// destination was under 3000w:
//   complete-guide-to-pm-kisan-yojana                     1214w
//   pm-kisan-samman-nidhi-2026-status-check               1592w
//   pm-kisan-samman-nidhi-apply-check-status-fix-errors   1619w
//
// Appends to existing content rather than rewriting it, so the verified
// instalment history and exclusion detail already on the page are preserved.
// Array columns (eligibility/benefits/documents) are NOT touched: replaceScheme
// does not accept them, which avoids the known array-column render crash.

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { replaceScheme } from "./lib/replace-scheme.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = Object.fromEntries(
  readFileSync(join(__dirname, "..", ".env.local"), "utf8")
    .split("\n").filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^["']|["']$/g, "")]; }),
);
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const SLUG = "pm-kisan-samman-nidhi-pm-kisan-2026";

const { data: row, error } = await supabase
  .from("schemes").select("content,faqs").eq("slug", SLUG).single();
if (error) { console.error("read failed:", error.message); process.exit(1); }

const NEW_SECTION = `## The 24th instalment: what is actually known

The 24th instalment has not been announced. As of 15 August 2026 the Centre had published no release date, and no official confirmation of one exists.

That matters because a great deal of coverage carries an October 2026 date in the headline. That figure is an inference, not an announcement. It comes from the disbursement cycle rather than from any statement by the Ministry of Agriculture and Farmers Welfare.

Here is the cycle the inference rests on. PM-KISAN divides the financial year into three four-month tranches, and each instalment corresponds to one of them.

| Tranche | Period covered | Instalment |
|---|---|---|
| First | April to July | 23rd, released 20 June 2026 |
| Second | August to November | 24th, not yet announced |
| Third | December to March | 25th, not yet announced |

Because the 23rd covered April to July and was released in June, the second tranche is expected to be paid at some point in the August to November window. That is a reasonable expectation and it is not a date.

Instalments have historically been released at events attended by the Prime Minister or the Agriculture Minister, and the date is typically confirmed only days in advance. Watch pmkisan.gov.in and the Ministry's announcements rather than an aggregator countdown.

## What to do before the 24th instalment lands

The useful work is making sure nothing blocks your payment, because the common reasons for exclusion are all fixable in advance and none of them are fixable after a release.

Complete eKYC if you have not. This is the single largest cause of withheld payments. It can be done by OTP through the portal, biometrically at a Common Service Centre, or through face authentication in the mobile app, which is the option worth knowing about if your fingerprints do not read reliably.

Confirm your Aadhaar is seeded to the bank account that should receive the money, and that the name on the account matches your Aadhaar. A mismatch stops the transfer even when everything else is correct, and it is the failure farmers most often discover only after an instalment has been paid to everyone else.

Check that your land records are verified in the system. Land seeding is a separate step from registration, and an unverified record holds the payment.

Verify your bank account is active and not dormant. Accounts that have gone dormant through disuse reject direct benefit transfers.

Do all four now rather than when the release is announced. Common Service Centres are overwhelmed in the days around a release, and corrections take time to propagate through the system.

## Why the beneficiary count keeps changing

The number of farmers receiving each instalment moves between releases, and it moves downward as often as upward, which causes understandable alarm among people who see the figure fall.

Two processes drive this. New registrations add beneficiaries continuously as farmers enrol and complete verification. At the same time, periodic verification drives remove people found ineligible: income tax payers, holders of constitutional posts, serving and retired government employees above defined pay levels, professionals such as doctors and lawyers in practice, and pensioners above a monthly pension threshold. Deceased beneficiaries and duplicate registrations are also removed.

So a falling count between two instalments does not mean the scheme is shrinking. It usually means a verification cycle ran. Individual farmers who are correctly eligible are unaffected by it.

If you were receiving payments and then stopped, the cause is far more often an incomplete eKYC or an Aadhaar seeding failure than a deliberate exclusion. Check those first, in that order, before assuming you have been removed from the scheme.

`;

let content = row.content;
if (content.includes("## The 24th instalment")) {
  console.log("section already present, aborting to avoid duplication");
  process.exit(1);
}
const marker = "## Frequently asked questions";
if (!content.includes(marker)) { console.error("FAQ marker not found"); process.exit(1); }
content = content.replace(marker, NEW_SECTION + marker);

await replaceScheme({
  slug: SLUG,
  title: "PM Kisan 2026: 24th Instalment Date, Status Check, eKYC",
  description:
    "PM Kisan 24th instalment is not announced yet. The 23rd released 20 June 2026 to 9.44 crore farmers. Check payment status, eKYC and why payments stall.",
  content,
  faqs: row.faqs,
});
