import { g as createComponent, p as renderComponent, q as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DN4uk8IV.mjs';
import { $ as $$Layout } from '../chunks/Layout_CrSw5iYB.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex items-center justify-center"> <div class="px-5 py-10 w-80 bg-white/60 backdrop-blur rounded-xl flex flex-col gap-5 text-xl shadow-lg"> <h2 class="font-bold text-4xl text-center bg-linear-to-b from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">Info del Perfil:</h2> <div> <div class="relative flex flex-col"> <span id="name" class="h-9 font-bold text-3xl text-center text-gray-800"></span> <span id="tag" class="h-7 text-center"></span> <span id="level" class="absolute top-0 right-0 size-9 flex justify-center items-center bg-[url('xp.png')] bg-center font-bold text-white"></span> </div> <div class="h-14 pt-3 flex justify-center gap-3"> <div class="border-2 border-gray-200 px-2 py-1 rounded bg-linear-to-b from-gray-100/60 to-white/60"> <img src="trophy.webp" alt="Trophy" class="w-5 inline-block mr-2"> <span id="trophies" class="font-bold"></span> </div> <div class="border-2 border-gray-200 px-2 py-1 rounded bg-linear-to-b from-gray-100/60 to-white/60">
Victorias: <span id="wins" class="font-bold"></span> </div> </div> <div class="pt-3 flex flex-col items-center gap-3"> <img id="arena_picture" src="" alt="arena" class="h-42"> <span id="arena_name" class="h-8 font-bold text-2xl text-center text-gray-800"></span> </div> <div class="h-32 pt-3 flex justify-center items-center gap-3"> <div class="relative"> <img id="card_picture" src="" alt="arena" class="w-20"> <span id="card_elixir" class="absolute top-2 -left-2 size-8 flex justify-center items-center bg-[url('elixir.png')] bg-cover font-bold text-white"></span> </div> <span id="card_name" class="font-bold text-2xl text-center text-gray-800"></span> </div> </div> </div> </section> ` })} ${renderScript($$result, "C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes Astro/Nueva carpeta/search-croyale/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes Astro/Nueva carpeta/search-croyale/src/pages/index.astro", void 0);

const $$file = "C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes Astro/Nueva carpeta/search-croyale/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
