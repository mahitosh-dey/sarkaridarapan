import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import {
  checkContentQuality,
  calculateReadingTime,
  type JobRow,
} from "@/lib/groq";
import { buildEnhancementPrompt, callGemini } from "@/lib/gemini";

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

    if (!jobRow.content || jobRow.content.trim() === "") {
      return NextResponse.json(
        { error: "Job has no content to enhance. Generate content first." },
        { status: 400 }
      );
    }

    // Build enhancement prompt and call Gemini
    const prompt = buildEnhancementPrompt(
      jobRow.content,
      jobRow.description || "",
      jobRow.title
    );
    const enhancedContent = await callGemini(prompt);

    const wordCount = enhancedContent.split(/\s+/).filter(Boolean).length;
    const readingTime = calculateReadingTime(enhancedContent);

    // Quality checks on enhanced content
    const flags = checkContentQuality(enhancedContent, {}, jobRow);

    // Update job in Supabase
    const { error: updateError } = await supabaseAdmin
      .from("jobs")
      .update({
        content: enhancedContent,
        reading_time: readingTime,
        quality_flag: flags.length > 0 ? flags : ["no_issues"],
      })
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
