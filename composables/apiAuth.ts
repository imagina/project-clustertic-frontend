import { useAuthStore } from "@/stores/useAuth";
/*
 Adds the Authorization token in evey api call
*/
  export const apiAuth =  {
    config: () => {
      const authStore = useAuthStore();
      const token = authStore.getToken;
      const config = useRuntimeConfig()
      const url = config.public.apiRoute
      const headers: HeadersInit = {
        ...{
          'Content-Type': 'application/json',
          Authorization: `${token}`
        },
      };
      return { url, headers}
    },

    get: (url: string) => {
      const config = apiAuth.config();
      return $fetch(`${config.url}${url}`, { headers: config.headers, method: 'GET'});
    }, 

    /**/
    post: (url: string, data?: {}, toSnakeCase = true) => {
      const config = apiAuth.config()
      const body = toSnakeCase? Helper.toSnakeCase(data) : data
      return $fetch(`${config.url}${url}`,  { headers: config.headers, method: 'POST', body});      
    }
  };

