import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import CoursesContext from "./contexts/CoursesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CoursesContext>
      <AuthContext>
        <App />
      </AuthContext>
    </CoursesContext>
  </BrowserRouter>
);
