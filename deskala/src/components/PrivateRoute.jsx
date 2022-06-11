import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ path }) => {
  let { token } = useAuth();

  if (!token) {
    if (localStorage.getItem("deskala__token")) {
      token = localStorage.getItem("deskala__token");
    }
  }

  console.log({ token });
  if (token.length > 0) {
    return <Outlet />;
  }

  return <Navigate state={{ from: path }} replace to="/login" />;
};

export { PrivateRoute };
