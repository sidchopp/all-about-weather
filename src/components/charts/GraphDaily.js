import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function GraphDaily({ data1 }) {
  const theme = useTheme();

  // To get time and Temp in the right format required by DATA for recharts
  let timeData = data1.forecast.forecastday[0].hour
  const DATA = timeData;
  // let timeSpread = [...timeData];
  // const data = timeSpread;
  // const timeHour = timeSpread.time.slice(11, 16)

  // Change this method with a better one
  const time0000 = {};
  time0000.time = '12 AM';
  time0000.value = data1.forecast.forecastday[0].hour[0].temp_c


  const time0100 = {};
  time0100.time = '1 AM';
  time0100.value = data1.forecast.forecastday[0].hour[1].temp_c

  const time0200 = {};
  time0200.time = '2 AM';
  time0200.value = data1.forecast.forecastday[0].hour[2].temp_c


  const time0300 = {};
  time0300.time = '3 AM';
  time0300.value = data1.forecast.forecastday[0].hour[3].temp_c

  const time0400 = {};
  time0400.time = '4 AM';
  time0400.value = data1.forecast.forecastday[0].hour[4].temp_c

  const time0500 = {};
  time0500.time = '5 AM';
  time0500.value = data1.forecast.forecastday[0].hour[5].temp_c

  const time0600 = {};
  time0600.time = '6 AM';
  time0600.value = data1.forecast.forecastday[0].hour[6].temp_c

  const time0700 = {};
  time0700.time = '7 AM';
  time0700.value = data1.forecast.forecastday[0].hour[7].temp_c

  const time0800 = {};
  time0800.time = '8 AM';
  time0800.value = data1.forecast.forecastday[0].hour[8].temp_c


  const time0900 = {};
  time0900.time = '9 AM';
  time0900.value = data1.forecast.forecastday[0].hour[9].temp_c


  const time1000 = {};
  time1000.time = '10 AM';
  time1000.value = data1.forecast.forecastday[0].hour[10].temp_c


  const time1100 = {};
  time1100.time = '11 AM';
  time1100.value = data1.forecast.forecastday[0].hour[11].temp_c


  const time1200 = {};
  time1200.time = '12 PM';
  time1200.value = data1.forecast.forecastday[0].hour[12].temp_c


  const time1300 = {};
  time1300.time = '1 PM';
  time1300.value = data1.forecast.forecastday[0].hour[13].temp_c


  const time1400 = {};
  time1400.time = '2 PM';
  time1400.value = data1.forecast.forecastday[0].hour[14].temp_c


  const time1500 = {};
  time1500.time = '3 PM';
  time1500.value = data1.forecast.forecastday[0].hour[15].temp_c


  const time1600 = {};
  time1600.time = '4 PM';
  time1600.value = data1.forecast.forecastday[0].hour[16].temp_c


  const time1700 = {};
  time1700.time = '5 PM';
  time1700.value = data1.forecast.forecastday[0].hour[17].temp_c


  const time1800 = {};
  time1800.time = '6 PM';
  time1800.value = data1.forecast.forecastday[0].hour[18].temp_c


  const time1900 = {};
  time1900.time = '7 PM';
  time1900.value = data1.forecast.forecastday[0].hour[19].temp_c


  const time2000 = {};
  time2000.time = '8 PM';
  time2000.value = data1.forecast.forecastday[0].hour[20].temp_c


  const time2100 = {};
  time2100.time = '9 PM';
  time2100.value = data1.forecast.forecastday[0].hour[21].temp_c


  const time2200 = {};
  time2200.time = '10 PM';
  time2200.value = data1.forecast.forecastday[0].hour[22].temp_c


  const time2300 = {};
  time2300.time = '11 PM';
  time2300.value = data1.forecast.forecastday[0].hour[23].temp_c

  const dataNew = [time0000, time0100, time0200, time0300, time0400, time0500, time0600, time0700, time0800, time0900, time1000, time1100, time1200, time1300, time1400, time1500, time1600, time1700, time1800, time1900, time2000, time2100, time2200, time2300]


  return (
    <div>
      {/* <Toolbar /> */}
      {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}> */}
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 350,
          backgroundColor: "skyblue"
        }}
        elevation={9}
        backgroundColor="blue"
      >
        <Typography component="h2" variant="h6" color="primary" gutterBottom sx={{ textAlign: 'center' }}>
          Variation in Temperature with time
        </Typography>
        <ResponsiveContainer width="100%" >
          <LineChart
            data={dataNew}
            margin={{
              top: 24,
              right: 24,
              bottom: 44,
              left: 24,
            }}
          >
            <CartesianGrid stroke="#ccc" />
            <XAxis
              dataKey="time"
              stroke={theme.palette.text.secondary}
              style={theme.typography.body2}
            >
              <Label
                angle={0}
                position="bottom"
                style={{
                  textAnchor: 'middle',
                  fill: theme.palette.text.primary,
                  ...theme.typography.body1,
                }}
              >
                Time
              </Label>
            </XAxis>
            <YAxis
              stroke={theme.palette.text.secondary}
              style={theme.typography.body2}
            >
              <Label
                angle={270}
                position="left"
                style={{
                  textAnchor: 'middle',
                  fill: theme.palette.text.primary,
                  ...theme.typography.body1,
                }}
              >
                Temperature (°C)
              </Label>
            </YAxis>
            <Tooltip />
            <Line
              isAnimationActive={false}
              type="monotone"
              dataKey="value"
              name='Temp(°C)'
              stroke={theme.palette.primary.main}
            // dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
      {/* </Container> */}
    </div>
  );
}