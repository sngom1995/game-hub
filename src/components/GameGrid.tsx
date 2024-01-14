import React, { useState, useEffect } from "react";
import useGames from "../hooks/useGames";

import { Text, SimpleGrid, Button, Box, Spinner } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import CardGameContainer from "./CardGameContainer";

import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const {
    error,
    data,
    isLoading: loading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return <Text>{error.message}</Text>;
  const fetchNumber =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <InfiniteScroll
      dataLength={fetchNumber}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
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
    </InfiniteScroll>
  );
};

export default GameGrid;
