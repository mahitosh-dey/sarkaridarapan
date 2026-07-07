import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xtjbijvxxeoopcqxycpz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY'
);

const jobSlugs = [
  'ssc-chsl-2026', 'upsc-cds-ii-2026', 'upsc-ese-2026', 'apsc-cce-2026',
  'ppsc-pcs-2026', 'opsc-ocs-2026', 'appsc-group-2-2026', 'rpsc-rasrts-2026',
  'hpsc-hcs-2026', 'wb-gram-panchayat-recruitment-2026',
];

const schemeSlugs = [
  'ladli-behna-yojana-mp-2026',
  'pm-surya-ghar-muft-bijli-yojana-rooftop-solar-2026',
];

const blogSlugs = [
  'punjab-pcs-sdm-recruitment-2026',
  'upsc-vs-ssc-which-exam-to-choose-2026',
  'top-10-government-jobs-after-12th-india-2026',
  'ssc-cgl-tier-1-vs-tier-2-strategy',
  'agniveer-army-cee-result-2026-how-to-check',
  'how-to-crack-upsc-cse-2026-first-attempt-strategy-guide',
  'wb-gram-panchayat-recruitment-2026-complete-guide',
  'lic-aao-2026-preparation-guide',
];

async function readRows(table, slugs) {
  console.log('\n=== ' + table.toUpperCase() + ' ===');
  const { data, error } = await supabase.from(table).select('slug, title, description').in('slug', slugs);
  if (error) { console.error(error); return; }
  for (const r of data) {
    console.log('\n[' + r.slug + ']');
    console.log('  Title (' + r.title.length + '):', r.title);
    console.log('  Desc  (' + r.description.length + '):', r.description);
  }
}

await readRows('jobs', jobSlugs);
await readRows('schemes', schemeSlugs);
await readRows('blog_posts', blogSlugs);
