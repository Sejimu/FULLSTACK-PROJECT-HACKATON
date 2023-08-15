import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useCourseContext } from "../contexts/CourseContext";

// TODO remove, this demo shouldn't need to reset the theme.

const theme = createTheme({
  typography: {
    fontFamily: '"Play", sans-serif',
  },
  palette: {
    primary: {
      main: grey[100],
    },
    secondary: {
      main: "#f5f5f5",
    },
  },
});

export default function AddCourse() {
  const { createCourse, getCourses, getSubject, subjects } = useCourseContext();
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    duration: "",
    youtube_link: "",
    price: "",
    subject: "",
    preview: "",
  });

  useEffect(() => {
    getSubject();
  }, []);

  useEffect(() => {
    document.body.classList.add("addCoursePage");
    return () => {
      document.body.classList.remove("addCoursePage");
    };
  }, []);

  function handleChange(e) {
    if (e.target.name === "image") {
      setFormValue({
        ...formValue,
        image: e.target.files[0],
      });
    } else {
      setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
      });
    }
    // console.log(formValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("das");
    if (
      !formValue.title.trim() ||
      !formValue.description.trim() ||
      !formValue.duration ||
      !formValue.youtube_link ||
      !formValue.price
    ) {
      return;
    }

    const data = new FormData(event.currentTarget);

    // console.log(formValue);
    console.log(...data);
    createCourse(data);

    setFormValue({
      title: "",
      description: "",
      duration: "",
      youtube_link: "",
      price: "",
      subject: "",
      preview: "",
    });
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
      <Container component="main">
        <CssBaseline />
        <Typography
          component="h1"
          variant="h5"
          sx={{ marginTop: 3, color: "white" }}>
          Добавьте новый курс!
        </Typography>
        <Box
          className="add-course-box"
          component="form"
          onSubmit={handleSubmit}
          sx={{
            marginTop: 5,
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}>
          <Box className="add-course-second-box" sx={{ mt: 1, width: "40%" }}>
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
              inputProps={{ style: { color: "white" } }}
              margin="normal"
              required
              fullWidth
              name="title"
              label="Название курса"
              // variant="standard"
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
              inputProps={{ style: { color: "white" } }}
              margin="normal"
              required
              fullWidth
              name="description"
              label="Добавьте описание"
              value={formValue.description}
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
              inputProps={{ style: { color: "white" } }}
              margin="normal"
              required
              fullWidth
              name="duration"
              label="Добавьте длительность"
              type="number"
              value={formValue.duration}
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
              inputProps={{ style: { color: "white" } }}
              margin="normal"
              required
              fullWidth
              name="youtube_link"
              label="Добавьте ссылку на видео-обзор"
              value={formValue.youtube_link}
              onChange={handleChange}
            />
          </Box>
          <Box className="add-course-third-box" sx={{ mt: 1, width: "40%" }}>
            <TextField
              sx={{
                color: "white", // Цвет текста
                background: "transparent", // Фон инпута
                border: "1px solid white", // Границы инпута
                borderRadius: "5px",
                "& label": {
                  color: "white", // Цвет placeholder
                },
              }}
              inputProps={{ style: { color: "white" } }}
              margin="normal"
              required
              fullWidth
              name="price"
              label="Добавьте цену"
              type="number"
              value={formValue.price}
              onChange={handleChange}
            />

            <FormControl fullWidth sx={{ marginTop: 2 }}>
              <InputLabel sx={{ color: "white" }}>
                Выберите направление
              </InputLabel>
              <Select
                sx={{
                  color: "white", // Цвет текста
                  background: "transparent", // Фон инпута
                  border: "1px solid white", // Границы инпута
                  "& label": {
                    color: "white", // Цвет placeholder
                  },
                }}
                inputProps={{ style: { color: "white" } }}
                value={formValue.subject}
                onChange={handleChange}
                label="Выберите напраление"
                name="subject">
                {subjects.map((subject) => (
                  <MenuItem key={subject.slug} value={subject.slug}>
                    {subject.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              sx={{
                marginTop: 3,
                color: "white", // Цвет текста
                background: "transparent",
                borderRadius: "5px",
                border: "1px solid white", // Границы инпута
                "& label": {
                  color: "white", // Цвет placeholder
                },
              }}
              inputProps={{ style: { color: "white" } }}
              margin="normal"
              required
              fullWidth
              type="file"
              name="preview"
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 2, mb: 1, height: "53px" }}>
              Добавьте курс
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
