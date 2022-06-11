import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="px-4 py-4 pl-6 bg-slate-700 w-screen shadow-md flex items-center justify-between">
      <h1
        onClick={() => navigate("/")}
        className="text-white text-3xl italic font-bold cursor-pointer"
      >
        Deskala
      </h1>
      <button
        className="py-2 px-4 text-white bg-red-500 mt-6 mb-4 rounded"
        onClick={() => handleLogout()}
      >
        log out
      </button>
    </div>
  );
};

export { Navbar };
