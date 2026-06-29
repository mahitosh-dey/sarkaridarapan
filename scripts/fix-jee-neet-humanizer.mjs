import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";

const env = Object.fromEntries(
  readFileSync(".env.local", "utf8")
    .split("\n")
    .filter((l) => l && !l.startsWith("#"))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i), l.slice(i + 1)];
    })
);

const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

// ─── JEE Main 2026 fixes ──────────────────────────────────────────────────────
// Only fixing: title (em dash), exam_date (en dash), description tweak

const jeeUpdates = {
  title: "JEE Main 2026: Complete Guide (Session 1 and Session 2)",
  exam_date: "Session 1: January 21 to 29, 2026 | Session 2: April 2 to 9, 2026",
  description:
    "JEE Main 2026 was conducted in two sessions: Session 1 (January 21 to 29) and Session 2 (April 2 to 9). Both sessions are complete and results are declared. 75 questions, 300 marks, computer-based. Gateway to NITs, IIITs, GFTIs, and JEE Advanced.",
};

// ─── NEET UG 2026 fixes ───────────────────────────────────────────────────────
// Exam happened June 21. Today June 29. Results expected early-mid July 2026.
// Fixing: title (em dash), exam_date (em dash), description (stale), and
// the preparation tips section in content (was "exam 11 days away").

const neetTitle = "NEET UG 2026: Complete Guide (Re-Exam June 21 Done, Results Awaited)";
const neetExamDate = "June 21, 2026 (Re-Exam conducted — original May 3 exam was cancelled)";
const neetDescription =
  "NEET UG 2026 re-exam was held on June 21, 2026 after the original May 3 exam was cancelled. Results expected early-mid July 2026. 720 marks, 180 questions, pen-and-paper mode.";

// Updated preparation/post-exam section to replace the stale "11 days away" block
const oldPrepSection = `## Preparation Tips (If You're Appearing June 21)

With the exam 11 days away, this is not the time for new topics. Focus on:

1. **Revise NCERT thoroughly** — NEET questions are deeply NCERT-based. Biology in particular is almost line-for-line from NCERT. Read the textbook diagrams too.
2. **Solve previous year papers** — NEET repeats concepts across years. Solve at least 5 years of previous papers under timed conditions.
3. **Focus on high-weightage chapters** — In Physics: Mechanics, Optics, Modern Physics. In Chemistry: Organic Chemistry, Equilibrium. In Biology: Genetics, Human Physiology, Ecology.
4. **Do not start anything new** — If you haven't covered a topic properly yet, don't start it now. Strengthen what you already know.
5. **Attempt mock tests on Section B** — Practice which 10 questions to pick in Section B. Don't waste time on all 15.
6. **Stay calm on exam day** — The exam centre security will be higher than usual given the re-exam situation. Reach early.`;

const newPrepSection = `## After the exam: what to do now

The NEET UG 2026 re-exam was held on June 21, 2026. Results are expected in early to mid July 2026 on neet.nta.nic.in.

Once results are out, your scorecard will show subject-wise marks, total marks out of 720, your percentile, and your All India Rank (AIR).

MCC counselling for the 15% All India Quota seats (AIIMS, JIPMER, ESIC, and central universities) is expected to begin around July 21, 2026 at mcc.nic.in.

State quota seats (85%) are filled through separate state counselling authorities. Each state publishes its own schedule after the NEET result is declared.

While you wait for results, use this time to gather documents you'll need for counselling: Class 10 and 12 mark sheets, caste certificate (if applicable), domicile certificate, ID proof, passport-size photos, and your NEET admit card. Having these ready speeds up the counselling process considerably.`;

// ─── Fetch current NEET content to do the replacement ─────────────────────────
const { data: neetData, error: fetchError } = await sb
  .from("entrance_exams")
  .select("content")
  .eq("slug", "neet-ug-2026")
  .single();

if (fetchError) {
  console.error("Failed to fetch NEET content:", fetchError.message);
  process.exit(1);
}

const updatedNeetContent = neetData.content.replace(oldPrepSection, newPrepSection);

if (updatedNeetContent === neetData.content) {
  console.warn("NEET prep section not found — content unchanged. Check the old string.");
}

// ─── Apply updates ────────────────────────────────────────────────────────────

console.log("Updating JEE Main 2026...");
const { error: jeeError } = await sb
  .from("entrance_exams")
  .update(jeeUpdates)
  .eq("slug", "jee-main-2026");

if (jeeError) console.error("JEE update failed:", jeeError.message);
else console.log("  JEE Main: title, exam_date, description updated.");

console.log("Updating NEET UG 2026...");
const { error: neetError } = await sb
  .from("entrance_exams")
  .update({
    title: neetTitle,
    exam_date: neetExamDate,
    description: neetDescription,
    content: updatedNeetContent,
  })
  .eq("slug", "neet-ug-2026");

if (neetError) console.error("NEET update failed:", neetError.message);
else console.log("  NEET UG: title, exam_date, description, prep section updated.");
