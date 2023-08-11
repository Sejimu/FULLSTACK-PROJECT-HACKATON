import React, { useEffect } from "react";
import { Box, Typography, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import CoursesItem from "../components/CoursesItem";
import { useCourseContext } from "../contexts/CourseContext";
import CoursesReviews from "../components/CoursesReviews";

const theme = createTheme({
  typography: {
    fontFamily: '"Play", sans-serif',
  },
});

const CoursesPage = () => {
  const { getCourses, courses } = useCourseContext();
  useEffect(() => {
    getCourses();
    document.body.classList.add("homePage");
    return () => {
      document.body.classList.remove("homePage");
    };
  }, []);

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
        <Typography variant="h3" sx={{ color: "white" }}>
          Учитесь и развивайтесь вместе с VanilaCode!
        </Typography>
      </Box>
      <Box
        className="boxCourses"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          margin: "0 auto",
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
