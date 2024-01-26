import React from "react";

function TableRow({ data }) {
  return (
    <tr className="transition-colors duration-300 hover:bg-slate-50">
      {Object.values(data).map((item, index) => (
        <td
          key={index}
          className={`h-12 px-6 text-sm transition duration-300 border-t border-l ${
            index === 0 ? "first:border-l-0" : ""
          } border-slate-200 stroke-slate-500 text-slate-500`}
        >
          {typeof item === "object" ? (
            <div>
              <div>{item.label}</div>
              <span className="badge badge-ghost badge-sm">{item.badge}</span>
            </div>
          ) : (
            item
          )}
        </td>
      ))}
    </tr>
  );
}

export default TableRow;
