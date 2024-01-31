// TableHeader.jsx
import React, { useState, useEffect } from "react";

function TableHeader({ headers, onSort }) {
  const [sorting, setSorting] = useState({ column: null, order: "asc" });

  const handleSort = (column) => {
    setSorting((prevSorting) => {
      const order = prevSorting.column === column && prevSorting.order === "asc" ? "desc" : "asc";
      return { column, order };
    });
  };

  useEffect(() => {
    onSort(sorting.column, sorting.order);
  }, [onSort, sorting.column, sorting.order]);

  return (
    <tr>
      {headers.map((header, index) => (
        <th
          key={header.id}
          id={header.id}
          className={`h-12 px-6 text-sm font-medium border-l ${index === 0 ? "first:border-l-0" : ""
            } border-slate-200 stroke-slate-700 text-slate-700 bg-slate-100 cursor-pointer`}
          onClick={() => handleSort(header.id)}
        >
          {header.header}
          {sorting.column === header.id && (
            <span className={`ml-1 ${sorting.order === "asc" ? "rotate-180" : ""}`}>▲▼</span>
          )}
        </th>
      ))}
    </tr>
  );
}

export default TableHeader;
