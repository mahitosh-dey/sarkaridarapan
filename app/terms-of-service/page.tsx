import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for SarkariDarapan - Rules and guidelines for using our government jobs and schemes information website.",
};

export default function TermsOfServicePage() {
  return (
    <main className="container-custom py-8">
      <Breadcrumbs items={[{ label: "Terms of Service" }]} />

      <article className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">
          Terms of Service
        </h1>
        <p className="mb-8 text-sm text-gray-500">
          Last Updated: May 20, 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using SarkariDarapan (sarkaridarapan.com),
              hereinafter referred to as &quot;the Website,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our,&quot; you agree to be bound by these
              Terms of Service (&quot;Terms&quot;). If you do not agree with any
              part of these Terms, you must not use this website.
            </p>
            <p className="mt-3">
              These Terms apply to all visitors, users, and others who access or
              use the Website. We reserve the right to update or modify these
              Terms at any time without prior notice. Your continued use of the
              Website after any changes constitutes your acceptance of the new
              Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              2. Use of Website
            </h2>
            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              2.1 Permitted Uses
            </h3>
            <p>You may use this Website to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                Browse and read information about government jobs and
                recruitment notifications
              </li>
              <li>
                Access details about government schemes, benefits, and welfare
                programs
              </li>
              <li>
                Check exam results, admit card availability, and syllabus
                information
              </li>
              <li>
                Share content from this Website on social media with proper
                attribution
              </li>
              <li>
                Use the information as a reference while applying through
                official government portals
              </li>
            </ul>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              2.2 Prohibited Uses
            </h3>
            <p>You must not:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                Reproduce, duplicate, copy, sell, or exploit any portion of the
                Website for commercial purposes without express written
                permission
              </li>
              <li>
                Use automated systems, bots, scrapers, or similar tools to
                access or collect data from the Website
              </li>
              <li>
                Attempt to interfere with or disrupt the Website&apos;s servers,
                networks, or infrastructure
              </li>
              <li>
                Impersonate SarkariDarapan or misrepresent your affiliation with
                us
              </li>
              <li>
                Use the Website to distribute spam, malware, or harmful content
              </li>
              <li>
                Create fake or misleading copies of our pages to deceive users
              </li>
              <li>
                Charge others for access to information freely available on this
                Website
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              3. Intellectual Property
            </h2>
            <p>
              The Website and its original content, features, and functionality
              are owned by SarkariDarapan and are protected by international
              copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mt-3">
              Our original content includes, but is not limited to, article
              summaries, compilations, analysis, website design, logos, and
              graphics. Government data, notifications, and official information
              referenced on this Website belong to the respective government
              bodies and are used here for informational purposes under fair use.
            </p>
            <p className="mt-3">
              You may quote short excerpts from our articles with proper
              attribution and a link back to the original page on SarkariDarapan.
              Bulk reproduction of our content is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              4. Content Accuracy
            </h2>
            <p>
              We strive to provide accurate and up-to-date information about
              government jobs, schemes, and related topics. However, we do not
              warrant the accuracy, completeness, or reliability of any
              information on the Website.
            </p>
            <p className="mt-3">
              All information is sourced from official government websites and
              public notifications. Government authorities may update, modify, or
              withdraw their notifications at any time. We recommend users always
              cross-verify information from the official government sources
              before taking any action, including submitting applications or
              making financial decisions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              5. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, SarkariDarapan
              and its owners, employees, and contributors shall not be liable
              for:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                Any direct, indirect, incidental, special, consequential, or
                punitive damages arising from your use of or inability to use
                the Website
              </li>
              <li>
                Any errors, omissions, or inaccuracies in the content published
                on the Website
              </li>
              <li>
                Any loss of data, income, profit, or business opportunities
                resulting from the use of information on the Website
              </li>
              <li>
                Any decisions made or actions taken by users based on the
                information provided on the Website
              </li>
              <li>
                Any damage caused by viruses, malware, or other technologically
                harmful material that may infect your devices due to your use of
                the Website or downloading of content from it
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              6. Third-Party Links
            </h2>
            <p>
              This Website contains links to third-party websites, primarily
              official government portals. These links are provided for your
              convenience and reference only. We do not endorse and are not
              responsible for the content, privacy policies, or practices of
              third-party websites.
            </p>
            <p className="mt-3">
              We encourage you to read the terms and conditions and privacy
              policies of any third-party website you visit through links on our
              Website. Your interaction with third-party websites is solely
              between you and the third party.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              7. Advertising
            </h2>
            <p>
              This Website displays advertisements through Google AdSense and
              potentially other advertising networks. By using the Website, you
              acknowledge and agree that:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                Advertisements are served by third-party advertising networks
                and their content is not controlled by us
              </li>
              <li>
                We do not endorse any products or services advertised on the
                Website
              </li>
              <li>
                Advertisers may use cookies and similar technologies to serve ads
                based on your browsing history
              </li>
              <li>
                You interact with advertisements at your own risk and discretion
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              8. User Conduct
            </h2>
            <p>
              When using our Website, including any interactive features such as
              contact forms or comments (if available), you agree to:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Provide accurate information when submitting any forms</li>
              <li>
                Not submit false, misleading, or fraudulent information
              </li>
              <li>
                Not use the Website to harass, abuse, or harm other users or
                individuals
              </li>
              <li>
                Not post or transmit any defamatory, obscene, or offensive
                content
              </li>
              <li>
                Respect the intellectual property rights of SarkariDarapan and
                third parties
              </li>
              <li>Comply with all applicable Indian laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              9. Privacy
            </h2>
            <p>
              Your use of the Website is also governed by our Privacy Policy,
              which describes how we collect, use, and protect your personal
              information. By using the Website, you consent to the collection
              and use of information as described in our{" "}
              <a
                href="/privacy-policy"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              10. Modifications to Terms
            </h2>
            <p>
              We reserve the right to modify or replace these Terms at any time
              at our sole discretion. If a revision is material, we will make
              reasonable efforts to provide at least 30 days&apos; notice prior
              to any new terms taking effect, such as updating the &quot;Last
              Updated&quot; date at the top of this page.
            </p>
            <p className="mt-3">
              It is your responsibility to review these Terms periodically for
              changes. Your continued use of the Website following the posting of
              any changes to these Terms constitutes acceptance of those changes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              11. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India. Any disputes arising under or in connection with
              these Terms shall be subject to the exclusive jurisdiction of the
              courts located in India.
            </p>
            <p className="mt-3">
              If any provision of these Terms is found to be invalid or
              unenforceable by a court of competent jurisdiction, the remaining
              provisions shall continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              12. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless SarkariDarapan,
              its owners, employees, and contributors from and against any and
              all claims, damages, obligations, losses, liabilities, costs, and
              expenses arising from your use of the Website or your violation of
              these Terms.
            </p>
          </section>

          <section className="rounded-lg border border-blue-200 bg-blue-50 p-6">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <p className="mt-3">
              <strong>Email:</strong> contact@sarkaridarapan.com
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="/contact" className="text-blue-600 hover:underline">
                sarkaridarapan.com/contact
              </a>
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
