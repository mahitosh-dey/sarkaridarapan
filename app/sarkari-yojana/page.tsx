import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import SchemeCard from "@/components/ui/SchemeCard";
import Pagination from "@/components/ui/Pagination";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AdBanner from "@/components/ads/AdBanner";
import Sidebar from "@/components/layout/Sidebar";
import { getSchemePosts } from "@/lib/content";
import { SITE_NAME, SITE_URL, SCHEME_CATEGORIES, REVALIDATE_INTERVAL } from "@/lib/constants";

export const revalidate = REVALIDATE_INTERVAL;

export const metadata: Metadata = {
  title: "Sarkari Yojana 2026 - Government Schemes List",
  description:
    "Complete list of Sarkari Yojana 2026 - Central and State Government Schemes. Find eligibility, benefits, application process for PM Yojana, state schemes, and more.",
  alternates: {
    canonical: `${SITE_URL}/sarkari-yojana`,
  },
  openGraph: {
    title: `Sarkari Yojana 2026 - Government Schemes List | ${SITE_NAME}`,
    description:
      "Complete list of Sarkari Yojana 2026 - Central and State Government Schemes for all citizens.",
    url: `${SITE_URL}/sarkari-yojana`,
    type: "website",
    images: [{ url: `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630 }],
  },
};

interface SarkariYojanaListPageProps {
  searchParams: { page?: string; category?: string };
}

export default async function SarkariYojanaPage({ searchParams }: SarkariYojanaListPageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const activeCategory = searchParams.category || "all";
  const postsPerPage = 12;

  let allSchemes: import("@/lib/types").SchemePost[] = [];
  try {
    allSchemes = await getSchemePosts();
  } catch {
    allSchemes = [];
  }

  const filteredSchemes =
    activeCategory === "all"
      ? allSchemes
      : allSchemes.filter((scheme) => scheme.category === activeCategory);

  const totalPages = Math.ceil(filteredSchemes.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedSchemes = filteredSchemes.slice(startIndex, startIndex + postsPerPage);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Sarkari Yojana" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Sarkari Yojana 2026 - Government Schemes
        </h1>
        <p className="text-gray-600 text-lg">
          Explore all central and state government schemes with eligibility details, benefits, and application process.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-2 min-w-max pb-2">
          <Link
            href="/sarkari-yojana"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-green-700 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            All Schemes
          </Link>
          {SCHEME_CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/sarkari-yojana?category=${category.slug}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                activeCategory === category.slug
                  ? "bg-green-700 text-white"
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
          {paginatedSchemes.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paginatedSchemes.slice(0, 6).map((scheme) => (
                  <SchemeCard key={scheme.slug} scheme={scheme} />
                ))}
              </div>

              {/* Mid-page Ad */}
              {paginatedSchemes.length > 6 && <AdBanner className="my-8" />}

              {paginatedSchemes.length > 6 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {paginatedSchemes.slice(6).map((scheme) => (
                    <SchemeCard key={scheme.slug} scheme={scheme} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">No Schemes Found</h3>
              <p className="text-gray-500">
                No government schemes available for the selected category. Try a different filter.
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
                    ? "/sarkari-yojana"
                    : `/sarkari-yojana?category=${activeCategory}`
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
