import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';



export default function GraphDaily({ data1 }) {
  const theme = useTheme();

  // To get time and Temp in the right format required by DATA for recharts
  let timeData = data1.forecast.forecastday[0].hour
  const DATA = timeData;
  // let timeSpread = [...timeData];
  // const data = timeSpread;
  // const timeHour = timeSpread.time.slice(11, 16)

  return (
    <div>
      {/* <Toolbar /> */}
      {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}> */}
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
        <Typography component="h2" variant="h6" color="primary" gutterBottom sx={{ textAlign: 'center' }}>
          Variation in Temperature with time
        </Typography>
        <ResponsiveContainer width="100%" >
          <LineChart
            data={DATA}
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
              dataKey="temp_c"
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