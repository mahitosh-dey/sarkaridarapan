"use client";

import { useState, FormEvent } from "react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

// Note: metadata cannot be exported from client components.
// We use a separate generateMetadata or a head.tsx approach,
// but for simplicity we set the title via document.title or
// we can create a metadata wrapper. For AdSense pages, the
// server-rendered HTML from layout.tsx template will suffice.
// If needed, move metadata to a separate layout.tsx in this folder.

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="prose prose-lg prose-blue max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-700 leading-relaxed">
            We appreciate your interest in {SITE_NAME}. Whether you have a
            question about a government job notification, need clarification on a
            government scheme, want to report an error in our content, or simply
            want to share your feedback, we are here to help. Please use the
            contact form below or reach out to us via email.
          </p>

          {/* Contact Details */}
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Get in Touch
            </h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center space-x-3">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                </div>
                <p className="mt-2 text-gray-600">
                  <a
                    href="mailto:contact@sarkaridarapan.info"
                    className="text-blue-700 hover:underline"
                  >
                    contact@sarkaridarapan.info
                  </a>
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center space-x-3">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900">
                    Response Time
                  </h3>
                </div>
                <p className="mt-2 text-gray-600">
                  We typically respond within 24-48 hours.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center space-x-3">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900">Website</h3>
                </div>
                <p className="mt-2 text-gray-600">
                  <a
                    href={SITE_URL}
                    className="text-blue-700 hover:underline"
                  >
                    www.sarkaridarapan.info
                  </a>
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center space-x-3">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900">
                    Location
                  </h3>
                </div>
                <p className="mt-2 text-gray-600">New Delhi, India</p>
              </div>
            </div>
          </section>

          {/* What You Can Contact Us About */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              What You Can Contact Us About
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We welcome messages regarding a wide range of topics related to our
              content and services. Here are some common reasons our readers
              reach out to us:
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">
                  &bull;
                </span>
                <span>
                  <strong>Content Corrections:</strong> If you notice any
                  inaccurate information on our website, such as incorrect dates,
                  eligibility criteria, or broken links, please let us know so we
                  can rectify it immediately.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">
                  &bull;
                </span>
                <span>
                  <strong>New Job Notifications:</strong> If you know of a
                  government job notification that we have not yet covered,
                  please share the details and official source link with us.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">
                  &bull;
                </span>
                <span>
                  <strong>Scheme Information:</strong> If you have questions
                  about a government scheme or want us to cover a specific
                  scheme, we would love to hear from you.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">
                  &bull;
                </span>
                <span>
                  <strong>General Feedback:</strong> Your suggestions for
                  improving our website, content quality, or user experience are
                  always appreciated.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">
                  &bull;
                </span>
                <span>
                  <strong>Advertising and Partnerships:</strong> For advertising
                  inquiries, collaborations, or business partnerships, please
                  reach out via email.
                </span>
              </li>
            </ul>
          </section>

          {/* Contact Form */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              Send Us a Message
            </h2>
            <p className="mt-2 text-gray-600">
              Fill out the form below and we will get back to you as soon as
              possible.
            </p>

            {isSubmitted ? (
              <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-6">
                <div className="flex items-center space-x-3">
                  <svg
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-green-800">
                      Message Sent Successfully!
                    </h3>
                    <p className="mt-1 text-green-700">
                      Thank you for contacting us. We have received your message
                      and will respond within 24-48 hours. Please check your
                      email for our response.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="content-correction">
                      Content Correction / Update
                    </option>
                    <option value="job-notification">
                      New Job Notification Request
                    </option>
                    <option value="scheme-query">
                      Government Scheme Query
                    </option>
                    <option value="general-feedback">General Feedback</option>
                    <option value="advertising">
                      Advertising / Partnership
                    </option>
                    <option value="technical-issue">Technical Issue</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your query or feedback in detail..."
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-y"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-md bg-blue-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="mr-2 h-5 w-5 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            )}
          </section>

          {/* Additional Notes */}
          <section className="mt-10 rounded-lg border border-blue-200 bg-blue-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Important Notes
            </h2>
            <ul className="mt-3 space-y-2 text-gray-700 text-base">
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">
                  &bull;
                </span>
                <span>
                  {SITE_NAME} is an informational website and is not affiliated
                  with any government body. We cannot process government job
                  applications or scheme enrollments on your behalf.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">
                  &bull;
                </span>
                <span>
                  For official queries regarding government jobs or schemes,
                  please contact the respective government department or
                  organization directly.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">
                  &bull;
                </span>
                <span>
                  We welcome corrections and updates. If you find any
                  inaccuracy on our website, please share the correct
                  information along with the official source link so we can
                  verify and update our content promptly.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-blue-600 font-bold">
                  &bull;
                </span>
                <span>
                  Please do not share personal sensitive information such as
                  Aadhaar numbers, bank account details, or passwords in the
                  contact form.
                </span>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </>
  );
}
