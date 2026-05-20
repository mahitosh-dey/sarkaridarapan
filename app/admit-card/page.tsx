import type { Metadata } from "next";
import { Suspense } from "react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AdBanner from "@/components/ads/AdBanner";
import Sidebar from "@/components/layout/Sidebar";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Admit Card 2026 - Download Government Exam Hall Tickets",
  description:
    "Download latest admit cards and hall tickets for government exams 2026. Get direct links to download admit cards for SSC, UPSC, Railway, Banking, Defence, and state-level exams.",
  alternates: {
    canonical: `${SITE_URL}/admit-card`,
  },
  openGraph: {
    title: `Admit Card 2026 - Download Government Exam Hall Tickets | ${SITE_NAME}`,
    description:
      "Download latest admit cards and hall tickets for government exams 2026.",
    url: `${SITE_URL}/admit-card`,
    type: "website",
  },
};

const sampleAdmitCards = [
  {
    id: 1,
    examName: "SSC CGL 2026 Tier-I Admit Card",
    organization: "Staff Selection Commission",
    examDate: "2026-03-01",
    downloadDate: "2026-02-15",
    status: "Available",
    officialLink: "https://ssc.nic.in",
  },
  {
    id: 2,
    examName: "UPSC CSE 2026 Prelims Admit Card",
    organization: "Union Public Service Commission",
    examDate: "2026-06-01",
    downloadDate: "2026-05-15",
    status: "Upcoming",
    officialLink: "https://upsc.gov.in",
  },
  {
    id: 3,
    examName: "RRB Group D 2026 CBT Admit Card",
    organization: "Railway Recruitment Board",
    examDate: "2026-02-20",
    downloadDate: "2026-02-05",
    status: "Available",
    officialLink: "https://rrbcdg.gov.in",
  },
  {
    id: 4,
    examName: "IBPS Clerk Mains 2026 Admit Card",
    organization: "Institute of Banking Personnel Selection",
    examDate: "2026-02-25",
    downloadDate: "2026-02-10",
    status: "Available",
    officialLink: "https://ibps.in",
  },
  {
    id: 5,
    examName: "NTA CUET UG 2026 Admit Card",
    organization: "National Testing Agency",
    examDate: "2026-05-15",
    downloadDate: "2026-05-01",
    status: "Upcoming",
    officialLink: "https://cuet.samarth.ac.in",
  },
  {
    id: 6,
    examName: "UPPSC PCS 2026 Prelims Admit Card",
    organization: "Uttar Pradesh Public Service Commission",
    examDate: "2026-04-20",
    downloadDate: "2026-04-05",
    status: "Upcoming",
    officialLink: "https://uppsc.up.nic.in",
  },
  {
    id: 7,
    examName: "SSC CHSL 2026 Tier-I Admit Card",
    organization: "Staff Selection Commission",
    examDate: "2026-03-10",
    downloadDate: "2026-02-25",
    status: "Available",
    officialLink: "https://ssc.nic.in",
  },
  {
    id: 8,
    examName: "Indian Army Agniveer 2026 Admit Card",
    organization: "Indian Army",
    examDate: "2026-03-15",
    downloadDate: "2026-03-01",
    status: "Upcoming",
    officialLink: "https://joinindianarmy.nic.in",
  },
];

export default function AdmitCardPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Admit Card" },
  ];

  const availableCards = sampleAdmitCards.filter((c) => c.status === "Available");
  const upcomingCards = sampleAdmitCards.filter((c) => c.status === "Upcoming");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Download Admit Cards
        </h1>
        <p className="text-gray-600 text-lg">
          Download your government exam admit cards and hall tickets. Get direct links to official portals for SSC, UPSC, Railway, Banking, and more.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Available Admit Cards */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
              Available for Download
            </h2>
            <div className="space-y-4">
              {availableCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{card.examName}</h3>
                      <p className="text-sm text-gray-600 mt-1">{card.organization}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                        <span>
                          Exam Date:{" "}
                          <strong className="text-gray-700">
                            {new Date(card.examDate).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </strong>
                        </span>
                        <span>
                          Available Since:{" "}
                          <strong className="text-gray-700">
                            {new Date(card.downloadDate).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </strong>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                        Available
                      </span>
                      <a
                        href={card.officialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ad Banner */}
          <AdBanner className="mb-10" />

          {/* Upcoming Admit Cards */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
              Upcoming Admit Cards
            </h2>
            <div className="space-y-4">
              {upcomingCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{card.examName}</h3>
                      <p className="text-sm text-gray-600 mt-1">{card.organization}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                        <span>
                          Exam Date:{" "}
                          <strong className="text-gray-700">
                            {new Date(card.examDate).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </strong>
                        </span>
                        <span>
                          Expected Download:{" "}
                          <strong className="text-gray-700">
                            {new Date(card.downloadDate).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </strong>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                        Upcoming
                      </span>
                      <a
                        href={card.officialLink}
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
            <h3 className="font-semibold text-blue-900 mb-2">How to Download Your Admit Card</h3>
            <ol className="list-decimal list-inside text-sm text-blue-800 space-y-1">
              <li>Click the &quot;Download&quot; button next to your exam</li>
              <li>You will be redirected to the official website</li>
              <li>Login with your registration number and date of birth / password</li>
              <li>Download and print your admit card in color</li>
              <li>Verify all details (name, photo, exam center) on the admit card</li>
              <li>Carry a valid photo ID along with the admit card to the exam center</li>
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
