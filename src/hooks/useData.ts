
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results:T[];
}

const useData = <T>(endpoint: string, deps?: any[], requestConfig? : AxiosRequestConfig) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((response) => {
        setLoading(false);
        setData(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, deps?[...deps]:[]);
  return { error, data, loading };
};

export default useData;
