import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "ingly-admin";

export function proxy(request: NextRequest) {
  console.log(
    "Proxy executado:",
    request.nextUrl.pathname,
  );

  const session =
    request.cookies.get(COOKIE_NAME);

  if (
    request.nextUrl.pathname.startsWith(
      "/admin",
    ) &&
    !session
  ) {
    return NextResponse.redirect(
      new URL("/login", request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};