
import apiClient, { FetchResponse } from "../services/apiClient";

import { useQuery } from "@tanstack/react-query";


export interface Genre {
  image_background: string;
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Genre[];
}

const useGenres = () => useQuery({
  queryKey: ["genres"],
  queryFn:  () => apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
  staleTime: 24 * 60 * 60 * 1000, // 1 day
});

export default useGenres;
