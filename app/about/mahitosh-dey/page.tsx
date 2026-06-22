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
  photo: "/images/mahitosh-dey.jpeg?v=2",
  linkedin: "https://www.linkedin.com/in/mahitosh-dey-b70575147/",
  bio: [
    "Mahitosh Dey is a developer from West Bengal who built SarkariDarapan to help Indian government job aspirants find accurate, up-to-date information in one place.",
    "With a background in web development, he designed and built every part of SarkariDarapan - from the job listings and scheme pages to the blog and admin tools. His goal is to make sarkari naukri and government scheme information accessible without the noise.",
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
    images: [
      { url: `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630 },
    ],
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
      <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-12">
        {/* Gradient banner */}
        <div className="h-32 bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-500" />

        {/* Photo + info */}
        <div className="px-6 sm:px-10 pb-8">
          {/* Avatar — overlaps the banner */}
          <div className="-mt-16 mb-4 flex items-end gap-5">
            <div className="shrink-0 rounded-full ring-4 ring-white shadow-lg overflow-hidden h-28 w-28">
              <Image
                src={AUTHOR.photo}
                alt={AUTHOR.name}
                width={112}
                height={112}
                className="h-28 w-28 rounded-full object-cover"
                priority
              />
            </div>
            {/* Social links sit on the right at same level */}
            <div className="flex flex-wrap gap-2 mb-2 ml-auto">
              <a
                href={AUTHOR.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#0A66C2] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#004182] transition-colors shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-200 transition-colors shadow-sm"
              >
                SarkariDarapan.com
              </Link>
            </div>
          </div>

          {/* Name & role */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-0.5">
            {AUTHOR.name}
          </h1>
          <p className="text-indigo-600 font-semibold text-sm sm:text-base mb-1">
            {AUTHOR.jobTitle}
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-5 mt-3">
            <span className="inline-flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-indigo-400" aria-hidden="true">
                <path d="M10.75 16.82A7.462 7.462 0 0 1 10 17c-.385 0-.764-.033-1.138-.095a.75.75 0 0 1-.537-.802l.032-.352a.75.75 0 0 1 .932-.649 6.002 6.002 0 0 0 1.422.098.75.75 0 0 1 .932.649l.032.352a.75.75 0 0 1-.537.802ZM5.493 12.95a.75.75 0 0 1 .449.82l-.073.345a.75.75 0 0 1-.978.545A7.47 7.47 0 0 1 2.5 12.5a.75.75 0 0 1 .75-.75h.352a.75.75 0 0 1 .736.601 6.01 6.01 0 0 0 1.155.599ZM10 2.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z" />
              </svg>
              {articles.length} article{articles.length === 1 ? "" : "s"} published
            </span>
            <span className="inline-flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-indigo-400" aria-hidden="true">
                <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 15.088 17 12.73 17 9.5a7 7 0 1 0-14 0c0 3.23 1.698 5.588 3.355 7.082a13.35 13.35 0 0 0 2.273 1.765 11.842 11.842 0 0 0 1.039.573l.018.008.006.003ZM10 11.25a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Z" clipRule="evenodd" />
              </svg>
              West Bengal, India
            </span>
          </div>

          {/* Bio */}
          <div className="space-y-3 text-gray-600 text-sm sm:text-base leading-relaxed">
            {AUTHOR.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Articles section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">
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
