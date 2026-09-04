// =============================================================================
// Content Utilities - SarkariDarapan
// Reads content from Supabase PostgreSQL
// =============================================================================

import { unstable_cache } from "next/cache";
import { supabaseContent as supabase } from "./supabase-content";
import { REVALIDATE_INTERVAL } from "./constants";
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
// Column projections for LIST queries
//
// List queries render cards: title, slug, dates, category. They never render
// the article body. Selecting "*" pulled the full `content` column, roughly
// 20KB on a 3000 word page, for every row of every list, across ~90 distinct
// cached list variants revalidating hourly. That exhausted the Supabase egress
// quota on 2026-09-01 and took the database offline for writes.
//
// The BySlug functions still select "*", because detail pages are where the
// body, eligibility, how_to_apply and selection_process are actually read.
//
// Keep these lists in sync with the mappers above. A column named here that
// does not exist in the table makes PostgREST fail the whole query, so
// listQuery falls back to "*" on an undefined-column error rather than
// returning an empty list and blanking the page.
//
// `notification_status` is deliberately NOT listed. It is an optional override
// column added by scripts/add-notification-status.sql, which has not been run.
// Naming a column that does not exist would make every list query fail its
// projection and retry as select("*"), which is the exact cost this projection
// removes. The mappers already coalesce it to null and lib/notification-status.ts
// derives the status from structured fields when it is absent. If that migration
// is ever run and the override is wanted on list-driven surfaces (the sitemap
// filter is the only one), add the column to all three lists at that point.
// =============================================================================

const JOB_LIST_COLUMNS =
  "slug, title, organization, post_name, vacancies, salary, application_fee, " +
  "important_dates, official_link, notification_link, apply_link, category, " +
  "state, is_active, published_at, updated_at, description, reading_time, " +
  "image, last_date, qualification, employment_type, " +
  "quality_flag, reviewed_at, verified_at";

const SCHEME_LIST_COLUMNS =
  "slug, title, ministry, launched_by, objective, category, state, " +
  "published_at, updated_at, description, reading_time, image, " +
  "official_portal, helpline_number, verified_at";

const EXAM_LIST_COLUMNS =
  "slug, title, conducting_body, exam_date, application_start, " +
  "application_end, category, state, is_active, published_at, updated_at, " +
  "description, reading_time, image, official_link, " +
  "admit_card_link, result_link, quality_flag, reviewed_at, verified_at";

// =============================================================================
// Fetch failure vs no data
//
// On 2026-09-01 Supabase cut the project off for exceeding its egress quota.
// Every content fetch failed, every fetch returned [] or null, and the pages
// rendered as though the site were genuinely empty. Those empty renders were
// then cached by ISR, so a database outage became a CONTENT outage: detail
// pages served 200 with "Coming Soon" and noindex, which tells Google to drop
// pages it had already indexed, and listing pages served 200 with zero content
// and index,follow. The sitemap shrank from 216 URLs to 12.
//
// The bug was treating a failed query as an empty result. They are different
// things and must be handled differently:
//
//   query succeeded, 0 rows  -> genuinely empty, render it
//   query failed             -> throw ContentUnavailableError
//
// Throwing is what protects the site. When a render throws during ISR
// revalidation Next keeps serving the last good cached page, so an outage
// leaves existing pages untouched instead of overwriting them with an empty
// shell. With no cache to fall back on the route 500s, which Google treats as
// temporary and retries, unlike a 200 on an empty page.
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

// Use in a catch around a PRIMARY content fetch: the thing the page is about,
// or anything feeding the sitemap. Re-throws an outage so the page fails and
// ISR keeps the last good render, while still letting genuine per-page errors
// fall through to whatever local fallback the caller wants.
//
// Do NOT use around SECONDARY content (related jobs, sidebars, fallback
// listings). Those should degrade quietly rather than take the page down.
export function rethrowIfUnavailable(e: unknown): void {
  if (isContentUnavailable(e)) throw e;
}

// Escape hatch. With ALLOW_DEGRADED_BUILD=1 a content-source failure is logged
// loudly and treated as empty instead of throwing, which lets a build complete
// while the database is unreachable.
//
// This ships an EMPTY SITE and is the exact failure of 2026-09-01: empty pages
// cached by ISR, detail pages serving noindex, the sitemap cut to its static
// entries. Use it only to get an unrelated emergency fix out, never as a way
// around a database outage, and redeploy as soon as the source is back.
const ALLOW_DEGRADED_BUILD = process.env.ALLOW_DEGRADED_BUILD === "1";

// Throws unless the override is set. Callers return their empty value after
// calling this, which is only reached in degraded mode.
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

// PostgREST reports "no rows returned" from .single() as PGRST116. That is a
// genuine miss (bad slug) and must stay a 404, not an outage.
function isNoRowsError(error: { code?: string } | null): boolean {
  return error?.code === "PGRST116";
}

/* eslint-disable */

// Set of projections known to be rejected by the current schema. Once a
// projection fails we stop attempting it, so a schema gap costs one wasted
// round trip per process rather than one on every query.
const rejectedProjections = new Set<string>();

// Runs a projected list query, retrying with "*" if the projection names a
// column the table does not have. Throws ContentUnavailableError on a real
// failure; never returns [] to paper over one.
async function listQuery(
  build: (cols: string) => any,
  columns: string,
  label: string
): Promise<any[]> {
  if (rejectedProjections.has(columns)) {
    const { data, error } = await build("*");
    if (error) {
      raiseUnavailable(label, error.message);
      return [];
    }
    return data || [];
  }

  let { data, error } = await build(columns);

  const missingColumn =
    error &&
    (error.code === "42703" ||
      /column .* does not exist|does not exist on table/i.test(error.message || ""));

  if (missingColumn) {
    console.warn(
      `${label}: column projection rejected (${error.message}), falling back to select("*")`
    );
    rejectedProjections.add(columns);
    ({ data, error } = await build("*"));
  }

  if (error) {
    raiseUnavailable(label, error.message);
    return [];
  }
  return data || [];
}

/* eslint-enable */

// =============================================================================
// Job Posts — filtered by is_active=true (column exists on jobs table)
// =============================================================================

export const getJobPosts = unstable_cache(
  async (): Promise<JobPost[]> => {
    const rows = await listQuery(
      (cols) =>
        supabase
          .from("jobs")
          .select(cols)
          .eq("is_active", true)
          .order("published_at", { ascending: false }),
      JOB_LIST_COLUMNS,
      "jobs"
    );

    return rows.map(mapJobRow);
  },
  ["all-jobs"],
  { revalidate: REVALIDATE_INTERVAL, tags: ["jobs"] }
);

export async function getJobBySlug(slug: string): Promise<JobPost | null> {
  return unstable_cache(
    async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("slug", slug)
        .eq("is_active", true)
        .single();

      // A missing row is a real 404. Any other error is an outage and must
      // not be rendered as "this page does not exist".
      if (error && !isNoRowsError(error)) {
        raiseUnavailable(`job ${slug}`, error.message);
        return null;
      }
      if (!data) return null;

      return mapJobRow(data);
    },
    [`job-${slug}`],
    { revalidate: REVALIDATE_INTERVAL, tags: ["jobs", `job-${slug}`] }
  )();
}

// =============================================================================
// Scheme Posts — filtered by is_active=true
// =============================================================================

export const getSchemePosts = unstable_cache(
  async (): Promise<SchemePost[]> => {
    const rows = await listQuery(
      (cols) =>
        supabase
          .from("schemes")
          .select(cols)
          .eq("is_active", true)
          .order("published_at", { ascending: false }),
      SCHEME_LIST_COLUMNS,
      "schemes"
    );

    return rows.map(mapSchemeRow);
  },
  ["all-schemes"],
  { revalidate: REVALIDATE_INTERVAL, tags: ["schemes"] }
);

export async function getSchemeBySlug(
  slug: string
): Promise<SchemePost | null> {
  return unstable_cache(
    async () => {
      const { data, error } = await supabase
        .from("schemes")
        .select("*")
        .eq("slug", slug)
        .eq("is_active", true)
        .single();

      // A missing row is a real 404. Any other error is an outage and must
      // not be rendered as "this page does not exist".
      if (error && !isNoRowsError(error)) {
        raiseUnavailable(`scheme ${slug}`, error.message);
        return null;
      }
      if (!data) return null;

      return mapSchemeRow(data);
    },
    [`scheme-${slug}`],
    { revalidate: REVALIDATE_INTERVAL, tags: ["schemes", `scheme-${slug}`] }
  )();
}

// =============================================================================
// Filtering
// =============================================================================

export async function getJobsByCategory(category: string): Promise<JobPost[]> {
  return unstable_cache(
    async () => {
      const rows = await listQuery(
        (cols) =>
          supabase
            .from("jobs")
            .select(cols)
            .eq("is_active", true)
            .ilike("category", category)
            .order("published_at", { ascending: false }),
        JOB_LIST_COLUMNS,
        "jobs by category"
      );

      return rows.map(mapJobRow);
    },
    [`jobs-category-${category}`],
    { revalidate: REVALIDATE_INTERVAL, tags: ["jobs", `jobs-category-${category}`] }
  )();
}

export async function getJobsByState(state: string): Promise<JobPost[]> {
  return unstable_cache(
    async () => {
      const rows = await listQuery(
        (cols) =>
          supabase
            .from("jobs")
            .select(cols)
            .eq("is_active", true)
            .ilike("state", state)
            .order("published_at", { ascending: false }),
        JOB_LIST_COLUMNS,
        "jobs by state"
      );

      return rows.map(mapJobRow);
    },
    [`jobs-state-${state}`],
    { revalidate: REVALIDATE_INTERVAL, tags: ["jobs", `jobs-state-${state}`] }
  )();
}

export async function getSchemesByCategory(
  category: string
): Promise<SchemePost[]> {
  return unstable_cache(
    async () => {
      const rows = await listQuery(
        (cols) =>
          supabase
            .from("schemes")
            .select(cols)
            .eq("is_active", true)
            .ilike("category", category)
            .order("published_at", { ascending: false }),
        SCHEME_LIST_COLUMNS,
        "schemes by category"
      );

      return rows.map(mapSchemeRow);
    },
    [`schemes-category-${category}`],
    { revalidate: REVALIDATE_INTERVAL, tags: ["schemes", `schemes-category-${category}`] }
  )();
}

export async function getSchemesByState(
  state: string
): Promise<SchemePost[]> {
  return unstable_cache(
    async () => {
      // Include both state-specific schemes AND all-india central schemes
      const rows = await listQuery(
        (cols) =>
          supabase
            .from("schemes")
            .select(cols)
            .eq("is_active", true)
            .or(`state.ilike.${state},state.ilike.all-india`)
            .order("published_at", { ascending: false }),
        SCHEME_LIST_COLUMNS,
        "schemes by state"
      );

      return rows.map(mapSchemeRow);
    },
    [`schemes-state-${state}`],
    { revalidate: REVALIDATE_INTERVAL, tags: ["schemes", `schemes-state-${state}`] }
  )();
}

// =============================================================================
// Entrance Exam Posts — filtered by is_active=true
// =============================================================================

export const getEntranceExamPosts = unstable_cache(
  async (): Promise<EntranceExamPost[]> => {
    const rows = await listQuery(
      (cols) =>
        supabase
          .from("entrance_exams")
          .select(cols)
          .eq("is_active", true)
          .order("published_at", { ascending: false }),
      EXAM_LIST_COLUMNS,
      "entrance exams"
    );

    return rows.map(mapEntranceExamRow);
  },
  ["all-entrance-exams"],
  { revalidate: REVALIDATE_INTERVAL, tags: ["entrance-exams"] }
);

export async function getEntranceExamBySlug(
  slug: string
): Promise<EntranceExamPost | null> {
  return unstable_cache(
    async () => {
      const { data, error } = await supabase
        .from("entrance_exams")
        .select("*")
        .eq("slug", slug)
        .eq("is_active", true)
        .single();

      // A missing row is a real 404. Any other error is an outage and must
      // not be rendered as "this page does not exist".
      if (error && !isNoRowsError(error)) {
        raiseUnavailable(`entrance exam ${slug}`, error.message);
        return null;
      }
      if (!data) return null;

      return mapEntranceExamRow(data);
    },
    [`exam-${slug}`],
    { revalidate: REVALIDATE_INTERVAL, tags: ["entrance-exams", `exam-${slug}`] }
  )();
}

export async function getEntranceExamsByCategory(
  category: string
): Promise<EntranceExamPost[]> {
  return unstable_cache(
    async () => {
      const rows = await listQuery(
        (cols) =>
          supabase
            .from("entrance_exams")
            .select(cols)
            .eq("is_active", true)
            .ilike("category", category)
            .order("published_at", { ascending: false }),
        EXAM_LIST_COLUMNS,
        "exams by category"
      );

      return rows.map(mapEntranceExamRow);
    },
    [`exams-category-${category}`],
    { revalidate: REVALIDATE_INTERVAL, tags: ["entrance-exams", `exams-category-${category}`] }
  )();
}

// =============================================================================
// Aggregation
// =============================================================================

export async function getAllCategories(): Promise<{
  jobs: string[];
  schemes: string[];
}> {
  const [jobsRes, schemesRes] = await Promise.all([
    supabase.from("jobs").select("category").eq("is_active", true).order("category"),
    supabase.from("schemes").select("category").eq("is_active", true).order("category"),
  ]);

  const jobCategories = [
    ...new Set(
      (jobsRes.data || []).map((r: { category: string }) => r.category)
    ),
  ].sort();

  const schemeCategories = [
    ...new Set(
      (schemesRes.data || []).map((r: { category: string }) => r.category)
    ),
  ].sort();

  return { jobs: jobCategories, schemes: schemeCategories };
}

export async function getActiveStates(): Promise<string[]> {
  const [jobsRes, schemesRes] = await Promise.all([
    supabase.from("jobs").select("state").eq("is_active", true),
    supabase.from("schemes").select("state").eq("is_active", true),
  ]);

  const states = new Set<string>();
  (jobsRes.data || []).forEach((r: { state: string }) => states.add(r.state));
  (schemesRes.data || []).forEach((r: { state: string }) =>
    states.add(r.state)
  );

  return [...states].sort();
}

// =============================================================================
// Search
// =============================================================================

export async function searchContent(query: string): Promise<
  Array<{
    type: "job" | "scheme";
    slug: string;
    title: string;
    description: string;
    category: string;
    state: string;
    publishedAt: string;
  }>
> {
  const trimmed = query.trim();
  if (!trimmed) return [];

  // Try full-text search via RPC first.
  // The RPC may not filter by is_active internally, so we filter client-side
  // as a safety net to prevent draft content from leaking into results.
  const { data: rpcData, error: rpcError } = await supabase.rpc(
    "search_content",
    { search_query: trimmed }
  );

  if (!rpcError && rpcData && rpcData.length > 0) {
    return rpcData
      .filter((r: { is_active?: boolean }) => r.is_active !== false)
      .map(
        (r: {
          type: string;
          slug: string;
          title: string;
          description: string;
          category: string;
          state: string;
          published_at: string;
        }) => ({
          type: r.type as "job" | "scheme",
          slug: r.slug,
          title: r.title,
          description: r.description,
          category: r.category,
          state: r.state,
          publishedAt: r.published_at,
        })
      );
  }

  // Fallback: ILIKE search for partial word matches
  const pattern = `%${trimmed}%`;

  const [jobsRes, schemesRes] = await Promise.all([
    supabase
      .from("jobs")
      .select("slug, title, description, category, state, published_at")
      .eq("is_active", true)
      .or(
        `title.ilike.${pattern},description.ilike.${pattern},organization.ilike.${pattern},post_name.ilike.${pattern}`
      )
      .order("published_at", { ascending: false }),
    supabase
      .from("schemes")
      .select("slug, title, description, category, state, published_at")
      .eq("is_active", true)
      .or(
        `title.ilike.${pattern},description.ilike.${pattern},ministry.ilike.${pattern}`
      )
      .order("published_at", { ascending: false }),
  ]);

  const jobResults = (jobsRes.data || []).map(
    (r: {
      slug: string;
      title: string;
      description: string;
      category: string;
      state: string;
      published_at: string;
    }) => ({
      type: "job" as const,
      slug: r.slug,
      title: r.title,
      description: r.description,
      category: r.category,
      state: r.state,
      publishedAt: r.published_at,
    })
  );

  const schemeResults = (schemesRes.data || []).map(
    (r: {
      slug: string;
      title: string;
      description: string;
      category: string;
      state: string;
      published_at: string;
    }) => ({
      type: "scheme" as const,
      slug: r.slug,
      title: r.title,
      description: r.description,
      category: r.category,
      state: r.state,
      publishedAt: r.published_at,
    })
  );

  return [...jobResults, ...schemeResults].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
