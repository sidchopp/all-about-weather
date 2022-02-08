import * as React from 'react';
import { format } from 'date-fns'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

//Components
import Warning from './Warning';
import AirQuality from '../airQuality/AirQuality';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

// Today's Date and Day
const day = format(new Date(), 'do');
const weekday = format(new Date(), 'eee');
const month = format(new Date(), 'MMM');
const today = `${weekday},${day}${" "}${month}`

function WeatherToday({ data }) {
  // console.log(data);
  return (
    <div  >
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
        <Grid container spacing={1}>
          <Grid item xs >
            <Typography variant="h9" align="left" color="text.secondary" component="p">
              {today}
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              align="left"
              color="text.primary"
            >
              {data.location.name}
            </Typography>
            <Typography variant="caption" display="block" align="left" color="text.primary">
              {data.location.region}, {data.location.country}
            </Typography>
            <Typography gutterBottom variant="button" display="block" align="left" >
              <AirQuality data={data} />
            </Typography>
            <Typography variant="button" display="block" align="left" >
              <Warning data={data} />
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography
              variant="h1"
              align="center"
              color="text.primary"
              component="h1"
            >
              {Math.round(data.current.temp_c)}°
              <span style={{ fontSize: "45px" }} >
                C
              </span>
            </Typography>
            <Typography
              component="p"
              variant="h7"
              align="center"
              color="text.secondary"
            >
              {data.current.condition.text}
            </Typography>
            <Typography variant="h7" align="center" color="text.secondary" component="p">
              <Img src={data.current.condition.icon} alt="Weather" />
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
};

export default WeatherToday;


