import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  rate?: string;
  levelUp?: boolean;
  levelDown?: boolean;
  percentage?: string;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  percentage,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark ">
      <div>
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
          {children}
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-title-md font-bold text-black dark:text-white">
              {total}
            </h4>
            <span className="text-sm font-medium">{title}</span>
          </div>
        </div>
      </div>
      {percentage && (
        <div className="relative h-28 w-28">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1 -1 34 34"
            className="-rotate-90"
          >
            <circle
              cx="16"
              cy="16"
              r="15.9155"
              className="fill-none stroke-[#e2eff0] stroke-[1.8]"
            />

            <circle
              cx="16"
              cy="16"
              r="15.9155"
              className={`fill-none ${parseInt(percentage) >= 80 ? "stroke-green-400" : parseInt(percentage) < 30 ? "stroke-danger" : "stroke-warning"}`}
              style={{
                transition: `1s ease-in-out`,
              }}
              strokeDasharray="100 100"
              strokeDashoffset={`calc(100 - ${parseInt(percentage)})`}
              strokeLinecap="round"
              strokeWidth="1.8"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-black dark:text-white">
            <p>{percentage}%</p>
          </div>
        </div>


      )}
    </div>
  );
};

export default CardDataStats;
