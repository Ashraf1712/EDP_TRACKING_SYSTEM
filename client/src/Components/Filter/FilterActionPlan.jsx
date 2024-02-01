import React, { useState } from 'react';

export default function FilterActionPlan({ onFilterActionPlanChange }) {
    const [filterText, setFilterText] = useState('');

    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
    };

    const handleFilterApply = () => {
        onFilterActionPlanChange(filterText);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            // Trigger filter when Enter key is pressed
            handleFilterApply();
        }
    };

    return (
        <div>
            <label htmlFor="actionPlanInput">Filter by Action Plan:</label>
            <input
                type="text"
                id="actionPlanInput"
                value={filterText}
                onChange={handleFilterChange}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleFilterApply}>Filter</button>
        </div>
    );
}
