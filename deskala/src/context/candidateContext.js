import { createContext, useState } from "react";
import axios from "axios";
import { CANDIDATE_URL } from "../urls";

export const CandidateContext = createContext();

export const CandidateProvider = ({ children }) => {
  const [allCandidate, setAllCandidate] = useState([]);
  const [candidateLoader, setCandidateLoader] = useState(false);

  const getAllCandidates = async () => {
    try {
      setCandidateLoader(true);
      const response = await axios.get(`${CANDIDATE_URL}/`);
      setAllCandidate(response.data.allCandidates);
      setCandidateLoader(false);
    } catch (error) {
      console.log({ error });
      setCandidateLoader(false);
    }
  };

  const createNewCandidate = async (
    state,
    pincode,
    dob,
    age,
    address,
    name
  ) => {
    try {
      setCandidateLoader(true);
      console.log("here");
      const response = await axios.post(`${CANDIDATE_URL}/`, {
        state,
        pincode,
        dob,
        age,
        address,
        name,
      });
      setAllCandidate((prevState) => [
        ...prevState,
        response.data.saveNewCandidate,
      ]);
      setCandidateLoader(false);
    } catch (error) {
      console.log({ error });
      setCandidateLoader(false);
    }
  };

  const editCandidate = async (id, reqdCandidate) => {
    try {
      const response = await axios.post(`${CANDIDATE_URL}/${id}`, {
        reqdCandidate,
      });
      setAllCandidate((prevState) =>
        prevState.map((c) =>
          c._id === response.data.id ? { ...response.data.updatedDoc } : c
        )
      );
      localStorage.removeItem("edit_candidate_id");
    } catch (error) {
      console.log({ error });
      setCandidateLoader(false);
    }
  };

  const deleteCandidate = async (id) => {
    try {
      const response = await axios.delete(`${CANDIDATE_URL}/${id}`);
      setAllCandidate((prevState) =>
        prevState.filter((c) => c._id !== response.data.id)
      );
    } catch (error) {
      console.log({ error });
      setCandidateLoader(false);
    }
  };

  return (
    <CandidateContext.Provider
      value={{
        candidateLoader,
        setCandidateLoader,
        getAllCandidates,
        createNewCandidate,
        editCandidate,
        deleteCandidate,
        allCandidate,
        setAllCandidate,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
};
