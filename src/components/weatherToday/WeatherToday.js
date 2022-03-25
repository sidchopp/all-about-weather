import * as React from 'react';
import { format } from 'date-fns'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

//Components
import useStyles from '../styles/UseStyles';
import Warning from './Warning';
import AirQuality from '../airQuality/AirQuality';

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
const today = `${weekday},${month}${" "}${day}${" "}${time}`

function WeatherToday({ data }) {
  const classes = useStyles();
  // console.log(data);
  return (
    <div className='card'>
      <Card className={classes.card}  >
        <CardContent>
          <Grid container >
            <Grid item xs={4} >
              <Typography variant="caption" display="block" align="left" >
                {today}
              </Typography>
              <Typography
                component="h1"
                variant="h6"
                align="left"
              >
                {data.location.name}
              </Typography>
              <Typography variant="subtitle2" align="left" >
                {data.location.region}
                {/* , {data.location.country} */}
              </Typography>
              <Typography gutterBottom variant="button" display="block" align="left" >
                <AirQuality data={data} />
              </Typography>
              <Typography variant="button" display="block" align="left" >
                <Warning data={data} />
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="h1"
                align="right"
                // color={data.current.temp_c < 0 ? "red" : "blue"}
                component="h1"
              >
                {Math.round(data.current.temp_c)}
                <span style={{ fontSize: "30px" }} >
                  °C
                </span>
              </Typography>
              <Typography
                component="p"
                variant="h6"
                align="right"
              >
                {data.current.condition.text}
              </Typography>
              <Typography variant="h7" align="center" component="p">
                <Img style={{ float: 'right' }} src={data.current.condition.icon} alt="Weather" />
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
};

export default WeatherToday;


