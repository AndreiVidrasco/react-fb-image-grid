import React from "react";
import { Box } from "@mui/material";
import { Fragment } from "react";
import { HiPlay } from "react-icons/hi";

export const IfVideoPreview = ({ item }) => {
  return (
    <Fragment>
      {item.type.includes("video") && (
        <Box sx={{ height: 1, position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              right: "50%",
              transform: "translate(50%, -50%)",
              color: "rgba(0, 0, 0, 0.6)",
              // "& :hover": { color: "rgba(0, 0, 0, 0.8)" },
            }}
          >
            <HiPlay size={60} />
          </Box>
          <video style={{ width: "100%", height: "100%" }} src={item.media} />
        </Box>
      )}
    </Fragment>
  );
};
