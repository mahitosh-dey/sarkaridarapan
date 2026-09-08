#!/usr/bin/env python3
"""
AAI JE ATC 2026: reposition from "apply now" to the post-application stage.

Held back yesterday on purpose. The window closed on 7 September and this ran
on 8 September, because repositioning a page while its window is still open
tells a reader it has shut when they still have hours. That is the harm this
work exists to prevent, inverted.

Verified 2026-09-08 against prepp.in and the AAI coverage tracking this cycle:

    notification   22 July 2026
    applications   8 August to 7 September 2026, now CLOSED
    posts          389 total, 260 Manager and 129 Junior Executive
    CBT            expected October to November 2026, NOT announced
    admit card     NOT announced

NOT ASSERTED: a CBT date. Several sources narrow it to "around mid-October",
but AAI has published nothing, so the page keeps "expected October to November"
and says plainly that AAI has not set a date. Naming a date AAI has not
published is how the anticipation defect starts.

The page already had a "What to do in the weeks before the CBT" section, which
is now the live stage rather than a postscript.

Title carries no date, per the rule from 7 September: a date belongs in a title
only when the date IS the query. Here the query will shift to admit card and
exam date, neither of which exists yet.
"""
import os, importlib.util, json

spec = importlib.util.spec_from_file_location("apply_data_fix", "scripts/apply-data-fix.py")
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)

SLUG = "aai-je-atc-2026"
row = next(r for r in json.load(open("data/jobs.json")) if r["slug"] == SLUG)
content = row["content"]

edits = [
 ("The Airports Authority of India released its 2026 recruitment notification on 22 July for 389 posts, and the application window runs from 8 August to 7 September 2026.",
  "The Airports Authority of India released its 2026 recruitment notification on 22 July for 389 posts. The application window ran from 8 August to 7 September 2026 and is now closed."),

 ("If you read earlier coverage saying this notification was still expected, that information is out of date. It is out, the portal is open, and you have until 7 September.",
  "Applications are closed. What matters now is the computer based test, which AAI expects to hold in October or November 2026 but has not yet dated."),

 ("Do not submit on 7 September. Portals slow on closing day and payment gateway failures on the final evening are a recurring problem across every recruitment.",
  "For a future AAI cycle, do not leave the form to the closing day. Portals slow under load and payment gateway failures on the final evening are a recurring problem across every recruitment."),

 ("## Before you submit the application\n\nThe window runs to 7 September 2026 and the form is submitted online at aai.aero. A few things are worth settling before you open it.",
  "## If you applied, settle these now\n\nThe window closed on 7 September 2026. A few things are worth confirming while you wait for the call letter."),

 ("**What is the last date to apply for AAI Junior Executive 2026?**",
  "**Is the AAI Junior Executive 2026 application still open?**"),
]
for old, new in edits:
    assert old in content, f"not found: {old[:70]}"
    content = content.replace(old, new, 1)

# The answer under that FAQ question has to match the new question.
OLD_ANSWER = ("7 September 2026. The application window opened on 8 August 2026 and runs "
              "online at aai.aero. There is no offline route and no late window.")
NEW_ANSWER = ("No. Applications ran from 8 August to 7 September 2026 at aai.aero and the "
              "window is closed. There is no late route. The next step is the computer based "
              "test, which AAI expects in October or November 2026 and has not yet dated.")
assert OLD_ANSWER in content, "FAQ answer not found"
content = content.replace(OLD_ANSWER, NEW_ANSWER, 1)

title = "AAI JE ATC 2026: 129 Posts, CBT, Voice Test and Selection"
description = ("AAI JE ATC 2026 applications closed on 7 September for 129 Junior Executive "
               "posts. CBT expected October to November, not yet dated. Voice test and prep guide.")
assert 50 <= len(title) <= 65, f"title {len(title)}c"
assert 150 <= len(description) <= 160, f"description {len(description)}c"

idates = json.loads(json.dumps(row["important_dates"]))
idates["examDate"] = ("Computer Based Test expected October to November 2026. AAI had not "
                      "published a date as of 8 September 2026.")
idates["note"] = ("Applications ran 8 August to 7 September 2026 and are closed. AAI Recruitment "
                  "2026 covers 389 posts in total: 260 Manager and 129 Junior Executive. Sources "
                  "disagree on the Junior Executive discipline split, so the vacancy table in the "
                  "notification PDF is what settles eligibility. Neither the CBT date nor the "
                  "admit card date has been announced.")

# how_to_apply is a separate rendered column and carried the same open-window
# framing. The all-fields guard below caught it, as it did with `faqs` on the
# NSP page and `eligibility.status_note` on IBPS RRB. A fact on a job record
# lives in more places than the one being edited.
how_to_apply = (
    "Applications ran online at aai.aero from 8 August to 7 September 2026 and the window "
    "is closed. There is no late route and no offline route. Candidates who applied should "
    "keep the registered email and mobile active, because AAI sends the call letter and all "
    "later communication there, and should watch aai.aero for the computer based test date, "
    "which AAI expects in October or November 2026 but has not yet published. Keep your "
    "registration number and password accessible; more candidates lose a call letter to "
    "forgotten credentials than to anything wrong with the recruitment. For a future cycle: "
    "read the notification PDF and confirm which discipline the Junior Executive vacancies "
    "cover before applying, since it determines eligibility; enter your degree, subject "
    "combination and percentage exactly as printed on your certificates, because the subject "
    "combination is checked at document verification and a discrepancy surfaces there rather "
    "than at application; and do not leave the form to the closing day, since portals slow "
    "under load and payment gateway failures on the final evening are a recurring problem."
)

fields = {"title": title, "description": description, "how_to_apply": how_to_apply,
          "important_dates": idates, "content": content}

# Check every field, not just the one being edited.
probe = dict(row); probe.update(fields)
stale = []
for k, v in probe.items():
    s = v if isinstance(v, str) else json.dumps(v, ensure_ascii=False)
    for bad in ["you have until", "portal is open", "Apply by 7 Sep", "window runs to",
                "window runs from", "Do not submit on 7 September"]:
        if bad in s:
            stale.append((k, bad))
print(f"open-window claims remaining: {len(stale)}")
for k, bad in stale:
    print(f"   {k}: {bad}")
assert not stale, "an open-window claim survived"
print(f"preflight OK: title={len(title)}c description={len(description)}c")

mod.apply("jobs", SLUG, fields,
    reason=("Application window closed 7 Sep 2026; page was still framed as apply-now with "
            "'Apply by 7 Sep' in the title. Repositioned to the CBT and voice test stage. No "
            "CBT date asserted because AAI has not published one."))
