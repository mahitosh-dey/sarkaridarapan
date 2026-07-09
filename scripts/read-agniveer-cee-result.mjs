import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const env = fs.readFileSync('.env.local', 'utf8');
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();

const supabase = createClient(url, key);
const { data, error } = await supabase
  .from('blog_posts')
  .select('*')
  .eq('slug', 'agniveer-army-cee-result-2026-how-to-check')
  .single();

if (error) { console.error(error); process.exit(1); }
console.log('--- TITLE ---');
console.log(data.title, `(${data.title.length} chars)`);
console.log('--- DESCRIPTION ---');
console.log(data.description, `(${data.description?.length || 0} chars)`);
console.log('--- ALL COLUMNS ---', Object.keys(data));
console.log('--- CATEGORY ---', data.category);
console.log('--- is_active ---', data.is_active);
console.log('--- CONTENT WORD COUNT ---');
console.log(data.content.trim().split(/\s+/).length, 'words');
console.log('--- CONTENT ---');
console.log(data.content);
