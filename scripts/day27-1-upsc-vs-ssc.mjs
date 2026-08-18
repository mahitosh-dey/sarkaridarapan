// upsc-vs-ssc-which-exam-to-choose-2026: dash cleanup + sentence case + deepen
//
// 2026-08-18.
//
//   dashes   24 -> 0, categorised as on top-10 rather than blanket-substituted
//   headings Title Case -> sentence case; "## The Real Question" renamed since
//            "the real question is" is on the banned-phrase list
//   thin     1785w -> 3000w+
//
// The added material covers what the existing page skipped and what actually
// decides the choice: attempt limits (UPSC caps, SSC does not), the optional
// subject as 500 marks of dedicated work, the financial reality of a multi-year
// attempt, and state PSC as the third option most comparisons ignore.

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
const SLUG = "upsc-vs-ssc-which-exam-to-choose-2026";

const HEADINGS = [
  ["## UPSC vs SSC — Choosing the Right Path in 2026", "## UPSC vs SSC: choosing the right path in 2026"],
  ["## The Core Difference", "## The core difference"],
  ["## Exam Structure", "## Exam structure"],
  ["## Preparation Time — The Honest Reality", "## Preparation time: the honest reality"],
  ["## Posts and Job Profiles", "## Posts and job profiles"],
  ["## Salary Comparison at Entry Level", "## Salary comparison at entry level"],
  ["## Who Should Choose UPSC?", "## Who should choose UPSC?"],
  ["## Who Should Choose SSC CGL?", "## Who should choose SSC CGL?"],
  ["## Can You Prepare for Both?", "## Can you prepare for both?"],
  ["## The Real Question", "## What to actually ask yourself"],
];

const SPECIFIC = [
  ["9 written papers — 4 GS papers", "9 written papers: 4 GS papers"],
  ["100 MCQs — GK, Reasoning", "100 MCQs covering GK, Reasoning"],
  ["3 papers — Paper 1", "3 papers. Paper 1"],
  ["public administration and governance — not just the designation",
   "public administration and governance, not just the designation"],
  ["need to be a district magistrate — you're fine being",
   "need to be a district magistrate, and you're fine being"],
  ["Yes — with limits.", "Yes, with limits."],
  ["genuinely excite you — go for UPSC", "genuinely excite you, go for UPSC"],
];

const NEW = `
## Attempt limits, the difference nobody weighs properly

This is the structural difference that should carry more weight in the decision than it usually does.

UPSC caps attempts. Six for the general category, nine for Other Backward Classes, and no cap up to the age ceiling for Scheduled Castes and Scheduled Tribes. Appearing in the preliminary examination consumes an attempt, while applying without appearing does not.

SSC CGL imposes no attempt limit at all. Eligibility is governed by age alone, so a candidate can sit it every year they remain within the band.

Read together with the age limits, the two examinations offer very different runways. A general category candidate starting UPSC at 24 has six attempts and an age ceiling at 32. The same candidate has roughly eight years of SSC CGL attempts with no cap on how many they use.

That asymmetry matters most for candidates who are uncertain. A capped, high-difficulty examination punishes indecision, because attempts spent while you were half-committed are gone. An uncapped one does not.

## The optional subject, and what it really costs

UPSC Mains includes an optional subject worth 500 marks across two papers. SSC CGL has nothing equivalent.

Five hundred marks is close to a fifth of the 1750 written total, more than any single General Studies paper. That alone makes it significant, but the real cost is time. An optional subject is a university-level syllabus studied to a standard where you can write analytically about it under examination conditions, and most candidates spend several months on it before they are competitive.

Candidates comparing preparation timelines frequently leave this out. The gap between UPSC and SSC CGL preparation is not simply that UPSC is harder. It is that UPSC contains an entire additional subject that SSC does not, plus a descriptive writing skill that objective preparation never builds.

If you are weighing the two on effort, count the optional as a separate project rather than folding it into general preparation.

## What the work actually looks like

Comparisons dwell on pay and status and skip the thing you will experience daily for decades.

An IAS officer in district administration handles revenue matters, magistracy, law and order coordination, election duties, scheme implementation and whatever crisis arrives that week. The authority is real and so is the unpredictability. Hours are long, transfers are frequent, and public and political pressure is a permanent feature.

An Income Tax Inspector or Excise Inspector works within a defined functional area, with investigation and enforcement components depending on the posting. The work is substantive and the hours are more predictable than district administration, though field roles carry their own demands.

An Assistant Section Officer in a ministry works on files, policy inputs and coordination in a secretariat environment. It is desk work in the centre of government, which suits some people well and bores others.

An Assistant Audit Officer examines government spending. The work is analytical, largely predictable, and carries a professional character closer to accountancy than to administration.

None of these is better. They are different jobs, and a candidate who wants one would be unhappy in another regardless of which examination they cleared.

## The financial reality of a long attempt

Nobody enjoys discussing this and it decides more outcomes than aptitude does.

A multi-year UPSC attempt has a cost: living expenses, coaching if you use it, materials, and the earnings you are not making. For a candidate supported by family this is absorbable. For one who needs to contribute to household income it may not be.

SSC CGL, banking and railway examinations have shorter cycles and higher selection ratios, which means a realistic prospect of employment within a year or two rather than a possibility after four.

The strategy that works for most people in the second position is to secure a post first and prepare afterwards. A candidate working as an Income Tax Inspector who prepares for UPSC in the evenings has income, security and no deadline pressure. A candidate with none of those is making every attempt under financial strain, which affects performance directly.

There is no honour in the harder path if it breaks you financially. The candidates who clear UPSC after several attempts are disproportionately those who could afford several attempts.

## The third option most comparisons ignore

Framing this as UPSC against SSC CGL leaves out state public service commissions, and for many candidates they are the better answer.

State PSCs recruit Deputy Collectors, Deputy Superintendents of Police and equivalent posts through examinations structured much like UPSC, with prelims, descriptive mains and an interview. The work is district administration within one state.

Two features make them worth serious consideration. Age limits generally run higher, frequently to 40, which keeps the route open for candidates who have aged out of UPSC. And competition, while heavy, is lower than the national examination because the candidate pool is state-scoped.

The preparation overlaps substantially with UPSC, since general studies is shared, though state-specific history, geography, polity and current affairs form a body of material that earns nothing at UPSC and everything at the state level.

A candidate who wants district administration specifically, and is willing to work within one state, may reach it faster through the state commission than through UPSC. That is not a lesser outcome. A Sub Divisional Magistrate exercises real authority regardless of which examination placed them there.
## Common mistakes in making this choice

Choosing on prestige rather than on the work. The designation lasts a moment at a family gathering; the job lasts thirty years. Candidates who pick the examination people respect, rather than the work they want, are the ones who arrive at a post and wonder why it does not feel as expected.

Treating SSC CGL as a consolation. It is competitive enough to require genuine preparation, and candidates who approach it with leftover effort after a failed UPSC attempt generally do not clear it either. Posts like Assistant Audit Officer and Income Tax Inspector are substantial careers chosen deliberately by people who wanted them.

Underestimating the descriptive transition. A candidate strong at objective papers is not automatically ready for nine descriptive papers, and the gap is a skill built over months rather than a matter of knowing more.

Ignoring the attempt cap while drifting. UPSC attempts spent during a half-committed year are gone permanently. If you are going to attempt it, attempt it properly; if you are not ready to commit, sitting the prelims casually is an expensive way to find out.

Forgetting that both examinations are winnable at once early on. The prelims-level foundation is shared, so a candidate in their first year of preparation loses nothing by keeping both open and specialising later.

Comparing entry salaries alone. Entry pay understates the UPSC trajectory and overstates the difference at the start. Career progression, not starting basic, is where the two genuinely diverge.

Assuming coaching decides the outcome. It provides structure for those who need it and it does not substitute for daily independent study, which is what actually separates candidates in both examinations.

## A practical decision framework

If you are stuck, work through these in order rather than agonising over the comparison as a whole.

Start with what you want to do daily. District administration, enforcement work, secretariat policy work and audit are different jobs. Pick the work first, then the examination that leads to it, because the examination is a means and the job is the point.

Then check your runway honestly. How many years can you afford to prepare without income, and how many attempts does your age band allow? A candidate with two years and a general category age of 28 is in a different position from one with five years at 22, and the same advice does not serve both.

Then decide whether you can build the descriptive skill. UPSC Mains rewards structured writing under time. Some candidates take to it quickly and some struggle for years. Write a few practice answers before committing a multi-year plan to an examination built on a skill you have not tested.

Then look at state PSCs against your own state. If district administration is what you want and you are content within one state, that route may be shorter than the national one.

Finally, keep both open in the first year if you genuinely cannot decide. The shared foundation costs you nothing, and a year of preparation will tell you more about your own aptitude and appetite than any comparison article can.

`;

const { data, error } = await supabase.from("blog_posts").select("content").eq("slug", SLUG).single();
if (error) { console.error("read failed:", error.message); process.exit(1); }
let c = data.content;
const start = (c.match(/[—–]/g) || []).length;

for (const [f, t] of HEADINGS) { if (c.includes(f)) c = c.split(f).join(t); else console.log(`  WARN heading not found: ${f.slice(0,45)}`); }
for (const [f, t] of SPECIFIC) { if (c.includes(f)) c = c.split(f).join(t); else console.log(`  WARN specific not found: ${f.slice(0,45)}`); }

c = c.replace(/(₹[\d,]+)\s*[—–]\s*(₹?[\d,]+)/g, "$1 to $2");
c = c.replace(/(\d)\s*[—–]\s*(₹?\d)/g, "$1 to $2");
c = c.replace(/^(\s*[-*]\s+\*\*[^*\n]+\*\*)\s*[—–]\s*/gm, "$1: ");
c = c.replace(/\s+[—–]\s+/g, ", ");
c = c.replace(/\s*[—–]\s*/g, ", ");

const left = (c.match(/[—–]/g) || []).length;
console.log(`  dashes ${start} -> ${left}`);
if (left) { (c.match(/.{0,70}[—–].{0,70}/g)||[]).forEach(x=>console.error("    LEFT: "+x.trim())); process.exit(1); }

// insert new sections before the FAQ
const marker = "## Frequently asked questions";
if (!c.includes(marker)) { console.error("  ABORT: no FAQ marker"); process.exit(1); }
if (/[—–]/.test(NEW)) { console.error("  ABORT: new text has a dash"); process.exit(1); }
c = c.replace(marker, NEW.trimEnd() + "\n\n" + marker);

const words = c.split(/\s+/).filter(Boolean).length;
console.log(`  words ${data.content.split(/\s+/).filter(Boolean).length} -> ${words}`);
if (words < 3000) { console.error("  ABORT: under 3000w"); process.exit(1); }

if (process.env.DRY_RUN === "1") { console.log("  DRY_RUN=1: no write"); process.exit(0); }
const { error: uerr } = await supabase.from("blog_posts").update({ content: c, updated_at: new Date().toISOString() }).eq("slug", SLUG);
if (uerr) { console.error("write failed:", uerr.message); process.exit(1); }
console.log("  OK written");
await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/blog/" + SLUG)}`);
await fetch(`${SITE_URL}/api/revalidate?tag=blog-post-${SLUG}`);
await fetch(`${SITE_URL}/api/revalidate?tag=blog-posts`);
console.log("  revalidated");
