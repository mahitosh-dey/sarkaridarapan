import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);

// Bing AI top-cited topics per growth plan: PMSBY, Agniveer CEE, Group 4 jobs, GATE 2027
// Already expanded: PMSBY (2026-07-07), GATE 2027 (2026-07-09), Agniveer CEE result blog (2026-07-09)
// Look for: agniveer job page (not blog), group 4 jobs, other short pages in jobs+schemes+exams

const wordCount = (s) => (s || "").split(/\s+/).filter(Boolean).length;

const jobs = (await supabase.from("jobs").select("slug, title, content, is_active, category").eq("is_active", true)).data || [];
const schemes = (await supabase.from("schemes").select("slug, title, content, is_active").eq("is_active", true)).data || [];
const exams = (await supabase.from("entrance_exams").select("slug, title, content, is_active").eq("is_active", true)).data || [];

console.log(`=== ACTIVE COUNTS: jobs ${jobs.length}, schemes ${schemes.length}, exams ${exams.length}\n`);

// Look for Agniveer job page
const agniveerJob = jobs.find(j => /agniveer|army/i.test(j.slug + " " + j.title));
if (agniveerJob) {
  console.log("Agniveer job page found:");
  console.log(`  slug=${agniveerJob.slug}, words=${wordCount(agniveerJob.content)}, title="${agniveerJob.title}"`);
}

// Look for Group 4 / Group D
const group4 = [...jobs, ...schemes, ...exams].filter(x => /group.4|group.d|group.iv|tnpsc.*group/i.test(x.slug + " " + x.title));
console.log("\nGroup 4/D pages:");
for (const p of group4) console.log(`  slug=${p.slug}, words=${wordCount(p.content)}, title="${p.title}"`);

// All jobs sorted by word count (thin content first)
const jobsByWords = [...jobs].map(j => ({ slug: j.slug, title: j.title, words: wordCount(j.content), category: j.category })).sort((a,b) => a.words - b.words);
console.log("\n=== 20 THINNEST ACTIVE JOB PAGES ===");
for (const j of jobsByWords.slice(0, 20)) {
  console.log(`  ${j.words.toString().padStart(5)} | ${j.category?.padEnd(12) || "-".padEnd(12)} | ${j.slug}`);
}

const schemesByWords = [...schemes].map(s => ({ slug: s.slug, title: s.title, words: wordCount(s.content) })).sort((a,b) => a.words - b.words);
console.log("\n=== 15 THINNEST ACTIVE SCHEME PAGES ===");
for (const s of schemesByWords.slice(0, 15)) console.log(`  ${s.words.toString().padStart(5)} | ${s.slug}`);

const examsByWords = [...exams].map(e => ({ slug: e.slug, title: e.title, words: wordCount(e.content) })).sort((a,b) => a.words - b.words);
console.log("\n=== 15 THINNEST ACTIVE EXAM PAGES ===");
for (const e of examsByWords.slice(0, 15)) console.log(`  ${e.words.toString().padStart(5)} | ${e.slug}`);
