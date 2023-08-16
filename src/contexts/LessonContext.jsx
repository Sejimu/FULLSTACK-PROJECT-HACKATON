import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import $axios from "../utils/axios";
import { BASE_URL } from "../utils/consts";
import { useSearchParams } from "react-router-dom";
import { notify } from "../components/Toastify";

const lessonContext = createContext();
export function useLessonContext() {
  return useContext(lessonContext);
}

const initState = {
  lessons: [],
  oneLesson: null,
  totalLessons: 1,
  questions: [],
  likes: 0,
  dislikes: 0,
  isLiked: false,
  isDisliked: false,
  comments: [],
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
    case "likes":
      return { ...state, likes: action.payload };
    case "dislikes":
      return { ...state, dislikes: action.payload };
    case "isLiked":
      return { ...state, isLiked: action.payload };
    case "isDisliked":
      return { ...state, isDisliked: action.payload };
    case "comments":
      return { ...state, comments: action.payload };
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
      dispatch({
        type: "likes",
        payload: data.results[0].like_count,
      });
      dispatch({
        type: "dislikes",
        payload: data.results[0].dislike_count,
      });
      dispatch({
        type: "isLiked",
        payload: data.results[0].is_liked,
      });
      dispatch({
        type: "isDisliked",
        payload: data.results[0].is_disliked,
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
      await $axios.post(`${BASE_URL}/lessons/`, lesson);
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

  async function like(title, id) {
    try {
      const { data } = await $axios.post(
        `${BASE_URL}/lessons/${id}/likes/`,
        title
      );
      notify("liked", "success");
      getLessons();
    } catch (e) {
      console.log(e);
    }
  }

  async function dislike(title, id) {
    try {
      const { data } = await $axios.post(
        `${BASE_URL}/lessons/${id}/dislikes/`,
        title
      );
      notify("disliked", "success");
      getLessons();
    } catch (e) {
      notify(e.code.split("/")[1], "error");
    }
  }

  const [comments2, setComments2] = useState([]);

  async function getComments(id) {
    try {
      const { data } = await $axios.get(`${BASE_URL}/lessons/${id}/comments/`);
      // dispatch({
      //   type: "comments",
      //   payload: data,
      // });
      setComments2(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function createComments(id, newComment) {
    try {
      await $axios.post(`${BASE_URL}/lessons/${id}/comments/`, newComment);
      getComments(id);
    } catch (e) {
      console.log(e);
    }
  }

  console.log(comments2);

  const value = {
    lessons: state.lessons,
    oneLesson: state.oneLesson,
    totalLessons: state.totalLessons,
    likes: state.likes,
    dislikes: state.dislikes,
    isLiked: state.isLiked,
    isDisliked: state.isDisliked,
    comments: state.comments,
    page,
    comments2,
    createQuestions,
    setPage,
    getLessons,
    getOneLesson,
    createLesson,
    updateLesson,
    deleteLesson,
    deleteQuestion,
    like,
    dislike,
    getComments,
    setComments2,
    createComments,
  };
  return (
    <lessonContext.Provider value={value}>{children}</lessonContext.Provider>
  );
};

export default LessonContext;
