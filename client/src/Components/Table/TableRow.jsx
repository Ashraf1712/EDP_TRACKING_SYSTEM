import React from "react";

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function TableRow({ headers, data, badge }) {
  return (
    <tr className="transition-colors duration-300 hover:bg-slate-50">
      {headers.map((header) => (
        <td
          key={header.id}
          className={`h-12 px-6 text-sm transition duration-300 border-t border-l ${header.id === headers[0].id ? "first:border-l-0" : ""
            } border-slate-200 stroke-slate-500 text-slate-500`}
        >
          <div>
            {header.id === "competencyAddress" ? (
              <>
                <div>
                  {data[header.id]}
                  <div>
                    {data[badge[0]] && (
                      <span className="badge badge-ghost badge-sm">{data[badge[0]]}</span>
                    )}
                  </div>
                </div>

              </>
            ) : header.id === "actionPlan" ? (
              <>
                <div>
                  {data[header.id]}

                  <div>
                    {data[badge[1]] && (
                      <span className="badge badge-ghost badge-sm">{data[badge[1]]}</span>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                {header.isDate ? (
                  <span>{formatDate(data[header.id])}</span>
                ) : (
                  <div>{data[header.id]}</div>
                )}
              </>
            )}
          </div>
        </td>
      ))}
    </tr>
  );
}

export default TableRow;
