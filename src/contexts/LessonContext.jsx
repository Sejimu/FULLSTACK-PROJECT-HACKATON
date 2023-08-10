import React, { createContext, useContext, useReducer } from "react";
import $axios from "../utils/axios";
import { BASE_URL } from "../utils/consts";

const lessonContext = createContext();
export function useLessonContext() {
  return useContext(lessonContext);
}

const initState = {
  lessons: [],
  oneLesson: null,
  totalLessons: 1,
};
function reducer(state, action) {
  switch (action.type) {
    case "lessons":
      return { ...state, lessons: action.payload };
    case "oneLesson":
      return { ...state, oneLesson: action.payload };
    case "totalLessons":
      return { ...state, totalLessons: action.payload };
    default:
      return state;
  }
}
const LessonContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getLessons() {
    try {
      const { data } = await $axios.get(
        `${BASE_URL}/lessons/${window.location.search}`
      );
      dispatch({
        type: "lessons",
        payload: data.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function getOneLesson(id) {
    try {
      const { data } = await $axios.get(`${BASE_URL}/lessons/${id}/`);
      console.log(data);
      dispatch({
        type: "oneLesson",
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function createLesson(lesson) {
    try {
      const data = await $axios.post(`${BASE_URL}/lessons/`, lesson);
      console.log(data, "сработало");
    } catch (e) {
      console.log(e);
    }
  }
  async function updateLesson(id, lesson) {
    try {
      await $axios.patch(`${BASE_URL}/lessons/${id}/`, lesson);
    } catch (e) {
      console.log(e);
    }
  }
  async function deleteLesson(id) {
    try {
      await $axios.delete(`${BASE_URL}/lessons/${id}/`);
    } catch (e) {
      console.log(e);
    }
  }

  const value = {
    lessons: state.lessons,
    oneLesson: state.oneLesson,
    getLessons,
    getOneLesson,
    createLesson,
    updateLesson,
    deleteLesson,
  };
  return (
    <lessonContext.Provider value={value}>{children}</lessonContext.Provider>
  );
};

export default LessonContext;
