import React from "react";

function SubmitHeader({ onSubmit }) {
  const handleSubmitClick = async () => {
    if (onSubmit) {
      await onSubmit();
    }
  };

  return (
    <div className="bg-petronas-purple fixed top-16 w-full z-50 h-10 flex justify-end items-center gap-2 px-4">
      <button className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm text-white">
        Cancel
      </button>
      <button
        onClick={handleSubmitClick}
        className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm text-white"
      >
        Submit
      </button>
    </div>
  );
}

export default SubmitHeader;
