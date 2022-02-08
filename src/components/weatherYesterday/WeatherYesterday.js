import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AirIcon from '@mui/icons-material/Air';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { WiHumidity } from "react-icons/wi";
import { BsFillSunriseFill, BsFillSunsetFill, BsFillSunFill, BsArrowUp, BsArrowDown } from "react-icons/bs";
import { CgCompressV } from "react-icons/cg";

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function WeatherTodayDetails({ dataYesterday }) {
  const value = dataYesterday.forecast.forecastday[0]
  // console.log(value);
  // console.log(dataYesterday);
  return (
    <div>
      <Paper
        sx={{
          p: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: "skyblue"
        }}
        elevation={9}
        backgroundColor="blue"
      >

        <Card style={{ padding: "10px" }}  >
          <CardHeader
            avatar={<Img src={value.day.condition.icon} alt="Weather" />}
            action={
              <Typography variant="caption" display="block" align="right" color="text.secondary" >
                Yesterday
              </Typography>
            }
            subheader={
              <Typography variant="h5" align="left" color="text.primary" component="p">
                {value.day.condition.text}
              </Typography>
            }
          />
          <CardContent>
            <Grid>

              {/* 1st Row */}
              <Grid container spacing={1}>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="left"
                    color="text.primary"
                  >
                    {Math.round(value.day.avgtemp_c)}°
                    <span style={{ fontSize: "15px" }} >
                      C
                    </span>
                  </Typography>
                  <Typography gutterBottom variant="h5" align="left" color="text.secondary" component="p">
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
                    align="right"
                    color="text.primary"
                  >
                    {value.astro.sunrise.slice(0, 5)}
                    <span style={{ fontSize: "15px" }} >
                      am
                    </span>
                  </Typography>
                  <Typography variant="h4" align="right" color="text.secondary" component="p">
                    <BsFillSunriseFill />
                  </Typography>
                </Grid>
              </Grid>

              {/* 2nd Row */}
              <Grid container spacing={1}>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="left"
                    color="text.primary"
                  >
                    {Math.round(value.day.maxtemp_c)}°
                    <span style={{ fontSize: "15px" }} >
                      C
                    </span>
                  </Typography>
                  <Typography gutterBottom variant="h5" align="left" color="text.secondary" component="p">
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
                    align="right"
                    color="text.primary"
                  >
                    {value.astro.sunset.slice(0, 5)}
                    <span style={{ fontSize: "15px" }} >
                      pm
                    </span>
                  </Typography>
                  <Typography variant="h4" align="right" color="text.secondary" component="p">
                    <BsFillSunsetFill />
                  </Typography>
                </Grid>
              </Grid>

              {/* 3rd Row */}
              <Grid container spacing={1}>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="left"
                    color="text.primary"
                  >
                    {Math.round(value.day.mintemp_c)}°
                    <span style={{ fontSize: "15px" }} >
                      C
                    </span>
                  </Typography>
                  <Typography gutterBottom variant="h5" align="left" color="text.secondary" component="p">
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
                    {value.day.uv}
                  </Typography>
                  <Typography variant="h4" align="center" color="text.secondary" component="p">
                    <BsFillSunFill />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="right"
                    color="text.primary"
                  >
                    {Math.round(value.day.avghumidity)}
                    <span style={{ fontSize: "15px" }} >
                      %
                    </span>
                  </Typography>
                  <Typography variant="h4" align="right" color="text.secondary" component="p">
                    <WiHumidity />
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
