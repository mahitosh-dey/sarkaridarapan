import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xtjbijvxxeoopcqxycpz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY'
);

const TITLE_MIN = 50, TITLE_MAX = 65;
const DESC_MIN = 150, DESC_MAX = 160;

const updates = [
  {
    slug: 'atal-pension-yojana-apy-2026',
    title: 'Atal Pension Yojana (APY) 2026: ₹1000 to ₹5000 Monthly Pension',
    description: 'Atal Pension Yojana 2026 offers guaranteed monthly pension from ₹1,000 to ₹5,000 after age 60. Any Indian aged 18-40 with a savings account can enrol.',
  },
  {
    slug: 'pradhan-mantri-jan-dhan-yojana-pmjdy-2026',
    title: 'PMJDY 2026: Pradhan Mantri Jan Dhan Yojana Account Guide',
    description: 'PMJDY 2026 gives every Indian a zero-balance savings account with RuPay debit card, ₹2 lakh accident cover, and ₹10,000 overdraft. 58 crore accounts opened.',
  },
  {
    slug: 'pm-kisan-samman-nidhi-pm-kisan-2026',
    title: 'PM Kisan Samman Nidhi 2026: ₹6,000 Annual Support to Farmers',
    description: 'PM Kisan Samman Nidhi 2026 pays ₹6,000 per year to every eligible farmer family in three instalments of ₹2,000. 22nd instalment released 13 March 2026.',
  },
];

let written = 0, failed = 0;

for (const u of updates) {
  console.log('\n=== ' + u.slug + ' ===');
  console.log('Title (' + u.title.length + '):', u.title);
  console.log('Description (' + u.description.length + '):', u.description);

  if (u.title.length < TITLE_MIN || u.title.length > TITLE_MAX) {
    console.error('FAIL: title out of range');
    failed++;
    continue;
  }
  if (u.description.length < DESC_MIN || u.description.length > DESC_MAX) {
    console.error('FAIL: description out of range');
    failed++;
    continue;
  }
  if (/[—–]/.test(u.title) || /[—–]/.test(u.description)) {
    console.error('FAIL: em/en dash detected');
    failed++;
    continue;
  }

  const { error } = await supabase
    .from('schemes')
    .update({ title: u.title, description: u.description, updated_at: new Date().toISOString() })
    .eq('slug', u.slug);

  if (error) {
    console.error('FAIL:', error.message);
    failed++;
  } else {
    console.log('OK');
    written++;
  }
}

console.log('\n=== SUMMARY ===');
console.log('Written:', written);
console.log('Failed:', failed);
