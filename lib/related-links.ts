// Static bidirectional mappings for internal linking.
// Update whenever new jobs, schemes, exams, or blog posts are added.

// ── Exam ↔ Blog ────────────────────────────────────────────────────────────────

export const examToBlogs: Record<string, string[]> = {
  "jee-main-2027": ["government-jobs-after-12th-in-india-2026", "top-10-govt-jobs-after-12th-2026"],
  "cuet-ug-2026": ["government-jobs-after-12th-in-india-2026", "top-10-govt-jobs-after-12th-2026"],
  "cucet-2026": ["government-jobs-after-12th-in-india-2026", "top-10-govt-jobs-after-12th-2026"],
  "gate-2027": ["top-10-govt-jobs-after-graduation-2026", "government-jobs-vs-private-jobs-india-2026"],
  "cat-2026": ["top-10-govt-jobs-after-graduation-2026", "government-jobs-vs-private-jobs-india-2026"],
  "xat-2027": ["top-10-govt-jobs-after-graduation-2026", "government-jobs-vs-private-jobs-india-2026"],
  "clat-2026": [
    "government-jobs-after-12th-in-india-2026",
    "top-10-govt-jobs-after-12th-2026",
    "upsc-eligibility-2026-age-limit-qualification-attempts",
  ],
  "clat-2027": ["government-jobs-after-12th-in-india-2026", "top-10-govt-jobs-after-12th-2026"],
  "ailet-2026": ["government-jobs-after-12th-in-india-2026", "top-10-govt-jobs-after-12th-2026"],
  "ailet-2027": ["government-jobs-after-12th-in-india-2026", "top-10-govt-jobs-after-12th-2026"],
  "aibe-2026": ["top-10-govt-jobs-after-graduation-2026", "government-jobs-vs-private-jobs-india-2026"],
  "neet-pg-2026": ["top-10-govt-jobs-after-graduation-2026", "government-jobs-vs-private-jobs-india-2026"],
  "neet-ug-2026-mcc-counselling": ["government-jobs-after-12th-in-india-2026", "top-10-govt-jobs-after-12th-2026"],
  "mh-set-2026": ["top-10-govt-jobs-after-graduation-2026", "government-jobs-vs-private-jobs-india-2026"],
};

export const blogToExams: Record<string, string[]> = {
  "government-jobs-after-12th-in-india-2026": ["jee-main-2027", "cuet-ug-2026", "clat-2027", "neet-ug-2026-mcc-counselling"],
  "top-10-govt-jobs-after-12th-2026": ["jee-main-2027", "cuet-ug-2026", "clat-2027", "neet-ug-2026-mcc-counselling"],
  "top-10-govt-jobs-after-graduation-2026": ["gate-2027", "cat-2026", "neet-pg-2026", "mh-set-2026"],
  "government-jobs-vs-private-jobs-india-2026": ["gate-2027", "cat-2026", "xat-2027", "neet-pg-2026"],
  "upsc-eligibility-2026-age-limit-qualification-attempts": ["clat-2026", "ailet-2026"],
};

// ── Job ↔ Blog ─────────────────────────────────────────────────────────────────

export const jobToBlogs: Record<string, string[]> = {
  "ssc-cgl-2026": [
    "how-to-prepare-for-ssc-cgl",
    "ssc-cgl-syllabus-2026-complete-topic-wise-breakdown",
    "how-to-apply-for-ssc-cgl-2026",
    "best-books-for-ssc-cgl-2026-tier-1-and-tier-2",
  ],
  "ibps-po-2026": ["how-to-apply-for-ibps-po-2026", "how-to-download-ibps-po-admit-card-2026"],
  "sbi-po-2026": ["top-10-govt-jobs-after-graduation-2026", "government-jobs-vs-private-jobs-india-2026"],
  "sbi-clerk-2026": ["top-10-govt-jobs-after-graduation-2026", "how-to-fill-government-job-application-online"],
  "ibps-clerk-2026": ["top-10-govt-jobs-after-graduation-2026", "how-to-fill-government-job-application-online"],
  "ibps-rrb-2026": ["top-10-govt-jobs-after-graduation-2026", "how-to-fill-government-job-application-online"],
  "rbi-grade-b-2026": ["top-10-govt-jobs-after-graduation-2026", "government-jobs-vs-private-jobs-india-2026"],
  "rbi-assistant-2026": ["top-10-govt-jobs-after-graduation-2026", "how-to-fill-government-job-application-online"],
  "nabard-grade-a-2026": ["top-10-govt-jobs-after-graduation-2026", "government-jobs-vs-private-jobs-india-2026"],
  "rrb-ntpc-2026": ["railway-group-d-2026-notification-dates-apply-online", "government-jobs-after-12th-in-india-2026"],
  "rrb-alp-railway-recruitment-board-assistant-loco-pilot-2026": ["railway-group-d-2026-notification-dates-apply-online"],
  "upsc-civil-services-2026": [
    "upsc-eligibility-2026-age-limit-qualification-attempts",
    "top-10-govt-jobs-after-graduation-2026",
  ],
  "upsc-cds-ii-2026": ["upsc-eligibility-2026-age-limit-qualification-attempts", "government-jobs-after-12th-in-india-2026"],
  "upsc-capf-ac-2026": ["upsc-eligibility-2026-age-limit-qualification-attempts"],
  "nda-na-2026": ["top-10-govt-jobs-after-12th-2026", "government-jobs-after-12th-in-india-2026"],
  "ssc-mts-2026": [
    "government-jobs-after-12th-in-india-2026",
    "top-10-govt-jobs-after-12th-2026",
    "how-to-fill-government-job-application-online",
  ],
  "ssc-gd-constable-2026": ["government-jobs-after-12th-in-india-2026", "top-10-govt-jobs-after-12th-2026"],
  "ssc-chsl-2026": ["government-jobs-after-12th-in-india-2026", "top-10-govt-jobs-after-12th-2026"],
  "ssc-je-2026": ["top-10-govt-jobs-after-graduation-2026", "government-jobs-vs-private-jobs-india-2026"],
  "ssc-cpo-si-2026": ["government-jobs-after-12th-in-india-2026", "how-to-fill-government-job-application-online"],
};

export const blogToJobs: Record<string, string[]> = {
  "how-to-prepare-for-ssc-cgl": ["ssc-cgl-2026"],
  "how-to-apply-for-ssc-cgl-2026": ["ssc-cgl-2026"],
  "ssc-cgl-syllabus-2026-complete-topic-wise-breakdown": ["ssc-cgl-2026"],
  "best-books-for-ssc-cgl-2026-tier-1-and-tier-2": ["ssc-cgl-2026"],
  "how-to-apply-for-ibps-po-2026": ["ibps-po-2026"],
  "how-to-download-ibps-po-admit-card-2026": ["ibps-po-2026"],
  "railway-group-d-2026-notification-dates-apply-online": [
    "rrb-ntpc-2026",
    "rrb-alp-railway-recruitment-board-assistant-loco-pilot-2026",
  ],
  "government-jobs-after-12th-in-india-2026": ["ssc-mts-2026", "ssc-gd-constable-2026", "rrb-ntpc-2026", "nda-na-2026"],
  "top-10-govt-jobs-after-12th-2026": ["ssc-mts-2026", "ssc-gd-constable-2026", "ssc-chsl-2026", "nda-na-2026"],
  "top-10-govt-jobs-after-graduation-2026": ["ssc-cgl-2026", "ibps-po-2026", "upsc-civil-services-2026", "rbi-grade-b-2026"],
  "government-jobs-vs-private-jobs-india-2026": ["ssc-cgl-2026", "ibps-po-2026", "sbi-po-2026", "rbi-grade-b-2026"],
  "upsc-eligibility-2026-age-limit-qualification-attempts": ["upsc-civil-services-2026", "upsc-cds-ii-2026", "upsc-capf-ac-2026"],
  "how-to-fill-government-job-application-online": ["ssc-cgl-2026", "ibps-po-2026", "rrb-ntpc-2026"],
};

// ── Scheme ↔ Blog ──────────────────────────────────────────────────────────────

export const schemeToBlogs: Record<string, string[]> = {
  "pm-kisan-samman-nidhi-pm-kisan-2026": [
    "complete-guide-to-pm-kisan-yojana",
    "pm-kisan-samman-nidhi-apply-check-status-fix-errors",
    "pm-kisan-samman-nidhi-2026-status-check",
  ],
  "ayushman-bharat-pm-jay-2026": ["ayushman-bharat-card-2026-apply-download-use"],
  "national-scholarship-portal-nsp-2026-27-2026": ["government-jobs-after-12th-in-india-2026"],
  "pm-yashasvi-scholarship-2026": ["government-jobs-after-12th-in-india-2026", "top-10-govt-jobs-after-12th-2026"],
  "pm-scholarship-scheme-pmss-2026-27-2026": ["government-jobs-after-12th-in-india-2026"],
  "pm-internship-scheme-2026-round-3-2026": ["top-10-govt-jobs-after-graduation-2026"],
};

export const blogToSchemes: Record<string, string[]> = {
  "complete-guide-to-pm-kisan-yojana": ["pm-kisan-samman-nidhi-pm-kisan-2026"],
  "pm-kisan-samman-nidhi-apply-check-status-fix-errors": ["pm-kisan-samman-nidhi-pm-kisan-2026"],
  "pm-kisan-samman-nidhi-2026-status-check": ["pm-kisan-samman-nidhi-pm-kisan-2026"],
  "ayushman-bharat-card-2026-apply-download-use": ["ayushman-bharat-pm-jay-2026"],
  "government-jobs-after-12th-in-india-2026": [
    "national-scholarship-portal-nsp-2026-27-2026",
    "pm-yashasvi-scholarship-2026",
  ],
  "top-10-govt-jobs-after-12th-2026": [
    "national-scholarship-portal-nsp-2026-27-2026",
    "pm-yashasvi-scholarship-2026",
  ],
  "top-10-govt-jobs-after-graduation-2026": ["pm-internship-scheme-2026-round-3-2026"],
};
