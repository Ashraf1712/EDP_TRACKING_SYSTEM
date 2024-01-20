import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const CountCard = ({ header, finalCount }) => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    let duration = 2;
    let endCount = parseInt(finalCount);

    const counter = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < endCount) {
          return prevCount + 1;
        } else {
          clearInterval(counter);
          return prevCount;
        }
      });
    },
      (duration * 1000) / endCount);

    return () => clearInterval(counter);
  }, [finalCount]);

  return (
    <div className="px-4 sm:px-6  lg:px-10 text-center flex items-center justify-center mx-auto">
      <div>
        {/* <CountUp className="text-5xl text-white font-bold" end={count} /> */}
        <div className="text-5xl text-white font-bold">{count}</div>
        <h2 className="text-lg font-medium text-white">{header}</h2>
      </div>
    </div>


  );

};

export default CountCard;
