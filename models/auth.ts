import type { UserData } from "./user";

export interface LoginResponse {
    userToken: string;
    expiresIn: Date;
    userData:  UserData;
}