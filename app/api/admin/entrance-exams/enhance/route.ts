import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { checkExamContentQuality, type ExamRow } from "@/lib/groq-entrance-exams";
import { calculateReadingTime } from "@/lib/groq";
import { buildExamEnhancementPrompt, callGemini } from "@/lib/gemini";

export async function POST(request: NextRequest) {
  try {
    const { examId } = await request.json();

    if (!examId || typeof examId !== "string") {
      return NextResponse.json(
        { error: "examId is required" },
        { status: 400 }
      );
    }

    const { data: exam, error: fetchError } = await supabaseAdmin
      .from("entrance_exams")
      .select("*")
      .eq("id", examId)
      .single();

    if (fetchError || !exam) {
      return NextResponse.json(
        { error: fetchError?.message || "Exam not found" },
        { status: 404 }
      );
    }

    const examRow = exam as ExamRow;

    if (!examRow.content || examRow.content.trim() === "") {
      return NextResponse.json(
        { error: "Exam has no content to enhance. Generate content first." },
        { status: 400 }
      );
    }

    const prompt = buildExamEnhancementPrompt(
      examRow.content,
      examRow.description || "",
      examRow.title
    );
    const enhancedContent = await callGemini(prompt);

    const wordCount = enhancedContent.split(/\s+/).filter(Boolean).length;
    const readingTime = calculateReadingTime(enhancedContent);
    const flags = checkExamContentQuality(enhancedContent, {}, examRow);

    const { error: updateError } = await supabaseAdmin
      .from("entrance_exams")
      .update({
        content: enhancedContent,
        reading_time: readingTime,
        quality_flag: flags.length > 0 ? flags : ["no_issues"],
      })
      .eq("id", examId);

    if (updateError) {
      return NextResponse.json(
        { error: updateError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      wordCount,
      readingTime,
      flags: flags.length > 0 ? flags : null,
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
