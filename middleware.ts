import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware(async (auth, req) => {
  // allow public pages (home and auth pages) to be accessible without protection
  const pathname = req.nextUrl?.pathname || new URL(req.url).pathname
  const isPublic =
    pathname === '/' ||
    pathname === '/sign-in' ||
    pathname.startsWith('/sign-in/') ||
    pathname === '/sign-up' ||
    pathname.startsWith('/sign-up/')

  if (!isPublic) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}