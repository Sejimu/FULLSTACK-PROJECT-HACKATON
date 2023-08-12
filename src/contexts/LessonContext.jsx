import React, { createContext, useContext, useReducer, useState } from "react";
import $axios from "../utils/axios";
import { BASE_URL } from "../utils/consts";
import { useSearchParams } from "react-router-dom";

const lessonContext = createContext();
export function useLessonContext() {
  return useContext(lessonContext);
}

const initState = {
  lessons: [],
  oneLesson: null,
  totalLessons: 1,
  questions: [],
};
function reducer(state, action) {
  switch (action.type) {
    case "lessons":
      return { ...state, lessons: action.payload };
    case "oneLesson":
      return { ...state, oneLesson: action.payload };
    case "totalLessons":
      return { ...state, totalLessons: action.payload };
    case "questions":
      return { ...state, questions: action.payload };
    default:
      return state;
  }
}
const LessonContext = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, dispatch] = useReducer(reducer, initState);
  const [page, setPage] = useState(+searchParams.get("_page") || 1);

  async function getLessons() {
    try {
      const { data } = await $axios.get(
        `${BASE_URL}/lessons/${window.location.search}`
      );

      dispatch({
        type: "lessons",
        payload: data.results,
      });
      dispatch({
        type: "totalLessons",
        payload: data.count,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function getOneLesson(id) {
    try {
      const { data } = await $axios.get(`${BASE_URL}/lessons/${id}/`);
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

  async function createQuestions(id, question) {
    try {
      await $axios.post(`${BASE_URL}/lessons/${id}/questions/`, question);
    } catch (e) {
      console.log(e);
    }
  }
  async function deleteQuestion(id) {
    try {
      await $axios.delete(`${BASE_URL}/lessons/${id}/questions/`);
    } catch (e) {
      console.log(e);
    }
  }
  const value = {
    lessons: state.lessons,
    oneLesson: state.oneLesson,
    totalLessons: state.totalLessons,
    page,
    createQuestions,
    setPage,
    getLessons,
    getOneLesson,
    createLesson,
    updateLesson,
    deleteLesson,
    deleteQuestion,
  };
  return (
    <lessonContext.Provider value={value}>{children}</lessonContext.Provider>
  );
};

export default LessonContext;
