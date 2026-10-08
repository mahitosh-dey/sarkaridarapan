# Manual indexing queue

URLs to submit by hand in Google Search Console. Claude updates the **Pending** section
whenever pages are corrected; you work down it and tick things off.

## Why this file exists

GSC on 4 October 2026 showed 10 indexed pages. Nine of them were last crawled between
6 and 12 June. The homepage was crawled on 29 September. Googlebot lands on the homepage
roughly monthly and goes almost nowhere from there, which is why months of content
corrections produced no movement: **Google had not re-read any of the fixed pages.**

Request Indexing is the one lever that makes Googlebot return on demand. It bypasses crawl
budget for a single URL. It does not guarantee indexing, only a crawl.

## How to submit

1. Open Search Console, property `sarkaridarapan.com`
2. Paste the full URL into the **Inspect any URL** bar at the top
3. Wait for the test, then click **Request Indexing**
4. Tick it off below, with the date

Quota is roughly **10 to 12 URLs a day**. Going over just gets refused, it does not penalise
you. Spread the list across days rather than trying to clear it at once.

---

## Priority 1: protect the pages already indexed

Google's copy of these is four months old. Resubmitting refreshes them and signals the site
is alive. Losing any of these costs more than gaining a new one.

- [x] https://www.sarkaridarapan.com/
- [x] https://www.sarkaridarapan.com/sarkari-naukri/mp-police-constable-2026
- [x] https://www.sarkaridarapan.com/sarkari-naukri/india-post-gds-2026
- [x] https://www.sarkaridarapan.com/sarkari-naukri/indian-army-agniveer-2026
- [x] https://www.sarkaridarapan.com/sarkari-naukri/hpsc-hcs-2026
- [x] https://www.sarkaridarapan.com/blog/ssc-cgl-2026-syllabus-preparation-guide
- [x] https://www.sarkaridarapan.com/blog/best-government-jobs-for-arts-students-india-2026

## Priority 2: redirect targets and discovery hubs

The first three carry the equity from three indexed URLs that now 301 elsewhere. Google has
to crawl the target before that signal transfers.

- [x] https://www.sarkaridarapan.com/sarkari-yojana/pm-mudra-loan-yojana-pmmy-2026
- [x] https://www.sarkaridarapan.com/sarkari-naukri/ibps-rrb-2026
- [x] https://www.sarkaridarapan.com/sarkari-naukri/ibps-po-2026
- [x] https://www.sarkaridarapan.com/all-pages
- [ ] https://www.sarkaridarapan.com/sarkari-naukri
- [ ] https://www.sarkaridarapan.com/sarkari-yojana
- [ ] https://www.sarkaridarapan.com/entrance-exams

---

## Pending: corrected pages awaiting submission

Regenerate this section with:

```
python3 scripts/update-manual-links.py
```

It lists active pages by how recently their facts were corrected, newest first, excluding
anything already ticked off above. Submit from the top: a page corrected this week gives
Google a reason to index it that a page untouched since July does not.

<!-- PENDING:START -->
184 pages pending, newest correction first. Generated 2026-10-08.


**Batch 1** (10 URLs, one day's quota)

- [ ] https://www.sarkaridarapan.com/entrance-exams/neet-ug-2026
      <!-- 2026-09-30 · 3895w · NEET UG 2026 Round 3 Allotted: Report by 9 October,  -->
- [ ] https://www.sarkaridarapan.com/sarkari-yojana/national-scholarship-portal-nsp-2026-27-2026
      <!-- 2026-09-30 · 3559w · NSP Last Date 2026-27: 30 Sep Pre-Matric, 31 Oct Pos -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/ssc-cgl-2026
      <!-- 2026-09-29 · 3482w · SSC CGL 2026 Tier 1 from 30 September: Admit Card, D -->
- [ ] https://www.sarkaridarapan.com/entrance-exams/cuet-ug-2026
      <!-- 2026-09-29 · 3433w · CUET UG 2026 Admissions Closed: Spot Rounds and 2027 -->
- [ ] https://www.sarkaridarapan.com/entrance-exams/neet-pg-2026
      <!-- 2026-09-29 · 3229w · NEET PG 2026 Result Out: Cut-Off 262, Scorecard 1 Oc -->
- [ ] https://www.sarkaridarapan.com/entrance-exams/gate-2027
      <!-- 2026-09-28 · 3814w · GATE 2027 Registration Extended Again: Now Open to 5 -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/sbi-clerk-2026
      <!-- 2026-09-28 · 3096w · SBI Clerk 2026: Prelims Done, Mains on 23 November -->
- [ ] https://www.sarkaridarapan.com/entrance-exams/kvs-pgt-tgt-prt-2026
      <!-- 2026-09-25 · 4570w · KVS PGT TGT PRT 2026: Tier 2 Results Releasing in Ph -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/upsc-capf-ac-2026
      <!-- 2026-09-25 · 3374w · UPSC CAPF AC 2026: Written Result Out, 1,614 to the  -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/indian-navy-ssc-officer-2026
      <!-- 2026-09-25 · 2180w · Indian Navy SSC Officer AT 27: Applications Closed,  -->

**Batch 2** (10 URLs, one day's quota)

- [ ] https://www.sarkaridarapan.com/blog/agniveer-2026-army-navy-air-force-complete-guide
      <!-- 2026-09-24 · 5188w · Agniveer 2026: Army, Navy, Air Force apply and salar -->
- [ ] https://www.sarkaridarapan.com/blog/banking-exam-calendar-2026
      <!-- 2026-09-24 · 3664w · Banking Exam Calendar 2026: Every Date, Clash by Cla -->
- [ ] https://www.sarkaridarapan.com/entrance-exams/ailet-2026
      <!-- 2026-09-24 · 3415w · AILET 2027: Apply by 10 November, Exam on 13 Decembe -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/upsc-cds-ii-2026
      <!-- 2026-09-24 · 3148w · UPSC CDS 2 2026: 451 Posts, Exam 13 Sep, IMA and OTA -->
- [ ] https://www.sarkaridarapan.com/entrance-exams/ugc-net-june-2026
      <!-- 2026-09-24 · 3132w · UGC NET June 2026 Result Out, December Session Dates -->
- [ ] https://www.sarkaridarapan.com/entrance-exams/jee-advanced-2026
      <!-- 2026-09-24 · 3030w · JEE Advanced 2026 Closed: IIT Delhi Runs the 2027 Cy -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/ssc-je-2026
      <!-- 2026-09-23 · 3373w · SSC JE 2026: Applications Closed, 1,748 Posts, Exam  -->
- [ ] https://www.sarkaridarapan.com/entrance-exams/cat-2026
      <!-- 2026-09-23 · 3123w · CAT 2026: Registration Closed, Exam on 29 November -->
- [ ] https://www.sarkaridarapan.com/entrance-exams/mptet-2026
      <!-- 2026-09-22 · 5397w · MPTET 2026 Varg 3: exam on 31 Aug, eligibility and s -->
- [ ] https://www.sarkaridarapan.com/blog/top-10-government-jobs-after-12th-india-2026
      <!-- 2026-09-22 · 4971w · Government jobs after 12th 2026: SSC GD, GDS, RRB, A -->

**Batch 3** (10 URLs, one day's quota)

- [ ] https://www.sarkaridarapan.com/sarkari-naukri/rrb-group-d-2026
      <!-- 2026-09-22 · 4337w · RRB Group D 2026: CBT Done, Answer Key Out, Result N -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/hppsc-has-2026
      <!-- 2026-09-22 · 4046w · HPPSC HAS 2026: Himachal Pradesh Civil Services Recr -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/apsc-cce-2026
      <!-- 2026-09-22 · 3889w · APSC CCE 2026: Assam Civil Services Recruitment and  -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/nda-na-2026
      <!-- 2026-09-22 · 3840w · NDA 2 2026 Written Exam Done: Result, SSB and Cut-Of -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/ukpsc-pcs-2026
      <!-- 2026-09-22 · 3807w · UKPSC PCS 2026: Uttarakhand Civil Services Recruitme -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/cgpsc-state-service-2026
      <!-- 2026-09-22 · 3744w · CGPSC 2026: Chhattisgarh State Service Exam and Prep -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/opsc-ocs-2026
      <!-- 2026-09-22 · 3699w · OPSC OCS 2026: Odisha Civil Services Recruitment and -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/ppsc-pcs-2026
      <!-- 2026-09-22 · 3656w · PPSC PCS 2026: Punjab Civil Services Recruitment and -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/jpsc-combined-civil-services-2026
      <!-- 2026-09-22 · 3637w · JPSC CCS 2026: Jharkhand Civil Services Recruitment  -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/tspsc-group-2-2026
      <!-- 2026-09-22 · 3629w · TSPSC Group 2 2026: Telangana Recruitment and Prep G -->

**Batch 4** (10 URLs, one day's quota)

- [ ] https://www.sarkaridarapan.com/sarkari-naukri/tnpsc-group-4-2026
      <!-- 2026-09-22 · 3573w · TNPSC Group 4 2026: 6,244 Posts, Junior Assistant, T -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/appsc-group-2-2026
      <!-- 2026-09-22 · 3569w · APPSC Group 2 2026: Andhra Pradesh Recruitment and P -->
- [ ] https://www.sarkaridarapan.com/sarkari-yojana/namo-shetkari-maha-samman-nidhi-yojana-2026
      <!-- 2026-09-22 · 3383w · Namo Shetkari Yojana 2026: 9th installment date, sta -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/upsc-cms-2026
      <!-- 2026-09-22 · 3248w · UPSC CMS 2026 Result Out: 2,923 Qualify for Intervie -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/rrb-ntpc-2026
      <!-- 2026-09-22 · 3239w · RRB NTPC Result 2026: Graduate CBT 2 Out, UG CBT 2 H -->
- [ ] https://www.sarkaridarapan.com/entrance-exams/nmat-2026
      <!-- 2026-09-22 · 3220w · NMAT 2026: No Negative Marking, 3 Attempts, Your Slo -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/uppsc-pcs-2026
      <!-- 2026-09-22 · 3142w · UPPSC PCS 2026: 500 Posts, Prelims 6 December, SDM G -->
- [ ] https://www.sarkaridarapan.com/sarkari-yojana/pm-kisan-samman-nidhi-pm-kisan-2026
      <!-- 2026-09-22 · 3127w · PM Kisan Status Check 2026: 24th Instalment Date and -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/ibps-clerk-2026
      <!-- 2026-09-22 · 3116w · IBPS Clerk 2026: 11,403 CSA Posts, Prelims and Mains -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/upsssc-lower-pcs-2026
      <!-- 2026-09-22 · 3107w · UPSSSC Lower PCS 2026: Main Exam Over, Result Awaite -->

**Batch 5** (10 URLs, one day's quota)

- [ ] https://www.sarkaridarapan.com/sarkari-naukri/tnpsc-group-2-2026
      <!-- 2026-09-22 · 3092w · TNPSC Group 2 and 2A 2026: 821 Posts, Prelims 1 Nove -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/mppsc-assistant-professor-2026
      <!-- 2026-09-22 · 3064w · MPPSC Assistant Professor 2026: 949 Posts, Admit Car -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/rpsc-rasrts-2026
      <!-- 2026-09-22 · 3061w · RPSC RAS 2026: 607 Posts, Prelims 6 December, Exam G -->
- [ ] https://www.sarkaridarapan.com/entrance-exams/mat-september-2026
      <!-- 2026-09-22 · 3052w · MAT September 2026: CBT 20 Sep, Pattern and Cutoffs -->
- [ ] https://www.sarkaridarapan.com/entrance-exams/mh-set-2026
      <!-- 2026-09-22 · 3046w · MH SET 2026 Exam Date Moved Again: It Is Now 25 Octo -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/ssc-mts-2026
      <!-- 2026-09-22 · 3045w · SSC MTS 2026: Multi-Tasking Staff & Havaldar Recruit -->
- [ ] https://www.sarkaridarapan.com/blog/ssc-exam-calendar-2026-27-dates-notifications
      <!-- 2026-09-22 · 3034w · SSC Exam Calendar 2026-27: All Dates and Why They Sl -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/sbi-po-2026
      <!-- 2026-09-22 · 3023w · SBI PO 2026: Prelims and Mains Done, Interview Stage -->
- [ ] https://www.sarkaridarapan.com/sarkari-naukri/bsnl-jto-2026
      <!-- 2026-09-22 · 3010w · BSNL JTO 2026: CBT on 23 August, Not GATE, E-1 Pay -->
- [ ] https://www.sarkaridarapan.com/sarkari-yojana/pm-kisan-samman-nidhi-yojana-2026
      <!-- 2026-09-22 · 3006w · PM Kisan Yojana 2026: Eligibility, Farmer ID, State  -->

_134 further pages below this cut. Regenerate after working through the batches above; by then the ordering will have changed anyway._
<!-- PENDING:END -->

---

## Submitted log

Record what you sent and when, so we can tell later whether a crawl followed. Check the URL
back in GSC after about ten days.

| Date sent | URL | Outcome when checked |
| --------- | --- | -------------------- |
| 2026-10-08 | https://www.sarkaridarapan.com/ | check from 2026-10-18 |
| 2026-10-08 | https://www.sarkaridarapan.com/sarkari-naukri/mp-police-constable-2026 | check from 2026-10-18 |
| 2026-10-08 | https://www.sarkaridarapan.com/sarkari-naukri/india-post-gds-2026 | check from 2026-10-18 |
| 2026-10-08 | https://www.sarkaridarapan.com/sarkari-naukri/indian-army-agniveer-2026 | check from 2026-10-18 |
| 2026-10-08 | https://www.sarkaridarapan.com/sarkari-naukri/hpsc-hcs-2026 | check from 2026-10-18 |
| 2026-10-08 | https://www.sarkaridarapan.com/blog/ssc-cgl-2026-syllabus-preparation-guide | check from 2026-10-18 |
| 2026-10-08 | https://www.sarkaridarapan.com/blog/best-government-jobs-for-arts-students-india-2026 | check from 2026-10-18 |
| 2026-10-08 | https://www.sarkaridarapan.com/sarkari-yojana/pm-mudra-loan-yojana-pmmy-2026 | check from 2026-10-18 |
| 2026-10-08 | https://www.sarkaridarapan.com/sarkari-naukri/ibps-rrb-2026 | check from 2026-10-18 |
| 2026-10-08 | https://www.sarkaridarapan.com/sarkari-naukri/ibps-po-2026 | check from 2026-10-18 |
| 2026-10-08 | https://www.sarkaridarapan.com/all-pages | check from 2026-10-18 |

## What the outcome means

**Indexed.** It worked. Keep going.

**Crawled, currently not indexed.** Google fetched it and declined. More submissions will not
change that. It is a judgement about value, and the answer is authority and differentiation,
not another request.

**Discovered, currently not indexed.** Google still has not fetched it. That is crawl budget,
which tracks site authority. This is the bucket to watch: if submitted URLs stay here, the
constraint is links, not content.
