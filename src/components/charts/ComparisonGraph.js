
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';


export default function ComparisonGraph({ data1 }) {
  // console.log(data1);
  const theme = useTheme();

  let timeDataToday = data1.forecast.forecastday[0].hour
  const dataToday = timeDataToday;
  // console.log(dataToday);
  let timeDataTomorrow = data1.forecast.forecastday[1].hour
  const dataTomorrow = timeDataTomorrow;
  let timeDataDayafter = data1.forecast.forecastday[2].hour
  const dataDayafter = timeDataDayafter;
  return (

    // <div >
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 1100,
          backgroundColor: "skyblue"
        }}
        elevation={9}
        backgroundColor="blue"
      >
        <Typography component="h2" variant="h6" color="primary" gutterBottom sx={{ textAlign: 'center' }}>
          Comparison for Three days
        </Typography>
        <Typography component="h2" variant="h6" color="secondary" gutterBottom sx={{ textAlign: 'left' }}>
          Today
        </Typography>

        {/* Today */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={200}
            data={dataToday}
            syncId="anyId"
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
        <Typography component="h2" variant="h6" color="secondary" gutterBottom sx={{ textAlign: 'left' }}>
          Tomorrow
        </Typography>

        {/* Tomorrow */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={200}
            data={dataTomorrow}
            syncId="anyId"
            margin={{
              top: 24,
              right: 24,
              bottom: 44,
              left: 24,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
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
        <Typography component="h2" variant="h6" color="secondary" gutterBottom sx={{ textAlign: 'left' }}>
          Day After Tomorrow
        </Typography>

        {/* Day After */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={200}
            data={dataDayafter}
            syncId="anyId"
            margin={{
              top: 24,
              right: 24,
              bottom: 44,
              left: 24,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
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
    </Container>

    // {/* </div> */ }

  );

}
