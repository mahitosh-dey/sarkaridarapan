-- Adds an optional manual override for notification-status driven robots policy.
-- Run in the Supabase SQL editor.
--
-- The application does NOT require this column to function. When it is absent
-- the mapper reads undefined, coalesces to null, and the status is derived from
-- structured fields (see lib/notification-status.ts). This migration only adds
-- the ability to override that derivation by hand.
--
-- Values:
--   'released'  force "index, follow"
--   'awaited'   force "noindex, follow"
--   NULL        derive automatically (default)

ALTER TABLE jobs
  ADD COLUMN IF NOT EXISTS notification_status text
  CHECK (notification_status IN ('released', 'awaited'));

ALTER TABLE entrance_exams
  ADD COLUMN IF NOT EXISTS notification_status text
  CHECK (notification_status IN ('released', 'awaited'));

ALTER TABLE schemes
  ADD COLUMN IF NOT EXISTS notification_status text
  CHECK (notification_status IN ('released', 'awaited'));

COMMENT ON COLUMN jobs.notification_status IS
  'Manual override for robots policy. NULL derives from last_date. See lib/notification-status.ts';
COMMENT ON COLUMN entrance_exams.notification_status IS
  'Manual override for robots policy. NULL derives from application_end/exam_date.';
COMMENT ON COLUMN schemes.notification_status IS
  'Manual override for robots policy. Schemes default to released.';

-- Known override needed on existing data:
-- kerala-psc-recruitment-2026 has last_date NULL by design because Kerala PSC
-- publishes rolling notifications with no single deadline. It is an evergreen
-- guide, not a pre-notification stub, so it must stay indexable.
UPDATE jobs
  SET notification_status = 'released'
  WHERE slug = 'kerala-psc-recruitment-2026';
