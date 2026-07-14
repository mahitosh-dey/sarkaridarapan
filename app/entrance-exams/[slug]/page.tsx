import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import EntranceExamDetail from "@/components/content/EntranceExamDetail";
import EntranceExamCard from "@/components/ui/EntranceExamCard";
import JobCard from "@/components/ui/JobCard";
import GuideCard from "@/components/GuideCard";
import MarkdownContent from "@/components/content/MarkdownContent";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Sidebar from "@/components/layout/Sidebar";
import InArticleAd from "@/components/ads/InArticleAd";
import JsonLd from "@/components/seo/JsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { getEntranceExamPosts, getEntranceExamBySlug, getJobsByCategory } from "@/lib/content";
import { getPublishedDbPosts } from "@/lib/blog-db";
import { examToBlogs } from "@/lib/related-links";
import { SITE_NAME, SITE_URL, REVALIDATE_INTERVAL } from "@/lib/constants";
import { parseFaqsFromMarkdown, buildFaqPageSchema } from "@/lib/faq-parser";

// Normalises any stored date string to YYYY-MM-DD for schema.org.
// Handles ISO timestamps, YYYY-MM-DD, DD/MM/YYYY, and DD.MM.YYYY.
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

export const revalidate = REVALIDATE_INTERVAL;

interface ExamPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  try {
    const exams = await getEntranceExamPosts();
    return exams.map((exam) => ({
      slug: exam.slug,
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: ExamPageProps): Promise<Metadata> {
  try {
    const exam = await getEntranceExamBySlug(params.slug);
    if (!exam) return { title: "Coming Soon: Entrance Exam Details Being Updated Soon", robots: { index: false, follow: true } };

    const fallbackDesc = `${exam.title} - Complete details including exam date, eligibility, syllabus, admit card, and results.`;
    const rawDesc = exam.description || fallbackDesc;
    const metaDesc = rawDesc.length > 160 ? rawDesc.slice(0, 157) + "..." : rawDesc;

    return {
      title: exam.title,
      description: metaDesc,
      alternates: {
        canonical: `${SITE_URL}/entrance-exams/${params.slug}`,
      },
      openGraph: {
        title: `${exam.title} | ${SITE_NAME}`,
        description: metaDesc,
        url: `${SITE_URL}/entrance-exams/${params.slug}`,
        type: "article",
        publishedTime: exam.publishedAt,
        modifiedTime: exam.updatedAt,
        images: [{ url: exam.image || `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630 }],
      },
      twitter: {
        card: "summary_large_image",
        title: exam.title,
        description: metaDesc,
      },
    };
  } catch {
    return { title: "Coming Soon: Entrance Exam Details Being Updated Soon", robots: { index: false, follow: true } };
  }
}

export default async function EntranceExamPage({ params }: ExamPageProps) {
  let exam;
  try {
    exam = await getEntranceExamBySlug(params.slug);
  } catch {
    notFound();
  }

  if (!exam) {
    notFound();
  }

  // Fetch related exams from same category
  let relatedExams: import("@/lib/types").EntranceExamPost[] = [];
  try {
    const allExams = await getEntranceExamPosts();
    relatedExams = allExams
      .filter((e) => e.category === exam.category && e.slug !== exam.slug)
      .slice(0, 4);
  } catch {
    relatedExams = [];
  }

  // Fetch related blog guides based on static mapping
  let relatedBlogs: import("@/lib/guides").Guide[] = [];
  try {
    const blogSlugs = examToBlogs[params.slug] ?? [];
    if (blogSlugs.length > 0) {
      const allBlogs = await getPublishedDbPosts();
      relatedBlogs = allBlogs.filter((b) => blogSlugs.includes(b.slug));
    }
  } catch {
    relatedBlogs = [];
  }

  // Cross-link to jobs that this exam qualifies you for (same category).
  // Helps GATE → PSU jobs, UPSC prep → SSC CGL, etc.
  let relatedJobs: import("@/lib/types").JobPost[] = [];
  try {
    if (exam.category) {
      const categoryJobs = await getJobsByCategory(exam.category);
      relatedJobs = categoryJobs.slice(0, 4);
    }
  } catch {
    relatedJobs = [];
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Entrance Exams", href: "/entrance-exams" },
    { label: exam.title },
  ];

  const pageUrl = `${SITE_URL}/entrance-exams/${params.slug}`;
  const examDateIso = toIsoDate(exam.examDate);
  const applicationEndIso = toIsoDate(exam.applicationEnd);
  const isAllIndia =
    !exam.state ||
    exam.state.toLowerCase().replace(/-/g, " ").trim() === "all india";

  const faqs = parseFaqsFromMarkdown(exam.content);
  const faqSchema = buildFaqPageSchema(faqs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      ...(faqSchema ? [faqSchema] : []),
      {
        "@type": "Event",
        name: exam.title,
        ...(examDateIso ? { startDate: examDateIso, endDate: examDateIso } : {}),
        description: exam.description || "",
        organizer: {
          "@type": "Organization",
          name: exam.conductingBody || "Government of India",
        },
        location: {
          "@type": "Place",
          name: isAllIndia ? "India" : exam.state,
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
          },
        },
        ...(applicationEndIso
          ? {
              offers: {
                "@type": "Offer",
                url: pageUrl,
                validThrough: `${applicationEndIso}T23:59:59+05:30`,
              },
            }
          : {}),
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        url: pageUrl,
      },
      {
        "@type": "Article",
        headline: exam.title.slice(0, 110),
        description: exam.description,
        image: {
          "@type": "ImageObject",
          url: exam.image || `${SITE_URL}/images/og-default.jpg`,
          width: 1200,
          height: 630,
        },
        datePublished: exam.publishedAt,
        dateModified: exam.updatedAt || exam.publishedAt,
        author: {
          "@type": "Person",
          name: "Mahitosh Dey",
          url: `${SITE_URL}/about`,
          sameAs: "https://www.linkedin.com/in/mahitosh-dey-b70575147/",
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/logo.png`,
            width: 200,
            height: 60,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/entrance-exams/${params.slug}`,
        },
        articleSection: exam.category,
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Entrance Exams", url: `${SITE_URL}/entrance-exams` },
          { name: exam.title, url: pageUrl },
        ]}
      />
      <JsonLd data={combinedSchema} />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <article className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <EntranceExamDetail exam={exam} />

              {/* In-Article Ad */}
              <InArticleAd className="my-8" />

              {/* AI-generated Markdown Content */}
              {exam.content && (
                <div className="mt-8">
                  <MarkdownContent content={exam.content} />
                </div>
              )}
            </div>
          </article>

          {/* Related Exams */}
          {relatedExams.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Entrance Exams</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedExams.map((relExam) => (
                  <EntranceExamCard key={relExam.slug} exam={relExam} />
                ))}
              </div>
            </section>
          )}

          {/* Related Jobs (career outcomes from this exam) */}
          {relatedJobs.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Related government jobs</h2>
              <p className="text-sm text-gray-500 mb-6">
                Current recruitments in the same category as this exam.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedJobs.map((job) => (
                  <JobCard key={job.slug} job={job} />
                ))}
              </div>
            </section>
          )}

          {/* Helpful Guides — internal links to relevant blog posts */}
          {relatedBlogs.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Helpful articles</h2>
              <p className="text-sm text-gray-500 mb-6">
                Read these guides to understand your career options after this exam.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedBlogs.map((guide) => (
                  <GuideCard key={guide.slug} guide={guide} />
                ))}
              </div>
            </section>
          )}
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
