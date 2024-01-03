import React from "react";
import useGenres from "../hooks/useGenres";

import useData from "../hooks/useData";
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
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenresList = ({ onSelectGenre }: Props) => {
  const { data, loading, error } = useData<Genre>("/genres");
  if (loading) return <Spinner />;
  return (
    <List>
      {data?.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={imageCroppedUrl(genre.image_background)}
              alt={genre.name}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
