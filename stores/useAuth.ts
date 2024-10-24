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
    getUsername(state){
      return state.username ? state.username : localStorage.getItem('username')
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
        await apiAuth.post(apiRoutes.authLogin, credentials ).then(response => {
          this.user = response.data.userData
          this.token = response.data.userToken
          this.expiresIn = response.data.expiresIn
          this.username = credentials.username
          localStorage.setItem('userToken', this.token)
          localStorage.setItem('expiresIn', this.expiresIn)
          localStorage.setItem('username', this.username)
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
      await apiAuth.get(apiRoutes.authLogout).then(response => {
        this.user = null;
        this.token = null;
        this.expiresIn = null
        this.username = null
        localStorage.removeItem('userToken')
        localStorage.removeItem('expiresIn')
        localStorage.removeItem('username')
      })
      const router = useRouter()
      router.push(routes.login)
      Notify.create({
        message: 'Has cerrado sesión exitosamente. ¡Hasta pronto!',
        type: 'positive',
      })
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
      
      await apiAuth.post(apiRoutes.authRegister, credentials).then(response => {
        //{"data":{"checkEmail":false}}          
        //update store, and redirect
        this.username = dataForm.email
        this.password = dataForm.password
        const router = useRouter()
        router.push(routes.login)
        Notify.create({
          message: '¡Usuario creado! Ahora puedes iniciar sesión.',
          type: 'positive',
        })
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
