import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import {
  buildExamPrompt,
  checkExamContentQuality,
  EXAM_FIELD_MAP,
  type ExamRow,
} from "@/lib/groq-entrance-exams";
import { callGroq, parseStructuredResponse, calculateReadingTime } from "@/lib/groq";

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

    const [systemPrompt, userPrompt] = buildExamPrompt(examRow);
    const rawContent = await callGroq(systemPrompt, userPrompt);
    const [structuredData, content] = parseStructuredResponse(rawContent);

    // Hard strip salary
    delete structuredData.salary;

    const wordCount = content.split(/\s+/).filter(Boolean).length;
    const readingTime = calculateReadingTime(content);
    const flags = checkExamContentQuality(content, structuredData, examRow);

    const payload: Record<string, unknown> = {
      content,
      reading_time: readingTime,
      is_active: false,
      quality_flag: flags.length > 0 ? flags : ["no_issues"],
    };

    for (const [srcKey, dbCol] of Object.entries(EXAM_FIELD_MAP)) {
      const value = structuredData[srcKey];
      if (
        value !== null &&
        value !== undefined &&
        value !== "" &&
        !(Array.isArray(value) && value.length === 0)
      ) {
        payload[dbCol] = value;
      }
    }

    const { error: updateError } = await supabaseAdmin
      .from("entrance_exams")
      .update(payload)
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
