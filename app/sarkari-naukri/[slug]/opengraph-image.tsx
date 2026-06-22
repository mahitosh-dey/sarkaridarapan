import { ImageResponse } from "next/og";
import { getJobBySlug } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  let title = "Sarkari Naukri";
  let organization = "Government of India";
  let vacancies = "";
  let lastDate = "";

  try {
    const job = await getJobBySlug(params.slug);
    if (job) {
      title = job.title;
      organization = job.organization || "Government of India";
      vacancies =
        job.vacancies > 0 ? job.vacancies.toLocaleString("en-IN") : "";
      const raw =
        job.importantDates?.lastDate || job.lastDate || "";
      if (raw) {
        const d = new Date(raw);
        lastDate = isNaN(d.getTime())
          ? raw
          : d.toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            });
      }
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
        {/* Indigo header bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#4F46E5",
            padding: "0 48px",
            height: "90px",
            flexShrink: 0,
          }}
        >
          <span style={{ color: "#ffffff", fontSize: "28px", fontWeight: 700, letterSpacing: "-0.5px" }}>
            SarkariDarapan
          </span>
          <span style={{ color: "#a5b4fc", fontSize: "20px", marginLeft: "16px" }}>
            — Sarkari Naukri
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
          {/* Organization */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#EEF2FF",
              borderRadius: "8px",
              padding: "10px 20px",
              alignSelf: "flex-start",
            }}
          >
            <span style={{ color: "#4F46E5", fontSize: "22px", fontWeight: 600 }}>
              {organization}
            </span>
          </div>

          {/* Job title */}
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              padding: "24px 0",
            }}
          >
            <span
              style={{
                color: "#111827",
                fontSize: title.length > 60 ? "40px" : "52px",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-1px",
              }}
            >
              {title}
            </span>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            {vacancies && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#F0FDF4",
                  borderRadius: "12px",
                  padding: "14px 24px",
                  minWidth: "160px",
                }}
              >
                <span style={{ color: "#6B7280", fontSize: "16px", fontWeight: 500 }}>
                  Vacancies
                </span>
                <span style={{ color: "#16A34A", fontSize: "30px", fontWeight: 700 }}>
                  {vacancies}
                </span>
              </div>
            )}
            {lastDate && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#FFF7ED",
                  borderRadius: "12px",
                  padding: "14px 24px",
                  minWidth: "200px",
                }}
              >
                <span style={{ color: "#6B7280", fontSize: "16px", fontWeight: 500 }}>
                  Last Date
                </span>
                <span style={{ color: "#EA580C", fontSize: "26px", fontWeight: 700 }}>
                  {lastDate}
                </span>
              </div>
            )}

            {/* Domain — pushed right */}
            <div style={{ display: "flex", marginLeft: "auto" }}>
              <span style={{ color: "#9CA3AF", fontSize: "22px" }}>
                www.sarkaridarapan.com
              </span>
            </div>
          </div>
        </div>

        {/* Bottom indigo stripe */}
        <div
          style={{
            height: "8px",
            backgroundColor: "#4F46E5",
            flexShrink: 0,
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
