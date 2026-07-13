import Link from "next/link";
import type { Guide } from "@/lib/guides";
import { safeFormatDate } from "@/lib/date-utils";

interface GuideCardProps {
  guide: Pick<
    Guide,
    "slug" | "title" | "description" | "category" | "author" | "publishedAt"
  >;
}

export default function GuideCard({ guide }: GuideCardProps) {
  const formattedDate = safeFormatDate(guide.publishedAt, "N/A");

  return (
    <article className="relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 border-l-4 border-l-indigo-600 overflow-hidden">
      {/* Header */}
      <div className="px-4 pt-4 pb-2 sm:px-5 sm:pt-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
            {guide.category}
          </span>
        </div>

        {/* Guide Title */}
        <h3 className="text-base font-semibold text-gray-900 leading-snug mb-2 sm:text-lg">
          <Link
            href={`/blog/${guide.slug}`}
            className="hover:text-indigo-600 transition-colors duration-150"
          >
            {guide.title}
          </Link>
        </h3>

        {/* Description (truncated to 2 lines) */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3">
          {guide.description}
        </p>

        {/* Author */}
        <div className="flex items-center gap-1.5 text-sm text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 text-gray-400 flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
          </svg>
          <Link href="/about" className="hover:text-indigo-600 transition-colors">
            Mahitosh Dey
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3 mt-3 sm:px-5">
        <span className="text-xs text-gray-400">Published {formattedDate}</span>
        <Link
          href={`/blog/${guide.slug}`}
          className="inline-flex items-center gap-1 rounded-md bg-indigo-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-150"
        >
          Read Post
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-3.5 w-3.5"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 0 1 .75-.75h10.638L11.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 1 1-1.04-1.08l3.158-2.96H3.75A.75.75 0 0 1 3 10Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
