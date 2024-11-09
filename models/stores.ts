import type { Project } from './projects'
import type { UserData } from './user'
import type { PaginationInfo } from './utils'

export interface AuthState {
  username: string
  password: string
  user: UserData | null
  token: string
  expiresIn: Date | null
  loading: boolean
  facebookClientId: any
  googleClientId: any
}
export interface ProjectsState {
  projects: Project[]
  pagination: PaginationInfo
  filters: any
  loading: boolean
}

export interface NewProjectFormValue {
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
}
