import React, { useState, useEffect } from "react";
import useGames from "../hooks/useGames";

import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import CardGameContainer from "./CardGameContainer";

const GameGrid = () => {
  const { error, games, loading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {loading &&
          skeletons.map((skeleton) => (
            <CardGameContainer n key={skeleton}>
              <GameCardSkeleton key={skeleton} />
            </CardGameContainer>
          ))}
        {games.map((game) => (
          <CardGameContainer>
            <GameCard key={game.id} game={game} />
          </CardGameContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
