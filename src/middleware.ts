import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.includes("login")) {
    return NextResponse.next();
  }
  const cookie = request.cookies.get("auth_token");

  if (!cookie) return NextResponse.redirect(new URL("/login", request.url));

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/validate`,
      {
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      }
    );

    const data = response.data;
    if (!data.status) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Error validating auth token");
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
