import axios, { AxiosRequestConfig, CanceledError } from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://swapi.dev/api',
})

export { CanceledError }

class ApiClient<T> {
  endpoint: string
  constructor(endpoint: string) {
    this.endpoint = endpoint
  }
  getBySearchTerm = (term: string, config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<T>(this.endpoint + '/' + '?search=' + term, config)
      .then((res) => res.data)
  }
  getById = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + '/' + id)
      .then((res) => res.data)
  }
  getAll = (ids: string[]) => {
    return axiosInstance
      .get<any>(this.endpoint)
      .then((res) => res.data.results.filter(filter(ids)))
  }
}
export function filter(ids: string[]) {
  return function (element: any) {
    return ids.some((id: string) => element.url.includes(id))
  }
}
export default ApiClient
