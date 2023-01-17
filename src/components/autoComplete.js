import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { MovieDetails } from "./movieDetails";

export function SearchAutoComplete({ currentRating, currentGenre }) {
  const [initialData] = React.useState([
    { title: "The Matrix", rating: 7.5, genre: "Action" },
    { title: "Focus", rating: 6.9, genre: "Comedy" },
    { title: "The Lazarus Effect", rating: 6.4, genre: "Thriller" },
    { title: "Everly", rating: 5.0, genre: "Action" },
    { title: "Maps to the Stars", rating: 7.5, genre: "Drama" },
  ]);
  const [films, setFilms] = React.useState(initialData);

  const handleFilterFilms = () => {
    let tempFilms = films;
    if (currentRating && Object.keys(currentRating).length > 0) {
      tempFilms = tempFilms.filter((x) =>
        currentRating.some((y) => (y === 0 ? true : y === x.rating))
      );
    }

    if (currentGenre && Object.keys(currentGenre).length > 0) {
      tempFilms = tempFilms.filter((x) =>
        currentGenre.some((y) => (y.includes("Any") ? true : y === x.genre))
      );
    }

    setFilms(tempFilms);
  };
  return (
    <Autocomplete
      noOptionsText="Not found"
      onFocus={handleFilterFilms}
      onBlur={() => setFilms(initialData)}
      id="movie-select-demo"
      sx={{ width: 600 }}
      options={films}
      autoHighlight
      getOptionLabel={(option) => option.title}
      renderOption={(props, option) => (
        <MovieDetails key={"autoComplete" + option.title} movie={option} />
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
          placeholder="Enter movie name"
        />
      )}
    />
  );
}
