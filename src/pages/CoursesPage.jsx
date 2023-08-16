import React, { useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import CoursesItem from "../components/CoursesItem";
import { useCourseContext } from "../contexts/CourseContext";
import CoursesReviews from "../components/CoursesReviews";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: '"Play", sans-serif',
  },
});

const CoursesPage = () => {
  const navigate = useNavigate();
  const { isAdmin } = useAuthContext();
  const { getCourses, courses } = useCourseContext();
  useEffect(() => {
    getCourses();
    document.body.classList.add("homePage");
    return () => {
      document.body.classList.remove("homePage");
    };
  }, []);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          border: "2px solid white",
          maxWidth: "60%",
          margin: "0 auto",
          maxHeight: "300%",
        }}
      >
        <img
          className="course-img"
          src="https://media-public.canva.com/tUuBs/MAEFsptUuBs/1/tl.png"
          alt="halfEarth"
          style={{
            zIndex: "-1",
            display: "flex",
            position: "absolute",
            left: "0",
            top: "20%",
          }}
        />
        <Typography
          className="course-title"
          variant="h3"
          sx={{ color: "white" }}
        >
          Учитесь и развивайтесь вместе с VanillaCode!
        </Typography>
      </Box>
      {isAdmin() ? (
        <IconButton
          onClick={handleClick}
          sx={{ marginLeft: "74%", color: "white" }}
        >
          <AddCircleOutlineIcon />
        </IconButton>
      ) : (
        ""
      )}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => navigate(`/addcourse`)}
          component={Button}
          sx={{ textTransform: "capitalize", width: "100%" }}
        >
          Добавить курс
        </MenuItem>
      </Menu>
      <Box
        className="boxCourses"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          margin: "0 auto",
          marginBottom: "5%",
          maxWidth: "70%",
          paddingTop: "5%",
        }}
      >
        {courses.map((item) => (
          <CoursesItem item={item} key={item.id} />
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default CoursesPage;
