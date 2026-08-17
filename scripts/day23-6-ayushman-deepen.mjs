// Ayushman Bharat PM-JAY — deepen 2549w -> 3000w+
//
// Verified 2026-08-15.
//
// WHY THESE TWO SECTIONS
// The page already covers enrolment, card download, eligibility, coverage,
// exclusions, the 70+ Vay Vandana extension and the treatment flow. The two
// genuine gaps are the situations beneficiaries actually get stuck in:
//
//   1. An empanelled hospital refuses treatment or demands payment. This is a
//      common, high-intent search and coverage elsewhere is thin, usually
//      limited to "call the helpline" with no explanation of what the
//      beneficiary is entitled to or what evidence helps.
//   2. Cross-state portability. National portability is a headline feature of
//      PM-JAY and it is poorly understood, particularly by migrant workers,
//      who are among the people it benefits most.
//
// Both rest on established scheme design rather than on any figure that could
// go stale. No dates, no instalment numbers, no counts that move.
//
// UNBLOCKS one redirect held back while this destination was under 3000w:
//   ayushman-bharat-card-2026-apply-download-use  1990w
//
// Appends to existing content, preserving the verified state-integration and
// empanelment detail already on the page. Array columns untouched.

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

const SLUG = "ayushman-bharat-pm-jay-2026";

const { data: row, error } = await supabase
  .from("schemes").select("content,faqs,title,description").eq("slug", SLUG).single();
if (error) { console.error("read failed:", error.message); process.exit(1); }

const NEW_SECTION = `## If a hospital refuses treatment under PM-JAY

An empanelled hospital cannot refuse to treat an eligible beneficiary for a procedure covered under the scheme, and it cannot ask you to pay for one. Refusals and demands for payment still happen, and knowing what you are entitled to is what resolves them.

The treatment is cashless at the point of care. That is the design of the scheme. You are not meant to pay and claim reimbursement afterwards, and a hospital telling you to pay now and get the money back later is describing something the scheme does not do.

If you are refused, the practical sequence is this. Ask for the Ayushman Mitra, the dedicated help desk that empanelled hospitals are required to run. Most refusals at the counter come from staff unfamiliar with the process rather than from a considered decision, and the help desk exists precisely for this.

Ask for the reason in writing. A hospital that is genuinely unable to treat you, because the procedure is outside its empanelment scope or a specialist is unavailable, can say so. A hospital that is simply declining will usually not put it on paper, and asking often resolves the situation on the spot.

Record what you can. The date, time, the name of the person you spoke to, and the department. If you escalate, this is what makes the complaint actionable rather than a general grievance.

Escalate through the grievance channels covered in the section below rather than accepting the refusal. Complaints against empanelled hospitals are taken seriously because empanelment is a privilege that can be suspended, and hospitals know this.

Two things are worth being clear about, because they are not refusals. A procedure genuinely outside the covered package is not something the hospital can authorise, and a hospital that is not empanelled at all has no obligation under the scheme. Check empanelment before admission wherever the situation allows it.

## Using your card in another state

PM-JAY is portable across India. An eligible beneficiary can receive treatment at any empanelled hospital in the country, not only in the state where the card was issued.

This matters most for the people most likely to be unaware of it. Migrant workers, students living away from home, and families travelling for treatment to a city with better facilities are all covered, and portability is a deliberate feature of the scheme rather than an exception granted case by case.

The practical requirements are the same as at home: the beneficiary must be verified, the hospital must be empanelled, and the procedure must fall within a covered package. What does not change is your entitlement. The cover is attached to the family, not to the state.

Two things are worth knowing before travelling. State-run health schemes that have been integrated with PM-JAY may offer additional benefits within their own state that do not travel with you, so the cover available elsewhere is the PM-JAY package rather than the enhanced state package. And empanelled hospital availability varies considerably between states, so checking the hospital list for your destination is worth doing before you need it rather than during an emergency.

`;

let content = row.content;
if (content.includes("## If a hospital refuses treatment")) {
  console.log("section already present, aborting"); process.exit(1);
}
const marker = "## Frequently asked questions";
if (!content.includes(marker)) { console.error("FAQ marker not found"); process.exit(1); }
content = content.replace(marker, NEW_SECTION + marker);

await replaceScheme({
  slug: SLUG,
  title: row.title,
  description: row.description,
  content,
  faqs: row.faqs,
});
