"use client";

import { useState } from "react";

type ContentType = "job" | "scheme" | "exam" | "blog";

interface Item {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  last_date?: string | null;
  vacancies?: number | null;
  contentType: ContentType;
}

interface Props {
  jobs: Item[];
  schemes: Item[];
  exams: Item[];
  blogs: Item[];
}

const TELEGRAM_CHANNEL = "https://t.me/sarkaridarapaninfo";
const WHATSAPP_CHANNEL = "https://whatsapp.com/channel/0029VbCHYsIDeON1dKiWuk1A";
const SITE_URL = "https://www.sarkaridarapan.com";

function generatePost(item: Item): string {
  const url = `${SITE_URL}/${item.contentType === "job" ? "jobs" : item.contentType === "scheme" ? "schemes" : item.contentType === "exam" ? "exams" : "blog"}/${item.slug}`;

  if (item.contentType === "job") {
    const vacLine = item.vacancies && item.vacancies > 0 ? `\nVacancies: ${item.vacancies.toLocaleString("en-IN")}` : "";
    const dateLine = item.last_date ? `\nLast Date: ${item.last_date}` : "";
    return `🔔 New Job Alert!\n\n${item.title}${vacLine}${dateLine}\n\n👉 Full Details: ${url}\n\n📢 Share करें दोस्तों के साथ!\n\n@sarkaridarapaninfo`;
  }

  if (item.contentType === "scheme") {
    const dateLine = item.last_date ? `\nLast Date: ${item.last_date}` : "\nStatus: Ongoing";
    const sub = item.subtitle ? `\n${item.subtitle}` : "";
    return `🏛️ Sarkari Yojana Update!\n\n${item.title}${sub}${dateLine}\n\n👉 Details & Apply: ${url}\n\n📢 Share करें!\n\n@sarkaridarapaninfo`;
  }

  if (item.contentType === "exam") {
    const dateLine = item.last_date ? `\nNotification: ${item.last_date}` : "";
    return `📝 Exam Alert!\n\n${item.title}${dateLine}\n\n👉 Full Details: ${url}\n\n📢 Share करें!\n\n@sarkaridarapaninfo`;
  }

  // blog
  const sub = item.subtitle ? `\n${item.subtitle}` : "";
  return `📖 New Blog Post!\n\n${item.title}${sub}\n\n👉 Read Now: ${url}\n\n@sarkaridarapaninfo`;
}

export default function ShareComposer({ jobs, schemes, exams, blogs }: Props) {
  const [contentType, setContentType] = useState<ContentType>("job");
  const [selectedId, setSelectedId] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const lists: Record<ContentType, Item[]> = { job: jobs, scheme: schemes, exam: exams, blog: blogs };
  const currentList = lists[contentType];

  const selectedItem = currentList.find((i) => i.id === selectedId) ?? null;
  const postText = selectedItem ? generatePost(selectedItem) : "";

  const handleTypeChange = (type: ContentType) => {
    setContentType(type);
    setSelectedId("");
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!postText) return;
    await navigator.clipboard.writeText(postText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const tabs: { key: ContentType; label: string; emoji: string }[] = [
    { key: "job", label: "Jobs", emoji: "💼" },
    { key: "scheme", label: "Schemes", emoji: "🏛️" },
    { key: "exam", label: "Exams", emoji: "📝" },
    { key: "blog", label: "Blogs", emoji: "📖" },
  ];

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => handleTypeChange(t.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              contentType === t.key
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {t.emoji} {t.label}
          </button>
        ))}
      </div>

      {/* Item selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Select {tabs.find((t) => t.key === contentType)?.label.slice(0, -1)}
        </label>
        <select
          value={selectedId}
          onChange={(e) => { setSelectedId(e.target.value); setCopied(false); }}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="">— Choose one —</option>
          {currentList.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      {/* Post preview */}
      {postText && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Post Preview</label>
          <pre className="w-full rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800 whitespace-pre-wrap font-sans leading-relaxed">
            {postText}
          </pre>
        </div>
      )}

      {/* Action buttons */}
      {postText && (
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleCopy}
            className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
              copied
                ? "bg-green-500 text-white"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {copied ? (
              <>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Text
              </>
            )}
          </button>

          <a
            href={TELEGRAM_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0088cc] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#0077b5] transition-colors"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Open Telegram
          </a>

          <a
            href={WHATSAPP_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1ebe5d] transition-colors"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            Open WhatsApp
          </a>
        </div>
      )}

      {/* Instruction when nothing selected */}
      {!postText && (
        <p className="text-sm text-gray-400 italic">
          Select a {tabs.find((t) => t.key === contentType)?.label.slice(0, -1).toLowerCase()} above to generate the post.
        </p>
      )}
    </div>
  );
}
