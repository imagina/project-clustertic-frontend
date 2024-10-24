import { defineStore } from 'pinia'
import { Notify } from 'quasar'

const apiRoutes = {
  authLogin: '/api/profile/v1/auth/login', 
  authLogout: '/api/profile/v1/auth/logout',   
  authRegister: '/api/profile/v1/users/register',
  settings: '/api/isite/v1/site/settings', 
};

const routes = {
  home: '/home', 
  login: '/auth/login'
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    username: '', 
    password: '',
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
    getExpiresIn(state){
      return state.expiresIn ? state.expiresIn : localStorage.getItem('expiresIn')
    },
    getFacebookClientId(state){
      return state.facebookClientId
    }
  },
  actions: {   
    //add to helper 
    timestamp(date = false ) {
      date = date ? date : new Date();
      return date / 1000 | 0;
    },

    validateToken(){
      return (this.timestamp(this.getExpiresIn) <= this.timestamp())      
    },

    async login(credentials: {
      username: string
      password: string
    }): Promise<void> {
      try {
        this.loading = true
        await apiAuth(apiRoutes.authLogin, 'POST', credentials ).then(response => {
            this.user = response.data.userData
            this.token = response.data.userToken
            this.expiresIn = response.data.expiresIn
            localStorage.setItem('userToken', this.token)
            localStorage.setItem('expiresIn', this.expiresIn)
            const router = useRouter()
            router.push(routes.home)
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
      console.log('logout')
      await apiAuth(apiRoutes.authLogout, 'GET').then(response => {
        this.user = null;
        this.token = null;
        this.expiresIn = null
        localStorage.removeItem('userToken')
        localStorage.removeItem('expiresIn')
      })

      const router = useRouter()
      router.push(routes.login)
    },

    async register(dataForm){
      const currentDate = new Date()
      const credentials = {
        attributes :{
          ...dataForm,
          password_confirmation: dataForm.password, 
          timezone: (currentDate.getTimezoneOffset() / 60),
          language: (navigator.language || navigator.userLanguage)
        }
      }

      console.log(credentials)
      await apiAuth(apiRoutes.authRegister, 'POST',
        {          
         // body: toSnakeCase(credentials),
        }).then(response => {
          //{"data":{"checkEmail":false}}
          //update store, and redirect
          console.log(response)
        })
    },
    
    /* site settings */
    async getSettings(settings: string[]){
      const config = useRuntimeConfig()
      await $fetch(`${config.public.apiRoute}${apiRoutes.settings}`, {
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
