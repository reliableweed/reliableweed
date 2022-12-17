// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  modules: ['@nuxt/content'],
  css: ["tachyons/css/tachyons.min.css"],
})
