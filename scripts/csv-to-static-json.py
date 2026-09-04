#!/usr/bin/env python3
"""
Convert the Supabase CSV exports in export/ into data/*.json.

Used on 2026-09-04 to recover the site during the egress outage, when the
Supabase REST API was returning 402 but the dashboard SQL Editor still worked.

Output rows keep their ORIGINAL snake_case column names, so the existing
mapJobRow / mapSchemeRow / mapEntranceExamRow / dbPostToGuide functions consume
them unchanged. That keeps this migration to a data-source swap rather than a
rewrite of the rendering layer.

Columns holding JSON (jobs.eligibility, jobs.important_dates,
jobs.application_fee, schemes.eligibility/benefits/documents/faqs,
blog_posts.tags) are parsed from their string form back into real structures.
The string "null" that Postgres CSV export writes for NULL becomes None.
search_vector is dropped: it is large, and nothing renders it.
"""
import csv, json, sys, os

csv.field_size_limit(sys.maxsize)

DROP = {"search_vector"}

# Columns whose CSV text is a JSON document rather than a scalar.
JSON_COLUMNS = {
    "jobs": {"eligibility", "important_dates", "application_fee"},
    "schemes": {"eligibility", "benefits", "documents", "faqs"},
    "entrance_exams": set(),
    "blog_posts": {"tags"},
}

INT_COLUMNS = {"vacancies", "completeness_score"}
BOOL_COLUMNS = {"is_active"}


def coerce(table, col, raw):
    if raw is None:
        return None
    s = raw.strip()
    if s == "" or s == "null":
        return None
    if col in BOOL_COLUMNS:
        return s.lower() in ("true", "t", "1")
    if col in INT_COLUMNS:
        try:
            return int(float(s))
        except ValueError:
            return None
    if col in JSON_COLUMNS.get(table, set()):
        try:
            return json.loads(s)
        except json.JSONDecodeError as e:
            print(f"  WARN {table}.{col}: could not parse JSON ({e}); keeping raw string")
            return s
    return raw


def convert(table):
    src = os.path.join("export", f"{table}.csv")
    with open(src, newline="", encoding="utf-8") as f:
        rows = list(csv.DictReader(f))

    out = []
    for r in rows:
        rec = {}
        for col, val in r.items():
            if col in DROP:
                continue
            rec[col] = coerce(table, col, val)
        out.append(rec)

    dest = os.path.join("data", f"{table}.json")
    with open(dest, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=0, separators=(",", ":"))

    active = sum(1 for r in out if r.get("is_active") is True)
    size_mb = os.path.getsize(dest) / 1024 / 1024
    print(f"  {table:16s} {len(out):4d} rows ({active} active) -> data/{table}.json  {size_mb:.2f} MB")
    return out


print("Converting Supabase CSV exports to static JSON:")
tables = {t: convert(t) for t in ["jobs", "schemes", "entrance_exams", "blog_posts"]}

# Integrity checks. A silent parse failure here would ship broken pages.
print("\nIntegrity checks:")
ok = True
for name, rows in tables.items():
    missing_slug = [r for r in rows if not r.get("slug")]
    missing_title = [r for r in rows if not r.get("title")]
    dupes = len(rows) - len({r.get("slug") for r in rows})
    if missing_slug or missing_title or dupes:
        ok = False
    print(f"  {name:16s} missing slug={len(missing_slug)} missing title={len(missing_title)} duplicate slugs={dupes}")

# The array columns are the known crash source: a string where the renderer
# expects a list takes the page down. See project memory on schemes arrays.
for col in ["eligibility", "benefits", "documents"]:
    bad = [r["slug"] for r in tables["schemes"] if not isinstance(r.get(col), list) and r.get(col) is not None]
    print(f"  schemes.{col:12s} non-list values: {len(bad)}" + (f"  {bad[:3]}" if bad else ""))
    if bad:
        ok = False

bad_faqs = [r["slug"] for r in tables["schemes"] if r.get("faqs") is not None and not isinstance(r["faqs"], list)]
print(f"  schemes.faqs         non-list values: {len(bad_faqs)}")
bad_tags = [r["slug"] for r in tables["blog_posts"] if r.get("tags") is not None and not isinstance(r["tags"], list)]
print(f"  blog_posts.tags      non-list values: {len(bad_tags)}")
if bad_faqs or bad_tags:
    ok = False

print("\n" + ("ALL CHECKS PASSED" if ok else "CHECKS FAILED, do not ship"))
sys.exit(0 if ok else 1)
