import { ImageResponse } from "next/og";
import { getDbPostBySlug } from "@/lib/blog-db";
import { getGuideBySlug } from "@/lib/guides";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  let title = "SarkariDarapan Guides";
  let category = "Guide";
  let author = "SarkariDarapan Team";

  try {
    const post = (await getDbPostBySlug(params.slug)) || getGuideBySlug(params.slug);
    if (post) {
      title = post.title;
      category = post.category || "Guide";
      author = post.author || "SarkariDarapan Team";
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
        {/* Orange header bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#EA580C",
            padding: "0 48px",
            height: "90px",
            flexShrink: 0,
          }}
        >
          <span style={{ color: "#ffffff", fontSize: "28px", fontWeight: 700 }}>
            SarkariDarapan
          </span>
          <span style={{ color: "#FED7AA", fontSize: "22px", fontWeight: 500 }}>
            Guides &amp; Resources
          </span>
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#FFF7ED",
              border: "2px solid #FDBA74",
              borderRadius: "8px",
              padding: "8px 20px",
              alignSelf: "flex-start",
            }}
          >
            <span style={{ color: "#EA580C", fontSize: "20px", fontWeight: 700 }}>
              {category}
            </span>
          </div>

          {/* Article title */}
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
                fontSize: title.length > 65 ? "36px" : title.length > 45 ? "44px" : "52px",
                fontWeight: 800,
                lineHeight: 1.25,
                letterSpacing: "-0.5px",
              }}
            >
              {title}
            </span>
          </div>

          {/* Bottom row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {/* Author avatar placeholder */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "#EA580C",
                  flexShrink: 0,
                }}
              >
                <span style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700 }}>
                  {author.charAt(0)}
                </span>
              </div>
              <span style={{ color: "#374151", fontSize: "22px", fontWeight: 600 }}>
                {author}
              </span>
            </div>

            <span style={{ color: "#9CA3AF", fontSize: "20px" }}>
              www.sarkaridarapan.com
            </span>
          </div>
        </div>

        {/* Bottom orange stripe */}
        <div
          style={{
            height: "8px",
            backgroundColor: "#EA580C",
            flexShrink: 0,
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
