import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

function ResetPasswordConfirmPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showPassword, setShowPassword] = React.useState(false);
  const { confirmResetPassword } = useAuthContext();

  function changeVisibility() {
    setShowPassword(!showPassword);
  }

  useEffect(() => {
    searchParams.get("c");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const setPass = Object.fromEntries([...data]);
    confirmResetPassword(setPass, searchParams.get("c"));
  }

  return (
    <Box
      component="form"
      sx={{
        width: "200px",
        m: "0 auto",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        margin="normal"
        required
        name="new_password"
        label="New Password"
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={changeVisibility}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        margin="normal"
        required
        name="password_confirmation"
        label="Confirm Password"
        type="password"
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Change Password
      </Button>
    </Box>
  );
}

export default ResetPasswordConfirmPage;
