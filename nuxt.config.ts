// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap",
        },
      ],
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@pinia/nuxt", "@nuxt/icon", "@nuxtjs/i18n", "@nuxt/image"],

  i18n: {
    locales: [
      { code: "en", language: "en-US", name: "en", file: "en.json" },
      { code: "zh", language: "zh-TW", name: "zh", file: "zh.json" },
    ],
    lazy: true,
    defaultLocale: "en",
    strategy: "no_prefix", // 不要在 URL 加上 /en 或 /zh
    skipSettingLocaleOnNavigate: true,
    detectBrowserLanguage: {
      useCookie: true, // 保存用戶選擇的語言到 cookie 中
      cookieKey: "i18n_redirected", // 設置 cookie 的名稱
      alwaysRedirect: false, // 根據瀏覽器語言自動切換
    },
  },
});