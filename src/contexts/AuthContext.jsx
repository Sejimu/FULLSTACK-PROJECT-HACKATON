import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../utils/consts";
import $axios from "../utils/axios";
import { useNavigate } from "react-router-dom";

const authContext = createContext();

export function useAuthContext() {
  return useContext(authContext);
}

function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  async function register(credentials) {
    try {
      const res = await axios.post(
        `${BASE_URL}/account/register/`,
        credentials
      );
      console.log("res" + res);
    } catch (e) {
      console.log(e);
    }
  }

  async function activateUser(code) {
    try {
      const res = await $axios.post(`${BASE_URL}/account/activate/`, {
        activation_code: code,
      });
      console.log(res);
      navigate("/auth");

    } catch (e) {
      console.log(e);
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

      console.log(data);

      setUser(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function logout() {
    localStorage.removeItem("tokens");
    setUser(null);
  }

  const value = { user, register, login, activateUser, logout };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthContext;
