import { createClient } from "@supabase/supabase-js";

// Service-role client for server-side content reads.
// Unlike supabase-admin, this does NOT set cache: "no-store",
// so it is compatible with Next.js static page generation (SSG/ISR).
// Caching is handled by unstable_cache in lib/content.ts.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabaseContent = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});
