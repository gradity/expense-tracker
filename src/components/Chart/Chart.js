import React from 'react';

import './Chart.css';

import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
  const dataPointsValue = dataPoints.map((dataPoint) => dataPoint.value);
  const maxDataPointsValue = Math.max(...dataPointsValue);
  // console.log('maxDataPointsValue', maxDataPointsValue);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxDataPointsValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
