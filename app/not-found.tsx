import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coming Soon: Content Being Prepared on SarkariDarapan",
  description: "This page is being prepared. Browse the latest government jobs, sarkari yojana, entrance exams, and preparation guides on SarkariDarapan meanwhile.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-blue-50 p-6 ring-8 ring-blue-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-14 w-14 text-blue-700"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
          Coming Soon
        </h1>
        <p className="text-gray-500 text-lg mb-8">
          This page is under construction. Check back soon, we&apos;re working on it.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors w-full sm:w-auto justify-center"
          >
            Go to Homepage
          </Link>
          <Link
            href="/sarkari-naukri"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-50 transition-colors w-full sm:w-auto justify-center"
          >
            Browse Jobs
          </Link>
          <Link
            href="/sarkari-yojana"
            className="inline-flex items-center px-6 py-3 bg-white text-green-700 font-semibold rounded-lg border-2 border-green-700 hover:bg-green-50 transition-colors w-full sm:w-auto justify-center"
          >
            Browse Schemes
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-10 text-left bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h2 className="font-semibold text-gray-900 mb-3">Explore what&apos;s available now</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/sarkari-naukri" className="text-blue-700 hover:underline">
                Sarkari Naukri
              </Link>
              : Latest government job notifications
            </li>
            <li>
              <Link href="/sarkari-yojana" className="text-blue-700 hover:underline">
                Sarkari Yojana
              </Link>
              : Government schemes and benefits
            </li>
            <li>
              <Link href="/entrance-exams" className="text-blue-700 hover:underline">
                Entrance Exams
              </Link>
              : Exam dates, eligibility, and results
            </li>
            <li>
              <Link href="/blog" className="text-blue-700 hover:underline">
                Blog
              </Link>
              : Preparation guides and career tips
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
