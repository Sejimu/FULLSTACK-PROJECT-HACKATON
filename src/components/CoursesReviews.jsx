import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Box, Rating, Typography } from "@mui/material";
import { useCourseContext } from "../contexts/CourseContext";
import { useAuthContext } from "../contexts/AuthContext";

const CoursesReviews = ({ id }) => {
  const { reviews, getReviews, addReviews, deleteReviews } = useCourseContext();
  const { user } = useAuthContext();
  const [aaa, setAaa] = useState(1);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    if (user && Array.isArray(reviews)) {
      const hasSubmittedReview = reviews.some(
        (item) => item.owner_email === user.email
      );
      setShowForm(!hasSubmittedReview);
    }
  }, [user, reviews]);

  function handleSubmit(e) {
    e.preventDefault();

    const formValue = new FormData(e.target);
    const kkk = Object.fromEntries([...formValue]);
    const rating = aaa || 1;
    addReviews(id, { ...kkk, rating });
    setShowForm(false); // Hide the form after submitting
  }

  return (
    <>
      {user && showForm ? (
        <div
          className="cardCom"
          style={{ margin: "50px auto 0", width: "50%" }}>
          <span
            className="titleCom"
            style={{ fontSize: "2.125rem", fontWeight: "400" }}>
            Оставить Отзыв
          </span>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="formCom"
            style={{ marginTop: "50px" }}>
            <Rating
              sx={{ margin: "0 auto 20px" }}
              component="div"
              name="rating"
              defaultValue={1}
              size="large"
              onChange={(_, val) => setAaa(+val)}
            />
            <div className="groupCom">
              <textarea
                placeholder="‎"
                id="comment"
                name="body"
                rows="5"
                required></textarea>
              <label htmlFor="comment">Отзыв</label>
            </div>
            <button className="comment-btn" type="submit">
              Отправить
            </button>
          </form>
        </div>
      ) : null}

      <Box
        sx={{
          width: "90%",
          margin: "5% auto",
          color: "white",
        }}>
        <Typography component="h1" variant="h4">
          Отзывы
        </Typography>
      </Box>
      <div
        className="review-input"
        style={{
          margin: "40px auto 0",
          width: "90%",
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          gap: "10px",
          alignItems: "center",
        }}>
        {reviews && Array.isArray(reviews) ? (
          reviews.map((item, index) => {
            const rating = item.rating;
            const stars = Array.from({ length: rating }, (_, i) => (
              <StarIcon key={i} />
            ));

            return (
              <div
                className="review"
                style={{ position: "relative", width: "100%" }}
                key={index}>
                {user && user.email === item.owner_email ? (
                  <DeleteForeverIcon
                    sx={{
                      color: "#797979",
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                    }}
                    onClick={() => {
                      deleteReviews(id);
                      getReviews(id);
                    }}
                  />
                ) : null}

                <div className="header">
                  {/* <div
                    className="image"
                    style={{
                      backgroundImage: `url(${item.preview})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "4rem",
                      width: "7rem",
                      borderRadius: "9999px",
                    }}></div> */}
                  <div>
                    <div className="stars">{stars}</div>
                    <p className="name_review">{item.owner_email}</p>
                  </div>
                </div>
                <p className="review_text">{item.body}</p>
              </div>
            );
          })
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </>
  );
};

export default CoursesReviews;
