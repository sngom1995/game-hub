import React from "react";
import useGenres from "../hooks/useGenres";

import { Genre } from "../hooks/useGenres";
import imageCroppedUrl from "../services/image-url";
import {
  List,
  ListItem,
  HStack,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGameQueryStore from "../store";

const GenresList = () => {
  const { data, isLoading: loading, error } = useGenres();
  const { gameQuery, setGenreId: onSelectGenrre } = useGameQueryStore();
  if (loading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={imageCroppedUrl(genre.image_background)}
                alt={genre.name}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectGenrre(genre.id)}
                fontSize="lg"
                variant="link"
                fontWeight={genre.id === gameQuery.genreId ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
