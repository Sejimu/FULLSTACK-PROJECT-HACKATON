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
  FormControlLabel,
  InputLabel,
  MenuItem,
  RadioGroup,
  Select,
} from "@mui/material";
import { useParams } from "react-router-dom/dist";
import Radio from "@mui/material/Radio/Radio";
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

export default function EditLesson() {
  const { getOneLesson, oneLesson, updateLesson } = useLessonContext();
  const { id } = useParams();
  const [test, setTest] = useState(true);

  useEffect(() => {
    getOneLesson(id);
    document.body.classList.add("addLessonPage");
    return () => {
      document.body.classList.remove("addLessonPage");
    };
  }, []);
  useEffect(() => {
    oneLesson && setFormValue(oneLesson);
  }, [oneLesson]);

  const [formValue, setFormValue] = useState({
    course: 0,
    title: "",
    body: "",
    youtube_link: "",
    question: "",
    right_answer: "",
    wrong_answers: "",
  });

  function handleChange(e) {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formValue.title || !formValue.body || !formValue.youtube_link) {
      return;
    }
    updateLesson(id, formValue);
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
          Добавьте изменения к уроку
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
          <Box>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                color="white"
              >
                <FormControlLabel
                  value="test"
                  control={<Radio sx={{ color: "white" }} />}
                  label="Тест"
                  onChange={() => setTest(false)}
                />
                <FormControlLabel
                  value="task"
                  control={<Radio sx={{ color: "white" }} />}
                  label="Задача"
                  onChange={() => setTest(true)}
                />
              </RadioGroup>
            </FormControl>
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
              name="question"
              label="Вопрос или задача"
              value={formValue.question}
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
              name="right_answer"
              label="Верный ответ"
              value={formValue.right_answer}
              onChange={handleChange}
            />
            {!test ? (
              <Box>
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
                  name="wrong_answers"
                  label="Неверный ответ"
                  value={formValue.wrong_answers}
                  onChange={handleChange}
                />
              </Box>
            ) : null}
          </Box>
          <Button
            type="submit"
            variant="outlined"
            sx={{ mt: 3, mb: 2, py: 1, px: 4 }}
          >
            Изменить урок
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
