import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import {
  buildSchemePrompt,
  checkSchemeContentQuality,
  SCHEME_FIELD_MAP,
  type SchemeRow,
} from "@/lib/groq-schemes";
import { callGroq, parseStructuredResponse, calculateReadingTime } from "@/lib/groq";

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

    const [systemPrompt, userPrompt] = buildSchemePrompt(schemeRow);
    const rawContent = await callGroq(systemPrompt, userPrompt);
    const [structuredData, content] = parseStructuredResponse(rawContent);

    const wordCount = content.split(/\s+/).filter(Boolean).length;
    const readingTime = calculateReadingTime(content);
    const flags = checkSchemeContentQuality(content, structuredData, schemeRow);

    const payload: Record<string, unknown> = {
      content,
      reading_time: readingTime,
      is_active: false,
      quality_flag: flags.length > 0 ? flags : ["no_issues"],
    };

    for (const [srcKey, dbCol] of Object.entries(SCHEME_FIELD_MAP)) {
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
      .from("schemes")
      .update(payload)
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
