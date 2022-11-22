import React from "react";
import { Grid } from "@mui/material";
import { IfVideoPreview } from "./IfVideoPreview";
import { imageBackground } from "./ShapesStyles";

const checkImage = (item) => {
  if (item.type.includes("image")) {
    return true;
  }
  return false;
};

const SecondShape = ({ images, openModal, sharp, cover }) => {
  const conditionalRender = [3, 4].includes(images.length);
  return (
    <Grid container sx={{ height: 1 }}>
      <Grid
        item
        xs={6}
        container
        direction="column"
        onClick={() => openModal(conditionalRender ? 1 : 0)}
        sx={{
          ...imageBackground,
          border: !sharp && "2px solid white;",
          borderRadius: !sharp && "6px;",
          width: 0.5,
          pt:
            checkImage(conditionalRender ? images[1] : images[0]) &&
            (cover ? "100%" : "50%"),
          backgroundImage: `url(${
            conditionalRender ? images[1].media : images[0].media
          })`,
          backgroundColor: "black",
          backgroundSize: "cover",
        }}
      >
        <Grid item xs={12} sx={{ height: 1, backgroundColor: "black" }}>
          <IfVideoPreview item={conditionalRender ? images[1] : images[0]} />
        </Grid>
      </Grid>
      <Grid
        item
        xs={6}
        container
        direction="column"
        onClick={() => openModal(conditionalRender ? 2 : 1)}
        sx={{
          ...imageBackground,
          border: !sharp && "2px solid white;",
          borderRadius: !sharp && "6px;",
          width: 0.5,
          pt:
            checkImage(conditionalRender ? images[2] : images[1]) &&
            (cover ? "100%" : "50%"),
          background: `url(${
            conditionalRender ? images[2].media : images[1].media
          })`,
          backgroundColor: "black",
        }}
      >
        <Grid item xs={12} sx={{ height: 1, backgroundColor: "black" }}>
          <IfVideoPreview item={conditionalRender ? images[2] : images[1]} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SecondShape;
