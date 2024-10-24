export default defineNuxtRouteMiddleware((to, from) => {
  const authStore: any = useAuthStore()
  const pathLogin = '/auth/login'
  const pathHome = '/home'

  if (import.meta.client) {
    if (authStore.getToken && authStore.validateToken()) {
      if (to.path === pathLogin) {
        if (from.path !== pathHome) {
          console.log('to home')
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
