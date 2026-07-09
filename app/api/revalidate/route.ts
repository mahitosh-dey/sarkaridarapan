import { revalidateTag, revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const SECRET = process.env.REVALIDATE_SECRET;

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("secret");

  if (SECRET && token !== SECRET) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  const path = req.nextUrl.searchParams.get("path");
  const tag = req.nextUrl.searchParams.get("tag");

  if (path) {
    if (!path.startsWith("/")) {
      return NextResponse.json(
        { error: "path must start with /" },
        { status: 400 },
      );
    }
    revalidatePath(path);
    return NextResponse.json({ revalidated: true, path, ts: Date.now() });
  }

  if (tag) {
    revalidateTag(tag);
    return NextResponse.json({ revalidated: true, tag, ts: Date.now() });
  }

  // Bust everything
  revalidateTag("jobs");
  revalidateTag("schemes");
  revalidateTag("entrance-exams");
  revalidatePath("/");
  revalidatePath("/sarkari-naukri");
  revalidatePath("/sarkari-yojana");
  revalidatePath("/entrance-exams");

  return NextResponse.json({ revalidated: true, tag: "all", ts: Date.now() });
}
