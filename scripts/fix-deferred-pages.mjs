// Fixes the 20 pages that were deferred by the batch meta cleanup.
// Each row has a hand-crafted new title + description that respects the
// 50-65 / 150-160 char rules and has zero em/en dashes.

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xtjbijvxxeoopcqxycpz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY'
);

const TITLE_MIN = 50, TITLE_MAX = 65;
const DESC_MIN = 150, DESC_MAX = 160;

const jobs = [
  {
    slug: 'wb-gram-panchayat-recruitment-2026',
    title: 'WB Gram Panchayat Recruitment 2026: 11,000 Vacancies',
    description: 'West Bengal Gram Panchayat Recruitment 2026: 11,000 vacancies for DEO, Executive Assistant, Nirman Sahayak, and GP Karmee posts. Apply online at wbprms.in.',
  },
  {
    slug: 'ssc-chsl-2026',
    title: 'SSC CHSL 2026 Notification: LDC, JSA, Postal Asst, DEO',
    description: 'SSC CHSL 2026 notification released for 3500+ vacancies covering LDC, JSA, Postal Assistant, Sorting Assistant, and DEO. 12th pass aged 18 to 27 eligible.',
  },
  {
    slug: 'upsc-cds-ii-2026',
    title: 'UPSC CDS II 2026: Combined Defence Services Exam Notice',
    description: 'UPSC CDS II 2026 notification for 459 vacancies across IMA, Indian Naval Academy, Air Force Academy, and OTA. No application fee. Apply before June 17.',
  },
  {
    slug: 'rpsc-rasrts-2026',
    title: 'RPSC RAS/RTS 2026: Rajasthan State Civil Services Exam',
    description: 'RPSC RAS/RTS 2026 notification for approximately 905 Group A and B Gazetted posts across Rajasthan state services. Prelims expected September to October.',
  },
  {
    slug: 'appsc-group-2-2026',
    title: 'APPSC Group 2 2026: Andhra Pradesh State Services Recruit',
    description: 'APPSC Group 2 2026 recruitment for 783 Andhra Pradesh state services posts including ASO, RDO, Mandal Revenue Inspector. Graduates aged 18 to 42 eligible.',
  },
  {
    slug: 'hpsc-hcs-2026',
    title: 'HPSC HCS 2026: Haryana Civil Services Recruitment Notice',
    description: 'HPSC HCS 2026 recruitment for 156 posts including SDM, DSP, ETO, BDPO, and Allied Services. Graduate candidates aged 21 to 40 with Haryana domicile only.',
  },
  {
    slug: 'apsc-cce-2026',
    title: 'APSC CCE 2026: Assam Civil Services Examination Notice',
    description: 'APSC CCE 2026 for 277 Assam state services posts including ACS, APS, and Finance Service. Graduate candidates aged 21 to 38 with Assam domicile eligible.',
  },
  {
    slug: 'ppsc-pcs-2026',
    title: 'PPSC PCS 2026: Punjab Civil Services Recruitment Details',
    description: 'PPSC PCS 2026 recruitment for 186 Punjab Group A posts including SDM, DSP, DDPO, ETO, and BDO. Graduates aged 21 to 37 with Punjab domicile can apply.',
  },
  {
    slug: 'opsc-ocs-2026',
    title: 'OPSC OCS 2026: Odisha Civil Services Recruitment Notice',
    description: 'OPSC OCS 2026 for 330 Odisha state services posts including OAS Group A and Odisha Police Service. Graduate candidates aged 21 to 38 eligible to apply.',
  },
  {
    slug: 'upsc-ese-2026',
    title: 'UPSC ESE 2026: Engineering Services Examination Notice',
    description: 'UPSC ESE 2026 for 529 Class I engineering posts across Civil, Mechanical, Electrical, and Electronics & Telecom streams. Engineering grads 21 to 30 eligible.',
  },
];

const schemes = [
  {
    slug: 'ladli-behna-yojana-mp-2026',
    title: 'Ladli Behna Yojana MP 2026: ₹1,500/Month for Eligible Women',
    description: 'Ladli Behna Yojana MP 2026 pays ₹1,500 every month directly to eligible married women aged 21 to 60 years. Over 1.26 crore beneficiaries currently enrolled.',
  },
  {
    slug: 'pm-surya-ghar-muft-bijli-yojana-rooftop-solar-2026',
    title: 'PM Surya Ghar Muft Bijli Yojana 2026: 300 Units Free',
    description: 'PM Surya Ghar Muft Bijli Yojana 2026: get up to ₹78,000 subsidy on rooftop solar and 300 units of free electricity every month. Apply at pmsuryaghar.gov.in.',
  },
];

const blogs = [
  {
    slug: 'lic-aao-2026-preparation-guide',
    title: 'LIC AAO 2026: Complete Preparation Guide for Generalist',
    description: 'Complete LIC AAO 2026 preparation guide covering syllabus, exam pattern, Insurance Awareness strategy, and a week-by-week study plan for the Generalist post.',
  },
  {
    slug: 'punjab-pcs-sdm-recruitment-2026',
    title: 'Punjab PCS 2026: How to Become an SDM in Punjab State',
    description: 'Everything about Punjab PCS 2026: how SDM posts are filled, eligibility, selection process, exam pattern, salary breakdown, and life as a PCS officer.',
  },
  {
    slug: 'upsc-vs-ssc-which-exam-to-choose-2026',
    title: 'UPSC vs SSC 2026: Which Exam is Right for You? Guide',
    description: 'Choose between UPSC and SSC for your govt job goals. This 2026 guide compares prep time, difficulty, salary, job profile, and best-fit candidate profile.',
  },
  {
    slug: 'how-to-crack-upsc-cse-2026-first-attempt-strategy-guide',
    title: 'UPSC CSE 2026: First-Attempt Strategy Guide for Aspirants',
    description: 'UPSC CSE 2026: 933 vacancies, Prelims May 24 completed, Mains on August 21. Complete first-attempt strategy for syllabus, optional, and answer writing.',
  },
  {
    slug: 'top-10-government-jobs-after-12th-india-2026',
    title: 'Top 10 Government Jobs After 12th in India: 2026 Guide',
    description: 'Top 10 sarkari naukri options for 12th pass candidates in India 2026 with salary, age limit, exam details, and how to apply. Best govt jobs guide for you.',
  },
  {
    slug: 'agniveer-army-cee-result-2026-how-to-check',
    title: 'Agniveer Army CEE Result 2026: How to Check Online',
    description: 'Step-by-step guide to check Agniveer Army CEE Result 2026 at joinindianarmy.nic.in. Result slip, category-wise qualification, and Seva Nidhi details covered.',
  },
  {
    slug: 'wb-gram-panchayat-recruitment-2026-complete-guide',
    title: 'WB Gram Panchayat 2026: Complete Guide to 11,000 Posts',
    description: 'Complete guide to WB Gram Panchayat Recruitment 2026: post-wise eligibility, selection process, salary breakdown, and how to apply at wbprms.in portal.',
  },
  {
    slug: 'ssc-cgl-tier-1-vs-tier-2-strategy',
    title: 'SSC CGL Tier 1 vs Tier 2: 2026 Prep Strategy for Each',
    description: 'Most SSC CGL aspirants prep the same for both tiers. Tier 1 sets the cutoff. Tier 2 sets your rank. Here is how to adjust preparation after clearing Tier 1.',
  },
];

let written = 0, failed = 0;
const failures = [];

async function updateOne(table, row) {
  const { slug, title, description } = row;
  const errors = [];
  if (title.length < TITLE_MIN || title.length > TITLE_MAX) errors.push('title length ' + title.length + ' out of ' + TITLE_MIN + '-' + TITLE_MAX);
  if (description.length < DESC_MIN || description.length > DESC_MAX) errors.push('desc length ' + description.length + ' out of ' + DESC_MIN + '-' + DESC_MAX);
  if (/[—–]/.test(title)) errors.push('title has em/en dash');
  if (/[—–]/.test(description)) errors.push('desc has em/en dash');
  if (errors.length > 0) {
    console.error('SKIP  ' + slug + ' | ' + errors.join('; '));
    console.error('      title (' + title.length + '): ' + title);
    console.error('      desc  (' + description.length + '): ' + description);
    failures.push({ slug, errors, title, description });
    failed++;
    return;
  }
  const { error } = await supabase
    .from(table)
    .update({ title, description, updated_at: new Date().toISOString() })
    .eq('slug', slug);
  if (error) {
    console.error('FAIL  ' + slug + ':', error.message);
    failures.push({ slug, error: error.message });
    failed++;
  } else {
    console.log('OK    ' + slug + ' | t=' + title.length + ' d=' + description.length);
    written++;
  }
}

console.log('=== JOBS ===');
for (const row of jobs) await updateOne('jobs', row);
console.log('\n=== SCHEMES ===');
for (const row of schemes) await updateOne('schemes', row);
console.log('\n=== BLOG_POSTS ===');
for (const row of blogs) await updateOne('blog_posts', row);

console.log('\n=== SUMMARY ===');
console.log('Written:', written);
console.log('Failed:', failed);
if (failures.length > 0) {
  console.log('\nRows that need re-drafting:');
  for (const f of failures) console.log(' -', f.slug, ':', f.errors ?? f.error);
}
