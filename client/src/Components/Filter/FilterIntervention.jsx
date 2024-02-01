import React, { useState, useEffect } from 'react';
import { INTERVENTION } from '../../App/constants'; // Change from ACTION_PLAN to INTERVENTION

export default function FilterIntervention({ onInterventionChange }) {
    const [selectedInterventions, setSelectedInterventions] = useState([]);

    useEffect(() => {
        // This effect will run whenever selectedInterventions changes
        onInterventionChange(selectedInterventions);
    }, [selectedInterventions, onInterventionChange]);

    const handleInterventionChange = (intervention) => {
        setSelectedInterventions((prevSelected) => {
            const isSelected = prevSelected.includes(intervention);

            if (isSelected) {
                return prevSelected.filter((selected) => selected !== intervention);
            } else {
                return [...prevSelected, intervention];
            }
        });
    };

    return (
        <div>
            <label>Filter by Intervention:</label>
            {INTERVENTION.map((item) => (
                <div key={item}>
                    <input
                        type="checkbox"
                        id={item}
                        value={item}
                        checked={selectedInterventions.includes(item)}
                        onChange={() => handleInterventionChange(item)}
                    />
                    <label htmlFor={item}>{item}</label>
                </div>
            ))}
        </div>
    );
}
