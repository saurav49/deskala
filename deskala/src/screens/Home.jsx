import { useState } from "react";
import { CreateCandidateModal } from "../components/index";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {showModal && <CreateCandidateModal setShowModal={setShowModal} />}
      <button
        onClick={() => setShowModal(true)}
        className="cursor-pointer text-sky-500 font-light text-sm"
      >
        + Add new candidate
      </button>
    </div>
  );
};

export { Home };
