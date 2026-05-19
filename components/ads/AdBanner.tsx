"use client";

import { useEffect, useRef } from "react";

type AdFormat = "auto" | "rectangle" | "horizontal" | "vertical";

interface AdBannerProps {
  adSlot?: string;
  adFormat?: AdFormat;
  fullWidth?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdBanner({
  adSlot = "0000000000",
  adFormat = "auto",
  fullWidth = true,
  className = "",
}: AdBannerProps) {
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
      <div className={`w-full my-4 ${className}`}>
        <p className="text-xs text-gray-400 text-center mb-1">Advertisement</p>
        <div className="w-full min-h-[250px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
          <span className="text-sm text-gray-400 font-medium">
            Ad Space &middot; {adFormat} &middot; Slot: {adSlot}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full my-4 ${className}`}>
      <p className="text-xs text-gray-400 text-center mb-1">Advertisement</p>
      <ins
        ref={adRef}
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={`ca-${process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || "pub-XXXXXXXXXXXXXXXX"}`}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidth ? "true" : "false"}
      />
    </div>
  );
}
