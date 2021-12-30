
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

const data1 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];


const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill="#3895D3"
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill="#072F5F"
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#072F5F">
        {` ${value}% Prob.`}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Overall: ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};


export default function LabeledPieChart({ data }) {

  console.log(data);

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const snow = new Object();
  snow.name = 'Snow';
  snow.value = data.forecast.forecastday[0].day.daily_chance_of_snow

  const rain = new Object();
  rain.name = 'Rain';
  rain.value = data.forecast.forecastday[0].day.daily_chance_of_rain

  const DATA = [snow, rain]
  // console.log(DATA);

  // In case there is no snow or rain
  const cloud = new Object();
  cloud.name = 'Sunny';
  cloud.value = 100;
  const dataFallback = [cloud]
  // console.log(dataFallback);

  return (
    <div >
      <Paper
        sx={{
          p: 1,
          display: 'flex',
          flexDirection: 'column',
          height: 300,
          backgroundColor: "skyblue"
        }}
        elevation={9}
        backgroundColor="blue"
      >
        <ResponsiveContainer width="100%" height="100%" >
          <PieChart width={500} height={300}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={DATA[0].value === 0 && DATA[1].value === 0 ? dataFallback : DATA}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={onPieEnter}
              paddingAngle={2.5}
            />
          </PieChart>
        </ResponsiveContainer>
      </Paper>

    </div >
  );
}
