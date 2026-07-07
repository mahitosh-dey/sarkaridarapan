// Executes meta cleanup on any content table. Same logic as
// exec-fix-jobs-meta.mjs but takes the table name as a CLI arg so we can
// run it for schemes and blog_posts without duplicating the file.
//
// Usage:  node scripts/exec-fix-content-meta.mjs schemes
//         node scripts/exec-fix-content-meta.mjs blog_posts

import { createClient } from '@supabase/supabase-js';

const table = process.argv[2];
if (!table || !['schemes', 'blog_posts'].includes(table)) {
  console.error('Usage: node scripts/exec-fix-content-meta.mjs <schemes|blog_posts>');
  process.exit(1);
}

const supabase = createClient(
  'https://xtjbijvxxeoopcqxycpz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY'
);

const TITLE_MIN = 50, TITLE_MAX = 65;
const DESC_MIN = 150, DESC_MAX = 160;

function stripDashes(s) {
  if (!s) return s;
  const months = 'Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|May|June|July|August|September|October|November|December';
  return s
    .replace(/(₹[\d,.]+(?:\s*(?:lakh|crore|L|Cr))?)\s*[—–]\s*(₹[\d,.]+(?:\s*(?:lakh|crore|L|Cr))?)/gi, '$1 to $2')
    .replace(/(\baged\s+\d+)\s*[—–]\s*(\d+)/gi, '$1 to $2')
    .replace(/(\d+)\s*[—–]\s*(\d+\s+(?:years|yrs|year|yr)\b)/gi, '$1 to $2')
    .replace(new RegExp('(' + months + ')\\s*[—–]\\s*(' + months + ')', 'g'), '$1 to $2')
    .replace(new RegExp('(\\d+)\\s*[—–]\\s*(\\d+\\s+(?:' + months + '))', 'g'), '$1 to $2')
    .replace(/ [—–] /g, ': ')
    .replace(/[—–]/g, ': ')
    .replace(/ -- /g, '. ')
    .replace(/\s+/g, ' ')
    .trim();
}

function trimTrailing(s) {
  return s
    .replace(/[\s,;:&|]+$/g, '')
    .replace(/\s+(and|or|for|with|in|of|the|a|an)$/i, '')
    .replace(/[\s,;:&|]+$/g, '')
    .trim();
}

function fitTitle(t, min, max) {
  if (t.length <= max && t.length >= min) return t;
  if (t.length < min) return null;
  const candidates = [];
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
  if (t.length > max) {
    let c = t.slice(0, max);
    const lastSpace = c.lastIndexOf(' ');
    if (lastSpace > min) {
      c = c.slice(0, lastSpace).trim();
      if (c.length >= min) candidates.push(c);
    }
  }
  candidates.sort((a, b) => b.length - a.length);
  return candidates[0] ?? null;
}

function fitDescription(d, min, max) {
  if (d.length >= min && d.length <= max) return d;
  if (d.length < min) return null;
  const sentenceRe = /[.!?](?:\s|$)/g;
  let m;
  const cuts = [];
  while ((m = sentenceRe.exec(d)) !== null) {
    const end = m.index + 1;
    if (end >= min && end <= max) cuts.push(d.slice(0, end).trim());
  }
  if (cuts.length > 0) {
    cuts.sort((a, b) => b.length - a.length);
    return cuts[0];
  }
  let c = d.slice(0, max - 1);
  const lastSpace = c.lastIndexOf(' ');
  if (lastSpace > min - 1) c = c.slice(0, lastSpace).trim();
  c = c
    .replace(/[\s,;:&|]+$/g, '')
    .replace(/\s+(and|or|for|with|in|of|the|a|an)$/i, '')
    .replace(/[\s,;:&|]+$/g, '');
  if (!/[.!?]$/.test(c)) c += '.';
  if (c.length >= min && c.length <= max) return c;
  return null;
}

const { data: rows, error } = await supabase
  .from(table)
  .select('slug, title, description')
  .eq('is_active', true);
if (error) { console.error(error); process.exit(1); }

const autoOk = [];
const needsReview = [];

for (const r of rows) {
  const originalT = r.title ?? '';
  const originalD = r.description ?? '';
  let newT = stripDashes(originalT);
  let newD = stripDashes(originalD);

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

  const alreadyClean = originalT === newT && originalD === newD;
  if (alreadyClean) continue; // don't touch already-clean rows

  if (tOk && dOk) autoOk.push({ slug: r.slug, newT, newD });
  else needsReview.push({ slug: r.slug, newT, newTLen: newT.length, tOk, newD, newDLen: newD.length, dOk });
}

console.log('=== ' + table.toUpperCase() + ' EXECUTION PLAN ===');
console.log('Total active rows:', rows.length);
console.log('Rows to write (AUTO_OK):', autoOk.length);
console.log('Rows deferred (NEEDS_REVIEW):', needsReview.length);
console.log('Already clean (skipped):', rows.length - autoOk.length - needsReview.length);
console.log('');

let written = 0, failed = 0;
for (const row of autoOk) {
  if (row.newT.length < TITLE_MIN || row.newT.length > TITLE_MAX) { console.error('SKIP ' + row.slug + ' — title length out of range'); failed++; continue; }
  if (row.newD.length < DESC_MIN || row.newD.length > DESC_MAX) { console.error('SKIP ' + row.slug + ' — description length out of range'); failed++; continue; }
  if (/[—–]/.test(row.newT) || /[—–]/.test(row.newD)) { console.error('SKIP ' + row.slug + ' — em/en dash at write time'); failed++; continue; }

  const { error: uErr } = await supabase
    .from(table)
    .update({ title: row.newT, description: row.newD, updated_at: new Date().toISOString() })
    .eq('slug', row.slug);

  if (uErr) { console.error('FAIL ' + row.slug + ':', uErr.message); failed++; }
  else { console.log('OK  ' + row.slug + ' | t=' + row.newT.length + ' d=' + row.newD.length); written++; }
}

console.log('\n=== ' + table.toUpperCase() + ' SUMMARY ===');
console.log('Written:', written);
console.log('Failed:', failed);
console.log('Deferred (NEEDS_REVIEW):', needsReview.length);

if (needsReview.length > 0) {
  console.log('\n=== NEEDS_REVIEW ===');
  for (const r of needsReview) {
    console.log('\n[' + r.slug + ']');
    console.log('  Title (' + r.newTLen + ', tOk=' + r.tOk + '): ' + r.newT);
    console.log('  Desc  (' + r.newDLen + ', dOk=' + r.dOk + '): ' + r.newD.slice(0, 100) + (r.newDLen > 100 ? '...' : ''));
  }
}
