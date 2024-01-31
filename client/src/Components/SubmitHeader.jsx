import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PopupMessage from "./PopupMessage";  // Import PopupMessage

function SubmitHeader({ onSubmit, deleteEDPID }) {
  const navigate = useNavigate();
  const location = useLocation();

  const onDeleteSuccess = () => {
    // Handle deletion success, e.g., navigate or refresh data
    navigate('/');
  };

  const onCancel = () => {
    navigate('/');
  };

  // Check if the current path is the Add page
  const isAddPage = location.pathname === "/edp-add"; // Adjust the path accordingly

  return (
    <div className={`fixed bg-petronas-purple top-16 w-full z-40 h-10 flex justify-end items-center gap-2 px-4 ${isAddPage ? 'add-page-header' : ''}`}>
      {/* TODO: ONLY ADMIN CAN DELETE */}
      {!isAddPage && <PopupMessage edpID={deleteEDPID} onDeleteSuccess={onDeleteSuccess} />}

      <button onClick={onCancel} className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm text-white">
        Cancel
      </button>
      <button
        onClick={onSubmit}
        className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm text-white"
      >
        Submit
      </button>
    </div>
  );
}

export default SubmitHeader;
