"use client";

import { useState } from "react";
import Link from "next/link";

interface JobItem {
  title: string;
  date: string;
  href: string;
}

interface SchemeItem {
  title: string;
  href: string;
}

const latestJobs: JobItem[] = [
  {
    title: "SSC CGL 2026 Notification - 5000+ Vacancies",
    date: "May 15, 2026",
    href: "/sarkari-naukri/ssc-cgl-2026",
  },
  {
    title: "UPSC Civil Services Prelims 2026",
    date: "May 12, 2026",
    href: "/sarkari-naukri/upsc-civil-services-2026",
  },
  {
    title: "Railway RRB NTPC Recruitment 2026",
    date: "May 10, 2026",
    href: "/sarkari-naukri/rrb-ntpc-2026",
  },
  {
    title: "IBPS PO 2026 - Banking Jobs",
    date: "May 8, 2026",
    href: "/sarkari-naukri/ibps-po-2026",
  },
  {
    title: "Indian Army Agniveer Recruitment 2026",
    date: "May 5, 2026",
    href: "/sarkari-naukri/army-agniveer-2026",
  },
];

const popularSchemes: SchemeItem[] = [
  {
    title: "PM Kisan Samman Nidhi Yojana",
    href: "/sarkari-yojana/pm-kisan-samman-nidhi",
  },
  {
    title: "Ayushman Bharat Health Card",
    href: "/sarkari-yojana/ayushman-bharat",
  },
  {
    title: "PM Awas Yojana (PMAY) 2026",
    href: "/sarkari-yojana/pm-awas-yojana",
  },
  {
    title: "Sukanya Samriddhi Yojana",
    href: "/sarkari-yojana/sukanya-samriddhi",
  },
  {
    title: "PM Vishwakarma Yojana",
    href: "/sarkari-yojana/pm-vishwakarma",
  },
];

const jobCategories = [
  { label: "SSC Jobs", href: "/category/ssc", count: 45 },
  { label: "UPSC Jobs", href: "/category/upsc", count: 32 },
  { label: "Railway Jobs", href: "/category/railway", count: 28 },
  { label: "Banking Jobs", href: "/category/banking", count: 38 },
  { label: "Defence Jobs", href: "/category/defence", count: 22 },
  { label: "Police Jobs", href: "/category/police", count: 19 },
  { label: "Teaching Jobs", href: "/category/teaching", count: 35 },
  { label: "State Govt Jobs", href: "/category/state-govt", count: 56 },
];

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const INITIAL_STATES_SHOWN = 8;

function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function Sidebar() {
  const [showAllStates, setShowAllStates] = useState(false);

  const visibleStates = showAllStates
    ? indianStates
    : indianStates.slice(0, INITIAL_STATES_SHOWN);

  return (
    <aside className="space-y-6 lg:sticky lg:top-20 lg:self-start">
      {/* Latest Jobs */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 bg-blue-700 px-4 py-3 rounded-t-lg">
          <h2 className="flex items-center gap-2 text-sm font-semibold text-white">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Latest Jobs
          </h2>
        </div>
        <ul className="divide-y divide-gray-100">
          {latestJobs.map((job) => (
            <li key={job.href}>
              <Link
                href={job.href}
                className="block px-4 py-3 transition-colors hover:bg-blue-50"
              >
                <p className="text-sm font-medium text-gray-800 line-clamp-2 hover:text-blue-700">
                  {job.title}
                </p>
                <p className="mt-1 text-xs text-gray-500">{job.date}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="border-t border-gray-200 px-4 py-2">
          <Link
            href="/sarkari-naukri"
            className="text-xs font-medium text-blue-700 hover:text-blue-800"
          >
            View All Jobs &rarr;
          </Link>
        </div>
      </div>

      {/* Popular Schemes */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 bg-green-700 px-4 py-3 rounded-t-lg">
          <h2 className="flex items-center gap-2 text-sm font-semibold text-white">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Popular Schemes
          </h2>
        </div>
        <ul className="divide-y divide-gray-100">
          {popularSchemes.map((scheme) => (
            <li key={scheme.href}>
              <Link
                href={scheme.href}
                className="block px-4 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-green-50 hover:text-green-700 line-clamp-2"
              >
                {scheme.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="border-t border-gray-200 px-4 py-2">
          <Link
            href="/sarkari-yojana"
            className="text-xs font-medium text-green-700 hover:text-green-800"
          >
            View All Schemes &rarr;
          </Link>
        </div>
      </div>

      {/* Job Categories */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 bg-gray-800 px-4 py-3 rounded-t-lg">
          <h2 className="text-sm font-semibold text-white">Job Categories</h2>
        </div>
        <ul className="divide-y divide-gray-100">
          {jobCategories.map((category) => (
            <li key={category.href}>
              <Link
                href={category.href}
                className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-700"
              >
                <span>{category.label}</span>
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* States */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 bg-[#FF9933] px-4 py-3 rounded-t-lg">
          <h2 className="text-sm font-semibold text-white">
            Jobs by State
          </h2>
        </div>
        <ul className="divide-y divide-gray-100">
          {visibleStates.map((state) => (
            <li key={state}>
              <Link
                href={`/state/${toSlug(state)}`}
                className="block px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-orange-50 hover:text-orange-700"
              >
                {state}
              </Link>
            </li>
          ))}
        </ul>
        {indianStates.length > INITIAL_STATES_SHOWN && (
          <div className="border-t border-gray-200 px-4 py-2">
            <button
              onClick={() => setShowAllStates(!showAllStates)}
              className="flex items-center gap-1 text-xs font-medium text-blue-700 hover:text-blue-800"
            >
              {showAllStates ? (
                <>
                  Show Less
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </>
              ) : (
                <>
                  Show All {indianStates.length} States
                  <svg
                    className="h-3 w-3"
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
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Advertisement Placeholder */}
      <div className="flex min-h-[250px] items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
        <div className="text-center">
          <svg
            className="mx-auto h-8 w-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          <p className="mt-2 text-xs font-medium text-gray-400 uppercase tracking-wide">
            Advertisement
          </p>
          <p className="mt-1 text-[10px] text-gray-400">300 x 250</p>
        </div>
      </div>
    </aside>
  );
}
