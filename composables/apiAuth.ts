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
    params = {},
    toSnakeCase = true,
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
  fileUpload: async (img: File) => {
    const formData = new FormData()
    formData.append('disk', 's3')
    formData.append('parent_id', '0')
    formData.append('file', img)
    try {
      return await apiCluster.post('/api/imedia/v1/files', formData)
    } catch (error: any) {
      if (error?.response?._data.errors) {
        const parser_error = JSON.parse(error?.response?._data.errors)
        if (
          parser_error['file'] &&
          parser_error['file'].includes(
            'Archivo es muy pesado. debe ser menor a 10 Mb MB.',
          )
        ) {
          Notify.create({
            message: 'Archivo es muy pesado. debe ser menor a 10 Mb.',
            type: 'negative',
          })
        }
      }
      throw error
    }
  },

  patch: (
    url: string,
    params = {},
    data?: {} | FormData,
    toSnakeCase = true,
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
  put: (url: string, params?: {} | FormData, data = {}, toSnakeCase = true) => {
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
  delete: (url: string, params = {}, data?: {}, toSnakeCase = true) => {
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
