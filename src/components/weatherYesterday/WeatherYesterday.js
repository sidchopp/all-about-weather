import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AirIcon from '@mui/icons-material/Air';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { WiHumidity } from "react-icons/wi";
import { BsFillSunriseFill, BsFillSunsetFill, BsFillSunFill, BsArrowUp, BsArrowDown } from "react-icons/bs";
import { CgCompressV } from "react-icons/cg";

function WeatherTodayDetails({ dataYesterday }) {
  const value = dataYesterday.forecast.forecastday[0]
  console.log(value);
  console.log(dataYesterday);
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
                {Math.round(value.day.avgtemp_c)}°
                <span style={{ fontSize: "15px" }} >
                  C
                </span>
              </Typography>
              <Typography gutterBottom variant="h5" align="center" color="text.secondary" component="p">
                <CgCompressV />
              </Typography>
            </Grid>
            <Grid item xs >
              <Typography
                component="h1"
                variant="h5"
                align="center"
                color="text.primary"
              >
                {Math.round(value.day.maxwind_mph)}
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
                {value.astro.sunrise.slice(0, 5)}
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
                {Math.round(value.day.maxtemp_c)}°
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
                {Math.round(value.day.avgvis_km)}
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
                {value.astro.sunset.slice(0, 5)}
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
                {Math.round(value.day.mintemp_c)}°
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
                {Math.round(value.day.avghumidity)}
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
                <BsFillSunFill />
              </Typography>
            </Grid>
          </Grid>

        </Grid>
      </Paper>
    </div >
  )
}

export default WeatherTodayDetails;
