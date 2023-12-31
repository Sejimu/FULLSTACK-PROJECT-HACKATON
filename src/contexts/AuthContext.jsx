import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ADMIN, BASE_URL } from "../utils/consts";
import $axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { notify } from "../components/Toastify";

const authContext = createContext();

export function useAuthContext() {
  return useContext(authContext);
}

function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  async function register(credentials) {
    try {
      const res = await axios.post(
        `${BASE_URL}/account/register/`,
        credentials
      );
    } catch (e) {
      notify(`${e.response.status}: ${e.response.statusText}`, "error");
    }
  }

  async function activateUser(code) {
    try {
      const res = await axios.post(`${BASE_URL}/account/activate/`, {
        activation_code: code,
      });

      navigate("/auth");
    } catch (e) {
      notify(`${e.response.status}: ${e.response.statusText}`, "error");
    }
  }

  async function resetPassword(credentials) {
    try {
      const res = await axios.post(
        `${BASE_URL}/account/reset-password/`,
        credentials
      );
    } catch (e) {
      notify(`${e.response.status}: ${e.response.statusText}`, "error");
    }
  }

  async function confirmResetPassword(credentials, code) {
    try {
      const res = await axios.post(
        `${BASE_URL}/account/reset-password/confirm/?c=${code}`,
        credentials
      );
      navigate("/auth");
    } catch (e) {
      notify(`${e.response.status}: ${e.response.statusText}`, "error");
    }
  }

  async function login(credentials) {
    try {
      const { data: tokens } = await axios.post(
        `${BASE_URL}/account/login/`,
        credentials
      );

      localStorage.setItem("tokens", JSON.stringify(tokens));

      const { data } = await $axios.get(`${BASE_URL}/account/profile/`);
      setUser(data);

      setUser(data);
    } catch (e) {
      notify(`${e.response.status}: ${e.response.statusText}`, "error");
    }
  }

  async function logout() {
    localStorage.removeItem("tokens");
    setUser(null);
  }

  async function checkAuth() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      if (tokens) {
        const { data } = await $axios.get(`${BASE_URL}/account/profile/`);
        setUser(data);
      } else {
        setUser(null);
      }
    } catch (e) {
      notify(`${e.response.status}: ${e.response.statusText}`, "error");
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function isAdmin() {
    if (!user) {
      return false;
    }

    return ADMIN.includes(user.email);
  }

  const value = {
    user,
    register,
    login,
    activateUser,
    logout,
    checkAuth,
    resetPassword,
    setOpen,
    open,
    handleClickOpen,
    handleClose,
    confirmResetPassword,
    isAdmin,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthContext;
