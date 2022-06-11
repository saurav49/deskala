import { useState } from "react";

const CreateCandidateModal = ({ setShowModal }) => {
  const allState = [
    "Andhra Pradesh",
    "Assam",
    "Goa",
    "Karnataka",
    "Kerala",
    "Maharashtra",
    "Bihar",
    "Gujarat",
    "Haryana",
    "Manipur",
    "Tamil Nadu",
  ];
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [state, setState] = useState("");
  const [age, setAge] = useState("");
  const [pincode, setPincode] = useState("");

  const [error, setError] = useState({
    nameErr: "",
    addrErr: "",
    dobErr: "",
    stateErr: "",
    ageErr: "",
    pinErr: "",
  });

  const handleCandidateCreation = () => {
    if (name.length === 0) {
      setError((prevState) => ({
        ...prevState,
        nameErr: "name cannot be empty",
      }));
      return;
    }
    if (address.length === 0) {
      setError((prevState) => ({
        ...prevState,
        addrErr: "Address cannot be empty",
      }));
      return;
    }
    if (dob.length === 0) {
      setError((prevState) => ({
        ...prevState,
        dobErr: "DOB cannot be empty",
      }));
      return;
    }
    if (state.length === 0) {
      setError((prevState) => ({
        ...prevState,
        stateErr: "name cannot be empty",
      }));
      return;
    }
    if (age.length === 0) {
      setError((prevState) => ({
        ...prevState,
        ageErr: "Age cannot be empty",
      }));
      return;
    }
    if (pincode.length === 0) {
      setError((prevState) => ({
        ...prevState,
        pinErr: "name cannot be empty",
      }));
      return;
    }
  };

  return (
    <div className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-slate-900/80">
      <div className="flex items-start flex-col w-[80%] bg-white text-slate-900 rounded-md shadow-md py-4 px-6 absolute">
        <p className="text-center text-xl font-bold my-2 ml-16">
          Create a Collection
        </p>
        <div className="flex items-start flex-col w-full my-2">
          <div className="w-full flex items-center justify-around">
            <div className="flex flex-col items-start mt-5">
              <label htmlFor="name" className="font-bold text-sm mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded p-2 border-2 border-gray-200"
                placeholder="enter your name"
              />
              {error.name && (
                <p className="text-xs text-red-500 italic">{error.name}</p>
              )}
            </div>
            <div className="flex flex-col items-start mt-5">
              <label htmlFor="address" className="font-bold text-sm mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="rounded p-2 border-2 border-gray-200"
                placeholder="enter your address"
              />
              {error.addrErr && (
                <p className="text-xs text-red-500 italic">{error.addrErr}</p>
              )}
            </div>
          </div>

          <div className="w-full flex items-center justify-around">
            <div className="flex flex-col items-start mt-5">
              <label htmlFor="dob" className="font-bold text-sm mb-1">
                Date of Birth
              </label>
              <input
                type="text"
                name="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="rounded p-2 border-2 border-gray-200"
                placeholder="enter your Date of Birth"
              />
              {error.dobErr && (
                <p className="text-xs text-red-500 italic">{error.dobErr}</p>
              )}
            </div>
            <div className="flex flex-col items-start mt-5">
              <label htmlFor="state" className="font-bold text-sm mb-1">
                State
              </label>
              <select
                name="state"
                id="state"
                value={state}
                className={styles.address__input}
                onChange={(e) => setState(e.target.value)}
              >
                {allState.map((value, index) => {
                  return (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  );
                })}
              </select>
              {/* <input
                type="text"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="rounded p-2 border-2 border-gray-200"
                placeholder="Select your state"
              /> */}
              {error.stateErr && (
                <p className="text-xs text-red-500 italic">{error.stateErr}</p>
              )}
            </div>
          </div>
          <div className="w-full flex items-center justify-around">
            <div className="flex flex-col items-start mt-5">
              <label htmlFor="age" className="font-bold text-sm mb-1">
                Age
              </label>
              <input
                type="text"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="rounded p-2 border-2 border-gray-200"
                placeholder="enter your age"
              />
              {error.ageErr && (
                <p className="text-xs text-red-500 italic">{error.ageErr}</p>
              )}
            </div>
            <div className="flex flex-col items-start mt-5">
              <label htmlFor="pincode" className="font-bold text-sm mb-1">
                Pin Code
              </label>
              <input
                type="text"
                name="pin"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="rounded p-2 border-2 border-gray-200"
                placeholder="enter your 6-digit pin code"
              />
              {error.pinErr && (
                <p className="text-xs text-red-500 italic">{error.pinErr}</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-end w-100 mt-4">
          <button
            className="py-4 px-10 text-black bg-2 border-2 border-sky-500 bg-white mt-6 mb-4 rounded mr-4"
            onClick={() => setShowModal(false)}
          >
            cancel
          </button>
          <button
            className="py-4 px-10 text-white border-2 border-sky-500 bg-sky-500 mt-6 mb-4 rounded"
            onClick={handleCandidateCreation}
          >
            <span>Create</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { CreateCandidateModal };
