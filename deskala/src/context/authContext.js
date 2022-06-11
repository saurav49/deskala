import { createContext, useState } from "react";
import axios from "axios";
import { LOGIN_URL, SIGNUP_URL } from "../urls";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [authLoader, setAuthLoader] = useState(false);

  const handleSignup = async (email, phone, password) => {
    try {
      setAuthLoader(true);
      const response = await axios.post(SIGNUP_URL, {
        phone,
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.savedUser.token);
        localStorage.setItem(
          "deskala__token",
          JSON.stringify(response.data.token)
        );
        setAuthLoader(false);
      }
    } catch (error) {
      setAuthLoader(false);
      console.log({ error });
    }
  };

  const handleLogin = async (email, password) => {
    try {
      setLoginFail(false);
      setAuthLoader(true);
      const response = await axios.post(LOGIN_URL, { email, password });
      if (response.data.success) {
        setToken(response.data.savedUser.token);
        localStorage.setItem(
          "deskala__token",
          JSON.stringify(response.data.token)
        );
        setAuthLoader(false);
      }
    } catch (error) {
      setAuthLoader(false);
      console.log({ error });
    }
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("deskala__name");
    localStorage.removeItem("deskala__token");
  };

  return (
    <AuthContext.Provider
      value={{
        handleSignup,
        handleLogin,
        handleLogout,
        token,
        setToken,
        authLoader,
        setAuthLoader,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
