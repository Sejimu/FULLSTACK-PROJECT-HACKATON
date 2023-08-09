import React, { useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material";

import { useNavigate } from "react-router";

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

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("homePage");
    return () => {
      document.body.classList.remove("homePage");
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div style={{ position: "relative" }}>
          <video
            className="homeVideo"
            src="https://video-public.canva.com/VAFGWxITitg/v/a0407fd778.mp4"
            autoPlay
            loop
            muted
          />
          <div
            style={{
              fontSize: "70px",
              position: "absolute",
              top: "40% ",
              left: "5%",
              color: "white",
              padding: "10px",
              animation: "slideInFromLeft 1s ease-in-out",
            }}>
            Vanilla Code -
          </div>
          <span
            style={{
              fontSize: "50px",
              position: "absolute",
              top: "50%",
              left: "3%",
              color: "white",
              padding: "10px",
              animation: "slideInFromLeft 1s ease-in-out",
            }}>
            о сложном простыми словами
          </span>
          <Button
            onClick={() => navigate("/courses")}
            variant="outlined"
            sx={{
              animation: "slideInFromLeft 1s ease-in-out",
              color: "#D73CBE",
              position: "absolute",
              top: "60%",
              left: "4%",
              padding: "10px",
            }}>
            Перейти к курсам
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "100px",
            marginBottom: "100px",
          }}>
          <img
            className="homeImg"
            src="https://video-public.canva.com/VAFKHPCHN00/v/397c1bb2f3.gif"
          />
          <div style={{ color: "white", width: "40%", marginTop: "5%" }}>
            <h2
              style={{
                fontSize: "40px",
                animation: "slideInFromRight 1s ease-in-out",
              }}>
              Основные обучающие онлайн-курсы
            </h2>
            <span
              style={{
                fontSize: "20px",
                animation: "slideInFromRight 1s ease-in-out",
              }}>
              Полноценные программы, на которых вы освоите востребованную
              IT-профессию с нуля и будете готовы к работе.
            </span>
          </div>
        </div>
        <div
          style={{
            color: "white",
          }}>
          <h2 style={{ animation: "slideInFromRight 1s ease-in-out" }}>
            На обучении в Vanilla Code вас ждут
          </h2>
          <div
            style={{
              display: "flex",
              alignContent: "space-evenly",
              justifyContent: "space-evenly",
              marginTop: "50px",
              marginBottom: "150px",
            }}>
            <div
              style={{
                textAlign: "left",
                width: "30%",
              }}>
              <div>
                <h3 style={{ color: "#D73CBE" }}>Материал без «воды»</h3>
                <span>
                  В наших видеоуроках нет лишней болтовни, только свежая,
                  актуальная информация по темам уроков без отвлечений на
                  ненужные разговоры. Убедитесь в этом сами по отзывам наших
                  выпускников.
                </span>
              </div>
              <hr />
              <div>
                <h3 style={{ color: "#D73CBE" }}>
                  Курсы по профессиям только с фидбэком
                </h3>
                <span>
                  Наша цель — научить вас и помочь быстро и без ошибок войти в
                  профессию и IT-сферу. И такой рост возможен только благодаря
                  качественной обратной связи от наставника и персональному
                  разбору ваших работ.
                </span>
              </div>
            </div>
            <div
              style={{
                textAlign: "left",
                width: "30%",
              }}>
              <div>
                <h3 style={{ color: "#D73CBE" }}>
                  Рекомендации по трудоустройству
                </h3>
                <span>
                  В конце курсов, на которых вы обучаетесь профессии, вы
                  получаете необходимые рекомендации по трудоустройству в офис
                  или работе на фрилансе и удалёнке, заполняете резюме и аккаунт
                  на бирже.
                </span>
              </div>
              <hr />
              <div>
                <h3 style={{ color: "#D73CBE" }}>
                  Общий чат с группой и выпускниками{" "}
                </h3>
                <span>
                  В чатах с группой и выпускниками вы будете обмениваться опытом
                  с дизайнерами и разработчиками, а также находить партнёров для
                  выполнения заказов.
                </span>
              </div>
            </div>
            <div
              style={{
                textAlign: "left",
                width: "30%",
              }}>
              <div>
                <h3 style={{ color: "#D73CBE" }}>
                  Большое количество практики
                </h3>
                <span>
                  Вас ждёт практика во время уроков и самостоятельные задания с
                  разборами от наставника. Помимо этого есть тесты и
                  дополнительные задания для лучшего усвоения и закрепления
                  материала.
                </span>
              </div>
              <hr />
              <div>
                <h3 style={{ color: "#D73CBE" }}>Практикующие преподаватели</h3>
                <span>
                  Вас будут обучать преподаватели, которые сами работают по
                  профессии в данный момент, потому что учить должны только
                  практикующие специалисты, а не теоретики.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ color: "white" }}>
          <h2 style={{ animation: "slideInFromRight 1s ease-in-out" }}>
            Комфортная система обучения
          </h2>
          <h3 style={{ animation: "slideInFromRight 1s ease-in-out" }}>
            Мы обеспечиваем каждому нашему ученику комфортный и удобный процесс
            обучения!
          </h3>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              textAlign: "left",

              marginTop: "50px",
              marginLeft: "35px",
              marginBottom: "100px",
            }}>
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                gap: "5%",
              }}>
              <div>
                <h3 style={{ color: "#D73CBE" }}>
                  Собственная удобная онлайн-платформа
                </h3>
                <span>
                  Вы будете обучаться на онлайн-платформе Айтилогии, а не на
                  арендованной. А значит учёба будет комфортной.
                </span>
              </div>
              <div>
                <h3 style={{ color: "#D73CBE" }}>Контроль результативности</h3>
                <span>
                  Вы не сможете идти вперед, пока не сдадите предыдущее задание.
                  Это гарантирует эффективное усвоение материала и лучший
                  результат.
                </span>
              </div>
              <div>
                <h3 style={{ color: "#D73CBE" }}>
                  Учитесь в удобное для вас время суток
                </h3>
                <span>
                  Вы не привязаны ко времени суток и сможете смотреть урок и
                  выполнять домашку в любое удобное для вас время.
                </span>
              </div>
            </div>
            <div>
              <img
                className="homeImg2"
                src="https://video-public.canva.com/VAFKHIeV6E8/v/07ba2e6363.gif"
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default HomePage;
