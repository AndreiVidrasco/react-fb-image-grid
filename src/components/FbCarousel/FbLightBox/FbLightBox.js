import { Box, Button, Modal, Typography } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import { BiZoomIn, BiZoomOut } from "react-icons/bi";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import React, { Fragment, useState } from "react";
import {
  HeaderStyle,
  ImageContainer,
  LeftArrowStyle,
  RightArrowStyle,
  VideoStyle,
} from "./LightBoxStyles";

const FbLightBox = ({ open, onClose, images, index }) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  const [zoom, setZoom] = useState(0);

  const onMovePrevRequest = () => {
    setCurrentIndex((prev) => (prev + images.length - 1) % images.length);
  };

  const onMoveNextRequest = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const zoomIn = () => setZoom((prev) => ({ ...prev, width: prev.width + 15 }));

  const zoomOut = () =>
    setZoom((prev) => ({ ...prev, width: prev.width - 15 }));

  const onImageLoad = (e) => {
    const initialWidth =
      e.target.width * (100 / document.documentElement.clientWidth);
    setZoom({
      width: initialWidth,
      initial: initialWidth,
    });
  };

  const onArrowPress = (e) => {
    if (e.key === "ArrowRight") {
      onMoveNextRequest();
    }
    if (e.key === "ArrowLeft") {
      onMovePrevRequest();
    }
  };

  return (
    <Fragment>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        onKeyDown={onArrowPress}
      >
        <Box>
          <Box sx={HeaderStyle}>
            {images[currentIndex].type.includes("image") && (
              <Fragment>
                <Button
                  disabled={zoom.width > 80}
                  onClick={zoomIn}
                  sx={{ color: "white" }}
                >
                  <BiZoomIn fontSize={20} />
                </Button>

                <Button
                  disabled={zoom.width < 20}
                  onClick={zoomOut}
                  sx={{ color: "white" }}
                >
                  <BiZoomOut fontSize={20} />
                </Button>
              </Fragment>
            )}

            <Button onClick={onClose} sx={{ color: "white" }}>
              <AiOutlineClose fontSize={20} />
            </Button>
          </Box>

          <Box sx={ImageContainer}>
            {images[currentIndex].type.includes("image") ? (
              <img
                src={images[currentIndex].media}
                alt="carouselImage"
                onLoad={onImageLoad}
                style={{
                  width: zoom ? `${zoom.width}vw` : "100%",
                  objectFit: "contain",
                  maxHeight: zoom.initial === zoom.width && "90vh",
                }}
              />
            ) : (
              <video
                src={images[currentIndex].media}
                controls
                style={VideoStyle}
              />
            )}
          </Box>

          <Typography
            sx={{ ...LeftArrowStyle, display: images.length === 1 && "none" }}
            variant="h3"
            color="primary.white"
            onClick={onMovePrevRequest}
          >
            <BsChevronLeft />
          </Typography>

          <Typography
            sx={{ ...RightArrowStyle, display: images.length === 1 && "none" }}
            variant="h3"
            color="primary.white"
            onClick={onMoveNextRequest}
          >
            <BsChevronRight />
          </Typography>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default FbLightBox;
