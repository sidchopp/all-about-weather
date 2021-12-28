import React from 'react'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import AirIcon from '@mui/icons-material/Air';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { WiSunrise, WiSunset, WiHumidity, WiThermometer, WiThermometerExterior, WiDaySunny } from "react-icons/wi";
import { BsPersonLinesFill, BsThermometerSnow } from "react-icons/bs"

function WeatherTodayDetails({ data }) {

  console.log(data);
  return (
    <div>
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
                {Math.round(data.current.feelslike_c)}°
                <span style={{ fontSize: "15px" }} >
                  C
                </span>
              </Typography>
              <Typography gutterBottom variant="h5" align="center" color="text.secondary" component="p">
                <BsThermometerSnow />
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
              <Typography variant="h4" align="center" color="text.secondary" component="p">
                <AirIcon />
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
              <Typography variant="h4" align="center" color="text.secondary" component="p">
                <WiSunrise />
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
              <Typography gutterBottom variant="h4" align="center" color="text.secondary" component="p">
                <WiThermometer />
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
                {data.forecast.forecastday[0].astro.sunset}
              </Typography>
              <Typography variant="h4" align="center" color="text.secondary" component="p">
                <WiSunset />
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
              <Typography gutterBottom variant="h4" align="center" color="text.secondary" component="p">
                <WiThermometerExterior />
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
                <WiDaySunny />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div >
  )
}

export default WeatherTodayDetails;
