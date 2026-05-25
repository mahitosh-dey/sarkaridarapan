"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { ContentType } from "@/lib/admin-utils";

interface AdminActionsProps {
  itemId: string;
  slug: string;
  hasContent: boolean;
  contentType?: ContentType;
}

function getApiBase(contentType: ContentType): string {
  switch (contentType) {
    case "job":
      return "/api/admin/quality-check";
    case "scheme":
      return "/api/admin/schemes";
    case "entrance-exam":
      return "/api/admin/entrance-exams";
  }
}

function getIdKey(contentType: ContentType): string {
  switch (contentType) {
    case "job":
      return "jobId";
    case "scheme":
      return "schemeId";
    case "entrance-exam":
      return "examId";
  }
}

function getLabel(contentType: ContentType): string {
  switch (contentType) {
    case "job":
      return "job";
    case "scheme":
      return "scheme";
    case "entrance-exam":
      return "exam";
  }
}

export default function AdminActions({
  itemId,
  slug,
  hasContent,
  contentType = "job",
}: AdminActionsProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [generateResult, setGenerateResult] = useState<string | null>(null);
  const [enhanceResult, setEnhanceResult] = useState<string | null>(null);

  const apiBase = getApiBase(contentType);
  const idKey = getIdKey(contentType);
  const label = getLabel(contentType);

  async function handleAction(action: "approve" | "dismiss" | "delete") {
    if (action === "delete" && !confirm(`Permanently delete this ${label}?`)) {
      return;
    }

    setLoading(action);

    try {
      const res = await fetch(`${apiBase}/${action}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [idKey]: itemId }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error || `Failed to ${action} ${label}`);
        return;
      }

      router.refresh();
    } catch {
      alert(`Network error while trying to ${action} ${label}`);
    } finally {
      setLoading(null);
    }
  }

  async function handleGenerate() {
    setLoading("generate");
    setGenerateResult(null);

    try {
      const res = await fetch(`${apiBase}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [idKey]: itemId }),
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
      const res = await fetch(`${apiBase}/enhance`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [idKey]: itemId }),
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

  const previewHref =
    contentType === "job"
      ? `/admin/preview/${slug}`
      : `/admin/preview/${slug}?type=${contentType}`;

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
