import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import JobDetail from "@/components/content/JobDetail";
import MarkdownContent from "@/components/content/MarkdownContent";
import JobCard from "@/components/ui/JobCard";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Sidebar from "@/components/layout/Sidebar";
import InArticleAd from "@/components/ads/InArticleAd";
import JsonLd from "@/components/seo/JsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import GuideCard from "@/components/GuideCard";
import { getJobPosts, getJobBySlug, getJobsByCategory } from "@/lib/content";
import { getRelatedGuidesForJob } from "@/lib/guides";
import { getPublishedDbPosts } from "@/lib/blog-db";
import { safeFormatDate } from "@/lib/date-utils";
import { isClosingSoon, getDaysRemaining } from "@/lib/utils";
import { SITE_NAME, SITE_URL, REVALIDATE_INTERVAL } from "@/lib/constants";
import { parseFaqsFromMarkdown } from "@/lib/faq-parser";

// Converts any stored date string to YYYY-MM-DD for schema.org.
// Handles ISO timestamps, YYYY-MM-DD, DD/MM/YYYY, DD.MM.YYYY.
function toIsoDate(raw: string | null | undefined): string | undefined {
  if (!raw?.trim()) return undefined;
  const s = raw.trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10);
  const slash = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(s);
  if (slash) return `${slash[3]}-${slash[2].padStart(2, "0")}-${slash[1].padStart(2, "0")}`;
  const dot = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/.exec(s);
  if (dot) return `${dot[3]}-${dot[2].padStart(2, "0")}-${dot[1].padStart(2, "0")}`;
  return undefined;
}

// Extracts unique ₹ amounts from a salary string to build a schema.org range.
// Uses the smallest and largest distinct values found so repeated figures
// (e.g. "₹88,635 basic … pay scale ₹88,635 — ₹1,69,025") produce a proper range.
// Returns {value} when only one distinct amount exists, null when none found.
function parseSalary(raw: string | null | undefined): Record<string, unknown> | null {
  if (!raw) return null;
  const nums = [...new Set(
    [...raw.matchAll(/₹\s*([\d,]+)/g)]
      .map((m) => parseInt(m[1].replace(/,/g, ""), 10))
      .filter((n) => !isNaN(n) && n > 0)
  )].sort((a, b) => a - b);
  if (nums.length === 0) return null;
  return {
    "@type": "MonetaryAmount",
    currency: "INR",
    value: {
      "@type": "QuantitativeValue",
      ...(nums.length >= 2
        ? { minValue: nums[0], maxValue: nums[nums.length - 1] }
        : { value: nums[0] }),
      unitText: "MONTH",
    },
  };
}

// Formats a raw date string as "DD MMM" (e.g. "29 Jul") for page titles.
// Delegates parsing to toIsoDate so all stored formats are handled uniformly.
// Uses UTC parts to avoid server timezone drift on YYYY-MM-DD strings.
function formatDateShort(raw: string | null | undefined): string {
  const iso = toIsoDate(raw);
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  if (isNaN(date.getTime())) return "";
  return `${String(d).padStart(2, "0")} ${date.toLocaleString("en-US", { month: "short", timeZone: "UTC" })}`;
}

export const revalidate = REVALIDATE_INTERVAL;

interface JobPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  try {
    const jobs = await getJobPosts();
    return jobs.map((job) => ({
      slug: job.slug,
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  try {
    const job = await getJobBySlug(params.slug);
    if (!job) return { title: "Job Not Found" };

    const postName = job.postName || job.title;
    const year = job.publishedAt
      ? new Date(job.publishedAt).getFullYear()
      : new Date().getFullYear();
    const rawLastDate = job.importantDates?.lastDate || job.lastDate;
    const lastDateShort = formatDateShort(rawLastDate);
    const lastDateFull = safeFormatDate(rawLastDate, "", "short");
    const vacanciesNum = job.vacancies > 0 ? job.vacancies : null;

    // Format: "{post_name} {year} — {N} Vacancies | Apply by {DD MMM}"
    // Under 60 chars total; vacancies and date segments drop out gracefully
    // when the underlying fields are missing. Post name is truncated last so
    // the freshness/urgency signals survive on long-title records.
    const segments = [`${postName} ${year}`];
    if (vacanciesNum) {
      segments.push(` — ${vacanciesNum.toLocaleString("en-IN")} Vacancies`);
    }
    if (lastDateShort) {
      segments.push(` | Apply by ${lastDateShort}`);
    }
    let title = segments.join("");
    if (title.length > 60) {
      const suffix = title.slice(postName.length);
      const budget = Math.max(15, 60 - suffix.length);
      const truncated = postName.slice(0, budget - 1).trimEnd() + "…";
      title = `${truncated}${suffix}`;
    }

    // Description: "Apply for {post_name} {year} — {vacancies} vacancies, last date {last_date}.
    //               Check eligibility, salary {salary_range}, exam pattern and direct apply link."
    const vacanciesCount = job.vacancies > 0
      ? `${job.vacancies.toLocaleString("en-IN")} vacancies`
      : "";
    let description = `Apply for ${postName} ${year}`;
    if (vacanciesCount || lastDateFull) {
      description += " —";
      if (vacanciesCount) description += ` ${vacanciesCount}`;
      if (lastDateFull) description += `${vacanciesCount ? "," : ""} last date ${lastDateFull}`;
    }
    description += ". Check eligibility";
    if (job.salary) description += `, salary ${job.salary}`;
    description += ", exam pattern and direct apply link.";
    if (description.length > 155) description = description.slice(0, 154).trimEnd() + "…";

    return {
      title,
      description,
      alternates: {
        canonical: `${SITE_URL}/sarkari-naukri/${params.slug}`,
      },
      openGraph: {
        title,
        description,
        url: `${SITE_URL}/sarkari-naukri/${params.slug}`,
        type: "article",
        publishedTime: job.publishedAt,
        modifiedTime: job.updatedAt,
        images: [{ url: job.image || `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630 }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
      },
    };
  } catch {
    return { title: "Job Not Found" };
  }
}

export default async function JobPage({ params }: JobPageProps) {
  let job;
  try {
    job = await getJobBySlug(params.slug);
  } catch {
    notFound();
  }

  if (!job) {
    notFound();
  }

  // Fetch similar jobs and related blog guides in parallel
  const hardcodedGuides = getRelatedGuidesForJob(job.category);
  let similarJobs: import("@/lib/types").JobPost[] = [];
  let relatedGuides = hardcodedGuides;
  try {
    const [categoryJobs, allDbPosts] = await Promise.all([
      getJobsByCategory(job.category),
      getPublishedDbPosts(),
    ]);
    similarJobs = categoryJobs.filter((j) => j.slug !== job.slug).slice(0, 3);
    const dbGuides = allDbPosts.filter((b) => b.category === job.category).slice(0, 3);
    if (dbGuides.length > 0) {
      const seen = new Set(dbGuides.map((g) => g.slug));
      relatedGuides = [...dbGuides, ...hardcodedGuides.filter((g) => !seen.has(g.slug))].slice(0, 3);
    }
  } catch {
    similarJobs = [];
    relatedGuides = hardcodedGuides;
  }

  const breadcrumbs = [
    { label: "Sarkari Naukri", href: "/sarkari-naukri" },
    { label: job.title },
  ];

  // Prefer the importantDates.lastDate column; fall back to the top-level lastDate.
  // Omit validThrough entirely when no last date is stored.
  const validThrough =
    toIsoDate(job.importantDates?.lastDate) ??
    toIsoDate(job.lastDate);

  const baseSalary = parseSalary(job.salary);

  const isAllIndia = !job.state || job.state.toLowerCase().replace(/-/g, " ").trim() === "all india";
  const addressRegion = isAllIndia ? "India" : job.state;

  const pageUrl = `${SITE_URL}/sarkari-naukri/${params.slug}`;

  const jobPostingSchema: Record<string, unknown> = {
    "@type": "JobPosting",
    "@id": `${pageUrl}/#jobposting`,
    title: job.postName || job.title,
    description: (job.description?.trim() ?? "").slice(0, 500),
    datePosted: toIsoDate(job.publishedAt) ?? job.publishedAt,
    ...(validThrough ? { validThrough } : {}),
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: job.organization || "Government of India",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressRegion,
        addressLocality: isAllIndia ? "New Delhi" : job.state,
      },
    },
    identifier: {
      "@type": "PropertyValue",
      name: job.organization || SITE_NAME,
      value: params.slug,
    },
    directApply: false,
  };

  // Only include optional fields when they have real values — schema validators
  // reject null/undefined entries for required sub-fields.
  if (baseSalary) jobPostingSchema.baseSalary = baseSalary;
  if (job.qualification) jobPostingSchema.qualifications = job.qualification;
  if (job.vacancies > 0) jobPostingSchema.totalJobOpenings = job.vacancies;
  if (job.applyLink) jobPostingSchema.applicationContact = {
    "@type": "ContactPoint",
    url: job.applyLink,
  };

  const postName = job.postName || job.title;
  const lastDateRaw = job.importantDates?.lastDate || job.lastDate || "";
  const lastDateFormatted = safeFormatDate(lastDateRaw, "");

  const jobFaqs = [
    {
      question: `How to apply for ${postName}?`,
      answer: job.applyLink
        ? `Visit the official application portal at ${job.applyLink} to apply for ${postName}.${lastDateFormatted ? ` The last date to apply is ${lastDateFormatted}.` : ""} Read the official notification carefully before submitting your application.`
        : `To apply for ${postName}, visit the official website of ${job.organization || "the recruiting organisation"} and follow the instructions in the official notification.${lastDateFormatted ? ` The last date to apply is ${lastDateFormatted}.` : ""}`,
    },
    {
      question: `What is the last date for ${postName}?`,
      answer: lastDateFormatted
        ? `The last date to apply for ${postName} is ${lastDateFormatted}. Submit your application before this date to avoid rejection.`
        : `The application deadline for ${postName} has not been announced yet. Check the official notification on ${job.organization || "the recruiting organisation"}'s website for the latest updates.`,
    },
    {
      question: `What is the salary for ${postName}?`,
      answer: job.salary
        ? `The salary for ${postName} is ${job.salary} per month. Additional allowances such as HRA, DA, and TA apply as per government norms.`
        : `The salary for ${postName} will be as per ${job.organization || "the recruiting organisation"} pay scales. Refer to the official notification for exact pay details.`,
    },
  ];

  const markdownFaqs = parseFaqsFromMarkdown(job.content);
  const mergedFaqs = [...markdownFaqs, ...jobFaqs];

  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${pageUrl}/#faq`,
    mainEntity: mergedFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const webPageSchema: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": `${pageUrl}/#webpage`,
    url: pageUrl,
    name: job.title,
    isPartOf: { "@type": "WebSite", url: SITE_URL },
    mainEntity: { "@id": `${pageUrl}/#jobposting` },
  };

  const lastDateForSA = job.importantDates?.lastDate || job.lastDate;
  const closingSoon = job.isActive && isClosingSoon(lastDateForSA);
  const daysLeft = getDaysRemaining(lastDateForSA ?? null);

  const specialAnnouncementSchema: Record<string, unknown> | null =
    closingSoon
      ? {
          "@type": "SpecialAnnouncement",
          name: `Last date to apply: ${job.title}`,
          text: `The last date to apply for ${postName}${job.vacancies > 0 ? ` (${job.vacancies.toLocaleString("en-IN")} vacancies)` : ""} at ${job.organization} is ${safeFormatDate(lastDateForSA ?? "", "", "long")}. Apply before the deadline closes.`,
          datePosted: toIsoDate(job.publishedAt) ?? job.publishedAt,
          ...(validThrough ? { expires: `${validThrough}T23:59:59+05:30` } : {}),
          category: "https://www.wikidata.org/wiki/Q628455",
          announcementLocation: {
            "@type": "GovernmentBuilding",
            name: job.organization,
            address: { "@type": "PostalAddress", addressCountry: "IN" },
          },
          spatialCoverage: {
            "@type": "Place",
            name: isAllIndia ? "India" : job.state,
          },
          url: pageUrl,
        }
      : null;

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      webPageSchema,
      jobPostingSchema,
      faqSchema,
      ...(specialAnnouncementSchema ? [specialAnnouncementSchema] : []),
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Sarkari Naukri", url: `${SITE_URL}/sarkari-naukri` },
          { name: job.title, url: pageUrl },
        ]}
      />
      <JsonLd data={combinedSchema} />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <article className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <JobDetail job={job} closingSoon={closingSoon} daysLeft={daysLeft} />

              {/* AI-generated article content */}
              {job.content && job.content.trim() !== "" && (
                <section className="mt-8 border-t border-gray-200 pt-8">
                  <MarkdownContent content={job.content} />
                </section>
              )}

              {/* In-Article Ad */}
              <InArticleAd className="my-8" />
            </div>
          </article>

          {/* Similar Jobs */}
          {similarJobs.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Jobs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {similarJobs.map((relJob) => (
                  <JobCard key={relJob.slug} job={relJob} />
                ))}
              </div>
            </section>
          )}

          {/* Related Guides */}
          {relatedGuides.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Related articles</h2>
              <p className="text-sm text-gray-500 mb-6">
                Preparation tips, eligibility guides, and exam strategies for this category.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedGuides.map((guide) => (
                  <GuideCard key={guide.slug} guide={guide} />
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {jobFaqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-lg border border-gray-200 overflow-hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors list-none">
                    <span className="pr-4">{faq.question}</span>
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-5 pb-4 pt-1 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-80 shrink-0">
          <Suspense fallback={<div className="w-full animate-pulse bg-gray-100 rounded-lg min-h-[400px]" />}>
            <Sidebar />
          </Suspense>
        </aside>
      </div>
    </div>
  );
}
