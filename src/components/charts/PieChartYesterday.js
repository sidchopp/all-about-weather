// import React, { PureComponent } from 'react';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

// import Toolbar from '@mui/material/Toolbar';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';

// const data = [
//   { name: 'Group A', value: 4 },
//   { name: 'Group B', value: 6 },
//   { name: 'Group C', value: 6 },
//   { name: 'Group D', value: 20 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// export default function PieChartYesterday({ dataYesterday }) {
//   console.log(dataYesterday);

//   const average = (array) => array.reduce((a, b) => a + b) / array.length;

//   const dataHourly = dataYesterday.forecast.forecastday[0].hour;
//   // console.log(dataHourly);
//   const chancesOfRain = dataYesterday.forecast.forecastday[0].hour.map(rain => rain.chance_of_rain);
//   const chancesOfSnow = dataYesterday.forecast.forecastday[0].hour.map(snow => snow.chance_of_snow);
//   const cloud = dataYesterday.forecast.forecastday[0].hour.map(cloud => cloud.cloud)
//   // console.log(average(chancesOfRain));
//   // console.log(average(chancesOfSnow));
//   // console.log(average(cloud));

//   const snow = new Object();
//   snow.name = 'snow';
//   snow.value = average(chancesOfSnow);
//   // console.log(snow);

//   const rain = new Object();
//   rain.name = 'rain';
//   rain.value = average(chancesOfRain);
//   // console.log(rain);

//   const cloud1 = new Object();
//   cloud1.name = 'cloud';
//   cloud1.value = average(cloud);
//   // console.log(cloud1);

//   const DATA = [snow, rain, cloud1]
//   // console.log(DATA);



//   return (
//     <div>

//       <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//         <Paper
//           sx={{
//             p: 1,
//             display: 'flex',
//             flexDirection: 'column',
//             height: 300,
//             backgroundColor: "skyblue"
//           }}
//           elevation={9}
//           backgroundColor="blue"
//         >
//           <ResponsiveContainer width="100%" height="100%" >
//             <PieChart width={400} height={300}>
//               <Pie
//                 data={DATA}
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={60}
//                 outerRadius={80}
//                 fill="#8884d8"
//                 paddingAngle={5}
//                 dataKey="value"
//               >
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//         </Paper>
//       </Container>
//     </div >
//   );
// }

import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
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
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <div>

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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
              <PieChart width={400} height={400}>
                <Pie
                  activeIndex={this.state.activeIndex}
                  activeShape={renderActiveShape}
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  onMouseEnter={this.onPieEnter}
                />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Container>
      </div>
    );
  }
}
