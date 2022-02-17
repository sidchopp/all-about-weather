import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function GraphDaily({ data1 }) {
  const theme = useTheme();
  // console.log(data1);

  const graphData = [];
  for (let i = 0; i < data1.forecast.forecastday[0].hour.length; i++) {
    const time = data1.forecast.forecastday[0].hour[i].time.slice(-5);
    const temperature = data1.forecast.forecastday[0].hour[i].temp_c;
    const objectSets = {};
    objectSets.time = time;
    objectSets.value = temperature;
    graphData.push(objectSets)
  };
  // console.log(graphData);

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
      // backgroundColor="blue"
      >
        <Typography component="h2" variant="h6" color="primary" gutterBottom sx={{ textAlign: 'center' }}>
          Variation in Temperature with time
        </Typography>
        <ResponsiveContainer width="100%" >
          <LineChart
            data={graphData}
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