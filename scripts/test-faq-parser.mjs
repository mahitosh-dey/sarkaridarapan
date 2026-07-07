import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xtjbijvxxeoopcqxycpz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY'
);

// Inline copy of the parser for testing (avoids TS import friction).
function parseFaqsFromMarkdown(markdown) {
  if (!markdown) return [];
  const lines = markdown.split(/\r?\n/);
  let inFaqSection = false;
  const faqLines = [];
  for (const line of lines) {
    const h2Match = /^##\s+(.+?)\s*$/.exec(line);
    if (h2Match) {
      const heading = h2Match[1].toLowerCase();
      if (/^(frequently asked|faqs?\b)/.test(heading)) {
        inFaqSection = true;
        continue;
      }
      if (inFaqSection) break;
    }
    if (inFaqSection) faqLines.push(line);
  }
  if (faqLines.length === 0) return [];
  const faqs = [];
  let currentQuestion = null;
  let currentAnswerLines = [];
  const flush = () => {
    if (currentQuestion !== null) {
      const answer = currentAnswerLines.join(' ').replace(/\s+/g, ' ').trim();
      if (answer.length > 0) faqs.push({ question: currentQuestion, answer });
    }
    currentQuestion = null;
    currentAnswerLines = [];
  };
  for (const raw of faqLines) {
    const line = raw.trim();
    const qMatch = /^\*\*(.+?)\*\*\s*$/.exec(line);
    if (qMatch) {
      flush();
      currentQuestion = qMatch[1].trim();
      continue;
    }
    if (currentQuestion !== null && line.length > 0) {
      currentAnswerLines.push(line);
    }
  }
  flush();
  return faqs;
}

const { data, error } = await supabase
  .from('entrance_exams')
  .select('content')
  .eq('slug', 'mh-set-2026')
  .single();

if (error) { console.error(error); process.exit(1); }

const faqs = parseFaqsFromMarkdown(data.content);
console.log('Parsed', faqs.length, 'FAQs from mh-set-2026:\n');
for (const f of faqs) {
  console.log('Q:', f.question);
  console.log('A:', f.answer.slice(0, 120) + (f.answer.length > 120 ? '...' : ''));
  console.log('');
}
