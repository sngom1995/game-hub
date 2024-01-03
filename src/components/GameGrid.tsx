import React, { useState, useEffect } from "react";
import useGames from "../hooks/useGames";

import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import CardGameContainer from "./CardGameContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatform";

interface Props {
  selectedGenre: Genre | null;
  selectPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectPlatform }: Props) => {
  const { error, data, loading } = useGames(selectedGenre, selectPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {loading &&
          skeletons.map((skeleton) => (
            <CardGameContainer key={skeleton}>
              <GameCardSkeleton key={skeleton} />
            </CardGameContainer>
          ))}
        {data.map((game) => (
          <CardGameContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </CardGameContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
