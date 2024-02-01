import React, { useState } from 'react';
import { MANAGER_STATUS } from '../../App/constants';

export default function FilterStatus({ onStatusChange }) {
    const [selectedStatus, setSelectedStatus] = useState('');

    const handleStatusChange = (e) => {
        const status = e.target.value;
        setSelectedStatus(status);
        onStatusChange(status); // Call the onStatusChange callback with the selected status
    }

    return (
        <div>
            <label htmlFor="statusDropdown">Filter by Status:</label>
            <select
                id="statusDropdown"
                value={selectedStatus}
                onChange={handleStatusChange}
            >
                <option value="">All Status</option>
                {MANAGER_STATUS.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}
