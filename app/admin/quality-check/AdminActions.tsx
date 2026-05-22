"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface AdminActionsProps {
  jobId: string;
  slug: string;
}

export default function AdminActions({ jobId, slug }: AdminActionsProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

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

  return (
    <div className="flex items-center gap-2 shrink-0">
      <a
        href={`/sarkari-naukri/${slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
      >
        Preview
      </a>
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
    </div>
  );
}
