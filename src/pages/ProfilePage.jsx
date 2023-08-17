import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useAuthContext } from "../contexts/AuthContext";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import { IconButton } from "@mui/material";
import { useCourseContext } from "../contexts/CourseContext";
import { useFavouriteContext } from "../contexts/FavouriteContext";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const {
    deleteCourseFromCart,
    addCourseToFavourite,
    getFavourite,
    favourite,
  } = useFavouriteContext();
  useEffect(() => {
    document.body.classList.add("homePage");
    getFavourite();
    return () => {
      document.body.classList.remove("homePage");
    };
  }, []);

  const currentDate = new Date();
  const currentDayOfYear = Math.floor(
    (currentDate - new Date(currentDate.getFullYear(), 0, 0)) /
      (1000 * 60 * 60 * 24)
  );

  const dates = JSON.parse(localStorage.getItem("actives"));

  const months = [
    { name: "J", days: 31 },
    { name: "F", days: 28 }, // Assumed 28 days for simplicity
    { name: "M", days: 31 },
    { name: "A", days: 30 },
    { name: "M", days: 31 },
    { name: "J", days: 30 },
    { name: "J", days: 31 },
    { name: "A", days: 31 },
    { name: "S", days: 30 },
    { name: "O", days: 31 },
    { name: "N", days: 30 },
    { name: "D", days: 31 },
  ];

  let dayCounter = 0;
  return (
    <>
      {user ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="profile_container"
            style={{
              width: "90%",
            }}
          >
            <div className="first_section">
              <div
                className="first__section_avatar"
                style={{
                  maxWidth: "90vw",
                  maxHeight: "245px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  alt={user.username}
                  src={null}
                  sx={{
                    width: 200, // Set the desired width
                    height: 200, // Set the desired height
                    color: "black",
                    backgroundColor: "black",
                  }}
                >
                  <Typography variant="h1" color="white">
                    {user.username ? (
                      <>
                        {user.username.split(" ")[0][0]}
                        {user.username.includes(" ") &&
                          user.username.split(" ")[1][0]}
                      </>
                    ) : (
                      "N/A"
                    )}
                  </Typography>
                </Avatar>
              </div>

              <div
                className="first__section_cartHolder hidden"
                style={{ display: "flex", marginLeft: "-35px" }}
              >
                <div
                  className="user_name"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingLeft: "10px",
                    borderRadius: "6px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexFlow: "column",
                      alignItems: "center",
                      marginLeft: "20px",
                    }}
                  >
                    <p style={{ color: "#ff00d4" }}>name</p>
                    <p style={{ color: "white" }}>
                      {user.first_name} {user.last_name}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingLeft: "10px",
                    borderRadius: "6px",
                  }}
                  className="user_last_name"
                >
                  <div
                    style={{
                      display: "flex",
                      flexFlow: "column",
                      alignItems: "center",
                      marginLeft: "10px",
                    }}
                  >
                    <p style={{ fontSize: "14px", color: "#ff00d4" }}>email</p>
                    <p style={{ color: "white" }}>{user.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="second_section">
              <div className="infa__holder">
                <div
                  className="name"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingLeft: "10px",
                    borderRadius: "6px",
                  }}
                >
                  <InsertEmoticonIcon
                    sx={{ color: "white" }}
                    fontSize="large"
                  />
                  <div
                    style={{
                      display: "flex",
                      flexFlow: "column",
                      alignItems: "self-start",
                      marginLeft: "20px",
                    }}
                  >
                    <p style={{ fontSize: "14px", color: "#ff00d4" }}>name</p>
                    <p style={{ color: "white" }}>
                      {user.first_name} {user.last_name}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingLeft: "10px",
                    borderRadius: "6px",
                  }}
                  className="data"
                >
                  <AccountCircleIcon sx={{ color: "white" }} fontSize="large" />
                  <div
                    style={{
                      display: "flex",
                      flexFlow: "column",
                      alignItems: "self-start",
                      marginLeft: "20px",
                    }}
                  >
                    <p style={{ fontSize: "14px", color: "#ff00d4" }}>email</p>
                    <p style={{ color: "white" }}>{user.email}</p>
                  </div>
                </div>
              </div>
              <div
                className="second_section__item_visible"
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Активность за последний год
              </div>
              <div
                className="calendar"
                style={{
                  width: "60%",
                  minWidth: "207px",
                  borderRadius: "5px",
                }}
              >
                {months.map((month, index) => {
                  const monthDays = Array.from(
                    { length: month.days },
                    () => ++dayCounter
                  );
                  return (
                    <div className="month" key={index}>
                      <h3
                        style={{
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        {month.name}
                      </h3>
                      {monthDays.map((day) => (
                        <div
                          key={day}
                          className={`day ${
                            dates && dates.includes(day) ? "green" : "gray"
                          }`}
                        />
                      ))}
                    </div>
                  );
                })}
              </div>
              <div
                className="Card"
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                  marginTop: "5%",
                  gap: "2%",
                }}
              >
                {favourite.length > 0
                  ? favourite.map((item) => (
                      <>
                        <div className="cardCourse" key={item.id}>
                          <div className="imgCourse">
                            <img
                              className="imgCardCourse"
                              src={`http://app.vanillacode.pp.ua/${item.preview}`}
                              alt="Course Preview"
                            />
                            <IconButton
                              sx={{
                                zIndex: "10",
                                position: "absolute",
                                color: "#e0a3df",
                              }}
                              onClick={() => {
                                deleteCourseFromCart(item.id);
                              }}
                            >
                              <BookmarkRemoveIcon />
                            </IconButton>
                          </div>

                          <div className="textCourse">
                            <p className="h3Course">{item.title}</p>
                            <p className="pCourse">{item.subject}</p>

                            <div
                              className="icon-box-course"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                navigate(`/courses/${item.id}/lesson`)
                              }
                            >
                              <p className="spanCourse">Начать обучение ➔</p>
                            </div>
                          </div>
                        </div>
                      </>
                    ))
                  : ""}
              </div>
            </div>

            <div style={{ display: "none" }} className=" visible"></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProfilePage;
