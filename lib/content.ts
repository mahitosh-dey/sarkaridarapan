// =============================================================================
// Content Utilities - SarkariDarapan
//
// Reads content from data/*.json, bundled at build time. See lib/static-data.ts
// for why this no longer queries Supabase directly.
//
// Every function below keeps its previous async signature so callers did not
// have to change, even though nothing here awaits I/O any more.
// =============================================================================

import {
  activeJobs,
  activeSchemes,
  activeExams,
  jobBySlug,
  schemeBySlug,
  examBySlug,
  eqi,
  rowCounts,
  type Row,
} from "./static-data";
import type { JobPost, SchemePost, EntranceExamPost } from "./types";

// =============================================================================
// Row → Interface mappers (snake_case DB → camelCase TypeScript)
// =============================================================================

/* eslint-disable */

function mapJobRow(row: any): JobPost {
  return {
    slug: row.slug,
    title: row.title,
    organization: row.organization || "",
    postName: row.post_name || "",
    vacancies: row.vacancies || 0,
    eligibility: row.eligibility || {},
    salary: row.salary || "",
    applicationFee: row.application_fee ?? "",
    importantDates: row.important_dates || {},
    howToApply: row.how_to_apply || "",
    selectionProcess: row.selection_process ?? "",
    officialLink: row.official_link || "",
    notificationLink: row.notification_link || "",
    applyLink: row.apply_link || "",
    category: row.category || "",
    state: row.state || "",
    isActive: row.is_active ?? true,
    publishedAt: row.published_at || "",
    updatedAt: row.updated_at || "",
    description: row.description || "",
    content: row.content || "",
    readingTime: row.reading_time || "",
    image: row.image || undefined,
    lastDate: row.last_date || undefined,
    notificationStatus: row.notification_status ?? null,
    qualification: row.qualification || undefined,
    employmentType: row.employment_type || undefined,
    qualityFlag: row.quality_flag || null,
    reviewedAt: row.reviewed_at || null,
    verifiedAt: row.verified_at || null,
  };
}

function mapSchemeRow(row: any): SchemePost {
  return {
    notificationStatus: row.notification_status ?? null,
    slug: row.slug,
    title: row.title,
    ministry: row.ministry || "",
    launchedBy: row.launched_by || "",
    objective: row.objective || "",
    eligibility: row.eligibility || [],
    benefits: row.benefits || [],
    documents: row.documents || [],
    howToApply: row.how_to_apply || "",
    officialPortal: row.official_portal || "",
    helplineNumber: row.helpline_number || "",
    category: row.category || "",
    state: row.state || "",
    publishedAt: row.published_at || "",
    updatedAt: row.updated_at || "",
    description: row.description || "",
    content: row.content || "",
    readingTime: row.reading_time || "",
    image: row.image || undefined,
    faqs: row.faqs || undefined,
    verifiedAt: row.verified_at || null,
  };
}

function mapEntranceExamRow(row: any): EntranceExamPost {
  return {
    slug: row.slug,
    title: row.title,
    conductingBody: row.conducting_body || "",
    examDate: row.exam_date || "",
    notificationStatus: row.notification_status ?? null,
    applicationStart: row.application_start || "",
    applicationEnd: row.application_end || "",
    eligibility: row.eligibility || "",
    syllabus: row.syllabus || "",
    examPattern: row.exam_pattern || null,
    admitCardLink: row.admit_card_link || "",
    resultLink: row.result_link || "",
    officialLink: row.official_link || "",
    category: row.category || "",
    state: row.state || "",
    content: row.content || "",
    description: row.description || "",
    isActive: row.is_active ?? true,
    publishedAt: row.published_at || "",
    updatedAt: row.updated_at || "",
    readingTime: row.reading_time || "",
    image: row.image || undefined,
    qualityFlag: row.quality_flag || null,
    reviewedAt: row.reviewed_at || null,
    verifiedAt: row.verified_at || null,
  };
}

/* eslint-enable */

// =============================================================================
// Missing data is still an error
//
// These helpers date from the 2026-09-01 outage, when a failed fetch returned
// [] and the empty result was rendered and cached as though the site were
// genuinely empty. Reading from bundled JSON removes that failure mode: the
// data either ships with the build or the build does not exist.
//
// They are kept, and still exported, because one failure mode remains. If
// data/*.json is emptied, deleted, or regenerated from a bad export, every
// query here goes quiet and returns nothing. The guard in app/sitemap.ts calls
// raiseUnavailable in that case so the build FAILS instead of publishing a
// site with no content. app/page.tsx and the listing pages use
// rethrowIfUnavailable for the same reason.
// =============================================================================

export class ContentUnavailableError extends Error {
  constructor(label: string, cause?: string) {
    super(`Content source unavailable while fetching ${label}${cause ? `: ${cause}` : ""}`);
    this.name = "ContentUnavailableError";
  }
}

export function isContentUnavailable(e: unknown): e is ContentUnavailableError {
  return e instanceof ContentUnavailableError;
}

// Use in a catch around a PRIMARY content fetch: the thing a page is about, or
// anything feeding the sitemap. Do NOT use around SECONDARY content such as
// related jobs, sidebars or fallback listings, which should degrade quietly
// rather than take a page down.
export function rethrowIfUnavailable(e: unknown): void {
  if (isContentUnavailable(e)) throw e;
}

// Escape hatch, retained from the outage. ALLOW_DEGRADED_BUILD=1 downgrades a
// missing-content failure to a logged error so an unrelated emergency fix can
// still ship. It publishes an empty site by design.
const ALLOW_DEGRADED_BUILD = process.env.ALLOW_DEGRADED_BUILD === "1";

export function raiseUnavailable(label: string, cause?: string): void {
  if (ALLOW_DEGRADED_BUILD) {
    console.error(
      `ALLOW_DEGRADED_BUILD: content source failed for ${label} (${cause}). ` +
        `Continuing with EMPTY data. This will publish an empty page or sitemap.`
    );
    return;
  }
  throw new ContentUnavailableError(label, cause);
}

// Fails the build if the data files are present but hold nothing. Called by
// the sitemap guard.
export function assertContentPresent(): void {
  const c = rowCounts();
  if (c.jobs + c.schemes + c.exams + c.blogPosts === 0) {
    raiseUnavailable(
      "static content",
      "data/*.json contain no rows; regenerate with scripts/csv-to-static-json.py"
    );
  }
}

// =============================================================================
// Jobs
// =============================================================================

export async function getJobPosts(): Promise<JobPost[]> {
  return activeJobs().map(mapJobRow);
}

export async function getJobBySlug(slug: string): Promise<JobPost | null> {
  const row = jobBySlug(slug);
  return row ? mapJobRow(row) : null;
}

// =============================================================================
// Schemes
// =============================================================================

export async function getSchemePosts(): Promise<SchemePost[]> {
  return activeSchemes().map(mapSchemeRow);
}

export async function getSchemeBySlug(slug: string): Promise<SchemePost | null> {
  const row = schemeBySlug(slug);
  return row ? mapSchemeRow(row) : null;
}

// =============================================================================
// Entrance exams
// =============================================================================

export async function getEntranceExamPosts(): Promise<EntranceExamPost[]> {
  return activeExams().map(mapEntranceExamRow);
}

export async function getEntranceExamBySlug(
  slug: string
): Promise<EntranceExamPost | null> {
  const row = examBySlug(slug);
  return row ? mapEntranceExamRow(row) : null;
}

// =============================================================================
// Filtering
//
// eqi is case-insensitive equality, matching the previous .ilike() calls which
// carried no wildcards.
// =============================================================================

export async function getJobsByCategory(category: string): Promise<JobPost[]> {
  return activeJobs()
    .filter((r) => eqi(r.category, category))
    .map(mapJobRow);
}

export async function getJobsByState(state: string): Promise<JobPost[]> {
  return activeJobs()
    .filter((r) => eqi(r.state, state))
    .map(mapJobRow);
}

export async function getSchemesByCategory(category: string): Promise<SchemePost[]> {
  return activeSchemes()
    .filter((r) => eqi(r.category, category))
    .map(mapSchemeRow);
}

// State pages show the state's own schemes plus all-India central ones, which
// is what the previous .or(state.ilike.X, state.ilike.all-india) did.
export async function getSchemesByState(state: string): Promise<SchemePost[]> {
  return activeSchemes()
    .filter((r) => eqi(r.state, state) || eqi(r.state, "all-india"))
    .map(mapSchemeRow);
}

export async function getEntranceExamsByCategory(
  category: string
): Promise<EntranceExamPost[]> {
  return activeExams()
    .filter((r) => eqi(r.category, category))
    .map(mapEntranceExamRow);
}

// =============================================================================
// Facets
// =============================================================================

export async function getAllCategories(): Promise<{
  jobs: string[];
  schemes: string[];
}> {
  const uniq = (rows: Row[]) =>
    [...new Set(rows.map((r) => r.category).filter(Boolean))].sort() as string[];
  return { jobs: uniq(activeJobs()), schemes: uniq(activeSchemes()) };
}

export async function getActiveStates(): Promise<string[]> {
  const states = new Set<string>();
  for (const r of [...activeJobs(), ...activeSchemes()]) {
    if (r.state) states.add(r.state);
  }
  return [...states].sort();
}

// =============================================================================
// Search
//
// Replaces the search_content Postgres RPC and its ILIKE fallback. Both did a
// case-insensitive substring match over the same fields, which is what this
// does directly over the bundled rows.
// =============================================================================

export type SearchResult = {
  type: "job" | "scheme";
  slug: string;
  title: string;
  description: string;
  category: string;
  state: string;
  publishedAt: string;
};

export async function searchContent(query: string): Promise<SearchResult[]> {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const hit = (...fields: unknown[]) =>
    fields.some((f) => typeof f === "string" && f.toLowerCase().includes(q));

  const jobHits: SearchResult[] = activeJobs()
    .filter((r) => hit(r.title, r.description, r.organization, r.post_name))
    .map((r) => ({
      type: "job" as const,
      slug: r.slug,
      title: r.title,
      description: r.description || "",
      category: r.category || "",
      state: r.state || "",
      publishedAt: r.published_at || "",
    }));

  const schemeHits: SearchResult[] = activeSchemes()
    .filter((r) => hit(r.title, r.description, r.ministry))
    .map((r) => ({
      type: "scheme" as const,
      slug: r.slug,
      title: r.title,
      description: r.description || "",
      category: r.category || "",
      state: r.state || "",
      publishedAt: r.published_at || "",
    }));

  return [...jobHits, ...schemeHits].sort((a, b) =>
    a.publishedAt === b.publishedAt ? 0 : a.publishedAt > b.publishedAt ? -1 : 1
  );
}
