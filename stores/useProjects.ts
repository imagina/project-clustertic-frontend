import { defineStore } from 'pinia'
import type { Project, Proposal } from '~/models/interfaces/projects'
import type { ProjectsState } from '~/models/interfaces/stores'
import type {
  NewProjectFormValue,
  NewProposalFormValue,
} from '~/models/interfaces/stores'
import type { PaginationInfo } from '~/models/interfaces/utils'
import { User } from '~/models/UserData'

const apiRoutes = {
  /* auth */
  projects: '/api/ipin/v1/pins',
  proposals: '/api/ipin/v1/bids',
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
    selected: null,
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
    setFilters(filters: {
      search?: string
      minPrice?: number
      maxPrice?: number
      categories?: number[]
    }) {
      if (typeof filters.search === 'string')
        this.filters['search'] = filters.search ?? undefined
      if (
        typeof filters.minPrice === 'number' &&
        typeof filters.maxPrice === 'number'
      )
        this.filters['priceRange'] = {
          from: filters.minPrice > 0 ? filters.minPrice : 0,
          to: filters.maxPrice > 0 ? filters.maxPrice : 1000000000000,
        }

      if (Array.isArray(filters.categories))
        this.filters['categories'] =
          filters.categories.length > 0 ? filters.categories : undefined
    },
    async get(page: number, take: number = 10) {
      // if (this.pagination.currentPage === page && !force) return
      try {
        this.loading = true
        const response: any = await apiCluster.get(apiRoutes.projects, {
          page,
          take,
          include: 'categories',
          filter: JSON.stringify(this.filters),
        })
        const metadata: {
          page: PaginationInfo
        } = response.meta
        this.projects = response.data
        this.pagination = metadata.page
      } catch (error) {
        console.error(error)
        throw error
      } finally {
        this.loading = false
      }
    },
    async create(attributes: NewProjectFormValue) {
      const auth = useAuthStore()
      if (!auth.user) {
        Notify.create({
          message: 'Debes Ingresar para poder crear un proyecto',
          type: 'negative',
        })
        throw new Error('you need be logged')
      }
      const files = attributes.files
      delete attributes.files

      attributes = {
        ...attributes,
        user_id: auth.user.id,
        country_id: 48,
        province_id: 721,
        city_id: 956,
        status: 2,
      }

      if (files && files.length > 0) {
        attributes.medias_multi = {
          documents: {
            files: [],
          },
        }
        for (let i = 0; i < files.length; i++) {
          const file = files[i]
          const formData = new FormData()
          formData.append('disk', 's3')
          formData.append('parent_id', '0')
          formData.append('file', file)
          const { data: dataMedia }: any = await apiCluster.post(
            '/api/imedia/v1/files',
            formData,
            false,
          )
          attributes.medias_multi.documents?.files.push(dataMedia.id)
        }
      }
      const response: any = await apiCluster.post(apiRoutes.projects, {
        attributes,
      })
      this.get(1)
      Helper.redirectTo(`/projects`)
      return response
    },

    async viewDetails(id: number) {
      try {
        const filtros = {
          order: {
            field: 'id',
            way: 'desc',
          },
          ad_id: id,
        }
        this.loading = true
        const projectResponse: any = await apiCluster.get(
          `${apiRoutes.projects}/${id}`,
          {
            include: 'categories,user,province,country,city',
          },
        )
        const proposalResponse: any = await apiCluster.get(
          `${apiRoutes.proposals}`,
          {
            filter: JSON.stringify(filtros),
            include: 'creator.ratings',
          },
        )
        const project: Project = projectResponse.data
        project.bids = (<Proposal[]>proposalResponse.data).map(pro=>{
          if(pro.creator) pro.creator = new User(pro.creator)
          return pro
        })
        this.selected = project
        Helper.redirectTo(`/projects/${id}`)
      } catch (error) {
        console.error(error)
        throw error
      } finally {
        this.loading = false
      }
    },

    removeSelected() {
      this.selected = null
    },

    async addProposal(attributes: NewProposalFormValue) {
      const auth = useAuthStore()

      if (!auth.user) {
        Notify.create({
          message: 'Debes Ingresar para poder crear una propuesta',
          type: 'negative',
        })
        throw new Error('you need be logged')
      }
      try {
        const files = attributes.files
        delete attributes.files
        if (files && files.length > 0) {
          attributes.medias_multi = {
            documents: {
              files: [],
            },
          }
          for (let i = 0; i < files.length; i++) {
            const { data: dataMedia }: any = await apiCluster.fileUpload(
              files[i],
            )
            attributes.medias_multi.documents?.files.push(dataMedia.id)
          }
        }
        const response: any = await apiCluster.post(apiRoutes.proposals, {
          attributes,
        })
        if (this.selected && this.selected.id === attributes.ad_id) {
          const bids = this.selected.bids ?? []
          bids.unshift(response.data)
          this.selected.bids = bids
        }

        Notify.create({
          message: 'Se ha enviado la propuesta exitosamente',
          type: 'positive',
        })
        console.log(response)
      } catch (error) {
        console.error(error)
        throw error
      }
    },

    async selectProposal(proposal: Proposal) {
      const auth = useAuthStore()

      if (!auth.user) {
        Notify.create({
          message: 'Debes Ingresar para poder crear una propuesta',
          type: 'negative',
        })
        throw new Error('you need be logged')
      }
      if (!this.selected || this.selected.createdBy !== auth.user.id) {
        throw new Error('you need to select a project that you create')
      }
      try {
        const response: any = await apiCluster.put(
          apiRoutes.proposals + `/${proposal.id}`,
          {
            'attributes[selected]': 1,
          },
        )

        Notify.create({
          message: 'Se ha seleccionado la propuesta exitosamente',
          type: 'positive',
        })
        this.viewDetails(this.selected.id)
      } catch (error) {
        console.error(error)
        throw error
      }
    },
  },
})
