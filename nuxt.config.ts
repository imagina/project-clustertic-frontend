// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  pages: true,
  // Configurar los layouts predeterminados
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@pinia/nuxt',
    '@vesp/nuxt-fontawesome',
    '@nuxtjs/i18n',
    'nuxt-quasar-ui',
    'nuxt-svgo',
  ],
  plugins: ['./plugins/LoadUserBeforeMount.ts'],
  i18n: {
    vueI18n: './i18n/i18n.config.ts', // if you are using custom path, default
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  runtimeConfig: {
    public: {
      apiRoute: process.env.NUXT_API_ROUTE || '',
    },
  },
  quasar: {
    plugins: ['Notify'],
  },

  experimental: {
    viewTransition: true,
    // ...
  },
})
