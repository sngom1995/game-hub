import ms from "ms";
import APIClient, { FetchResponse } from "../services/apiClient";

import { GameQuery } from "../App";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gemeQuery: GameQuery | null) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gemeQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gemeQuery?.genreId,
          parent_platforms: gemeQuery?.platformId,
          ordering: gemeQuery?.sortOrder,
          search: gemeQuery?.searchText,
          page: pageParam,
        },
      }),
    staleTime: ms("24h"), // 1 day
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
