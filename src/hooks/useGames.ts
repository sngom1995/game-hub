
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

// const useGames = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     setLoading(true);
//     apiClient
//       .get<FetchGamesResponse>("/games", { signal: controller.signal })
//       .then((response) => {
//         setLoading(false);
//         setGames(response.data.results);
//       })
//       .catch((error) => {
//         if (error instanceof CanceledError) return;
//         setError(error.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);
//   return { error, games, loading };
// };

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>("/games", [selectedGenre?.id, selectedPlatform?.id], {params:{ genres:  selectedGenre?.id, platforms: selectedPlatform?.id}})

export default useGames;
