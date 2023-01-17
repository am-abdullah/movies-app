import { Rating } from "@mui/material";
import React from "react";

export function RatingComponent({ value, readOnly }) {
  return (
    <Rating
      name="customized-10"
      readOnly={readOnly}
      sx={{ color: "rgba(23, 23, 23, 1)" }}
      precision={0.5}
      value={value ? value : 0}
      max={10}
      color="black"
      size="small"
    />
  );
}
