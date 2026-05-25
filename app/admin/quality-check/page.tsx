import { supabaseAdmin } from "@/lib/supabase-admin";
import type { Metadata } from "next";
import AdminActions from "./AdminActions";
import ManualJobForm from "./ManualJobForm";

export const metadata: Metadata = {
  title: "Quality Check Dashboard | SarkariDarapan Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

interface DashboardJob {
  id: string;
  slug: string;
  title: string;
  organization: string;
  quality_flag: string[] | null;
  updated_at: string;
  completeness_score: number | null;
  content: string | null;
}

function jobHasContent(job: DashboardJob): boolean {
  return !!job.content && job.content.trim() !== "";
}

function FlagBadges({ flags }: { flags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {flags.map((flag, i) => {
        let color = "bg-yellow-100 text-yellow-800";
        if (flag === "no_issues") {
          color = "bg-green-100 text-green-800";
        } else if (flag.includes("hallucinated") || flag.includes("salary_mismatch")) {
          color = "bg-red-100 text-red-800";
        } else if (flag.includes("word_count")) {
          color = "bg-orange-100 text-orange-800";
        } else if (flag.includes("official_link")) {
          color = "bg-blue-100 text-blue-800";
        } else if (flag === "manual_draft") {
          color = "bg-purple-100 text-purple-800";
        }
        return (
          <span
            key={i}
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color}`}
          >
            {flag}
          </span>
        );
      })}
    </div>
  );
}

function JobCard({
  job,
  showGenerate,
}: {
  job: DashboardJob;
  showGenerate: boolean;
}) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-semibold text-gray-900 truncate">
            {job.title}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {job.organization || "No organization"} &middot; Score:{" "}
            {job.completeness_score ?? "N/A"} &middot; Updated:{" "}
            {new Date(job.updated_at).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
          {job.quality_flag && job.quality_flag.length > 0 && (
            <FlagBadges flags={job.quality_flag} />
          )}
        </div>
        <AdminActions
          jobId={job.id}
          slug={job.slug}
          hasContent={!showGenerate}
        />
      </div>
    </div>
  );
}

export default async function QualityCheckPage() {
  // Single query: all flagged/draft jobs not yet reviewed
  const { data: jobs, error } = await supabaseAdmin
    .from("jobs")
    .select(
      "id, slug, title, organization, quality_flag, updated_at, completeness_score, content"
    )
    .eq("is_active", false)
    .is("reviewed_at", null)
    .not("quality_flag", "is", null)
    .order("updated_at", { ascending: false });

  const allJobs: DashboardJob[] = (jobs as DashboardJob[]) || [];

  // Split client-side: drafts have no content, flagged jobs have content
  const draftJobs = allJobs.filter(
    (j) => !j.content || j.content.trim() === ""
  );
  const flaggedJobs = allJobs.filter(
    (j) => j.content && j.content.trim() !== ""
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Quality Check Dashboard
            </h1>
            <p className="mt-2 text-gray-600">
              {draftJobs.length} draft{draftJobs.length !== 1 ? "s" : ""} pending
              content &middot; {flaggedJobs.length} flagged job
              {flaggedJobs.length !== 1 ? "s" : ""} pending review
            </p>
          </div>
          <a
            href="/admin/posts"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            All Posts
          </a>
        </div>
        {error && (
          <p className="mb-4 text-red-600 text-sm">
            Error loading jobs: {error.message}
          </p>
        )}

        {/* Quick Entry Form */}
        <ManualJobForm />

        {/* Section 1: Drafts needing content generation */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Drafts Pending Content
            </h2>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              {draftJobs.length}
            </span>
          </div>
          {draftJobs.length === 0 ? (
            <div className="bg-white rounded-lg border border-dashed border-gray-300 p-8 text-center">
              <p className="text-gray-500">
                No drafts pending. Use the form above to add a new job, then
                click &quot;Generate Content&quot; to create the article.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {draftJobs.map((job) => (
                <JobCard key={job.id} job={job} showGenerate />
              ))}
            </div>
          )}
        </section>

        {/* Section 2: Flagged jobs needing review */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Flagged Jobs Pending Review
            </h2>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              {flaggedJobs.length}
            </span>
          </div>
          {flaggedJobs.length === 0 ? (
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <p className="text-gray-500">
                No flagged jobs pending review.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {flaggedJobs.map((job) => (
                <JobCard key={job.id} job={job} showGenerate={false} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
