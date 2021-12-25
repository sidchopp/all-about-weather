import React from 'react'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';

function WeatherTodayDetails({ data }) {

  console.log(data);
  return (
    // <div>
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
              {data.current.feelslike_c}°
              <span style={{ fontSize: "15px" }} >
                C
              </span>
            </Typography>
            <Typography gutterBottom variant="h9" align="center" color="text.secondary" component="p">
              Feels like
            </Typography>
          </Grid>
          <Grid item xs >
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="text.primary"
            >
              {data.current.wind_mph}
              <span style={{ fontSize: "15px" }} >
                mph
              </span>
            </Typography>
            <Typography variant="h7" align="center" color="text.secondary" component="p">
              Wind
            </Typography>
          </Grid>
          <Grid item xs >
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="text.primary"
            >
              {data.forecast.forecastday[0].astro.sunrise}
            </Typography>
            <Typography variant="h7" align="center" color="text.secondary" component="p">
              Sunrise
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
              {data.forecast.forecastday[0].day.maxtemp_c}°
              <span style={{ fontSize: "15px" }} >
                C
              </span>
            </Typography>
            <Typography gutterBottom variant="h7" align="center" color="text.secondary" component="p">
              Max.
            </Typography>
          </Grid>
          <Grid item xs >
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="text.primary"
            >
              {data.current.vis_miles}
              <span style={{ fontSize: "15px" }} >
                miles
              </span>
            </Typography>
            <Typography variant="h7" align="center" color="text.secondary" component="p">
              Visibility
            </Typography>
          </Grid>
          <Grid item xs >
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="text.primary"
            >
              {data.forecast.forecastday[0].astro.sunset}
            </Typography>
            <Typography variant="h7" align="center" color="text.secondary" component="p">
              Sunset
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
              {data.forecast.forecastday[0].day.mintemp_c}°
              <span style={{ fontSize: "15px" }} >
                C
              </span>
            </Typography>
            <Typography gutterBottom variant="h7" align="center" color="text.secondary" component="p">
              Min.
            </Typography>
          </Grid>
          <Grid item xs >
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="text.primary"
            >
              {data.current.humidity}
              <span style={{ fontSize: "15px" }} >
                %
              </span>
            </Typography>
            <Typography variant="h7" align="center" color="text.secondary" component="p">
              Humidity
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
            <Typography variant="h7" align="center" color="text.secondary" component="p">
              UV Index
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    // </div >
  )
}

export default WeatherTodayDetails;
