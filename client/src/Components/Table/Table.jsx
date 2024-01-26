import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table({ headers, rows, badge }) {
  return (
    <table
      className="w-full text-left border border-separate rounded border-slate-200"
      cellSpacing="0"
    >
      <tbody>
        <TableHeader headers={headers} />
        {rows.map((rowData, rowIndex) => (
          <TableRow key={rowIndex} badge={badge} headers={headers} data={rowData} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
