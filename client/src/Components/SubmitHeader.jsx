import React from "react";
import { useNavigate } from "react-router-dom";


function SubmitHeader({ onSubmit, onDelete }) {

  const navigate = useNavigate();
  const onCancel = () => {
    navigate('/');
  }
  return (
    <div className="bg-petronas-purple fixed top-16 w-full z-40 h-10 flex justify-end items-center gap-2 px-4">
      {/* TODO: ONLY ADMIN CAN DELETE */}
      <button
        onClick={onDelete}
        className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm text-white bg-red-500 hover:bg-red-600 border-white"
      >
        Delete
      </button>

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
