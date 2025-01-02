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
    parentCategories: [],
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
    async requestParentsCategories() {
      // if (this.pagination.currentPage === page && !force) return
      try {
        this.loading = true
        const response: any = await apiCluster.get(apiRoutes.categories, {
          include: 'children',
          filter: JSON.stringify({
            order: {
              field: 'id',
              way: 'asc',
            },
            parentId: null,
          }),
        })
        const metadata: {
          page: PaginationInfo
        } = response.meta
        this.parentCategories = response.data
      } catch (error) {
        console.error(error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async getById(id: number) {
      try {
        this.loading = true

        const response: any = await apiCluster.get(apiRoutes.categories, {
          include: 'children',
          filter: JSON.stringify({
            order: {
              field: 'id',
              way: 'asc',
            },
            id: id,
          }),
        })
        this.selected = response.data[0]
      } catch (error) {
        console.error(error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async viewDetails(id: number) {
      try {
        this.getById(id)
        Helper.redirectTo(`/categories/${id}`)
      } catch (error) {
        console.error(error)
        throw error
      }
    },
  },
})
