// =============================================================================
// Admin Utilities — shared helpers for job, scheme, and exam admin flows
// =============================================================================

export type ContentType = "job" | "scheme" | "entrance-exam";

export function generateSlug(title: string): string {
  let text = title.toLowerCase().trim();
  text = text.replace(/[^a-z0-9\s-]/g, "");
  text = text.replace(/[\s-]+/g, "-").replace(/^-|-$/g, "");
  const year = new Date().getFullYear().toString();
  if (!text.endsWith(year)) {
    text = `${text}-${year}`;
  }
  return text;
}

export function getApiBasePath(contentType: ContentType): string {
  switch (contentType) {
    case "job":
      return "/api/admin/quality-check";
    case "scheme":
      return "/api/admin/schemes";
    case "entrance-exam":
      return "/api/admin/entrance-exams";
  }
}

export function getIdFieldName(contentType: ContentType): string {
  switch (contentType) {
    case "job":
      return "jobId";
    case "scheme":
      return "schemeId";
    case "entrance-exam":
      return "examId";
  }
}

export function getTableName(contentType: ContentType): string {
  switch (contentType) {
    case "job":
      return "jobs";
    case "scheme":
      return "schemes";
    case "entrance-exam":
      return "entrance_exams";
  }
}

export function getRevalidateTag(contentType: ContentType): string {
  switch (contentType) {
    case "job":
      return "all-jobs";
    case "scheme":
      return "all-schemes";
    case "entrance-exam":
      return "all-entrance-exams";
  }
}

export function getPublicPath(contentType: ContentType, slug: string): string {
  switch (contentType) {
    case "job":
      return `/sarkari-naukri/${slug}`;
    case "scheme":
      return `/sarkari-yojana/${slug}`;
    case "entrance-exam":
      return `/entrance-exams/${slug}`;
  }
}
