import React, { useState, useEffect } from "react";

function TableHeader({ headers, onSort, filterComponents }) {
  const [sorting, setSorting] = useState({ column: null, order: "asc" });
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleSort = (column) => {
    setSorting((prevSorting) => {
      const order =
        prevSorting.column === column && prevSorting.order === "asc"
          ? "desc"
          : "asc";
      return { column, order };
    });
  };

  useEffect(() => {
    onSort(sorting.column, sorting.order);
  }, [onSort, sorting.column, sorting.order]);

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <tr>
      {headers.map((header, index) => (
        <th
          key={header.id}
          id={header.id}
          className={`h-12 px-6 text-sm font-medium border-l ${
            index === 0 ? "first:border-l-0" : ""
          } border-slate-200 stroke-slate-700 text-slate-700 bg-slate-100 cursor-pointer relative`}
          onClick={() => handleSort(header.id)}
        >
          {header.header}
          {sorting.column === header.id && (
            <span
              className={`ml-1 ${sorting.order === "asc" ? "rotate-180" : ""}`}
            >
              ▲▼
            </span>
          )}
          {/* Button to toggle filter visibility */}
          <button
            className="absolute right-0 top-0 h-full px-3 text-slate-700 hover:bg-slate-200 focus:outline-none"
            onClick={toggleFilterVisibility}
          >
            {isFilterVisible ? "Hide Filter" : "Show Filter"}
          </button>
          {/* Filter component */}
          {isFilterVisible &&
            filterComponents[header.id] &&
            filterComponents[header.id]}
        </th>
      ))}
    </tr>
  );
}

export default TableHeader;
