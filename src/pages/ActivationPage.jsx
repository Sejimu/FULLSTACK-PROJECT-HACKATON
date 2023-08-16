import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { Box, Typography } from "@mui/material";

function ActivationPage() {
  const [searchParams] = useSearchParams();
  const { activateUser } = useAuthContext();

  useEffect(() => {
    activateUser(searchParams.get("c"));
  }, []);

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ margin: "150px auto", textAlign: "center" }}
      >
        Активация Аккаунта...
      </Typography>
    </Box>
  );
}

export default ActivationPage;
