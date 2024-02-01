import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const CountCard = ({ header, finalCount, isPercentage }) => {
  const [count, setCount] = useState(0);
  const [colorClass, setColorClass] = useState('');

  useEffect(() => {
    let duration = 2;
    let endCount = parseFloat(finalCount);

    const counter = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < endCount) {
          return prevCount + 1;
        } else {
          clearInterval(counter);
          return prevCount;
        }
      });

      // Determine color class based on percentage range
      if (endCount >= 80) {
        setColorClass('text-green-500'); // Green
      } else if (endCount >= 40) {
        setColorClass('text-yellow-500'); // Yellow
      } else {
        setColorClass('text-red-500'); // Red
      }
    }, (duration * 1000) / endCount);

    return () => {
      clearInterval(counter);
    };
  }, [finalCount, isPercentage]);

  return (
    <div className="px-4 sm:px-6 lg:px-10 text-center flex items-center justify-center mx-auto">
      <div>
        {isPercentage ? (
          <>
            <div className={`text-5xl font-bold ${colorClass}`}>
              <CountUp end={count} decimal={2} />%
            </div>
            <h2 className={`text-lg font-medium text-white`}>{header}</h2>
          </>
        ) : (
          <>
            <div className="text-5xl text-white font-bold">
              <CountUp end={count} />
            </div>
            <h2 className="text-lg font-medium text-white">{header}</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default CountCard;
