import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import { IconButton } from "@mui/material";
import { BASE_URL } from "../utils/consts";
import { useFavouriteContext } from "../contexts/FavouriteContext";

const CoursesItem = ({ item }) => {
  const {
    isAlreadyInFavourite,
    deleteCourseFromCart,
    addCourseToFavourite,
    getFavourite,
    favourite,
  } = useFavouriteContext();

  React.useEffect(() => {
    getFavourite();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="cardCourse">
      <div className="imgCourse">
        <img
          className="imgCardCourse"
          src={`http://app.vanillacode.pp.ua/${item.preview}`}
          alt="Course Preview"
        />

        {isAlreadyInFavourite(item.id) ? (
          <IconButton
            onClick={() => deleteCourseFromCart(item.id)}
            sx={{ zIndex: "10", position: "absolute", color: "#e0a3df" }}
          >
            <BookmarkRemoveIcon />
          </IconButton>
        ) : (
          <IconButton
            sx={{ zIndex: "10", position: "absolute", color: "#e0a3df" }}
            onClick={() => addCourseToFavourite(item)}
          >
            <BookmarkBorderIcon />
          </IconButton>
        )}
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
