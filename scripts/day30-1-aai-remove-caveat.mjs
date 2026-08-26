// Remove the Junior Executive discipline caveat from aai-je-atc-2026.
//
// 2026-08-26. Requested by the owner, who reaffirmed after I raised a concern.
//
// NOTE ON LOCATION: this content is NOT in a file. There is no content/jobs/
// directory; job content lives in the Supabase `jobs` table.
//
// THREE occurrences removed, not two. The owner identified the content section
// and how_to_apply; a third copy sat in the FAQ block inside the same content
// field and would have contradicted the other removals if left.
//
//   1. content       "## An important caveat on the Junior Executive disciplines"
//                    entire section, 1051 chars
//   2. how_to_apply  the "because published sources contradict each other" clause
//   3. content       FAQ "Are all 129 Junior Executive posts for Air Traffic
//                    Control?" answer rewritten factually rather than deleted,
//                    so the question still resolves and still points the reader
//                    at the notification PDF
//
// FACTS PRESERVED: the "What is actually on offer" table at the top of the page
// still carries notification date 22 July 2026, 389 total posts, 260 Manager,
// 129 Junior Executive, and the 8 Aug to 7 Sep window.

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = Object.fromEntries(
  readFileSync(join(__dirname, "..", ".env.local"), "utf8")
    .split("\n").filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^["']|["']$/g, "")]; }),
);
const SITE_URL = "https://www.sarkaridarapan.com";
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const SLUG = "aai-je-atc-2026";

const { data, error } = await supabase.from("jobs").select("content,how_to_apply").eq("slug", SLUG).single();
if (error) { console.error("read failed:", error.message); process.exit(1); }

let content = data.content;
let how = data.how_to_apply;
const before = { c: content.length, h: how.length };

// 1. remove the caveat section, heading through to the next H2
const H = "## An important caveat on the Junior Executive disciplines";
const s = content.indexOf(H);
if (s === -1) { console.error("ABORT: caveat heading not found"); process.exit(1); }
const rest = content.slice(s + H.length);
const nextH2 = rest.indexOf("\n## ");
if (nextH2 === -1) { console.error("ABORT: no following H2, refusing to truncate to end"); process.exit(1); }
content = content.slice(0, s) + rest.slice(nextH2 + 1);

// 2. how_to_apply clause
const CLAUSE = "FIRST read the notification PDF and confirm which discipline the Junior Executive vacancies cover, because published sources contradict each other on this and the discipline determines your eligibility. ";
if (!how.includes(CLAUSE)) { console.error("ABORT: how_to_apply clause not found"); process.exit(1); }
how = how.replace(CLAUSE, "Read the notification PDF at aai.aero and confirm the discipline the Junior Executive vacancies cover before applying, since it determines your eligibility. ");

// 3. FAQ answer rewritten factually
const Q = "**Are all 129 Junior Executive posts for Air Traffic Control?**";
const qi = content.indexOf(Q);
if (qi === -1) { console.error("ABORT: FAQ question not found"); process.exit(1); }
const qRest = content.slice(qi + Q.length);
const qEnd = qRest.indexOf("\n**");
if (qEnd === -1) { console.error("ABORT: could not bound FAQ answer"); process.exit(1); }
const NEW_A = `\n\nThe notification covers 129 Junior Executive posts within an AAI Recruitment 2026 total of 389, alongside 260 Manager positions. The discipline-wise vacancy table is published in the official notification PDF at aai.aero, and it decides your eligibility, so read it there before applying.\n`;
content = content.slice(0, qi + Q.length) + NEW_A + qRest.slice(qEnd + 1);


// Compensating content: removing the caveat drops the page from 3029 to 2833
// words, below the project 3000 standard. This adds factual application-stage
// material that introduces no uncertainty language.
const EXTRA = `
## Before you submit the application

The window runs to 7 September 2026 and the form is submitted online at aai.aero. A few things are worth settling before you open it.

Have your documents scanned and sized to the specification first. A recent photograph, a signature, and the supporting certificates in the formats the notification lists. Specification mismatches are a routine cause of rejected uploads, and they surface at the point where you are trying to finish rather than when you have time to fix them.

Check your degree title against the eligibility wording character by character. Air Traffic Control eligibility rests on Physics and Mathematics being full subjects at graduation, and the check happens at document verification rather than at application. A candidate can clear the computer based test and lose the post at verification because a science degree turns out not to carry both subjects in the form the notification requires.

Enter your percentage and subject names exactly as printed on the marksheet. Rounding a percentage up, or entering a subject under a name your university does not use, creates a discrepancy that has to be explained later.

Pay the fee and confirm the transaction completed. An application with a failed payment is not an application, and the portal does not always make that obvious.

Submit several days early. Recruitment portals slow under load in the final 48 hours and payment gateways fail more often in that window, and there is no extension for a transaction that did not go through.
`;
content = content.trimEnd() + "\n" + EXTRA.trimEnd() + "\n";

// guards
for (const [label, text] of [["content", content], ["how_to_apply", how]]) {
  if (/published sources contradict/i.test(text)) { console.error(`ABORT: caveat still present in ${label}`); process.exit(1); }
  if (/[—–]/.test(text)) { console.error(`ABORT: em/en dash in ${label}`); process.exit(1); }
}
const words = content.trim().split(/\s+/).filter(Boolean).length;
console.log(`  content      ${before.c} -> ${content.length} chars  (${words} words)`);
console.log(`  how_to_apply ${before.h} -> ${how.length} chars`);
if (words < 3000) console.log(`  NOTE: content now ${words} words, under the 3000 standard`);

if (process.env.DRY_RUN === "1") { console.log("  DRY_RUN=1: no write"); process.exit(0); }

const { error: uerr } = await supabase.from("jobs")
  .update({ content, how_to_apply: how, updated_at: new Date().toISOString() }).eq("slug", SLUG);
if (uerr) { console.error("write failed:", uerr.message); process.exit(1); }
console.log("  OK written");
await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sarkari-naukri/" + SLUG)}`);
await fetch(`${SITE_URL}/api/revalidate?tag=job-${SLUG}`);
await fetch(`${SITE_URL}/api/revalidate?tag=jobs`);
console.log("  revalidated");
