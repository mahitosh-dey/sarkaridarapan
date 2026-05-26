import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function detectCategory(title: string): string {
  const t = title.toLowerCase();
  if (/\b(apply|application|registration|admit\s*card|download)\b/.test(t)) {
    return "Application Help";
  }
  if (/\b(prepare|syllabus|books?|strategy|study)\b/.test(t)) {
    return "Exam Preparation";
  }
  if (/\b(yojana|scheme|pm\s*kisan|ayushman|pension|nidhi)\b/.test(t)) {
    return "Scheme Guide";
  }
  return "Career Guide";
}

function getSections(category: string): string[] {
  switch (category) {
    case "Application Help":
      return [
        "Overview",
        "Eligibility Criteria",
        "Important Dates",
        "How to Apply Online (Step by Step)",
        "Application Fee",
        "Documents Required",
        "Common Mistakes to Avoid",
        "Frequently Asked Questions",
      ];
    case "Exam Preparation":
      return [
        "Overview",
        "Exam Pattern",
        "Complete Syllabus",
        "Preparation Strategy",
        "Best Books",
        "Previous Year Papers",
        "Frequently Asked Questions",
      ];
    case "Scheme Guide":
      return [
        "Overview",
        "Key Benefits",
        "Eligibility Criteria",
        "How to Apply",
        "Documents Required",
        "Important Links",
        "Frequently Asked Questions",
      ];
    case "Career Guide":
    default:
      return [
        "Overview",
        "Eligibility",
        "Selection Process",
        "Salary Structure",
        "Career Growth",
        "How to Apply",
        "Frequently Asked Questions",
      ];
  }
}

function extractTags(title: string, category: string): string[] {
  const tags: string[] = [];

  // Extract year (e.g. 2026)
  const yearMatch = title.match(/\b(20\d{2})\b/);
  if (yearMatch) tags.push(yearMatch[1]);

  // Extract known org / exam acronyms (2+ uppercase letters)
  const acronyms = title.match(/\b[A-Z]{2,}\b/g);
  if (acronyms) {
    for (const a of acronyms) {
      if (!tags.includes(a)) tags.push(a);
    }
  }

  // Extract multi-word proper nouns (consecutive capitalized words)
  const properNouns = title.match(/(?:[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)/g);
  if (properNouns) {
    for (const pn of properNouns) {
      if (!tags.includes(pn)) tags.push(pn);
    }
  }

  // Add category keyword
  const catTag: Record<string, string> = {
    "Application Help": "Application Guide",
    "Exam Preparation": "Preparation Tips",
    "Scheme Guide": "Government Scheme",
    "Career Guide": "Career Guide",
  };
  tags.push(catTag[category] ?? "Government Jobs");

  // Always add a general tag
  if (!tags.includes("Government Jobs")) tags.push("Government Jobs");

  return tags;
}

function todayISO(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const title = process.argv[2];
  if (!title) {
    console.error(
      "Usage: npx tsx scripts/create-guide.ts \"Guide Title Here\""
    );
    process.exit(1);
  }

  const slug = slugify(title);
  const category = detectCategory(title);
  const today = todayISO();
  const tags = extractTags(title, category);
  const sections = getSections(category);

  // Build markdown content
  const mdLines: string[] = [];
  for (const section of sections) {
    mdLines.push(`## ${section}`);
    mdLines.push("");
    mdLines.push("TODO: Write this section.");
    mdLines.push("");
  }
  const markdownContent = mdLines.join("\n").trimEnd();

  // Build 5 placeholder FAQs
  const faqPlaceholders = Array.from({ length: 5 }, (_, i) => ({
    question: `FAQ question ${i + 1} about ${title}?`,
    answer: `TODO: Write answer for FAQ ${i + 1}.`,
  }));

  // Read guides.ts
  const guidesPath = path.resolve(__dirname, "../lib/guides.ts");
  let source = fs.readFileSync(guidesPath, "utf-8");

  // Duplicate check
  if (source.includes(`slug: '${slug}'`) || source.includes(`slug: "${slug}"`)) {
    console.error(`Guide with slug "${slug}" already exists. Aborting.`);
    process.exit(1);
  }

  // Build the new guide entry as TypeScript source text
  const description = `TODO: Write a meta description for ${title}.`;

  const faqsSource = faqPlaceholders
    .map(
      (f) =>
        `      {\n        question: ${JSON.stringify(f.question)},\n        answer: ${JSON.stringify(f.answer)},\n      }`
    )
    .join(",\n");

  const tagsSource = tags.map((t) => JSON.stringify(t)).join(", ");

  // Use JSON.stringify for the content string to avoid backtick-in-backtick issues,
  // then replace the outer quotes with backticks and unescape \\n to real newlines
  // so the file stays readable. We store raw markdown with real newlines inside backticks.
  const contentAsBacktick =
    "`" +
    markdownContent.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$") +
    "`";

  const entry = `  {
    slug: "${slug}",
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    category: ${JSON.stringify(category)},
    author: "SarkariDarapan Team",
    publishedAt: "${today}",
    updatedAt: "${today}",
    tags: [${tagsSource}],
    content: ${contentAsBacktick},
    faqs: [
${faqsSource}
    ],
  },`;

  // Find the closing of the guides array and insert before it
  const closingIndex = source.lastIndexOf("\n];");
  if (closingIndex === -1) {
    console.error("Could not find the closing ]; of the guides array in lib/guides.ts");
    process.exit(1);
  }

  source = source.slice(0, closingIndex) + "\n\n" + entry + "\n];" + source.slice(closingIndex + 3);

  fs.writeFileSync(guidesPath, source, "utf-8");

  console.log(`Guide created successfully!`);
  console.log(`  Slug:     ${slug}`);
  console.log(`  Category: ${category}`);
  console.log(`  Tags:     ${tags.join(", ")}`);
  console.log(`  File:     ${guidesPath}`);
}

main();
