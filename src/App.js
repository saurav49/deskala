import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, Signup, Home } from "./screens/index";
import { PrivateRoute, Navbar } from "./components/index";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center pt-6 bg-gray-100 w-screen min-h-screen">
        <h1 className="text-sky-500 text-lg font-bold mb-5">
          Deskala - Assignment
        </h1>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
