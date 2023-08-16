import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { notify } from "../components/Toastify";

const UserProtectedRoute = () => {
  const { user } = useAuthContext();
  if (!user) {
    notify("only signed users can use this panel");
    return <Navigate to="/auth" />;
  }
  return <Outlet />;
};

export default UserProtectedRoute;
