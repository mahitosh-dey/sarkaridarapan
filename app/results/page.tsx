import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AdBanner from "@/components/ads/AdBanner";
import Sidebar from "@/components/layout/Sidebar";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sarkari Result 2026 - Latest Government Exam Results",
  description:
    "Check latest Sarkari Result 2026. Get government exam results for SSC, UPSC, Railway, Banking, State PSC, and other competitive exams. Direct links to official result pages.",
  alternates: {
    canonical: `${SITE_URL}/results`,
  },
  openGraph: {
    title: `Sarkari Result 2026 - Latest Government Exam Results | ${SITE_NAME}`,
    description:
      "Check latest Sarkari Result 2026. Direct links to official government exam result pages.",
    url: `${SITE_URL}/results`,
    type: "website",
  },
};

const sampleResults = [
  {
    id: 1,
    examName: "SSC CGL 2024 Tier-II Result",
    organization: "Staff Selection Commission",
    resultDate: "2026-01-15",
    status: "Declared",
    officialLink: "https://ssc.nic.in",
    totalCandidates: "50,000+",
  },
  {
    id: 2,
    examName: "UPSC Civil Services 2024 Final Result",
    organization: "Union Public Service Commission",
    resultDate: "2026-01-10",
    status: "Declared",
    officialLink: "https://upsc.gov.in",
    totalCandidates: "1,00,000+",
  },
  {
    id: 3,
    examName: "RRB NTPC CBT-2 Result 2024",
    organization: "Railway Recruitment Board",
    resultDate: "2026-01-20",
    status: "Expected",
    officialLink: "https://rrbcdg.gov.in",
    totalCandidates: "1,25,000+",
  },
  {
    id: 4,
    examName: "IBPS PO Mains 2024 Result",
    organization: "Institute of Banking Personnel Selection",
    resultDate: "2026-01-12",
    status: "Declared",
    officialLink: "https://ibps.in",
    totalCandidates: "75,000+",
  },
  {
    id: 5,
    examName: "UPPSC PCS 2024 Prelims Result",
    organization: "Uttar Pradesh Public Service Commission",
    resultDate: "2026-01-18",
    status: "Expected",
    officialLink: "https://uppsc.up.nic.in",
    totalCandidates: "2,00,000+",
  },
  {
    id: 6,
    examName: "NTA UGC NET December 2024 Result",
    organization: "National Testing Agency",
    resultDate: "2026-01-25",
    status: "Expected",
    officialLink: "https://ugcnet.nta.nic.in",
    totalCandidates: "10,00,000+",
  },
  {
    id: 7,
    examName: "SSC CHSL 2024 Tier-I Result",
    organization: "Staff Selection Commission",
    resultDate: "2026-01-08",
    status: "Declared",
    officialLink: "https://ssc.nic.in",
    totalCandidates: "30,00,000+",
  },
  {
    id: 8,
    examName: "RPSC RAS 2024 Prelims Result",
    organization: "Rajasthan Public Service Commission",
    resultDate: "2026-01-22",
    status: "Expected",
    officialLink: "https://rpsc.rajasthan.gov.in",
    totalCandidates: "3,50,000+",
  },
];

export default function ResultsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Results" },
  ];

  const declaredResults = sampleResults.filter((r) => r.status === "Declared");
  const expectedResults = sampleResults.filter((r) => r.status === "Expected");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Latest Government Exam Results
        </h1>
        <p className="text-gray-600 text-lg">
          Check the latest sarkari exam results with direct links to official websites. Stay updated on SSC, UPSC, Railway, Banking, and state-level exam results.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Declared Results */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
              Recently Declared Results
            </h2>
            <div className="space-y-4">
              {declaredResults.map((result) => (
                <div
                  key={result.id}
                  className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{result.examName}</h3>
                      <p className="text-sm text-gray-600 mt-1">{result.organization}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                        <span>
                          Result Date:{" "}
                          <strong className="text-gray-700">
                            {new Date(result.resultDate).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </strong>
                        </span>
                        <span>Candidates: <strong className="text-gray-700">{result.totalCandidates}</strong></span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                        Declared
                      </span>
                      <a
                        href={result.officialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors"
                      >
                        Check Result
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ad Banner */}
          <AdBanner className="mb-10" />

          {/* Expected Results */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
              Upcoming / Expected Results
            </h2>
            <div className="space-y-4">
              {expectedResults.map((result) => (
                <div
                  key={result.id}
                  className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{result.examName}</h3>
                      <p className="text-sm text-gray-600 mt-1">{result.organization}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                        <span>
                          Expected Date:{" "}
                          <strong className="text-gray-700">
                            {new Date(result.resultDate).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </strong>
                        </span>
                        <span>Candidates: <strong className="text-gray-700">{result.totalCandidates}</strong></span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                        Expected
                      </span>
                      <a
                        href={result.officialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        Official Site
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Info Note */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="font-semibold text-blue-900 mb-2">How to Check Your Result</h3>
            <ol className="list-decimal list-inside text-sm text-blue-800 space-y-1">
              <li>Click the &quot;Check Result&quot; button next to your exam</li>
              <li>You will be redirected to the official website</li>
              <li>Enter your roll number / registration number</li>
              <li>Download and save your scorecard for future reference</li>
            </ol>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-80 shrink-0">
          <Suspense fallback={<div className="w-full animate-pulse bg-gray-100 rounded-lg min-h-[400px]" />}>
            <Sidebar />
          </Suspense>
        </aside>
      </div>
    </div>
  );
}
