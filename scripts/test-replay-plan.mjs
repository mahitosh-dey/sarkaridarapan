// Proves the replay decision logic before it runs against production.
import { planEdit, same } from "./lib/replay-plan.mjs";

let pass = 0, fail = 0;
const check = (name, got, want) => {
  const ok = JSON.stringify(got) === JSON.stringify(want);
  console.log(`  ${ok ? "pass" : "FAIL"}  ${name}`);
  if (!ok) console.log(`        got ${JSON.stringify(got)}\n        want ${JSON.stringify(want)}`);
  ok ? pass++ : fail++;
};

const edit = {
  changes: { last_date: "2026-09-21", vacancies: 13706 },
  previous: { last_date: "2026-09-15", vacancies: 4128 },
};

console.log("planEdit");
check("row untouched since the edit -> apply",
  planEdit({ last_date: "2026-09-15", vacancies: 4128 }, edit).action, "apply");

check("row already holds the new values -> skip",
  planEdit({ last_date: "2026-09-21", vacancies: 13706 }, edit).action, "skip");

check("someone else changed the row -> conflict",
  planEdit({ last_date: "2026-10-01", vacancies: 4128 }, edit).action, "conflict");

check("conflict names the drifted field",
  planEdit({ last_date: "2026-10-01", vacancies: 4128 }, edit).fields, ["last_date"]);

check("conflict can be overridden with force",
  planEdit({ last_date: "2026-10-01", vacancies: 4128 }, edit, true).action, "apply");

check("missing row -> missing",
  planEdit(null, edit).action, "missing");

check("partially applied, rest untouched -> apply",
  planEdit({ last_date: "2026-09-21", vacancies: 4128 }, edit).action, "apply");

// The NSP record carries two queued edits; the second must not be mistaken for
// a conflict just because the first already landed.
const first  = { changes: { title: "B" }, previous: { title: "A" } };
const second = { changes: { faqs: [{ q: 2 }] }, previous: { faqs: [{ q: 1 }] } };
console.log("\ntwo edits on one record, replayed in order");
check("first applies", planEdit({ title: "A", faqs: [{ q: 1 }] }, first).action, "apply");
check("second still applies after the first", planEdit({ title: "B", faqs: [{ q: 1 }] }, second).action, "apply");

console.log("\nsame()");
check("null equals undefined", same(null, undefined), true);
check("null differs from empty string", same(null, ""), false);
check("objects compare by value", same({ a: 1 }, { a: 1 }), true);
check("objects differing by value", same({ a: 1 }, { a: 2 }), false);
check("number and numeric string coerce", same(13706, "13706"), true);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
