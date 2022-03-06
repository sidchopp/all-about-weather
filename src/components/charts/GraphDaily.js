import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
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
  // console.log(graphData);

  // To show max. min. Temperatures in graph
  const temp = graphData.map(temp => temp.value);
  const maxTemp = Math.max(...temp);
  const minTemp = Math.min(...temp);
  const indexMaxTemp = temp.indexOf(maxTemp);
  const indexMinTemp = temp.indexOf(minTemp)
  // console.log(indexMaxTemp, indexMinTemp);
  // console.log(maxTemp, minTemp);


  const CustomizedDot = (props) => {
    const { x, y, index, value } = props;
    // console.log(props);
    if (value === maxTemp && index === indexMaxTemp) {
      return (
        <text x={x} y={y} dy={-8} fill='blue' fontSize={15} textAnchor="middle">
          {Math.round(value)}°C
        </text>
      )
    } if (value === minTemp && index === indexMinTemp) {
      return (
        <text x={x} y={y} dy={16} fill='red' fontSize={15} textAnchor="middle">
          {Math.round(value)}°C
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
                right: 30,
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