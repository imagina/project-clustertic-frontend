import { FetchOptions } from "ohmyfetch";
import { useAuthStore } from "@/stores/useAuth";
/*
 Adds the Authorization token in evey api call
*/
export const apiAuth = (url: string, opts?: FetchOptions) => {  
  //auth token
  const authStore = useAuthStore();
  const token = authStore.getToken;
  
  const config = useRuntimeConfig()
  const baseUrl = `${config.public.apiRoute}${url}`
  const headers: HeadersInit = {
    ...(opts?.headers || {}),
    ...{
      'Content-Type': 'application/json',      
      Authorization: `${token}`
    },
  };

  return $fetch(baseUrl, { ...opts, headers });
};

