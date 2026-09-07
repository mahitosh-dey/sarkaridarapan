#!/usr/bin/env python3
"""
IBPS RRB 2026: page said the notification was not out. It came out five days later.

Written 26 August 2026, and CORRECT that day. It deliberately refused to
publish a speculative vacancy table, saying so in as many words: "Figures
circulating in the region of 3,000 to 5,000 posts across 28 Regional Rural
Banks are expectations drawn from previous cycles, not published numbers." That
was good editorial judgement.

IBPS published CRP RRB XV on 31 August 2026, five days later. The page has been
wrong since, and wrong in the most costly direction: it tells a reader that
applications are not open when they are, and they close on 21 September.

Verified 2026-09-07 against pw.live and testbook.com, which agree, and the
split reconciles with the total:

    notification    31 August 2026
    applications    1 to 21 September 2026
    fee             Rs 850 general, Rs 175 SC/ST/PwBD/ESM
    vacancies       13,706 total
                      Office Assistant   8,183
                      Officer Scale I    4,256
                      Officer Scale II   1,047
                      Officer Scale III    220
                                       = 13,706

The exam dates on the page were already right and are unchanged: Officer Scale
I prelims 21 and 22 November, mains 20 December; Office Assistant prelims 6, 12
and 13 December. Office Assistant mains is now known to be 30 January 2027,
where the page had "As set in the notification".

THE FIELD-LEVEL IRONY, worth recording. While the prose warned readers off
circulating figures of 3,000 to 5,000, the `vacancies` column held 4,128, which
is one of exactly those figures. Same defect as the UPSC IES ISS page fixed
earlier today: prose hedges, structured fields assert. The hedge does not reach
the date box, the card, or JobPosting schema.

Found by scripts/audit-stale-deadlines.py.
"""
import os, importlib.util, json

spec = importlib.util.spec_from_file_location("apply_data_fix", "scripts/apply-data-fix.py")
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)

SLUG = "ibps-rrb-2026"
row = next(r for r in json.load(open("data/jobs.json")) if r["slug"] == SLUG)
content = row["content"]

OLD_HEAD = """## IBPS RRB 2026: dates are out, the notification is not

IBPS RRB 2026, formally CRP RRB XV, is the common recruitment process for Regional Rural Banks across India, conducted by the Institute of Banking Personnel Selection. The examination dates have been published in the IBPS calendar, but the detailed notification carrying vacancy numbers and eligibility conditions is still awaited, expected in August or September 2026.

That gap between announced dates and an unpublished notification is worth stating plainly, because most pages covering this recruitment present vacancy tables as though they were settled. They are not. Figures circulating in the region of 3,000 to 5,000 posts across 28 Regional Rural Banks are expectations drawn from previous cycles, not published numbers. Uttarakhand Gramin Bank has separately announced 323 posts of its own, which is a real figure but a single bank's rather than the national total.

Everything below distinguishes what is confirmed from what is reported."""

NEW_HEAD = """## IBPS RRB 2026: 13,706 posts, applications close 21 September

IBPS RRB 2026, formally CRP RRB XV, is the common recruitment process for Regional Rural Banks across India, conducted by the Institute of Banking Personnel Selection. IBPS published the notification on 31 August 2026 for 13,706 posts, and the application window runs from 1 September to 21 September 2026 on ibps.in.

An earlier version of this page reported the notification as not yet issued, which was true when it was written on 26 August and stopped being true five days later. It also declined to repeat the vacancy figures then circulating, in the region of 3,000 to 5,000 posts. That caution was right: the published total is 13,706, roughly three times those estimates.

| Post | Vacancies |
|---|---|
| Office Assistant (Multipurpose) | 8,183 |
| Officer Scale I (Assistant Manager) | 4,256 |
| Officer Scale II (Manager) | 1,047 |
| Officer Scale III (Senior Manager) | 220 |
| **Total** | **13,706** |

Office Assistant is 60 per cent of the recruitment on its own, and it is the one post with no interview stage. The application fee is Rs 850 for general, OBC and EWS candidates, and Rs 175 for SC, ST, PwBD and ex-servicemen candidates."""
assert OLD_HEAD in content
content = content.replace(OLD_HEAD, NEW_HEAD, 1)

OLD_BEFORE = "## What to do before the notification\n\nConfirm your local language position now."
NEW_BEFORE = "## What to do now that applications are open\n\nApply before 21 September, then confirm your local language position."
assert OLD_BEFORE in content
content = content.replace(OLD_BEFORE, NEW_BEFORE, 1)

OLD_WATCH = ("Watch ibps.in directly for the notification rather than relying on aggregator "
             "pages, since vacancy numbers, age bands and language conditions are all fixed there.")
NEW_WATCH = ("Read the notification on ibps.in directly rather than relying on aggregator "
             "pages, since vacancy numbers, age bands and the local language condition are "
             "fixed there and vary between participating banks and states.")
assert OLD_WATCH in content
content = content.replace(OLD_WATCH, NEW_WATCH, 1)

OLD_WAIT = ("Waiting for the notification before starting. The dates are already fixed for "
            "late November and December, so preparation time is running now whether or not "
            "the vacancy table has been published.")
NEW_WAIT = ("Leaving the application to the last day. The window closes on 21 September and "
            "the prelims follow in late November and December, so both the form and the "
            "preparation clock are running now.")
assert OLD_WAIT in content
content = content.replace(OLD_WAIT, NEW_WAIT, 1)

OLD_FAQ = ("**How many vacancies are in IBPS RRB 2026?**\nNot yet confirmed. Figures of roughly "
           "3,000 to 5,000 posts across 28 Regional Rural Banks are expectations based on "
           "previous cycles rather than published numbers, and the CRP RRB XV notification "
           "will fix the actual total. Uttarakhand Gramin Bank has separately announced 323 "
           "posts, which is one bank's figure rather than the national one.")
NEW_FAQ = ("**How many vacancies are in IBPS RRB 2026?**\n13,706 posts in total, published in "
           "the CRP RRB XV notification of 31 August 2026: 8,183 Office Assistant, 4,256 "
           "Officer Scale I, 1,047 Officer Scale II and 220 Officer Scale III. That is "
           "roughly three times the 3,000 to 5,000 range that circulated before the "
           "notification appeared.")
assert OLD_FAQ in content
content = content.replace(OLD_FAQ, NEW_FAQ, 1)

OLD_APPLY_FAQ = ("On ibps.in, once the CRP RRB XV notification is published. Watch that site "
                 "directly rather than aggregator pages,")
NEW_APPLY_FAQ = ("On ibps.in, where the CRP RRB XV application window runs from 1 to 21 "
                 "September 2026. Use that site directly rather than aggregator pages,")
assert OLD_APPLY_FAQ in content
content = content.replace(OLD_APPLY_FAQ, NEW_APPLY_FAQ, 1)

description = ("IBPS RRB 2026 notification out: 13,706 posts, apply by 21 September. "
               "Office Assistant 8,183 and Officer Scale I 4,256. Exam dates, fee and the "
               "language rule.")
assert 150 <= len(description) <= 160, f"description {len(description)}c"

eligibility = json.loads(json.dumps(row["eligibility"]))
eligibility["status_note"] = (
    "CRP RRB XV was published on 31 August 2026 for 13,706 posts: 8,183 Office "
    "Assistant, 4,256 Officer Scale I, 1,047 Officer Scale II and 220 Officer Scale "
    "III. Applications run 1 to 21 September 2026 on ibps.in. The figures of roughly "
    "3,000 to 5,000 that circulated before publication were about a third of the "
    "actual total, which is why this page declined to repeat them."
)

fields = {
    "description": description,
    "eligibility": eligibility,
    "vacancies": 13706,
    "last_date": "2026-09-21",
    "important_dates": {
        "notificationDate": "2026-08-31",
        "startDate": "2026-09-01",
        "lastDate": "2026-09-21",
        "officerScaleIPrelims": "21 and 22 November 2026",
        "officerScaleIMains": "20 December 2026",
        "officeAssistantPrelims": "6, 12 and 13 December 2026",
        "officeAssistantMains": "30 January 2027",
        "note": ("IBPS published CRP RRB XV on 31 August 2026 for 13,706 posts and "
                 "applications run 1 to 21 September 2026 on ibps.in. Officer Scale I mains "
                 "on 20 December falls between the Office Assistant prelims dates, so "
                 "candidates applying for both face a dense five-week period."),
    },
    "content": content,
}

probe = dict(row); probe.update(fields)
stale = []
for k, v in probe.items():
    s = v if isinstance(v, str) else json.dumps(v, ensure_ascii=False)
    for bad in ["4128", "4,128", "2026-09-15", "NOT yet published", "notification is not",
                "still awaited", "before the notification is"]:
        if bad in s:
            stale.append((k, bad))
print(f"stale pre-notification references remaining: {len(stale)}")
for k, bad in stale:
    print(f"   {k}: {bad}")
assert not stale, "a pre-notification claim survived"
assert 8183 + 4256 + 1047 + 220 == 13706, "vacancy split does not reconcile"
print(f"preflight OK: description={len(description)}c vacancies=13706 split reconciles")

mod.apply("jobs", SLUG, fields,
    reason=("Page written 26 Aug 2026 said the CRP RRB XV notification was not yet "
            "published; IBPS published it on 31 Aug. Page told readers applications were "
            "not open while the window ran 1-21 Sep. vacancies 4,128 (a speculative figure "
            "its own prose warned against) -> 13,706 published; last_date 15 Sep -> 21 Sep."))
