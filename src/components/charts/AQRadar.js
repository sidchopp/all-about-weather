
import Paper from '@mui/material/Paper';
import { Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// const getIntroOfPage = (label) => {
//   if (label === 'Carbon Monoxide') {
//     return "Page A is about men's clothing";
//   }
//   if (label === 'Nitrogen Dioxide') {
//     return "Page B is about women's dress";
//   }
//   if (label === 'Ozone') {
//     return "Page C is about women's bag";
//   }
//   if (label === 'PM 2.5') {
//     return 'Page D is about household goods';
//   }
//   if (label === 'PM 10') {
//     return 'Page E is about food';
//   }
//   if (label === 'Sulphur Dioxide') {
//     return 'Page F is about baby food';
//   }
//   return '';
// };

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="custom-tooltip">
//         <p className="label">{`${label} : ${payload[0].value}`}</p>
//         <p className="intro">{getIntroOfPage(label)}</p>
//         <p className="desc">Anything you want can be displayed here.</p>
//       </div>
//     );
//   }

//   return null;
// };

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
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={500}
          data={DATA}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" barSize={20} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );

}

//content={<CustomTooltip />}