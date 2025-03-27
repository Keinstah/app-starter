export default defineNuxtRouteMiddleware((to) => {
    const token = useCookie('auth-token')
    
    if (!token.value && to.path !== '/auth/login') {
        return navigateTo('/auth/login', { 
            replace: true,
            query: { redirect: to.fullPath }
        })
    }
})