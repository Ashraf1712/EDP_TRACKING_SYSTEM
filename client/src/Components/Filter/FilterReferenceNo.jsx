import React, { useState } from 'react';

export default function FilterReferenceNo({ onFilterChange }) {
    const [filterText, setFilterText] = useState('');

    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
    };

    const handleFilterApply = () => {
        onFilterChange(filterText);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            // Trigger filter when Enter key is pressed
            handleFilterApply();
        }
    };

    return (
        <div>
            <label htmlFor="referenceNoInput">Filter by Reference No:</label>
            <input
                type="text"
                id="referenceNoInput"
                value={filterText}
                onChange={handleFilterChange}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleFilterApply}>Filter</button>
        </div>
    );
}
