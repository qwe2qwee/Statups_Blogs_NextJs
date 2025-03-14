import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const lang = request.cookies.get("lang")?.value || "en";
  let response: NextResponse;

  // Handle root path redirection
  if (pathname === "/") {
    response = NextResponse.redirect(new URL(`/${lang}`, request.url));
  } else {
    response = NextResponse.next();
  }

  // Set language cookie if it doesn't exist
  if (!request.cookies.has("lang")) {
    response.cookies.set("lang", lang);
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
