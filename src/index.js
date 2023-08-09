import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import LessonContext from "./contexts/LessonContext";
import FavouriteContext from "./contexts/FavouriteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContext>
   <FavouriteContext>
      <LessonContext>
        <App />
      </LessonContext>
     </FavouriteContext>
    </AuthContext>
  </BrowserRouter>
);
