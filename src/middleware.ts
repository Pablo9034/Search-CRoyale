import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async ({ cookies ,url, redirect }, next)=> {
    if(url.pathname === '/' && !cookies.has('profile_tag')) {
        return redirect('/login');
    }

    return next();
});