import { ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { RatingComponent } from "./rating";

export function MovieDetails({ movie }) {
  return (
    <ListItem
      secondaryAction={
        <Typography sx={{ color: "#777777", fontWeight: 500 }}>
          {movie.genre}
        </Typography>
      }
    >
      <ListItemText
        primary={movie.title}
        secondary={<RatingComponent readOnly={true} value={movie.rating} />}
      />
    </ListItem>
  );
}
