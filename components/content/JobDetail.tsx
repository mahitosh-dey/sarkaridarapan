"use client";

import { useState } from "react";
import Link from "next/link";
import type { JobPost } from "@/lib/types";
import { safeFormatDate } from "@/lib/date-utils";

interface JobDetailProps {
  job: JobPost;
}

export default function JobDetail({ job }: JobDetailProps) {
  const [copied, setCopied] = useState(false);

  const updatedDate = safeFormatDate(job.updatedAt, "—", "long");
  const formatDate = (dateStr: string | undefined) =>
    safeFormatDate(dateStr, "To be announced", "long");

  // Normalize selectionProcess to always be an array
  const selectionSteps: string[] = Array.isArray(job.selectionProcess)
    ? job.selectionProcess
    : typeof job.selectionProcess === "string"
      ? job.selectionProcess.split(",").map((s: string) => s.trim()).filter(Boolean)
      : [];

  // Normalize applicationFee to handle both string and object formats
  const appFee = typeof job.applicationFee === "string"
    ? { general: job.applicationFee, obc: null, sc_st: null, women: null, ph: null }
    : job.applicationFee;

  // Determine which sections have data to show
  const hasAppFee = appFee.general && appFee.general.trim() !== "";
  const hasAnyDate = job.importantDates.startDate || job.importantDates.lastDate || job.importantDates.examDate;
  const hasEligibility = (job.eligibility.age && job.eligibility.age.trim() !== "")
    || (job.eligibility.education && job.eligibility.education.trim() !== "");
  const hasHowToApply = job.howToApply && job.howToApply.trim() !== "";

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
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
        <p className="text-sm font-medium uppercase tracking-wider text-primary-600 mb-2">
          {job.organization}
        </p>

        <h1 className="text-2xl font-bold text-gray-900 leading-tight sm:text-3xl lg:text-4xl">
          {job.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {job.isActive ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-700 ring-1 ring-inset ring-green-600/20">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              Active
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-700 ring-1 ring-inset ring-red-600/20">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              Expired
            </span>
          )}
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
            {job.category}
          </span>
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            {job.state}
          </span>
        </div>

        {job.verifiedAt && (
          <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-green-50 px-3 py-2 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
              <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
            </svg>
            Information verified on{" "}
            <time dateTime={job.verifiedAt}>
              {safeFormatDate(job.verifiedAt, "", "long")}
            </time>{" "}
            from official source
          </div>
        )}
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* Quick Info Table */}
      {/* ------------------------------------------------------------------ */}
      <section id="quick-info" className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary-600" aria-hidden="true">
            <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" />
          </svg>
          Quick Information
        </h2>
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <tbody>
              {job.postName && (
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-700 w-1/3 sm:w-1/4">Post Name</td>
                  <td className="px-4 py-3 text-gray-900">{job.postName}</td>
                </tr>
              )}
              {job.vacancies > 0 && (
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold text-gray-700 w-1/3 sm:w-1/4">Total Vacancies</td>
                  <td className="px-4 py-3 text-gray-900 font-semibold text-primary-700">
                    {job.vacancies.toLocaleString("en-IN")}
                  </td>
                </tr>
              )}
              {job.salary && (
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-700 w-1/3 sm:w-1/4">Salary</td>
                  <td className="px-4 py-3 text-gray-900">{job.salary}</td>
                </tr>
              )}
              <tr className="bg-white">
                <td className="px-4 py-3 font-semibold text-gray-700 w-1/3 sm:w-1/4">Organization</td>
                <td className="px-4 py-3 text-gray-900">{job.organization}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Application Fee */}
      {/* ------------------------------------------------------------------ */}
      {hasAppFee && (
        <section id="application-fee" className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary-600" aria-hidden="true">
              <path d="M10.75 10.818v2.614A3.13 3.13 0 0 0 11.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 0 0-1.138-.432ZM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 0 0-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.854 0 .228.137.562.514.854.075.058.155.112.24.16l-.424-.214Z" />
              <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM11 6.025a3.375 3.375 0 0 1 0 6.45v.75a.75.75 0 0 1-1.5 0v-.75a3.375 3.375 0 0 1 0-6.45v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
            </svg>
            Application Fee
          </h2>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <tbody>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-700 w-1/3 sm:w-1/4">
                    {appFee.obc ? "General" : "Application Fee"}
                  </td>
                  <td className="px-4 py-3 text-gray-900">{appFee.general}</td>
                </tr>
                {appFee.obc && (
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-gray-700">OBC</td>
                    <td className="px-4 py-3 text-gray-900">{appFee.obc}</td>
                  </tr>
                )}
                {appFee.sc_st && (
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-700">SC / ST</td>
                    <td className="px-4 py-3 text-gray-900">{appFee.sc_st}</td>
                  </tr>
                )}
                {appFee.women && (
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-gray-700">Women</td>
                    <td className="px-4 py-3 text-gray-900">{appFee.women}</td>
                  </tr>
                )}
                {appFee.ph && (
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-700">PH / Divyang</td>
                    <td className="px-4 py-3 text-gray-900">{appFee.ph}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Important Dates */}
      {/* ------------------------------------------------------------------ */}
      {hasAnyDate && (
        <section id="important-dates" className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary-600" aria-hidden="true">
              <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd" />
            </svg>
            Important Dates
          </h2>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <tbody>
                {job.importantDates.startDate && (
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-700 w-1/3 sm:w-1/4">Start Date</td>
                    <td className="px-4 py-3 text-gray-900">{formatDate(job.importantDates.startDate)}</td>
                  </tr>
                )}
                {job.importantDates.lastDate && (
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-gray-700 w-1/3 sm:w-1/4">Last Date</td>
                    <td className="px-4 py-3 font-semibold text-red-600">{formatDate(job.importantDates.lastDate)}</td>
                  </tr>
                )}
                {job.importantDates.examDate && (
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-700 w-1/3 sm:w-1/4">Exam Date</td>
                    <td className="px-4 py-3 text-gray-900">{formatDate(job.importantDates.examDate)}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Eligibility */}
      {/* ------------------------------------------------------------------ */}
      {hasEligibility && (
        <section id="eligibility" className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary-600" aria-hidden="true">
              <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
            </svg>
            Eligibility
          </h2>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <tbody>
                {job.eligibility.age && job.eligibility.age.trim() !== "" && (
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-700 w-1/3 sm:w-1/4">Age Limit</td>
                    <td className="px-4 py-3 text-gray-900">{job.eligibility.age}</td>
                  </tr>
                )}
                {job.eligibility.education && job.eligibility.education.trim() !== "" && (
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-gray-700 w-1/3 sm:w-1/4">Education</td>
                    <td className="px-4 py-3 text-gray-900">{job.eligibility.education}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Selection Process */}
      {/* ------------------------------------------------------------------ */}
      {selectionSteps.length > 0 && (
        <section id="selection-process" className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary-600" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
            </svg>
            Selection Process
          </h2>
          <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6">
            <ol className="space-y-3">
              {selectionSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                    {index + 1}
                  </span>
                  <span className="text-sm text-gray-800 pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* How to Apply */}
      {/* ------------------------------------------------------------------ */}
      {hasHowToApply && (
        <section id="how-to-apply" className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary-600" aria-hidden="true">
              <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5ZM10 8a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 10 8Z" clipRule="evenodd" />
            </svg>
            How to Apply
          </h2>
          <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6">
            <div className="text-sm text-gray-700 leading-7 whitespace-pre-line">
              {job.howToApply}
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Official Links */}
      {/* ------------------------------------------------------------------ */}
      <section id="official-links" className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary-600" aria-hidden="true">
            <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
            <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
          </svg>
          Official Links
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {job.notificationLink && (
            <a
              href={job.notificationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 hover:border-primary-300 transition-colors duration-150"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-red-500 flex-shrink-0" aria-hidden="true">
                <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm2.25 8.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" clipRule="evenodd" />
              </svg>
              <span>Notification PDF</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-auto h-4 w-4 text-gray-400" aria-hidden="true">
                <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clipRule="evenodd" />
              </svg>
            </a>
          )}
          {job.officialLink && (
            <a
              href={job.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 hover:border-primary-300 transition-colors duration-150"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary-600 flex-shrink-0" aria-hidden="true">
                <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clipRule="evenodd" />
              </svg>
              <span>Official Website</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-auto h-4 w-4 text-gray-400" aria-hidden="true">
                <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clipRule="evenodd" />
              </svg>
            </a>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Join Channels CTA */}
      {/* ------------------------------------------------------------------ */}
      <div className="rounded-lg border border-green-200 bg-green-50 p-4 sm:p-5">
        <p className="mb-3 text-sm font-semibold text-green-900">
          Get instant job alerts — join our channels:
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
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(job.title + " - " + (typeof window !== "undefined" ? window.location.href : ""))}`}
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
              href={`https://t.me/share/url?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(job.title)}`}
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
            Last Updated: <time dateTime={job.updatedAt}>{updatedDate}</time>
          </p>
        </div>
      </footer>
    </article>
  );
}
