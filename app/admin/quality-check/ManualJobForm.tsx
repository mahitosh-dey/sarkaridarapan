"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { JOB_CATEGORIES, STATES } from "@/lib/constants";

export default function ManualJobForm() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [category, setCategory] = useState("ssc");
  const [state, setState] = useState("all-india");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/quality-check/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, title, organization, category, state }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage({ type: "error", text: data.error || "Failed to create draft job" });
        return;
      }

      setMessage({
        type: "success",
        text: `Draft created successfully (slug: ${data.slug}). It should appear in "Drafts Pending Content" below. Click "Generate Content" to create the article.`,
      });
      setUrl("");
      setTitle("");
      setOrganization("");
      setCategory("ssc");
      setState("all-india");
      router.refresh();
    } catch {
      setMessage({ type: "error", text: "Network error — check your connection" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <span className="text-lg font-semibold text-gray-900">
          Add New Job (Quick Entry)
        </span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <form onSubmit={handleSubmit} className="px-4 pb-4 space-y-4 border-t border-gray-100 pt-4">
          {message && (
            <div
              className={`p-3 text-sm rounded-md ${
                message.type === "error"
                  ? "text-red-700 bg-red-50 border border-red-200"
                  : "text-green-700 bg-green-50 border border-green-200"
              }`}
            >
              {message.text}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
                Notification URL
              </label>
              <input
                id="url"
                type="url"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.gov.in/notification.pdf"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Job Title
              </label>
              <input
                id="title"
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="SSC CGL 2025 Recruitment"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                Organization
              </label>
              <input
                id="organization"
                type="text"
                required
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Staff Selection Commission"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {JOB_CATEGORIES.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <select
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all-india">All India</option>
                {STATES.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Draft"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
