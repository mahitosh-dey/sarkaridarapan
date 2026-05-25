import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import EntranceExamCard from "@/components/ui/EntranceExamCard";
import Pagination from "@/components/ui/Pagination";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AdBanner from "@/components/ads/AdBanner";
import Sidebar from "@/components/layout/Sidebar";
import { getEntranceExamPosts } from "@/lib/content";
import { SITE_NAME, SITE_URL, ENTRANCE_EXAM_CATEGORIES, REVALIDATE_INTERVAL } from "@/lib/constants";

export const revalidate = REVALIDATE_INTERVAL;

export const metadata: Metadata = {
  title: "Entrance Exams 2026 - Upcoming Entrance Exams in India",
  description:
    "Complete list of upcoming entrance exams 2026 in India. Find exam dates, eligibility, syllabus, admit card, and results for engineering, medical, management, law, and more.",
  alternates: {
    canonical: `${SITE_URL}/entrance-exams`,
  },
  openGraph: {
    title: `Entrance Exams 2026 - Upcoming Entrance Exams in India | ${SITE_NAME}`,
    description:
      "Complete list of upcoming entrance exams 2026 in India with exam dates, eligibility, and application details.",
    url: `${SITE_URL}/entrance-exams`,
    type: "website",
  },
};

interface EntranceExamsListPageProps {
  searchParams: { page?: string; category?: string };
}

export default async function EntranceExamsPage({ searchParams }: EntranceExamsListPageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const activeCategory = searchParams.category || "all";
  const postsPerPage = 12;

  let allExams: import("@/lib/types").EntranceExamPost[] = [];
  try {
    allExams = await getEntranceExamPosts();
  } catch {
    allExams = [];
  }

  const filteredExams =
    activeCategory === "all"
      ? allExams
      : allExams.filter((exam) => exam.category === activeCategory);

  const totalPages = Math.ceil(filteredExams.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedExams = filteredExams.slice(startIndex, startIndex + postsPerPage);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Entrance Exams" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Entrance Exams 2026 - Upcoming Entrance Exams
        </h1>
        <p className="text-gray-600 text-lg">
          Find all upcoming entrance exams in India with exam dates, eligibility criteria, syllabus, and application details.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-2 min-w-max pb-2">
          <Link
            href="/entrance-exams"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            All Exams
          </Link>
          {ENTRANCE_EXAM_CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/entrance-exams?category=${category.slug}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                activeCategory === category.slug
                  ? "bg-blue-600 text-white"
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
          {paginatedExams.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paginatedExams.slice(0, 6).map((exam) => (
                  <EntranceExamCard key={exam.slug} exam={exam} />
                ))}
              </div>

              {/* Mid-page Ad */}
              {paginatedExams.length > 6 && <AdBanner className="my-8" />}

              {paginatedExams.length > 6 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {paginatedExams.slice(6).map((exam) => (
                    <EntranceExamCard key={exam.slug} exam={exam} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">No Entrance Exams Found</h3>
              <p className="text-gray-500">
                No entrance exams available for the selected category. Try a different filter.
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
                    ? "/entrance-exams"
                    : `/entrance-exams?category=${activeCategory}`
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
