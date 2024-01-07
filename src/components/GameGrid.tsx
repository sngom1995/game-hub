import React, { useState, useEffect } from "react";
import useGames from "../hooks/useGames";

import { Text, SimpleGrid, Button, Box } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import CardGameContainer from "./CardGameContainer";

import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    error,
    data,
    isLoading: loading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {loading &&
          skeletons.map((skeleton) => (
            <CardGameContainer key={skeleton}>
              <GameCardSkeleton key={skeleton} />
            </CardGameContainer>
          ))}
        {data?.pages.map((page, index) => {
          return (
            <React.Fragment key={index}>
              {page?.results.map((game) => (
                <CardGameContainer key={game.id}>
                  <GameCard key={game.id} game={game} />
                </CardGameContainer>
              ))}
            </React.Fragment>
          );
        })}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
