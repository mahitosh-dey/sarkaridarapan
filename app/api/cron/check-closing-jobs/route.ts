import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { SITE_URL } from "@/lib/constants";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function formatLastDate(isoDate: string): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  return `${String(d).padStart(2, "0")} ${MONTHS[m - 1]} ${y}`;
}

function getDateRange(): { today: string; sevenDaysLater: string } {
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
  const sevenDaysLater = new Date(
    new Date(today).getTime() + 7 * 24 * 60 * 60 * 1000
  ).toLocaleDateString("en-CA");
  return { today, sevenDaysLater };
}

async function sendTelegram(text: string): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
    cache: "no-store",
  });
}

export async function GET(req: NextRequest) {
  if (req.headers.get("x-cron-secret") !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { today, sevenDaysLater } = getDateRange();

  const { data: jobs, error } = await supabaseAdmin
    .from("jobs")
    .select("title, slug, last_date")
    .eq("is_active", true)
    .gte("last_date", today)
    .lte("last_date", sevenDaysLater)
    .order("last_date", { ascending: true });

  if (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  const closingJobs = jobs ?? [];

  for (const job of closingJobs) {
    const message =
      `⚠️ CLOSING SOON: ${job.title}\n` +
      `Last date: ${formatLastDate(job.last_date)}\n` +
      `🔗 ${SITE_URL}/sarkari-naukri/${job.slug}`;

    await sendTelegram(message);
  }

  return NextResponse.json({ success: true, jobsFound: closingJobs.length });
}
