


import APIClient, { FetchResponse } from "../services/apiClient";

import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatform";


const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

interface FetchGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}


const useGames = (gemeQuery: GameQuery | null) => useQuery<FetchResponse<Game>, Error>({
  queryKey: ["games", gemeQuery],
  queryFn: () => apiClient.getAll({params:{ 
  genres:  gemeQuery?.genre?.id,
  parent_platforms: gemeQuery?.platform?.id,
  ordering: gemeQuery?.sortOrder,
  search: gemeQuery?.searchText,
}
}),
  staleTime: 24 * 60 * 60 * 1000, // 1 day
}
);

export default useGames;
