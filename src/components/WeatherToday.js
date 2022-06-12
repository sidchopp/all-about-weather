import * as React from 'react';
import { format } from 'date-fns'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

//Components
import Warning from './Warning';
import AirQuality from './AirQuality';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

// Today's Date and Day
const day = format(new Date(), 'd');
const time = format(new Date(), "p")
const weekday = format(new Date(), 'eee');
const month = format(new Date(), 'MMM');
const today = `${weekday},${month}${" "}${day}`
//${" "}${time}
function WeatherToday({ data }) {
  // console.log(data);
  // last updated time format
  const { current: { last_updated } } = data;
  const Time = format(new Date(last_updated), 'p')
  return (
    <div className='card'>
      <Card variant="outlined"  >
        <div className='card-text-background'>
          <CardContent>
            <Grid container >
              <Grid item xs={5} >
                <Typography variant="caption" display="block" align="left" >
                  <span className='font'> {today}</span>
                </Typography>
                <Typography
                  component="h1"
                  variant="h6"
                  align="left"
                >
                  <span className='font'> {data.location.name}</span>
                </Typography>
                <Typography variant="subtitle2" align="left" >
                  <span className='font'> {data.location.region}</span>
                  {/* , {data.location.country} */}
                </Typography>
                <Typography gutterBottom variant="button" display="block" align="left" >
                  <AirQuality data={data} />
                </Typography>
                <Typography variant="button" display="block" align="left" >
                  <Warning data={data} />
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography
                  variant="h1"
                  align="right"
                  // color={data.current.temp_c < 0 ? "red" : "blue"}
                  component="h1"
                >
                  <span className='font'> {Math.round(data.current.temp_c)}
                    <span style={{ fontSize: "30px" }} >
                      °C
                    </span>
                  </span>
                </Typography>
                <Typography
                  component="p"
                  variant="h6"
                  align="right"
                >
                  <span className='font'>{data.current.condition.text}</span>
                </Typography>
                <Typography variant="h7" align="center" component="p">
                  <Img style={{ float: 'right' }} src={data.current.condition.icon} alt="Weather" />
                </Typography>
              </Grid>
            </Grid>
            <Grid>
              <Typography variant="caption" align="center" display="block" >
                <span className='font'>   Last updated:{" "}{Time}</span>
              </Typography>
            </Grid>
          </CardContent>
        </div>
      </Card>
    </div>
  )
};

export default WeatherToday;


