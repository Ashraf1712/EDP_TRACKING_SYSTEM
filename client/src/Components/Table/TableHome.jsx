import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import FilterReferenceNo from "../Filter/FilterReferenceNo";
import FilterDueDate from "../Filter/FilterDueDate";
import FilterStatus from "../Filter/FilterStatus";

function TableHome({ headers, rows, dueDatesInYear }) {
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortingOrder, setSortingOrder] = useState("asc");
  const [selectedYear, setSelectedYear] = useState('');
  const [referenceNoFilter, setReferenceNoFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const handleSort = (column, order) => {
    setSortedColumn(column);
    setSortingOrder(order);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handleReferenceNoFilterChange = (text) => {
    setReferenceNoFilter(text);
  };

  const handleStatusFilterChange = (status) => {
    setStatusFilter(status);
  };

  const filteredRows = rows.filter((rowData) => {
    const year = new Date(rowData.dueDate).getFullYear().toString();
    const referenceNo = rowData.edpID.toLowerCase();
    const filterText = referenceNoFilter.toLowerCase();
    const status = rowData.status;

    return (
      (selectedYear === "" || year === selectedYear) &&
      (referenceNo.includes(filterText)) &&
      (statusFilter === "" || status === statusFilter)
    );
  });

  const sortedRows = [...filteredRows].sort((a, b) => {
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
    <div>
      <FilterDueDate dueDates={dueDatesInYear} onYearChange={handleYearChange} />
      <FilterReferenceNo onFilterChange={handleReferenceNoFilterChange} />
      <FilterStatus onStatusChange={handleStatusFilterChange} /> {/* Add FilterStatus component here */}

      <table
        className="w-full text-left border border-separate rounded border-slate-200"
        cellSpacing="0"
      >
        <tbody>
          <TableHeader headers={headers} onSort={handleSort} />
          {sortedRows.map((rowData, rowIndex) => (
            <TableRow
              key={rowIndex}
              headers={headers}
              data={rowData}
              href={`/edpDetails/${rowData.edpID}`}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableHome;
