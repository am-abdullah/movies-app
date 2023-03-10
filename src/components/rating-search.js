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
import { RatingComponent } from "./rating";

export function RatingSearch({ currentRating, setCurrentRating }) {
  const [ratings] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const isMobile = useMediaQuery("(max-width:750px)");

  const MenuProps = {
    PaperProps: {
      style: {
        width: 250,
        marginLeft: isMobile ? 0 : 50,
      },
    },
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setCurrentRating(value);
  };

  return (
    <FormControl sx={{ width: isMobile ? "97%" : 150 }}>
      <InputLabel id="mutiple-select-label">Rating</InputLabel>
      <Select
        labelId="mutiple-select-label"
        multiple
        value={currentRating}
        onChange={handleChange}
        input={<OutlinedInput label="Rating" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {ratings.map((rating, index) => (
          <MenuItem sx={{ height: "30px" }} key={rating} value={rating}>
            <Checkbox
              size="small"
              checked={currentRating.indexOf(rating) > -1}
            />
            {rating === 0 ? (
              <ListItemText primary="Any Rating" />
            ) : (
              <RatingComponent
                key={"-rating" + index}
                readOnly={true}
                value={rating}
              />
            )}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
