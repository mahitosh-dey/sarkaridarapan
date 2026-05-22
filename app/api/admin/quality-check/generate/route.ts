import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import {
  buildJobPrompt,
  callGroq,
  parseStructuredResponse,
  checkContentQuality,
  calculateReadingTime,
  isEntranceExam,
  type JobRow,
} from "@/lib/groq";

/** Map structured JSON keys to Supabase column names. */
const FIELD_MAP: Record<string, string> = {
  post_name: "post_name",
  qualification: "qualification",
  eligibility: "eligibility",
  salary: "salary",
  application_fee: "application_fee",
  important_dates: "important_dates",
  selection_process: "selection_process",
  how_to_apply: "how_to_apply",
};

export async function POST(request: NextRequest) {
  try {
    const { jobId } = await request.json();

    if (!jobId || typeof jobId !== "string") {
      return NextResponse.json(
        { error: "jobId is required" },
        { status: 400 }
      );
    }

    // Fetch the full job record
    const { data: job, error: fetchError } = await supabaseAdmin
      .from("jobs")
      .select("*")
      .eq("id", jobId)
      .single();

    if (fetchError || !job) {
      return NextResponse.json(
        { error: fetchError?.message || "Job not found" },
        { status: 404 }
      );
    }

    const jobRow = job as JobRow;

    // Build prompt and call Groq
    const [systemPrompt, userPrompt] = buildJobPrompt(jobRow);
    const rawContent = await callGroq(systemPrompt, userPrompt);

    // Parse structured data and markdown
    let [structuredData, content] = parseStructuredResponse(rawContent);

    // Hard strip salary from entrance exams
    if (isEntranceExam(jobRow.title) && structuredData) {
      delete structuredData.salary;
    }

    const wordCount = content.split(/\s+/).filter(Boolean).length;
    const readingTime = calculateReadingTime(content);

    // Quality checks
    const flags = checkContentQuality(content, structuredData, jobRow);

    // Build update payload
    const payload: Record<string, unknown> = {
      content,
      reading_time: readingTime,
      is_active: false, // stays draft until admin approves
      quality_flag: flags.length > 0 ? flags : null,
    };

    // Map structured fields to DB columns
    for (const [srcKey, dbCol] of Object.entries(FIELD_MAP)) {
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
      .from("jobs")
      .update(payload)
      .eq("id", jobId);

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
