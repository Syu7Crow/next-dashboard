import type { NextAuthConfig } from 'next-auth';

export const authConfig: NextAuthConfig = {
    // ログインページのパス
    pages: {
        signIn: '/login',
    },
    // ログインユーザのアクセス制御(認可) 
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            if (nextUrl.pathname.startsWith('/dashboard')) {
                return auth?.user ? true : false;
            } else if (auth?.user) {
                return Response.redirect(new URL('/dashboard', nextUrl));
            }
            return true;
        },
    },
    // ログイン時の処理(認証)
    providers: [],
};