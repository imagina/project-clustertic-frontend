import { useAuthStore } from '@/stores/useAuth'
/*
 Adds the Authorization token in evey api call
*/
export const apiCluster = {
  config: () => {
    const authStore = useAuthStore()
    const token = authStore.getToken
    const config = useRuntimeConfig()
    const url = config.public.apiRoute
    const headers: HeadersInit = {
      ...{
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    }
    return { url, headers }
  },

  get: (url: string, params = {}) => {
    const config = apiCluster.config()
    return $fetch(`${config.url}${url}`, {
      headers: config.headers,
      params: params,
      method: 'GET',
    })
  },

  /**/
  post: (
    url: string,
    data?: {} | FormData,
    toSnakeCase = true,
    params = {},
  ) => {
    const config = apiCluster.config()
    let body: {} | FormData | undefined = {}
    let headers = { ...config.headers }
    if (data instanceof FormData) {
      body = data
      delete headers['Content-Type']
    } else {
      body = toSnakeCase ? Helper.toSnakeCase(data) : data
    }
    return $fetch(`${config.url}${url}`, {
      headers,
      method: 'POST',
      body,
      params: params,
    })
  },

  patch: (
    url: string,
    data?: {} | FormData,
    toSnakeCase = true,
    params = {},
  ) => {
    const config = apiCluster.config()
    let body: {} | FormData | undefined = {}
    let headers = { ...config.headers }
    if (data instanceof FormData) {
      body = data
      delete headers['Content-Type']
    } else {
      body = toSnakeCase ? Helper.toSnakeCase(data) : data
    }
    return $fetch(`${config.url}${url}`, {
      headers: headers,
      method: 'PATCH',
      body,
      params: params,
    })
  },
  put: (url: string, data?: {} | FormData, toSnakeCase = true, params = {}) => {
    const config = apiCluster.config()
    let body: {} | FormData | undefined = {}
    let headers = { ...config.headers }
    if (data instanceof FormData) {
      body = data
      delete headers['Content-Type']
    } else {
      body = toSnakeCase ? Helper.toSnakeCase(data) : data
    }
    return $fetch(`${config.url}${url}`, {
      headers: headers,
      method: 'PUT',
      body,
      params: params,
    })
  },
  delete: (url: string, data?: {}, toSnakeCase = true, params = {}) => {
    const config = apiCluster.config()
    const body = toSnakeCase ? Helper.toSnakeCase(data) : data
    return $fetch(`${config.url}${url}`, {
      headers: config.headers,
      method: 'DELETE',
      body,
      params: params,
    })
  },
}
