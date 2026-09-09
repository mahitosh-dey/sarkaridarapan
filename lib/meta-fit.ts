// Fit a title or description into the project's length rules.
//
// Hard rule 7: titles 50 to 65 characters, descriptions 150 to 160. Facet pages
// interpolate a name, and those names range from "Delhi" to "Arunachal Pradesh"
// and from "SSC" to "State PSC", a spread of more than a dozen characters. A
// single fixed template cannot land inside a 15-character window across that
// spread, which is why the live audit found 8 state titles at 66 to 75c and 16
// category and state descriptions at 90 to 104c.
//
// So the template supplies several endings, longest first, and this picks the
// longest one that fits. Deterministic, and covered by scripts/test-meta-fit.ts
// across every real state and category name.

export type FitResult = { text: string; fitted: boolean };

/**
 * Returns the longest `${base}${ending}` that lands within [min, max].
 * Falls back to the shortest candidate, marked unfitted, so a caller can
 * surface the problem rather than silently shipping an out-of-range string.
 */
export function fitToRange(
  base: string,
  endings: readonly string[],
  min: number,
  max: number
): FitResult {
  const candidates = endings
    .map((e) => base + e)
    .sort((a, b) => b.length - a.length);

  for (const c of candidates) {
    if (c.length >= min && c.length <= max) return { text: c, fitted: true };
  }
  const shortest = candidates[candidates.length - 1] ?? base;
  return { text: shortest, fitted: false };
}

export const fitTitle = (base: string, endings: readonly string[]) =>
  fitToRange(base, endings, 50, 65);

export const fitDescription = (base: string, endings: readonly string[]) =>
  fitToRange(base, endings, 150, 160);

// Ending ladders for the facet templates.
//
// Spacing matters more than wording. The description window is 11 characters
// wide and the title window 16, so consecutive endings must differ by no more
// than that or a name lands in a gap between two candidates. That is exactly
// what the first version did: Nagaland fell between a 161c and a 149c
// candidate, and "Dadra and Nagar Haveli and Daman and Diu" produced a 61c
// title base that no non-empty ending could fit under 65.
//
// Longest first is not required; fitToRange sorts.

export const STATE_TITLE_ENDINGS = [
  ": Latest Sarkari Naukri Vacancies and Alerts",
  ": Latest Sarkari Naukri Vacancies",
  ": Latest Sarkari Naukri Jobs",
  ": Latest Sarkari Naukri",
  ": Sarkari Naukri List",
  ": Sarkari Naukri",
  " and Sarkari Jobs",
  " Vacancy List",
  " Openings",
  " Guide",
  "",
] as const;

export const STATE_DESC_ENDINGS = [
  ", updated as new notifications are released by state departments.",
  ", updated as new notifications are released by the state.",
  ", updated as new notifications are released.",
  ", updated as fresh notifications are released.",
  ", updated as fresh notifications land.",
  ", updated as notifications land.",
  ", refreshed as they change.",
  " for every vacancy listed.",
  " for each vacancy.",
  " online.",
  ".",
] as const;

export const CATEGORY_DESC_ENDINGS = [
  ", updated as new notifications are released by the recruiting bodies.",
  ", updated as new notifications are released by recruiting bodies.",
  ", updated as new notifications are released.",
  ", updated as fresh notifications are released.",
  ", updated as fresh notifications land.",
  ", updated as notifications land.",
  ", refreshed as they change.",
  " for every vacancy listed.",
  " for each vacancy.",
  " online.",
  ".",
] as const;
