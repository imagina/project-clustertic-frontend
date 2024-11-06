import { defineStore } from 'pinia'
import { Notify } from 'quasar'
import ChangePassword from '~/pages/admin/changePassword.vue'
import type { LoginResponse } from '~/models/auth'
import type { AuthState } from '~/models/stores'
import { boolean } from 'zod'
import type { UserData } from '~/models/user'

const apiRoutes = {
  /* auth */
  authLogin: '/api/profile/v1/auth/login',
  authLogout: '/api/profile/v1/auth/logout',
  authRegister: '/api/profile/v1/users/register',
  authLoginSocialNetwork: '/api/profile/v1/auth/social',
  authReset: '/api/profile/v1/auth/reset',
  authResetComplete: '/api/profile/v1/auth/reset-complete',
  changePassword: `/api/profile/v1/users/change-password`,
  /* settings */
  settings: '/api/isite/v1/site/settings',
}

const routes = {
  home: '/',
  login: '/auth/login',
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    username: '',
    password: '',
    user: null,
    token: '',
    expiresIn: null,
    loading: false,
    facebookClientId: null,
    googleClientId: null,
  }),
  getters: {
    getToken(state) {
      return state.token ? state.token : localStorage.getItem('userToken')
    },
    getExpiresIn(state) {
      return state.expiresIn
        ? state.expiresIn
        : Helper.parseStringToDate(localStorage.getItem('expiresIn'))
    },
    getUsername(state) {
      return state.user ? state.user?.email : localStorage.getItem('username')
    },
    getUserData(state) {
      return state.user
    },
    getFacebookClientId(state) {
      return state.facebookClientId
    },
    getGoogleClientId(state) {
      return state.googleClientId
    },
  },
  actions: {
    async setToken(token: string, expiresIn: '') {
      this.token = token
      this.expiresIn = Helper.parseStringToDate(expiresIn)
      localStorage.setItem('userToken', token)
      localStorage.setItem('expiresIn', expiresIn)
    },

    async clearToken() {
      this.token = ''
      this.expiresIn = null
      this.user = null
      localStorage.removeItem('userToken')
      localStorage.removeItem('expiresIn')
      localStorage.removeItem('username')
    },

    validateToken() {
      return Helper.timestamp(this.getExpiresIn) <= Helper.timestamp()
    },

    /* Request login with Social Networks */
    authSocialNetwork(params: {
      socialData: string
      type: string
      token: string
    }) {
      return new Promise((resolve, reject) => {
        const requestUrl = `${apiRoutes.authLoginSocialNetwork}/${params.type}`
        const socialData = params.socialData ? params.socialData : ''
        let requestParams = {
          attributes: {
            token: params.token,
            socialData,
            device: Helper.detectDevice(),
          },
          type: params.type,
        }
        this.token = ''
        apiAuth
          .post(requestUrl, requestParams)
          .then((response: any) => {
            if (response?.data) {
              this.authSuccess(response.data)
              resolve(response.data)
            }
          })
          .catch((error) => {
            console.warn(error)
            reject(error)
          })
      })
    },

    async authSuccess(userData: LoginResponse) {
      this.user = userData.userData
      this.token = userData.userToken
      this.expiresIn = Helper.parseStringToDate(userData.expiresIn)

      localStorage.setItem('userToken', this.token)
      localStorage.setItem('expiresIn', userData.expiresIn)
      localStorage.setItem('username', this.user.email)
      Helper.redirectTo(routes.home)
    },

    async login(credentials: {
      username: string
      password: string
    }): Promise<void> {
      try {
        this.loading = true
        await apiAuth
          .post(apiRoutes.authLogin, credentials)
          .then((response: any) => {
            if (response?.data) {
              this.authSuccess(response.data)
              Helper.redirectTo(routes.home)
            }
          })
      } catch (error: any) {
        console.error('Login failed:', error)
        let msg = 'Algo salio mal en el login'
        if (error.data.errors) msg = 'Usuario o contraseña invalido'

        Notify.create({
          message: msg,
          type: 'negative',
        })
      }
    },
    async logout() {
      await apiAuth.get(apiRoutes.authLogout).then((response) => {
        this.clearToken()
      })
      Helper.redirectTo(routes.login)
      Notify.create({
        message: 'Has cerrado sesión exitosamente. ¡Hasta pronto!',
        type: 'positive',
      })
    },

    async register(dataForm: {
      firstName: string
      lastName: string
      email: string
      password: string
      agreement: boolean
    }) {
      const currentDate = new Date()
      const credentials = {
        attributes: {
          ...dataForm,
          password_confirmation: dataForm.password,
          timezone: currentDate.getTimezoneOffset() / 60,
          language: navigator.language || navigator.userLanguage,
        },
      }

      await apiAuth
        .post(apiRoutes.authRegister, credentials)
        .then((response) => {
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

    /* change the password form admin/changePassword */
    async changePassword(dataForm: {
      password: string
      newPassword: string
      newPasswordConfirmation: string
    }) {
      const requestData = {
        attributes: {
          ...dataForm,
          email: this.getUsername,
        },
      }
      apiAuth
        .post(apiRoutes.changePassword, requestData, false)
        .then((response) => {
          Helper.redirectTo(routes.login)
          Notify.create({
            message: 'contraseña actualizada!',
            type: 'positive',
          })
        })
        .catch((error) => {
          Notify.create({
            message: 'error al cambiar la contraseña',
            type: 'negative',
          })
        })
    },

    /* reset password request */
    async resetPassword(dataForm: { username: string }) {
      this.clearToken()
      apiAuth
        .post(apiRoutes.authReset, { attributes: dataForm })
        .then((response) => {
          Helper.redirectTo(routes.login)
          Notify.create({
            message: 'Revisa tu email para reiniciar tu contraseña.',
            type: 'positive',
          })
        })
        .catch((error) => {
          Notify.create({
            message:
              'Ningún usuario con esa dirección de correo electrónico se encuentra registrado en nuestro sistema.',
            type: 'negative',
          })
        })
    },

    /* 
      Change password from reset email url
    */
    async changedPasswordRequest(dataForm:{
      
      password: string,
      passwordConfirmation: string,
      userId: string, 
      token: string
    }) {
      this.clearToken()
      //Request Data
      let dataRequest = {
        password: dataForm.password,
        password_confirmation: dataForm.passwordConfirmation,
        userId: dataForm.userId,
        code: dataForm.token,
      }
      apiAuth
        .post(apiRoutes.authResetComplete, dataRequest)
        .then((response) => {
          Helper.redirectTo(routes.login)
          Notify.create({
            message: 'Tu contraseña se actualizó correctamente.',
            type: 'positive',
          })
        })
        .catch((error) => {
          Notify.create({
            message: 'No se pudo actualizar la contraseña',
            type: 'negative',
          })
        })
    },

    /* site settings */
    async getSettings(settings: string[]) {
      const config = useRuntimeConfig()
      debugger
      return await $fetch(`${config.public.apiRoute}${apiRoutes.settings}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          filter: {
            name: settings,
          },
        },
      })
    },
    /* facebook settings */
    async getFacebookSettings() {
      await this.getSettings(['isite::facebookClientId']).then((response:any) => {
        if (response?.data) {
          this.facebookClientId = response.data['isite::facebookClientId']
        }
      })
    },
    /* google settings */
    async getGoogleSettings() {
      await this.getSettings(['isite::googleClientId']).then((response:any) => {
        if (response?.data) {
          this.googleClientId = response.data['isite::googleClientId']
        }
      })
    },
  },
})
