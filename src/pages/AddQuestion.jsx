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

export default function AddQuestion() {
  const { createQuestions } = useLessonContext();
  const { id } = useParams();
  const [test, setTest] = useState(true);

  useEffect(() => {
    document.body.classList.add("addLessonPage");
    return () => {
      document.body.classList.remove("addLessonPage");
    };
  }, []);

  const [formValue, setFormValue] = useState({
    body: "",
    right_answer: "",
    wrong_answers: "",
  });

  function handleChange(e) {
    if (formValue.wrong_answers === "") {
      setFormValue({
        body: e.target.name === "body" ? e.target.value : formValue.body,
        right_answer:
          e.target.name === "right_answer"
            ? e.target.value
            : formValue.right_answer,
      });
    } else {
      setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
      });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formValue.body.trim() || !formValue.right_answer.trim()) {
      return;
    }
    console.log(formValue);
    createQuestions(id, formValue);

    // setFormValue({
    //   title: "",
    //   body: "",
    //   youtube_link: "",
    // });
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
          Добавьте задание к уроку
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
              name="body"
              label="Вопрос или задача"
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
            Добавить задание
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
