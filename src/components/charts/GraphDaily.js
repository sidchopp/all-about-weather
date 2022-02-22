import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

//Components
import useStyles from '../styles/UseStyles';

export default function GraphDaily({ data1 }) {
  const theme = useTheme();
  const classes = useStyles();
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
  console.log(graphData);


  const temp = graphData.map(temp => temp.value);
  console.log(temp);

  const uniqueTemp = [...new Set(temp)]
  console.log(uniqueTemp);
  const maxTemp = Math.max(...uniqueTemp);
  const minTemp = Math.min(...uniqueTemp);
  console.log(maxTemp, minTemp);


  const CustomizedDot = (props) => {
    const { x, y, stroke, value } = props;
    if (value === maxTemp) {
      return (
        <text x={x} y={y} dy={-4} fill='blue' fontSize={10} textAnchor="middle">
          Max: {Math.round(maxTemp)}
        </text>
      )
    } if (value === minTemp) {
      return (
        <text x={x} y={y} dy={-4} fill='red' fontSize={10} textAnchor="middle">
          Min: {Math.round(minTemp)}
        </text>
      )
    }
    else {
      return <></>
    }
  }

  return (
    <div>
      <Paper
        sx={{
          p: 1,
          display: 'flex',
          flexDirection: 'column',
          height: 350,
        }}
        elevation={9}
        className={classes.paper}
      >
        <Card className={classes.card} style={{ padding: '20px' }}>
          <Typography component="h2" variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
            Today's Temperature
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
                label={<CustomizedDot />}
              // dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </Paper>
      {/* </Container> */}
    </div>
  );
}