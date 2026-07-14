# State PSC Page Expansion Template

**Purpose:** Rewrite thin State Public Service Commission (PSC) job pages to 2,500-3,500 words humanizer-clean. Reusable across the 16-page State PSC cluster.

**Applies to:** BPSC, MPPSC, MPSC, GPSC, KPSC, JPSC, PPSC, OPSC, CGPSC, UKPSC, APSC, HPSC, HPPSC, TSPSC, APPSC, TNPSC, WBCS, RPSC (if slugged).

**Does NOT apply to:** Central bank exams (SBI, RBI, NABARD), UPSC central (CMS, ESE, CAPF), SSC central (MTS, JE), state police, defence Agniveer. Each needs its own template.

---

## Rules

- Title 50-65 chars, description 150-160 chars (CLAUDE.md hard rule)
- Zero em dashes, en dashes, smart quotes anywhere
- Zero banned AI vocab: actually, additionally, align with, crucial, delve, enduring, enhance, fostering, garner, highlight, interplay, intricate, landscape, pivotal, showcase, tapestry, testament, underscore, vibrant
- Zero bulleted-bold-labels (`- **X**`), zero inline-bold-labels with colon (`**X**:`), zero For-**X**: openers
- Sentence case H2 and H3 headings
- Self-contained H2 first sentence (AI-1 rule — must be quotable without context)
- Inline attributions for dated stats (AI-2 rule)
- 10-Q FAQ block with bold questions (parser format), each answer opens with the direct answer
- One comparison table minimum (AI-6 rule)
- Use validation script pattern from `scripts/update-lic-aao-2026.mjs`

---

## Title pattern

`[PSC Short Name] [Year]: [Post Name] Recruitment, Salary, Prep Guide`

Examples:
- BPSC 70th CCE 2026: Bihar Civil Services Recruitment Guide (55c)
- MPPSC State Service 2026: Madhya Pradesh PSC Exam Guide (55c)
- MPSC Rajyaseva 2026: Maharashtra Civil Services Guide (52c)
- GPSC Class 1-2 2026: Gujarat State Service Recruitment (52c)
- KPSC KAS 2026: Karnataka Administrative Service Guide (52c)

Adjust wording so final length lands 50-65 chars.

---

## Description pattern

150-160 chars. Include: PSC abbreviation, state, exam name, key stat (vacancies OR selection ratio OR expected dates), portal URL.

Example: "BPSC 70th CCE 2026 recruits 1,957 candidates for Bihar Administrative Service, Police Service, and 12 other Group A/B posts. Apply on bpsc.bih.nic.in."

---

## Section structure (target ~2,700-3,200 words)

### H1 (auto-generated from postName + year, do not include in content)

### ## [PSC Name] at a glance

Self-contained opener with the key hook: what the exam is, who conducts it, what posts it recruits for, selection ratio if striking. Include one inline-attributed stat.

Word target: 120-180

### ## Posts recruited under this exam

3-column table (Post name | Cadre / Grade | Typical postings). List all major services covered. Add a follow-up paragraph explaining which posts are most competitive.

Word target: 200-280

### ## Who qualifies for [PSC Name]

5-row eligibility table (Residency, Age, Education, Nationality, Number of attempts). Follow with a paragraph on the state domicile requirement (unique to each state) and any category-specific relaxations (SC/ST/OBC/EWS/PwD/women/serving state govt employees).

Word target: 280-350

### ## Application fee and how to apply

Fee table if variable by category. 8-step online application walkthrough for the state's official portal. Common errors and how to fix them (mobile OTP failure, photograph size, domicile mismatch).

Word target: 300-380

### ## Selection process: three stages

Explain Preliminary (screening), Main (merit), and Interview / Personality Test with mark breakdowns. Include a table with paper-wise marks and duration.

Word target: 350-450

### ## Syllabus and books

Prelims syllabus by paper. Mains syllabus by paper including state-specific optional subjects and state history / geography / current affairs paper (this is the unique differentiator per state). Recommended books per subject.

Word target: 400-500

### ## Salary and career progression

Pay level, in-hand salary, allowances (DA, HRA, TA). Career progression table from entry cadre to apex scale with typical years between promotions. Note whether IAS deputation is possible (state-specific).

Word target: 250-320

### ## Prep timeline: 6 to 12 months

Month-by-month plan for candidates starting fresh vs. candidates with prior UPSC prep. State-specific optionals and state history / geography papers are the differentiators. Practical study hour targets per phase.

Word target: 300-400

### ## Common mistakes candidates make

6 to 8 specific mistakes with state-context (e.g., under-preparing state history for BPSC, missing regional language for TNPSC, not doing MP static geography for MPPSC).

Word target: 200-280

### ## [State PSC] vs UPSC Civil Services

Comparison table with 10 rows (exam name, vacancies, prep time, syllabus overlap, age band, attempts, salary, promotion ceiling, difficulty, career flexibility). Follow with a decision-framework paragraph on when to prefer state PSC over central UPSC (state domicile advantage, home posting preference, lower competition).

Word target: 300-380

### ## Frequently asked questions

10 questions minimum. Format: bold question line, plain paragraph answer. Answer opens with the direct answer (no "Great question" filler). Cover: eligibility, application fee, best state-specific books, whether coaching is needed, salary in-hand, IAS deputation chance, attempts allowed, syllabus overlap with UPSC, state language paper requirement, promotion timeline.

Word target: 350-500

### ## Sources and related pages

Bulleted list of 4-6 primary sources (state PSC portal, state government portal, RTI Act, state gazette) and 4-6 internal cross-links (other State PSC pages, UPSC CSE if applicable, SSC CGL, related state government schemes page).

Word target: 100-140

---

## Cross-linking rules for cluster reinforcement

Every State PSC page must link to:
1. At least 2 other State PSC pages (creates the cluster mesh)
2. The state's `/state/[state]` category page
3. UPSC CSE or a comparable central exam page (context anchor)
4. One relevant blog (e.g., "SSC CGL 2026 preparation guide" if syllabus overlap exists, "Govt jobs vs private jobs" for career-decision anchor)

Follow the same bi-directional linking pattern used in the July 14 women cash-transfer cluster.

---

## Validation harness (per script)

Reuse the validation block from `scripts/update-lic-aao-2026.mjs`:
- `emCount === 0`
- `enCount === 0`
- `smartCount === 0`
- `bulletBoldLabels === 0`
- `inlineBoldLabels === 0`
- `forXOpener === 0`
- `AI_VOCAB` word-boundary scan returns zero hits
- `NEW_TITLE.length` between 50 and 65
- `NEW_DESCRIPTION.length` between 150 and 160
- Word count logged (target 2,500+)

Dry-run mode: pass `--dry` to preview validation without writing to DB.

---

## Ranking the first 5 State PSC targets

Priority proxy: state population × exam recency × search-volume signal from Bing WMT / GSC (near-miss queries at pos 5-15).

| Rank | Slug | State | Population (2011 census, cr) | Current words | Priority reason |
|---|---|---|---|---|---|
| 1 | bpsc-70th-cce-2026 | Bihar | 12.4 | 657 | Highest population, active 70th cycle in 2026, huge aspirant base |
| 2 | mppsc-state-service-exam-2026 | Madhya Pradesh | 8.5 | 763 | Large state, current notification, competitive keyword volume |
| 3 | mpsc-rajyaseva-2026 | Maharashtra | 12.3 | 569 | Second-largest state, structured MPSC aspirant community, high urban demand |
| 4 | gpsc-class-1-2-2026 | Gujarat | 7.0 | 481 | Gujarat aspirant density, industrial state |
| 5 | kpsc-kas-2026 | Karnataka | 6.7 | 498 | Karnataka Administrative Service, strong aspirant base + Bengaluru search volume |

**Alternative sequencing** if a state has active notification with imminent last date: prioritise that page (dates drive search spikes).

---

## Session cadence

Realistic: 1 PSC page fully expanded per hour with the template loaded. 5 pages = one focused 5-hour session, or split across 2-3 shorter sessions.

Do not stack more than 3 in a single commit. Bundle 3 per commit for cleaner git history.
