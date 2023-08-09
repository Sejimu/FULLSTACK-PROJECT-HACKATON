import React, { createContext, useContext, useState } from "react";
import { notify } from "../components/Toastify";
import { json } from "react-router-dom";

const favouriteContext = createContext();

export function useFavouriteContext() {
  return useContext(favouriteContext);
}

const initState = {
  favourites: [],
};

function getFavouriteFromLS() {
  let data = JSON.parse(localStorage.getItem("favourite"));
  if (!data) {
    data = {
      favourites: [],
    };
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
    const data = getFavouriteFromLS();
    data.favourites.push({ ...course });

    localStorage.setItem("favourite", JSON.stringify(data));
    getFavourite();

    notify("added", "success");
  }

  function deleteCourseFromCart(id) {
    const data = getFavouriteFromLS();
    data.favourites = data.favourites.filter((item) => item.id !== id);
    localStorage.setItem("favourite", JSON.stringify(data));
    getFavourite();
    notify("deleted", "success");
  }

  function isAlreadyInFavourite(id) {
    const data = getFavouriteFromLS();
    const isInFavourite = data.products.some((item) => item.id === id);
    return isInFavourite;
  }

  function clearFavourite() {
    localStorage.removeItem("favourite");
  }

  const value = {
    clearFavourite,
    isAlreadyInFavourite,
    deleteCourseFromCart,
    addCourseToFavourite,
    getFavourite,
    getFavouriteFromLS,
  };
  return (
    <favouriteContext.Provider value={value}>
      {children}
    </favouriteContext.Provider>
  );
}

export default FavouriteContext;
