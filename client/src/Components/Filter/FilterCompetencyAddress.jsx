import React, { useState } from 'react';

export default function FilterCompetencyAddress({ onFilterCompetencyAddressChange }) {
    const [filterText, setFilterText] = useState('');

    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
    };

    const handleFilterApply = () => {
        onFilterCompetencyAddressChange(filterText);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            // Trigger filter when Enter key is pressed
            handleFilterApply();
        }
    };

    return (
        <div>
            <label htmlFor="competencyAddressInput">Filter by Competency Address:</label>
            <input
                type="text"
                id="competencyAddressInput"
                value={filterText}
                onChange={handleFilterChange}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleFilterApply}>Filter</button>
        </div>
    );
}
