import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import ResetPasswordModal from "../components/ResetPasswordModal";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function AuthPage() {
  const [isLogin, setIsLogin] = React.useState(true);
  const { register, user, login, handleClickOpen, handleClose } =
    useAuthContext();
  const [showPassword, setShowPassword] = React.useState(false);

  function changeVisibility() {
    setShowPassword(!showPassword);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (isLogin) {
      login(data);
    } else {
      register(data);
    }
  };

  const theme = createTheme({
    typography: {
      fontFamily: '"Play", sans-serif',
    },
  });

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <ResetPasswordModal />
      <Grid
        container
        component="main"
        sx={{ height: "100vh" }}
        style={{ backgroundColor: "#342557" }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {isLogin ? "Sign in" : "Sign up"}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                inputProps={{
                  style: {
                    color: "black",
                  },
                }}
                sx={{
                  color: "white",
                  border: "1px solid purple",
                  borderRadius: "5px",
                  "& label": {
                    color: "black",
                  },
                }}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                inputProps={{
                  style: {
                    color: "black",
                  },
                }}
                sx={{
                  color: "white",
                  border: "1px solid purple",
                  borderRadius: "5px",
                  "& label": {
                    color: "black",
                  },
                }}
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
              {!isLogin && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password_confirmation"
                  label="Confirm Password"
                  type="password"
                  inputProps={{
                    style: {
                      color: "black",
                    },
                  }}
                  sx={{
                    color: "white",
                    border: "1px solid purple",
                    borderRadius: "5px",
                    "& label": {
                      color: "black",
                    },
                  }}
                />
              )}
              <FormControlLabel
                control={
                  <Checkbox value="remember" sx={{ color: "#29196E" }} />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#342557",
                  "&:hover": { backgroundColor: "#1d3263" },
                }}
              >
                {isLogin ? "Sign in" : "Sign up"}
              </Button>
              <Grid container>
                <Grid item xs onClick={handleClickOpen}>
                  {isLogin ? (
                    <Link variant="body2" sx={{ color: "#F57CBA" }}>
                      Forgot password?
                    </Link>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item>
                  <Link
                    sx={{ color: "#F57CBA" }}
                    href="#"
                    variant="body2"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin
                      ? "Don't have an account? Sign Up"
                      : "Already have an account? Sign In "}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
