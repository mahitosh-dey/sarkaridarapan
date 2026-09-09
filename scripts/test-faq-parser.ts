// Covers both FAQ shapes the site uses. The inline shape silently produced no
// schema at all until 2026-09-09, so this locks the behaviour down.
import { parseFaqsFromMarkdown } from "../lib/faq-parser";

let fail = 0;
const check = (name: string, got: unknown, want: unknown) => {
  const ok = JSON.stringify(got) === JSON.stringify(want);
  console.log(`  ${ok ? "pass" : "FAIL"}  ${name}`);
  if (!ok) console.log(`        got  ${JSON.stringify(got)}\n        want ${JSON.stringify(want)}`);
  if (!ok) fail++;
};

const ownLine = `## Frequently asked questions

**What is the fee?**
Rs 500 for general candidates.

**When is the exam?**
On 12 March 2026.
`;
check("own-line: 2 questions", parseFaqsFromMarkdown(ownLine).length, 2);
check("own-line: first answer", parseFaqsFromMarkdown(ownLine)[0].answer, "Rs 500 for general candidates.");

const inline = `## Frequently asked questions

**Am I eligible?** You qualify if you are 18 to 36 years old on 1 July 2026.

**When is the CBT?** RRB has not announced a date.
`;
check("inline: 2 questions", parseFaqsFromMarkdown(inline).length, 2);
check("inline: question text", parseFaqsFromMarkdown(inline)[0].question, "Am I eligible?");
check("inline: answer text", parseFaqsFromMarkdown(inline)[0].answer,
  "You qualify if you are 18 to 36 years old on 1 July 2026.");

const mixed = `## Frequently asked questions

**Own line?**
Answer one.

**Inline shape?** Answer two.
`;
check("mixed shapes in one section", parseFaqsFromMarkdown(mixed).length, 2);

// A bold label without a question mark must not start a new question, or an
// answer containing one would be split in half.
const boldLabel = `## Frequently asked questions

**How does selection work?** There are two stages. **Stage 1: CBT** is qualifying.
`;
const bl = parseFaqsFromMarkdown(boldLabel);
check("bold label mid-answer does not split", bl.length, 1);
check("bold label stays in the answer", bl[0].answer.includes("Stage 1: CBT"), true);

check("stops at the next H2", parseFaqsFromMarkdown(
  `## Frequently asked questions\n\n**Q?** A.\n\n## Sources\n\n**Not a question?** Nope.\n`
).length, 1);

check("no FAQ section", parseFaqsFromMarkdown("## Eligibility\n\nSome text.").length, 0);
check("empty input", parseFaqsFromMarkdown("").length, 0);
check("null input", parseFaqsFromMarkdown(null).length, 0);

console.log(fail === 0 ? "\nall passed" : `\n${fail} failed`);
process.exit(fail ? 1 : 0);
