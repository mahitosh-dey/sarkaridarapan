import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xtjbijvxxeoopcqxycpz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY'
);

const { data, error } = await supabase
  .from('schemes')
  .select('*')
  .eq('slug', 'pm-suraksha-bima-yojana')
  .single();

if (error) { console.error(error); process.exit(1); }

console.log('SLUG:', data.slug);
console.log('TITLE:', data.title, '(' + data.title.length + ' chars)');
console.log('DESCRIPTION:', data.description, '(' + (data.description?.length ?? 0) + ' chars)');
console.log('CATEGORY:', data.category);
console.log('IS_ACTIVE:', data.is_active);
console.log('FAQS (DB field):', data.faqs ? JSON.stringify(data.faqs).slice(0, 200) + '...' : 'null');
console.log('CONTENT LENGTH:', data.content?.length ?? 0, 'chars');
console.log('WORD COUNT:', data.content?.split(/\s+/).length ?? 0);
console.log('\n--- CONTENT ---\n');
console.log(data.content);
