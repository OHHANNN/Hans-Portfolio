// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@pinia/nuxt", "@nuxt/icon", "@nuxtjs/i18n"],

  i18n: {
    locales: [
      { code: "en", language: "en-US" },
      { code: "zh", language: "zh-TW" },
    ],
    lazy: true,
    langDir: "lang/", // 語言文件存放的目錄
    defaultLocale: "en",
  },
});
