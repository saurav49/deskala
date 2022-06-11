import { useContext } from "react";
import { CandidateContext } from "../context/candidateContext";

export const useCandidate = () => useContext(CandidateContext);
