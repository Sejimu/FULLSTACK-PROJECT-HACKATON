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
import { deepPurple, grey } from "@mui/material/colors";
// import { useProductContext } from "../contexts/ProductContext";

// TODO remove, this demo shouldn't need to reset the theme.

const theme = createTheme({
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
  // const { createProduct, categories, getCategories } = useProductContext();
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    duration: "",
    youtubeUrl: "",
    price: "",
    subject: "",
    image: "",
  });

  //   useEffect(() => {
  //     getCategories();
  //   }, []);
  //   console.log("qwe");
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
      !formValue.youtubeUrl ||
      !formValue.price
    ) {
      return;
    }

    const data = new FormData(event.currentTarget);

    console.log(formValue);
    console.log(...data);
    // createProduct(data);

    setFormValue({
      title: "",
      description: "",
      duration: "",
      youtubeUrl: "",
      price: "",
      subject: "",
      image: "",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <video
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
          component="form"
          onSubmit={handleSubmit}
          sx={{
            marginTop: 5,
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}>
          <Box sx={{ mt: 1, width: "40%" }}>
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
              name="description"
              label="Добавьте описание"
              value={formValue.description}
              onChange={handleChange}
            />
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
              name="duration"
              label="Добавьте длительность"
              type="number"
              value={formValue.duration}
              onChange={handleChange}
            />
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
              name="youtubeUrl"
              label="Добавьте ссылку на видео-обзор"
              value={formValue.youtubeUrl}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ mt: 1, width: "40%" }}>
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
                {/* {categories.map((category) => (
                  <MenuItem key={category.slug} value={category.slug}>
                    {category.name}
                  </MenuItem>
                ))} */}
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
              name="image"
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