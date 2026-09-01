// Cycle-conflation audit across every live row.
//
// Detection rule (needs no external source): an examination cannot precede its
// own application window. If a stored exam date ENDS before the application
// window CLOSES, the exam date belongs to a different cycle.
//
// Stronger than comparing years, which false-positives on legitimate
// notified-in-year-N / examined-in-N+1 recruitments.
//
// Read-only. Reports, writes nothing.

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
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const MONTHS = { jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11 };

// Pull every date-like token out of a free-text or ISO value.
// Returns {first, last} as YYYY-MM-DD, or null when nothing parseable.
function extractDates(raw) {
  if (typeof raw !== "string" || !raw.trim()) return null;
  const s = raw.trim();
  // Reject explicit non-dates so "Not announced" never reads as a date.
  if (/^(not announced|tba|to be announced|awaited|expected|nil|n\/a|-)$/i.test(s)) return null;

  const found = [];
  // ISO: 2026-07-15
  for (const m of s.matchAll(/\b(\d{4})-(\d{2})-(\d{2})\b/g)) {
    found.push(`${m[1]}-${m[2]}-${m[3]}`);
  }
  // "15 July 2026" / "15 Jul 2026"
  for (const m of s.matchAll(/\b(\d{1,2})\s+([A-Za-z]{3,9})\s+(\d{4})\b/g)) {
    const mo = MONTHS[m[2].slice(0,3).toLowerCase()];
    if (mo === undefined) continue;
    found.push(`${m[3]}-${String(mo+1).padStart(2,"0")}-${String(+m[1]).padStart(2,"0")}`);
  }
  // "July 2026" with no day: treat as end of month for the LAST bound,
  // start of month for the FIRST bound. Recorded separately so a bare
  // month never produces a spurious precise-looking conflict.
  const bare = [];
  for (const m of s.matchAll(/\b([A-Za-z]{3,9})\s+(\d{4})\b/g)) {
    const mo = MONTHS[m[1].slice(0,3).toLowerCase()];
    if (mo === undefined) continue;
    bare.push({ y: +m[2], mo });
  }
  if (found.length === 0 && bare.length === 0) return null;
  if (found.length === 0) {
    const f = bare[0], l = bare[bare.length-1];
    const lastDay = new Date(l.y, l.mo+1, 0).getDate();
    return {
      first: `${f.y}-${String(f.mo+1).padStart(2,"0")}-01`,
      last: `${l.y}-${String(l.mo+1).padStart(2,"0")}-${lastDay}`,
      fuzzy: true,
    };
  }
  found.sort();
  return { first: found[0], last: found[found.length-1], fuzzy: false };
}

function pick(obj, ...keys) {
  if (!obj || typeof obj !== "object") return null;
  for (const k of keys) if (typeof obj[k] === "string" && obj[k].trim()) return obj[k];
  return null;
}

const REPORTS = [];

async function audit(table, route, dateCol) {
  const { data, error } = await sb.from(table).select("*").eq("is_active", true);
  if (error) { console.error(`${table}: ${error.message}`); return; }
  console.log(`\n### ${table} (${data.length} active rows)`);

  for (const r of data) {
    const id = pick(r, "important_dates") ? null : null;
    const idates = r.important_dates && typeof r.important_dates === "object" ? r.important_dates : {};

    const examRaw = pick(idates, "examDate", "exam_date", "examDates");
    const lastRaw = pick(idates, "lastDate", "last_date") || (dateCol && r[dateCol]) || null;
    const startRaw = pick(idates, "startDate", "start_date", "applicationStart");

    const exam = extractDates(examRaw);
    const last = extractDates(lastRaw);
    const start = extractDates(startRaw);
    if (!exam) continue;

    // Conflict 1: exam window ENDS before applications CLOSE.
    if (last && exam.last < last.last) {
      REPORTS.push({
        sev: "IMPOSSIBLE", table, slug: r.slug, route,
        detail: `exam ends ${exam.last} but applications close ${last.last}`,
        exam: examRaw, last: lastRaw, fuzzy: exam.fuzzy || last.fuzzy,
      });
      continue;
    }
    // Conflict 2: exam STARTS before applications OPEN (weaker, still wrong).
    if (start && exam.first < start.first) {
      REPORTS.push({
        sev: "IMPOSSIBLE", table, slug: r.slug, route,
        detail: `exam starts ${exam.first} but applications open ${start.first}`,
        exam: examRaw, last: startRaw, fuzzy: exam.fuzzy || start.fuzzy,
      });
    }
  }
}

await audit("jobs", "/sarkari-naukri", "last_date");
await audit("entrance_exams", "/entrance-exams", null);
await audit("schemes", "/sarkari-yojana", null);

console.log(`\n=================== CONFLICTS: ${REPORTS.length} ===================`);
for (const x of REPORTS.sort((a,b)=> a.table.localeCompare(b.table))) {
  console.log(`\n[${x.sev}]${x.fuzzy ? " (month-level, verify)" : ""} ${x.table}/${x.slug}`);
  console.log(`   ${x.detail}`);
  console.log(`   examDate : ${JSON.stringify(x.exam)}`);
  console.log(`   window   : ${JSON.stringify(x.last)}`);
  console.log(`   url      : https://www.sarkaridarapan.com${x.route}/${x.slug}`);
}
