import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import toast from 'react-hot-toast';


export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (req.nextUrl.pathname.startsWith('/cart')) {
    if (!token) {
    
      toast('Bu sayfaya gidebilmek için bir hesabın olmalı ve giriş yapmalısınız.')
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  if (req.nextUrl.pathname.startsWith('/admin')) {
    if (!token || (token as any).user.role !== 'admin') {
      
      return NextResponse.redirect(new URL('/', req.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/cart','/admin'],
};