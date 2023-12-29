import React, { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [games]);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h2>{game.name}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
