import React, { useState, useEffect } from "react";
import useGames from "../hooks/useGames";

import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { error, games } = useGames();

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
