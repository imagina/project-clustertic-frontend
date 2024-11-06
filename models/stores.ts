import type { Project } from './projects'
import type { UserData } from './user'

export interface AuthState {
  user: UserData | null
  token: string | null
  expiresIn: Date | null
  loading: boolean
}
export interface ProjectsState {
  projects: Project[]
  page: number
  filters: any
  loading: boolean
}
