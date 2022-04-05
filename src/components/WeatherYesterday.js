import React from 'react'
import Grid from '@mui/material/Grid';
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

//Components
import IconStyle from './styles/IconStyles';

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
    <div className='card'>
      <Card variant="outlined">
        <div className='card-text-background'>
          <CardHeader
            avatar={<Grid container spacing={1} >
              <Typography variant="caption" display="block" align="center" component="p">
                <Img src={value.day.condition.icon} alt="Weather" />
                <span className='font' >  {value.day.condition.text}</span>
              </Typography>
            </Grid>}
            action={
              <Typography variant="caption" display="block" align="right"  >
                <span className='font'>   Yesterday</span>
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
                  >
                    <span className='font'>
                      {Math.round(value.day.avgtemp_c)}
                      <span style={{ fontSize: "15px" }} >
                        °C
                      </span>
                    </span>
                  </Typography>
                  <Typography gutterBottom variant="h5" align="left" component="p">
                    <CgCompressV />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                  >
                    <span className='font'>
                      {Math.round(value.day.maxwind_mph)}
                      <span style={{ fontSize: "15px" }} >
                        mph
                      </span>
                    </span>
                  </Typography>
                  <Typography variant="h4" align="center" component="p">
                    <AirIcon />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="right"
                  >
                    <span className='font'>
                      {value.astro.sunrise.slice(1, 5)}
                      <span style={{ fontSize: "15px" }} >
                        am
                      </span>
                    </span>
                  </Typography>
                  <Typography color={IconStyle.sunRise} variant="h4" align="right" component="p">
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
                  >
                    <span className='font'>
                      {Math.round(value.day.maxtemp_c)}
                      <span style={{ fontSize: "15px" }} >
                        °C
                      </span>
                    </span>
                  </Typography>
                  <Typography color={IconStyle.highTemp} gutterBottom variant="h5" align="left" component="p">
                    <BsArrowUp />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                  >
                    <span className='font'>
                      {Math.round(value.day.avgvis_km)}
                      <span style={{ fontSize: "15px" }} >
                        miles
                      </span>
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
                    align="right"
                  >
                    <span className='font'>
                      {value.astro.sunset.slice(1, 5)}
                      <span style={{ fontSize: "15px" }} >
                        pm
                      </span>
                    </span>
                  </Typography>
                  <Typography color={IconStyle.sunSet} variant="h4" align="right" component="p">
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
                  >
                    <span className='font'>
                      {Math.round(value.day.mintemp_c)}
                      <span style={{ fontSize: "15px" }} >
                        °C
                      </span>
                    </span>
                  </Typography>
                  <Typography color={IconStyle.lowTemp} gutterBottom variant="h5" align="left" component="p">
                    <BsArrowDown />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                  >
                    <span className='font'>
                      {Math.round(value.day.avghumidity)}
                      <span style={{ fontSize: "15px" }} >
                        %
                      </span>
                    </span>
                  </Typography>
                  <Typography variant="h4" align="center" component="p">
                    <WiHumidity />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="right"
                  >
                    <span className='font'>
                      {value.day.uv}
                    </span>
                  </Typography>
                  <Typography color={IconStyle.uvIndex} variant="h4" align="right" component="p">
                    <BsFillSunFill />
                  </Typography>
                </Grid>

              </Grid>

            </Grid>
          </CardContent>
        </div>
      </Card>
    </div >
  )
}

export default WeatherTodayDetails;
