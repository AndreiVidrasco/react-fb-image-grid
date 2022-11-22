import { Grid } from "@mui/material";
import React, { Fragment, useState } from "react";
import ReactPlayer from "react-player";
import { oneImageBackground } from "./ShapesStyles";

const FirstShape = ({ images, openModal, cover, coverThreePhotos, sharp }) => {
  const [paddingTop, setPaddingTop] = useState(0);

  const onImageLoad = async ({ target, current }) => {
    const calculatedPadding = (target.height / target.width) * 100;
    calculatedPadding < 100
      ? setPaddingTop(calculatedPadding)
      : setPaddingTop(100);
  };
  return (
    <Fragment>
      <Grid
        container
        sx={{
          maxHeight: "600px",
          overflow: "hidden",
        }}
      >
        {images[0].type.includes("image") ? (
          <Grid
            item
            xs={12}
            sx={{
              ...oneImageBackground,
              border: !sharp && "2px solid white;",
              borderRadius: !sharp && "6px;",
              width: 1,
              paddingTop: `${
                (cover && 100) || (coverThreePhotos && 40) || paddingTop
              }%`,
              backgroundImage: `url(${images[0].media})`,
              backgroundSize: cover || coverThreePhotos ? "cover" : "contain",
            }}
            onClick={() => openModal(0)}
          >
            <img
              src={images[0].media}
              style={{ display: "none" }}
              alt=""
              onLoad={onImageLoad}
            />
          </Grid>
        ) : (
          <Grid
            item
            xs={12}
            sx={{
              width: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "black",
            }}
            onClick={() => openModal(0)}
          >
            <ReactPlayer
              url={images[0].media}
              controls
              width={"100%"}
              style={{
                maxHeight: "600px",
              }}
            />
          </Grid>
        )}
      </Grid>
    </Fragment>
  );
};

export default FirstShape;
