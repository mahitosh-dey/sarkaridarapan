"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "tg_banner_dismissed";

export default function TelegramBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show only if user hasn't dismissed in the last 7 days
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed || Date.now() - Number(dismissed) > 7 * 24 * 60 * 60 * 1000) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          {/* Telegram icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 shrink-0 text-white"
            aria-hidden="true"
          >
            <path d="M11.944 0A12 12 0 1 0 24 12 12 12 0 0 0 11.944 0Zm5.974 7.836-1.994 9.4c-.146.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.215-3.053 5.56-5.023c.242-.215-.054-.334-.373-.119l-6.871 4.326-2.962-.924c-.643-.203-.658-.643.136-.953l11.566-4.461c.535-.194 1.003.13.859.82Z" />
          </svg>
          <p className="text-sm font-medium truncate">
            <span className="font-bold">Get free job alerts!</span>
            <span className="hidden sm:inline"> Join our Telegram channel for instant sarkari naukri updates.</span>
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="https://t.me/sarkaridarapaninfo"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-white px-3 py-1.5 text-xs font-bold text-indigo-600 hover:bg-indigo-50 transition-colors whitespace-nowrap"
          >
            Join Now
          </Link>
          <button
            onClick={dismiss}
            aria-label="Dismiss"
            className="rounded-full p-1 hover:bg-indigo-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
