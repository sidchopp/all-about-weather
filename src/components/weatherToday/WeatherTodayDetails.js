import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { WiHumidity } from "react-icons/wi";
import { BsFillPersonLinesFill, BsFillSunriseFill, BsFillSunsetFill, BsFillSunFill, BsArrowUp, BsArrowDown } from "react-icons/bs";

//Components
import useStyles from '../styles/UseStyles';
import WindDirection from '../dynamic/WindDirection';

function WeatherTodayDetails({ data }) {
  const classes = useStyles();
  // console.log(data);
  return (
    <div>
      <Paper
        sx={{
          p: 1,
          display: 'flex',
          flexDirection: 'column',
          // height: 350,
        }}
        elevation={9}
        className={classes.paper}
      >
        <Card  >
          <CardContent className={classes.card}>
            <Grid>
              {/* 1st Row */}
              <Grid container spacing={3}>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                  >
                    {Math.round(data.current.feelslike_c)}°
                    <span style={{ fontSize: "15px" }} >
                      C
                    </span>
                  </Typography>
                  <Typography gutterBottom variant="h5" align="center" component="p">
                    <BsFillPersonLinesFill />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"

                  >
                    {Math.round(data.current.wind_mph)}
                    <span style={{ fontSize: "15px" }} >
                      mph
                    </span>
                  </Typography>
                  <Typography variant="h5" align="center" component="p">

                    {/* Component import */}
                    <WindDirection data={data} />

                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                  >
                    {data.forecast.forecastday[0].astro.sunrise.slice(0, 5)}
                    <span style={{ fontSize: "15px" }} >
                      am
                    </span>
                  </Typography>
                  <Typography variant="h4" align="center" component="p">
                    <BsFillSunriseFill />
                  </Typography>
                </Grid>
              </Grid>

              {/* 2nd Row */}
              <Grid container spacing={3}>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"

                  >
                    {Math.round(data.forecast.forecastday[0].day.maxtemp_c)}°
                    <span style={{ fontSize: "15px" }} >
                      C
                    </span>
                  </Typography>
                  <Typography gutterBottom variant="h5" align="center" component="p">
                    <BsArrowUp />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"

                  >
                    {Math.round(data.current.vis_miles)}
                    <span style={{ fontSize: "15px" }} >
                      miles
                    </span>
                  </Typography>
                  <Typography variant="h4" align="center" component="p">
                    <VisibilityIcon />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"

                  >
                    {data.forecast.forecastday[0].astro.sunset.slice(0, 5)}
                    <span style={{ fontSize: "15px" }} >
                      pm
                    </span>
                  </Typography>
                  <Typography variant="h4" align="center" component="p">
                    <BsFillSunsetFill />
                  </Typography>
                </Grid>
              </Grid>

              {/* 3rd Row */}
              <Grid container spacing={3}>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"

                  >
                    {Math.round(data.forecast.forecastday[0].day.mintemp_c)}°
                    <span style={{ fontSize: "15px" }} >
                      C
                    </span>
                  </Typography>
                  <Typography gutterBottom variant="h5" align="center" component="p">
                    <BsArrowDown />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"

                  >
                    {Math.round(data.current.humidity)}
                    <span style={{ fontSize: "15px" }} >
                      %
                    </span>
                  </Typography>
                  <Typography gutterBottom variant="h4" align="center" component="p">
                    <WiHumidity />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"

                  >
                    {data.forecast.forecastday[0].day.uv}
                  </Typography>
                  <Typography gutterBottom variant="h4" align="center" component="p">
                    <BsFillSunFill />
                  </Typography>
                </Grid>
              </Grid>
              <Grid>
                <Typography variant="caption" align="center" display="block" >
                  Last updated:{" "}{data.current.last_updated.slice(-6)}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </div >
  )
}

export default WeatherTodayDetails;
