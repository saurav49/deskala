import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, Signup } from "./screens/index";

function App() {
  return (
    <div className="App">
      <h1 className="text-sky-500 text-lg font-bold">Deskala - Assignment</h1>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
