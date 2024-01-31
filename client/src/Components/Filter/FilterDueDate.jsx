import React, { useState } from 'react';

export default function FilterDueDate({ dueDates, onYearChange }) {
    const [selectedYear, setSelectedYear] = useState('');

    const handleYearChange = (e) => {
        const year = e.target.value;
        setSelectedYear(year);
        onYearChange(year);
    };

    const uniqueYears = dueDates
        ? Array.from(new Set(dueDates.map(date => new Date(date).getFullYear())))
        : [];

    return (
        <div>
            <label htmlFor="yearDropdown">Filter by Year:</label>
            <select
                id="yearDropdown"
                value={selectedYear}
                onChange={handleYearChange}
            >
                <option value="">All Years</option>
                {uniqueYears.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>
    );
}
