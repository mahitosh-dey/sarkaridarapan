"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SCHEME_CATEGORIES, STATES } from "@/lib/constants";

export default function ManualSchemeForm() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [ministry, setMinistry] = useState("");
  const [category, setCategory] = useState("education");
  const [state, setState] = useState("all-india");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/schemes/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, title, ministry, category, state }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage({ type: "error", text: data.error || "Failed to create draft scheme" });
        return;
      }

      setMessage({
        type: "success",
        text: `Draft created successfully (slug: ${data.slug}). Click "Generate Content" to create the article.`,
      });
      setUrl("");
      setTitle("");
      setMinistry("");
      setCategory("education");
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
          Add New Scheme (Quick Entry)
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
              <label htmlFor="scheme-url" className="block text-sm font-medium text-gray-700 mb-1">
                Official URL
              </label>
              <input
                id="scheme-url"
                type="url"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.gov.in/scheme-details"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="scheme-title" className="block text-sm font-medium text-gray-700 mb-1">
                Scheme Title
              </label>
              <input
                id="scheme-title"
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="PM Kisan Samman Nidhi Yojana"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="scheme-ministry" className="block text-sm font-medium text-gray-700 mb-1">
                Ministry
              </label>
              <input
                id="scheme-ministry"
                type="text"
                required
                value={ministry}
                onChange={(e) => setMinistry(e.target.value)}
                placeholder="Ministry of Agriculture"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="scheme-category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="scheme-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {SCHEME_CATEGORIES.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="scheme-state" className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <select
                id="scheme-state"
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
