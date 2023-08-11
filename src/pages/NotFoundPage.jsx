import { Box, Typography } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import React from "react";

function NotFoundPage() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "80vh",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SentimentDissatisfiedIcon sx={{ fontSize: "120px" }} />
      <Typography variant="h2">404</Typography>
      <Typography variant="h5">Page Not Found</Typography>
    </Box>
  );
}

export default NotFoundPage;
