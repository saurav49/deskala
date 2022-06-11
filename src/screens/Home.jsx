import { useState, useEffect } from "react";
import { CreateCandidateModal } from "../components/index";
import { useCandidate } from "../hooks/useCandidate";
import { useAuth } from "../hooks/useAuth";
import { RiDeleteBin6Line, RiPencilLine } from "../Icons/Icons";
import axios from "axios";
import { CANDIDATE_URL } from "../urls";

const Home = () => {
  const { getAllCandidates, allCandidate, deleteCandidate, setAllCandidate } =
    useCandidate();
  const { currentEmail } = useAuth();
  const [status, setStatus] = useState("");
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    getAllCandidates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.post(
          `${CANDIDATE_URL}/changestatus/${currentId}`,
          { status }
        );
        setAllCandidate((prevState) =>
          prevState.map((c) =>
            c._id === response.data.id
              ? { ...c, status: response.data.status }
              : { ...c }
          )
        );
      } catch (err) {
        console.log(err);
      }
    })();
  }, [status, currentId, setAllCandidate]);

  const handleChangeStatus = (e, id) => {
    setStatus(e.target.value);
    setCurrentId(id);
  };

  console.log(allCandidate);

  const [showModal, setShowModal] = useState(false);

  const handleEdit = (id) => {
    setShowModal(true);
    localStorage.setItem("edit_candidate_id", JSON.stringify(id));
  };

  const handleAddNewCandidate = () => {
    localStorage.removeItem("edit_candidate_id");
    setShowModal(true);
  };

  return (
    <div>
      {showModal && <CreateCandidateModal setShowModal={setShowModal} />}
      {allCandidate && Array.isArray(allCandidate) && allCandidate.length > 0 && (
        <table className="border-2 border-gray-200 w:[300px] sm:w-[800px] bg-white shadow-md">
          <tr>
            <th className="border-b-2 border-gray-300 py-2">Name</th>
            <th className="border-b-2 border-gray-300 py-2">Date of Birth</th>
            <th className="border-b-2 border-gray-300 py-2">Email</th>
            <th className="border-b-2 border-gray-300 py-2">Result</th>
          </tr>
          {allCandidate.map((candidate) => {
            return (
              <tr key={candidate._id}>
                <td className="text-center py-2">{candidate.name}</td>
                <td className="text-center py-2">{candidate.dob}</td>
                <td className="text-center py-2">
                  {currentEmail || localStorage.getItem("deskala__email")}
                </td>
                <td className="text-center py-2 flex items-center justify-around">
                  <select
                    name="state"
                    id="state"
                    value={status}
                    className="rounded py-2 px-12 border-2 border-gray-200"
                    onChange={(e) => handleChangeStatus(e, candidate._id)}
                  >
                    <option value={candidate.status}>{candidate.status}</option>

                    {candidate.status === "Shortlist" ? (
                      <option value="Rejected">Rejected</option>
                    ) : (
                      <option value="Shortlist">Shortlist</option>
                    )}
                  </select>
                  <button onClick={() => handleEdit(candidate._id)}>
                    <RiPencilLine />
                  </button>

                  <button onClick={() => deleteCandidate(candidate._id)}>
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      )}
      <button
        onClick={() => handleAddNewCandidate()}
        className="cursor-pointer text-sky-500 font-light text-sm"
      >
        + Add new candidate
      </button>
    </div>
  );
};

export { Home };
