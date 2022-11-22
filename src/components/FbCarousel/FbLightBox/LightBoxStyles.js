export const ImageContainer = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const HeaderStyle = {
  backgroundColor: "black",
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  pr: 2,
  zIndex: 99999,
};

export const RightArrowStyle = {
  cursor: "pointer",
  position: "fixed",
  right: 0,
  top: "50%",
  transform: "translate(0%, -50%)",
};

export const LeftArrowStyle = {
  cursor: "pointer",
  position: "fixed",
  top: "50%",
  transform: "translate(0%, -50%)",
};

export const VideoStyle = {
  height: "100%",
  width: "100%",
  maxHeight: "90vh",
  transition: "300ms",
  objectFit: "contain",
  padding: 0,
  margin: 0,
};
