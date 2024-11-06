import { defineStore } from 'pinia'
import { Notify } from 'quasar'
import type { Project } from '~/models/projects'
import type { ProjectsState } from '~/models/stores'

export const useProjectsStore = defineStore('projects', {
  state: (): ProjectsState => ({
    projects: [],
    page: 0,
    filters: {},
    loading: false,
  }),
  getters: {},
  actions: {
    async create(attributes: {
      es: {
        title: string
        slug: string
        description: string
      }
      min_price: number
      max_price: number
      status?: 0 | 1 | 2
      categories: number[]

      medias_single?: {
        mainimage: number
      }
      medias_multi?: {
        gallery: {
          files: number[]
        }
      }
      user_id?: any
      country_id?: any
      province_id?: any
      city_id?: any
    }) {
      const config = useRuntimeConfig()
      localStorage.removeItem('userToken')
      attributes = { ...attributes, user_id: '' }
      await $fetch(`${config.public.apiRoute}/api/ipin/v1/pins/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { attributes },
      })
    },
    async requestPage(page: number) {
      debugger
      const config = useRuntimeConfig()
      if (this.page === page) return
      const auth = useAuthStore()
      const response: any = await $fetch(
        `${config.public.apiRoute}/api/ipin/v1/pins/?page=${page}&include=categories`,
        {
          headers: {
            Authorization: `${auth.token}`,
          },
          method: 'GET',
        },
      )
      debugger
      const loginResponse: Project[] = response.data
      this.page = page
    },
  },
})
