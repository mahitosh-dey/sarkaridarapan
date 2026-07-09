import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xtjbijvxxeoopcqxycpz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY'
);

const { data, error } = await supabase
  .from('blog_posts')
  .select('title, slug, content, description')
  .eq('slug', 'agniveer-2026-army-navy-air-force-complete-guide')
  .single();

if (error) { console.error(error); process.exit(1); }

console.log('TITLE:', data.title);
console.log('DESCRIPTION:', data.description);
console.log('\n--- CONTENT ---\n');
console.log(data.content);
