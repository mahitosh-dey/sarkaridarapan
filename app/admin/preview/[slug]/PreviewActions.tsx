"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import type { ContentType } from "@/lib/admin-utils";

interface PreviewActionsProps {
  itemId: string;
  slug: string;
  hasContent: boolean;
  initialContent: string;
  isActive: boolean;
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

function getPublicPath(contentType: ContentType, slug: string): string {
  switch (contentType) {
    case "job":
      return `/sarkari-naukri/${slug}`;
    case "scheme":
      return `/sarkari-yojana/${slug}`;
    case "entrance-exam":
      return `/entrance-exams/${slug}`;
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

export default function PreviewActions({
  itemId,
  slug,
  hasContent,
  initialContent,
  isActive,
  contentType = "job",
}: PreviewActionsProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [content, setContent] = useState(initialContent);
  const [saveMsg, setSaveMsg] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const apiBase = getApiBase(contentType);
  const idKey = getIdKey(contentType);
  const label = getLabel(contentType);

  function insertMarkdown(prefix: string, suffix: string, placeholder: string) {
    const ta = textareaRef.current;
    if (!ta) return;

    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const selected = content.substring(start, end);

    let newText: string;
    let cursorStart: number;
    let cursorEnd: number;

    if (selected) {
      newText = content.substring(0, start) + prefix + selected + suffix + content.substring(end);
      cursorStart = start + prefix.length;
      cursorEnd = cursorStart + selected.length;
    } else {
      newText = content.substring(0, start) + prefix + placeholder + suffix + content.substring(end);
      cursorStart = start + prefix.length;
      cursorEnd = cursorStart + placeholder.length;
    }

    setContent(newText);
    requestAnimationFrame(() => {
      ta.focus();
      ta.setSelectionRange(cursorStart, cursorEnd);
    });
  }

  function insertLinePrefix(prefix: string) {
    const ta = textareaRef.current;
    if (!ta) return;

    const start = ta.selectionStart;
    const lineStart = content.lastIndexOf("\n", start - 1) + 1;

    const newText = content.substring(0, lineStart) + prefix + content.substring(lineStart);
    const newCursor = start + prefix.length;

    setContent(newText);
    requestAnimationFrame(() => {
      ta.focus();
      ta.setSelectionRange(newCursor, newCursor);
    });
  }

  function insertBlock(block: string) {
    const ta = textareaRef.current;
    if (!ta) return;

    const start = ta.selectionStart;
    const newText = content.substring(0, start) + block + content.substring(start);
    const newCursor = start + block.length;

    setContent(newText);
    requestAnimationFrame(() => {
      ta.focus();
      ta.setSelectionRange(newCursor, newCursor);
    });
  }

  async function handlePublish() {
    if (!hasContent) {
      alert("Generate content first before publishing.");
      return;
    }
    if (!confirm(`Publish this ${label}? It will go live on the public site.`)) {
      return;
    }

    setLoading("publish");
    try {
      const res = await fetch(`${apiBase}/approve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [idKey]: itemId }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Failed to publish");
        return;
      }
      router.push(getPublicPath(contentType, slug));
    } catch {
      alert("Network error");
    } finally {
      setLoading(null);
    }
  }

  async function handleUnpublish() {
    if (!confirm(`Unpublish this ${label}? It will be removed from the public site.`)) {
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
        alert(data.error || "Failed to unpublish");
        return;
      }
      router.refresh();
    } catch {
      alert("Network error");
    } finally {
      setLoading(null);
    }
  }

  async function handleDelete() {
    if (!confirm(`Delete this ${label} permanently? This cannot be undone.`)) {
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
        alert(data.error || "Failed to delete");
        return;
      }
      router.push("/admin/quality-check");
    } catch {
      alert("Network error");
    } finally {
      setLoading(null);
    }
  }

  async function handleGenerate() {
    setLoading("generate");
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
      const res = await fetch(`${apiBase}/edit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [idKey]: itemId, content }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Failed to save");
        return;
      }
      setSaveMsg("Saved");
      router.refresh();
    } catch {
      alert("Network error");
    } finally {
      setLoading(null);
    }
  }

  const btnBase =
    "px-2 py-1 text-xs font-semibold text-gray-600 bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors";

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

        {isActive && hasContent ? (
          <>
            <button
              onClick={handleUnpublish}
              disabled={loading !== null}
              className="px-3 py-1.5 text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 rounded-md transition-colors disabled:opacity-50"
            >
              {loading === "unpublish" ? "Unpublishing..." : "Unpublish"}
            </button>
            <button
              onClick={handleDelete}
              disabled={loading !== null}
              className="px-3 py-1.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors disabled:opacity-50"
            >
              {loading === "delete" ? "Deleting..." : "Delete"}
            </button>
          </>
        ) : !hasContent ? (
          <button
            onClick={handleGenerate}
            disabled={loading !== null}
            className="px-3 py-1.5 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors disabled:opacity-50"
          >
            {loading === "generate" ? "Generating..." : "Generate Content"}
          </button>
        ) : (
          <button
            onClick={handlePublish}
            disabled={loading !== null}
            className="px-3 py-1.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors disabled:opacity-50"
          >
            {loading === "publish" ? "Publishing..." : "Publish"}
          </button>
        )}

        {saveMsg && (
          <span className="px-3 py-1.5 text-sm text-green-700">{saveMsg}</span>
        )}
      </div>

      {/* Markdown Editor - always visible */}
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
        <div className="flex flex-wrap items-center gap-1 px-3 py-2 bg-white border-b border-gray-200">
          {/* Headings */}
          <button type="button" onClick={() => insertLinePrefix("# ")} className={btnBase} title="Heading 1">H1</button>
          <button type="button" onClick={() => insertLinePrefix("## ")} className={btnBase} title="Heading 2">H2</button>
          <button type="button" onClick={() => insertLinePrefix("### ")} className={btnBase} title="Heading 3">H3</button>
          <button type="button" onClick={() => insertLinePrefix("#### ")} className={btnBase} title="Heading 4">H4</button>

          <div className="w-px h-5 bg-gray-300" />

          {/* Inline formatting */}
          <button type="button" onClick={() => insertMarkdown("**", "**", "bold text")} className={`${btnBase} font-bold`} title="Bold">B</button>
          <button type="button" onClick={() => insertMarkdown("*", "*", "italic text")} className={`${btnBase} italic`} title="Italic">I</button>
          <button type="button" onClick={() => insertMarkdown("~~", "~~", "strikethrough text")} className={`${btnBase} line-through`} title="Strikethrough">S</button>

          <div className="w-px h-5 bg-gray-300" />

          {/* Colors */}
          <button type="button" onClick={() => insertMarkdown('<span data-color="red">', "</span>", "red text")} className={`${btnBase} text-red-600 hover:bg-red-50`} title="Red text">Red</button>
          <button type="button" onClick={() => insertMarkdown('<span data-color="green">', "</span>", "green text")} className={`${btnBase} text-green-600 hover:bg-green-50`} title="Green text">Green</button>
          <button type="button" onClick={() => insertMarkdown('<span data-color="blue">', "</span>", "blue text")} className={`${btnBase} text-blue-600 hover:bg-blue-50`} title="Blue text">Blue</button>
          <button type="button" onClick={() => insertMarkdown('<span data-color="orange">', "</span>", "orange text")} className={`${btnBase} text-orange-600 hover:bg-orange-50`} title="Orange text">Orange</button>

          <div className="w-px h-5 bg-gray-300" />

          {/* Block / structure */}
          <button type="button" onClick={() => insertMarkdown("[", "](url)", "link text")} className={btnBase} title="Link">Link</button>
          <button type="button" onClick={() => insertLinePrefix("- ")} className={btnBase} title="Bullet List">UL</button>
          <button type="button" onClick={() => insertLinePrefix("1. ")} className={btnBase} title="Numbered List">OL</button>
          <button type="button" onClick={() => insertLinePrefix("> ")} className={btnBase} title="Blockquote">Quote</button>
          <button type="button" onClick={() => insertBlock("\n| Column 1 | Column 2 | Column 3 |\n| --- | --- | --- |\n| Cell | Cell | Cell |\n")} className={btnBase} title="Table">Table</button>
          <button type="button" onClick={() => insertBlock("\n---\n")} className={btnBase} title="Horizontal Rule">---</button>

          <div className="w-px h-5 bg-gray-300" />

          {/* Spacing */}
          <button type="button" onClick={() => insertBlock("\n&nbsp;\n")} className={btnBase} title="Insert spacer (blank line)">Spacer</button>
        </div>
        <textarea
          ref={textareaRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full min-h-[500px] p-4 text-sm font-mono text-gray-800 border-0 focus:ring-0 focus:outline-none resize-y"
          placeholder="Write your content in Markdown..."
          spellCheck={false}
        />
      </div>
    </>
  );
}
