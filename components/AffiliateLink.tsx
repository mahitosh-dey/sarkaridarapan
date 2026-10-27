import type { ReactNode } from "react";

/**
 * An outbound affiliate link, disclosed correctly.
 *
 * Every affiliate link on this site goes through here so the rel attribute cannot
 * be forgotten on an individual link. Undisclosed affiliate links breach both
 * Google's link spam policy and the affiliate networks' own terms, and this site
 * is already carrying a "low value content" judgement from Google that it cannot
 * afford to compound.
 *
 * rel carries three values and each earns its place:
 *   sponsored  tells search engines the link is paid, which is the disclosure
 *   nofollow   belt and braces for older crawlers that do not read sponsored
 *   noopener   stops the destination reaching back through window.opener
 */
export interface AffiliateLinkProps {
  href: string;
  children: ReactNode;
  /** Shown to readers next to the link. Networks and Indian endorsement guidance both require visible disclosure, not just a rel attribute. */
  showTag?: boolean;
  className?: string;
}

export default function AffiliateLink({
  href,
  children,
  showTag = true,
  className = "",
}: AffiliateLinkProps) {
  return (
    <span className="inline">
      <a
        href={href}
        target="_blank"
        rel="sponsored nofollow noopener"
        className={
          className ||
          "text-blue-700 underline underline-offset-2 hover:text-blue-900"
        }
      >
        {children}
      </a>
      {showTag && (
        <span className="ml-1 align-baseline text-xs text-gray-500">(ad)</span>
      )}
    </span>
  );
}

/**
 * The block-level version, for a recommendation placed at the end of a section
 * rather than inside a sentence.
 */
export function AffiliateCard({
  href,
  heading,
  body,
  cta = "Visit site",
}: {
  href: string;
  heading: string;
  body: string;
  cta?: string;
}) {
  return (
    <aside className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
      <div className="mb-1 text-xs uppercase tracking-wide text-gray-500">
        Sponsored
      </div>
      <h3 className="mb-1 text-base font-semibold text-gray-900">{heading}</h3>
      <p className="mb-3 text-sm text-gray-700">{body}</p>
      <a
        href={href}
        target="_blank"
        rel="sponsored nofollow noopener"
        className="inline-block rounded bg-blue-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-800"
      >
        {cta}
      </a>
    </aside>
  );
}
