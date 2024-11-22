import { defineStore } from 'pinia'
import { Notify } from 'quasar'
import ChangePassword from '~/pages/admin/changePassword.vue'
import type { LoginResponse } from '~/models/auth'
import type { AuthState } from '~/models/stores'
import { boolean } from 'zod'
import type { UserData } from '~/models/user'
import type { ProjectTag } from '~/models/projects'

const apiRoutes = {
  /* auth */
  authLogin: '/api/profile/v1/auth/login',
  authLogout: '/api/profile/v1/auth/logout',
  authMe: '/api/profile/v1/auth/me',
  authRegister: '/api/profile/v1/users/register',
  authLoginSocialNetwork: '/api/profile/v1/auth/social',
  authReset: '/api/profile/v1/auth/reset',
  authResetComplete: '/api/profile/v1/auth/reset-complete',
  changePassword: `/api/profile/v1/users/change-password`,
  /* settings */
  settings: '/api/isite/v1/site/settings',
  
  profileUsers: '/api/profile/v1/users',
  profileSkills: '/api/profile/v1/skills',
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
      if (process.client) {
        return state.token ? state.token : localStorage.getItem('userToken')
      }
      return state.token
    },
    getExpiresIn(state) {
      return state.expiresIn
        ? state.expiresIn
        : Helper.parseStringToDate(localStorage.getItem('expiresIn'))
    },
    getUsername(state) {
      return state.user ? state.user?.email : localStorage.getItem('username')
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
      return Helper.timestamp(this.getExpiresIn) >= Helper.timestamp()
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
        apiCluster
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
        await apiCluster
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
      } finally {
        this.loading = false
      }
    },
    async logout() {
      await apiCluster.get(apiRoutes.authLogout).then((response) => {
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
      try {
        await apiCluster
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
      } catch (error: any) {
        console.error('Login failed:', error)
        let msg = 'Algo salio mal en el login'
        if (error.data.errors) msg = 'Correo no disponible'

        Notify.create({
          message: msg,
          type: 'negative',
        })
      }
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
      apiCluster
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
    async refreshSession() {
      try {
        if (!this.getToken) return
        const response: any = await apiCluster.get(apiRoutes.authMe)
        this.user = response.data.userData
        this.expiresIn = Helper.parseStringToDate(
          localStorage.getItem('expiresIn'),
        )
        this.token = localStorage.getItem('userToken') ?? ''
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    async requestFullUser() {
      try {
        if (!this.getToken) return
        debugger
        const response: any = await apiCluster.get(apiRoutes.profileUsers + `/${this.user?.id}`, {
            include:'information,skills'
          })
        this.user = {...this.user, ...response.data}
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    /* reset password request */
    async resetPassword(dataForm: { username: string }) {
      this.clearToken()
      apiCluster
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
    async changedPasswordRequest(dataForm: {
      password: string
      passwordConfirmation: string
      userId: string
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
      apiCluster
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
      await this.getSettings(['isite::facebookClientId']).then(
        (response: any) => {
          if (response?.data) {
            this.facebookClientId = response.data['isite::facebookClientId']
          }
        },
      )
    },
    /* google settings */
    async getGoogleSettings() {
      await this.getSettings(['isite::googleClientId']).then(
        (response: any) => {
          if (response?.data) {
            this.googleClientId = response.data['isite::googleClientId']
          }
        },
      )
    },

    //user edit
    async changeProfileImage(img: File) {
      if (!this.user) throw Error('you must be logged')
      const formData = new FormData()
      formData.append('disk', 's3')
      formData.append('parent_id', '0')
      formData.append('file', img)
      const { data: dataMedia }: any = await apiCluster.post(
        '/api/imedia/v1/files',
        formData,
      )
      const body = {
        'attributes[id]': this.user?.id,
        'attributes[is_activated]': 1,
        'attributes[medias_single][profile]': dataMedia.id,
      }

      apiCluster
        .put(apiRoutes.profileUsers + `/${this.user?.id}`, {}, false, body)
        .then((response) => {
          this.requestFullUser()
        })
    },

    async addSkill(tagToAttach: ProjectTag) {
      debugger
      if (!this.user) throw Error('you must be logged')
      const body = {
        'attributes[title]': tagToAttach.title,
        'attributes[user_id]': this.user.id,
        'attributes[entity_type]': EntityTypes.Categories,
        'attributes[entity_id]': tagToAttach.id,
      }

      apiCluster
        .post(apiRoutes.profileSkills, body)
        .then((response) => {
          debugger
          this.requestFullUser()
        }).catch((e)=>{
          debugger
          console.error(e)
        })
    },
  },
})
