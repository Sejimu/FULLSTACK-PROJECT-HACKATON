import {
  Button,
  IconButton,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container, ThemeProvider } from "@mui/system";
import React, { useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import { useParams, useSearchParams } from "react-router-dom";
import { useLessonContext } from "../contexts/LessonContext";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const { getLessons, lessons, page, setPage } = useLessonContext();
  const { id } = useParams();
  useEffect(() => {
    getLessons();
    document.body.classList.add("lessonPage");
    return () => {
      document.body.classList.remove("lessonPage");
    };
  }, []);
  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams({ ...currentParams, course_id: id, lesson: page });
  }, [page]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" sx={{ color: "white", width: "90%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            padding: 0,
            margin: 0,
          }}
        >
          <Pagination
            count={5}
            page={page}
            onChange={(_, val) => setPage(val)}
            variant="outlined"
            color="secondary"
          />
        </Box>
        <Box sx={{ margin: "5% auto" }}>
          <Typography component="h1" variant="h4">
            Тема урока: Асимптотическое приближение
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
            Каждый раз когда мы считываем число большее 10, мы добавляем 1 к
            нашему текущему значению переменной counter. В программе это
            реализовано в строке counter = counter + 1. Обратите внимание на
            начальное значение переменной счетчика counter = 0. Без начального
            значения мы получили бы ошибку, поскольку дойдя до строки counter =
            counter + 1 Python ничего не знал бы о переменной counter . Строка
            кода counter = counter + 1 означает: возьми старое значение
            переменной counter, прибавь к нему 1 и переприсвой переменной это
            значение. Если не придать переменной начальное значение, то
            непонятно, к чему прибавлять 1 в самый первый раз. Подсчет
            количества – это очень частый сценарий. Он состоит из двух шагов:
            Создание переменной счетчика и придание ей первоначального значения:
            counter = 0; Увеличение переменной счетчика на 1: counter = counter
            + 1. Часто при написании программ требуется использовать несколько
            счетчиков. Модифицируем предыдущую программу: посчитаем еще и
            количество нулей среди введенных чисел.
          </Typography>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XzLuMtDelGk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
        <Box sx={{ margin: "5% auto", textAlign: "center", width: "60%" }}>
          <Typography component="h1" variant="h4" sx={{ marginBottom: "3%" }}>
            Задание:
          </Typography>
          <Typography component="h3" variant="h6" sx={{ marginBottom: "3%" }}>
            На вход программе подается натуральное число n. Напишите программу,
            которая вычисляет значение выражения.
          </Typography>
          <TextField
            label="Введите ваш ответ"
            variant="outlined"
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
          <Button variant="contained" sx={{ color: "#9021cf" }}>
            Отправить
          </Button>
        </Box>
        <Box
          sx={{
            margin: "5% auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button variant="outlined">⇽ Предыдущее задание</Button>
          <Button variant="outlined">Следующее задание ⇾</Button>
        </Box>
        <Box
          sx={{
            margin: "5% auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton>
            <ThumbUpOutlinedIcon sx={{ color: "white", fontSize: "34px" }} />
          </IconButton>
          <Typography component="h3" variant="h6">
            12345
          </Typography>
          <IconButton>
            <ThumbDownOffAltOutlinedIcon
              sx={{ color: "white", fontSize: "34px" }}
            />
          </IconButton>
          <Typography component="h3" variant="h6">
            12345
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
  );
};

export default LessonPage;
