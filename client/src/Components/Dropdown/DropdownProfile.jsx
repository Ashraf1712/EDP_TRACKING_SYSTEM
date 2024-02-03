import React from "react";

const DropdownProfile = ({ data, labelText, valueKey, textKey, onChange, value }) => {

    return (
        <select
            id="small"
            onChange={onChange}
            className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={value}
        >
            <option value="" disabled>
                {labelText}
            </option>
            {data.map((item) => (
                <option key={item[valueKey]} value={item[valueKey]}>
                    {item[textKey]}
                </option>
            ))}
        </select>
    );
};

export default DropdownProfile;
