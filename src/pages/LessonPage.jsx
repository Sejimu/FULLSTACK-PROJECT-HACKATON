import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container, ThemeProvider } from "@mui/system";
import React, { useEffect, useState } from "react";
import { createTheme } from "@mui/material/styles";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useLessonContext } from "../contexts/LessonContext";
import ExtensionIcon from "@mui/icons-material/Extension";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useAuthContext } from "../contexts/AuthContext";

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
const LessonPage = () => {
  const { isAdmin } = useAuthContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const {
    getLessons,
    lessons,
    page,
    setPage,
    deleteLesson,
    deleteQuestion,
    totalLessons,
    likes,
    dislikes,
    like,
    dislike,
  } = useLessonContext();
  const { id } = useParams();
  const navigate = useNavigate();

  //? проверка ответов
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [inpVal, setInpVal] = useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    getLessons();
    setIsAnswerCorrect(null);
    document.body.classList.add("lessonPage");
    return () => {
      document.body.classList.remove("lessonPage");
    };
  }, [searchParams]);
  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams({ ...currentParams, course_id: id, lesson: page });
  }, [page]);

  function prevPage() {
    setPage(page - 1);
  }
  function nextPage() {
    setPage(page + 1);
  }

  return (
    <>
      {lessons.map((item) => (
        <ThemeProvider theme={theme}>
          <Container component="main" sx={{ color: "white", width: "90%" }}>
            <Box>
              {isAdmin() ? (
                <IconButton
                  onClick={handleClick}
                  sx={{ marginLeft: "96%", color: "white" }}
                >
                  <ExtensionIcon />
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
                  component={Button}
                  sx={{ textTransform: "capitalize", color: "red" }}
                  onClick={() => {
                    deleteLesson(item.id);
                    navigate(`/courses`);
                  }}
                >
                  Удалить урок
                </MenuItem>
                <MenuItem
                  onClick={() => deleteQuestion(item.id)}
                  component={Button}
                  sx={{
                    textTransform: "capitalize",
                    width: "100%",
                    color: "red",
                  }}
                >
                  Удалить задание
                </MenuItem>
                <MenuItem
                  onClick={() => navigate(`/courses/editlesson/${item.id}`)}
                  component={Button}
                  sx={{ textTransform: "capitalize", width: "100%" }}
                >
                  Изменить урок
                </MenuItem>
                <MenuItem
                  onClick={() => navigate(`/lesson/${item.id}/question`)}
                  component={Button}
                  sx={{ textTransform: "capitalize", width: "100%" }}
                >
                  Добавить задание
                </MenuItem>
              </Menu>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                padding: 0,
                margin: 0,
              }}
            >
              <Pagination
                count={totalLessons}
                page={page}
                onChange={(_, val) => setPage(val)}
                variant="outlined"
                color="secondary"
              />
            </Box>
            <Box sx={{ margin: "5% auto" }}>
              <Typography component="h1" variant="h4">
                Тема урока: {item.title}
              </Typography>
            </Box>
            <Box
              sx={{
                margin: "5%",
                display: "flex",
                gap: "5%",
                alignItems: "center",
              }}
            >
              <Typography
                component="p"
                variant="p"
                sx={{ textAlign: "left", width: "45%" }}
              >
                {item.body}
              </Typography>
              <iframe
                width="560"
                height="315"
                src={item.youtube_link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Box>
            <Box
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                if (
                  inpVal.toLowerCase() === item.right_answer.toLowerCase() ||
                  selectedAnswer === item.right_answer
                ) {
                  setIsAnswerCorrect(true);
                } else {
                  setIsAnswerCorrect(false);
                }
                setInpVal("");
              }}
              sx={{
                margin: "5% auto",
                textAlign: "center",
                width: "60%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component="h1"
                variant="h4"
                sx={{ marginBottom: "3%" }}
              >
                Задание:
              </Typography>
              <Typography
                component="h3"
                variant="h6"
                sx={{ marginBottom: "3%" }}
              >
                {item.question}
              </Typography>
              {!item.wrong_answers ? (
                <TextField
                  label="Введите ваш ответ"
                  variant="outlined"
                  value={inpVal}
                  onChange={(e) => setInpVal(e.target.value)}
                  sx={{
                    marginBottom: "3%",
                    width: "100%",
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
                />
              ) : (
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedAnswer}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                    sx={{ textAlign: "left" }}
                  >
                    <FormControlLabel
                      value={item.right_answer}
                      control={<Radio />}
                      label={item.right_answer}
                    />
                    {item.wrong_answers.split(", ").map((i) => (
                      <FormControlLabel
                        value={i}
                        control={<Radio />}
                        label={i}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              )}

              <Button
                type="submit"
                variant="contained"
                sx={{ color: "#9021cf", width: "30%" }}
              >
                Отправить
              </Button>
              <Box>
                {isAnswerCorrect === true && (
                  <Typography
                    sx={{
                      color: "green",
                      marginTop: "10px",
                      textAlign: "center",
                      fontSize: "24px",
                    }}
                  >
                    Верный ответ! Продолжайте в том же духе.
                  </Typography>
                )}
                {isAnswerCorrect === false && (
                  <Typography
                    sx={{
                      color: "red",
                      marginTop: "10px",
                      textAlign: "center",
                      fontSize: "24px",
                    }}
                  >
                    Неправильный ответ. Попробуйте снова.
                  </Typography>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                margin: "5% auto",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {page !== 1 ? (
                <Button variant="outlined" onClick={prevPage}>
                  ⇽ Предыдущее задание
                </Button>
              ) : (
                ""
              )}
              {page < totalLessons ? (
                <Button variant="outlined" onClick={nextPage}>
                  Следующее задание ⇾
                </Button>
              ) : (
                ""
              )}
            </Box>
            <Box
              sx={{
                margin: "5% auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton>
                {!isLiked ? (
                  <ThumbUpIcon
                    sx={{ color: "white", fontSize: "34px" }}
                    onClick={() => {
                      like(item.title, item.id);
                      setIsLiked(!isLiked);
                    }}
                  />
                ) : (
                  <ThumbUpOutlinedIcon
                    sx={{ color: "white", fontSize: "34px" }}
                    onClick={() => {
                      like(item.title, item.id);
                      setIsLiked(!isLiked);
                    }}
                  />
                )}
              </IconButton>
              <Typography component="h3" variant="h6">
                {likes}
              </Typography>
              <IconButton>
                {isDisliked ? (
                  <ThumbDownIcon
                    sx={{ color: "white", fontSize: "34px" }}
                    onClick={() => {
                      dislike(item.title, item.id);
                      setIsDisliked(!isDisliked);
                    }}
                  />
                ) : (
                  <ThumbDownOffAltOutlinedIcon
                    sx={{ color: "white", fontSize: "34px" }}
                    onClick={() => {
                      dislike(item.title, item.id);
                      setIsDisliked(!isDisliked);
                    }}
                  />
                )}
              </IconButton>
              <Typography component="h3" variant="h6">
                {dislikes}
              </Typography>
            </Box>
            <Box
              sx={{
                margin: "5% auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography component="h3" variant="h4">
                Комментарии:
              </Typography>
            </Box>
          </Container>
        </ThemeProvider>
      ))}
    </>
  );
};

export default LessonPage;
