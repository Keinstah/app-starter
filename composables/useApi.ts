import { ofetch } from 'ofetch'
import type { FetchError } from 'ofetch'
import { useAppStore } from '~/stores/app'

export const useApi = () => {
    const config = useRuntimeConfig()
    const appStore = useAppStore()

    const api = ofetch.create({
        baseURL: config.public.apiBase,
        headers: {
            'Content-Type': 'application/json',
        },
        async onRequest({ options }) {
            const token = useCookie('auth-token').value
            if (token) {
                options.headers = {
                    ...options.headers,
                    Authorization: `Bearer ${token}`,
                }
            }
        },
        async onResponseError({ response }) {
            const error = response._data as FetchError
            appStore.errors.push(error.message)
            
            if (response.status === 401) {
                navigateTo('/auth/login')
            }
        },
    })

    return { api }
}