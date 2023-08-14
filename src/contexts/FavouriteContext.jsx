import React, { createContext, useContext, useState } from "react";
import { notify } from "../components/Toastify";
import { json } from "react-router-dom";

const favouriteContext = createContext();

export function useFavouriteContext() {
  return useContext(favouriteContext);
}

const initState = [];

function getFavouriteFromLS() {
  let data = JSON.parse(localStorage.getItem("favourites"));
  if (!data) {
    data = [];
  }
  return data;
}

function FavouriteContext({ children }) {
  const [favourite, setFavourite] = useState(initState);

  function getFavourite() {
    const data = getFavouriteFromLS();
    setFavourite(data);
  }

  function addCourseToFavourite(course) {
    console.log(course);
    const data = getFavouriteFromLS();
    data.push(course);
    localStorage.setItem("favourites", JSON.stringify(data));
    getFavourite();
    notify("added", "success");
  }

  function deleteCourseFromCart(id) {
    let data = getFavouriteFromLS();
    console.log(data);
    data = data.filter((item) => item.id !== id);
    localStorage.setItem("favourites", JSON.stringify(data));
    getFavourite();
    notify("deleted", "success");
  }

  function isAlreadyInFavourite(id) {
    const data = getFavouriteFromLS();
    const isInFavourite = data.some((item) => item.id === id);
    return isInFavourite;
  }

  function clearFavourite() {
    localStorage.removeItem("favourites");
  }

  const value = {
    clearFavourite,
    isAlreadyInFavourite,
    deleteCourseFromCart,
    addCourseToFavourite,
    getFavourite,
    favourite,
    getFavouriteFromLS,
  };

  return (
    <favouriteContext.Provider value={value}>
      {children}
    </favouriteContext.Provider>
  );
}

export default FavouriteContext;
