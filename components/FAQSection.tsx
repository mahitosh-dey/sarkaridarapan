"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is SarkariDarapan?",
    answer:
      "SarkariDarapan is a free online platform that provides verified information about government jobs (Sarkari Naukri), government welfare schemes (Sarkari Yojana), entrance exams, and recruitment updates across India. We source all our information from official government websites and notifications.",
  },
  {
    question: "Is SarkariDarapan a government website?",
    answer:
      "No. SarkariDarapan is an independent informational website. We are not affiliated with, endorsed by, or connected to any government body, ministry, or department. We always provide links to official sources so you can verify everything yourself.",
  },
  {
    question: "How often is the information updated?",
    answer:
      "Our team monitors official government portals daily. New job notifications, scheme updates, and entrance exam announcements are published as soon as they are officially released. We also update existing posts when deadlines are extended or eligibility criteria change.",
  },
  {
    question: "Can I apply for jobs directly through SarkariDarapan?",
    answer:
      "We do not process applications directly. Instead, we provide detailed information about each opportunity along with direct links to the official application portal. This ensures you always apply through the correct, secure government website.",
  },
  {
    question: "Which government exams and jobs do you cover?",
    answer:
      "We cover a wide range of government opportunities including SSC, UPSC, Railway, Banking (IBPS/SBI), Defence, Police, Teaching, State PSC, PSU, and Healthcare recruitments. We also cover major entrance exams like JEE, NEET, CLAT, CAT, and CUET.",
  },
  {
    question: "How do I find government jobs in my state?",
    answer:
      "You can browse state-specific job listings by visiting the 'States' section on our website. We provide dedicated pages for all 28 states and 8 union territories of India, making it easy to find opportunities in your region.",
  },
  {
    question: "Is the information on SarkariDarapan free to access?",
    answer:
      "Yes, all information on SarkariDarapan is completely free. We believe that access to government opportunity information should not be behind a paywall. You can browse job notifications, scheme details, and exam updates without creating an account or paying anything.",
  },
  {
    question: "How can I report an error or suggest a correction?",
    answer:
      "We take accuracy very seriously. If you spot an error or outdated information, please email us at corrections@sarkaridarapan.com. Our editorial team reviews every correction request and updates the content promptly, usually within a few hours.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="bg-gray-50 border-t border-gray-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Quick answers to common questions about SarkariDarapan.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm sm:text-base font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Have another question?{" "}
          <Link href="/contact" className="text-blue-700 hover:underline font-medium">
            Contact us
          </Link>{" "}
          and we will get back to you.
        </p>
      </div>
    </section>
  );
}
