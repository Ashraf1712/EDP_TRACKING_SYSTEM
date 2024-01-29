import React from "react";
import * as constant from "../App/constants";

const Dropdown = ({ constantName, labelText, onChange, value }) => {
  let options = constant[constantName];

  return (
    <select
      id="small"
      onChange={onChange}
      className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      value={value ? value : labelText}
    >
      <option selected disabled>
        {labelText}
      </option>
      {options.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
