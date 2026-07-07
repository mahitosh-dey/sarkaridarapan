import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xtjbijvxxeoopcqxycpz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY'
);

const TITLE_MIN = 50, TITLE_MAX = 65;
const DESC_MIN = 150, DESC_MAX = 160;

// Replace em/en dashes intelligently:
//   - Currency ranges (₹X — ₹Y) → "₹X to ₹Y"
//   - Age ranges (aged X — Y, X — Y years) → "X to Y"
//   - Month/date ranges (June — July, 5 — 6 Sep) → "X to Y"
//   - Everything else between phrases → ": "
//   - Double hyphens → ". "
function stripDashes(s) {
  if (!s) return s;
  const months = 'Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|May|June|July|August|September|October|November|December';
  return s
    // Currency: ₹1000 — ₹2000
    .replace(/(₹[\d,.]+(?:\s*(?:lakh|crore|L|Cr))?)\s*[—–]\s*(₹[\d,.]+(?:\s*(?:lakh|crore|L|Cr))?)/gi, '$1 to $2')
    // "aged X — Y" pattern
    .replace(/(\baged\s+\d+)\s*[—–]\s*(\d+)/gi, '$1 to $2')
    // "X — Y years" pattern
    .replace(/(\d+)\s*[—–]\s*(\d+\s+(?:years|yrs|year|yr)\b)/gi, '$1 to $2')
    // Month range: "July — August" or "Jul — Aug"
    .replace(new RegExp('(' + months + ')\\s*[—–]\\s*(' + months + ')', 'g'), '$1 to $2')
    // Day-month range: "5 — 6 Sep"
    .replace(new RegExp('(\\d+)\\s*[—–]\\s*(\\d+\\s+(?:' + months + '))', 'g'), '$1 to $2')
    // Everything else: em dash → colon
    .replace(/ [—–] /g, ': ')
    .replace(/[—–]/g, ': ')
    .replace(/ -- /g, '. ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Remove trailing junk left after truncation: "&", "|", "and", "or", "," etc.
function trimTrailing(s) {
  return s
    .replace(/[\s,;:&|]+$/g, '')
    .replace(/\s+(and|or|for|with|in|of|the|a|an)$/i, '')
    .replace(/[\s,;:&|]+$/g, '')
    .trim();
}

// Truncate a title at a semantic boundary (|, ,, then space) to fit <= max chars.
// Returns null if no truncation lands in [min, max].
function fitTitle(t, min, max) {
  if (t.length <= max && t.length >= min) return t;
  if (t.length < min) return null;
  const candidates = [];
  // Try cutting at each " | " occurrence
  let idx = t.length;
  while ((idx = t.lastIndexOf(' | ', idx - 1)) >= 0) {
    const c = t.slice(0, idx).trim();
    if (c.length >= min && c.length <= max) candidates.push(c);
  }
  idx = t.length;
  while ((idx = t.lastIndexOf(', ', idx - 1)) >= 0) {
    const c = t.slice(0, idx).trim();
    if (c.length >= min && c.length <= max) candidates.push(c);
  }
  // Word boundary trim to <= max
  if (t.length > max) {
    let c = t.slice(0, max);
    const lastSpace = c.lastIndexOf(' ');
    if (lastSpace > min) {
      c = c.slice(0, lastSpace).trim();
      if (c.length >= min) candidates.push(c);
    }
  }
  // Pick the longest candidate <= max that's >= min
  candidates.sort((a, b) => b.length - a.length);
  return candidates[0] ?? null;
}

// Truncate description at first sentence boundary in [min, max]; if none, cut at
// last space before max and add a period if we didn't cut at a natural end.
// Strips any trailing punctuation before appending a period, so we don't get
// awkward "Union Bank,." endings.
function fitDescription(d, min, max) {
  if (d.length >= min && d.length <= max) return d;
  if (d.length < min) return null;
  // Sentence boundary
  const sentenceRe = /[.!?](?:\s|$)/g;
  let m;
  const cuts = [];
  while ((m = sentenceRe.exec(d)) !== null) {
    const end = m.index + 1; // include the punctuation
    if (end >= min && end <= max) cuts.push(d.slice(0, end).trim());
  }
  if (cuts.length > 0) {
    cuts.sort((a, b) => b.length - a.length);
    return cuts[0];
  }
  // Fall back to word boundary + period
  let c = d.slice(0, max - 1);
  const lastSpace = c.lastIndexOf(' ');
  if (lastSpace > min - 1) c = c.slice(0, lastSpace).trim();
  // Strip any trailing punctuation (commas, semicolons, colons, ampersand,
  // conjunctions) before appending our period.
  c = c
    .replace(/[\s,;:&|]+$/g, '')
    .replace(/\s+(and|or|for|with|in|of|the|a|an)$/i, '')
    .replace(/[\s,;:&|]+$/g, '');
  if (!/[.!?]$/.test(c)) c += '.';
  if (c.length >= min && c.length <= max) return c;
  return null;
}

const { data: jobs, error } = await supabase
  .from('jobs')
  .select('slug, title, description')
  .eq('is_active', true);
if (error) { console.error(error); process.exit(1); }

let autoOk = 0, needsReview = 0, alreadyClean = 0;
const rowsOut = [];

for (const j of jobs) {
  const originalT = j.title ?? '';
  const originalD = j.description ?? '';
  const originalTLen = originalT.length;
  const originalDLen = originalD.length;

  const originalTClean = !(/[—–]/.test(originalT) || originalTLen < TITLE_MIN || originalTLen > TITLE_MAX);
  const originalDClean = !(/[—–]/.test(originalD) || originalDLen < DESC_MIN || originalDLen > DESC_MAX);

  let newT = stripDashes(originalT);
  let newD = stripDashes(originalD);
  // If dash-stripped version already fits, we're done for that field
  if (newT.length < TITLE_MIN || newT.length > TITLE_MAX) {
    const fitted = fitTitle(newT, TITLE_MIN, TITLE_MAX);
    if (fitted) newT = fitted;
  }
  newT = trimTrailing(newT);
  if (newD.length < DESC_MIN || newD.length > DESC_MAX) {
    const fitted = fitDescription(newD, DESC_MIN, DESC_MAX);
    if (fitted) newD = fitted;
  }
  newD = trimTrailing(newD);

  const tOk = newT.length >= TITLE_MIN && newT.length <= TITLE_MAX && !/[—–]/.test(newT);
  const dOk = newD.length >= DESC_MIN && newD.length <= DESC_MAX && !/[—–]/.test(newD);

  const status = (originalTClean && originalDClean) ? 'ALREADY_CLEAN' : (tOk && dOk ? 'AUTO_OK' : 'NEEDS_REVIEW');
  if (status === 'AUTO_OK') autoOk++;
  else if (status === 'ALREADY_CLEAN') alreadyClean++;
  else needsReview++;

  rowsOut.push({ slug: j.slug, status, originalT, originalTLen, newT, newTLen: newT.length, tOk, originalD, originalDLen, newD, newDLen: newD.length, dOk });
}

console.log('=== DRY RUN: JOBS META FIX ===');
console.log('Total jobs:', jobs.length);
console.log('ALREADY_CLEAN:', alreadyClean);
console.log('AUTO_OK (safe to bulk-fix):', autoOk);
console.log('NEEDS_REVIEW (fixed but out of range):', needsReview);
console.log('');

console.log('--- AUTO_OK ROWS ---');
for (const r of rowsOut.filter((x) => x.status === 'AUTO_OK')) {
  console.log('\n[' + r.slug + ']');
  console.log('  Title  BEFORE (' + r.originalTLen + '): ' + r.originalT);
  console.log('  Title  AFTER  (' + r.newTLen + '): ' + r.newT);
  console.log('  Desc   BEFORE (' + r.originalDLen + '): ' + r.originalD.slice(0, 90) + (r.originalDLen > 90 ? '...' : ''));
  console.log('  Desc   AFTER  (' + r.newDLen + '): ' + r.newD);
}

console.log('\n\n--- NEEDS_REVIEW ROWS ---');
for (const r of rowsOut.filter((x) => x.status === 'NEEDS_REVIEW')) {
  console.log('\n[' + r.slug + ']');
  console.log('  Title tOk=' + r.tOk + ' (' + r.newTLen + '): ' + r.newT);
  console.log('  Desc  dOk=' + r.dOk + ' (' + r.newDLen + '): ' + r.newD.slice(0, 120) + (r.newDLen > 120 ? '...' : ''));
}
