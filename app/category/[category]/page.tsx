import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import JobCard from "@/components/ui/JobCard";
import Pagination from "@/components/ui/Pagination";
import Sidebar from "@/components/layout/Sidebar";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { getJobsByCategory } from "@/lib/content";
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

  return {
    title: `${categoryData.name} Jobs 2026 - Government Job Vacancies`,
    description: `Latest ${categoryData.name} government job vacancies 2026. Find eligibility, salary, application dates, and apply online for ${categoryData.name} sarkari naukri.`,
    alternates: {
      canonical: `${SITE_URL}/category/${params.category}`,
    },
    ...(jobs.length === 0 && { robots: { index: false, follow: true } }),
    openGraph: {
      title: `${categoryData.name} Jobs 2026 | ${SITE_NAME}`,
      description: `Latest ${categoryData.name} government job vacancies and notifications.`,
      url: `${SITE_URL}/category/${params.category}`,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const categoryData = JOB_CATEGORIES.find((c) => c.slug === params.category);

  if (!categoryData) {
    notFound();
  }

  const currentPage = Number(searchParams.page) || 1;
  const postsPerPage = 12;

  let categoryJobs: import("@/lib/types").JobPost[] = [];
  try {
    categoryJobs = await getJobsByCategory(params.category);
  } catch {
    categoryJobs = [];
  }

  const totalPages = Math.ceil(categoryJobs.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedJobs = categoryJobs.slice(startIndex, startIndex + postsPerPage);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Categories", href: "/sarkari-naukri" },
    { label: categoryData.name },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          {categoryData.name} Government Jobs 2026
        </h1>
        <p className="text-gray-600 text-lg">
          Browse all latest {categoryData.name.toLowerCase()} government job notifications, vacancies, and recruitment updates.
        </p>
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
            <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">No Jobs Found</h3>
              <p className="text-gray-500">
                No {categoryData.name.toLowerCase()} government jobs are currently available. Check back soon for new openings.
              </p>
            </div>
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
