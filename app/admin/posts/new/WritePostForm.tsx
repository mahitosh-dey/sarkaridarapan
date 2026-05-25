"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { JOB_CATEGORIES, STATES } from "@/lib/constants";

export default function WritePostForm() {
  const router = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [category, setCategory] = useState("");
  const [state, setState] = useState("all-india");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // --- Markdown helpers (same as PreviewActions) ---

  function insertMarkdown(
    prefix: string,
    suffix: string,
    placeholder: string
  ) {
    const ta = textareaRef.current;
    if (!ta) return;

    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const selected = content.substring(start, end);

    let newText: string;
    let cursorStart: number;
    let cursorEnd: number;

    if (selected) {
      newText =
        content.substring(0, start) +
        prefix +
        selected +
        suffix +
        content.substring(end);
      cursorStart = start + prefix.length;
      cursorEnd = cursorStart + selected.length;
    } else {
      newText =
        content.substring(0, start) +
        prefix +
        placeholder +
        suffix +
        content.substring(end);
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

    const newText =
      content.substring(0, lineStart) + prefix + content.substring(lineStart);
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
    const newText =
      content.substring(0, start) + block + content.substring(start);
    const newCursor = start + block.length;

    setContent(newText);
    requestAnimationFrame(() => {
      ta.focus();
      ta.setSelectionRange(newCursor, newCursor);
    });
  }

  // --- Submit ---

  async function handleSubmit(publish: boolean) {
    setError(null);

    if (!title.trim() || !organization.trim() || !category || !content.trim()) {
      setError("Please fill in all required fields (title, organization, category, content).");
      return;
    }

    setLoading(publish ? "publish" : "draft");

    try {
      const res = await fetch("/api/admin/posts/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          organization: organization.trim(),
          category,
          state,
          content,
          publish,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to create post");
        return;
      }

      router.push(`/admin/preview/${data.slug}`);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(null);
    }
  }

  const btnBase =
    "px-2 py-1 text-xs font-semibold text-gray-600 bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Write New Post</h1>
          <a
            href="/admin/posts"
            className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Back to Posts
          </a>
        </div>

        {error && (
          <div className="mb-4 p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-md">
            {error}
          </div>
        )}

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 space-y-5">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title <span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="e.g. SSC CGL Recruitment 2025"
            />
          </div>

          {/* Organization */}
          <div>
            <label
              htmlFor="organization"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Organization <span className="text-red-500">*</span>
            </label>
            <input
              id="organization"
              type="text"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="e.g. Staff Selection Commission"
            />
          </div>

          {/* Category & State row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              >
                <option value="">Select category</option>
                {JOB_CATEGORIES.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                State
              </label>
              <select
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
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

          {/* Markdown Editor */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content <span className="text-red-500">*</span>
            </label>
            <div className="border border-gray-300 rounded-md overflow-hidden">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center gap-1 px-3 py-2 bg-gray-50 border-b border-gray-200">
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

                <button type="button" onClick={() => insertBlock("\n&nbsp;\n")} className={btnBase} title="Insert spacer (blank line)">Spacer</button>
              </div>

              {/* Textarea */}
              <textarea
                ref={textareaRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full min-h-[400px] p-4 text-sm font-mono text-gray-800 border-0 focus:ring-0 focus:outline-none resize-y"
                placeholder="Write your post content in Markdown..."
                spellCheck={false}
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => handleSubmit(false)}
              disabled={loading !== null}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              {loading === "draft" ? "Saving..." : "Save as Draft"}
            </button>
            <button
              onClick={() => handleSubmit(true)}
              disabled={loading !== null}
              className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors disabled:opacity-50"
            >
              {loading === "publish" ? "Publishing..." : "Publish"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
