import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { IfVideoPreview } from "./IfVideoPreview";
import { Cover, CoverText, imageBackground } from "./ShapesStyles";

let countFrom = 5;

const checkImage = (item) => {
  if (item.type.includes("image")) {
    return true;
  }
  return false;
};

const ThirdShape = ({ images, openModal, sharp }) => {
  const conditionalRender =
    images.length === 4 || (images.length > +countFrom && +countFrom === 4);

  function CountOverlay({ more }) {
    const extra = images.length - (countFrom && countFrom > 5 ? 5 : countFrom);

    return [
      more && (
        <Box key="count" sx={{ ...Cover, borderRadius: !sharp && "6px" }}></Box>
      ),
      more && (
        <Box key="count-sub" sx={CoverText}>
          <Typography variant="h5">+{extra}</Typography>
        </Box>
      ),
    ];
  }

  return (
    <Grid container>
      <Grid
        item
        xs={4}
        md={4}
        container
        direction="column"
        onClick={() => openModal(conditionalRender ? 1 : 2)}
        sx={{
          ...imageBackground,
          border: !sharp && "2px solid white;",
          borderRadius: !sharp && "6px;",
          width: "33.3333%",
          pt:
            checkImage(conditionalRender ? images[1] : images[2]) && "33.3333%",
          background: `url(${
            conditionalRender ? images[1].media : images[2].media
          })`,
          backgroundColor: "black",
        }}
      >
        <Grid item xs={12} sx={{ height: 1, backgroundColor: "black" }}>
          <IfVideoPreview item={conditionalRender ? images[1] : images[2]} />
        </Grid>
      </Grid>
      <Grid
        item
        xs={4}
        md={4}
        container
        direction="column"
        onClick={() => openModal(conditionalRender ? 2 : 3)}
        sx={{
          ...imageBackground,
          border: !sharp && "2px solid white;",
          borderRadius: !sharp && "6px;",
          width: "33.3333%",
          pt:
            checkImage(conditionalRender ? images[2] : images[3]) && "33.3333%",
          background: `url(${
            conditionalRender ? images[2].media : images[3].media
          })`,
          backgroundColor: "black",
        }}
      >
        <Grid item xs={12} sx={{ height: 1, backgroundColor: "black" }}>
          <IfVideoPreview item={conditionalRender ? images[2] : images[3]} />
        </Grid>
      </Grid>
      <Grid
        item
        xs={4}
        md={4}
        container
        direction="column"
        onClick={() => openModal(conditionalRender ? 3 : 4)}
        sx={{
          ...imageBackground,
          border: !sharp && "2px solid white;",
          borderRadius: !sharp && "6px;",
          width: "33.3333%",
          pt:
            checkImage(conditionalRender ? images[3] : images[4]) && "33.3333%",
          background: `url(${
            conditionalRender ? images[3].media : images[4].media
          })`,
          backgroundColor: "black",
          position: "relative",
        }}
      >
        <Grid item xs={12} sx={{ height: 1, backgroundColor: "black" }}>
          <IfVideoPreview item={conditionalRender ? images[3] : images[4]} />
        </Grid>
        {(!countFrom ||
          countFrom > 5 ||
          (images.length > countFrom && [4, 5].includes(+countFrom))) && (
          <CountOverlay more />
        )}
      </Grid>
    </Grid>
  );
};

export default ThirdShape;
