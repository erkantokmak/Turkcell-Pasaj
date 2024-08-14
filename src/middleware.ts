import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { toast } from "react-toastify";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;


  if (pathname === "/cart" || pathname === "/favorites") {
    if (!token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/cart", "/favorites"],
};