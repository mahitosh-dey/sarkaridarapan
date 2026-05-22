-- =============================================================================
-- SarkariDarapan - Supabase Schema
-- Run this in the Supabase SQL Editor to create tables, indexes, RLS, and RPC
-- =============================================================================

-- ======================== TABLES ========================

-- Jobs table
CREATE TABLE IF NOT EXISTS jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  organization TEXT NOT NULL DEFAULT '',
  post_name TEXT NOT NULL DEFAULT '',
  vacancies INTEGER DEFAULT 0,
  eligibility JSONB DEFAULT '{}',
  salary TEXT DEFAULT '',
  application_fee JSONB DEFAULT '""',
  important_dates JSONB DEFAULT '{}',
  how_to_apply TEXT DEFAULT '',
  selection_process JSONB DEFAULT '""',
  official_link TEXT DEFAULT '',
  notification_link TEXT DEFAULT '',
  apply_link TEXT DEFAULT '',
  category TEXT NOT NULL DEFAULT '',
  state TEXT NOT NULL DEFAULT '',
  is_active BOOLEAN DEFAULT true,
  published_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  description TEXT DEFAULT '',
  content TEXT DEFAULT '',
  reading_time TEXT DEFAULT '',
  image TEXT DEFAULT '',
  last_date TEXT DEFAULT '',
  qualification TEXT DEFAULT '',
  employment_type TEXT DEFAULT '',
  completeness_score REAL DEFAULT 0,
  quality_flag JSONB DEFAULT NULL,
  reviewed_at TIMESTAMPTZ DEFAULT NULL,
  search_vector TSVECTOR GENERATED ALWAYS AS (
    setweight(to_tsvector('english', coalesce(title, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(organization, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(post_name, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(description, '')), 'C')
  ) STORED,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Schemes table
CREATE TABLE IF NOT EXISTS schemes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  ministry TEXT NOT NULL DEFAULT '',
  launched_by TEXT DEFAULT '',
  objective TEXT DEFAULT '',
  eligibility JSONB DEFAULT '[]',
  benefits JSONB DEFAULT '[]',
  documents JSONB DEFAULT '[]',
  how_to_apply TEXT DEFAULT '',
  official_portal TEXT DEFAULT '',
  helpline_number TEXT DEFAULT '',
  category TEXT NOT NULL DEFAULT '',
  state TEXT NOT NULL DEFAULT '',
  published_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  description TEXT DEFAULT '',
  content TEXT DEFAULT '',
  reading_time TEXT DEFAULT '',
  image TEXT DEFAULT '',
  faqs JSONB DEFAULT '[]',
  search_vector TSVECTOR GENERATED ALWAYS AS (
    setweight(to_tsvector('english', coalesce(title, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(ministry, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(description, '')), 'C')
  ) STORED,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ======================== INDEXES ========================

-- Full-text search indexes
CREATE INDEX IF NOT EXISTS idx_jobs_search_vector ON jobs USING GIN (search_vector);
CREATE INDEX IF NOT EXISTS idx_schemes_search_vector ON schemes USING GIN (search_vector);

-- B-tree indexes for filtering and lookups
CREATE INDEX IF NOT EXISTS idx_jobs_slug ON jobs (slug);
CREATE INDEX IF NOT EXISTS idx_jobs_category ON jobs (category);
CREATE INDEX IF NOT EXISTS idx_jobs_state ON jobs (state);
CREATE INDEX IF NOT EXISTS idx_jobs_published_at ON jobs (published_at DESC);

-- Partial index for pending quality-flagged jobs
CREATE INDEX IF NOT EXISTS idx_jobs_quality_flag_pending
  ON jobs (is_active, reviewed_at) WHERE quality_flag IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_schemes_slug ON schemes (slug);
CREATE INDEX IF NOT EXISTS idx_schemes_category ON schemes (category);
CREATE INDEX IF NOT EXISTS idx_schemes_state ON schemes (state);
CREATE INDEX IF NOT EXISTS idx_schemes_published_at ON schemes (published_at DESC);

-- ======================== UPDATED_AT TRIGGER ========================

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER jobs_updated_at
  BEFORE UPDATE ON jobs
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER schemes_updated_at
  BEFORE UPDATE ON schemes
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_at();

-- ======================== ROW LEVEL SECURITY ========================

ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE schemes ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Allow public read on jobs"
  ON jobs FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow public read on schemes"
  ON schemes FOR SELECT
  TO anon, authenticated
  USING (true);

-- Service role write access
CREATE POLICY "Allow service role insert on jobs"
  ON jobs FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Allow service role update on jobs"
  ON jobs FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow service role delete on jobs"
  ON jobs FOR DELETE
  TO service_role
  USING (true);

CREATE POLICY "Allow service role insert on schemes"
  ON schemes FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Allow service role update on schemes"
  ON schemes FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow service role delete on schemes"
  ON schemes FOR DELETE
  TO service_role
  USING (true);

-- ======================== SEARCH RPC FUNCTION ========================

CREATE OR REPLACE FUNCTION search_content(search_query TEXT)
RETURNS TABLE (
  type TEXT,
  slug TEXT,
  title TEXT,
  description TEXT,
  category TEXT,
  state TEXT,
  published_at TIMESTAMPTZ,
  rank REAL
) AS $$
DECLARE
  tsquery_val TSQUERY;
BEGIN
  -- Build tsquery, fallback to empty if invalid
  BEGIN
    tsquery_val := plainto_tsquery('english', search_query);
  EXCEPTION WHEN OTHERS THEN
    tsquery_val := to_tsquery('');
  END;

  RETURN QUERY
    -- Full-text search results
    SELECT
      'job'::TEXT AS type,
      j.slug,
      j.title,
      j.description,
      j.category,
      j.state,
      j.published_at,
      ts_rank(j.search_vector, tsquery_val) AS rank
    FROM jobs j
    WHERE j.search_vector @@ tsquery_val

    UNION ALL

    SELECT
      'scheme'::TEXT AS type,
      s.slug,
      s.title,
      s.description,
      s.category,
      s.state,
      s.published_at,
      ts_rank(s.search_vector, tsquery_val) AS rank
    FROM schemes s
    WHERE s.search_vector @@ tsquery_val

    ORDER BY rank DESC, published_at DESC;
END;
$$ LANGUAGE plpgsql STABLE;
