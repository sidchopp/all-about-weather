import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const data = [
  { name: 'Group A', value: 4 },
  { name: 'Group B', value: 6 },
  { name: 'Group C', value: 6 },
  { name: 'Group D', value: 20 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PieChartYesterday({ dataYesterday }) {

  const average = (array) => array.reduce((a, b) => a + b) / array.length;

  const dataHourly = dataYesterday.forecast.forecastday[0].hour;
  console.log(dataHourly);
  const chancesOfRain = dataYesterday.forecast.forecastday[0].hour.map(rain => rain.chance_of_rain);
  const chancesOfSnow = dataYesterday.forecast.forecastday[0].hour.map(snow => snow.chance_of_snow);
  const cloud = dataYesterday.forecast.forecastday[0].hour.map(cloud => cloud.cloud)
  console.log(average(chancesOfRain));
  console.log(average(chancesOfSnow));
  console.log(average(cloud));

  const snow = new Object();
  snow.name = 'snow';
  snow.value = average(chancesOfSnow);
  console.log(snow);

  const rain = new Object();
  rain.name = 'rain';
  rain.value = average(chancesOfRain);
  console.log(rain);

  const cloud1 = new Object();
  cloud1.name = 'cloud';
  cloud1.value = average(cloud);
  console.log(cloud1);

  const DATA = [snow, rain, cloud1]
  console.log(DATA);



  return (
    <div>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 300,
            backgroundColor: "skyblue"
          }}
          elevation={9}
          backgroundColor="blue"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={800} height={400}>
              <Pie
                data={DATA}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Paper>
      </Container>
    </div>
  );
}

