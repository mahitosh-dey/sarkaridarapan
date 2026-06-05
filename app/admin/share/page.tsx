import { supabaseAdmin } from "@/lib/supabase-admin";
import type { Metadata } from "next";
import ShareComposer from "./ShareComposer";

export const metadata: Metadata = {
  title: "Share to Channels | SarkariDarapan Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function SharePage() {
  const [jobsRes, schemesRes, examsRes, blogsRes] = await Promise.all([
    supabaseAdmin
      .from("jobs")
      .select("id, slug, title, organization, last_date, vacancies")
      .eq("is_active", true)
      .order("published_at", { ascending: false })
      .limit(50),
    supabaseAdmin
      .from("schemes")
      .select("id, slug, title, ministry, description")
      .eq("is_active", true)
      .order("published_at", { ascending: false })
      .limit(50),
    supabaseAdmin
      .from("entrance_exams")
      .select("id, slug, title, conducting_body, description")
      .eq("is_active", true)
      .order("published_at", { ascending: false })
      .limit(50),
    supabaseAdmin
      .from("blog_posts")
      .select("id, slug, title, description")
      .eq("is_active", true)
      .order("published_at", { ascending: false })
      .limit(50),
  ]);

  const jobs = (jobsRes.data ?? []).map((r) => ({
    id: r.id,
    slug: r.slug,
    title: r.title,
    subtitle: r.organization ?? undefined,
    last_date: r.last_date ?? null,
    vacancies: r.vacancies ?? null,
    contentType: "job" as const,
  }));

  const schemes = (schemesRes.data ?? []).map((r) => ({
    id: r.id,
    slug: r.slug,
    title: r.title,
    subtitle: r.ministry ?? undefined,
    contentType: "scheme" as const,
  }));

  const exams = (examsRes.data ?? []).map((r) => ({
    id: r.id,
    slug: r.slug,
    title: r.title,
    subtitle: r.conducting_body ?? undefined,
    contentType: "exam" as const,
  }));

  const blogs = (blogsRes.data ?? []).map((r) => ({
    id: r.id,
    slug: r.slug,
    title: r.title,
    subtitle: r.description ?? undefined,
    contentType: "blog" as const,
  }));

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Share to Channels</h1>
        <p className="mt-1 text-sm text-gray-500">
          Pick any content, copy the post, then paste it into your Telegram or WhatsApp channel.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <ShareComposer
          jobs={jobs}
          schemes={schemes}
          exams={exams}
          blogs={blogs}
        />
      </div>

      <div className="mt-6 rounded-lg bg-blue-50 border border-blue-200 p-4 text-sm text-blue-800">
        <strong>How to use:</strong> Select content type → pick item → copy the text → open Telegram/WhatsApp → paste and send to your channel.
      </div>
    </div>
  );
}
