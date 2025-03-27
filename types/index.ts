// Global type declarations
export interface AppConfig {
    theme: 'light' | 'dark'
    language: string
}

export interface User {
    id: string
    email: string
    name: string
}

// Extend Nuxt's runtime config
declare module 'nuxt/schema' {
    interface RuntimeConfig {
        apiSecret: string
        public: {
            apiBase: string
            appName: string
        }
    }
}