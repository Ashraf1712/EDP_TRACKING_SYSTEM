import React, { useState, useEffect } from 'react';
import { COMPETENCY_CLUSTER } from '../../App/constants';

export default function FilterCompetencyCluster({ onCompetencyClusterChange }) {
    const [selectedCompetencyClusters, setSelectedCompetencyClusters] = useState([]);

    useEffect(() => {
        // This effect will run whenever selectedCompetencyClusters changes
        onCompetencyClusterChange(selectedCompetencyClusters);
    }, [selectedCompetencyClusters, onCompetencyClusterChange]);

    const handleCompetencyClusterChange = (cluster) => {
        setSelectedCompetencyClusters((prevSelected) => {
            const isSelected = prevSelected.includes(cluster);

            if (isSelected) {
                return prevSelected.filter((selected) => selected !== cluster);
            } else {
                return [...prevSelected, cluster];
            }
        });
    };

    return (
        <div>
            <label>Filter by Competency Cluster:</label>
            {COMPETENCY_CLUSTER.map((item) => (
                <div key={item}>
                    <input
                        type="checkbox"
                        id={item}
                        value={item}
                        checked={selectedCompetencyClusters.includes(item)}
                        onChange={() => handleCompetencyClusterChange(item)}
                    />
                    <label htmlFor={item}>{item}</label>
                </div>
            ))}
        </div>
    );
}
