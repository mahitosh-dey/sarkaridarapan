import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { checkSchemeContentQuality, type SchemeRow } from "@/lib/groq-schemes";
import { calculateReadingTime } from "@/lib/groq";
import { buildSchemeEnhancementPrompt, callGemini } from "@/lib/gemini";

export async function POST(request: NextRequest) {
  try {
    const { schemeId } = await request.json();

    if (!schemeId || typeof schemeId !== "string") {
      return NextResponse.json(
        { error: "schemeId is required" },
        { status: 400 }
      );
    }

    const { data: scheme, error: fetchError } = await supabaseAdmin
      .from("schemes")
      .select("*")
      .eq("id", schemeId)
      .single();

    if (fetchError || !scheme) {
      return NextResponse.json(
        { error: fetchError?.message || "Scheme not found" },
        { status: 404 }
      );
    }

    const schemeRow = scheme as SchemeRow;

    if (!schemeRow.content || schemeRow.content.trim() === "") {
      return NextResponse.json(
        { error: "Scheme has no content to enhance. Generate content first." },
        { status: 400 }
      );
    }

    const prompt = buildSchemeEnhancementPrompt(
      schemeRow.content,
      schemeRow.description || "",
      schemeRow.title
    );
    const enhancedContent = await callGemini(prompt);

    const wordCount = enhancedContent.split(/\s+/).filter(Boolean).length;
    const readingTime = calculateReadingTime(enhancedContent);
    const flags = checkSchemeContentQuality(enhancedContent, {}, schemeRow);

    const { error: updateError } = await supabaseAdmin
      .from("schemes")
      .update({
        content: enhancedContent,
        reading_time: readingTime,
        quality_flag: flags.length > 0 ? flags : ["no_issues"],
      })
      .eq("id", schemeId);

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
