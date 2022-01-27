
import Paper from '@mui/material/Paper';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

export default function AQRadar({ data }) {

  const carbonMonoxide = {};
  carbonMonoxide.name = 'Carbon Monoxide';
  carbonMonoxide.value = data.current.air_quality.co.toFixed(2);
  carbonMonoxide.fill = "#8884d8"

  const nitrogenDioxide = {};
  nitrogenDioxide.name = 'Nitrogen Dioxide';
  nitrogenDioxide.value = data.current.air_quality.no2.toFixed(2);
  nitrogenDioxide.fill = "#83a6ed"

  const ozone = {};
  ozone.name = 'Ozone';
  ozone.value = data.current.air_quality.o3.toFixed(2)

  const pm2_5 = {};
  pm2_5.name = 'PM 2.5';
  pm2_5.value = data.current.air_quality.pm2_5.toFixed(2)

  const pm10 = {};
  pm10.name = 'PM 10';
  pm10.value = data.current.air_quality.pm10.toFixed(2)

  const sulphurDioxide = {};
  sulphurDioxide.name = 'Sulphur Dioxide';
  sulphurDioxide.value = data.current.air_quality.so2.toFixed(2)

  const DATA = [carbonMonoxide, nitrogenDioxide, ozone, pm2_5, pm10, sulphurDioxide];

  // console.log(DATA);

  return (
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
      {/* <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={DATA}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Tooltip />
          <Radar name="name" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer> */}

      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={DATA}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="value"
          />
          <Tooltip />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>


    </Paper>
  );

}