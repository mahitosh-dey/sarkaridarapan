const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabase = createClient(
  'https://xtjbijvxxeoopcqxycpz.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false, autoRefreshToken: false } }
);

const PHRASES = [
  'to be announced',
  'will be updated',
  'certain date',
  'may be eligible',
  'will be announced by'
];

async function main() {
  // Fetch all jobs with content
  const { data: jobs, error } = await supabase
    .from('jobs')
    .select('id, slug, title, content, official_link, quality_flag, is_active');

  if (error) {
    console.error('Query error:', error.message);
    process.exit(1);
  }

  console.log('Total jobs fetched:', jobs.length);

  // Find jobs containing vague phrases in content
  const flagged = [];
  for (const job of jobs) {
    if (!job.content) continue;
    const contentLower = job.content.toLowerCase();
    const matched = PHRASES.filter(p => contentLower.includes(p.toLowerCase()));
    if (matched.length > 0) {
      flagged.push({ ...job, matched });
    }
  }

  console.log('Jobs with vague phrases found:', flagged.length);

  if (flagged.length === 0) {
    console.log('No records found containing those phrases. All clean!');
    return;
  }

  // Update each flagged job: is_active=false, quality_flag populated
  let updated = 0;
  for (const job of flagged) {
    const existingFlags = Array.isArray(job.quality_flag) ? job.quality_flag : [];
    const newFlags = job.matched.map(p => `vague_phrase: '${p}'`);
    const mergedFlags = [...new Set([...existingFlags, ...newFlags])];

    const { error: updateErr } = await supabase
      .from('jobs')
      .update({ is_active: false, quality_flag: mergedFlags })
      .eq('id', job.id);

    if (updateErr) {
      console.error('Update failed for:', job.title, '-', updateErr.message);
    } else {
      updated++;
    }
  }

  console.log('Records updated (is_active=false, quality_flag set):', updated);

  // Write CSV for review
  const csvLines = ['Title,Slug,Official Link,Matched Phrases'];
  for (const j of flagged) {
    const title = `"${(j.title || '').replace(/"/g, '""')}"`;
    const slug = j.slug || '';
    const link = j.official_link || '';
    const phrases = `"${j.matched.join(', ')}"`;
    csvLines.push(`${title},${slug},${link},${phrases}`);
  }

  fs.writeFileSync('flagged-jobs-review.csv', csvLines.join('\n'));
  console.log('\nCSV saved: flagged-jobs-review.csv');
  console.log('\n--- Flagged Jobs ---');
  flagged.forEach(j => console.log(`  - ${j.title} | Phrases: ${j.matched.join(', ')}`));
}

main();
