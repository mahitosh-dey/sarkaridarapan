// Proves fitToRange lands inside the hard-rule windows for every real facet
// name, not just the ones that happened to be spot-checked.
import { fitTitle, fitDescription } from "../lib/meta-fit";
import { STATES, JOB_CATEGORIES } from "../lib/constants";
import {
  STATE_TITLE_ENDINGS,
  STATE_DESC_ENDINGS,
  CATEGORY_DESC_ENDINGS,
} from "../lib/meta-fit";

let fail = 0;

function report(kind: string, name: string, r: { text: string; fitted: boolean }, min: number, max: number) {
  const n = r.text.length;
  const ok = r.fitted && n >= min && n <= max;
  if (!ok) { fail++; console.log(`  FAIL ${kind} ${name}: ${n}c  "${r.text}"`); }
  return ok;
}

console.log(`State titles (50-65) across ${STATES.length} states`);
let pass = 0;
for (const s of STATES) {
  const r = fitTitle(`${s.name} Government Jobs 2026`, STATE_TITLE_ENDINGS);
  if (report("state title", s.name, r, 50, 65)) pass++;
}
console.log(`  ${pass}/${STATES.length} fitted`);

console.log(`\nState descriptions (150-160)`);
pass = 0;
for (const s of STATES) {
  const r = fitDescription(
    `Latest government jobs in ${s.name} 2026. Browse current openings with eligibility, salary, last date and how to apply`,
    STATE_DESC_ENDINGS
  );
  if (report("state desc", s.name, r, 150, 160)) pass++;
}
console.log(`  ${pass}/${STATES.length} fitted`);

console.log(`\nCategory descriptions (150-160) across ${JOB_CATEGORIES.length} categories`);
pass = 0;
for (const c of JOB_CATEGORIES) {
  const r = fitDescription(
    `${c.name} government jobs 2026. Current vacancies with eligibility, salary, exam pattern, last date and how to apply`,
    CATEGORY_DESC_ENDINGS
  );
  if (report("category desc", c.name, r, 150, 160)) pass++;
}
console.log(`  ${pass}/${JOB_CATEGORIES.length} fitted`);

console.log(fail === 0 ? "\nall fitted" : `\n${fail} did not fit`);
process.exit(fail ? 1 : 0);
