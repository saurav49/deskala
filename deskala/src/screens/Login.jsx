import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({
    emailError: "",
    passError: "",
  });

  const handleLogin = () => {};

  return (
    <div className="shadow-md rounded px-2 py-6 flex flex-col items-center justify-center w-[300px] transition duration-300 sm:w-[400px] bg-white">
      <h2 className="font-bold text-md my-4">Login</h2>
      <div className="flex flex-col items-start mt-5">
        <label htmlFor="email" className="font-bold text-sm mb-1">
          Email id
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded p-2 border-2 border-gray-200"
          placeholder="enter your email id"
        />
        {error.emailError && (
          <p className="text-xs text-red-500 italic">{error.emailError}</p>
        )}
      </div>
      <div className="flex flex-col items-start mt-5 mb-7 relative">
        <label htmlFor="password" className="font-bold text-sm mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded p-2 border-2 border-gray-200"
          placeholder="enter your email id"
        />
        <p className="text-xs text-sky-500 absolute -bottom-5 right-0 font-semibold">
          minimum 8 Alpha Numeric character
        </p>
        {error.passError && (
          <p className="text-xs text-red-500 italic">{error.passError}</p>
        )}
      </div>
      <button
        className="py-4 px-10 text-white bg-sky-500 mt-6 mb-4 rounded"
        onClick={() => handleLogin()}
      >
        Login
      </button>
    </div>
  );
};

export { Login };
