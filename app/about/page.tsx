import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

const SITE_URL = "https://www.sarkaridarapan.com";

export const metadata: Metadata = {
  title: "About SarkariDarapan: Built for Every Indian Aspirant",
  description:
    "SarkariDarapan is built by Mahitosh Dey, a developer from West Bengal, to give every Indian aspirant a clean, fast, reliable Sarkari Naukri and Yojana portal.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About SarkariDarapan: Built for Every Indian Aspirant",
    description:
      "SarkariDarapan is built by Mahitosh Dey, a developer from West Bengal, to give every Indian aspirant a clean, fast, reliable Sarkari Naukri and Yojana portal.",
    url: `${SITE_URL}/about`,
    type: "website",
    images: [{ url: `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630 }],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SarkariDarapan",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  foundingDate: "2026",
  founder: {
    "@type": "Person",
    name: "Mahitosh Dey",
    url: "https://www.linkedin.com/in/mahitosh-dey-b70575147/",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@sarkaridarapan.com",
    contactType: "Customer Support",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.linkedin.com/in/mahitosh-dey-b70575147/",
    "https://t.me/sarkaridarapaninfo",
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mahitosh Dey",
  url: "https://www.linkedin.com/in/mahitosh-dey-b70575147/",
  jobTitle: "Founder & Developer",
  worksFor: {
    "@type": "Organization",
    name: "SarkariDarapan",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  sameAs: ["https://www.linkedin.com/in/mahitosh-dey-b70575147/"],
};

const coverItems = [
  {
    emoji: "\uD83D\uDCCB",
    title: "Sarkari Naukri",
    description:
      "Job notifications from UPSC, SSC, Railway, IBPS, Defence, Police and all State PSCs",
  },
  {
    emoji: "\uD83C\uDFDB\uFE0F",
    title: "Sarkari Yojana",
    description:
      "Central and state welfare schemes with eligibility, benefits and apply process",
  },
  {
    emoji: "\uD83D\uDCDD",
    title: "Entrance Exams",
    description:
      "Exam dates, syllabus and prep guides for JEE, NEET, CLAT, CUET and more",
  },
  {
    emoji: "\uD83C\uDFC6",
    title: "Results & Merit Lists",
    description:
      "Exam results and cut-offs published the moment they go official",
  },
  {
    emoji: "\uD83E\uDEAA",
    title: "Admit Cards",
    description:
      "Step-by-step admit card download guides with exam day checklists",
  },
  {
    emoji: "\uD83D\uDDFA\uFE0F",
    title: "All-State Coverage",
    description:
      "Dedicated guides for every state — UP, Bihar, Rajasthan, WB, MP, Maharashtra and 22 more",
  },
];

const editorialPromises = [
  "Every notification is sourced from official government portals only",
  "We always link to the original official source — verify everything yourself",
  "If a date or detail changes, we update our content within 24 hours",
  "All information is free. We will never charge you for government information.",
  "No fake jobs, no paid listings. Only real government notifications.",
];

const contactRows = [
  {
    emoji: "\uD83D\uDCE7",
    label: "General queries",
    href: "mailto:contact@sarkaridarapan.com",
    text: "contact@sarkaridarapan.com",
    external: false,
  },
  {
    emoji: "\u2708\uFE0F",
    label: "Telegram",
    href: "https://t.me/sarkaridarapaninfo",
    text: "t.me/sarkaridarapaninfo",
    external: true,
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
      </div>

      {/* 1. Hero Section */}
      <section className="max-w-4xl mx-auto px-4 pt-2 pb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          About SarkariDarapan
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          This isn&apos;t a big media company or a government agency. SarkariDarapan
          is built and maintained by one person — a developer from West Bengal — who
          got tired of seeing aspirants miss deadlines because reliable information
          was impossible to find in one place.
        </p>
      </section>

      {/* 2. Our Story Section */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Started</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              My name is Mahitosh Dey, and I&apos;m a developer from West Bengal. For years,
              I watched friends, family members, and people in online communities struggle
              with the same problem: finding accurate, up-to-date information about government
              jobs and schemes. The official websites are scattered, often slow, and rarely
              explain things in plain language. The private &quot;sarkari result&quot; sites
              aren&apos;t much better — most of them are cluttered, outdated, and don&apos;t
              cover all states properly.
            </p>
            <p>
              In 2026, I decided to stop complaining about the problem and start solving it.
              I built SarkariDarapan from scratch — not as a business venture, but as a
              genuine attempt to create the one resource I wished existed. A clean, fast,
              reliable platform where any aspirant can find job notifications, scheme details,
              and step-by-step guides without confusion.
            </p>
            <p>
              The goal was simple from day one: one platform where every aspirant — from UP
              to Kerala, from Bihar to West Bengal — can get the information they need without
              hopping between ten different websites. That goal hasn&apos;t changed.
              SarkariDarapan covers all states across India, and I update it every single day.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Mission Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl bg-blue-50 border border-blue-200 p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            To build India&apos;s most reliable, state-wise Sarkari Naukri and Yojana
            platform — where every aspirant gets accurate, timely, and easy-to-understand
            information, completely free, no matter which state they are from.
          </p>
        </div>
      </section>

      {/* 4. What We Cover */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">What We Cover</h2>
        <p className="text-gray-600 text-center mb-8">
          From your first application to your final result — we have got you covered.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {coverItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Editorial Promise */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Promise to You</h2>
          <ul className="space-y-4">
            {editorialPromises.map((promise, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg flex-shrink-0 mt-0.5">
                  &#10003;
                </span>
                <span className="text-gray-700 leading-relaxed">{promise}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Founder Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          The Person Behind This
        </h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-5">
            <div className="bg-blue-600 h-14 w-14 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
              MD
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Mahitosh Dey</h3>
              <p className="text-sm text-gray-500">Founder &amp; Developer, SarkariDarapan</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-5">
            I&apos;m a developer from West Bengal. I built SarkariDarapan in 2026 because
            I kept seeing a real gap — lakhs of aspirants across India searching for
            government job information across dozens of scattered, slow, and unreliable
            websites. I wanted to fix that. This platform is my attempt to give every
            Indian aspirant — regardless of their state or language — one clean, fast,
            and honest place to find what they need.
          </p>
          <a
            href="https://www.linkedin.com/in/mahitosh-dey-b70575147/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-600 px-5 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
          >
            <span className="font-bold">in</span>
            Connect on LinkedIn
          </a>
        </div>
      </section>

      {/* 7. Contact Section */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Get in Touch</h2>
          <p className="text-gray-600 text-center mb-8">
            Found an error? Have a suggestion? I read every message personally and
            reply within 24–48 hours.
          </p>
          <div className="space-y-3">
            {contactRows.map((row) => (
              <div
                key={row.label}
                className="flex items-center gap-4 bg-white rounded-xl border border-gray-200 px-5 py-4"
              >
                <span className="text-xl flex-shrink-0">{row.emoji}</span>
                <span className="text-sm font-medium text-gray-500 w-32 flex-shrink-0">
                  {row.label}
                </span>
                <a
                  href={row.href}
                  {...(row.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-blue-700 hover:underline font-medium text-sm"
                >
                  {row.text}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            &#128205; Based in West Bengal, India &middot; Serving aspirants across all 36 States &amp; UTs
          </p>
        </div>
      </section>
    </>
  );
}
