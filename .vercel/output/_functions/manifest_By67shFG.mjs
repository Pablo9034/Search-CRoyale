import { x as decodeKey } from './chunks/astro/server_DN4uk8IV.mjs';
import './chunks/astro-designed-error-pages_C4Yh3_DH.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_CIrOleEE.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes%20Astro/Nueva%20carpeta/search-croyale/","cacheDir":"file:///C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes%20Astro/Nueva%20carpeta/search-croyale/node_modules/.astro/","outDir":"file:///C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes%20Astro/Nueva%20carpeta/search-croyale/dist/","srcDir":"file:///C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes%20Astro/Nueva%20carpeta/search-croyale/src/","publicDir":"file:///C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes%20Astro/Nueva%20carpeta/search-croyale/public/","buildClientDir":"file:///C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes%20Astro/Nueva%20carpeta/search-croyale/dist/client/","buildServerDir":"file:///C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes%20Astro/Nueva%20carpeta/search-croyale/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.16.6_@types+node@25_fb6a6d9a78d2f2bf199f139d5dc2d1fa/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/.pnpm/astro@5.16.6_@types+node@25_fb6a6d9a78d2f2bf199f139d5dc2d1fa/node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmwGt0iA.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media(prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmwGt0iA.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes Astro/Nueva carpeta/search-croyale/src/actions/index.ts",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:actions/entrypoint",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes Astro/Nueva carpeta/search-croyale/src/pages/login.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/login@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes Astro/Nueva carpeta/search-croyale/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/entrypoint":"entrypoint.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.16.6_@types+node@25_fb6a6d9a78d2f2bf199f139d5dc2d1fa/node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.16.6_@types+node@25_fb6a6d9a78d2f2bf199f139d5dc2d1fa/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_By67shFG.mjs","C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes Astro/Nueva carpeta/search-croyale/src/components/Form.astro":"chunks/Form_Du22NHn9.mjs","C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes Astro/Nueva carpeta/search-croyale/node_modules/.pnpm/astro@5.16.6_@types+node@25_fb6a6d9a78d2f2bf199f139d5dc2d1fa/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_yd8q29qp.mjs","C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes Astro/Nueva carpeta/search-croyale/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.rD_ozbsA.js","C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes Astro/Nueva carpeta/search-croyale/src/components/Form.astro?astro&type=script&index=0&lang.ts":"_astro/Form.astro_astro_type_script_index_0_lang.CNpjlsc0.js","C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes Astro/Nueva carpeta/search-croyale/node_modules/.pnpm/astro@5.16.6_@types+node@25_fb6a6d9a78d2f2bf199f139d5dc2d1fa/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CwlK1e6z.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes Astro/Nueva carpeta/search-croyale/src/pages/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const t=r=>{switch(r){case\"Arena_L11.webp\":return\"Cabaña del leñador\";default:return\"\"}},e=JSON.parse(localStorage.getItem(\"profile_info\")??\"\");document.querySelector(\"#name\").innerHTML=e.name,document.querySelector(\"#tag\").innerHTML=e.tag,document.querySelector(\"#level\").innerHTML=e.level,document.querySelector(\"#trophies\").innerHTML+=e.trophies,document.querySelector(\"#wins\").innerHTML+=e.wins,document.querySelector(\"#arena_picture\").setAttribute(\"src\",`${e.arena}.webp`);const n=Object.keys(t).filter(r=>r==e.arena).at(0)??\"Arena_L11.webp\";document.querySelector(\"#arena_name\").innerHTML=t(n),document.querySelector(\"#card_picture\").setAttribute(\"src\",e.favoriteCard.picture),document.querySelector(\"#card_name\").innerHTML=e.favoriteCard.name,document.querySelector(\"#card_elixir\").innerHTML=e.favoriteCard.elixirCost});"]],"assets":["/_astro/source-sans-pro-latin-700-normal.DL7J4422.woff2","/_astro/source-sans-pro-latin-400-normal.tpsLXCSJ.woff2","/_astro/source-sans-pro-latin-700-normal.BNdTgDH_.woff","/_astro/source-sans-pro-latin-400-normal.R7DZS9ko.woff","/_astro/index.BmwGt0iA.css","/Arena_L11.webp","/background-image.webp","/Barbarian_Bowl.webp","/Bone_Pit.webp","/Boot_Camp.webp","/Builder%27s_Workshop.webp","/clash-royale-logo.webp","/Clash_Fest.webp","/Dragon_Spa.webp","/Electro_Valley.webp","/elixir.png","/Executioner%27s_Kitchen.webp","/favicon.svg","/Frozen_Peak.webp","/Goblin_Stadium.webp","/Hog_Mountain.webp","/Jungle_Arena.webp","/Legendary_Arena.webp","/Miner%27s_Mine.webp","/Musketeer_Street_Arena.webp","/P.E.K.K.A.%27s_Playhouse.webp","/PANCAKES%21.webp","/Rascal%27s_Hideout.webp","/Royal_Arena.webp","/Royal_Crypt.webp","/Royal_Road_Arena.webp","/Serenity_Peak.webp","/Silent_Sanctuary.webp","/Spell_Valley.webp","/Spooky_Town.webp","/Summit_of_Heroes_Arena.webp","/trophy.webp","/Valkalla_Arena.webp","/xp.png","/_astro/client.B9YBqyHK.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CwlK1e6z.js","/_astro/Form.astro_astro_type_script_index_0_lang.CNpjlsc0.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[["@components/Form.astro","Form"]],"key":"GMzh1+Wq3gnUiRc4nSNDDFwvcP94LiGGb3kBho8bB3M="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
