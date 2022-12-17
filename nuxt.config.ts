// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'netlify'
  },
  target: 'static',
  modules: ['@nuxt/content'],
  css: ["tachyons/css/tachyons.min.css"],
  // add the netlify identity widget to the head
  head: {
    script: [
      {
        src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
        defer: true,
      },
    ],
  },
})
