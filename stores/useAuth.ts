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
    getToken(state){
      return state.token ? state.token : localStorage.getItem('userToken')
    },
    getFacebookClientId(state){
      return state.facebookClientId
    }
  },
  actions: {
    async login(credentials: {
      username: string
      password: string
    }): Promise<void> {
      try {
        this.loading = true
        const path = '/api/profile/v1/auth/login'
        await apiAuth(path,
          {
            method: 'POST',
            body: credentials,
          },
        ).then(response => {
            this.user = response.data.userData
            this.token = response.data.userToken
            this.expiresIn = response.data.expiresIn
            localStorage.setItem('userToken', this.token)
            const router = useRouter()
            router.push('/home')
            this.loading = false
        })        
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
      const path = '/api/profile/v1/auth/logout'
      await apiAuth(path, {
        method: 'GET'
      }).then(response => {
        this.user = null;
        this.token = null;
        this.expiresIn = null
        localStorage.removeItem('userToken')
      })

      const router = useRouter()
      router.push('/auth/login')
    },
    
    /* site settings */
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
    /* facebook settings */
    async getFacebookSettings(){
      const settings = this.getSettings(['isite::facebookClientId'])
      this.facebookClientId = settings['isite::facebookClientId']
    },
    /* google settings */
    async getGoogleSettings(){
      const settings = this.getSettings(['isite::googleClientId'])
      this.googleClientId = settings['isite::googleClientId']
    }
  },
})
