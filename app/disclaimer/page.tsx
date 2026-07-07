import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Disclaimer: SarkariDarapan is Not a Government Website",
  description:
    "SarkariDarapan is a private information portal, not a government body. Verify all notifications, dates, and eligibility from official government sources.",
  alternates: {
    canonical: `${SITE_URL}/disclaimer`,
  },
  openGraph: {
    title: `Disclaimer: SarkariDarapan is Not a Government Website`,
    description:
      "SarkariDarapan is a private information portal, not a government body. Verify all notifications, dates, and eligibility from official government sources.",
    url: `${SITE_URL}/disclaimer`,
    type: "website",
    images: [{ url: `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630 }],
  },
};

export default function DisclaimerPage() {
  return (
    <main className="container-custom py-8">
      <Breadcrumbs items={[{ label: "Disclaimer" }]} />

      <article className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Disclaimer</h1>
        <p className="mb-8 text-sm text-gray-500">
          Last Updated: May 20, 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Not a Government Website
            </h2>
            <p>
              SarkariDarapan (sarkaridarapan.com) is a privately owned and
              operated website. We are <strong>not affiliated</strong> with any
              government body, ministry, department, or organization in India.
              This website is an independent informational portal that aggregates
              and presents publicly available information about government jobs,
              schemes, results, and admit cards for the convenience of users.
            </p>
            <p className="mt-3">
              The names of government organizations, schemes, and programs used
              on this website are the property of their respective owners and are
              used here solely for informational and reference purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Information Accuracy
            </h2>
            <p>
              While we make every effort to ensure that the information published
              on SarkariDarapan is accurate, complete, and up-to-date, we do not
              make any warranties or representations of any kind, express or
              implied, about the completeness, accuracy, reliability,
              suitability, or availability of the information, products,
              services, or related graphics contained on the website.
            </p>
            <p className="mt-3">
              Government notifications, recruitment details, scheme guidelines,
              exam dates, and other information are subject to change at any time
              without prior notice by the respective government authorities. We
              strongly recommend that users always verify any information from
              the official government sources before making any decisions or
              taking any action.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Official References
            </h2>
            <p>
              All content published on this website is sourced from or references
              official government websites, public notifications, and press
              releases. We provide direct links to official sources wherever
              possible so that users can verify the information independently.
              These official links include but are not limited to:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>SSC (ssc.gov.in)</li>
              <li>UPSC (upsc.gov.in)</li>
              <li>IBPS (ibps.in)</li>
              <li>Indian Railways (indianrailways.gov.in)</li>
              <li>National Career Service (ncs.gov.in)</li>
              <li>India Government Portal (india.gov.in)</li>
              <li>State Government official portals</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              No Guarantee of Selection or Benefits
            </h2>
            <p>
              SarkariDarapan provides information about government job vacancies
              and government welfare schemes purely for informational purposes.
              We do <strong>not guarantee</strong>:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Selection or appointment in any government job</li>
              <li>Approval or eligibility for any government scheme</li>
              <li>Receipt of any financial benefit or subsidy</li>
              <li>Accuracy of vacancy counts, dates, or eligibility criteria</li>
              <li>Availability of any position or scheme at the time of reading</li>
            </ul>
            <p className="mt-3">
              Users are solely responsible for verifying their eligibility and
              completing application processes through the appropriate official
              channels.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Limitation of Liability
            </h2>
            <p>
              In no event shall SarkariDarapan, its owners, authors, or
              contributors be liable for any loss or damage, including without
              limitation, indirect or consequential loss or damage, or any loss
              or damage whatsoever arising from loss of data or profits arising
              out of, or in connection with, the use of this website.
            </p>
            <p className="mt-3">
              Any reliance you place on the information provided on this website
              is strictly at your own risk. We shall not be held responsible for
              any decisions made, applications submitted, or actions taken based
              on the content of this website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              External Links Disclaimer
            </h2>
            <p>
              This website contains links to external websites, primarily
              official government portals, that are not operated or controlled by
              SarkariDarapan. We have no control over the content, nature, or
              availability of those sites. The inclusion of any links does not
              necessarily imply a recommendation or endorsement of the views
              expressed within them.
            </p>
            <p className="mt-3">
              We cannot guarantee that external links will work at all times, as
              government websites may undergo maintenance, restructuring, or URL
              changes. If you find any broken link, please report it through our
              Contact page.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Advertising Disclaimer
            </h2>
            <p>
              SarkariDarapan displays advertisements through Google AdSense and
              may display other third-party advertisements. These advertisements
              are provided by third-party advertising networks and the content of
              these ads is not controlled by SarkariDarapan.
            </p>
            <p className="mt-3">
              We do not endorse or take responsibility for the products,
              services, or claims made in any advertisement displayed on this
              website. Users should exercise their own judgment and conduct their
              own research before engaging with any advertised product or
              service.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Content Changes
            </h2>
            <p>
              The information on this website may change at any time as
              government authorities update their notifications, modify scheme
              guidelines, or revise recruitment processes. We endeavor to update
              our content promptly, but there may be a delay between official
              changes and our updates.
            </p>
            <p className="mt-3">
              We reserve the right to modify, update, or remove any content on
              this website at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Copyright Notice
            </h2>
            <p>
              All original content on SarkariDarapan, including articles,
              summaries, and compilations, is the intellectual property of
              SarkariDarapan. Government data and notifications referenced belong
              to their respective government bodies. Unauthorized reproduction of
              our original content without permission is prohibited.
            </p>
          </section>

          <section className="rounded-lg border border-blue-200 bg-blue-50 p-6">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Disclaimer, find any
              inaccurate information, or wish to report a concern, please contact
              us at:
            </p>
            <p className="mt-3">
              <strong>Email:</strong> contact@sarkaridarapan.com
            </p>
            <p>
              <strong>Website:</strong> sarkaridarapan.com/contact
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
