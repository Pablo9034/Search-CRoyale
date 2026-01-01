import { d as defineMiddleware, s as sequence } from './chunks/index_BCLWD6Lt.mjs';
import './chunks/astro-designed-error-pages_C4Yh3_DH.mjs';
import './chunks/astro/server_DN4uk8IV.mjs';

const onRequest$1 = defineMiddleware(async ({ cookies, url, redirect }, next) => {
  if (url.pathname === "/" && !cookies.has("profile_tag")) {
    return redirect("/login");
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
