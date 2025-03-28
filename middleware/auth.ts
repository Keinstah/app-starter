export default defineNuxtRouteMiddleware((to) => {
    const token = useCookie('auth-token');

    if (!token.value && to.path !== '/auth/login') {
        return navigateTo(
            {
                path: '/auth/login',
                query: { redirect: to.fullPath },
            },
            {
                replace: true,
            }
        );
    }
});
