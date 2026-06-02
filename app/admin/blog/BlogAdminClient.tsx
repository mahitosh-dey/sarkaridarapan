"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const GUIDE_CATEGORIES = [
  "Exam Preparation",
  "Career Guide",
  "Scheme Guide",
  "Application Help",
];

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  is_active: boolean;
  published_at: string | null;
  updated_at: string;
  reading_time: string;
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s-]+/g, "-")
    .replace(/^-|-$/g, "");
}

// ─── New Post Form ────────────────────────────────────────────────────────────

export function NewPostForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [slugEdited, setSlugEdited] = useState(false);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(GUIDE_CATEGORIES[0]);
  const [author, setAuthor] = useState("SarkariDarapan Team");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  function handleTitleChange(val: string) {
    setTitle(val);
    if (!slugEdited) setSlug(slugify(val));
  }

  async function handleSubmit(e: React.FormEvent, publish: boolean) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/blog/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, slug, description, category, author, tags, content, image, publish }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage({ type: "error", text: data.error || "Failed to create post" });
        return;
      }

      setMessage({
        type: "success",
        text: `Post ${publish ? "published" : "saved as draft"} successfully! Slug: ${data.slug}`,
      });
      setTitle(""); setSlug(""); setSlugEdited(false);
      setDescription(""); setTags(""); setContent(""); setImage("");
      setCategory(GUIDE_CATEGORIES[0]);
      setAuthor("SarkariDarapan Team");
      router.refresh();
    } catch {
      setMessage({ type: "error", text: "Network error — check your connection" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-5">
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

      {/* Title + Slug */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="How to Prepare for SSC CGL 2026"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => { setSlug(e.target.value); setSlugEdited(true); }}
            placeholder="how-to-prepare-for-ssc-cgl-2026"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm font-mono focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <p className="mt-1 text-xs text-gray-500">Auto-generated from title. URL: /blog/{slug || "..."}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category <span className="text-red-500">*</span></label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {GUIDE_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="SarkariDarapan Team"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma-separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="ssc cgl, exam prep, general knowledge"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={2}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="A short 1-2 sentence summary shown in cards and SEO meta description."
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL (optional)</label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Content (Markdown) <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={22}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={"## Introduction\n\nWrite your guide content here in Markdown...\n\n## Section 1\n\nContent..."}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm font-mono focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-y"
          />
          <p className="mt-1 text-xs text-gray-500">
            Supports standard Markdown: ## headings, **bold**, *italic*, tables, bullet lists, numbered lists.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button
          type="button"
          onClick={(e) => handleSubmit(e, true)}
          disabled={loading}
          className="px-5 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors disabled:opacity-50"
        >
          {loading ? "Saving..." : "Publish Now"}
        </button>
        <button
          type="button"
          onClick={(e) => handleSubmit(e, false)}
          disabled={loading}
          className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-md transition-colors disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save as Draft"}
        </button>
      </div>
    </form>
  );
}

// ─── Post List Actions ────────────────────────────────────────────────────────

export function PostRowActions({ post }: { post: BlogPost }) {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  async function call(endpoint: string) {
    setLoading(endpoint);
    try {
      const res = await fetch(`/api/admin/blog/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId: post.id }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        alert(d.error || `Failed to ${endpoint} post`);
        return;
      }
      router.refresh();
    } catch {
      alert("Network error");
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="flex items-center gap-2 shrink-0">
      <a
        href={`/blog/${post.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
      >
        View
      </a>
      <a
        href={`/admin/blog/edit/${post.id}`}
        className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-md transition-colors"
      >
        Edit
      </a>
      {post.is_active ? (
        <button
          onClick={() => call("unpublish")}
          disabled={loading !== null}
          className="px-3 py-1.5 text-sm font-medium text-yellow-800 bg-yellow-100 hover:bg-yellow-200 rounded-md transition-colors disabled:opacity-50"
        >
          {loading === "unpublish" ? "..." : "Unpublish"}
        </button>
      ) : (
        <button
          onClick={() => call("publish")}
          disabled={loading !== null}
          className="px-3 py-1.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors disabled:opacity-50"
        >
          {loading === "publish" ? "..." : "Publish"}
        </button>
      )}
      <button
        onClick={() => {
          if (confirm("Permanently delete this post?")) call("delete");
        }}
        disabled={loading !== null}
        className="px-3 py-1.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors disabled:opacity-50"
      >
        {loading === "delete" ? "..." : "Delete"}
      </button>
    </div>
  );
}
