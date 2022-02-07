import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AirIcon from '@mui/icons-material/Air';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { WiSunrise, WiSunset, WiHumidity, WiDaySunny } from "react-icons/wi";
import { AiOutlineUserSwitch } from "react-icons/ai";

function WeatherTodayDetails({ dataYesterday }) {
  const value = dataYesterday.forecast.forecastday[0]
  console.log(value);
  // console.log(dataYesterday);
  return (
    <div>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 360,
          backgroundColor: "skyblue"
        }}
        elevation={9}
        backgroundColor="blue"
      >
        <Grid>

          <Grid>
            <Typography component="h1" variant="h5" gutterBottom style={{ marginBottom: "10px" }} color="text.secondary" align="center">
              Yesterday
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
                {value.day.avgtemp_c}°
                <span style={{ fontSize: "15px" }} >
                  C
                </span>
              </Typography>
              <Typography gutterBottom variant="h5" align="center" color="text.secondary" component="p">
                <AiOutlineUserSwitch />
              </Typography>
            </Grid>
            <Grid item xs >
              <Typography
                component="h1"
                variant="h5"
                align="center"
                color="text.primary"
              >
                {value.day.maxwind_mph}
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
                {value.astro.sunrise}
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
                {value.day.maxtemp_c}°
                <span style={{ fontSize: "15px" }} >
                  C
                </span>
              </Typography>
              <Typography gutterBottom variant="h4" align="center" color="text.secondary" component="p">
                <ArrowUpwardIcon color="warning" />
              </Typography>
            </Grid>
            <Grid item xs >
              <Typography
                component="h1"
                variant="h5"
                align="center"
                color="text.primary"
              >
                {value.day.avgvis_km}
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
                {value.astro.sunset}
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
                {value.day.mintemp_c}°
                <span style={{ fontSize: "15px" }} >
                  C
                </span>
              </Typography>
              <Typography gutterBottom variant="h4" align="center" color="text.secondary" component="p">
                <ArrowDownwardIcon color="primary" />
              </Typography>
            </Grid>
            <Grid item xs >
              <Typography
                component="h1"
                variant="h5"
                align="center"
                color="text.primary"
              >
                {value.day.avghumidity}
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
                {value.day.uv}
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
