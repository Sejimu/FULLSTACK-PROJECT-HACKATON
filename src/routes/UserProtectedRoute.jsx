import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { notify } from "../components/Toastify";
import { useAuthContext } from "../contexts/AuthContext";
const UserProtectedRoute = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  if (!user) {
    notify("only signed users can use this panel");
    return navigate("/");
  }
  return <Outlet />;
};

export default UserProtectedRoute;
