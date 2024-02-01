import React, { useState, useEffect } from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

const DatepickerReact = ({ onDateChange, dateValue }) => {
  const initialDate = dateValue ? dayjs(dateValue, { format: 'YYYY-MM-DD' }) : null;
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const onChange = (date, dateString) => {
    if (date) {
      setSelectedDate(dayjs(date));
      onDateChange(dayjs(date).format('YYYY-MM-DD'));
    } else {
      setSelectedDate(null);
      onDateChange(null); // Notify that the date is cleared
    }
  };

  // This useEffect will update the selected date when dateValue changes externally
  useEffect(() => {
    setSelectedDate(dateValue ? dayjs(dateValue, { format: 'YYYY-MM-DD' }) : null);
  }, [dateValue]);

  return (
    <DatePicker
      onChange={onChange}
      placeholder={'Select a date'}
      format="DD/MM/YYYY"
      value={selectedDate} // Use undefined to clear the DatePicker
      parse={(str, format) => dayjs(str, { format, locale: 'en' })}
    />
  );
};

export default DatepickerReact;
