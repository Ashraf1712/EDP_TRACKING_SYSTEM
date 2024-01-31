import { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function TableDisplay({ headers, rows }) {
    const [sortedColumn, setSortedColumn] = useState(null);
    const [sortingOrder, setSortingOrder] = useState("asc");

    const handleSort = (column, order) => {
        setSortedColumn(column);
        setSortingOrder(order);
    };

    const sortedRows = [...rows].sort((a, b) => {
        const aValue = a[sortedColumn];
        const bValue = b[sortedColumn];

        if (aValue === undefined || aValue === null) {
            return sortingOrder === "asc" ? -1 : 1;
        }

        if (bValue === undefined || bValue === null) {
            return sortingOrder === "asc" ? 1 : -1;
        }

        if (sortingOrder === "asc") {
            return aValue.localeCompare(bValue);
        } else {
            return bValue.localeCompare(aValue);
        }
    });

    return (
        <table
            className="w-full text-left border border-separate rounded border-slate-200"
            cellSpacing="0"
        >
            <tbody>
                <TableHeader headers={headers} onSort={handleSort} />
                {sortedRows.map((rowData, rowIndex) => (
                    <TableRow key={rowIndex} headers={headers} data={rowData} />
                ))}
            </tbody>
        </table>
    );
}

export default TableDisplay;
