# Runbook: the day Supabase comes back

Supabase is restricted until the billing period resets on **19 September 2026**.
The site does not need it to render, so nothing is urgent. What matters is not
losing the twenty-eight edits made to `data/*.json` while it was down.

## The trap

Since 1 September the site renders from `data/*.json`, and every fix went there
rather than into Supabase. The obvious first move on the 19th is to re-export
the tables and refresh those files. **That would silently revert all of it**:
ten corrected dates, twenty-one repositioned pages, no error message.

This is not hypothetical. Testing the override flag on 9 September did exactly
that, and it was recoverable only because the files were committed to git.

Two things now prevent it. `scripts/csv-to-static-json.py` refuses to run while
anything is unreplayed, and it takes a timestamped backup into `data/.backup/`
before any write.

## Order of operations

**1. Confirm service is actually back**

    node -e "1" && echo ok   # then run any script in scripts/ and check for
                             # 'exceed_egress_quota' in the output

**2. Dry-run the replay and read it**

    node scripts/replay-to-supabase.mjs --dry-run

Expect 28 edits across 27 records. Anything reported as CONFLICT means the row
changed in Supabase after the edit was recorded, most likely through the admin
panel. The script never overwrites those. Read the diff it prints and decide.

**3. Replay**

    node scripts/replay-to-supabase.mjs

Each write is read back and verified before being marked applied. Re-running is
safe; applied edits are skipped.

**4. Resolve any conflicts by hand**

    node scripts/replay-to-supabase.mjs --force <slug>

Only after reading the diff. A conflict means somebody else's work is sitting in
that column.

**5. Only now, re-export if you want to**

    python3 scripts/csv-to-static-json.py

It will refuse while anything is unreplayed. That refusal is the safety net, not
an obstacle to work around. `ALLOW_UNREPLAYED=1` exists but overwrites the files
the site serves from.

**6. Watch egress for 24 hours**

The column projection in commit 03211a2 should cut list egress by roughly 90 per
cent, but it has never run against a live database. Confirm usage is tracking
well under the allowance before assuming the outage cannot repeat.

Also worth remembering what amplified the original burn: hitting `?tag=jobs`
invalidates every category and state list at once, and this build has 12 category
paths and 36 state paths. Do not fire collection-tag revalidations in a loop.

## What the replay is protecting

| Page | The edit |
|---|---|
| ibps-rrb-2026 | vacancies 4,128 to 13,706; last date 15 to 21 September |
| upsc-ies-iss-2026 | repositioned to the real cycle; vacancies 50 to 44 |
| gate-2027 | deadline 30 to 27 September; six exam dates corrected |
| national-scholarship-portal-nsp | Pre-Matric 31 August to 30 September, including the FAQ schema answer |
| nvs-pgt-tgt-2026 | two conflated NVS tracks separated |
| aai-je-atc-2026 | repositioned to post-application |
| 21 further pages | closed application windows no longer framed as open |

## Tests

    node scripts/test-replay-plan.mjs

Fourteen cases covering apply, skip, conflict, force, missing rows, and the one
record carrying two edits. The replay imports the same logic these exercise, so
a green run means the branch that decides whether to overwrite production has
been checked.
