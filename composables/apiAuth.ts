import { useAuthStore } from "@/stores/useAuth";
/*
 Adds the Authorization token in evey api call
*/
export const apiAuth = (url: string, method: string, body?: {}) => {  
  //auth token
  const authStore = useAuthStore();
  const token = authStore.getToken;
  const config = useRuntimeConfig()
  const baseUrl = `${config.public.apiRoute}${url}`
  const headers: HeadersInit = {    
    ...{
      'Content-Type': 'application/json',      
      Authorization: `${token}`
    },
  };
  
  

  return $fetch(baseUrl, {headers, method, body });
};

