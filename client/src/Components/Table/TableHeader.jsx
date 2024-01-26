import React from "react";

function TableHeader({ headers }) {
  return (
    <tr>
      {headers.map((header, index) => (
        <th
          key={index}
          className={`h-12 px-6 text-sm font-medium border-l ${
            index === 0 ? "first:border-l-0" : ""
          } border-slate-200 stroke-slate-700 text-slate-700 bg-slate-100`}
        >
          {header}
        </th>
      ))}
    </tr>
  );
}

export default TableHeader;
