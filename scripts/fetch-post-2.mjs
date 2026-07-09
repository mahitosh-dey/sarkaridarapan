import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xtjbijvxxeoopcqxycpz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY'
);

const { data, error } = await supabase
  .from('blog_posts')
  .select('slug, title, content')
  .eq('slug', 'upsc-cse-2026-notification-dates-eligibility-apply-online')
  .single();

if (error) {
  console.error('Error:', error);
  process.exit(1);
}

console.log('TITLE:', data.title);
console.log('META:', data.meta_description);
console.log('---CONTENT START---');
console.log(data.content);
console.log('---CONTENT END---');
