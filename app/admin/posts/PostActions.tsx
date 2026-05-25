"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ContentType = "job" | "scheme" | "entrance-exam";

interface PostActionsProps {
  itemId: string;
  slug: string;
  isActive: boolean;
  contentType?: ContentType;
}

function getApiBase(contentType: ContentType): string {
  switch (contentType) {
    case "scheme":
      return "/api/admin/schemes";
    case "entrance-exam":
      return "/api/admin/entrance-exams";
    default:
      return "/api/admin/quality-check";
  }
}

function getIdKey(contentType: ContentType): string {
  switch (contentType) {
    case "scheme":
      return "schemeId";
    case "entrance-exam":
      return "examId";
    default:
      return "jobId";
  }
}

function getPreviewPath(contentType: ContentType, slug: string): string {
  switch (contentType) {
    case "scheme":
      return `/admin/preview/${slug}?type=scheme`;
    case "entrance-exam":
      return `/admin/preview/${slug}?type=entrance-exam`;
    default:
      return `/admin/preview/${slug}`;
  }
}

export default function PostActions({
  itemId,
  slug,
  isActive,
  contentType = "job",
}: PostActionsProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  const apiBase = getApiBase(contentType);
  const idKey = getIdKey(contentType);
  const typeLabel = contentType === "entrance-exam" ? "exam" : contentType;

  async function handlePublish() {
    setLoading("publish");
    try {
      const res = await fetch(`${apiBase}/approve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [idKey]: itemId }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error || `Failed to publish ${typeLabel}`);
        return;
      }
      router.refresh();
    } catch {
      alert("Network error while publishing");
    } finally {
      setLoading(null);
    }
  }

  async function handleUnpublish() {
    if (!confirm(`Unpublish this ${typeLabel}? It will be hidden from the public site.`)) {
      return;
    }
    setLoading("unpublish");
    try {
      const res = await fetch(`${apiBase}/unpublish`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [idKey]: itemId }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error || `Failed to unpublish ${typeLabel}`);
        return;
      }
      router.refresh();
    } catch {
      alert("Network error while unpublishing");
    } finally {
      setLoading(null);
    }
  }

  async function handleDelete() {
    if (!confirm(`Permanently delete this ${typeLabel}?`)) {
      return;
    }
    setLoading("delete");
    try {
      const res = await fetch(`${apiBase}/delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [idKey]: itemId }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error || `Failed to delete ${typeLabel}`);
        return;
      }
      router.refresh();
    } catch {
      alert("Network error while deleting");
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="flex items-center gap-2 shrink-0">
      <a
        href={getPreviewPath(contentType, slug)}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
      >
        Preview
      </a>
      {isActive ? (
        <button
          onClick={handleUnpublish}
          disabled={loading !== null}
          className="px-3 py-1.5 text-sm font-medium text-yellow-800 bg-yellow-100 hover:bg-yellow-200 rounded-md transition-colors disabled:opacity-50"
        >
          {loading === "unpublish" ? "..." : "Unpublish"}
        </button>
      ) : (
        <button
          onClick={handlePublish}
          disabled={loading !== null}
          className="px-3 py-1.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors disabled:opacity-50"
        >
          {loading === "publish" ? "..." : "Publish"}
        </button>
      )}
      <button
        onClick={handleDelete}
        disabled={loading !== null}
        className="px-3 py-1.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors disabled:opacity-50"
      >
        {loading === "delete" ? "..." : "Delete"}
      </button>
    </div>
  );
}
