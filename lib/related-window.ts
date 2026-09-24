/**
 * Picks the related items to link to from a sibling set.
 *
 * The obvious implementation, list.filter(sameCategory).slice(0, n), has a
 * failure that only shows up in a link-graph crawl: the list arrives sorted,
 * so every page in a category links to the SAME first n siblings. Those n
 * collect all the internal links and the rest of the category collects none.
 *
 * A crawl on 2026-09-24 found 30 pages sitting on one or two inbound links.
 * Seventeen were schemes, ten of those in women-and-child, a category holding
 * ten schemes where slice(0, 4) meant six were never linked by a sibling.
 * state-psc holds 27 jobs against slice(0, 3), so 24 were in the same position.
 *
 * Taking a circular window that starts just after the current item turns the
 * hub into a ring. Every item links to the n that follow it and is linked by
 * the n that precede it, so inbound links are spread evenly and no item in a
 * category can be left out. Sorting by slug keeps the ring stable between
 * builds, which matters because an unstable ring would churn the internal
 * link graph on every deploy.
 */
export function relatedWindow<T extends { slug: string }>(
  siblings: readonly T[],
  currentSlug: string,
  count: number,
): T[] {
  const pool = siblings
    .filter((item) => item.slug !== currentSlug)
    .sort((a, b) => a.slug.localeCompare(b.slug));

  if (pool.length === 0 || count <= 0) return [];
  if (pool.length <= count) return pool;

  // Where the current item would sit in the sorted ring. Items whose slug is
  // not in the pool (the current one is filtered out) still get a stable
  // position from the comparison, so the window is deterministic either way.
  let start = pool.findIndex((item) => item.slug.localeCompare(currentSlug) > 0);
  if (start === -1) start = 0;

  return Array.from({ length: count }, (_, i) => pool[(start + i) % pool.length]);
}

/**
 * relatedWindow over a preferred pool, topped up from a wider one.
 *
 * A ring cannot help a category that holds one item. Six schemes and two exams
 * sit in categories of their own (senior-citizen, health, savings, research,
 * civil-services), so their category ring returns nothing and the page ends up
 * with only the links from the listing and the /all-pages index. Falling back
 * to the wider set gives every page the same number of sibling links whatever
 * the size of its category, without disturbing the ring where a real category
 * exists: the preferred items always come first.
 */
export function relatedWithFallback<T extends { slug: string }>(
  preferred: readonly T[],
  fallback: readonly T[],
  currentSlug: string,
  count: number,
): T[] {
  const picked = relatedWindow(preferred, currentSlug, count);
  if (picked.length >= count) return picked;

  const taken = new Set(picked.map((item) => item.slug));
  taken.add(currentSlug);

  const topUp = relatedWindow(
    fallback.filter((item) => !taken.has(item.slug)),
    currentSlug,
    count - picked.length,
  );

  return [...picked, ...topUp];
}
