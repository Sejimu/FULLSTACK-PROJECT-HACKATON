import React from "react";
import { useNavigate } from "react-router-dom";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { IconButton } from "@mui/material";

const CoursesItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="img">
        <img className="imgCard" src={item.preview} alt="img" />
        <IconButton
          sx={{ zIndex: "10", position: "absolute", color: "#e0a3df" }}
        >
          {<BookmarkBorderIcon />}
        </IconButton>
      </div>

      <div className="text">
        <p className="h3">{item.title}</p>
        <p className="p">{item.subject}</p>

        <div
          className="icon-box"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/courses/${item.id}`)}
        >
          <p className="span">Learn more ➔</p>
        </div>
      </div>
    </div>
  );
};

export default CoursesItem;
