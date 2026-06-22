import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import JobCard from "@/components/ui/JobCard";
import SchemeCard from "@/components/ui/SchemeCard";
import Sidebar from "@/components/layout/Sidebar";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { getJobsByState, getSchemesByState } from "@/lib/content";
import { SITE_NAME, SITE_URL, STATES, REVALIDATE_INTERVAL } from "@/lib/constants";

export const revalidate = REVALIDATE_INTERVAL;

interface StatePageProps {
  params: { state: string };
  searchParams: { tab?: string };
}

export async function generateStaticParams() {
  return STATES.map((state) => ({
    state: state.slug,
  }));
}

export async function generateMetadata({ params }: StatePageProps): Promise<Metadata> {
  const stateData = STATES.find((s) => s.slug === params.state);
  if (!stateData) return { title: "State Not Found" };

  const [jobs, schemes] = await Promise.all([
    getJobsByState(params.state).catch(() => []),
    getSchemesByState(params.state).catch(() => []),
  ]);
  const totalCount = jobs.length + schemes.length;

  // No jobs at all — hard noindex + nofollow (thin page with zero content)
  // Some content but below threshold — noindex but follow
  // Enough content — fully indexed
  const robots =
    jobs.length === 0
      ? { index: false, follow: false }
      : totalCount < 5
        ? { index: false, follow: true }
        : { index: true, follow: true };

  return {
    title: `${stateData.name} Government Jobs & Schemes 2026`,
    description: `Latest government jobs and sarkari yojana in ${stateData.name}. Find state government vacancies, central govt jobs, and government schemes available in ${stateData.name}.`,
    alternates: {
      canonical: `${SITE_URL}/state/${params.state}`,
    },
    robots,
    openGraph: {
      title: `${stateData.name} Government Jobs & Schemes 2026 | ${SITE_NAME}`,
      description: `Latest government jobs and sarkari yojana in ${stateData.name}.`,
      url: `${SITE_URL}/state/${params.state}`,
      type: "website",
    },
  };
}

export default async function StatePage({ params, searchParams }: StatePageProps) {
  const stateData = STATES.find((s) => s.slug === params.state);

  if (!stateData) {
    notFound();
  }

  const activeTab = searchParams.tab === "schemes" ? "schemes" : "jobs";

  let stateJobs: import("@/lib/types").JobPost[] = [];
  let stateSchemes: import("@/lib/types").SchemePost[] = [];

  try {
    stateJobs = await getJobsByState(params.state);
  } catch {
    stateJobs = [];
  }

  try {
    stateSchemes = await getSchemesByState(params.state);
  } catch {
    stateSchemes = [];
  }

  // Fetch all-india fallback jobs only when this state has none
  let fallbackJobs: import("@/lib/types").JobPost[] = [];
  if (stateJobs.length === 0) {
    try {
      const allIndia = await getJobsByState("all-india");
      fallbackJobs = allIndia.slice(0, 5);
    } catch {
      fallbackJobs = [];
    }
  }

  const breadcrumbs = [
    { label: `${stateData.name} Government Jobs & Schemes` },
  ];

  const jobsHref    = `/state/${params.state}`;
  const schemesHref = `/state/${params.state}?tab=schemes`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: `${stateData.name} Government Jobs`, url: `${SITE_URL}/state/${params.state}` },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          {stateData.name} — Government Jobs &amp; Schemes
        </h1>
        <p className="text-gray-600 text-lg">
          Browse all government job vacancies and sarkari yojana available in {stateData.name}.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="flex border-b border-gray-200">
              <a
                href={jobsHref}
                className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === "jobs"
                    ? "border-blue-700 text-blue-700 bg-white"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Government Jobs ({stateJobs.length})
              </a>
              <a
                href={schemesHref}
                className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === "schemes"
                    ? "border-blue-700 text-blue-700 bg-white"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Government Schemes ({stateSchemes.length})
              </a>
            </div>
          </div>

          {/* Government Jobs Tab */}
          {activeTab === "jobs" && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Government Jobs in {stateData.name}
              </h2>

              {stateJobs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {stateJobs.map((job) => (
                    <JobCard key={job.slug} job={job} />
                  ))}
                </div>
              ) : (
                <>
                  {/* Empty state message */}
                  <div className="rounded-lg border border-amber-200 bg-amber-50 px-5 py-4 mb-8">
                    <p className="text-amber-800 text-sm font-medium">
                      No jobs currently available for {stateData.name}. Browse all-India jobs below.
                    </p>
                  </div>

                  {/* All-India fallback */}
                  {fallbackJobs.length > 0 && (
                    <>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        All-India Government Jobs — open to candidates from all states
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
            </section>
          )}

          {/* Government Schemes Tab */}
          {activeTab === "schemes" && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Government Schemes in {stateData.name}
              </h2>
              {stateSchemes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {stateSchemes.map((scheme) => (
                    <SchemeCard key={scheme.slug} scheme={scheme} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">No Schemes Available</h3>
                  <p className="text-gray-500">
                    No government schemes are currently listed for {stateData.name}. Check back soon for updates.
                  </p>
                </div>
              )}
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
