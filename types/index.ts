// Global type declarations
export interface AppConfig {
    theme: 'light' | 'dark';
    language: string;
}

export interface User {
    id: string;
    email: string;
    name: string;
}

// Define the public runtime config interface
export interface PublicRuntimeConfig {
    apiBase: string;
    appName: string;
}

// Extend Nuxt's runtime config
declare module 'nuxt/schema' {
    interface RuntimeConfig {
        apiSecret: string;
        public: PublicRuntimeConfig;
    }
}
