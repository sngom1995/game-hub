

import APIClient, { FetchResponse } from "../services/apiClient";

import { useQuery } from "@tanstack/react-query";


export interface Genre {
  image_background: string;
  id: number;
  name: string;
}


const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => useQuery({
  queryKey: ["genres"],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000, // 1 day
});

export default useGenres;
