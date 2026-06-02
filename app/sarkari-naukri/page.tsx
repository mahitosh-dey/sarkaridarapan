import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import JobCard from "@/components/ui/JobCard";
import Pagination from "@/components/ui/Pagination";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AdBanner from "@/components/ads/AdBanner";
import Sidebar from "@/components/layout/Sidebar";
import { getJobPosts } from "@/lib/content";
import { SITE_NAME, SITE_URL, JOB_CATEGORIES, REVALIDATE_INTERVAL } from "@/lib/constants";
import { isDatePast } from "@/lib/date-utils";

export const revalidate = REVALIDATE_INTERVAL;

export const metadata: Metadata = {
  title: "Latest Sarkari Naukri 2026 - Government Jobs",
  description:
    "Browse all latest Sarkari Naukri 2026 government job notifications. Find central & state government jobs, PSU jobs, defence jobs, banking jobs, railway jobs, and more.",
  alternates: {
    canonical: `${SITE_URL}/sarkari-naukri`,
  },
  openGraph: {
    title: `Latest Sarkari Naukri 2026 - Government Jobs | ${SITE_NAME}`,
    description:
      "Browse all latest Sarkari Naukri 2026 government job notifications. Find central & state government jobs, PSU jobs, defence jobs, and more.",
    url: `${SITE_URL}/sarkari-naukri`,
    type: "website",
  },
};

interface SarkariNaukriPageProps {
  searchParams: { page?: string; category?: string };
}

export default async function SarkariNaukriPage({ searchParams }: SarkariNaukriPageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const activeCategory = searchParams.category || "all";
  const postsPerPage = 12;

  let allJobs: import("@/lib/types").JobPost[] = [];
  try {
    allJobs = await getJobPosts();
  } catch {
    allJobs = [];
  }

  const filteredJobs =
    activeCategory === "all"
      ? allJobs
      : allJobs.filter((job) => job.category === activeCategory);

  // Active jobs (last date not past) always appear before closed ones
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    const aClosed = !a.isActive || isDatePast(a.importantDates.lastDate);
    const bClosed = !b.isActive || isDatePast(b.importantDates.lastDate);
    return aClosed === bClosed ? 0 : aClosed ? 1 : -1;
  });

  const totalPages = Math.ceil(sortedJobs.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedJobs = sortedJobs.slice(startIndex, startIndex + postsPerPage);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Sarkari Naukri" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Latest Sarkari Naukri 2026
        </h1>
        <p className="text-gray-600 text-lg">
          Find the latest government job notifications across all departments and states.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-2 min-w-max pb-2">
          <Link
            href="/sarkari-naukri"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-blue-700 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            All Jobs
          </Link>
          {JOB_CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/sarkari-naukri?category=${category.slug}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                activeCategory === category.slug
                  ? "bg-blue-700 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {paginatedJobs.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paginatedJobs.slice(0, 6).map((job) => (
                  <JobCard key={job.slug} job={job} />
                ))}
              </div>

              {/* Mid-page Ad */}
              {paginatedJobs.length > 6 && <AdBanner className="my-8" />}

              {paginatedJobs.length > 6 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {paginatedJobs.slice(6).map((job) => (
                    <JobCard key={job.slug} job={job} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">No Jobs Found</h3>
              <p className="text-gray-500">
                No government job listings available for the selected category. Try a different filter.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                basePath={
                  activeCategory === "all"
                    ? "/sarkari-naukri"
                    : `/sarkari-naukri?category=${activeCategory}`
                }
              />
            </div>
          )}
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
