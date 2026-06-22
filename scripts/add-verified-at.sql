-- Migration: add verified_at to jobs and schemes
-- Run in Supabase SQL editor

ALTER TABLE jobs
  ADD COLUMN IF NOT EXISTS verified_at TIMESTAMPTZ DEFAULT NULL;

ALTER TABLE schemes
  ADD COLUMN IF NOT EXISTS verified_at TIMESTAMPTZ DEFAULT NULL;

-- Backfill: set verified_at = updated_at for all existing rows
UPDATE jobs   SET verified_at = updated_at WHERE verified_at IS NULL;
UPDATE schemes SET verified_at = updated_at WHERE verified_at IS NULL;
