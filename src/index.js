import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import CoursesContext from "./contexts/CoursesContext";
import LessonContext from "./contexts/LessonContext";
import FavouriteContext from "./contexts/FavouriteContext";
import CourseContext from "./contexts/CourseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContext>
      <FavouriteContext>
      <CoursesContext>
        <CourseContext>
          <LessonContext>
            <App />
          </LessonContext>
        </CourseContext>
      </CoursesContext>
      </FavouriteContext>
    </AuthContext>

  </BrowserRouter>
);
