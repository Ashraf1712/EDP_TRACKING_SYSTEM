import React from "react";

function SubmitHeader({ onSubmit }) {
  const handleSubmitClick = async (e) => {
    if (onSubmit) {
      e.preventDefault();
      await onSubmit();
    }
  };

  return (
    <div className="bg-petronas-purple fixed top-16 w-full z-40 h-10 flex justify-end items-center gap-2 px-4">
      <button className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm text-white">
        Cancel
      </button>
      <button
        onClick={(e) => handleSubmitClick(e)}
        className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm text-white"
      >
        Submit
      </button>
    </div>
  );
}

export default SubmitHeader;
