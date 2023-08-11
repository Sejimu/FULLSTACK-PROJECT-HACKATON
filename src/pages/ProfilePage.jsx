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

const ProfilePage = () => {
  const { user } = useAuthContext();

  useEffect(() => {
    document.body.classList.add("homePage");
    return () => {
      document.body.classList.remove("homePage");
    };
  }, []);

  console.log(user);
  const currentDate = new Date();
  console.log(currentDate);
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
                style={{ display: "flex" }}
              >
                <div className="card">
                  <div className="card__content">
                    <p className="card__title">Project Name</p>
                    <p className="card__description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                    <button className="card__button">Live Demo</button>
                    <button className="card__button secondary">
                      Source Code
                    </button>
                  </div>
                </div>

                <div className="card">
                  <div className="card__content">
                    <p className="card__title">Project Name</p>
                    <p className="card__description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                    <button className="card__button">Live Demo</button>
                    <button className="card__button secondary">
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="second_section">
              <div className="second_section__item_visible">
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
                      marginLeft: "20px",
                    }}
                  >
                    <p style={{ fontSize: "14px", color: "#ff00d4" }}>email</p>
                    <p style={{ color: "white" }}>{user.email}</p>
                  </div>
                </div>
              </div>

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
                className="calendar"
                style={{
                  width: "60%",
                  minWidth: "207px",
                  borderRadius: "5px",
                }}
              >
                {months.map((month) => {
                  const monthDays = Array.from(
                    { length: month.days },
                    () => ++dayCounter
                  );
                  return (
                    <div className="month" key={month.name}>
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
              <div></div>
            </div>

            <div style={{ display: "none" }} className=" visible">
              <div className="card">
                <div className="card__content">
                  <p className="card__title">Project Name</p>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                  <button className="card__button">Live Demo</button>
                  <button className="card__button secondary">
                    Source Code
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="card__content">
                  <p className="card__title">Project Name</p>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                  <button className="card__button">Live Demo</button>
                  <button className="card__button secondary">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProfilePage;
