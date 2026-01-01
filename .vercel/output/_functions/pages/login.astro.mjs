import { g as createComponent, p as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DN4uk8IV.mjs';
import { $ as $$Layout } from '../chunks/Layout_CrSw5iYB.mjs';
import $$Form from '../chunks/Form_Du22NHn9.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Search CRoyale - Login" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex items-center justify-center"> ${renderComponent($$result2, "Form", $$Form, { "server:defer": true, "server:component-directive": "defer", "server:component-path": "@components/Form.astro", "server:component-export": "default" }, { "fallback": ($$result3) => renderTemplate`<div class="px-5 py-10 w-80 bg-white/60 backdrop-blur rounded-xl flex flex-col gap-5 text-xl shadow-lg animate-pulse"> <div class="h-10 bg-gray-400 rounded"></div> <div class="flex flex-col gap-1"> <div class="h-7 bg-gray-400 rounded"></div> <div class="h-10 rounded border-gray-200 bg-gray-400"></div> <span class="h-7"></span> </div> <div class="h-6 bg-gray-400 rounded"></div> <div class="px-4 py-2 text-white rounded bg-gray-400 cursor-not-allowed"> <p class="text-center">Cargando...</p> </div> </div>` })} </section> ` })}`;
}, "C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes Astro/Nueva carpeta/search-croyale/src/pages/login.astro", "self");

const $$file = "C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes Astro/Nueva carpeta/search-croyale/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
