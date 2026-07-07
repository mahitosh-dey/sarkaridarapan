import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xtjbijvxxeoopcqxycpz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY'
);

const { data: jobs, error } = await supabase
  .from('jobs')
  .select('slug, title, description, content, is_active')
  .eq('is_active', true);

if (error) { console.error(error); process.exit(1); }

const TITLE_MIN = 50;
const TITLE_MAX = 65;
const DESC_MIN = 150;
const DESC_MAX = 160;

const hasEmDash = (s) => s && (s.includes('—') || s.includes('–') || s.includes(' -- '));

const findings = {
  titleTooShort: [],
  titleTooLong: [],
  titleHasEmDash: [],
  descMissing: [],
  descTooShort: [],
  descTooLong: [],
  descHasEmDash: [],
  contentHasEmDash: [],
  clean: [],
};

for (const j of jobs) {
  const tLen = j.title?.length ?? 0;
  const dLen = j.description?.length ?? 0;
  let violated = false;

  if (tLen < TITLE_MIN) { findings.titleTooShort.push({ slug: j.slug, title: j.title, len: tLen }); violated = true; }
  if (tLen > TITLE_MAX) { findings.titleTooLong.push({ slug: j.slug, title: j.title, len: tLen }); violated = true; }
  if (hasEmDash(j.title)) { findings.titleHasEmDash.push({ slug: j.slug, title: j.title }); violated = true; }

  if (!j.description) { findings.descMissing.push({ slug: j.slug }); violated = true; }
  else {
    if (dLen < DESC_MIN) { findings.descTooShort.push({ slug: j.slug, description: j.description, len: dLen }); violated = true; }
    if (dLen > DESC_MAX) { findings.descTooLong.push({ slug: j.slug, description: j.description, len: dLen }); violated = true; }
    if (hasEmDash(j.description)) { findings.descHasEmDash.push({ slug: j.slug, description: j.description }); violated = true; }
  }

  if (hasEmDash(j.content)) { findings.contentHasEmDash.push({ slug: j.slug }); violated = true; }

  if (!violated) findings.clean.push({ slug: j.slug });
}

const total = jobs.length;
const violatingCount = total - findings.clean.length;

console.log('=== JOBS META AUDIT ===');
console.log('Total active jobs:', total);
console.log('Clean (no violations):', findings.clean.length);
console.log('Violating one or more rules:', violatingCount);
console.log('');

const section = (name, arr, showField) => {
  console.log('--- ' + name + ' (' + arr.length + ') ---');
  for (const r of arr.slice(0, 100)) {
    const extra = showField ? '  ' + JSON.stringify(showField(r)) : '';
    console.log('  ' + r.slug + extra);
  }
  console.log('');
};

section('Title too short (<' + TITLE_MIN + ' chars)', findings.titleTooShort, (r) => ({ len: r.len, title: r.title }));
section('Title too long (>' + TITLE_MAX + ' chars)', findings.titleTooLong, (r) => ({ len: r.len, title: r.title }));
section('Title has em/en dash', findings.titleHasEmDash, (r) => ({ title: r.title }));
section('Description missing', findings.descMissing, null);
section('Description too short (<' + DESC_MIN + ' chars)', findings.descTooShort, (r) => ({ len: r.len }));
section('Description too long (>' + DESC_MAX + ' chars)', findings.descTooLong, (r) => ({ len: r.len }));
section('Description has em/en dash', findings.descHasEmDash, null);
section('Content has em/en dash', findings.contentHasEmDash, null);

console.log('=== SUMMARY BY VIOLATION TYPE ===');
console.log('title_too_short:', findings.titleTooShort.length);
console.log('title_too_long:', findings.titleTooLong.length);
console.log('title_has_em_dash:', findings.titleHasEmDash.length);
console.log('desc_missing:', findings.descMissing.length);
console.log('desc_too_short:', findings.descTooShort.length);
console.log('desc_too_long:', findings.descTooLong.length);
console.log('desc_has_em_dash:', findings.descHasEmDash.length);
console.log('content_has_em_dash:', findings.contentHasEmDash.length);
