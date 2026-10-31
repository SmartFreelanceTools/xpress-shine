import { createBrowserClient } from '@supabase/ssr'

// Browser client. Unlike the plain supabase-js client, this one stores the
// login session in cookies, so the server-side middleware can see it.
export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
