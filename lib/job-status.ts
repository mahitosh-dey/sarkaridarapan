import { parseDate } from "@/lib/date-utils";

/**
 * Single source of truth for whether a job is open or closed.
 *
 * WHY THIS EXISTS
 * The last date lives in TWO places and they disagree. Measured on live data
 * 2026-08-25 across 78 active jobs:
 *   - 63 have it in both `last_date` (column) and `importantDates.lastDate` (JSON)
 *   - 6 have it ONLY in the column
 *   - 9 have the two sources DISAGREEING, and three of those hold unparseable
 *     junk in the JSON field ("Closed in ", "Window clo", "Approximat")
 *
 * That caused two live bugs:
 *   1. JobCard read only `importantDates.lastDate`, so 5 jobs whose date lives
 *      only in the column showed "Active" forever.
 *   2. Detail pages used `importantDates?.lastDate || lastDate`, and since a junk
 *      string like "Closed in " is truthy, `||` selected the junk over the valid
 *      column date. The junk fails to parse, so the job read as open.
 *
 * RESOLUTION RULE
 * Collect both candidates, discard anything that does not parse as a real date,
 * and take the LATEST surviving date. Taking the latest is deliberate: when two
 * sources disagree it is better to under-close than to tell a candidate a window
 * has shut when one source says it is still open.
 *
 * When no candidate parses, the date is unknown and the caller keeps whatever
 * badge the `isActive` flag produces. Date logic never invents a closure.
 */

export interface JobStatusInput {
  isActive?: boolean;
  lastDate?: string | null;
  importantDates?: { lastDate?: string | null } | null;
}

export interface JobStatus {
  /** Closed for any reason: date passed, or the record is flagged inactive. */
  isClosed: boolean;
  /** True only when a parseable last date is in the past. Drives the red badge. */
  closedByDate: boolean;
  /** The date that decided it, as YYYY-MM-DD, or null when unknown. */
  effectiveLastDate: string | null;
}

/** Today in IST as YYYY-MM-DD. Recruitment deadlines are Indian local dates. */
function todayIST(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
}

/** Best parseable last date across both storage locations, as YYYY-MM-DD. */
export function resolveLastDate(job: JobStatusInput): string | null {
  const candidates = [job.importantDates?.lastDate, job.lastDate];

  const parsed = candidates
    .map((c) => (typeof c === "string" && c.trim() ? parseDate(c.trim()) : null))
    .filter((d): d is Date => d instanceof Date && !Number.isNaN(d.getTime()))
    .map((d) => d.toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" }));

  if (parsed.length === 0) return null;
  // Latest wins when sources disagree. See rationale above.
  return parsed.sort()[parsed.length - 1];
}

/** Resolve open/closed status for a job. */
export function getJobStatus(job: JobStatusInput): JobStatus {
  const effectiveLastDate = resolveLastDate(job);
  const closedByDate =
    effectiveLastDate !== null && effectiveLastDate < todayIST();

  return {
    closedByDate,
    effectiveLastDate,
    isClosed: closedByDate || job.isActive === false,
  };
}
