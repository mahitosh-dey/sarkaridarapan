#!/usr/bin/env python3
"""
Agniveer guide: told readers an application window closed seven weeks ago was open.

Found by scripts/audit-relative-time.py, which is new today and exists for
exactly this: a claim that is true at the moment of writing and false
afterwards, with no date anywhere being wrong.

Written 23 July 2026, when IAF Agniveer Vayu 02/2027 registration genuinely was
open. It closed on 26 July, three days later. Since then the page has carried:

    | IAF Agniveer Vayu 02/2027 | 6 to 26 Jul 2026 | September 2026 (tentative) | OPEN NOW | ...
    "the IAF Vayu 02/2027 window is the live one to file this month"
    "IAF Agniveer Vayu 02/2027 is open now, with the registration window running 6 to 26 July 2026"

The last one contradicts itself in a single sentence: open now, window running
in July. A reader in September is told to file into a window that had shut.

Verified 2026-09-14 against pw.live, testbook and the CASB recruitment portal:

    applications   6 July to 26 July 2026, 11:00 to 23:00, CLOSED
    exam           22 and 23 September 2026, eight days out
    stage now      exam city intimation slip released, admit card next

The exam date is an upgrade as well as a correction: the page carried
"September 2026 (tentative)" and it is now fixed.

PORTAL LEFT ALONE. Coverage points at iafrecruitment.edcil.co.in for the city
slip and admit card, while the page cites agnipathvayu.cdac.in for applying.
Both are CASB properties and one source is not enough to declare the older one
dead, so the admit card portal is added rather than the application one
replaced.
"""
import os, importlib.util, json

spec = importlib.util.spec_from_file_location("apply_data_fix", "scripts/apply-data-fix.py")
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)

SLUG = "agniveer-2026-army-navy-air-force-complete-guide"
row = next(r for r in json.load(open("data/blog_posts.json")) if r["slug"] == SLUG)
content = row["content"]

edits = [
 ("| IAF Agniveer Vayu 02/2027 | 6 to 26 Jul 2026 | September 2026 (tentative) | OPEN NOW | agnipathvayu.cdac.in |",
  "| IAF Agniveer Vayu 02/2027 | 6 to 26 Jul 2026 | 22 and 23 Sep 2026 | CLOSED, exam imminent | agnipathvayu.cdac.in |"),

 ("If you are 17.5 to 21 years old and have 10+2 with the required subjects, the IAF Vayu 02/2027 window is the live one to file this month. Miss it and the next comparable window is Army CEE 2027 in February.",
  "All three 2026 windows have now closed. IAF Vayu 02/2027 was the last of them, shutting on 26 July, and its online examination follows on 22 and 23 September 2026. Candidates who applied should watch the CASB portal for the admit card, since the exam city intimation slip has already been released. For anyone who missed all three, the next comparable opening is Army CEE 2027, which on the pattern of this cycle opens in February."),

 # This one dated itself explicitly, "if you are reading this in late July
 # 2026". The writer knew it had a shelf life; nothing enforced it.
 ("Indian Air Force Agniveer Vayu 02/2027 is open right now, with the registration window running 6 to 26 July 2026 on agnipathvayu.cdac.in. If you are reading this in late July 2026, the IAF Vayu 02/2027 window is your only live application.",
  "Indian Air Force Agniveer Vayu 02/2027 accepted applications from 6 to 26 July 2026 on agnipathvayu.cdac.in. All three windows in this cycle are now closed, and the IAF Vayu examination is the next event, on 22 and 23 September 2026."),

 ("IAF Agniveer Vayu 02/2027 is open now, with the registration window running 6 to 26 July 2026 on agnipathvayu.cdac.in.",
  "IAF Agniveer Vayu 02/2027 accepted applications from 6 to 26 July 2026 on agnipathvayu.cdac.in and that window is closed. Its online examination is on 22 and 23 September 2026, with the exam city intimation slip out and admit cards issued through the CASB recruitment portal at iafrecruitment.edcil.co.in."),
]
for old, new in edits:
    assert old in content, f"not found: {old[:70]}"
    content = content.replace(old, new, 1)

description = ("Agniveer 2026 guide: all three 2026 windows are closed. IAF Vayu 02/2027 exam "
               "on 22 and 23 September. Army, Navy and IAF pay, Seva Nidhi and BSF quota.")
assert 150 <= len(description) <= 160, f"description {len(description)}c"

fields = {"description": description, "content": content}

probe = dict(row); probe.update(fields)
stale = []
for k, v in probe.items():
    s = v if isinstance(v, str) else json.dumps(v, ensure_ascii=False)
    for bad in ["OPEN NOW", "is open now", "open right now", "live one to file"]:
        if bad in s:
            stale.append((k, bad))
print(f"open-now claims remaining: {len(stale)}")
for k, b in stale: print(f"   {k}: {b}")
assert not stale, "an open-now claim survived"
print(f"preflight OK: description={len(description)}c")

mod.apply("blog_posts", SLUG, fields,
    reason=("Written 23 Jul 2026 while IAF Vayu 02/2027 registration was open; it closed 26 "
            "Jul. Page told September readers to file into a July window, and one sentence "
            "said 'open now' and '6 to 26 July 2026' at once. Exam date upgraded from "
            "'September 2026 (tentative)' to the confirmed 22 and 23 September."))
