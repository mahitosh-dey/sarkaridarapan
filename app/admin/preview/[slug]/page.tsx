import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase-admin";
import JobDetail from "@/components/content/JobDetail";
import MarkdownContent from "@/components/content/MarkdownContent";
import type { JobPost } from "@/lib/types";
import PreviewActions from "./PreviewActions";

export const metadata: Metadata = {
  title: "Admin Preview | SarkariDarapan",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

interface PreviewPageProps {
  params: { slug: string };
}

function mapRow(row: Record<string, unknown>): JobPost {
  return {
    slug: row.slug as string,
    title: row.title as string,
    organization: (row.organization as string) || "",
    postName: (row.post_name as string) || "",
    vacancies: (row.vacancies as number) || 0,
    eligibility: (row.eligibility as JobPost["eligibility"]) || { age: "", education: "" },
    salary: (row.salary as string) || "",
    applicationFee: (row.application_fee as JobPost["applicationFee"]) ?? "",
    importantDates: (row.important_dates as JobPost["importantDates"]) || { startDate: "", lastDate: "" },
    howToApply: (row.how_to_apply as string) || "",
    selectionProcess: (row.selection_process as JobPost["selectionProcess"]) ?? "",
    officialLink: (row.official_link as string) || "",
    notificationLink: (row.notification_link as string) || "",
    applyLink: (row.apply_link as string) || "",
    category: (row.category as string) || "",
    state: (row.state as string) || "",
    isActive: (row.is_active as boolean) ?? false,
    publishedAt: (row.published_at as string) || "",
    updatedAt: (row.updated_at as string) || "",
    description: (row.description as string) || "",
    content: (row.content as string) || "",
    readingTime: (row.reading_time as string) || "",
    image: (row.image as string) || undefined,
    lastDate: (row.last_date as string) || undefined,
    qualification: (row.qualification as string) || undefined,
    qualityFlag: (row.quality_flag as string[]) || null,
    reviewedAt: (row.reviewed_at as string) || null,
  };
}

export default async function AdminPreviewPage({ params }: PreviewPageProps) {
  const { data, error } = await supabaseAdmin
    .from("jobs")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (error || !data) {
    notFound();
  }

  const job = mapRow(data);
  const hasContent = !!job.content && job.content.trim() !== "";

  const statusLabel = job.isActive
    ? "Published"
    : hasContent
      ? "Draft (content generated)"
      : "Draft (no content)";

  const statusColor = job.isActive
    ? "bg-green-100 text-green-800 border-green-200"
    : hasContent
      ? "bg-yellow-100 text-yellow-800 border-yellow-200"
      : "bg-gray-100 text-gray-800 border-gray-200";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Admin Banner */}
      <div className={`mb-6 p-4 rounded-lg border ${statusColor}`}>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <p className="text-sm font-semibold">Admin Preview</p>
              <p className="text-sm">
                Status: {statusLabel}
                {job.qualityFlag && job.qualityFlag.length > 0 && (
                  <span className="ml-2">
                    | Flags: {job.qualityFlag.join(", ")}
                  </span>
                )}
              </p>
            </div>
          </div>
          <PreviewActions
            jobId={data.id}
            slug={job.slug}
            hasContent={hasContent}
            initialContent={job.content}
            isActive={job.isActive}
          />
        </div>
      </div>

      {/* Job Content */}
      <article className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 md:p-8">
          <JobDetail job={job} />

          {hasContent && (
            <section className="mt-8 border-t border-gray-200 pt-8">
              <MarkdownContent content={job.content} />
            </section>
          )}

          {!hasContent && (
            <div className="mt-8 p-8 bg-gray-50 rounded-lg text-center">
              <p className="text-gray-500">
                No content generated yet. Click &quot;Generate Content&quot;
                above to create an article for this job.
              </p>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
