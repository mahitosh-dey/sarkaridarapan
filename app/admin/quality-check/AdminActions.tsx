"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface AdminActionsProps {
  jobId: string;
  slug: string;
  hasContent: boolean;
}

export default function AdminActions({ jobId, slug, hasContent }: AdminActionsProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [generateResult, setGenerateResult] = useState<string | null>(null);
  const [enhanceResult, setEnhanceResult] = useState<string | null>(null);

  async function handleAction(
    action: "approve" | "dismiss" | "delete"
  ) {
    if (action === "delete" && !confirm("Permanently delete this job?")) {
      return;
    }

    setLoading(action);

    try {
      const res = await fetch(`/api/admin/quality-check/${action}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobId }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error || `Failed to ${action} job`);
        return;
      }

      router.refresh();
    } catch {
      alert(`Network error while trying to ${action} job`);
    } finally {
      setLoading(null);
    }
  }

  async function handleGenerate() {
    setLoading("generate");
    setGenerateResult(null);

    try {
      const res = await fetch("/api/admin/quality-check/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobId }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to generate content");
        return;
      }

      const msg = `${data.wordCount} words, ${data.readingTime}${data.flags ? ` | Flags: ${data.flags.length}` : ""}`;
      setGenerateResult(msg);
      router.refresh();
    } catch {
      alert("Network error while generating content");
    } finally {
      setLoading(null);
    }
  }

  async function handleEnhance() {
    setLoading("enhance");
    setEnhanceResult(null);

    try {
      const res = await fetch("/api/admin/quality-check/enhance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobId }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to enhance content");
        return;
      }

      const msg = `Enhanced: ${data.wordCount} words, ${data.readingTime}${data.flags ? ` | Flags: ${data.flags.length}` : ""}`;
      setEnhanceResult(msg);
      router.refresh();
    } catch {
      alert("Network error while enhancing content");
    } finally {
      setLoading(null);
    }
  }

  const previewHref = `/admin/preview/${slug}`;

  return (
    <div className="flex flex-col gap-2 shrink-0">
      <div className="flex items-center gap-2">
        {!hasContent ? (
          <>
            <button
              onClick={handleGenerate}
              disabled={loading !== null}
              className="px-3 py-1.5 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors disabled:opacity-50"
            >
              {loading === "generate" ? "Generating..." : "Generate Content"}
            </button>
            <button
              onClick={() => handleAction("delete")}
              disabled={loading !== null}
              className="px-3 py-1.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors disabled:opacity-50"
            >
              {loading === "delete" ? "..." : "Delete"}
            </button>
          </>
        ) : (
          <>
            <a
              href={previewHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              Preview
            </a>
            <button
              onClick={handleEnhance}
              disabled={loading !== null}
              className="px-3 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors disabled:opacity-50"
            >
              {loading === "enhance" ? "Enhancing..." : "Enhance with Gemini"}
            </button>
            <button
              onClick={() => handleAction("approve")}
              disabled={loading !== null}
              className="px-3 py-1.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors disabled:opacity-50"
            >
              {loading === "approve" ? "..." : "Approve"}
            </button>
            <button
              onClick={() => handleAction("dismiss")}
              disabled={loading !== null}
              className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors disabled:opacity-50"
            >
              {loading === "dismiss" ? "..." : "Dismiss"}
            </button>
            <button
              onClick={() => handleAction("delete")}
              disabled={loading !== null}
              className="px-3 py-1.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors disabled:opacity-50"
            >
              {loading === "delete" ? "..." : "Delete"}
            </button>
          </>
        )}
      </div>
      {generateResult && (
        <p className="text-xs text-gray-500">{generateResult}</p>
      )}
      {enhanceResult && (
        <p className="text-xs text-blue-600">{enhanceResult}</p>
      )}
    </div>
  );
}
