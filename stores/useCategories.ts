import { defineStore } from 'pinia'
import type { CategoriesState } from '~/models/interfaces/stores'
import type {
  NewProjectFormValue,
  NewProposalFormValue,
} from '~/models/interfaces/stores'
import type { PaginationInfo } from '~/models/interfaces/utils'

const apiRoutes = {
  /* auth */
  categories: '/api/ipin/v1/categories',
}
export const useCategoryStore = defineStore('categories', {
  state: (): CategoriesState => ({
    categories: [],
    pagination: {
      total: 0,
      lastPage: 1,
      perPage: 12,
      currentPage: 0,
    },
    filters: {
      order: {
        field: 'id',
        way: 'desc',
      },
    },
    loading: false,
  }),
  getters: {},
  actions: {
    setFilters(filters: { search?: string }) {
      if (typeof filters.search === 'string')
        this.filters['search'] = filters.search ?? undefined
    },
    async get(page: number, take: number = 10) {
      // if (this.pagination.currentPage === page && !force) return
      try {
        this.loading = true
        const response: any = await apiCluster.get(apiRoutes.categories, {
          page,
          take,
          filter: JSON.stringify(this.filters),
        })
        const metadata: {
          page: PaginationInfo
        } = response.meta
        this.categories = response.data
        this.pagination = metadata.page
      } catch (error) {
        console.error(error)
        throw error
      } finally {
        this.loading = false
      }
    },
  },
})
