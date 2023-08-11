import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItemText,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { useCourseContext } from "../contexts/CourseContext";
import { useParams } from "react-router-dom";
import CoursesReviews from "../components/CoursesReviews";

const theme = createTheme({
  typography: {
    fontFamily: '"Play", sans-serif',
  },
  palette: {
    primary: {
      main: "#f5f5f5",
    },
    secondary: {
      main: "#f5f5f5",
    },
  },
});

const animateOnScroll = () => {
  const elements = document.querySelectorAll(".animated-element");

  elements.forEach((element) => {
    const boundingRect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (boundingRect.top <= windowHeight * 0.7) {
      element.classList.add("slide-left");
    }
  });
};
window.addEventListener("scroll", animateOnScroll);

const DetailsPage = () => {
  const {
    oneCourse,
    getOneCourse,
    reviews,
    getReviews,
    addReviews,
    deleteReviews,
  } = useCourseContext();
  const { id } = useParams();

  useEffect(() => {
    getOneCourse(id);
    getReviews(id);
  }, []);

  useEffect(() => {
    document.body.classList.add("homePage");
    return () => {
      document.body.classList.remove("homePage");
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {oneCourse ? (
        <Container component="main" sx={{ color: "white" }}>
          <Box
            sx={{
              width: "90%",
              margin: "5% auto",
              display: "flex",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <Box sx={{ animation: "slideInFromLeft 1s ease-in-out" }}>
              <Typography component="h1" variant="h3">
                {/* Профессия Frontend-разработчик */}
                {oneCourse.title}
              </Typography>
              <Typography component="h1" variant="h6" sx={{ height: "auto" }}>
                <IconButton>
                  {<HourglassBottomIcon sx={{ color: "white" }} />}
                </IconButton>
                {/* Длительность - 3 месяца */}
                {oneCourse.duration}
              </Typography>
              <Button variant="outlined" sx={{ color: "#D73CBE" }}>
                Начать обучение
              </Button>
            </Box>
            <Box sx={{ position: "relative", width: "60%" }}>
              <img
                width={"100%"}
                height="300px"
                src="https://video-public.canva.com/VAFKHLeOx28/v/45cb848511.gif"
                style={{ position: "absolute", zIndex: "-1" }}
              />
              <img src={oneCourse.preview} width={"70%"} height="200px" />
            </Box>
          </Box>
          <Box
            sx={{
              width: "90%",
              margin: "5% auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              // gap: "20%",
            }}
          >
            <img
              className="icon-details"
              src="https://video-public.canva.com/VAFKHPCHN00/v/397c1bb2f3.gif"
              width={"60%"}
              height="300px"
            />
            <Typography
              component="h1"
              variant="h6"
              sx={{
                height: "auto",
                width: "70%",
                color: "#D73CBE",
                textAlign: "right",
                margin: "5% auto",
                animation: "slideInFromRight 1s ease-in-out",
              }}
            >
              {/* Frontend-разработчик разрабатывает frontend-часть веб-приложения
              или сайта: это та часть сайта, которая работает у пользователя в
              браузере и общается посредством http-запросов с серверной частью
              (back-end). */}
              {oneCourse.description}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "5%" }}>
            <iframe
              width="90%"
              height="450"
              src={oneCourse.youtube_link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Box>
          <Box
            sx={{
              width: "90%",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              gap: "10%",
              // justifyContent: "space-evenly",
            }}
          >
            <Box
              sx={{
                className: "animated-element",
                width: "60%",
              }}
            >
              <Typography
                variant="h4"
                sx={{ textAlign: "left", marginBottom: "5%" }}
              >
                Программа курса
              </Typography>
              <List sx={{ textAlign: "left" }} component="nav">
                <hr />
                {oneCourse.lessons.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItemText
                      primary={`Урок ${item.id} - ${item.title}`}
                      primaryTypographyProps={{
                        fontSize: 22,
                        fontWeight: "medium",
                        letterSpacing: 0,
                      }}
                    />
                    <hr />
                  </React.Fragment>
                ))}
              </List>
            </Box>
            <img
              src="https://video-public.canva.com/VAFKHLlSM90/v/8be168ef08.gif"
              width={"30%"}
              height="300px"
              style={{ marginTop: "5%" }}
            />
          </Box>
        </Container>
      ) : (
        <h2>Loading...</h2>
      )}

      <CoursesReviews id={id} />
    </ThemeProvider>
  );
};

export default DetailsPage;
