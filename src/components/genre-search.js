import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";

const MenuProps = {
  PaperProps: {
    style: {
      width: 150,
    },
  },
};

export function GenreSearch({ currentGenre, setCurrentGenre }) {
  const isMobile = useMediaQuery("(max-width:750px)");
  const [genres] = useState([
    "Any Genre",
    "Action",
    "Comedy",
    "Drama",
    "Thriller",
  ]);

  return (
    <FormControl sx={{ width: isMobile ? "97%" : 150 }}>
      <InputLabel id="demo-multiple-checkbox-label">Genre</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={currentGenre}
        onChange={(e) => setCurrentGenre(e.target.value)}
        input={<OutlinedInput label="Genre" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {genres.map((genre, index) => (
          <MenuItem
            sx={{ height: "30px" }}
            key={"--genre" + index}
            value={genre}
          >
            <Checkbox size="small" checked={currentGenre.indexOf(genre) > -1} />
            <ListItemText primary={genre} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
