import React, { createContext, useContext } from "react";

const lessonContext = createContext();
export function useLessonContext() {
  return useContext(lessonContext);
}
const LessonContext = ({ children }) => {
  const value = {};
  return (
    <lessonContext.Provider value={value}>{children}</lessonContext.Provider>
  );
};

export default LessonContext;
