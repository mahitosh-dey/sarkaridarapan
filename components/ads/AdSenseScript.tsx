"use client";

import Script from "next/script";

interface AdSenseScriptProps {
  publisherId?: string;
}

export default function AdSenseScript({
  publisherId = "pub-XXXXXXXXXXXXXXXX",
}: AdSenseScriptProps) {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${publisherId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
