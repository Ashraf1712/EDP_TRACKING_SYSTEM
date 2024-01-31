// TableRow.jsx
import React from "react";

function getCategoryColor(category) {
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
  return date ? new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }) : "";
}

function renderMultilineContent(content) {
  return (
    <div
      style={{
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        WebkitLineClamp: 3, // Adjust this value based on the number of lines you want to display
      }}
    >
      {content}
    </div>
  );
}

function renderContent(header, data) {
  const content = header.isHtml ? (
    <div dangerouslySetInnerHTML={{ __html: data[header.id] }} />
  ) : (
    <>
      {data[header.id]}<br />
    </>
  );

  return (
    <div>
      {header.isDate ? (
        <span>{formatDate(data[header.id] || "")}</span>
      ) : (
        <>
          {header.id === "competencyAddress" || header.id === "actionPlan"
            ? renderMultilineContent(content)
            : content}
          {header.badge && (
            <span className={`badge badge-ghost badge-sm text-white border-white ${getCategoryColor(data[header.badge])}`}>
              {data[header.badge]}
            </span>
          )}
        </>
      )}
    </div>
  );
}

function TableRow({ headers, data, href }) {
  return (
    <tr className="transition-colors duration-300 hover:bg-slate-50">
      {headers.map((header) => (
        <td
          key={header.id}
          className={`h-16 px-6 text-sm transition duration-300 border-t border-l ${header.id === headers[0].id ? "first:border-l-0" : ""
            } border-slate-200 stroke-slate-500 text-slate-500`}
        >
          <div>
            {href ? (
              <a href={href}>{renderContent(header, data)}</a>
            ) : (
              renderContent(header, data)
            )}
          </div>
        </td>
      ))}
    </tr>
  );
}

export default TableRow;
