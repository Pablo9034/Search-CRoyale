import { g as createComponent, h as createAstro, j as addAttribute, q as renderScript, r as renderTemplate, p as renderComponent, v as renderHead, w as renderSlot } from './astro/server_DN4uk8IV.mjs';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes Astro/Nueva carpeta/search-croyale/node_modules/.pnpm/astro@5.16.6_@types+node@25_fb6a6d9a78d2f2bf199f139d5dc2d1fa/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes Astro/Nueva carpeta/search-croyale/node_modules/.pnpm/astro@5.16.6_@types+node@25_fb6a6d9a78d2f2bf199f139d5dc2d1fa/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Search CRoyale" } = Astro2.props;
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="font-[Source_Sans_Pro] bg-[url('background-image.webp')] bg-cover"> <main class="max-w-lg min-h-screen mx-auto"> <header class="py-10 flex flex-col items-center"> <img src="clash-royale-logo.webp" alt="logo del clash" class="w-48"> <h1 class="text-4xl font-bold bg-linear-to-b from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">Search CRoyale</h1> </header> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes Astro/Nueva carpeta/search-croyale/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
