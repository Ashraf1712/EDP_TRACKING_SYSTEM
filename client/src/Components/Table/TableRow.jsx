import React from "react";

function getCategoryColor(category) {
  // You can define your own logic to assign colors based on the category
  // For simplicity, let's alternate between two colors for COMPETENCY_CLUSTER
  // and use a different set of colors for INTERVENTION
  const colorMap = {
    Leadership: 'bg-blue-500',
    Functional: 'bg-green-500',
    HSE: 'bg-yellow-500',
    Technical: 'bg-purple-500',
    Others: 'bg-gray-500',
    Training: 'bg-orange-500',
    'Experiential learning': 'bg-pink-500',
    Coaching: 'bg-red-500',
    'Others (Intervention)': 'bg-teal-500',
  };

  return colorMap[category] || 'bg-gray-500';
}


function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function TableRow({ headers, data }) {
  return (
    <tr className="transition-colors duration-300 hover:bg-slate-50">
      {headers.map((header) => (
        <td
          key={header.id}
          className={`h-12 px-6 text-sm transition duration-300 border-t border-l ${header.id === headers[0].id ? "first:border-l-0" : ""
            } border-slate-200 stroke-slate-500 text-slate-500`}
        >
          <>
            {header.isDate ? (
              <span>{formatDate(data[header.id])}</span>
            ) : (
              <div>
                {data[header.id]}<br></br>
                {header.badge && (
                  <span className={`badge badge-ghost badge-sm text-white border-white ${getCategoryColor(data[header.badge])}`}>
                    {data[header.badge]}
                  </span>
                )}
              </div>
            )}
          </>
        </td>
      ))}
    </tr>
  );
}

export default TableRow;
