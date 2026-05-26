import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import GuideCard from "@/components/GuideCard";
import Pagination from "@/components/ui/Pagination";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AdBanner from "@/components/ads/AdBanner";
import Sidebar from "@/components/layout/Sidebar";
import { getAllGuides, GUIDE_CATEGORIES } from "@/lib/guides";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const POSTS_PER_PAGE = 12;

export const metadata: Metadata = {
  title: `Guides & Articles - Preparation Tips, Scheme Guides | ${SITE_NAME}`,
  description:
    "Read comprehensive guides on government exam preparation, scheme walkthroughs, career advice, and step-by-step application help for Sarkari Naukri aspirants.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: `Guides & Articles | ${SITE_NAME}`,
    description:
      "Comprehensive guides on government exam preparation, scheme walkthroughs, career advice, and application help.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

interface BlogPageProps {
  searchParams: { page?: string; category?: string };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const activeCategory = searchParams.category || "all";

  const allGuides = getAllGuides();

  const filteredGuides =
    activeCategory === "all"
      ? allGuides
      : allGuides.filter((guide) => guide.category === activeCategory);

  const totalPages = Math.ceil(filteredGuides.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedGuides = filteredGuides.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Guides" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Guides &amp; Articles
        </h1>
        <p className="text-gray-600 text-lg">
          In-depth preparation guides, scheme walkthroughs, and expert tips for
          government job aspirants.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-2 min-w-max pb-2">
          <Link
            href="/blog"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-indigo-700 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            All Guides
          </Link>
          {GUIDE_CATEGORIES.map((category) => (
            <Link
              key={category}
              href={`/blog?category=${encodeURIComponent(category)}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                activeCategory === category
                  ? "bg-indigo-700 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {paginatedGuides.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paginatedGuides.slice(0, 6).map((guide) => (
                  <GuideCard key={guide.slug} guide={guide} />
                ))}
              </div>

              {/* Mid-page Ad */}
              {paginatedGuides.length > 6 && <AdBanner className="my-8" />}

              {paginatedGuides.length > 6 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {paginatedGuides.slice(6).map((guide) => (
                    <GuideCard key={guide.slug} guide={guide} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                No Guides Found
              </h3>
              <p className="text-gray-500">
                No guides available for the selected category. Try a different
                filter.
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
                    ? "/blog"
                    : `/blog?category=${encodeURIComponent(activeCategory)}`
                }
              />
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-80 shrink-0">
          <Suspense
            fallback={
              <div className="w-full animate-pulse bg-gray-100 rounded-lg min-h-[400px]" />
            }
          >
            <Sidebar />
          </Suspense>
        </aside>
      </div>
    </div>
  );
}
