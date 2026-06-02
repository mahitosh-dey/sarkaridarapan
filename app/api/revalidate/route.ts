import { revalidateTag, revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const SECRET = process.env.REVALIDATE_SECRET;

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("secret");

  if (SECRET && token !== SECRET) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  const tag = req.nextUrl.searchParams.get("tag");

  if (tag) {
    revalidateTag(tag);
  } else {
    // Bust everything
    revalidateTag("jobs");
    revalidateTag("schemes");
    revalidateTag("entrance-exams");
    revalidatePath("/");
    revalidatePath("/sarkari-naukri");
    revalidatePath("/sarkari-yojana");
    revalidatePath("/entrance-exams");
  }

  return NextResponse.json({ revalidated: true, tag: tag ?? "all", ts: Date.now() });
}
