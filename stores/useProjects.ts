import { defineStore } from 'pinia'
import type { NewProjectFormValue, ProjectsState } from '~/models/stores'
import type { PaginationInfo } from '~/models/utils'

const apiRoutes = {
  /* auth */
  projects: '/api/ipin/v1/pins/',
}
export const useProjectsStore = defineStore('projects', {
  state: (): ProjectsState => ({
    projects: [],
    pagination: {
      total: 0,
      lastPage: 1,
      perPage: 12,
      currentPage: 0,
    },
    filters: {},
    loading: false,
  }),
  getters: {},
  actions: {
    async create(attributes: NewProjectFormValue) {
      const config = useRuntimeConfig()
      const auth = useAuthStore()
      debugger

      if (!auth.user) throw new Error('you need be logged')
      attributes = {
        ...attributes,
        user_id: auth.user.id,
        country_id: 48,
        province_id: 721,
        city_id: 956,
        status: 2,
      }
      const response = await apiCluster.post(apiRoutes.projects, { attributes })

      console.log(response)
    },
    async requestPage(page: number) {
      debugger
      if (this.pagination.currentPage === page) return
      try {
        const response: any = await apiCluster.get(
          `${apiRoutes.projects}?page=${page}&include=categories`,
        )

        const metadata: {
          page: PaginationInfo
        } = response.meta

        this.projects = response.data
        this.pagination = metadata.page
      } catch (error) {
        debugger
        console.error(error)
      }
    },
  },
})
