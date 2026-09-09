// Decision logic for scripts/replay-to-supabase.mjs, split out so it can be
// tested without a database. The replay runs once, against production, on the
// day Supabase returns; the branch that decides whether to overwrite a row is
// not something to find out about then.

// Treats null and undefined alike: a column absent from a CSV export and a
// column holding NULL mean the same thing here. Objects compare by value.
export function same(a, b) {
  if (a === b) return true;
  if (a == null && b == null) return true;
  if (a == null || b == null) return false;
  if (typeof a !== typeof b) return String(a) === String(b);
  if (typeof a === "object") return JSON.stringify(a) === JSON.stringify(b);
  return false;
}

/**
 * Decide what to do with one queued edit given the row currently in Supabase.
 *
 *   "apply"     row still holds the value we replaced; safe to write
 *   "skip"      row already holds what we would write; nothing to do
 *   "conflict"  row holds something else entirely, so it changed after the
 *               edit was recorded. Never overwrite; a human decides.
 */
export function planEdit(row, edit, forced = false) {
  const { changes, previous } = edit;

  if (!row) return { action: "missing", fields: [] };

  if (Object.entries(changes).every(([k, v]) => same(row[k], v))) {
    return { action: "skip", fields: [] };
  }

  const changedSince = Object.entries(previous ?? {})
    .filter(([k, v]) => !same(row[k], v))
    .filter(([k]) => !same(row[k], changes[k]))
    .map(([k]) => k);

  if (changedSince.length && !forced) {
    return { action: "conflict", fields: changedSince };
  }
  return { action: "apply", fields: Object.keys(changes) };
}
