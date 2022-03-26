import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { WiHumidity } from "react-icons/wi";
import { BsFillPersonLinesFill, BsFillSunriseFill, BsFillSunsetFill, BsFillSunFill, BsArrowUp, BsArrowDown } from "react-icons/bs";
import { format } from 'date-fns';
import 'animate.css';

//Components
import WindDirection from '../dynamic/WindDirection';
import IconStyle from '../styles/IconStyles';

function WeatherTodayDetails({ data }) {

  // last updated time format
  const { current: { last_updated } } = data;
  const time = format(new Date(last_updated), 'p')

  return (
    <div className='card'>
      <Card variant="outlined">
        <div className='card-text-background'>
          <CardContent >
            <Grid>
              {/* 1st Row */}
              <Grid container spacing={3}>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                  >
                    <span className='font'> {Math.round(data.current.feelslike_c)}
                      <span style={{ fontSize: "15px" }} >
                        °C
                      </span>
                    </span>
                  </Typography>
                  <Typography gutterBottom variant="h5" align="center" component="div">
                    <BsFillPersonLinesFill />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                  >
                    <span className='font'>   {Math.round(data.current.wind_mph)}
                      <span style={{ fontSize: "15px" }} >
                        mph
                      </span>
                    </span>
                  </Typography>
                  <Typography variant="h5" align="center" component="div">

                    {/* Component import */}
                    <div className="animate__animated animate__headShake animate__slower animate__infinite	">
                      <WindDirection data={data} />
                    </div>
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                  >
                    <span className='font'>   {data.forecast.forecastday[0].astro.sunrise.slice(1, 5)}
                      <span style={{ fontSize: "15px" }} >
                        am
                      </span>
                    </span>
                  </Typography>
                  <Typography color={IconStyle.sunRise} variant="h4" align="center" component="div">
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
                    <span className='font'>   {Math.round(data.forecast.forecastday[0].day.maxtemp_c)}
                      <span style={{ fontSize: "15px" }} >
                        °C
                      </span>
                    </span>
                  </Typography>
                  <Typography color={IconStyle.highTemp} gutterBottom variant="h5" align="center" component="div">
                    <BsArrowUp />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                  >
                    <span className='font'>   {Math.round(data.current.vis_miles)}
                      <span style={{ fontSize: "15px" }} >
                        miles
                      </span>
                    </span>
                  </Typography>
                  <Typography variant="h4" align="center" component="div">
                    <VisibilityIcon />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                  >
                    <span className='font'>  {data.forecast.forecastday[0].astro.sunset.slice(1, 5)}
                      <span style={{ fontSize: "15px" }} >
                        pm
                      </span>
                    </span>
                  </Typography>
                  <Typography color={IconStyle.sunSet} variant="h4" align="center" component="div">
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
                    <span className='font'>  {Math.round(data.forecast.forecastday[0].day.mintemp_c)}
                      <span style={{ fontSize: "15px" }} >
                        °C
                      </span>
                    </span>
                  </Typography>
                  <Typography color={IconStyle.lowTemp} gutterBottom variant="h5" align="center" component="div">
                    <BsArrowDown />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                  >
                    <span className='font'>  {Math.round(data.current.humidity)}
                      <span style={{ fontSize: "15px" }} >
                        %
                      </span>
                    </span>
                  </Typography>
                  <Typography gutterBottom variant="h4" align="center" component="div">
                    <WiHumidity />
                  </Typography>
                </Grid>
                <Grid item xs >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                  >
                    <span className='font'>   {data.forecast.forecastday[0].day.uv}</span>
                  </Typography>
                  <Typography color={IconStyle.uvIndex} gutterBottom variant="h4" align="center" component="div">
                    <BsFillSunFill />
                  </Typography>
                </Grid>
              </Grid>
              <Grid>
                <Typography variant="caption" align="center" display="block" >
                  <span className='font'>   Last updated:{" "}{time}</span>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </div>
      </Card>
    </div >
  )
}

export default WeatherTodayDetails;
