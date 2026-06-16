import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import SearchBar from "@/components/ui/SearchBar";
import JobCard from "@/components/ui/JobCard";
import SchemeCard from "@/components/ui/SchemeCard";
import EntranceExamCard from "@/components/ui/EntranceExamCard";
import GuideCard from "@/components/GuideCard";
import AdBanner from "@/components/ads/AdBanner";
import Sidebar from "@/components/layout/Sidebar";
import FAQSection from "@/components/FAQSection";
import { getJobPosts, getSchemePosts, getEntranceExamPosts } from "@/lib/content";
import { getPublishedDbPosts } from "@/lib/blog-db";
import { isDatePast, safeFormatDate } from "@/lib/date-utils";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, STATES, JOB_CATEGORIES, REVALIDATE_INTERVAL } from "@/lib/constants";

export const revalidate = REVALIDATE_INTERVAL;

export const metadata: Metadata = {
  title: `${SITE_NAME} - Latest Government Jobs & Sarkari Yojana 2026`,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
};

export default async function HomePage() {
  const [jobs, schemes, entranceExams, guides] = await Promise.all([
    getJobPosts(),
    getSchemePosts(),
    getEntranceExamPosts(),
    getPublishedDbPosts(),
  ]);

  // Sort active items first within each section before slicing
  const sortedJobs = [...jobs].sort((a, b) => {
    const aClosed = !a.isActive || isDatePast(a.importantDates.lastDate);
    const bClosed = !b.isActive || isDatePast(b.importantDates.lastDate);
    return aClosed === bClosed ? 0 : aClosed ? 1 : -1;
  });
  const sortedExams = [...entranceExams].sort((a, b) => {
    const aClosed = a.applicationEnd ? isDatePast(a.applicationEnd) : isDatePast(a.examDate);
    const bClosed = b.applicationEnd ? isDatePast(b.applicationEnd) : isDatePast(b.examDate);
    return aClosed === bClosed ? 0 : aClosed ? 1 : -1;
  });

  const latestJobs = sortedJobs.slice(0, 6);
  const latestSchemes = schemes.slice(0, 6);
  const latestExams = sortedExams.slice(0, 6);
  const latestGuides = guides.slice(0, 4);

  // Jobs whose last date is today or within the next 7 days
  const todayIST = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
  const sevenDaysLaterIST = new Date(
    new Date(todayIST).getTime() + 7 * 24 * 60 * 60 * 1000
  ).toLocaleDateString("en-CA");
  const closingSoonJobs = jobs
    .filter((job) => {
      if (!job.isActive) return false;
      const d = job.importantDates?.lastDate?.trim();
      if (!d) return false;
      const iso = d.length >= 10 ? d.slice(0, 10) : null;
      if (!iso) return false;
      return iso >= todayIST && iso <= sevenDaysLaterIST;
    })
    .slice(0, 5);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Latest Government Jobs &amp; Schemes in India
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Your one-stop destination for Sarkari Naukri, Sarkari Yojana, exam results,
            admit cards, and all government job notifications updated daily.
          </p>
          <div className="max-w-2xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Telegram / WhatsApp CTA strip */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-medium">
            Get instant job alerts — join our free channels!
          </p>
          <div className="flex gap-3">
            <a
              href="https://t.me/sarkaridarapaninfo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold px-4 py-1.5 rounded-full transition-colors"
            >
              Join Telegram
            </a>
            <a
              href="https://whatsapp.com/channel/0029VbCHYsIDeON1dKiWuk1A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-400 text-white text-xs font-bold px-4 py-1.5 rounded-full transition-colors"
            >
              Join WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Closing Soon urgency banner */}
      {closingSoonJobs.length > 0 && (
        <div className="bg-red-50 border-y border-red-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded">
                CLOSING SOON
              </span>
              <span className="text-sm text-red-700 font-medium">Apply before the last date!</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {closingSoonJobs.map((job) => (
                <Link
                  key={job.slug}
                  href={`/sarkari-naukri/${job.slug}`}
                  className="flex-1 min-w-[260px] max-w-sm bg-white border border-red-200 rounded-lg px-4 py-3 hover:border-red-400 hover:shadow-sm transition-all"
                >
                  <p className="font-semibold text-gray-900 text-sm line-clamp-1">{job.title}</p>
                  <p className="text-xs text-red-600 font-semibold mt-1">
                    Last Date: {safeFormatDate(job.importantDates.lastDate, "N/A")}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Latest Sarkari Naukri */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Latest Sarkari Naukri
                </h2>
                <Link
                  href="/sarkari-naukri"
                  className="text-blue-700 hover:text-blue-800 font-semibold text-sm whitespace-nowrap"
                >
                  View All &rarr;
                </Link>
              </div>
              {latestJobs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {latestJobs.map((job) => (
                    <JobCard key={job.slug} job={job} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">
                  No job posts available at the moment. Check back soon!
                </p>
              )}
            </section>

            {/* Ad Banner */}
            <AdBanner className="mb-12" />

            {/* Latest Sarkari Yojana */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Latest Sarkari Yojana
                </h2>
                <Link
                  href="/sarkari-yojana"
                  className="text-blue-700 hover:text-blue-800 font-semibold text-sm whitespace-nowrap"
                >
                  View All &rarr;
                </Link>
              </div>
              {latestSchemes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {latestSchemes.map((scheme) => (
                    <SchemeCard key={scheme.slug} scheme={scheme} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">
                  No scheme posts available at the moment. Check back soon!
                </p>
              )}
            </section>

            {/* Latest Entrance Exams */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Latest Entrance Exams
                </h2>
                <Link
                  href="/entrance-exams"
                  className="text-blue-700 hover:text-blue-800 font-semibold text-sm whitespace-nowrap"
                >
                  View All &rarr;
                </Link>
              </div>
              {latestExams.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {latestExams.map((exam) => (
                    <EntranceExamCard key={exam.slug} exam={exam} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">
                  No entrance exams available at the moment. Check back soon!
                </p>
              )}
            </section>

            {/* Latest Guides & Articles */}
            {latestGuides.length > 0 && (
              <section className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Latest Guides &amp; Articles
                  </h2>
                  <Link
                    href="/blog"
                    className="text-blue-700 hover:text-blue-800 font-semibold text-sm whitespace-nowrap"
                  >
                    View All &rarr;
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {latestGuides.map((guide) => (
                    <GuideCard key={guide.slug} guide={guide} />
                  ))}
                </div>
              </section>
            )}

            {/* Ad Banner */}
            <AdBanner className="mb-12" />

            {/* Browse by Category */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Browse by Category
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {JOB_CATEGORIES.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/category/${category.slug}`}
                    className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-blue-300 transition-all duration-200 group"
                  >
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <h3 className="text-sm font-semibold text-gray-700 group-hover:text-blue-700 transition-colors">
                      {category.name}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>

            {/* Browse by State */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Browse by State
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {STATES.map((state) => (
                  <Link
                    key={state.slug}
                    href={`/state/${state.slug}`}
                    className="bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-center text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition-all duration-200"
                  >
                    {state.name}
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 shrink-0">
            <Suspense fallback={<div className="w-full animate-pulse bg-gray-100 rounded-lg min-h-[400px]" />}>
              <Sidebar />
            </Suspense>
          </aside>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}
