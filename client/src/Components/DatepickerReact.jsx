import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatepickerReact = ({ onDateChange, dateValue }) => {

  const initialDate = dateValue
    ? new Date(dateValue) // Convert string to Date object
    : new Date();
  const [value, setValue] = useState({
    startDate: initialDate.toISOString().split('T')[0], // Extract date part
  });

  console.log("dateValue:", value.startDate);

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
    onDateChange(newValue.startDate);
  };

  return (
    <Datepicker
      useRange={false}
      asSingle={true}
      value={new Date("2024-01-29")}
      onChange={handleValueChange}
      placeholder="Select a date"
      displayFormat="DD/MM/YYYY"
    />
  );
};

export default DatepickerReact;
