export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()
  const pathLogin = '/auth/login'
  const pathHome = '/admin/home'

  if (import.meta.client) {
    if (authStore.user && authStore.validateToken()) {
      if (to.path === pathLogin) {
        if (from.path !== pathHome) {
          return navigateTo(pathHome)
        }
      }
    } else {
      if (to.path !== pathLogin) {
        return navigateTo(pathLogin)
      }
    }
  }
})
