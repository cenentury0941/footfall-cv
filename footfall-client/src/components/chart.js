import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicBars({data}) {
    console.log(data)
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: data["tsData"] }]}
      series={data["graphData"]}
      width={600}
      height={300}
    />
  );
}