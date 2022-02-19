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
          <CardContent>
            <Grid>
              <Grid>
                <Typography gutterBottom style={{ marginBottom: "10px" }} color="text.secondary" align="center">
                  Last updated:{" "}{data.current.last_updated}
                </Typography>
              </Grid>

              {/* 1st Row */}
              <Grid container spacing={3}>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                    color="text.primary"
                  >
                    {Math.round(data.current.feelslike_c)}°
                    <span style={{ fontSize: "15px" }} >
                      C
                    </span>
                  </Typography>
                  <Typography gutterBottom variant="h5" align="center" color="text.secondary" component="p">
                    <BsFillPersonLinesFill />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                    color="text.primary"
                  >
                    {Math.round(data.current.wind_mph)}
                    <span style={{ fontSize: "15px" }} >
                      mph
                    </span>
                  </Typography>
                  <Typography variant="h5" align="center" color="text.secondary" component="p">

                    {/* Component import */}
                    <WindDirection data={data} />

                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                    color="text.primary"
                  >
                    {data.forecast.forecastday[0].astro.sunrise.slice(0, 5)}
                    <span style={{ fontSize: "15px" }} >
                      am
                    </span>
                  </Typography>
                  <Typography variant="h4" align="center" color="text.secondary" component="p">
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
                    color="text.primary"
                  >
                    {Math.round(data.forecast.forecastday[0].day.maxtemp_c)}°
                    <span style={{ fontSize: "15px" }} >
                      C
                    </span>
                  </Typography>
                  <Typography gutterBottom variant="h5" align="center" color="text.secondary" component="p">
                    <BsArrowUp />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                    color="text.primary"
                  >
                    {Math.round(data.current.vis_miles)}
                    <span style={{ fontSize: "15px" }} >
                      miles
                    </span>
                  </Typography>
                  <Typography variant="h4" align="center" color="text.secondary" component="p">
                    <VisibilityIcon />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                    color="text.primary"
                  >
                    {data.forecast.forecastday[0].astro.sunset.slice(0, 5)}
                    <span style={{ fontSize: "15px" }} >
                      pm
                    </span>
                  </Typography>
                  <Typography variant="h4" align="center" color="text.secondary" component="p">
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
                    color="text.primary"
                  >
                    {Math.round(data.forecast.forecastday[0].day.mintemp_c)}°
                    <span style={{ fontSize: "15px" }} >
                      C
                    </span>
                  </Typography>
                  <Typography gutterBottom variant="h5" align="center" color="text.secondary" component="p">
                    <BsArrowDown />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                    color="text.primary"
                  >
                    {Math.round(data.current.humidity)}
                    <span style={{ fontSize: "15px" }} >
                      %
                    </span>
                  </Typography>
                  <Typography variant="h4" align="center" color="text.secondary" component="p">
                    <WiHumidity />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                    color="text.primary"
                  >
                    {data.forecast.forecastday[0].day.uv}
                  </Typography>
                  <Typography variant="h4" align="center" color="text.secondary" component="p">
                    <BsFillSunFill />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </div >
  )
}

export default WeatherTodayDetails;
