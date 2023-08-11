import React from "react";
import { useNavigate } from "react-router-dom";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { IconButton } from "@mui/material";

const CoursesItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="cardCourse">
      <div className="imgCourse">
        <img className="imgCardCourse" src={item.preview} alt="img" />
        <IconButton
          sx={{ zIndex: "10", position: "absolute", color: "#e0a3df" }}
        >
          {<BookmarkBorderIcon />}
        </IconButton>
      </div>

      <div className="textCourse">
        <p className="h3Course">{item.title}</p>
        <p className="pCourse">{item.subject}</p>

        <div
          className="icon-box-course"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/courses/${item.id}`)}
        >
          <p className="spanCourse">Learn more ➔</p>
        </div>
      </div>
    </div>
  );
};

export default CoursesItem;
