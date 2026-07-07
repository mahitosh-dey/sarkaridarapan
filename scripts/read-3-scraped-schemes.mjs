import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xtjbijvxxeoopcqxycpz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY'
);

const slugs = ['atal-pension-yojana-apy-2026', 'pradhan-mantri-jan-dhan-yojana-pmjdy-2026', 'pm-kisan-samman-nidhi-pm-kisan-2026'];

for (const slug of slugs) {
  const { data, error } = await supabase
    .from('schemes')
    .select('slug, title, description, content')
    .eq('slug', slug)
    .single();
  if (error) { console.error(slug, error); continue; }
  console.log('\n=== ' + slug + ' ===');
  console.log('TITLE (' + data.title.length + '):', data.title);
  console.log('DESC (' + data.description.length + '):', data.description);
  console.log('CONTENT LEN:', data.content?.length ?? 0, 'chars,', data.content?.split(/\s+/).length ?? 0, 'words');
  console.log('CONTENT FIRST 800 CHARS:', (data.content ?? '').slice(0, 800));
}
