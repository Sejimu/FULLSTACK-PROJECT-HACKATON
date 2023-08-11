import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { useAuthContext } from "../contexts/AuthContext";

const pages = [{ title: "Курсы", link: "/courses" }];
const settings = [{ title: "Профиль", link: "/profile", key: 1 }, ,];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { logout, user } = useAuthContext();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = createTheme({
    typography: {
      fontFamily: '"Play", sans-serif',
    },
  });

  // console.log(user);

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        className="navbar"
        position="static"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0)",
          color: "white",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: "80%", margin: "0 auto" }}>
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  // letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                VanillaCode
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      component={Link}
                      to={page.link}
                      onClick={handleCloseNavMenu}
                      key={page.title}
                      sx={{ color: "white" }}
                    >
                      <Typography textAlign="center">{page.title}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontWeight: 700,
                  // letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                VanillaCode
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    component={Link}
                    to={page.link}
                    onClick={handleCloseNavMenu}
                    key={page.title}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.title}
                  </Button>
                ))}
              </Box>
              {user ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt={user.username}
                        src={null}
                        sx={{ color: "black", backgroundColor: "black" }}
                      >
                        <Typography variant="h5" color="white">
                          {user.username ? (
                            <>
                              {user.username.split(" ")[0][0]}
                              {user.username.includes(" ") &&
                                user.username.split(" ")[1][0]}
                            </>
                          ) : (
                            "N/A"
                          )}
                        </Typography>
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <Box key={setting.key}>
                        <MenuItem
                          component={Link}
                          to={setting.link}
                          onClick={handleCloseUserMenu}
                        >
                          <Typography style={{ textAlign: "center" }}>
                            {setting.title}
                          </Typography>
                        </MenuItem>
                      </Box>
                    ))}
                    <MenuItem key={null}>
                      <Typography
                        sx={{
                          textDecoration: "none",
                          color: "inherit",
                          textTransform: "capitalize",
                        }}
                        component={Button}
                        onClick={logout}
                      >
                        Выйти
                      </Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              ) : (
                <MenuItem key={null}>
                  <Typography
                    component={Link}
                    sx={{ textDecoration: "none", color: "inherit" }}
                    to="/auth"
                  >
                    Вoйти
                  </Typography>
                </MenuItem>
              )}
            </Toolbar>
          </Box>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;
