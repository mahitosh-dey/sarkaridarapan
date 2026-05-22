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
    <div className={`w-full my-4 ${className}`}>
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
