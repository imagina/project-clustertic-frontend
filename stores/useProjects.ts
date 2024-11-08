import { defineStore } from 'pinia'
import { Notify } from 'quasar'
import type { Project } from '~/models/projects'
import type { NewProjectFormValue, ProjectsState } from '~/models/stores'

export const useProjectsStore = defineStore('projects', {
  state: (): ProjectsState => ({
    projects: [],
    page: 0,
    filters: {},
    loading: false,
  }),
  getters: {},
  actions: {
    async create(attributes: NewProjectFormValue) {
      const config = useRuntimeConfig()
      const auth = useAuthStore()

      if (!auth.user) throw new Error('you need be logged')
      attributes = {
        ...attributes,
        user_id: auth.user.id,
        country_id: 48,
        province_id: 721,
        city_id: 956,
      }
      const response = await $fetch(
        `${config.public.apiRoute}/api/ipin/v1/pins/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${auth.getToken}`,
          },
          body: { attributes },
        },
      )

      console.log(response)
    },
    async requestPage(page: number) {
      const config = useRuntimeConfig()
      if (this.page === page) return
      const auth = useAuthStore()
      const response: any = await $fetch(
        `${config.public.apiRoute}/api/ipin/v1/pins/?page=${page}&include=categories`,
        {
          headers: {
            Authorization: `${auth.getToken}`,
          },
          method: 'GET',
        },
      )

      const loginResponse: Project[] = response.data
      this.page = page
    },
  },
})
