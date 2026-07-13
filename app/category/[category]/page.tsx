import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import JobCard from "@/components/ui/JobCard";
import Pagination from "@/components/ui/Pagination";
import Sidebar from "@/components/layout/Sidebar";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { getJobsByCategory, getJobPosts } from "@/lib/content";
import { SITE_NAME, SITE_URL, JOB_CATEGORIES, REVALIDATE_INTERVAL } from "@/lib/constants";

export const revalidate = REVALIDATE_INTERVAL;

interface CategoryPageProps {
  params: { category: string };
  searchParams: { page?: string };
}

export async function generateStaticParams() {
  return JOB_CATEGORIES.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryData = JOB_CATEGORIES.find((c) => c.slug === params.category);
  if (!categoryData) return { title: "Category Not Found" };

  const jobs = await getJobsByCategory(params.category).catch(() => []);
  const count = jobs.length;

  const title =
    count > 0
      ? `${categoryData.name} Government Jobs 2026: ${count} Latest Opening${count === 1 ? "" : "s"} | ${SITE_NAME}`
      : `${categoryData.name} Government Jobs 2026: Latest Sarkari Naukri | ${SITE_NAME}`;

  const description =
    count > 0
      ? `${categoryData.name} government jobs 2026: ${count} latest opening${count === 1 ? "" : "s"}, eligibility, salary, and application details.`
      : `Latest ${categoryData.name} government job vacancies 2026. Find eligibility, salary, application dates, and apply online for ${categoryData.name} sarkari naukri.`;

  // 3-tier robots policy so Google stops wasting crawl budget on thin pages.
  // Empty pages get nofollow too — nothing worth passing signal through.
  const robots =
    count === 0
      ? { index: false, follow: false }
      : count < 3
        ? { index: false, follow: true }
        : { index: true, follow: true };

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/category/${params.category}`,
    },
    robots,
    openGraph: {
      title: `${categoryData.name} Jobs 2026 | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}/category/${params.category}`,
      type: "website",
      images: [{ url: `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const categoryData = JOB_CATEGORIES.find((c) => c.slug === params.category);

  if (!categoryData) {
    notFound();
  }

  const currentPage  = Number(searchParams.page) || 1;
  const postsPerPage = 12;

  let categoryJobs: import("@/lib/types").JobPost[] = [];
  try {
    categoryJobs = await getJobsByCategory(params.category);
  } catch {
    categoryJobs = [];
  }

  // Fetch 4 recent fallback jobs when this category is empty
  let fallbackJobs: import("@/lib/types").JobPost[] = [];
  if (categoryJobs.length === 0) {
    try {
      const all = await getJobPosts();
      fallbackJobs = all.slice(0, 4);
    } catch {
      fallbackJobs = [];
    }
  }

  // Build related categories from all jobs — count per category, pick top 3
  // excluding the current one, sorted by count descending.
  let relatedCategories: { slug: string; name: string; count: number }[] = [];
  try {
    const allJobs = await getJobPosts();
    const countMap = new Map<string, number>();
    for (const job of allJobs) {
      if (job.category && job.category !== params.category) {
        countMap.set(job.category, (countMap.get(job.category) ?? 0) + 1);
      }
    }
    relatedCategories = JOB_CATEGORIES
      .filter((c) => c.slug !== params.category && (countMap.get(c.slug) ?? 0) > 0)
      .map((c) => ({ slug: c.slug, name: c.name, count: countMap.get(c.slug) ?? 0 }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 3);
  } catch {
    relatedCategories = [];
  }

  const totalPages   = Math.ceil(categoryJobs.length / postsPerPage);
  const startIndex   = (currentPage - 1) * postsPerPage;
  const paginatedJobs = categoryJobs.slice(startIndex, startIndex + postsPerPage);

  const breadcrumbs = [
    { label: "Sarkari Naukri", href: "/sarkari-naukri" },
    { label: `${categoryData.name} Jobs` },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: `${categoryData.name} Jobs`, url: `${SITE_URL}/category/${params.category}` },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          {categoryData.name} Government Jobs 2026
        </h1>
        {categoryData.description ? (
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl">
            {categoryData.description}
          </p>
        ) : (
          <p className="text-gray-600 text-lg">
            Browse all latest {categoryData.name.toLowerCase()} government job notifications, vacancies, and recruitment updates.
          </p>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {paginatedJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginatedJobs.map((job) => (
                <JobCard key={job.slug} job={job} />
              ))}
            </div>
          ) : (
            <>
              <div className="rounded-lg border border-amber-200 bg-amber-50 px-5 py-4 mb-8">
                <p className="text-amber-800 text-sm font-medium">
                  No {categoryData.name} government jobs currently available. Browse latest all-India jobs below.
                </p>
              </div>
              {fallbackJobs.length > 0 && (
                <>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Latest government jobs, open to all eligible candidates
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {fallbackJobs.map((job) => (
                      <JobCard key={job.slug} job={job} />
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/sarkari-naukri"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline"
                    >
                      View all government jobs
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </>
              )}
            </>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                basePath={`/category/${params.category}`}
              />
            </div>
          )}

          {/* Related Categories */}
          {relatedCategories.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Browse Other Job Categories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-5 py-4 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                  >
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {cat.name} Jobs
                      </p>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {cat.count} opening{cat.count === 1 ? "" : "s"}
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            </section>
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
