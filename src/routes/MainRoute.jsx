import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout";
import ActivationPage from "../pages/ActivationPage";
import AddCourse from "../pages/AddCourse";
import Checkout from "../pages/paymentPage/Checkout";
import AddLesson from "../pages/AddLesson";
import DetailsPage from "../pages/DetailsPage";
import UserProtectedRoute from "./UserProtectedRoute";
import ProfilePage from "../pages/ProfilePage";
import LessonPage from "../pages/LessonPage";
import EditLesson from "../pages/EditLesson";
import EditCourse from "../pages/EditCourse";

function MainRoute() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/payment" element={<Checkout />} />
        <Route path="/courses/:id/lesson" element={<LessonPage />} />
        <Route path="/courses/:id/addlesson" element={<AddLesson />} />
        <Route path="/courses/editlesson/:id" element={<EditLesson />} />
        <Route path="/courses/:id" element={<DetailsPage />} />
        <Route path="/addcourse" element={<AddCourse />} />
        <Route path="/editcourse/:id" element={<EditCourse />} />
      </Route>

      <Route element={<UserProtectedRoute />}></Route>
      <Route path="/api/account/activate/" element={<ActivationPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default MainRoute;
