import ms from "ms";

import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClint = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClint.getAll,
    staleTime: ms("24h"), // 1 day"
  });

export default usePlatforms;
