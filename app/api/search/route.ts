import { NextRequest, NextResponse } from "next/server";
import { searchContent } from "@/lib/content";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "";
  const type = searchParams.get("type") || "all";

  if (!query.trim()) {
    return NextResponse.json({ results: [] });
  }

  let results = await searchContent(query);

  if (type === "jobs") {
    results = results.filter((r) => r.type === "job");
  } else if (type === "schemes") {
    results = results.filter((r) => r.type === "scheme");
  }

  return NextResponse.json({ results });
}
