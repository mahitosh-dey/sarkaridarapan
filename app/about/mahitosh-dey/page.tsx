import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import GuideCard from "@/components/GuideCard";
import { getPostsByAuthor } from "@/lib/blog-db";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const revalidate = 3600;

const AUTHOR = {
  name: "Mahitosh Dey",
  slug: "mahitosh-dey",
  jobTitle: "Founder & Developer",
  photo: "/images/mahitosh-dey.jpeg",
  linkedin: "https://www.linkedin.com/in/mahitosh-dey-b70575147/",
  bio: [
    "Mahitosh Dey is a developer from West Bengal who built SarkariDarapan to help Indian government job aspirants find accurate, up-to-date information in one place.",
    "With a background in web development, he designed and built every part of SarkariDarapan — from the job listings and scheme pages to the blog and admin tools. His goal is to make sarkari naukri and government scheme information accessible without the noise.",
  ],
};

export const metadata: Metadata = {
  title: `${AUTHOR.name} — ${AUTHOR.jobTitle} | ${SITE_NAME}`,
  description: `${AUTHOR.name} is the founder and developer of SarkariDarapan, an Indian government jobs and schemes portal based in West Bengal.`,
  alternates: {
    canonical: `${SITE_URL}/about/${AUTHOR.slug}`,
  },
  openGraph: {
    title: `${AUTHOR.name} | ${SITE_NAME}`,
    description: `Founder & Developer of SarkariDarapan — government jobs and schemes portal.`,
    url: `${SITE_URL}/about/${AUTHOR.slug}`,
    type: "profile",
    images: [{ url: `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630 }],
  },
};

export default async function MahitoshDeyPage() {
  const articles = await getPostsByAuthor(AUTHOR.name);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR.name,
    url: `${SITE_URL}/about/${AUTHOR.slug}`,
    image: `${SITE_URL}${AUTHOR.photo}`,
    jobTitle: AUTHOR.jobTitle,
    sameAs: [AUTHOR.linkedin],
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <JsonLd data={personSchema} />

      {/* Author card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-10">
        <div className="h-2 bg-indigo-600" />
        <div className="p-8">
          <div className="flex flex-col sm:flex-row items-start gap-8">
            {/* Photo */}
            <div className="shrink-0">
              <Image
                src={AUTHOR.photo}
                alt={AUTHOR.name}
                width={120}
                height={120}
                className="rounded-full ring-4 ring-indigo-100 object-cover"
                priority
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-1">
                {AUTHOR.name}
              </h1>
              <p className="text-indigo-600 font-semibold text-lg mb-4">
                {AUTHOR.jobTitle} — {SITE_NAME}
              </p>

              <div className="space-y-3 text-gray-600 text-base leading-relaxed mb-6">
                {AUTHOR.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Social links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={AUTHOR.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0A66C2] px-4 py-2 text-sm font-semibold text-white hover:bg-[#004182] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  SarkariDarapan.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Articles section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Articles by {AUTHOR.name}
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          {articles.length > 0
            ? `${articles.length} article${articles.length === 1 ? "" : "s"} published`
            : "No articles published under this author name yet."}
        </p>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {articles.map((article) => (
              <GuideCard key={article.slug} guide={article} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-gray-200 bg-white p-8 text-center text-gray-500">
            Articles will appear here once published under this author name.
          </div>
        )}
      </section>
    </div>
  );
}
