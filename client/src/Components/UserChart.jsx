import React from 'react';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

const UserChart = ({header}) => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
      hoverOffset: 4,
    }],
  };

  const options = {
    // Add any chart options here if needed
    type:'pie',
    data: data,
  };

  return (
    <div className="px-4 sm:px-6  md:px-8 md:w-64 md:h-64 lg:px-10 mb-10" >
      <h2 className ="text-lg font-bold mb-4 text-center text-slate-700" >{header}</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default UserChart;
