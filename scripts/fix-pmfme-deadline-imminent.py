#!/usr/bin/env python3
"""
PMFME: "roughly two months from now" now means sixteen days, and the story moved.

Found by scripts/audit-relative-time.py. Written 31 July 2026, when the
scheme's sanction running to September 2026 genuinely was about two months out.
On 14 September it is sixteen days, and the page still describes the distance
rather than the date.

Verified 2026-09-14 against Business Standard (24 August 2026) and MoFPI
coverage:

    current sanction ends   30 September 2026
    status                  PMFME has HIT its 200,000-unit sanction target
    proposal                MoFPI has submitted a plan to continue the scheme
                            for five more years, 2026-31, aligned to the 16th
                            Finance Commission period
    proposed changes        raise the Rs 10 lakh credit-linked subsidy ceiling,
                            priority for women entrepreneurs and hilly regions
    MoFPI Secretary         Avinash Joshi: an extension, in the same form or a
                            revised one, is expected "very soon"

So this is a content upgrade, not only a phrasing repair. The page already had
the May 2026 proposal from Joint Secretary Devesh Deval; it did not have the
target being met, the Secretary's August comment, or the 2026-31 framing, all of
which materially change how a reader should act in the last two weeks of the
window.

STILL NOT ASSERTED: that the extension will happen. Approval is pending, and a
proposal is not an approval. The page's existing advice, that applying under the
current window beats waiting, is strengthened by the deadline being closer, not
replaced by optimism about a renewal nobody has signed.
"""
import os, importlib.util, json

spec = importlib.util.spec_from_file_location("apply_data_fix", "scripts/apply-data-fix.py")
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)

SLUG = "pmfme-scheme-2026"
row = next(r for r in json.load(open("data/schemes.json")) if r["slug"] == SLUG)
content = row["content"]

OLD = ("PMFME was sanctioned with an outlay of Rs 10,000 crore for five years from 2020-21 "
       "to 2024-25, and it has been extended only to September 2026. That is roughly two "
       "months from now. On 23 May 2026, Joint Secretary Devesh Deval of the Ministry of "
       "Food Processing Industries said the ministry is moving a proposal to continue the "
       "scheme for a further five years with revised guidelines, including raising the Rs 10 "
       "lakh per-unit ceiling and giving preference to women entrepreneurs and enterprises "
       "in hilly regions.")
NEW = ("PMFME was sanctioned with an outlay of Rs 10,000 crore for five years from 2020-21 "
       "to 2024-25, and it has been extended only to 30 September 2026. On 23 May 2026, "
       "Joint Secretary Devesh Deval of the Ministry of Food Processing Industries said the "
       "ministry was moving a proposal to continue the scheme for a further five years with "
       "revised guidelines, including raising the Rs 10 lakh per-unit ceiling and giving "
       "preference to women entrepreneurs and enterprises in hilly regions. That proposal has "
       "since firmed up: the ministry has submitted a plan for 2026-31, aligned to the 16th "
       "Finance Commission period, and MoFPI Secretary Avinash Joshi said in August 2026 that "
       "an extension, in the same form or a revised one, is expected soon, per Business "
       "Standard. The scheme has also now met its target of sanctioning 200,000 units, which "
       "is the argument the ministry is making for renewal.")
assert OLD in content, "intro paragraph not found"
content = content.replace(OLD, NEW, 1)

OLD2 = ("So the practical position for anyone reading this in the second half of 2026 is: the "
        "scheme is live now, the current sanction runs out in September 2026, an extension has "
        "been proposed but not announced, and a proposal is not an approval.")
NEW2 = ("So the practical position is: the scheme is live, the current sanction runs out on "
        "30 September 2026, an extension has been proposed but not announced, and a proposal "
        "is not an approval. Nothing published so far commits the government to a renewal, and "
        "the date on the current sanction is the only one that binds.")
assert OLD2 in content, "practical-position paragraph not found"
content = content.replace(OLD2, NEW2, 1)

description = ("PMFME 2026 gives micro food units a 35 per cent subsidy up to Rs 10 lakh. The "
               "current sanction ends 30 September. Eligibility, seed capital and ODOP explained.")
assert 150 <= len(description) <= 160, f"description {len(description)}c"

fields = {"description": description, "content": content}

probe = dict(row); probe.update(fields)
stale = []
for k, v in probe.items():
    s = v if isinstance(v, str) else json.dumps(v, ensure_ascii=False)
    for bad in ["two months from now", "months from now", "reading this in the second half"]:
        if bad in s:
            stale.append((k, bad))
print(f"relative-time phrases remaining: {len(stale)}")
for k, b in stale: print(f"   {k}: {b}")
assert not stale, "a relative-time phrase survived"
print(f"preflight OK: description={len(description)}c")

mod.apply("schemes", SLUG, fields,
    reason=("'Roughly two months from now' written 31 Jul now means 16 days. Also adds the "
            "200,000-unit target being met, the 2026-31 proposal and MoFPI Secretary's August "
            "comment, none of which the page had. Renewal still not asserted."))
