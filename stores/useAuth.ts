import { defineStore } from 'pinia'
import { Notify } from 'quasar'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: '',
    expiresIn: null,
    loading: false,
    facebookClientId: null,
    googleClientId: null
  }),
  getters: {
    isAuthenticated(state) {
      if (import.meta.client) {
        const tokenFromStorage = localStorage.getItem('userToken')
        return !!tokenFromStorage
      }
      return false
    },
  },
  actions: {
    async login(credentials: {
      username: string
      password: string
    }): Promise<void> {
      try {
        this.loading = true
        const config = useRuntimeConfig()
        const response: any = await $fetch(
          `${config.public.apiRoute}/api/profile/v1/auth/login`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: credentials,
          },
        )

        this.user = response.data.userData
        this.token = response.data.userToken
        this.expiresIn = response.data.expiresIn

        localStorage.setItem('userToken', this.token)
        const router = useRouter()
        router.push('/home')
        this.loading = false
      } catch (error) {
        this.loading = false
        console.error('Login failed:', error)
        Notify.create({
          message: 'Algo salio mal en el login',
          type: 'negative',
        })
      }
    },
    async logout() {
      const config = useRuntimeConfig()
      this.user = null
      this.token = null
      this.expiresIn = null
      localStorage.removeItem('userToken')

      await $fetch(`${config.public.apiRoute}/api/profile/v1/auth/logout`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    },
    //get isite settings
    async getSettings(settings: string[]){
      const config = useRuntimeConfig()

      await $fetch(`${config.public.apiRoute}/api/isite/v1/site/settings`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          filter: {
            "name": settings
          }
        }
      }).then(response => {
        if(response?.data)  return response.data
      })
    },
    async getFacebookSettings(){
      const settings = this.getSettings(['isite::facebookClientId'])
      this.facebookClientId = settings['isite::facebookClientId']
    },
    async getGoogleSettings(){
      const settings = this.getSettings(['isite::googleClientId'])
      this.googleClientId = settings['isite::googleClientId']
    }
  },
})
