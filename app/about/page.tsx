import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SarkariDarapan - your trusted source for latest government jobs (Sarkari Naukri), government schemes (Sarkari Yojana), exam results, admit cards, and recruitment updates across India.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: `About Us | ${SITE_NAME}`,
    description:
      "Learn about SarkariDarapan - your trusted source for latest government jobs, government schemes, exam results, admit cards, and recruitment updates across India.",
    url: `${SITE_URL}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About Us" }]} />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="prose prose-lg prose-blue max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About Us
          </h1>

          {/* Who We Are */}
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Who We Are
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              <strong>{SITE_NAME}</strong> is a dedicated platform providing the
              latest and most accurate information about government jobs (Sarkari
              Naukri), government schemes (Sarkari Yojana), exam results, admit
              cards, and other government recruitment updates across India. We
              started with a simple vision: to make government job information
              accessible, timely, and easy to understand for every citizen of
              India.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Every year, millions of candidates across India prepare for
              government examinations conducted by organizations such as the
              Union Public Service Commission (UPSC), Staff Selection Commission
              (SSC), Railway Recruitment Boards (RRBs), Institute of Banking
              Personnel Selection (IBPS), and various State Public Service
              Commissions. Keeping track of all the notifications, application
              dates, exam schedules, admit card releases, and result
              announcements from these diverse bodies can be overwhelming. That
              is where {SITE_NAME} steps in.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our team consists of experienced content creators who are
              passionate about public service opportunities. We monitor official
              government portals, employment newspapers, and gazette
              notifications daily to bring you verified and up-to-date
              information. Whether you are a fresh graduate looking for your
              first government job, or an experienced professional seeking a
              career change into the public sector, {SITE_NAME} is here to guide
              you every step of the way.
            </p>
          </section>

          {/* Our Mission */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our mission is to bridge the information gap between government
              opportunities and the citizens of India. Despite the digital
              transformation happening across the country, a large number of job
              seekers still struggle to find reliable, consolidated, and
              easy-to-understand information about government recruitments and
              welfare schemes.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We aim to democratize access to government opportunity information
              by presenting it in a clear, organized, and user-friendly format.
              We believe that every eligible citizen deserves to know about the
              opportunities available to them, whether it is a job opening in a
              central government ministry, a state-level recruitment drive, or a
              welfare scheme designed to support farmers, students, women, or
              senior citizens.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {SITE_NAME} is committed to providing information in both English
              and Hindi-friendly terminology so that candidates from all
              backgrounds can benefit from our platform. Our goal is not just to
              inform, but to empower citizens to take timely action on
              opportunities that can transform their lives and careers.
            </p>
          </section>

          {/* What We Offer */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              What We Offer
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {SITE_NAME} covers a wide range of government-related information.
              Here is a detailed overview of the categories we serve:
            </p>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">
                  &bull;
                </span>
                <span>
                  <strong>Government Job Notifications (Sarkari Naukri):</strong>{" "}
                  We publish detailed recruitment notifications from central and
                  state government departments, including eligibility criteria,
                  age limits, educational qualifications, selection process,
                  salary details, and direct links to official application forms.
                  We cover jobs from organizations like UPSC, SSC, Railway, IBPS,
                  Defence, Police, Teaching, State PSC, PSU, Healthcare, and
                  Engineering sectors.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">
                  &bull;
                </span>
                <span>
                  <strong>Government Schemes (Sarkari Yojana):</strong> We
                  provide comprehensive details about central and state
                  government welfare schemes, including eligibility, benefits,
                  application process, required documents, and official portal
                  links. From PM Kisan Samman Nidhi to Ayushman Bharat, from
                  Startup India to Beti Bachao Beti Padhao, we cover schemes
                  across agriculture, education, health, housing, employment,
                  women and child welfare, senior citizens, financial inclusion,
                  and rural development.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">
                  &bull;
                </span>
                <span>
                  <strong>Exam Results (Sarkari Result):</strong> We track and
                  publish exam results for major government examinations as soon
                  as they are declared. We provide direct links to official
                  result portals, cut-off marks, merit lists, and guidance on
                  next steps after results are announced.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">
                  &bull;
                </span>
                <span>
                  <strong>Admit Cards:</strong> We notify candidates as soon as
                  admit cards are released for government examinations. We
                  provide step-by-step instructions on how to download admit
                  cards, what documents to carry on exam day, and important exam
                  day guidelines.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">
                  &bull;
                </span>
                <span>
                  <strong>Syllabus and Exam Patterns:</strong> For major
                  government exams, we publish detailed syllabus breakdowns, exam
                  patterns, marking schemes, and preparation tips to help
                  candidates prepare effectively.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">
                  &bull;
                </span>
                <span>
                  <strong>State-Wise Information:</strong> We provide
                  state-specific government job and scheme information for all 28
                  states and 8 union territories of India, making it easy for
                  candidates to find opportunities relevant to their region.
                </span>
              </li>
            </ul>
          </section>

          {/* Our Content Standards */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              Our Content Standards
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We take the accuracy and reliability of our content very seriously.
              All the information published on {SITE_NAME} is sourced from
              official government websites, employment news publications, and
              gazette notifications. Our editorial team verifies every piece of
              information before it is published on the platform.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We always provide direct links to official sources so that our
              readers can cross-verify the information and access official
              application portals. We strongly encourage all our readers to
              verify important details such as eligibility criteria, application
              deadlines, and fee structures from official websites before making
              any decisions.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our content is regularly reviewed and updated to reflect any
              changes or corrections issued by the respective government
              organizations. We strive to publish information as quickly as
              possible so that candidates do not miss important deadlines.
            </p>
          </section>

          {/* Important Disclaimer */}
          <section className="mt-10 rounded-lg border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Important Disclaimer
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              <strong>{SITE_NAME}</strong> is an independent informational
              website. We are{" "}
              <strong>
                not affiliated with, endorsed by, or connected to any government
                body, ministry, department, or organization
              </strong>
              . The information provided on this website is for general
              informational purposes only and should not be considered as
              official government communication.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              While we make every effort to ensure accuracy, we recommend that
              readers always refer to official government websites and
              notifications for the most current and authoritative information.
              Any decision made based on the information on this website is at
              the reader&apos;s own discretion and responsibility.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              Contact Us
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We value feedback from our readers and are always looking to
              improve. If you have suggestions, corrections, or questions, please
              do not hesitate to reach out to us.
            </p>
            <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-6">
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:contact@sarkaridarapan.info"
                    className="text-blue-700 hover:underline"
                  >
                    contact@sarkaridarapan.info
                  </a>
                </li>
                <li>
                  <strong>Website:</strong>{" "}
                  <a
                    href={SITE_URL}
                    className="text-blue-700 hover:underline"
                  >
                    {SITE_URL}
                  </a>
                </li>
              </ul>
            </div>
            <p className="mt-4 text-gray-700 leading-relaxed">
              If you find any inaccuracy in our content or if a government
              notification has been updated, please let us know so we can correct
              it promptly. Your feedback helps us serve the community better.
            </p>
          </section>

          {/* Thank You */}
          <section className="mt-10 border-t border-gray-200 pt-8">
            <p className="text-gray-700 leading-relaxed">
              Thank you for visiting {SITE_NAME}. We are committed to being your
              most reliable companion in the journey towards securing a
              government job or benefiting from government welfare schemes. We
              wish you the very best in your endeavors.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
