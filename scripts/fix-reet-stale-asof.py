#!/usr/bin/env python3
"""
REET 2026: a limited safe-fix. Stale as-of dates and a countdown, nothing asserted.

Found by scripts/audit-relative-time.py: "the earliest REET certification is
likely 6 to 8 months away", written for "a fresh aspirant preparing in July
2026". Two months on, the countdown is wrong and the reader it addresses is
imaginary.

WHY THIS IS A SAFE-FIX AND NOT A REWRITE

Checked 2026-09-14 across Testbook, CareerPower, CollegeDisha and reetexam.com.
They contradict each other outright. One states the REET 2026 exam "will be
conducted on 15 September 2026", tomorrow. Another says the notification "has
not been announced by the BSER". A third expects the notification in
"Nov/Dec 2026". A direct fetch of the Testbook page returned no usable status at
all.

Under the project rule against fabricating or writing on under-sourced topics,
none of that is good enough to change what the page CLAIMS. So the page keeps
its position: BSER has not released the notification, the timing is expected
rather than known, and the reader should check rajeduboard.rajasthan.gov.in.

What changes is only what had rotted:

  the countdown            removed; it cannot be right for long
  "as of July 2026"        becomes "as of mid-September 2026", which is when
                           this was checked and is what an as-of date means
  the contradiction        stated plainly, because a reader searching this WILL
                           meet those conflicting dates and is better served
                           knowing the sources disagree than seeing one repeated

That last point is the only thing added, and it is verifiable: the sources do
disagree, whatever the truth turns out to be.
"""
import os, importlib.util, json

spec = importlib.util.spec_from_file_location("apply_data_fix", "scripts/apply-data-fix.py")
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)

SLUG = "reet-2026"
row = next(r for r in json.load(open("data/entrance_exams.json")) if r["slug"] == SLUG)
content = row["content"]

edits = [
 ("REET 2026 fresh notification has not yet been released by BSER as of July 2026.",
  "REET 2026 fresh notification had not been released by BSER as of mid-September 2026."),

 ("BSER has not yet released the REET 2026 notification as of July 2026. Delay is attributed to overlapping BSER responsibilities for the Rajasthan Board examinations, results, and administrative preparation.",
  "BSER had not released the REET 2026 notification as of mid-September 2026. Delay is attributed to overlapping BSER responsibilities for the Rajasthan Board examinations, results, and administrative preparation. Be careful with dates circulating elsewhere: coaching and aggregator sites currently publish mutually exclusive claims, including an exam on 15 September 2026, a notification expected before September 2026, and a notification expected in November or December 2026. Those cannot all be true, and none is traceable to BSER."),

 ("For a fresh aspirant preparing in July 2026, the practical implication is that the earliest REET certification is likely 6 to 8 months away. Preparation window is adequate for a serious aspirant.",
  "The practical implication for a fresh aspirant is that REET certification is not close. On the historical notification-to-examination gap of four to six months, a notification that has not yet appeared cannot produce a certificate quickly, which leaves a preparation window that is comfortable rather than tight."),

 ("BSER has not yet released the REET 2026 notification as of July 2026. Expected notification window is post-April 2026 school Board exam cycle, with tentative examination in early 2027.",
  "BSER had not released the REET 2026 notification as of mid-September 2026. The expected window is after the school Board examination cycle, with a tentative examination in early 2027, and expected is not announced."),
]
for old, new in edits:
    assert old in content, f"not found: {old[:70]}"
    content = content.replace(old, new, 1)

fields = {"content": content}
probe = dict(row); probe.update(fields)
stale = []
for k, v in probe.items():
    s = v if isinstance(v, str) else json.dumps(v, ensure_ascii=False)
    for bad in ["months away", "as of July 2026", "preparing in July 2026"]:
        if bad in s:
            stale.append((k, bad))
print(f"stale relative phrases remaining: {len(stale)}")
for k, b in stale: print(f"   {k}: {b}")
assert not stale, "a stale phrase survived"
print("preflight OK")

mod.apply("entrance_exams", SLUG, fields,
    reason=("Countdown '6 to 8 months away' and 'as of July 2026' had rotted. Status NOT "
            "changed: sources contradict each other and none traces to BSER, so the page "
            "keeps its cautious position and now warns that the circulating dates conflict."))
