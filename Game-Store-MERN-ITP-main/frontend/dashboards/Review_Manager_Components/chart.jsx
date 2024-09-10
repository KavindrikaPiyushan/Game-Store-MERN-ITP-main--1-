import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ data }) => {
  // Check if data is available and not empty
  if (!data || data.length === 0) {
    return <div>No data available for the chart</div>;
  }

  const chartData = {
    labels: data.map(item => item?.title || 'N/A'),
    datasets: [
      {
        label: 'Average Rating',
        data: data.map(item => parseFloat(item?.averageRating) || 0),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        maxBarThickness: 80,
      },
     
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Game Ratings Comparison',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5, 
        title: {
          display: true,
          text: 'Price (Rs)',
        },
      },
    },
  };

  return<div style={{ height: '80vh', margin: 'auto',  }} className='bg-gray-100 rounded-lg'> 
  <Bar data={chartData} options={options} className='w-[100%]' />
</div>
};

export default Chart;