import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SearchBar from "@/components/ui/SearchBar";
import Sidebar from "@/components/layout/Sidebar";
import { searchContent } from "@/lib/content";

interface SearchPageProps {
  searchParams: { q?: string; type?: string };
}

export function generateMetadata({ searchParams }: SearchPageProps): Metadata {
  const query = searchParams.q || "";
  return {
    title: query
      ? `Search Results for "${query}" on SarkariDarapan`
      : "Search SarkariDarapan: Government Jobs, Schemes, Exams",
    description: query
      ? `Search results for "${query}". Find government jobs, schemes, entrance exams, results, and admit cards on SarkariDarapan for Indian aspirants.`
      : "Search across government jobs, sarkari yojana, entrance exams, results, and admit cards on SarkariDarapan. Find every notification in one search box.",
    robots: { index: false, follow: true },
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || "";
  const type = searchParams.type || "all";

  const allResults = query ? await searchContent(query) : [];

  const results =
    type === "jobs"
      ? allResults.filter((r) => r.type === "job")
      : type === "schemes"
        ? allResults.filter((r) => r.type === "scheme")
        : allResults;

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Search" },
          ...(query ? [{ label: `"${query}"` }] : []),
        ]}
      />

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Main Content */}
        <div className="min-w-0 flex-1">
          <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">
            {query ? (
              <>
                Search Results for{" "}
                <span className="text-primary-600">&ldquo;{query}&rdquo;</span>
              </>
            ) : (
              "Search Government Jobs & Schemes"
            )}
          </h1>

          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar
              defaultQuery={query}
              defaultFilter={type as "all" | "jobs" | "schemes"}
              showFilter
            />
          </div>

          {/* Filter Tabs */}
          {query && (
            <div className="mb-6 flex gap-2 border-b border-gray-200 pb-3">
              {[
                { key: "all", label: "All" },
                { key: "jobs", label: "Jobs" },
                { key: "schemes", label: "Schemes" },
              ].map((tab) => {
                const isActive = type === tab.key;
                const count =
                  tab.key === "all"
                    ? allResults.length
                    : allResults.filter((r) =>
                        tab.key === "jobs"
                          ? r.type === "job"
                          : r.type === "scheme"
                      ).length;

                return (
                  <Link
                    key={tab.key}
                    href={`/search?q=${encodeURIComponent(query)}${tab.key !== "all" ? `&type=${tab.key}` : ""}`}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {tab.label} ({count})
                  </Link>
                );
              })}
            </div>
          )}

          {/* Results */}
          {query ? (
            results.length > 0 ? (
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  Found {results.length} result{results.length !== 1 ? "s" : ""}
                </p>

                {results.map((result) => (
                  <article
                    key={`${result.type}-${result.slug}`}
                    className={`rounded-lg border bg-white p-5 shadow-sm transition-shadow hover:shadow-md ${
                      result.type === "job"
                        ? "border-l-4 border-l-primary-600"
                        : "border-l-4 border-l-green-600"
                    }`}
                  >
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          result.type === "job"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-green-50 text-green-700"
                        }`}
                      >
                        {result.type === "job"
                          ? "Government Job"
                          : "Government Scheme"}
                      </span>
                      <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                        {result.category}
                      </span>
                      {result.state !== "all-india" && (
                        <span className="rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-700">
                          {result.state}
                        </span>
                      )}
                    </div>

                    <h2 className="mb-1 text-lg font-semibold text-gray-900">
                      <Link
                        href={
                          result.type === "job"
                            ? `/sarkari-naukri/${result.slug}`
                            : `/sarkari-yojana/${result.slug}`
                        }
                        className="hover:text-primary-600 transition-colors"
                      >
                        {result.title}
                      </Link>
                    </h2>

                    <p className="mb-3 line-clamp-2 text-sm text-gray-600">
                      {result.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {new Date(result.publishedAt).toLocaleDateString(
                          "en-IN",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </span>
                      <Link
                        href={
                          result.type === "job"
                            ? `/sarkari-naukri/${result.slug}`
                            : `/sarkari-yojana/${result.slug}`
                        }
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700"
                      >
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 0 1 .75-.75h10.638L11.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 1 1-1.04-1.08l3.158-2.96H3.75A.75.75 0 0 1 3 10Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* No Results */
              <div className="rounded-lg border border-gray-200 bg-white py-16 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mx-auto mb-4 h-12 w-12 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <h2 className="mb-2 text-lg font-semibold text-gray-900">
                  No results found
                </h2>
                <p className="mb-6 text-sm text-gray-500">
                  No government jobs or schemes match &ldquo;{query}&rdquo;. Try
                  a different keyword.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="/sarkari-naukri" className="btn-primary text-sm">
                    Browse All Jobs
                  </Link>
                  <Link href="/sarkari-yojana" className="btn-secondary text-sm">
                    Browse All Schemes
                  </Link>
                </div>
              </div>
            )
          ) : (
            /* No Query - Show Suggestions */
            <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mx-auto mb-4 h-12 w-12 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <h2 className="mb-2 text-lg font-semibold text-gray-900">
                Search for Government Jobs & Schemes
              </h2>
              <p className="mb-6 text-sm text-gray-500">
                Type a keyword like &ldquo;SSC&rdquo;, &ldquo;Railway&rdquo;,
                &ldquo;PM Awas&rdquo;, or &ldquo;Banking&rdquo; to find
                relevant results.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "SSC CGL",
                  "UPSC",
                  "Railway",
                  "Banking",
                  "PM Kisan",
                  "Ayushman Bharat",
                  "Police",
                  "MUDRA Loan",
                ].map((suggestion) => (
                  <Link
                    key={suggestion}
                    href={`/search?q=${encodeURIComponent(suggestion)}`}
                    className="rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm text-gray-700 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                  >
                    {suggestion}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="w-full shrink-0 lg:w-80">
          <Suspense fallback={<div className="w-full animate-pulse bg-gray-100 rounded-lg min-h-[400px]" />}>
            <Sidebar />
          </Suspense>
        </aside>
      </div>
    </div>
  );
}
