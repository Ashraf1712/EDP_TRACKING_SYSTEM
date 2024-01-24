import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatepickerReact = ({ onDateChange }) => {
  const [value, setValue] = useState({
    startDate: new Date(),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
    onDateChange(newValue.startDate);
  };

  return (
    <Datepicker
      useRange={false}
      asSingle={true}
      value={value}
      onChange={handleValueChange}
    />
  );
};

export default DatepickerReact;
