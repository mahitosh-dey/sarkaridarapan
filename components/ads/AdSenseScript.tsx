"use client";

import { useEffect } from "react";
import Script from "next/script";

interface AdSenseScriptProps {
  publisherId?: string;
}

export default function AdSenseScript({
  publisherId = "pub-XXXXXXXXXXXXXXXX",
}: AdSenseScriptProps) {
  useEffect(() => {
    // Suppress the "adsbygoogle.push() error" that occurs during
    // Next.js client-side navigation when ad slots are re-mounted
    const handler = (event: ErrorEvent) => {
      if (event.message?.includes("adsbygoogle.push()")) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return true;
      }
    };
    window.addEventListener("error", handler, true);
    return () => window.removeEventListener("error", handler, true);
  }, []);

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${publisherId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
