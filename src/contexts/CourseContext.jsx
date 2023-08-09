import React, { createContext, useContext, useReducer } from "react";
import { useSearchParams } from "react-router-dom";

import $axios from "../utils/axios";
import { BASE_URL } from "../utils/consts";

const courseContext = createContext();
export function useCourseContext() {
  return useContext(courseContext);
}

const initState = {
  courses: [],
  oneCourse: null,
  subjects: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "courses":
      return { ...state, courses: action.payload };
    case "oneCourse":
      return { ...state, oneCourse: action.payload };
    case "subjects":
      return { ...state, subjects: action.payload };
    default:
      return state;
  }
}

const CourseContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const [searchParams, setSearchParams] = useSearchParams();

  async function getCourses() {
    try {
      const { data } = await $axios.get(`${BASE_URL}/courses/`);

      console.log(data);
      dispatch({
        type: "courses",
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }
  //   getCourses();

  async function createCourse(course) {
    try {
      const { data } = await $axios.post(`${BASE_URL}/courses/`, course);

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
  //   createCourse();

  async function deleteCourse(id) {
    try {
      await $axios.delete(`${BASE_URL}/courses/${id}`);
      getCourses();
    } catch (e) {
      console.log(e);
    }
  }

  async function getSubject() {
    try {
      const { data } = await $axios.get(`${BASE_URL}/subjects/`);
      //   console.log(data);
      dispatch({
        type: "subjects",
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }
  //   getSubject();
  const value = {
    courses: state.courses,
    subjects: state.subjects,
    getCourses,
    createCourse,
    deleteCourse,
    getSubject,
  };
  return (
    <courseContext.Provider value={value}>{children}</courseContext.Provider>
  );
};

export default CourseContext;
