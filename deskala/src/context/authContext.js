import { createContext, useState } from "react";
import axios from "axios";
import { LOGIN_URL, SIGNUP_URL } from "../urls";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [authLoader, setAuthLoader] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (email, phone, password) => {
    try {
      setAuthLoader(true);
      const response = await axios.post(SIGNUP_URL, {
        phone,
        email,
        password,
      });
      if (response.data.success) {
        setCurrentEmail(response.data.savedUser.email);
        setToken(response.data.savedUser.token);
        localStorage.setItem(
          "deskala__token",
          JSON.stringify(response.data.token)
        );
        localStorage.setItem("deskala__email", response.data.savedUser.email);
        setAuthLoader(false);
      }
    } catch (error) {
      setAuthLoader(false);
      console.log({ error });
    }
  };

  const handleLogin = async (email, password) => {
    try {
      setAuthLoader(true);
      const response = await axios.post(LOGIN_URL, { email, password });
      if (response.data.success) {
        setCurrentEmail(response.data.savedUser.email);
        setToken(response.data.savedUser.token);
        localStorage.setItem(
          "deskala__token",
          JSON.stringify(response.data.token)
        );
        localStorage.setItem("deskala__email", response.data.savedUser.email);
        setAuthLoader(false);
      }
    } catch (error) {
      setAuthLoader(false);
      console.log({ error });
    }
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("edit_candidate_id");
    localStorage.removeItem("deskala__token");
    setTimeout(() => {
      navigate("/login");
    }, 3000);
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
        currentEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
