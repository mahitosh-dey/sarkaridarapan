import type { FAQItem } from "./faq-data";

// Extracts FAQ items from markdown content that follows the site convention:
//   ## Frequently asked questions
//
//   **Question text?**
//   Answer paragraph.
//
//   **Next question?**
//   Answer paragraph.
//
// The FAQ block is identified by an H2 whose text starts with "frequently asked",
// "faq", or "faqs" (case-insensitive). Parsing stops at the next H2 or end of content.
export function parseFaqsFromMarkdown(markdown: string | null | undefined): FAQItem[] {
  if (!markdown) return [];

  const lines = markdown.split(/\r?\n/);
  let inFaqSection = false;
  const faqLines: string[] = [];

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

  const faqs: FAQItem[] = [];
  let currentQuestion: string | null = null;
  let currentAnswerLines: string[] = [];

  const flush = () => {
    if (currentQuestion !== null) {
      const answer = currentAnswerLines.join(" ").replace(/\s+/g, " ").trim();
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

export function buildFaqPageSchema(faqs: FAQItem[]) {
  if (faqs.length === 0) return null;
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
