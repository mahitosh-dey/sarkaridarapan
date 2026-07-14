import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xtjbijvxxeoopcqxycpz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY",
);

// Titles: 50-65 chars per CLAUDE.md hard rule
// Descriptions: 150-160 chars per CLAUDE.md hard rule
// No em dashes, en dashes, or smart quotes anywhere.

const EXAM_UPDATES = [
  {
    slug: "clat-2026",
    title: "CLAT 2026: Common Law Admission Test Dates and Syllabus",
    description: "CLAT 2026 is India's national law entrance exam for admission to National Law Universities. The Consortium of NLUs conducts it online in December 2025.",
  },
  {
    slug: "aibe-2026",
    title: "AIBE 2026: All India Bar Exam Dates, Syllabus, Pattern",
    description: "AIBE 2026 is the All India Bar Examination, a mandatory qualifying exam for law graduates to practice as advocates. Bar Council of India runs it annually.",
  },
  {
    slug: "cucet-2026",
    title: "CUCET 2026: Chandigarh University Common Entrance Test",
    description: "CUCET 2026 is the Chandigarh University Common Entrance Test with scholarships up to 100 percent on UG and PG programmes. Apply by 30 May 2026 online.",
  },
  {
    slug: "cuet-ug-2026",
    title: "CUET UG 2026: Registration, Exam Dates, Syllabus, Colleges",
    description: "CUET UG 2026 is the national undergraduate entrance exam by NTA for admission to central and state universities. Exam window starts May 11, 2026 online.",
  },
  {
    slug: "neet-pg-2026",
    title: "NEET PG 2026: Dates, Registration, Syllabus, Cutoff, Counselling",
    description: "NEET PG 2026 is the national entrance for MD, MS, and PG Diploma medical admissions across India. NBEMS conducts the exam on August 30, 2026 for MBBS doctors.",
  },
  {
    slug: "jee-main-2027",
    title: "JEE Main 2027: Registration, Exam Dates, Syllabus, Pattern",
    description: "JEE Main 2027 is the national engineering entrance exam by NTA for NITs, IIITs, and central technical institutes. Registration opens in October 2026 online.",
  },
  {
    slug: "nmat-2026",
    title: "NMAT 2026 by GMAC: Registration, Dates, MBA Colleges",
    description: "NMAT 2026 by GMAC is the MBA entrance for NMIMS Mumbai and 30 plus B-schools. Register by October 15, 2026. Exam window Nov to Dec 2026, 3 attempts allowed.",
  },
  {
    slug: "neet-ug-2026-mcc-counselling",
    title: "NEET UG 2026 MCC Counselling: Dates, Choice Filling Guide",
    description: "NEET UG 2026 MCC Counselling allocates MBBS, BDS, AYUSH seats under the All India Quota (15 percent). Round 1 starts July 21, 2026. Register on mcc.nic.in.",
  },
  {
    slug: "ibps-po-2026",
    title: "IBPS PO 2026: Registration, Exam Dates, Syllabus, Salary",
    description: "IBPS PO 2026 recruits Probationary Officers for 11 public sector banks including PNB, BoB, Canara, and Union Bank. Prelims Aug 22-23, Mains Oct 4, 2026.",
  },
];

const SCHEME_UPDATES = [
  {
    slug: "ayushman-bharat-pm-jay-2026",
    title: "Ayushman Bharat PM-JAY 2026: Free Rs. 5 Lakh Health Cover",
    description: "Ayushman Bharat PM-JAY 2026 gives Rs. 5 lakh free health cover per family per year for 55 crore Indians. Apply online at pmjay.gov.in or at Ayushman kiosks.",
  },
];

const AI_VOCAB = ["actually","additionally","align with","crucial","delve","enduring","enhance","fostering","garner","highlight","interplay","intricate","landscape","pivotal","showcase","tapestry","testament","underscore","vibrant"];

function validate(row, { table }) {
  const errs = [];
  if (row.title.length < 50 || row.title.length > 65) errs.push(`title ${row.title.length} chars (need 50-65)`);
  if (row.description.length < 150 || row.description.length > 160) errs.push(`desc ${row.description.length} chars (need 150-160)`);
  for (const s of [row.title, row.description]) {
    if (s.includes("—")) errs.push("em dash");
    if (s.includes("–")) errs.push("en dash");
    if (/[‘’“”]/.test(s)) errs.push("smart quote");
  }
  for (const w of AI_VOCAB) {
    if (new RegExp(`\\b${w}\\b`, "i").test(row.title + " " + row.description)) errs.push(`ai vocab: ${w}`);
  }
  return errs;
}

const DRY = process.argv.includes("--dry");
let fatal = 0;

async function processTable(table, updates) {
  console.log(`\n=== ${table.toUpperCase()} ===`);
  for (const u of updates) {
    const errs = validate(u, { table });
    console.log(`\n${u.slug}`);
    console.log(`  Title (${u.title.length}c): ${u.title}`);
    console.log(`  Desc (${u.description.length}c): ${u.description}`);
    if (errs.length) {
      console.log(`  FAIL: ${errs.join(", ")}`);
      fatal++;
      continue;
    }
    console.log(`  Validation: clean`);
    if (DRY) continue;

    const { error } = await supabase
      .from(table)
      .update({ title: u.title, description: u.description, updated_at: new Date().toISOString() })
      .eq("slug", u.slug);
    if (error) { console.log(`  WRITE FAIL: ${error.message}`); fatal++; continue; }

    const path = table === "entrance_exams" ? `/entrance-exams/${u.slug}` : `/sarkari-yojana/${u.slug}`;
    const res = await fetch(`https://www.sarkaridarapan.com/api/revalidate?path=${path}`);
    const j = await res.json();
    console.log(`  Ship + revalidate: ${j.revalidated ? "OK" : "FAIL"}`);
  }
}

await processTable("entrance_exams", EXAM_UPDATES);
await processTable("schemes", SCHEME_UPDATES);

console.log(`\n${fatal ? "FAIL: " + fatal + " errors" : "All updates clean."}`);
if (fatal) process.exit(1);
