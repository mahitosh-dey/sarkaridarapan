const SHORT_OPTS: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "Asia/Kolkata",
};

const LONG_OPTS: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Kolkata",
};

// Parses ISO strings, DD/MM/YYYY, and DD.MM.YYYY. Returns null if unparseable.
function parseDate(raw: string): Date | null {
  const s = raw.trim();

  // DD/MM/YYYY  e.g. "01/06/2026" — check before direct parse so the engine
  // doesn't misread it as MM/DD (American format)
  const dmySlash = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(s);
  if (dmySlash) {
    const [, d, m, y] = dmySlash;
    const d2 = new Date(`${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`);
    if (!isNaN(d2.getTime())) return d2;
  }

  // DD.MM.YYYY  e.g. "25.10.2025"
  const dmyDot = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/.exec(s);
  if (dmyDot) {
    const [, d, m, y] = dmyDot;
    const d2 = new Date(`${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`);
    if (!isNaN(d2.getTime())) return d2;
  }

  // ISO / RFC2822 / timestamp
  const direct = new Date(s);
  if (!isNaN(direct.getTime())) return direct;

  return null;
}

/**
 * Returns true if the date string represents a date strictly before today (IST).
 * Returns false for unparseable strings (e.g. "Not yet released") or empty values.
 */
export function isDatePast(dateStr: string | null | undefined): boolean {
  if (!dateStr?.trim()) return false;
  const parsed = parseDate(dateStr.trim());
  if (!parsed) return false;
  // Compare date-only strings in IST to avoid UTC midnight offset issues
  const todayIST = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
  const parsedIST = parsed.toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
  return parsedIST < todayIST;
}

/**
 * Safely formats a date string for display.
 *
 * - Returns `fallback` for null / undefined / empty strings.
 * - Handles DD/MM/YYYY and DD.MM.YYYY in addition to ISO.
 * - Returns the original string unchanged if it can't be parsed as a date
 *   (e.g. "Not yet released", "TBA") — those strings are already readable.
 */
export function safeFormatDate(
  dateStr: string | null | undefined,
  fallback = "TBA",
  style: "short" | "long" = "short"
): string {
  if (!dateStr || !dateStr.trim()) return fallback;

  const parsed = parseDate(dateStr);
  if (!parsed) return dateStr; // meaningful text like "Not yet released"

  return parsed.toLocaleDateString("en-IN", style === "long" ? LONG_OPTS : SHORT_OPTS);
}
