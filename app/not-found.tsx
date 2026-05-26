import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* 404 Heading */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-extrabold text-blue-700 leading-none">404</h1>
          <div className="w-24 h-1 bg-blue-700 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Sorry, the page you are looking for does not exist, has been removed, or is temporarily unavailable.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

        {/* Helpful Suggestions */}
        <div className="mt-12 text-left bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Looking for something specific?</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/sarkari-naukri" className="text-blue-700 hover:underline">
                Sarkari Naukri
              </Link>{" "}
              - Latest government job notifications
            </li>
            <li>
              <Link href="/sarkari-yojana" className="text-blue-700 hover:underline">
                Sarkari Yojana
              </Link>{" "}
              - Government schemes and benefits
            </li>
            <li>
              <Link href="/entrance-exams" className="text-blue-700 hover:underline">
                Entrance Exams
              </Link>{" "}
              - Exam dates, eligibility, syllabus, and results
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
