import { Grid } from "@mui/material";
import React, { useState } from "react";
import { SearchAutoComplete } from "./components/autoComplete";
import { GenreSearch } from "./components/genre-search";
import { RatingSearch } from "./components/rating-search";
const MoviesPage = () => {
  const [currentRating, setCurrentRating] = useState([]);
  const [currentGenre, setCurrentGenre] = useState([]);
  return (
    <Grid container spacing={2} sx={{ width: "fit-content", margin: "auto" }}>
      <Grid item xs={12} sm={12} lg={8} md={8}>
        <SearchAutoComplete
          currentRating={currentRating}
          currentGenre={currentGenre}
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={2} md={2}>
        <RatingSearch
          currentRating={currentRating}
          setCurrentRating={setCurrentRating}
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={2} md={2}>
        <GenreSearch
          currentGenre={currentGenre}
          setCurrentGenre={setCurrentGenre}
        />
      </Grid>
    </Grid>
  );
};

export default MoviesPage;
