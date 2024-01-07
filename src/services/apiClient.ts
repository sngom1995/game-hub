import axios, { AxiosRequestConfig } from "axios";


export interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results:T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "20e5828656494353a23245d3af502df3",
  },
});

export class APIClient<T> {
  endpoint: string

  
  constructor(endpoint: string) {
    this.endpoint = endpoint
    
  }

  getAll = async (config?: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
        .then((res) => res.data)
  }
}

export default APIClient
