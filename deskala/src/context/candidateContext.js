import { createContext, useState } from "react";
import axios from "axios";
import { CANDIDATE_URL } from "../urls";

export const CandidateContext = createContext();

export const CandidateProvider = ({ children }) => {
  const [allCandiate, setAllCandiate] = useState([]);
  const [candidateLoader, setCandidateLoader] = useState(false);

  const getAllCandidates = async () => {
    try {
    } catch (error) {}
  };

  const createNewCandidate = async () => {
    try {
    } catch (error) {}
  };

  const editCandidate = async () => {
    try {
    } catch (error) {}
  };

  const deleteCandidate = async () => {
    try {
    } catch (error) {}
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
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
};
