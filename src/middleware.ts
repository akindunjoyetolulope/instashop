import { NextRequest, NextResponse } from "next/server";
import { ONBOARDING_FORM_INPUT } from "./utils/variables";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const hasCookie = cookieStore.has(ONBOARDING_FORM_INPUT);
  if (hasCookie) {
    return NextResponse.next();
  }

  // if (request.nextUrl.pathname.startsWith("/")) {
  //   cookieStore.delete(ONBOARDING_FORM_INPUT);
  // }

  // if (request.nextUrl.pathname.startsWith("/get-started")) {
  //   cookieStore.delete(ONBOARDING_FORM_INPUT);
  // }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/create-product", "/preview-product"],
};
