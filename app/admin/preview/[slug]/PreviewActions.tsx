"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface PreviewActionsProps {
  jobId: string;
  slug: string;
  hasContent: boolean;
  initialContent: string;
}

export default function PreviewActions({
  jobId,
  slug,
  hasContent,
  initialContent,
}: PreviewActionsProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(initialContent);
  const [saveMsg, setSaveMsg] = useState<string | null>(null);

  async function handlePublish() {
    if (!hasContent) {
      alert("Generate content first before publishing.");
      return;
    }
    if (!confirm("Publish this job? It will go live on the public site.")) {
      return;
    }

    setLoading("publish");
    try {
      const res = await fetch("/api/admin/quality-check/approve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobId }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Failed to publish");
        return;
      }
      router.push(`/sarkari-naukri/${slug}`);
    } catch {
      alert("Network error");
    } finally {
      setLoading(null);
    }
  }

  async function handleGenerate() {
    setLoading("generate");
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
      router.refresh();
    } catch {
      alert("Network error");
    } finally {
      setLoading(null);
    }
  }

  async function handleSaveContent() {
    setLoading("save");
    setSaveMsg(null);
    try {
      const res = await fetch("/api/admin/quality-check/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobId, content }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Failed to save");
        return;
      }
      setSaveMsg("Saved");
      setEditing(false);
      router.refresh();
    } catch {
      alert("Network error");
    } finally {
      setLoading(null);
    }
  }

  return (
    <>
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <a
          href="/admin/quality-check"
          className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          Back to Dashboard
        </a>

        {!hasContent ? (
          <button
            onClick={handleGenerate}
            disabled={loading !== null}
            className="px-3 py-1.5 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors disabled:opacity-50"
          >
            {loading === "generate" ? "Generating..." : "Generate Content"}
          </button>
        ) : (
          <>
            <button
              onClick={() => {
                setEditing(!editing);
                setSaveMsg(null);
              }}
              disabled={loading !== null}
              className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              {editing ? "Cancel Edit" : "Edit Content"}
            </button>
            <button
              onClick={handlePublish}
              disabled={loading !== null}
              className="px-3 py-1.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors disabled:opacity-50"
            >
              {loading === "publish" ? "Publishing..." : "Publish"}
            </button>
          </>
        )}

        {saveMsg && (
          <span className="px-3 py-1.5 text-sm text-green-700">{saveMsg}</span>
        )}
      </div>

      {/* Inline Content Editor */}
      {editing && (
        <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between bg-gray-50 px-4 py-2 border-b border-gray-200">
            <span className="text-sm font-medium text-gray-700">
              Edit Markdown Content
            </span>
            <button
              onClick={handleSaveContent}
              disabled={loading !== null}
              className="px-3 py-1 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors disabled:opacity-50"
            >
              {loading === "save" ? "Saving..." : "Save Changes"}
            </button>
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full min-h-[500px] p-4 text-sm font-mono text-gray-800 border-0 focus:ring-0 focus:outline-none resize-y"
            spellCheck={false}
          />
        </div>
      )}
    </>
  );
}
