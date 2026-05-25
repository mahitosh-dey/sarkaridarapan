import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase-admin";
import JobDetail from "@/components/content/JobDetail";
import SchemeDetail from "@/components/content/SchemeDetail";
import MarkdownContent from "@/components/content/MarkdownContent";
import type { JobPost, SchemePost, EntranceExamPost } from "@/lib/types";
import type { ContentType } from "@/lib/admin-utils";
import PreviewActions from "./PreviewActions";

export const metadata: Metadata = {
  title: "Admin Preview | SarkariDarapan",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

interface PreviewPageProps {
  params: { slug: string };
  searchParams: { type?: string };
}

function mapJobRow(row: Record<string, unknown>): JobPost {
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

function mapSchemeRow(row: Record<string, unknown>): SchemePost {
  return {
    slug: row.slug as string,
    title: row.title as string,
    ministry: (row.ministry as string) || "",
    launchedBy: (row.launched_by as string) || "",
    objective: (row.objective as string) || "",
    eligibility: (row.eligibility as string[]) || [],
    benefits: (row.benefits as string[]) || [],
    documents: (row.documents as string[]) || [],
    howToApply: (row.how_to_apply as string) || "",
    officialPortal: (row.official_portal as string) || "",
    helplineNumber: (row.helpline_number as string) || "",
    category: (row.category as string) || "",
    state: (row.state as string) || "",
    publishedAt: (row.published_at as string) || "",
    updatedAt: (row.updated_at as string) || "",
    description: (row.description as string) || "",
    content: (row.content as string) || "",
    readingTime: (row.reading_time as string) || "",
    image: (row.image as string) || undefined,
    faqs: (row.faqs as SchemePost["faqs"]) || undefined,
    isActive: (row.is_active as boolean) ?? false,
    qualityFlag: (row.quality_flag as string[]) || null,
    reviewedAt: (row.reviewed_at as string) || null,
  };
}

function mapExamRow(row: Record<string, unknown>): EntranceExamPost {
  return {
    slug: row.slug as string,
    title: row.title as string,
    conductingBody: (row.conducting_body as string) || "",
    examDate: (row.exam_date as string) || "",
    applicationStart: (row.application_start as string) || "",
    applicationEnd: (row.application_end as string) || "",
    eligibility: (row.eligibility as string) || "",
    syllabus: (row.syllabus as string) || "",
    examPattern: (row.exam_pattern as Record<string, unknown>) || null,
    admitCardLink: (row.admit_card_link as string) || "",
    resultLink: (row.result_link as string) || "",
    officialLink: (row.official_link as string) || "",
    category: (row.category as string) || "",
    state: (row.state as string) || "",
    content: (row.content as string) || "",
    description: (row.description as string) || "",
    isActive: (row.is_active as boolean) ?? false,
    publishedAt: (row.published_at as string) || "",
    updatedAt: (row.updated_at as string) || "",
    readingTime: (row.reading_time as string) || "",
    image: (row.image as string) || undefined,
    qualityFlag: (row.quality_flag as string[]) || null,
    reviewedAt: (row.reviewed_at as string) || null,
  };
}

function ExamDetailSection({ exam }: { exam: EntranceExamPost }) {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-sm font-medium uppercase tracking-wider text-blue-600 mb-2">
          {exam.conductingBody}
        </p>
        <h1 className="text-2xl font-bold text-gray-900 leading-tight sm:text-3xl">
          {exam.title}
        </h1>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            {exam.category}
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
            {exam.state}
          </span>
        </div>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {exam.examDate && (
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-xs font-medium text-gray-500 uppercase">Exam Date</p>
            <p className="mt-1 text-sm font-semibold text-gray-900">{exam.examDate}</p>
          </div>
        )}
        {exam.applicationStart && (
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-xs font-medium text-gray-500 uppercase">Application Start</p>
            <p className="mt-1 text-sm font-semibold text-gray-900">{exam.applicationStart}</p>
          </div>
        )}
        {exam.applicationEnd && (
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-xs font-medium text-gray-500 uppercase">Application End</p>
            <p className="mt-1 text-sm font-semibold text-gray-900">{exam.applicationEnd}</p>
          </div>
        )}
        {exam.officialLink && (
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-xs font-medium text-gray-500 uppercase">Official Website</p>
            <a href={exam.officialLink} target="_blank" rel="noopener noreferrer" className="mt-1 text-sm font-semibold text-blue-600 hover:underline truncate block">
              {exam.officialLink.replace(/^https?:\/\//, "")}
            </a>
          </div>
        )}
      </div>

      {exam.eligibility && (
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Eligibility</h2>
          <p className="text-sm text-gray-800">{exam.eligibility}</p>
        </div>
      )}
    </div>
  );
}

function getTableAndContentType(type: string): { table: string; contentType: ContentType } {
  switch (type) {
    case "scheme":
      return { table: "schemes", contentType: "scheme" };
    case "entrance-exam":
      return { table: "entrance_exams", contentType: "entrance-exam" };
    default:
      return { table: "jobs", contentType: "job" };
  }
}

export default async function AdminPreviewPage({ params, searchParams }: PreviewPageProps) {
  const type = searchParams.type || "job";
  const { table, contentType } = getTableAndContentType(type);

  const { data, error } = await supabaseAdmin
    .from(table)
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (error || !data) {
    notFound();
  }

  const isActive = (data.is_active as boolean) ?? false;
  const content = (data.content as string) || "";
  const hasContent = !!content && content.trim() !== "";
  const qualityFlag = (data.quality_flag as string[]) || null;

  const statusLabel = isActive
    ? "Published"
    : hasContent
      ? "Draft (content generated)"
      : "Draft (no content)";

  const statusColor = isActive
    ? "bg-green-100 text-green-800 border-green-200"
    : hasContent
      ? "bg-yellow-100 text-yellow-800 border-yellow-200"
      : "bg-gray-100 text-gray-800 border-gray-200";

  const typeLabel = contentType === "job" ? "Job" : contentType === "scheme" ? "Scheme" : "Entrance Exam";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Admin Banner */}
      <div className={`mb-6 p-4 rounded-lg border ${statusColor}`}>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <p className="text-sm font-semibold">Admin Preview — {typeLabel}</p>
              <p className="text-sm">
                Status: {statusLabel}
                {qualityFlag && qualityFlag.length > 0 && (
                  <span className="ml-2">
                    | Flags: {qualityFlag.join(", ")}
                  </span>
                )}
              </p>
            </div>
          </div>
          <PreviewActions
            itemId={String(data.id)}
            slug={String(data.slug)}
            hasContent={hasContent}
            initialContent={content}
            isActive={isActive}
            contentType={contentType}
          />
        </div>
      </div>

      {/* Content */}
      <article className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 md:p-8">
          {contentType === "job" && <JobDetail job={mapJobRow(data)} />}
          {contentType === "scheme" && <SchemeDetail scheme={mapSchemeRow(data)} />}
          {contentType === "entrance-exam" && <ExamDetailSection exam={mapExamRow(data)} />}

          {hasContent && (
            <section className="mt-8 border-t border-gray-200 pt-8">
              <MarkdownContent content={content} />
            </section>
          )}

          {!hasContent && (
            <div className="mt-8 p-8 bg-gray-50 rounded-lg text-center">
              <p className="text-gray-500">
                No content generated yet. Click &quot;Generate Content&quot;
                above to create an article for this {typeLabel.toLowerCase()}.
              </p>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
