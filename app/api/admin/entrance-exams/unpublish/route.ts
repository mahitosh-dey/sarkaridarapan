import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: NextRequest) {
  try {
    const { examId } = await request.json();

    if (!examId || typeof examId !== "string") {
      return NextResponse.json({ error: "examId is required" }, { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from("entrance_exams")
      .update({
        is_active: false,
        published_at: null,
        reviewed_at: null,
      })
      .eq("id", examId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    revalidateTag("all-entrance-exams");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
