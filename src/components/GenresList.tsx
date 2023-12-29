import React from "react";
import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { genres, error, loading } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {/*         {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
        ))} */}
      {/*         {error && <p>{error}</p>}
        {loading && <p>Loading...</p>} */}
      {/*         {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
        ))} */}
      {/*         {error && <p>{error}</p>}
        {loading && <p>Loading...</p>} */}
      {/*         {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
        ))} */}
      {/*         {error && <p>{error}</p>}
        {loading && <p>Loading...</p>} */}
    </ul>
  );
};

export default GenresList;
