import { defineStore } from 'pinia'
import { Notify } from 'quasar'
import type { LoginResponse } from '~/models/auth'
import type { AuthState } from '~/models/stores'

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
    expiresIn: null,
    loading: false,
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
        debugger
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
        const loginResponse: LoginResponse = response.data
        this.user = loginResponse.userData
        this.token = loginResponse.userToken
        this.expiresIn = loginResponse.expiresIn

        localStorage.setItem('userToken', this.token)
        const router = useRouter()
        router.push('/')
        this.loading = false
      } catch (error: any) {
        this.loading = false
        console.error('Login failed:', error)
        let msg = 'Algo salio mal en el login'
        if (error.data.errors) msg = 'Usuario o contraseña invalido'

        Notify.create({
          message: msg,
          type: 'negative',
        })
      }
    },
    async register(credentials: {
      first_name: string
      last_name: string
      email: string
      password: string
      terms_and_conditions: boolean
    }) {
      const config = useRuntimeConfig()
      this.user = null
      this.token = null
      this.expiresIn = null
      localStorage.removeItem('userToken')
      try {
        await $fetch(`${config.public.apiRoute}/api/profile/v1/auth/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: {
            attributes: {
              ...credentials,
              password_confirmation: credentials.password,
            },
          },
        })
        this.login({
          username: credentials.email,
          password: credentials.password,
        })
      } catch (error: any) {
        const errors = JSON.parse(error.data.errors)
        let msg = 'Algo salio mal con el registro'
        if (errors['email']) msg = errors['email'].join(',')

        Notify.create({
          message: msg,
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
  },
})
