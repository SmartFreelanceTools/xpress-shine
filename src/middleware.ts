import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// Runs on the server BEFORE any /admin page is sent to the browser.
// Visitors who are not signed in as an admin are redirected to /login.
export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet: any[]) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          response = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // getUser() asks Supabase to verify the session, so a fake cookie fails.
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Optional allow-list: ADMIN_EMAILS="you@example.com,other@example.com"
  const allowed = (process.env.ADMIN_EMAILS || '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)

  const isAdmin =
    !!user &&
    (allowed.length === 0 ||
      allowed.includes((user.email || '').toLowerCase()))

  const { pathname } = request.nextUrl

  // Already signed in as admin -> skip the login page
  if (pathname === '/login' && isAdmin) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  // Protect every /admin route
  if (pathname.startsWith('/admin') && !isAdmin) {
    const url = new URL('/login', request.url)
    url.searchParams.set('next', pathname)
    if (user) url.searchParams.set('error', 'forbidden')
    return NextResponse.redirect(url)
  }

  return response
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
}
