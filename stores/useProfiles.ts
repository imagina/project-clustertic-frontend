import { defineStore } from 'pinia'
import type { UserData } from '~/models/interfaces/user'
import type { ProjectTag } from '~/models/interfaces/projects'
import type { PaginationInfo } from '~/models/interfaces/utils'
import { User } from '~/models/UserData'

const apiRoutes = {
  profileUsers: '/api/profile/v1/users',
  profileSkills: '/api/profile/v1/skills',
}

export const useProfilesStore = defineStore('profiles', {
  state: (): {
    user: UserData | null
    users: User[]
    pagination: PaginationInfo
    loading: boolean
    filters: { [key: string]: any }
  } => ({
    user: null,
    users: [],
    pagination: {
      total: 0,
      lastPage: 1,
      perPage: 12,
      currentPage: 0,
    },
    loading: false,
    filters: {
      roleId: 2,
    },
  }),
  getters: {
    fullUser(state) {
      return state.user ? new User(state.user) : undefined
    },
    userDescription(state) {
      if (!state.user) return ''
      const description = state.user.fields.find(
        (value) => value.name === 'description',
      )
      return description?.value ?? ''
    },

    userSocialMedia(state) {
      if (!state.user || !state.user.socialNetworks.id) return {}
      const socialMedia = JSON.parse(state.user.socialNetworks.value)
      return socialMedia
    },
  },
  actions: {
    setFilters(filters: { skills?: string[] }) {
      if (filters.skills) this.filters.skills = filters.skills
    },
    async get(page: number, take: number = 10) {
      // if (this.pagination.currentPage === page && !force) return
      try {
        this.loading = true
        const response: any = await apiCluster.get(apiRoutes.profileUsers, {
          page,
          take,
          include: 'information.files,skills,fields',
          filter: JSON.stringify(this.filters),
        })
        const metadata: {
          page: PaginationInfo
        } = response.meta
        this.users = response.data.map((user: any) => new User(user))
        this.pagination = metadata.page
      } catch (error) {
        console.error(error)
        throw error
      } finally {
        this.loading = false
      }
    },
    async requestFullUser(user_id: number) {
      try {
        this.loading = true
        const response: any = await apiCluster.get(
          apiRoutes.profileUsers + `/${user_id}`,
          {
            include: 'information,skills',
          },
        )
        let user
        if (this.user) user = { ...this.user, ...response.data }
        else user = response.data
        this.user = user
      } catch (error) {
        console.error(error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async viewDetails(id: number) {
      try {
        await this.requestFullUser(id)
        Helper.redirectTo(`/companies/${id}`)
      } catch (error) {
        console.error(error)
        throw error
      } finally {
        this.loading = false
      }
    },
    removeSelected() {
      this.user = null
    },
  },
})
