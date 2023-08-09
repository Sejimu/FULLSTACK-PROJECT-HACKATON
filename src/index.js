import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import FavouriteContext from "./contexts/FavouriteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContext>
      <FavouriteContext>
        <App />
      </FavouriteContext>
    </AuthContext>
  </BrowserRouter>
);
