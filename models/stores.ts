import type { UserData } from "./user"

export interface AuthState {
    user: UserData | null
    token: string | null
    expiresIn: Date | null
    loading: boolean
  }