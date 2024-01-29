import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table({ headers, rows }) {
  return (
    <table
      className="w-full text-left border border-separate rounded border-slate-200"
      cellSpacing="0"
    >
      <tbody>
        <TableHeader headers={headers} />
        {rows.map((rowData, rowIndex) => (
          <TableRow key={rowIndex} headers={headers} data={rowData} href={`/edpDetails/${rowData.edpID}`} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
