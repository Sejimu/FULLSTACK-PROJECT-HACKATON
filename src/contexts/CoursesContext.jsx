import React, { createContext, useContext, useEffect, useReducer } from "react";
import $axios from "../utils/axios";
import { BASE_URL } from "../utils/consts";
import { notify } from "../components/Toastify";

const coursesContext = createContext();

export function useCoursesContext() {
  return useContext(coursesContext);
}

const initState = {
  courses: [],
  oneCourse: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "courses":
      return { ...state, courses: action.payload };
    case "oneCourse":
      return { ...state, oneCourse: action.payload };
    default:
      return state;
  }
}

const CoursesContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getCourses() {
    try {
      const { data } = await $axios.get(`${BASE_URL}/courses/`);
      console.log(data);
      dispatch({
        type: "courses",
        payload: data,
      });
    } catch (e) {
      notify(e.code.split("/")[1], "error");
    }
  }

  useEffect(() => {
    getCourses();
  }, []);

  const value = { getCourses, courses: state.courses };
  return (
    <coursesContext.Provider value={value}>{children}</coursesContext.Provider>
  );
};

export default CoursesContext;
