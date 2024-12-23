// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY,
    public: {
      baseURL: process.env.NUXT_API_BASE_URL
    }
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0'
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "检查单",
      meta: [{ name: "description", content: "检查单" }],
    },
  },
  css: [
    "@/assets/css/common.css",
  ],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt'
  ]
})
