import { defineStore } from 'pinia'
import { Notify } from 'quasar'

const apiRoutes = {
  /* auth */
  authLogin: '/api/profile/v1/auth/login',
  authLogout: '/api/profile/v1/auth/logout',
  authRegister: '/api/profile/v1/users/register',
  authLoginSocialNetwork: '/api/profile/v1/auth/social', 
  authReset: '/api/profile/v1/auth/reset',
  authChanged: '/api/profile/v1/auth/reset-complete',
  /* settings */
  settings: '/api/isite/v1/site/settings'  
};

const routes = {
  home: '/admin/home',
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
    getToken(state) {
      return state.token ? state.token : localStorage.getItem('userToken')
    },
    getExpiresIn(state) {
      return state.expiresIn ? state.expiresIn : localStorage.getItem('expiresIn')
    },
    getUsername(state) {
      return state.username ? state.username : localStorage.getItem('username')
    },
    getFacebookClientId(state) {
      return state.facebookClientId
    },
    getGoogleClientId(state) {
      return state.googleClientId
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    validateToken() {
      return (Helper.timestamp(this.getExpiresIn) <= Helper.timestamp())
    },


    /* Request login with Social Networks */
    authSocialNetwork(params){
      return new Promise((resolve, reject) => {
        const requestUrl = `${apiRoutes.authLoginSocialNetwork}/${params.type}`
        const socialData = params.socialData ? params.socialData : '';
        let requestParams = { attributes: { token: params.token, socialData, device: Helper.detectDevice()}, type: params.type }
        this.token = ''
        apiAuth.post(requestUrl, requestParams).then(response => {
          if(response?.data){
            this.authSuccess(response.data)
            resolve(response.data)
          }
        }).catch(error => {
          console.warn(error)
          reject(error)
        })
      })
    },

    authSuccess(userData) {
      this.user = userData.userData
      this.token = userData.data.userToken
      this.expiresIn = userData.data.expiresIn
      
      localStorage.setItem('userToken', this.token)
      localStorage.setItem('expiresIn', this.expiresIn)
      localStorage.setItem('username', this.username)      
      Helper.redirectTo(routes.home)
    },

    async login(credentials: {
      username: string
      password: string
    }): Promise<void> {
      try {
        this.loading = true
        await apiAuth.post(apiRoutes.authLogin, credentials).then(response => {
          this.authSuccess(response)
          Helper.redirectTo(routes.home)
        })
      } catch (error) {
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
      Helper.redirectTo(routes.login)
      Notify.create({
        message: 'Has cerrado sesión exitosamente. ¡Hasta pronto!',
        type: 'positive',
      })
    },

    async register(dataForm) {
      const currentDate = new Date()
      const credentials = {
        attributes: {
          ...dataForm,
          password_confirmation: dataForm.password,
          timezone: (currentDate.getTimezoneOffset() / 60),
          language: (navigator.language || navigator.userLanguage)
        }
      }

      await apiAuth.post(apiRoutes.authRegister, credentials).then(response => {
        //update store, and redirect
        this.username = dataForm.email
        this.password = dataForm.password
        
        Helper.redirectTo(routes.login)
        Notify.create({
          message: '¡Usuario creado! Ahora puedes iniciar sesión.',
          type: 'positive',
        })
      })
    },

    /* reset password request */
    async resetPassword(dataForm) {
      apiAuth.post(apiRoutes.authReset, dataForm).then(response => {
        console.log(response)
        //this.logout()
      })
    },

    /* Change password */ 
    async changedPasswordRequest(dataForm) {
      //Request Data
      let dataRequest = {
        password: dataForm.password,
        password_confirmation: dataForm.passwordConfirmation,
        userId: dataForm.userId,
        code: dataForm.token
      }
      apiAuth.post(apiRoutes.authChanged, dataRequest).then( response => {
        console.log(response)

      })      
    },


    /* site settings */
    async getSettings(settings: string[]) {
      const config = useRuntimeConfig()
      return await $fetch(`${config.public.apiRoute}${apiRoutes.settings}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          filter: {
            "name": settings
          }
        }
      })
    },
    /* facebook settings */
    async getFacebookSettings() {
      await this.getSettings(['isite::facebookClientId']).then(response => {
        if (response?.data) {
          this.facebookClientId = response.data['isite::facebookClientId']
        }
      })
    },
    /* google settings */
    async getGoogleSettings() {
      await this.getSettings(['isite::googleClientId']).then(response => {
        if (response?.data) {
          this.googleClientId = response.data['isite::googleClientId']
        }
      })
    },
    
  },
})
