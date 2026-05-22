import { supabaseAdmin } from "@/lib/supabase-admin";
import type { Metadata } from "next";
import AdminActions from "./AdminActions";

export const metadata: Metadata = {
  title: "Quality Check Dashboard | SarkariDarapan Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

interface FlaggedJob {
  id: string;
  slug: string;
  title: string;
  organization: string;
  quality_flag: string[];
  updated_at: string;
  completeness_score: number | null;
}

export default async function QualityCheckPage() {
  const { data: jobs, error } = await supabaseAdmin
    .from("jobs")
    .select(
      "id, slug, title, organization, quality_flag, updated_at, completeness_score"
    )
    .not("quality_flag", "is", null)
    .is("reviewed_at", null)
    .order("updated_at", { ascending: false });

  const flaggedJobs: FlaggedJob[] = (jobs as FlaggedJob[]) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Quality Check Dashboard
          </h1>
          <p className="mt-2 text-gray-600">
            {flaggedJobs.length} flagged job
            {flaggedJobs.length !== 1 ? "s" : ""} pending review
          </p>
          {error && (
            <p className="mt-2 text-red-600 text-sm">
              Error loading jobs: {error.message}
            </p>
          )}
        </div>

        {/* Jobs List */}
        {flaggedJobs.length === 0 ? (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <p className="text-gray-500 text-lg">
              No flagged jobs pending review.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {flaggedJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg border border-gray-200 shadow-sm p-5"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  {/* Job Info */}
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

                    {/* Flags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {(job.quality_flag || []).map((flag, i) => {
                        let color = "bg-yellow-100 text-yellow-800";
                        if (flag.includes("hallucinated") || flag.includes("salary_mismatch")) {
                          color = "bg-red-100 text-red-800";
                        } else if (flag.includes("word_count")) {
                          color = "bg-orange-100 text-orange-800";
                        } else if (flag.includes("official_link")) {
                          color = "bg-blue-100 text-blue-800";
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
                  </div>

                  {/* Actions */}
                  <AdminActions jobId={job.id} slug={job.slug} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
