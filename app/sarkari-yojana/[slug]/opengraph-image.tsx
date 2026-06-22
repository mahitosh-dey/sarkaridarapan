import { ImageResponse } from "next/og";
import { getSchemeBySlug } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  let title = "Sarkari Yojana";
  let ministry = "Government of India";
  let category = "";

  try {
    const scheme = await getSchemeBySlug(params.slug);
    if (scheme) {
      title = scheme.title;
      ministry = scheme.ministry || "Government of India";
      category = scheme.category || "";
    }
  } catch {
    // fall through to defaults
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "1200px",
          height: "630px",
          backgroundColor: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Green header bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#16A34A",
            padding: "0 48px",
            height: "90px",
            flexShrink: 0,
          }}
        >
          <span style={{ color: "#ffffff", fontSize: "28px", fontWeight: 700 }}>
            SarkariDarapan
          </span>
          {/* सरकारी योजना label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.15)",
              borderRadius: "8px",
              padding: "8px 20px",
            }}
          >
            <span style={{ color: "#ffffff", fontSize: "24px", fontWeight: 700 }}>
              सरकारी योजना
            </span>
          </div>
        </div>

        {/* Body */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "48px 48px 36px",
            justifyContent: "space-between",
          }}
        >
          {/* Category badge */}
          {category && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#F0FDF4",
                border: "2px solid #86EFAC",
                borderRadius: "8px",
                padding: "8px 20px",
                alignSelf: "flex-start",
              }}
            >
              <span style={{ color: "#16A34A", fontSize: "20px", fontWeight: 600 }}>
                {category}
              </span>
            </div>
          )}

          {/* Scheme title */}
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              padding: "20px 0",
            }}
          >
            <span
              style={{
                color: "#111827",
                fontSize: title.length > 55 ? "40px" : "52px",
                fontWeight: 800,
                lineHeight: 1.25,
                letterSpacing: "-0.5px",
              }}
            >
              {title}
            </span>
          </div>

          {/* Ministry row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              {/* Green dot */}
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#16A34A",
                  flexShrink: 0,
                }}
              />
              <span style={{ color: "#374151", fontSize: "24px", fontWeight: 600 }}>
                {ministry}
              </span>
            </div>
            <span style={{ color: "#9CA3AF", fontSize: "20px" }}>
              www.sarkaridarapan.com
            </span>
          </div>
        </div>

        {/* Bottom green stripe */}
        <div
          style={{
            height: "8px",
            backgroundColor: "#16A34A",
            flexShrink: 0,
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
