import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import {
  getJobPosts,
  getSchemePosts,
  getEntranceExamPosts,
  rethrowIfUnavailable,
} from "@/lib/content";
import { getPublishedDbPosts } from "@/lib/blog-db";
import { getAllGuides } from "@/lib/guides";
import { SITE_URL, REVALIDATE_INTERVAL } from "@/lib/constants";

export const revalidate = REVALIDATE_INTERVAL;

export const metadata: Metadata = {
  title: "All Pages: Every Job, Scheme, Exam and Guide on One Page",
  description:
    "The full index of SarkariDarapan: every government job, Sarkari Yojana, entrance exam and guide published on the site, listed alphabetically in one place.",
  alternates: { canonical: `${SITE_URL}/all-pages` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "All Pages: Every Job, Scheme, Exam and Guide on One Page",
    description:
      "The full index of SarkariDarapan: every government job, Sarkari Yojana, entrance exam and guide published on the site.",
    url: `${SITE_URL}/all-pages`,
    type: "website",
    images: [{ url: `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630 }],
  },
};

interface IndexEntry {
  slug: string;
  label: string;
}

function IndexSection({
  heading,
  basePath,
  entries,
  blurb,
}: {
  heading: string;
  basePath: string;
  entries: IndexEntry[];
  blurb: string;
}) {
  if (entries.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">
        {heading}{" "}
        <span className="text-base font-normal text-gray-500">
          ({entries.length})
        </span>
      </h2>
      <p className="text-sm text-gray-600 mb-4">{blurb}</p>
      <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry) => (
          <li key={entry.slug} className="text-sm leading-snug">
            <Link
              href={`${basePath}/${entry.slug}`}
              className="text-blue-700 hover:underline"
            >
              {entry.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

const byLabel = (a: IndexEntry, b: IndexEntry) => a.label.localeCompare(b.label);

export default async function AllPagesIndex() {
  let jobs: IndexEntry[] = [];
  let schemes: IndexEntry[] = [];
  let exams: IndexEntry[] = [];
  let guides: IndexEntry[] = [];

  try {
    const [jobRows, schemeRows, examRows, dbPosts] = await Promise.all([
      getJobPosts(),
      getSchemePosts(),
      getEntranceExamPosts(),
      getPublishedDbPosts(),
    ]);

    jobs = jobRows
      .map((j) => ({ slug: j.slug, label: j.title }))
      .sort(byLabel);
    schemes = schemeRows
      .map((s) => ({ slug: s.slug, label: s.title }))
      .sort(byLabel);
    exams = examRows
      .map((e) => ({ slug: e.slug, label: e.title }))
      .sort(byLabel);

    const dbSlugs = new Set(dbPosts.map((p) => p.slug));
    guides = [
      ...dbPosts.map((p) => ({ slug: p.slug, label: p.title })),
      ...getAllGuides()
        .filter((g) => !dbSlugs.has(g.slug))
        .map((g) => ({ slug: g.slug, label: g.title })),
    ].sort(byLabel);
  } catch (error) {
    rethrowIfUnavailable(error);
  }

  const total = jobs.length + schemes.length + exams.length + guides.length;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: "All Pages", href: "/all-pages" }]} />

      <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-3">
        Every page on SarkariDarapan
      </h1>
      <p className="text-gray-700 mb-2 max-w-3xl">
        {total} pages, listed in full. The category and state pages show a
        filtered slice and the main listings are paginated, so this is the one
        place where everything published on the site sits together.
      </p>
      <p className="text-gray-700 mb-8 max-w-3xl">
        Job and exam pages are updated as each recruitment moves through its
        stages, so the date under a page is the last time its facts were
        checked against the conducting body&apos;s own notice rather than the
        day it was first written.
      </p>

      <IndexSection
        heading="Government jobs"
        basePath="/sarkari-naukri"
        entries={jobs}
        blurb="Recruitment notifications, from the application window through admit card, exam and result."
      />
      <IndexSection
        heading="Government schemes"
        basePath="/sarkari-yojana"
        entries={schemes}
        blurb="Central and state schemes, with eligibility, benefit amounts and the official application route."
      />
      <IndexSection
        heading="Entrance exams"
        basePath="/entrance-exams"
        entries={exams}
        blurb="Admission and eligibility tests, with pattern, syllabus and the dates each conducting body has published."
      />
      <IndexSection
        heading="Guides"
        basePath="/blog"
        entries={guides}
        blurb="Preparation strategy, salary breakdowns, comparisons and step-by-step application walkthroughs."
      />
    </div>
  );
}
