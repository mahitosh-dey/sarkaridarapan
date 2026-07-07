import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xtjbijvxxeoopcqxycpz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY'
);

console.log('=== SCHEMES ===');
const { data: schemes } = await supabase
  .from('schemes')
  .select('slug, title')
  .or('slug.ilike.%pmsby%,slug.ilike.%suraksha-bima%,title.ilike.%PMSBY%,title.ilike.%Pradhan Mantri Suraksha Bima%');
for (const r of schemes ?? []) console.log('  scheme:', r.slug, '|', r.title);

console.log('\n=== BLOGS ===');
const { data: blogs } = await supabase
  .from('blog_posts')
  .select('slug, title')
  .or('slug.ilike.%pmsby%,slug.ilike.%suraksha-bima%,title.ilike.%PMSBY%,title.ilike.%Pradhan Mantri Suraksha Bima%');
for (const r of blogs ?? []) console.log('  blog:', r.slug, '|', r.title);
