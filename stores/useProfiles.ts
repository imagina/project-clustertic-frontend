import { defineStore } from 'pinia'
import type { UserData } from '~/models/user'
import type { ProjectTag } from '~/models/projects'

const apiRoutes = {
  profileUsers: '/api/profile/v1/users',
  profileSkills: '/api/profile/v1/skills',
}

export const useProfilesStore = defineStore('profile', {
  state: (): {
    user: UserData | null
  } => ({
    user: null,
  }),
  getters: {
    userDescription(state) {
      if (!state.user) return ''
      const description = state.user.fields.find(
        (value) => value.name === 'description',
      )
      return description?.value ?? ''
    },
  },
  actions: {
    async requestFullUser(user_id: number) {
      try {
        const response: any = await apiCluster.get(
          apiRoutes.profileUsers + `/${user_id}`,
          {
            include: 'information,skills',
          },
        )
        if (this.user) this.user = { ...this.user, ...response.data }
        else this.user = response.data
      } catch (error) {
        console.error(error)
        throw error
      }
    },

    //user edit

    async editProfileInfo(data: {
      'attributes[medias_single][profile]'?: number
      'attributes[fields]'?: {
        name: string
        value: string | number
      }[]
    }) {
      if (!this.user) throw Error('you must be logged')
      const body: { [key: string]: any } = {
        'attributes[id]': this.user?.id,
        'attributes[is_activated]': 1,
        ...data,
      }
      if (body['attributes[fields]']) {
        const fields = body['attributes[fields]']
        delete body['attributes[fields]']
        fields.forEach(
          (
            item: {
              name: string
              value: string | number
            },
            i: number,
          ) => {
            body[`attributes[fields][${i}][name]`] = item.name
            body[`attributes[fields][${i}][value]`] = item.value
          },
        )
      }

      apiCluster
        .put(apiRoutes.profileUsers + `/${this.user?.id}`, body)
        .then((response) => {
          this.requestFullUser(<number>this.user?.id)
        })
    },

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
      this.editProfileInfo({
        'attributes[medias_single][profile]': dataMedia.id,
      })
    },

    async changeSocialMedia(socialMedia: {
      google?: string
      facebook?: string
      twitter?: string
      linkedin?: string
      web?: string
    }) {
      this.editProfileInfo({
        'attributes[fields]': [
          {
            name: 'socialNetworks',
            value: JSON.stringify(socialMedia),
          },
        ],
      })
    },

    async addSkill(tagToAttach: ProjectTag) {
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
          this.requestFullUser(<number>this.user?.id)
        })
        .catch((e) => {
          console.error(e)
        })
    },
  },
})
