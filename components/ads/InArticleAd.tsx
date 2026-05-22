"use client";

import { useEffect, useRef } from "react";

interface InArticleAdProps {
  adSlot?: string;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function InArticleAd({ adSlot = "0000000000", className = "" }: InArticleAdProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    const el = adRef.current;
    if (!el) return;
    // Skip if AdSense already processed this element
    if (el.getAttribute("data-adsbygoogle-status")) return;
    if (el.firstChild) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ad already loaded for this slot — safe to ignore
    }

    return () => {
      // Clean up on unmount so remounting doesn't hit a stale element
      el.removeAttribute("data-adsbygoogle-status");
      el.innerHTML = "";
    };
  }, []);

  if (process.env.NODE_ENV === "development") {
    return null;
  }

  return (
    <div className={`w-full max-w-2xl mx-auto my-6 ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle block text-center"
        style={{ display: "block", textAlign: "center" }}
        data-ad-client={`ca-${process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || "pub-XXXXXXXXXXXXXXXX"}`}
        data-ad-slot={adSlot}
        data-ad-layout="in-article"
        data-ad-format="fluid"
      />
    </div>
  );
}
