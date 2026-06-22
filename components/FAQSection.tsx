"use client";

import { useState } from "react";
import Link from "next/link";
import { HOME_FAQS } from "@/lib/faq-data";
import type { FAQItem } from "@/lib/faq-data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Quick answers to common questions about SarkariDarapan.
        </p>

        <div className="space-y-3">
          {HOME_FAQS.map((faq: FAQItem, index: number) => (
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
