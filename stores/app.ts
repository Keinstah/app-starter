import { defineStore } from 'pinia'
import type { AppConfig } from '~/types'

interface AppState extends AppConfig {
    isLoading: boolean
    errors: string[]
}

export const useAppStore = defineStore('app', {
    state: (): AppState => ({
        theme: 'light',
        language: 'en',
        isLoading: false,
        errors: [],
    }),
    getters: {
        isDark: (state) => state.theme === 'dark',
    },
    actions: {
        toggleTheme() {
            this.theme = this.isDark ? 'light' : 'dark'
            localStorage.setItem('theme', this.theme)
        },
        initializeApp() {
            const savedTheme = localStorage.getItem('theme')
            if (savedTheme) {
                this.theme = savedTheme as 'light' | 'dark'
            }
        },
    },
})
