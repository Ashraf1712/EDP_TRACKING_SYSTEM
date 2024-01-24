import React, { useState } from "react";

const TextareaInput = ({ label, onChangeData }) => {
  const handleTextAreaChange = (e) => {
    // Replace newline characters with <br> tags
    const formattedText = e.target.value.replace(/\n/g, "<br>");

    // Set the formatted value in state
    onChangeData(formattedText);
  };

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <p className="text-m font-medium">{label}</p>
      <textarea
        className="textarea textarea-primary w-full"
        placeholder={label}
        onChange={handleTextAreaChange}
        required=""
      ></textarea>
    </div>
  );
};

export default TextareaInput;
