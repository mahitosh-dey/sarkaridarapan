// Static mapping of entrance exam slugs → related blog slugs, and vice-versa.
// Update when new exams or blog posts are added.

export const examToBlogs: Record<string, string[]> = {
  "jee-main-2027": [
    "government-jobs-after-12th-in-india-2026",
    "top-10-govt-jobs-after-12th-2026",
  ],
  "cuet-ug-2026": [
    "government-jobs-after-12th-in-india-2026",
    "top-10-govt-jobs-after-12th-2026",
  ],
  "cucet-2026": [
    "government-jobs-after-12th-in-india-2026",
    "top-10-govt-jobs-after-12th-2026",
  ],
  "gate-2027": [
    "top-10-govt-jobs-after-graduation-2026",
    "government-jobs-vs-private-jobs-india-2026",
  ],
  "cat-2026": [
    "top-10-govt-jobs-after-graduation-2026",
    "government-jobs-vs-private-jobs-india-2026",
  ],
  "xat-2027": [
    "top-10-govt-jobs-after-graduation-2026",
    "government-jobs-vs-private-jobs-india-2026",
  ],
  "clat-2026": [
    "government-jobs-after-12th-in-india-2026",
    "top-10-govt-jobs-after-12th-2026",
    "upsc-eligibility-2026-age-limit-qualification-attempts",
  ],
  "clat-2027": [
    "government-jobs-after-12th-in-india-2026",
    "top-10-govt-jobs-after-12th-2026",
  ],
  "ailet-2026": [
    "government-jobs-after-12th-in-india-2026",
    "top-10-govt-jobs-after-12th-2026",
  ],
  "ailet-2027": [
    "government-jobs-after-12th-in-india-2026",
    "top-10-govt-jobs-after-12th-2026",
  ],
  "aibe-2026": [
    "top-10-govt-jobs-after-graduation-2026",
    "government-jobs-vs-private-jobs-india-2026",
  ],
  "neet-pg-2026": [
    "top-10-govt-jobs-after-graduation-2026",
    "government-jobs-vs-private-jobs-india-2026",
  ],
  "neet-ug-2026-mcc-counselling": [
    "government-jobs-after-12th-in-india-2026",
    "top-10-govt-jobs-after-12th-2026",
  ],
  "mh-set-2026": [
    "top-10-govt-jobs-after-graduation-2026",
    "government-jobs-vs-private-jobs-india-2026",
  ],
};

export const blogToExams: Record<string, string[]> = {
  "government-jobs-after-12th-in-india-2026": [
    "jee-main-2027",
    "cuet-ug-2026",
    "clat-2027",
    "neet-ug-2026-mcc-counselling",
  ],
  "top-10-govt-jobs-after-12th-2026": [
    "jee-main-2027",
    "cuet-ug-2026",
    "clat-2027",
    "neet-ug-2026-mcc-counselling",
  ],
  "top-10-govt-jobs-after-graduation-2026": [
    "gate-2027",
    "cat-2026",
    "neet-pg-2026",
    "mh-set-2026",
  ],
  "government-jobs-vs-private-jobs-india-2026": [
    "gate-2027",
    "cat-2026",
    "xat-2027",
    "neet-pg-2026",
  ],
  "upsc-eligibility-2026-age-limit-qualification-attempts": [
    "clat-2026",
    "ailet-2026",
  ],
};
