import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom/dist";
import { useLessonContext } from "../contexts/LessonContext";

// TODO remove, this demo shouldn't need to reset the theme.

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

export default function AddLesson() {
  const { getLessons, createLesson } = useLessonContext();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getLessons();
    document.body.classList.add("addLessonPage");
    return () => {
      document.body.classList.remove("addLessonPage");
    };
  }, []);

  const [formValue, setFormValue] = useState({
    course: +id,
    title: "",
    body: "",
    youtube_link: "",
  });

  function handleChange(e) {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formValue.title.trim() ||
      !formValue.body.trim() ||
      !formValue.youtube_link
    ) {
      return;
    }

    createLesson(formValue);
    navigate(-1);
  };

  return (
    <ThemeProvider theme={theme}>
      <video
        className="addLess-Course"
        src="https://video-public.canva.com/VAFGWxITitg/v/a0407fd778.mp4"
        autoPlay
        loop
        muted
      />
      <Container component="main" sx={{ marginTop: 3, color: "white" }}>
        <CssBaseline />
        <Typography component="h1" variant="h4" sx={{ marginBottom: 3 }}>
          Добавьте новый урок к курсу
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            marginTop: 5,
            color: "white",
            margin: "0 auto",
            maxWidth: "70%",
          }}
        >
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              sx={{
                color: "white",
                background: "transparent",
                border: "1px solid white",
                borderRadius: "5px",
                "& label": {
                  color: "white",
                },
              }}
              inputProps={{
                style: {
                  color: "white",
                },
              }}
              margin="normal"
              required
              fullWidth
              label="Название урока"
              name="title"
              autoFocus
              value={formValue.title}
              onChange={handleChange}
            />
            <TextField
              sx={{
                color: "white",
                background: "transparent",
                border: "1px solid white",
                borderRadius: "5px",
                "& label": {
                  color: "white",
                },
              }}
              inputProps={{
                style: {
                  color: "white",
                },
              }}
              margin="normal"
              required
              fullWidth
              name="body"
              label="Содержание урока"
              value={formValue.body}
              onChange={handleChange}
            />

            <TextField
              sx={{
                color: "white",
                background: "transparent",
                border: "1px solid white",
                borderRadius: "5px",
                "& label": {
                  color: "white",
                },
              }}
              inputProps={{
                style: {
                  color: "white",
                },
              }}
              margin="normal"
              required
              fullWidth
              name="youtube_link"
              label="Ссылка на видео-урок"
              value={formValue.youtube_link}
              onChange={handleChange}
            />
          </Box>

          <Button
            type="submit"
            variant="outlined"
            sx={{ mt: 3, mb: 2, py: 1, px: 4 }}
          >
            Добавить
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
