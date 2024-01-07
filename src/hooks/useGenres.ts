import APIClient, { FetchResponse } from "../services/apiClient";

import { useQuery } from "@tanstack/react-query";
import ms from "ms";

export interface Genre {
  image_background: string;
  id: number;
  name: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 1 day
  });

export default useGenres;
