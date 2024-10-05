import { ROUTING } from "./routing";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  defaultLocale: ROUTING.defaultLocale,
  localePrefix: ROUTING.localePrefix,
  locales: ROUTING.locales,
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(pt|en)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
