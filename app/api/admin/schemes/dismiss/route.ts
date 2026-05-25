import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: NextRequest) {
  try {
    const { schemeId } = await request.json();

    if (!schemeId || typeof schemeId !== "string") {
      return NextResponse.json({ error: "schemeId is required" }, { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from("schemes")
      .update({
        reviewed_at: new Date().toISOString(),
      })
      .eq("id", schemeId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
