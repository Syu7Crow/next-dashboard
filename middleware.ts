import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    // api、_next/static、_next/image、.png を含まないパスに適用
    matcher: ['/((?!api|_next/static|_next/image|.png).*)'],
};