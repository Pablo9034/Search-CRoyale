import { g as createComponent, h as createAstro, m as maybeRenderHead, j as addAttribute, q as renderScript, r as renderTemplate } from './astro/server_DN4uk8IV.mjs';

const $$Astro = createAstro();
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Form;
  const profile_tag = Astro2.cookies.get("profile_tag")?.value ?? "";
  return renderTemplate`${maybeRenderHead()}<form class="px-5 py-10 w-80 bg-white/60 backdrop-blur rounded-xl flex flex-col gap-5 text-xl shadow-lg"> <h2 class="font-bold text-4xl text-center bg-linear-to-b from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">Iniciar Sesión</h2> <label class="inline-flex flex-col gap-1"> <span>Etiqueta del Perfil:</span> <input id="profile_tag" type="text" name="profile_tag" placeholder="Ej: #R0YAL1234"${addAttribute(profile_tag, "value")} class="px-3 py-1 outline-none rounded border-2 border-gray-200 bg-linear-to-b from-gray-100 to-white uppercase"> <span id="error" class="h-7 text-red-500"></span> </label> <a href="#" class="text-base text-blue-700 underline">Dónde encontrar la etiqueta del perfil?</a> <input type="submit" id="btn" value="Buscar Perfil" disabled class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:cursor-pointer transition disabled:bg-gray-400 disabled:cursor-not-allowed"> </form> ${renderScript($$result, "C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes Astro/Nueva carpeta/search-croyale/src/components/Form.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes Astro/Nueva carpeta/search-croyale/src/components/Form.astro", void 0);

const $$file = "C:/Users/Lluvisnita/Desktop/Proyectos/Apuntes Astro/Nueva carpeta/search-croyale/src/components/Form.astro";
const $$url = undefined;

export { $$Form as default, $$file as file, $$url as url };
