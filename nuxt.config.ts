// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
    ssr: false,
    typescript: {
        typeCheck: true,
    },
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxt/test-utils',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt', // Correct module
    ],
    css: ['~/assets/css/main.scss'],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    runtimeConfig: {
        public: {
            apiBase: process.env.NUXT_PUBLIC_API_BASE,
            appName: process.env.NUXT_PUBLIC_APP_NAME,
        },
    },
    app: {
        head: {
            title: 'App Starter',
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
            ],
        },
    },
});
