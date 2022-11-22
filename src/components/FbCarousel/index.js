import { Box } from "@mui/material";
import React, { Fragment, useCallback, useState } from "react";
import FirstShape from "./CarouselShapes/FirstShape";
import SecondShape from "./CarouselShapes/SecondShape";
import ThirdShape from "./CarouselShapes/ThirdShape";
import FbLightBox from "./FbLightBox/FbLightBox";

const FbCarousel = ({ images = [], cover, disablePadding, sharp }) => {
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState();

  const onClose = useCallback(() => setModal(false), []);

  const openModal = useCallback((index) => {
    setModal(true);
    setIndex(index);
  }, []);

  return (
    <Fragment>
      <Box
        sx={{
          textAlign: "center",
          width: "100%",
          padding: !disablePadding && "10px",
        }}
      >
        {[1, 3, 4].includes(images.length) && (
          <FirstShape
            images={images}
            openModal={openModal}
            cover={cover && images.length === 1}
            coverThreePhotos={cover && images.length === 3}
            sharp={sharp}
          />
        )}
        {images.length >= 2 && images.length !== 4 && (
          <SecondShape
            images={images}
            openModal={openModal}
            sharp={sharp}
            cover={cover && images.length === 2}
          />
        )}
        {images.length >= 4 && (
          <ThirdShape images={images} openModal={openModal} sharp={sharp} />
        )}

        {modal && (
          <FbLightBox
            open={modal}
            onClose={onClose}
            index={index}
            images={images}
          />
        )}
      </Box>
    </Fragment>
  );
};

export default FbCarousel;
