import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import EntranceExamDetail from "@/components/content/EntranceExamDetail";
import EntranceExamCard from "@/components/ui/EntranceExamCard";
import GuideCard from "@/components/GuideCard";
import MarkdownContent from "@/components/content/MarkdownContent";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Sidebar from "@/components/layout/Sidebar";
import InArticleAd from "@/components/ads/InArticleAd";
import JsonLd from "@/components/seo/JsonLd";
import { getEntranceExamPosts, getEntranceExamBySlug } from "@/lib/content";
import { getPublishedDbPosts } from "@/lib/blog-db";
import { examToBlogs } from "@/lib/related-links";
import { SITE_NAME, SITE_URL, REVALIDATE_INTERVAL } from "@/lib/constants";

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
    if (!exam) return { title: "Entrance Exam Not Found" };

    return {
      title: exam.title,
      description: exam.description || `${exam.title} - Complete details including exam date, eligibility, syllabus, admit card, and results.`,
      alternates: {
        canonical: `${SITE_URL}/entrance-exams/${params.slug}`,
      },
      openGraph: {
        title: `${exam.title} | ${SITE_NAME}`,
        description: exam.description || `${exam.title} - Exam dates, eligibility, syllabus, and how to apply.`,
        url: `${SITE_URL}/entrance-exams/${params.slug}`,
        type: "article",
        publishedTime: exam.publishedAt,
        modifiedTime: exam.updatedAt,
        images: [{ url: exam.image || `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630 }],
      },
      twitter: {
        card: "summary_large_image",
        title: exam.title,
        description: exam.description,
      },
    };
  } catch {
    return { title: "Entrance Exam Not Found" };
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

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Entrance Exams", href: "/entrance-exams" },
    { label: exam.title },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: exam.title,
    description: exam.description,
    datePublished: exam.publishedAt,
    dateModified: exam.updatedAt || exam.publishedAt,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/entrance-exams/${params.slug}`,
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />

      <JsonLd data={articleSchema} />

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

          {/* Helpful Guides — internal links to relevant blog posts */}
          {relatedBlogs.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Helpful Guides</h2>
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
