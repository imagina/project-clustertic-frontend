import type { Project } from './projects'
import type { UserData } from './user'

export interface AuthState {
  username: string,
  password: string,
  user: UserData | null
  token: string 
  expiresIn: Date | null
  loading: boolean
  facebookClientId: any,
  googleClientId: any
}
export interface ProjectsState {
  projects: Project[]
  page: number
  filters: any
  loading: boolean
}
