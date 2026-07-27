// Day 8 — TN LPG safe-fix PART 2: the schemes table has structured columns
// (launched_by, objective, benefits, how_to_apply, documents, eligibility,
// official_portal, helpline_number, ministry) rendered on the page that
// replaceScheme does NOT touch. They still held the fabricated political claims
// (launched_by "Vijay (CM)", objective "delivered by new Chief Minister Vijay",
// fabricated benefits and tnpds application steps). This overwrites them with
// honest, verifiable, non-fabricated values. Humanizer-clean (no dashes/smart
// quotes/banned words). Then revalidates schemes tag + path.
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { pingIndexNow } from "./lib/indexnow.mjs";

const env = Object.fromEntries(
  readFileSync(".env.local", "utf8").split("\n").filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^["']|["']$/g, "")]; }),
);
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const SLUG = "chief-ministers-free-lpg-connection-scheme-tamil-nadu-2026";
const SITE = "https://www.sarkaridarapan.com";

const update = {
  launched_by: "Announced as a 2026 Tamil Nadu election promise (implementation not yet officially notified)",
  ministry: "Tamil Nadu Civil Supplies and Consumer Protection Department (implementing authority for any notified state LPG scheme)",
  objective:
    "A promise of free LPG cylinders for Tamil Nadu families was made ahead of the 2026 Tamil Nadu Assembly election. As of July 2026 no order or application process has been notified by the Tamil Nadu Civil Supplies and Consumer Protection Department, so the eligibility, benefit terms, and rollout are not confirmed. The verifiable LPG benefit operating today is the central Pradhan Mantri Ujjwala Yojana (PMUY).",
  benefits: [
    "Reported promise: free LPG cylinders per year for eligible families (exact terms not yet officially notified as of July 2026)",
    "No official eligibility, application process, or subsidy mechanism has been notified for the state scheme",
    "The live LPG benefit in Tamil Nadu is the central PMUY (Ujjwala): a deposit-free connection with first-refill and stove support for eligible women, plus a Rs 300 per cylinder subsidy by direct benefit transfer",
  ],
  eligibility:
    "No official eligibility for a Tamil Nadu state free LPG scheme has been notified as of July 2026. For the central PMUY, eligibility is a woman from an eligible poor household without an existing LPG connection, verified against the specified beneficiary lists.",
  documents:
    "To be specified in the official notification when a state scheme is announced. For the central PMUY, the usual requirements are Aadhaar, a bank account for direct benefit transfer, and proof of eligibility.",
  how_to_apply:
    "No official application process for a Tamil Nadu state free LPG scheme has been notified as of July 2026, so ignore any site claiming a live application. For the central PMUY connection, apply through your LPG distributor if you are eligible. Track any state scheme on the Tamil Nadu Public Distribution System portal at tnpds.gov.in and the state gazette.",
  official_portal: "https://www.tnpds.gov.in/",
  helpline_number: null,
  updated_at: new Date().toISOString(),
};

const { error } = await sb.from("schemes").update(update).eq("slug", SLUG);
if (error) { console.error("FAIL:", error.message); process.exit(1); }
console.log("OK cleaned structured fields for", SLUG);

const rev = await fetch(`${SITE}/api/revalidate?path=${encodeURIComponent("/sarkari-yojana/" + SLUG)}`);
console.log("Path revalidate:", rev.status);
const tag = await fetch(`${SITE}/api/revalidate?tag=schemes`);
console.log("Schemes tag revalidate:", tag.status);
const tag2 = await fetch(`${SITE}/api/revalidate?tag=scheme-${SLUG}`);
console.log("Per-slug tag revalidate:", tag2.status);
await pingIndexNow(SLUG, "/sarkari-yojana");
