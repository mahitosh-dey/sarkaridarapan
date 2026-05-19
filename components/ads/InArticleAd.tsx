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
  const isAdPushed = useRef(false);

  useEffect(() => {
    if (isAdPushed.current) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      isAdPushed.current = true;
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  if (process.env.NODE_ENV === "development") {
    return (
      <div className={`w-full max-w-2xl mx-auto my-6 ${className}`}>
        <p className="text-xs text-gray-400 text-center mb-1">Advertisement</p>
        <div className="w-full min-h-[200px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
          <span className="text-sm text-gray-400 font-medium">
            In-Article Ad &middot; Slot: {adSlot}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full max-w-2xl mx-auto my-6 ${className}`}>
      <p className="text-xs text-gray-400 text-center mb-1">Advertisement</p>
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
