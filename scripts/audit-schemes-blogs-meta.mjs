import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xtjbijvxxeoopcqxycpz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY'
);

const TITLE_MIN = 50, TITLE_MAX = 65;
const DESC_MIN = 150, DESC_MAX = 160;
const hasDash = (s) => s && (s.includes('—') || s.includes('–') || s.includes(' -- '));

async function auditTable(tableName) {
  const { data: rows, error } = await supabase
    .from(tableName)
    .select('slug, title, description')
    .eq('is_active', true);
  if (error) { console.error(tableName, error); return; }

  let clean = 0;
  const buckets = { titleTooShort: 0, titleTooLong: 0, titleHasDash: 0, descMissing: 0, descTooShort: 0, descTooLong: 0, descHasDash: 0 };

  for (const r of rows) {
    const tLen = r.title?.length ?? 0;
    const dLen = r.description?.length ?? 0;
    let bad = false;
    if (tLen < TITLE_MIN) { buckets.titleTooShort++; bad = true; }
    if (tLen > TITLE_MAX) { buckets.titleTooLong++; bad = true; }
    if (hasDash(r.title)) { buckets.titleHasDash++; bad = true; }
    if (!r.description) { buckets.descMissing++; bad = true; }
    else {
      if (dLen < DESC_MIN) { buckets.descTooShort++; bad = true; }
      if (dLen > DESC_MAX) { buckets.descTooLong++; bad = true; }
      if (hasDash(r.description)) { buckets.descHasDash++; bad = true; }
    }
    if (!bad) clean++;
  }

  console.log('=== ' + tableName.toUpperCase() + ' ===');
  console.log('Total active:', rows.length);
  console.log('Clean:', clean);
  console.log('Violating:', rows.length - clean);
  for (const [k, v] of Object.entries(buckets)) {
    if (v > 0) console.log('  ' + k + ':', v);
  }
  console.log('');
}

await auditTable('schemes');
await auditTable('blog_posts');
