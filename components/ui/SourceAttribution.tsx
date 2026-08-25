import { safeFormatDate } from "@/lib/date-utils";

/**
 * Attribution line shown directly under the Quick Information table on job
 * pages, and at the head of the content body on scheme pages (which have no
 * Quick Information table).
 *
 * Renders: "Information verified from official source - Last updated: 25 August 2026"
 * with "official source" linked when a source URL exists.
 *
 * The outbound link carries rel="nofollow noopener". nofollow because these are
 * government portals we cite constantly and do not want to appear to be
 * endorsing for ranking purposes; noopener because the link opens in a new tab.
 *
 * Replaces the older header block that read "Information verified on {date}
 * from official source". That block was gated on verifiedAt, carried no link,
 * and sat above the fold in a green callout. Keeping both would print the same
 * claim twice on one page.
 */
interface SourceAttributionProps {
  /** Official portal or notification URL. Omit to render plain text. */
  sourceUrl?: string | null;
  /** Preferred date. Falls back to publishedAt when absent. */
  updatedAt?: string | null;
  publishedAt?: string | null;
}

export default function SourceAttribution({
  sourceUrl,
  updatedAt,
  publishedAt,
}: SourceAttributionProps) {
  const rawDate = updatedAt?.trim() || publishedAt?.trim() || "";
  const formatted = safeFormatDate(rawDate, "", "long");
  const href = sourceUrl?.trim();

  // Nothing useful to say without a date.
  if (!formatted) return null;

  return (
    <p className="mb-8 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-gray-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4 shrink-0 text-green-600"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
          clipRule="evenodd"
        />
      </svg>
      <span>
        Information verified from{" "}
        {href ? (
          <a
            href={href}
            rel="nofollow noopener"
            target="_blank"
            className="font-medium text-primary-600 underline underline-offset-2 hover:text-primary-700"
          >
            official source
          </a>
        ) : (
          "official source"
        )}
      </span>
      <span aria-hidden="true">&middot;</span>
      <span>
        Last updated:{" "}
        <time dateTime={rawDate}>{formatted}</time>
      </span>
    </p>
  );
}
