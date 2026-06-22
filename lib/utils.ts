/**
 * Returns true when `lastDate` falls between today and 7 days from now (IST),
 * inclusive on both ends. Handles YYYY-MM-DD, ISO timestamps, DD/MM/YYYY, DD.MM.YYYY.
 */
export function isClosingSoon(lastDate: string | null | undefined): boolean {
  if (!lastDate?.trim()) return false;
  const s = lastDate.trim();

  let iso: string | null = null;
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) {
    iso = s.slice(0, 10);
  } else {
    const slash = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(s);
    if (slash) {
      iso = `${slash[3]}-${slash[2].padStart(2, "0")}-${slash[1].padStart(2, "0")}`;
    } else {
      const dot = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/.exec(s);
      if (dot) {
        iso = `${dot[3]}-${dot[2].padStart(2, "0")}-${dot[1].padStart(2, "0")}`;
      }
    }
  }

  if (!iso) return false;

  const todayIST = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
  const sevenDaysLater = new Date(
    new Date(todayIST).getTime() + 7 * 24 * 60 * 60 * 1000
  ).toLocaleDateString("en-CA");

  return iso >= todayIST && iso <= sevenDaysLater;
}

/**
 * Returns the number of days between today and `lastDate` (positive = future,
 * negative = past, 0 = today). Returns null when the input is empty or unparseable.
 * Handles YYYY-MM-DD, ISO timestamps, DD/MM/YYYY, DD.MM.YYYY.
 */
export function getDaysRemaining(lastDate: string | null): number | null {
  if (!lastDate?.trim()) return null;
  const s = lastDate.trim();

  let iso: string | null = null;
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) {
    iso = s.slice(0, 10);
  } else {
    const slash = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(s);
    if (slash) {
      iso = `${slash[3]}-${slash[2].padStart(2, "0")}-${slash[1].padStart(2, "0")}`;
    } else {
      const dot = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/.exec(s);
      if (dot) {
        iso = `${dot[3]}-${dot[2].padStart(2, "0")}-${dot[1].padStart(2, "0")}`;
      }
    }
  }

  if (!iso) return null;

  const todayIST = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
  const [ty, tm, td] = todayIST.split("-").map(Number);
  const [dy, dm, dd] = iso.split("-").map(Number);
  const todayMs = Date.UTC(ty, tm - 1, td);
  const deadlineMs = Date.UTC(dy, dm - 1, dd);

  return Math.ceil((deadlineMs - todayMs) / (1000 * 60 * 60 * 24));
}
