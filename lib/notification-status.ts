/**
 * Notification-status driven robots policy.
 *
 * WHY THIS EXISTS
 * Pages for recruitments whose notification has not been released are thin by
 * necessity: there is no vacancy count, no application window and no exam date
 * to write about. Indexing them adds low-value URLs to a site whose crawled-to-
 * indexed ratio is already the main SEO problem. They stay crawlable and keep
 * passing link signal ("noindex, follow"), and flip back to indexable the
 * moment the notification lands.
 *
 * WHY NOT TEXT MATCHING
 * Matching phrases like "expected", "awaited" or "not yet released" in the
 * title/description/content is unreliable and was measured against live data on
 * 2026-08-24: it flagged 25 records, of which 20 were fully released
 * recruitments. They matched only because the page honestly notes that some
 * SUB-event is unannounced, for example uppsc-pcs-2026 (500 posts, prelims
 * confirmed for 6 Dec) saying "Mains date not announced", or the PM-KISAN
 * scheme page saying the 24th instalment has no date. Those are strong pages
 * and noindexing them would be actively harmful.
 *
 * THE RULE
 * 1. An explicit `notificationStatus` column always wins, so anything can be
 *    overridden by hand.
 * 2. Otherwise the status is DERIVED from structured fields only:
 *      job    released when a lastDate exists (an application window is known)
 *      exam   released when an applicationEnd or examDate exists
 *      scheme released by default (schemes run continuously rather than in
 *             notification cycles), so only an explicit override marks one awaited
 *
 * Because the derivation reads structured data, reversion is automatic: setting
 * last_date on a job flips it back to "index, follow" on the next revalidation
 * with no code change and no manual step.
 */

/**
 * Slugs whose last date is legitimately absent and which must stay indexable.
 *
 * These are evergreen guides rather than pre-notification stubs. Kerala PSC
 * publishes rolling notifications with no single deadline, so last_date is NULL
 * by design; without this the derived rule noindexes a 3000w guide.
 *
 * This is a stopgap. Once scripts/add-notification-status.sql has been run,
 * set notification_status = 'released' on these rows and delete this list:
 * the DB override takes precedence and is the intended mechanism.
 */
const ALWAYS_INDEXABLE = new Set<string>([
  "kerala-psc-recruitment-2026",
]);

export type NotificationStatus = "released" | "awaited";
export type ContentKind = "job" | "exam" | "scheme";

export interface RobotsDirective {
  index: boolean;
  follow: boolean;
}

/** Minimal shape needed to decide status. Accepts full records. */
export interface StatusInput {
  slug?: string;
  notificationStatus?: NotificationStatus | null;
  lastDate?: string | null;
  applicationEnd?: string | null;
  examDate?: string | null;
}

/** True when the notification is considered released and the page indexable. */
export function isNotificationReleased(
  record: StatusInput,
  kind: ContentKind,
): boolean {
  const explicit = record.notificationStatus;
  if (explicit === "released") return true;
  if (explicit === "awaited") return false;

  // Stopgap allowlist, superseded by the DB column once the migration is run.
  if (record.slug && ALWAYS_INDEXABLE.has(record.slug)) return true;

  const has = (v?: string | null) => typeof v === "string" && v.trim().length > 0;

  switch (kind) {
    case "job":
      return has(record.lastDate);
    case "exam":
      return has(record.applicationEnd) || has(record.examDate);
    case "scheme":
      return true;
  }
}

/**
 * Robots directive for a content record.
 * Released -> "index, follow". Awaited -> "noindex, follow".
 * `follow` stays true either way so internal links still pass signal.
 */
export function robotsForRecord(
  record: StatusInput,
  kind: ContentKind,
): RobotsDirective {
  return isNotificationReleased(record, kind)
    ? { index: true, follow: true }
    : { index: false, follow: true };
}

/** Convenience for sitemap filtering: only indexable records belong in it. */
export function isIndexable(record: StatusInput, kind: ContentKind): boolean {
  return isNotificationReleased(record, kind);
}
