import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout";
import ActivationPage from "../pages/ActivationPage";
import UserProtectedRoute from "./UserProtectedRoute";

function MainRoute() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route element={<UserProtectedRoute />}></Route>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/api/account/activate/" element={<ActivationPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default MainRoute;
