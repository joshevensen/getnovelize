import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["~/assets/main.css"],
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/icon.png" },
        { rel: "apple-touch-icon", href: "/icon.png" },
      ],
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
  ],
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: [
        "/",
        "/about",
        "/contact",
        "/features",
        "/pricing",
        "/privacy",
        "/terms",
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
});
