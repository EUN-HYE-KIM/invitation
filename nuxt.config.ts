// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  nitro: {
    preset : 'github-pages' 
  },

  app: {
    baseURL : '/invitation/',
    head: {
        title: "승민 ♥ 은하 결혼합니다 :)",
        htmlAttrs: {
            lang: "ko",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content:
                    "width=device-width,initial-scale=1, maximum-scale=1.0, user-scalable=no",
            },
        ],
    },
  },

  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: `@use "@/assets/css/abstracts/variables" as *; @import "@/assets/css/abstracts/mixin";`,
              },
          },
      },
  },

  css: ["@/assets/css/main.scss"],
  devtools: { enabled: false },
  compatibilityDate: "2024-09-22",
});