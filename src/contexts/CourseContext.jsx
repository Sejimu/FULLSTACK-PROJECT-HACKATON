import React, { createContext, useContext, useReducer, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { notify } from "../components/Toastify";
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
  const [reviews, setReviews] = useState(null);

  async function getCourses() {
    try {
      const { data } = await $axios.get(`${BASE_URL}/courses/`);
      // console.log(data);
      dispatch({
        type: "courses",
        payload: data,
      });
    } catch (e) {
      notify(e.code.split("/")[1], "error");
    }
  }

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
      await $axios.delete(`${BASE_URL}/courses/${id}/`);
      getCourses();
    } catch (e) {
      console.log(e);
    }
  }

  async function getSubject() {
    try {
      const { data } = await $axios.get(`${BASE_URL}/subjects/`);

      dispatch({
        type: "subjects",
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }
  //   getSubject();

  async function editCourse(id, newData) {
    try {
      await $axios.patch(`${BASE_URL}/courses/${id}/`, newData);
    } catch (e) {
      console.log(e);
    }
  }

  async function getReviews(id) {
    try {
      const { data } = await $axios.get(`${BASE_URL}/courses/${id}/reviews/`);
      setReviews(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function addReviews(id, aaaa) {
    try {
      const { data } = await $axios.post(
        `${BASE_URL}/courses/${id}/reviews/`,
        aaaa
      );

      getReviews(id);
      setReviews(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteReviews(id) {
    try {
      const { data } = await $axios.delete(
        `${BASE_URL}/courses/${id}/reviews/`
      );
      setReviews(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function getOneCourse(id) {
    try {
      const { data } = await $axios.get(`${BASE_URL}/courses/${id}/`);
      dispatch({
        type: "oneCourse",
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }
  const value = {
    courses: state.courses,
    subjects: state.subjects,
    oneCourse: state.oneCourse,
    getCourses,
    createCourse,
    deleteCourse,
    getSubject,
    editCourse,
    getOneCourse,
    reviews,
    getReviews,
    addReviews,
    deleteReviews,
  };
  return (
    <courseContext.Provider value={value}>{children}</courseContext.Provider>
  );
};

export default CourseContext;
