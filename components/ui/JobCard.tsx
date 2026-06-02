import Link from "next/link";
import type { JobPost } from "@/lib/types";
import { safeFormatDate } from "@/lib/date-utils";

interface JobCardProps {
  job: Pick<
    JobPost,
    | "slug"
    | "title"
    | "organization"
    | "postName"
    | "vacancies"
    | "salary"
    | "category"
    | "state"
    | "isActive"
    | "publishedAt"
    | "importantDates"
  >;
}

export default function JobCard({ job }: JobCardProps) {
  const formattedDate = safeFormatDate(job.publishedAt, "—");
  const lastDate = safeFormatDate(job.importantDates.lastDate, "N/A");

  return (
    <article
      className={`relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 overflow-hidden ${
        job.isActive ? "border-l-4 border-l-primary-600" : "border-l-4 border-l-gray-400"
      }`}
    >
      {/* Top Row: Organization + Badges */}
      <div className="px-4 pt-4 pb-2 sm:px-5 sm:pt-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="text-xs font-medium text-primary-700 uppercase tracking-wide">
            {job.organization}
          </span>
          <div className="flex items-center gap-2">
            {job.isActive ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700 ring-1 ring-inset ring-green-600/20">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                Active
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-red-700 ring-1 ring-inset ring-red-600/20">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                Expired
              </span>
            )}
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
              {job.state}
            </span>
          </div>
        </div>

        {/* Job Title */}
        <h3 className="text-base font-semibold text-gray-900 leading-snug mb-1 sm:text-lg">
          <Link
            href={`/sarkari-naukri/${job.slug}`}
            className="hover:text-primary-600 transition-colors duration-150"
          >
            {job.title}
          </Link>
        </h3>

        {job.postName && (
          <p className="text-sm text-gray-500 mb-3">
            Post: {job.postName}
          </p>
        )}

        {/* Quick Info Grid — only show fields that have real data */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-4">
          {job.vacancies > 0 && (
            <div>
              <span className="block text-xs text-gray-400 uppercase tracking-wider">
                Vacancies
              </span>
              <span className="font-semibold text-gray-800">
                {job.vacancies.toLocaleString("en-IN")}
              </span>
            </div>
          )}
          {job.salary && (
            <div>
              <span className="block text-xs text-gray-400 uppercase tracking-wider">
                Salary
              </span>
              <span className="font-semibold text-gray-800 truncate block">
                {job.salary}
              </span>
            </div>
          )}
          {job.importantDates.lastDate && (
            <div>
              <span className="block text-xs text-gray-400 uppercase tracking-wider">
                Last Date
              </span>
              <span
                className={`font-semibold ${
                  job.isActive ? "text-red-600" : "text-gray-500"
                }`}
              >
                {lastDate}
              </span>
            </div>
          )}
          <div>
            <span className="block text-xs text-gray-400 uppercase tracking-wider">
              Category
            </span>
            <span className="font-semibold text-gray-800">{job.category}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3 mt-3 sm:px-5">
        <span className="text-xs text-gray-400">Published {formattedDate}</span>
        <Link
          href={`/sarkari-naukri/${job.slug}`}
          className="inline-flex items-center gap-1 rounded-md bg-primary-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors duration-150"
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
