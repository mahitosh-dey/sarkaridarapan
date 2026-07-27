// Day 8 — TN LPG safe-fix PART 3 (ROOT-CAUSE FIX).
// day8-6b set `eligibility` and `documents` to STRINGS, but the schemes table
// stores them as ARRAYS (SchemeDetail.tsx calls .map on them). A string passes
// `.length > 0` then throws on `.map`, so every ISR re-render crashed and Vercel
// kept serving the stale (fabricated) cached copy for hours. This converts both
// back to arrays so the page can regenerate. Humanizer-clean, no fabricated data.
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
  eligibility: [
    "No official eligibility for a Tamil Nadu state free LPG scheme has been notified as of July 2026",
    "For the central PMUY (Ujjwala): a woman from an eligible poor household without an existing LPG connection, verified against the specified beneficiary lists",
    "A valid ration card and an Aadhaar-linked bank account are the usual base requirements for any LPG subsidy delivered by direct benefit transfer",
  ],
  documents: [
    "To be specified in the official notification when a state scheme is announced",
    "For the central PMUY: Aadhaar card",
    "Bank account details for direct benefit transfer",
    "Proof of eligibility as listed in the PMUY guidelines",
  ],
  updated_at: new Date().toISOString(),
};

const { error } = await sb.from("schemes").update(update).eq("slug", SLUG);
if (error) { console.error("FAIL:", error.message); process.exit(1); }
console.log("OK fixed array types (eligibility, documents) for", SLUG);

// verify types
const { data } = await sb.from("schemes").select("eligibility,documents,benefits").eq("slug", SLUG).maybeSingle();
console.log("eligibility:", Array.isArray(data.eligibility) ? `array(${data.eligibility.length})` : typeof data.eligibility);
console.log("documents:", Array.isArray(data.documents) ? `array(${data.documents.length})` : typeof data.documents);
console.log("benefits:", Array.isArray(data.benefits) ? `array(${data.benefits.length})` : typeof data.benefits);

const rev = await fetch(`${SITE}/api/revalidate?path=${encodeURIComponent("/sarkari-yojana/" + SLUG)}`);
console.log("Path revalidate:", rev.status);
const tag = await fetch(`${SITE}/api/revalidate?tag=schemes`);
console.log("Schemes tag revalidate:", tag.status);
await pingIndexNow(SLUG, "/sarkari-yojana");
