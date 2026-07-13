import Link from "next/link";
import type { EntranceExamPost } from "@/lib/types";
import { safeFormatDate, isDatePast } from "@/lib/date-utils";

interface EntranceExamCardProps {
  exam: Pick<
    EntranceExamPost,
    | "slug"
    | "title"
    | "conductingBody"
    | "examDate"
    | "applicationEnd"
    | "category"
    | "state"
    | "publishedAt"
  >;
}

export default function EntranceExamCard({ exam }: EntranceExamCardProps) {
  const formattedDate = safeFormatDate(exam.publishedAt, "N/A");
  const examDate = safeFormatDate(exam.examDate, "TBA", "short", true);
  const applicationEnd = safeFormatDate(exam.applicationEnd, "N/A", "short", true);

  // Closed if applicationEnd exists and is in the past; fall back to examDate
  const isClosed =
    exam.applicationEnd
      ? isDatePast(exam.applicationEnd)
      : isDatePast(exam.examDate);

  return (
    <article className={`relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 overflow-hidden ${isClosed ? "border-l-4 border-l-gray-400" : "border-l-4 border-l-blue-600"}`}>
      {/* Header */}
      <div className="px-4 pt-4 pb-2 sm:px-5 sm:pt-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="text-xs font-medium text-blue-700 uppercase tracking-wide">
            {exam.conductingBody}
          </span>
          <div className="flex items-center gap-2">
            {isClosed ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-600 ring-1 ring-inset ring-gray-400/30">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                Closed
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700 ring-1 ring-inset ring-green-600/20">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                Active
              </span>
            )}
            <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
              {exam.category}
            </span>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
              {exam.state}
            </span>
          </div>
        </div>

        {/* Exam Title */}
        <h3 className="text-base font-semibold text-gray-900 leading-snug mb-3 sm:text-lg">
          <Link
            href={`/entrance-exams/${exam.slug}`}
            className="hover:text-blue-600 transition-colors duration-150"
          >
            {exam.title}
          </Link>
        </h3>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-3">
          <div>
            <span className="block text-xs text-gray-400 uppercase tracking-wider">
              Exam Date
            </span>
            <span className="font-semibold text-gray-800">{examDate}</span>
          </div>
          <div>
            <span className="block text-xs text-gray-400 uppercase tracking-wider">
              Last Date
            </span>
            <span
              className={`font-semibold ${
                isClosed ? "text-gray-500" : "text-red-600"
              }`}
            >
              {applicationEnd}
            </span>
          </div>
          <div>
            <span className="block text-xs text-gray-400 uppercase tracking-wider">
              Category
            </span>
            <span className="font-semibold text-gray-800">{exam.category}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3 mt-3 sm:px-5">
        <span className="text-xs text-gray-400">Published {formattedDate}</span>
        <Link
          href={`/entrance-exams/${exam.slug}`}
          className="inline-flex items-center gap-1 rounded-md bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-150"
        >
          View Details
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
