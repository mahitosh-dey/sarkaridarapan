import { ImageResponse } from "next/og";
import { supabaseContent } from "@/lib/supabase-content";

export const runtime = "edge";
export const revalidate = 3600;
export const alt = "SarkariDarapan — Sarkari Yojana";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GREEN = "#16A34A";
const FONT = "system-ui, -apple-system, sans-serif";

function formatDate(raw: string | null | undefined): string {
  if (!raw) return "";
  const s = raw.trim();
  let iso: string | null = null;
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) {
    iso = s.slice(0, 10);
  } else {
    const slash = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(s);
    if (slash) {
      iso = `${slash[3]}-${slash[2].padStart(2, "0")}-${slash[1].padStart(2, "0")}`;
    } else {
      const dot = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/.exec(s);
      if (dot) {
        iso = `${dot[3]}-${dot[2].padStart(2, "0")}-${dot[1].padStart(2, "0")}`;
      }
    }
  }
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  if (isNaN(dt.getTime())) return "";
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${String(d).padStart(2, "0")} ${months[m - 1]} ${y}`;
}

export default async function Image({ params }: { params: { slug: string } }) {
  try {
    const { data } = await supabaseContent
      .from("schemes")
      .select("title, ministry, published_at")
      .eq("slug", params.slug)
      .single();

    if (!data) throw new Error("not found");

    const rawTitle = (data.title as string | null) || "Government Scheme";
    const title = rawTitle.length > 80 ? rawTitle.slice(0, 79) + "…" : rawTitle;

    const rawMinistry = (data.ministry as string | null) || "Government of India";
    const ministryDisplay =
      rawMinistry.length > 35 ? rawMinistry.slice(0, 34) + "…" : rawMinistry;

    const launchedText = `📅 Since ${formatDate(data.published_at as string | null) || "See Official Notice"}`;

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff",
            fontFamily: FONT,
          }}
        >
          {/* Top bar */}
          <div
            style={{ width: "100%", height: 12, backgroundColor: GREEN, flexShrink: 0 }}
          />

          {/* Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              padding: "40px 48px",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              {/* Ministry label */}
              <div
                style={{
                  color: "#6B7280",
                  fontSize: 14,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Government Scheme
              </div>

              {/* Title */}
              <div
                style={{
                  color: "#111827",
                  fontSize: 46,
                  fontWeight: 700,
                  lineHeight: 1.18,
                  marginBottom: 36,
                }}
              >
                {title}
              </div>

              {/* Badges */}
              <div style={{ display: "flex", flexDirection: "row", gap: 12 }}>
                <div
                  style={{
                    backgroundColor: GREEN,
                    color: "#ffffff",
                    padding: "8px 16px",
                    borderRadius: 8,
                    fontSize: 20,
                    fontWeight: 600,
                  }}
                >
                  {`🏛️ ${ministryDisplay}`}
                </div>
                <div
                  style={{
                    backgroundColor: GREEN,
                    color: "#ffffff",
                    padding: "8px 16px",
                    borderRadius: 8,
                    fontSize: 20,
                    fontWeight: 600,
                  }}
                >
                  {launchedText}
                </div>
              </div>
            </div>

            {/* Bottom label */}
            <div style={{ color: GREEN, fontSize: 16, fontWeight: 600 }}>
              Sarkari Yojana 2026
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              width: "100%",
              height: 50,
              backgroundColor: GREEN,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "#ffffff", fontSize: 18 }}>sarkaridarapan.com</span>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  } catch {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: GREEN,
            alignItems: "center",
            justifyContent: "center",
            fontFamily: FONT,
          }}
        >
          <span style={{ color: "#ffffff", fontSize: 52, fontWeight: 700 }}>
            SarkariDarapan
          </span>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  }
}
