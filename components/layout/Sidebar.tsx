import Link from "next/link";
import { getJobPosts, getSchemePosts } from "@/lib/content";
import { JOB_CATEGORIES } from "@/lib/constants";
import SidebarStates from "./SidebarStates";

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function Sidebar() {
  // Fetch real data from Supabase
  let jobs: Awaited<ReturnType<typeof getJobPosts>> = [];
  let schemes: Awaited<ReturnType<typeof getSchemePosts>> = [];

  try {
    [jobs, schemes] = await Promise.all([getJobPosts(), getSchemePosts()]);
  } catch {
    // Graceful fallback — sidebar renders with empty sections
  }

  const latestJobs = jobs.slice(0, 5);
  const latestSchemes = schemes.slice(0, 5);

  // Compute category counts from real job data
  const categoryCounts = new Map<string, number>();
  for (const job of jobs) {
    const cat = (job.category || "").toLowerCase();
    categoryCounts.set(cat, (categoryCounts.get(cat) || 0) + 1);
  }

  const jobCategories = JOB_CATEGORIES.map((cat) => ({
    label: `${cat.name} Jobs`,
    href: `/category/${cat.slug}`,
    count: categoryCounts.get(cat.slug) || 0,
  })).filter((cat) => cat.count > 0);

  return (
    <aside className="space-y-6 lg:sticky lg:top-20 lg:self-start">
      {/* Latest Jobs */}
      {latestJobs.length > 0 && (
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 bg-blue-700 px-4 py-3 rounded-t-lg">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-white">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Latest Jobs
            </h2>
          </div>
          <ul className="divide-y divide-gray-100">
            {latestJobs.map((job) => (
              <li key={job.slug}>
                <Link
                  href={`/sarkari-naukri/${job.slug}`}
                  className="block px-4 py-3 transition-colors hover:bg-blue-50"
                >
                  <p className="text-sm font-medium text-gray-800 line-clamp-2 hover:text-blue-700">
                    {job.title}
                  </p>
                  {job.publishedAt && (
                    <p className="mt-1 text-xs text-gray-500">
                      {formatDate(job.publishedAt)}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-200 px-4 py-2">
            <Link
              href="/sarkari-naukri"
              className="text-xs font-medium text-blue-700 hover:text-blue-800"
            >
              View All Jobs &rarr;
            </Link>
          </div>
        </div>
      )}

      {/* Popular Schemes */}
      {latestSchemes.length > 0 && (
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 bg-green-700 px-4 py-3 rounded-t-lg">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-white">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Popular Schemes
            </h2>
          </div>
          <ul className="divide-y divide-gray-100">
            {latestSchemes.map((scheme) => (
              <li key={scheme.slug}>
                <Link
                  href={`/sarkari-yojana/${scheme.slug}`}
                  className="block px-4 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-green-50 hover:text-green-700 line-clamp-2"
                >
                  {scheme.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-200 px-4 py-2">
            <Link
              href="/sarkari-yojana"
              className="text-xs font-medium text-green-700 hover:text-green-800"
            >
              View All Schemes &rarr;
            </Link>
          </div>
        </div>
      )}

      {/* Job Categories */}
      {jobCategories.length > 0 && (
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 bg-gray-800 px-4 py-3 rounded-t-lg">
            <h2 className="text-sm font-semibold text-white">Job Categories</h2>
          </div>
          <ul className="divide-y divide-gray-100">
            {jobCategories.map((category) => (
              <li key={category.href}>
                <Link
                  href={category.href}
                  className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-700"
                >
                  <span>{category.label}</span>
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                    {category.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* States */}
      <SidebarStates />
    </aside>
  );
}
