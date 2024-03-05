import axios, { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next?: string | null;
}
const axiosInstance = axios.create({
  baseURL: "https://swapi.dev/api",
});

export { CanceledError };

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getBySearchTerm = (entity:string, term:string,config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint + "/" + '?search=' + term, config)
      .then((res) => res.data);
  };
  getById = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default ApiClient;
