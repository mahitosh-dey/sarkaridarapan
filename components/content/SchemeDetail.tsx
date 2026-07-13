"use client";

import { useState } from "react";
import type { SchemePost } from "@/lib/types";
import { safeFormatDate } from "@/lib/date-utils";

interface SchemeDetailProps {
  scheme: SchemePost;
}

export default function SchemeDetail({ scheme }: SchemeDetailProps) {
  const [copied, setCopied] = useState(false);

  const updatedDate = safeFormatDate(scheme.updatedAt, "N/A", "long");
  const publishedDate = safeFormatDate(scheme.publishedAt, "N/A", "long");

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const input = document.createElement("input");
      input.value = window.location.href;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <article className="mx-auto max-w-4xl">
      {/* ------------------------------------------------------------------ */}
      {/* Header */}
      {/* ------------------------------------------------------------------ */}
      <header className="mb-8">
        <p className="text-sm font-medium uppercase tracking-wider text-sarkari-green mb-2">
          {scheme.ministry}
        </p>

        <h1 className="text-2xl font-bold text-gray-900 leading-tight sm:text-3xl lg:text-4xl">
          {scheme.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
            {scheme.category}
          </span>
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            {scheme.state}
          </span>
          <span className="text-sm text-gray-500">
            Published on {publishedDate}
          </span>
        </div>

        {scheme.verifiedAt && (
          <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-green-50 px-3 py-2 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
              <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
            </svg>
            Information verified on{" "}
            <time dateTime={scheme.verifiedAt}>
              {safeFormatDate(scheme.verifiedAt, "", "long")}
            </time>{" "}
            from official source
          </div>
        )}

        {/* Launched By */}
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-sarkari-green flex-shrink-0" aria-hidden="true">
            <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
          </svg>
          <span>
            Launched by <strong className="font-semibold text-gray-900">{scheme.launchedBy}</strong>
          </span>
        </div>
      </header>

      <hr className="mb-8 border-gray-200" />

      {/* ------------------------------------------------------------------ */}
      {/* Objective */}
      {/* ------------------------------------------------------------------ */}
      <section id="objective" className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-sarkari-green" aria-hidden="true">
            <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" />
          </svg>
          Objective
        </h2>
        <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6">
          <p className="text-sm leading-relaxed text-gray-800">{scheme.objective}</p>
        </div>
      </section>

      <hr className="mb-8 border-gray-200" />

      {/* ------------------------------------------------------------------ */}
      {/* Eligibility Criteria */}
      {/* ------------------------------------------------------------------ */}
      {scheme.eligibility.length > 0 && (
        <>
          <section id="eligibility" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-sarkari-green" aria-hidden="true">
                <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
              </svg>
              Eligibility Criteria
            </h2>
            <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6">
              <ul className="space-y-2.5">
                {scheme.eligibility.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 flex-shrink-0 text-sarkari-green" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <hr className="mb-8 border-gray-200" />
        </>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Benefits & Features */}
      {/* ------------------------------------------------------------------ */}
      {scheme.benefits.length > 0 && (
        <>
          <section id="benefits" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-sarkari-green" aria-hidden="true">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
              </svg>
              Benefits & Features
            </h2>
            <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6">
              <ul className="space-y-2.5">
                {scheme.benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-800">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <hr className="mb-8 border-gray-200" />
        </>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Required Documents */}
      {/* ------------------------------------------------------------------ */}
      {scheme.documents.length > 0 && (
        <>
          <section id="documents" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-sarkari-green" aria-hidden="true">
                <path fillRule="evenodd" d="M3.5 2A1.5 1.5 0 0 0 2 3.5v13A1.5 1.5 0 0 0 3.5 18h13a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 12.378 2H3.5Zm3.25 8.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" clipRule="evenodd" />
              </svg>
              Required Documents
            </h2>
            <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6">
              <ul className="grid gap-2 sm:grid-cols-2">
                {scheme.documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true">
                      <path fillRule="evenodd" d="M15.988 3.012A2.25 2.25 0 0 1 18 5.25v6.5A2.25 2.25 0 0 1 15.75 14H13.5v-3.379a3 3 0 0 0-.879-2.121l-3.12-3.121a3 3 0 0 0-1.402-.791 2.252 2.252 0 0 1 2.151-1.588h5.738ZM2 9.75A2.25 2.25 0 0 1 4.25 7.5H6v2.25a2.25 2.25 0 0 0 2.25 2.25H10.5v4.5A2.25 2.25 0 0 1 8.25 18.75h-4A2.25 2.25 0 0 1 2 16.5v-6.75Z" clipRule="evenodd" />
                    </svg>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <hr className="mb-8 border-gray-200" />
        </>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* How to Apply */}
      {/* ------------------------------------------------------------------ */}
      <section id="how-to-apply" className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-sarkari-green" aria-hidden="true">
            <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5ZM10 8a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 10 8Z" clipRule="evenodd" />
          </svg>
          How to Apply
        </h2>
        <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6">
          <div className="text-sm text-gray-700 leading-7 whitespace-pre-line">
            {scheme.howToApply}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Frequently Asked Questions */}
      {/* ------------------------------------------------------------------ */}
      {scheme.faqs && scheme.faqs.length > 0 && (
        <>
          <hr className="mb-8 border-gray-200" />

          <section id="faqs" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-sarkari-green" aria-hidden="true">
                <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3.75 3.75 0 0 1 5.304 0l.893.893a3.75 3.75 0 0 1-.464 5.535l-.445.334a2.25 2.25 0 0 0-.9 1.8v.068a.75.75 0 0 1-1.5 0v-.068a3.75 3.75 0 0 1 1.5-3.001l.445-.334a2.25 2.25 0 0 0 .278-3.321l-.893-.893A2.25 2.25 0 0 0 8.94 6.94ZM10 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" clipRule="evenodd" />
              </svg>
              Frequently Asked Questions
            </h2>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <tbody>
                  {scheme.faqs.map((faq, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 font-semibold text-gray-700 w-1/3 sm:w-1/4 align-top">
                        {faq.question}
                      </td>
                      <td className="px-4 py-3 text-gray-900">
                        {faq.answer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}

      <hr className="mb-8 border-gray-200" />

      {/* ------------------------------------------------------------------ */}
      {/* Official Portal & Helpline */}
      {/* ------------------------------------------------------------------ */}
      <section id="official-portal" className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-sarkari-green" aria-hidden="true">
            <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
            <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
          </svg>
          Official Portal & Helpline
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {/* Official Portal */}
          {scheme.officialPortal && (
            <a
              href={scheme.officialPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 hover:border-sarkari-green transition-colors duration-150"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-sarkari-green flex-shrink-0" aria-hidden="true">
                <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clipRule="evenodd" />
              </svg>
              <div>
                <span className="block font-semibold">Official Portal</span>
                <span className="block text-xs text-gray-500 truncate max-w-[200px]">
                  {scheme.officialPortal.replace(/^https?:\/\//, "")}
                </span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-auto h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true">
                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L11.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 1 1-1.04-1.08l3.158-2.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
              </svg>
            </a>
          )}

          {/* Helpline Number */}
          {scheme.helplineNumber && (
            <a
              href={`tel:${scheme.helplineNumber}`}
              className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 hover:border-sarkari-green transition-colors duration-150"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-sarkari-green flex-shrink-0" aria-hidden="true">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
              </svg>
              <div>
                <span className="block font-semibold">Helpline Number</span>
                <span className="block text-xs text-gray-500">{scheme.helplineNumber}</span>
              </div>
            </a>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Join Channels CTA */}
      {/* ------------------------------------------------------------------ */}
      <div className="rounded-lg border border-green-200 bg-green-50 p-4 sm:p-5">
        <p className="mb-3 text-sm font-semibold text-green-900">
          Get instant scheme updates. Join our channels:
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://t.me/sarkaridarapaninfo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#0088cc] px-4 py-2 text-sm font-medium text-white hover:bg-[#0077b5] transition-colors"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Join Telegram
          </a>
          <a
            href="https://whatsapp.com/channel/0029VbCHYsIDeON1dKiWuk1A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-sm font-medium text-white hover:bg-[#1ebe5d] transition-colors"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            Join WhatsApp
          </a>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Share + Last Updated */}
      {/* ------------------------------------------------------------------ */}
      <footer className="rounded-lg border border-gray-200 bg-gray-50 p-4 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Share */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-700">Share:</span>
            <button
              type="button"
              onClick={handleCopyLink}
              className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium shadow-sm transition-colors duration-150 ${
                copied
                  ? "border-green-300 bg-green-50 text-green-700"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {copied ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
                    <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
                  </svg>
                  Copy Link
                </>
              )}
            </button>

            {/* WhatsApp Share */}
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(scheme.title + " - " + (typeof window !== "undefined" ? window.location.href : ""))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors duration-150"
              aria-label="Share on WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-green-600" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>

            {/* Telegram Share */}
            <a
              href={`https://t.me/share/url?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(scheme.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors duration-150"
              aria-label="Share on Telegram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-blue-500" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Telegram
            </a>
          </div>

          {/* Last Updated */}
          <p className="text-xs text-gray-500">
            Last Updated: <time dateTime={scheme.updatedAt}>{updatedDate}</time>
          </p>
        </div>
      </footer>
    </article>
  );
}
