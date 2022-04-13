import * as React from 'react';
import { format } from 'date-fns';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { BsFillSunriseFill, BsFillSunsetFill, BsArrowUp, BsArrowDown } from "react-icons/bs";

//Components
import { useGlobalContext } from './Context';
import IconStyle from './styles/IconStyles';

//For today's date
const todayDate = format(new Date(), "yyyy-MM-dd")

// Icons image styling
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function WeatherForecast() {
  const { data } = useGlobalContext();
  return (
    <Container maxWidth="xl" component="main">
      <Grid container spacing={6} alignItems="flex-end">
        {data.forecast.forecastday.map((day) => (
          // Today's card is full width at sm breakpoint
          <Grid
            item
            key={day.astro.sunrise}
            xs={12}
            sm={day.date === todayDate ? 12 : 6}
            md={4}
          >
            <div className='card'>
              <Card variant="outlined">
                <div className='card-text-background'>
                  <CardHeader
                    avatar={
                      <Grid container spacing={1} >
                        <Typography variant="caption" display="block" align="center" component="p">
                          <Img src={day.day.condition.icon} alt="Weather" />
                          <span className='font'>  {day.day.condition.text}</span>
                        </Typography>
                      </Grid>
                    }
                    action={
                      day.date === todayDate
                        ? <Typography variant="caption" display="block" align="right"  >
                          <span className='font'>  Today</span>
                        </Typography>
                        : <Typography variant="caption" display="block" align="right"  >
                          <span className='font'> {day.date.slice(-5)}</span>
                        </Typography>
                    }
                  />
                  <CardContent>
                    <Grid >

                      {/* 1st Row */}
                      < Grid container spacing={1}>
                        <Grid item xs >
                          <Typography
                            component="h1"
                            variant="h5"
                            align="center"
                          >
                            <span className='font'>
                              {Math.round(day.day.maxtemp_c)}
                              <span style={{ fontSize: "15px" }} >
                                °C
                              </span>
                            </span>
                          </Typography>
                          <Typography color={IconStyle.highTemp} gutterBottom variant="h5" align="center" component="p">
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
                              {day.astro.sunrise.slice(1, 5)}
                              <span style={{ fontSize: "15px" }} >
                                am
                              </span>
                            </span>
                          </Typography>
                          <Typography color={IconStyle.sunRise} variant="h4" align="center" component="p">
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
                            align="center"
                          >
                            <span className='font'>
                              {Math.round(day.day.mintemp_c)}
                              <span style={{ fontSize: "15px" }} >
                                °C
                              </span>
                            </span>
                          </Typography>
                          <Typography color={IconStyle.lowTemp} gutterBottom variant="h5" align="center" component="p">
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
                              {day.astro.sunset.slice(1, 5)}
                              <span style={{ fontSize: "15px" }} >
                                pm
                              </span>
                            </span>
                          </Typography>
                          <Typography color={IconStyle.sunSet} variant="h4" align="center" component="p">
                            <BsFillSunsetFill />
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </div>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container >
  )
}

export default WeatherForecast;
