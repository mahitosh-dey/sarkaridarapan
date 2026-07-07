import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xtjbijvxxeoopcqxycpz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY'
);

const { data, error } = await supabase
  .from('entrance_exams')
  .select('*')
  .ilike('slug', '%mh-set%')
  .limit(3);

if (error) { console.error(error); process.exit(1); }

for (const row of data) {
  console.log('=== ROW ===');
  console.log('SLUG:', row.slug);
  console.log('TITLE:', row.title, `(${row.title?.length ?? 0} chars)`);
  console.log('DESCRIPTION:', row.description, `(${row.description?.length ?? 0} chars)`);
  console.log('CATEGORY:', row.category);
  console.log('IS_ACTIVE:', row.is_active);
  console.log('EXAM_DATE:', row.exam_date);
  console.log('\n--- CONTENT ---\n');
  console.log(row.content);
  console.log('\n');
}
