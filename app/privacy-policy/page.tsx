import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for SarkariDarapan (sarkaridarapan.com). Learn how we collect, use, and protect your personal information when you use our government jobs and schemes information website.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  openGraph: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description:
      "Privacy Policy for SarkariDarapan. Learn how we collect, use, and protect your personal information.",
    url: `${SITE_URL}/privacy-policy`,
    type: "website",
    images: [{ url: `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630 }],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="prose prose-lg prose-blue max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            <strong>Last Updated:</strong> May 20, 2026
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Welcome to {SITE_NAME} (accessible at{" "}
            <a href={SITE_URL} className="text-blue-700 hover:underline">
              {SITE_URL}
            </a>
            ). Your privacy is critically important to us. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our website. Please read this privacy
            policy carefully. If you do not agree with the terms of this privacy
            policy, please do not access the website.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            We reserve the right to make changes to this Privacy Policy at any
            time and for any reason. We will alert you about any changes by
            updating the &quot;Last Updated&quot; date of this Privacy Policy.
            You are encouraged to periodically review this Privacy Policy to stay
            informed of updates.
          </p>

          {/* Section 1: Information We Collect */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              1. Information We Collect
            </h2>

            <h3 className="mt-6 text-xl font-medium text-gray-900">
              1.1 Personal Information You Provide
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We may collect personal information that you voluntarily provide to
              us when you contact us through our contact form, subscribe to our
              newsletter, or otherwise interact with us. The personal information
              we may collect includes:
            </p>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">&bull;</span>
                <span>Your name</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">&bull;</span>
                <span>Email address</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">&bull;</span>
                <span>Subject and content of your messages to us</span>
              </li>
            </ul>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We do not collect sensitive personal information such as Aadhaar
              numbers, PAN numbers, bank account details, passwords, or any
              government-issued identification numbers through our website.
            </p>

            <h3 className="mt-6 text-xl font-medium text-gray-900">
              1.2 Information Automatically Collected
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              When you visit our website, certain information is automatically
              collected from your device. This information may include your IP
              address, browser type and version, operating system, referring
              URLs, the pages you view on our site, the time and date of your
              visit, the time spent on each page, the links you click, and other
              diagnostic data. This information is collected through cookies, log
              files, and similar tracking technologies.
            </p>

            <h3 className="mt-6 text-xl font-medium text-gray-900">
              1.3 Device Information
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We may collect information about the device you use to access our
              website, including the type of device, operating system, unique
              device identifiers, screen resolution, and browser type. This
              information helps us optimize our website for different devices and
              improve your browsing experience.
            </p>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              2. How We Use Your Information
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We use the information we collect for the following purposes:
            </p>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">&bull;</span>
                <span>
                  <strong>To provide and maintain our website:</strong> We use
                  your information to ensure our website functions properly, to
                  deliver the content you request, and to maintain the security
                  of our platform.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">&bull;</span>
                <span>
                  <strong>To respond to your inquiries:</strong> When you contact
                  us through our contact form, we use your name and email address
                  to respond to your questions or feedback.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">&bull;</span>
                <span>
                  <strong>To analyze website usage:</strong> We use analytics
                  data to understand how visitors interact with our website, which
                  content is most popular, and how we can improve user
                  experience.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">&bull;</span>
                <span>
                  <strong>To serve relevant advertisements:</strong> We use
                  cookies and similar technologies to display advertisements that
                  may be of interest to you based on your browsing behavior.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">&bull;</span>
                <span>
                  <strong>To comply with legal obligations:</strong> We may
                  process your information to comply with applicable laws,
                  regulations, and legal processes.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">&bull;</span>
                <span>
                  <strong>To prevent fraud and abuse:</strong> We use technical
                  information to detect and prevent fraudulent activity, spam,
                  and other harmful behavior on our website.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 3: Cookies and Tracking Technologies */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              3. Cookies and Tracking Technologies
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our website uses cookies and similar tracking technologies to
              enhance your browsing experience, analyze site traffic, and serve
              personalized content and advertisements. A cookie is a small text
              file that is placed on your device when you visit a website. Below
              is a description of the types of cookies we use:
            </p>

            <h3 className="mt-6 text-xl font-medium text-gray-900">
              3.1 Essential Cookies
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              These cookies are necessary for the website to function properly.
              They enable basic features such as page navigation, secure access
              to certain areas of the website, and remembering your preferences.
              The website cannot function properly without these cookies, and
              they cannot be disabled.
            </p>

            <h3 className="mt-6 text-xl font-medium text-gray-900">
              3.2 Analytics Cookies
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              These cookies help us understand how visitors interact with our
              website by collecting and reporting information anonymously. We use
              this data to improve the performance and content of our website.
            </p>

            <h3 className="mt-6 text-xl font-medium text-gray-900">
              3.3 Advertising Cookies
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              These cookies are used to deliver advertisements that are more
              relevant to you and your interests. They are also used to limit the
              number of times you see an advertisement and to measure the
              effectiveness of advertising campaigns. These cookies are placed by
              third-party advertising networks with our permission.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              You can control and manage cookies through your browser settings.
              Most browsers allow you to refuse or delete cookies. However,
              please note that disabling cookies may affect the functionality of
              our website and you may not be able to access all features.
            </p>
          </section>

          {/* Section 4: Google AdSense and Third-Party Advertising */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              4. Google AdSense and Third-Party Advertising
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We use Google AdSense, a third-party advertising service provided
              by Google LLC, to display advertisements on our website. Google
              AdSense uses cookies, including the DoubleClick DART cookie, to
              serve ads based on your prior visits to our website and other
              websites on the internet.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Google&apos;s use of the DART cookie enables it and its partners to
              serve ads to you based on your visit to {SITE_NAME} and other sites
              on the internet. The DART cookie is used by Google in the ads
              served on the websites of its partners, such as websites displaying
              AdSense ads or participating in Google certified ad networks.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              <strong>
                You may opt out of the use of the DART cookie for
                interest-based advertising by visiting the Google Ads Settings
                page at{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  https://www.google.com/settings/ads
                </a>
                .
              </strong>
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Third-party vendors, including Google, use cookies to serve ads
              based on your prior visits to this website or other websites. You
              may opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                www.aboutads.info/choices
              </a>{" "}
              or the Network Advertising Initiative opt-out page at{" "}
              <a
                href="https://optout.networkadvertising.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                optout.networkadvertising.org
              </a>
              .
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We do not have direct control over the cookies used by Google
              AdSense or other third-party advertisers. We recommend that you
              review the privacy policies of these third-party services to
              understand their data collection and usage practices.
            </p>
          </section>

          {/* Section 5: Google Analytics */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              5. Google Analytics
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We use Google Analytics, a web analytics service provided by Google
              LLC, to analyze the usage of our website. Google Analytics uses
              cookies to collect information about how visitors use our site.
              This information includes the number of visitors, the pages they
              visit, the time spent on each page, and the sources from which they
              arrived at our site.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              The information generated by the cookie about your use of the
              website is transmitted to and stored by Google on servers. Google
              will use this information for the purpose of evaluating your use of
              the website, compiling reports on website activity, and providing
              other services relating to website activity and internet usage.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Google Analytics collects information anonymously and reports
              website trends without identifying individual visitors. You can
              opt out of being tracked by Google Analytics by installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              . For more information on Google Analytics privacy practices, visit
              the{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                Google Privacy Policy page
              </a>
              .
            </p>
          </section>

          {/* Section 6: Third-Party Links */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              6. Third-Party Links
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our website contains links to official government websites,
              recruitment portals, and other third-party websites. These links
              are provided for your convenience and to help you access official
              information directly. Some of the external websites we commonly
              link to include:
            </p>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">&bull;</span>
                <span>Official government recruitment portals (e.g., UPSC, SSC, Railway websites)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">&bull;</span>
                <span>Government scheme application portals</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">&bull;</span>
                <span>Official result declaration websites</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">&bull;</span>
                <span>Government gazette and notification repositories</span>
              </li>
            </ul>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Please note that we have no control over the content, privacy
              policies, or practices of these third-party websites. We are not
              responsible for the privacy practices or the content of these
              external sites. We encourage you to review the privacy policy of
              every website you visit.
            </p>
          </section>

          {/* Section 7: Data Security */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              7. Data Security
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. Our website uses
              SSL/TLS encryption (HTTPS) to secure data transmission between
              your browser and our servers.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              However, please be aware that no method of transmission over the
              internet or method of electronic storage is 100% secure. While we
              strive to use commercially acceptable means to protect your
              personal information, we cannot guarantee its absolute security.
              You share information with us at your own risk.
            </p>
          </section>

          {/* Section 8: Children's Privacy */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              8. Children&apos;s Privacy
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our website is not intended for children under the age of 13. We
              do not knowingly collect personal information from children under
              13 years of age. If we become aware that we have collected personal
              information from a child under 13 without verification of parental
              consent, we will take steps to delete that information from our
              servers promptly.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              If you are a parent or guardian and you are aware that your child
              has provided us with personal information, please contact us at{" "}
              <a
                href="mailto:contact@sarkaridarapan.com"
                className="text-blue-700 hover:underline"
              >
                contact@sarkaridarapan.com
              </a>{" "}
              so that we can take the necessary actions.
            </p>
          </section>

          {/* Section 9: Your Rights */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              9. Your Rights
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Depending on your location and applicable laws, you may have
              certain rights regarding your personal information. These rights
              may include:
            </p>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">&bull;</span>
                <span>
                  <strong>Right of Access:</strong> You have the right to request
                  copies of the personal information we hold about you.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">&bull;</span>
                <span>
                  <strong>Right to Rectification:</strong> You have the right to
                  request that we correct any information you believe is
                  inaccurate or complete information you believe is incomplete.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">&bull;</span>
                <span>
                  <strong>Right to Erasure:</strong> You have the right to
                  request that we delete your personal data, under certain
                  conditions.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">&bull;</span>
                <span>
                  <strong>Right to Restrict Processing:</strong> You have the
                  right to request that we restrict the processing of your
                  personal data, under certain conditions.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">&bull;</span>
                <span>
                  <strong>Right to Object:</strong> You have the right to object
                  to our processing of your personal data, under certain
                  conditions.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">&bull;</span>
                <span>
                  <strong>Right to Data Portability:</strong> You have the right
                  to request that we transfer the data we have collected to
                  another organization, or directly to you, under certain
                  conditions.
                </span>
              </li>
            </ul>
            <p className="mt-4 text-gray-700 leading-relaxed">
              If you wish to exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:contact@sarkaridarapan.com"
                className="text-blue-700 hover:underline"
              >
                contact@sarkaridarapan.com
              </a>
              . We will respond to your request within 30 days.
            </p>
          </section>

          {/* Section 10: Data Retention */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              10. Data Retention
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We retain your personal information only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use your information to the extent necessary to comply
              with our legal obligations, resolve disputes, and enforce our
              policies. Usage data collected by analytics tools is generally
              retained for a period of 26 months before being automatically
              deleted.
            </p>
          </section>

          {/* Section 11: Changes to This Privacy Policy */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              11. Changes to This Privacy Policy
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, legal requirements, or other
              factors. When we make material changes to this Privacy Policy, we
              will notify you by updating the &quot;Last Updated&quot; date at
              the top of this page. We encourage you to review this page
              periodically to stay informed about how we are protecting your
              information.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Your continued use of the website after the posting of changes
              constitutes your acceptance of such changes.
            </p>
          </section>

          {/* Section 12: Contact Information */}
          <section className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              12. Contact Information
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy,
              or if you wish to exercise your rights regarding your personal
              information, please contact us:
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>
                <strong>Website:</strong>{" "}
                <a href={SITE_URL} className="text-blue-700 hover:underline">
                  {SITE_URL}
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:contact@sarkaridarapan.com"
                  className="text-blue-700 hover:underline"
                >
                  contact@sarkaridarapan.com
                </a>
              </li>
              <li>
                <strong>Contact Page:</strong>{" "}
                <a
                  href={`${SITE_URL}/contact`}
                  className="text-blue-700 hover:underline"
                >
                  {SITE_URL}/contact
                </a>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </>
  );
}
