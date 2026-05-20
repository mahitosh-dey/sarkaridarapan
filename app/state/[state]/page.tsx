import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import JobCard from "@/components/ui/JobCard";
import SchemeCard from "@/components/ui/SchemeCard";
import Sidebar from "@/components/layout/Sidebar";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { getJobsByState, getSchemesByState } from "@/lib/content";
import { SITE_NAME, SITE_URL, STATES } from "@/lib/constants";

interface StatePageProps {
  params: { state: string };
}

export async function generateStaticParams() {
  return STATES.map((state) => ({
    state: state.slug,
  }));
}

export async function generateMetadata({ params }: StatePageProps): Promise<Metadata> {
  const stateData = STATES.find((s) => s.slug === params.state);
  if (!stateData) return { title: "State Not Found" };

  return {
    title: `${stateData.name} Government Jobs & Schemes 2025`,
    description: `Latest government jobs and sarkari yojana in ${stateData.name}. Find state government vacancies, central govt jobs, and government schemes available in ${stateData.name}.`,
    alternates: {
      canonical: `${SITE_URL}/state/${params.state}`,
    },
    openGraph: {
      title: `${stateData.name} Government Jobs & Schemes 2025 | ${SITE_NAME}`,
      description: `Latest government jobs and sarkari yojana in ${stateData.name}.`,
      url: `${SITE_URL}/state/${params.state}`,
      type: "website",
    },
  };
}

export default async function StatePage({ params }: StatePageProps) {
  const stateData = STATES.find((s) => s.slug === params.state);

  if (!stateData) {
    notFound();
  }

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

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "States", href: "/#states" },
    { label: stateData.name },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          {stateData.name} - Government Jobs &amp; Schemes
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
              <button
                className="px-6 py-3 text-sm font-semibold border-b-2 border-blue-700 text-blue-700 bg-white"
                id="jobs-tab"
              >
                Government Jobs ({stateJobs.length})
              </button>
              <button
                className="px-6 py-3 text-sm font-semibold border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                id="schemes-tab"
              >
                Government Schemes ({stateSchemes.length})
              </button>
            </div>
          </div>

          {/* Government Jobs Section */}
          <section className="mb-12">
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
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">No Jobs Available</h3>
                <p className="text-gray-500">
                  No government jobs are currently listed for {stateData.name}. Check back soon for updates.
                </p>
              </div>
            )}
          </section>

          {/* Government Schemes Section */}
          <section className="mb-12">
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
