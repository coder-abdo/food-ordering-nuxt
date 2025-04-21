import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss() as any],
  },
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@sidebase/nuxt-auth",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@unlok-co/nuxt-stripe",
  ],
  auth: {
    globalAppMiddleware: true,
    baseURL: `http://localhost:${process.env.PORT || 3000}/api/auth/`,
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  stripe: {
    server: {
      key: process.env.STRIPE_SECRET_KEY,
    },
    client: {
      key: process.env.STRIPE_PUBLIC_KEY,
    },
  },
});
