import { useState } from "react";
import { validateEmail, validatePassword, validatePhoneNumber } from "../utils";
import { useAuth } from "../hooks/useAuth";
import { TailSpin } from "react-loader-spinner";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({
    emailError: "",
    phoneError: "",
    passError: "",
  });

  const { handleSignup, authLoader } = useAuth();

  const handleUserCredentails = (email, phone, password) => {
    if (!validateEmail(email))
      return setError((prevState) => ({
        ...prevState,
        emailError: "Enter valid email id",
      }));
    if (!validatePhoneNumber(phone))
      return setError((prevState) => ({
        ...prevState,
        phoneError: "Enter valid Phone Number",
      }));
    if (!validatePassword(password))
      return setError((prevState) => ({
        ...prevState,
        passError:
          "Password should be contain at least One Uppercase , One lowercase, One Numeric, One Special Character",
      }));

    handleSignup(email, phone, password);

    setEmail("");
    setPassword("");
    setPhone("");
  };

  return (
    <div className="shadow-md rounded px-2 py-6 flex flex-col items-center justify-center w-[300px] transition duration-300 sm:w-[400px] bg-white">
      <h2 className="font-bold text-md my-4">Sign Up</h2>
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
      <div className="flex flex-col items-start mt-5">
        <label htmlFor="phone" className="font-bold text-sm mb-1">
          Phone Number
        </label>
        <input
          type="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="rounded p-2 border-2 border-gray-200"
          placeholder="enter your email id"
        />
        {error.phoneError && (
          <p className="text-xs text-red-500 italic">{error.phoneError}</p>
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
        onClick={() => handleUserCredentails(email, phone, password)}
      >
        {authLoader ? (
          <TailSpin color="#fff" height={23} width={120} />
        ) : (
          <span>Sign Up</span>
        )}
      </button>
    </div>
  );
};

export { Signup };
