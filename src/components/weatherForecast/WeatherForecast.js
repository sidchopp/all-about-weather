import * as React from 'react';
import { format } from 'date-fns';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { BsFillSunriseFill, BsFillSunsetFill, BsArrowUp, BsArrowDown } from "react-icons/bs";

//Components
import useStyles from '../styles/UseStyles';


//For today's and tomorrow's date
const todayDate = format(new Date(), "yyyy-MM-dd")
// const tomdate = new Date().setDate(new Date().getDate() + 1)
// const tomorrowDate = format(tomdate, "yyyy-MM-dd")
// const dayAfterTomorrow = format(new Date().setDate(new Date().getDate() + 2), "yyyy-MM-dd")
// console.log(todayDate, tomorrowDate, dayAfterTomorrow);

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function WeatherForecast({ data2 }) {
  const classes = useStyles();
  // console.log(data2)
  return (
    <Container maxWidth="xl" component="main">
      <Grid container spacing={6} alignItems="flex-end">
        {data2.forecast.forecastday.map((day) => (
          // Today's card is full width at sm breakpoint

          <Grid
            item
            key={day.astro.sunrise}
            xs={12}
            sm={day.date === todayDate ? 12 : 6}
            md={4}
          >
            <Paper
              sx={{
                p: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
              elevation={9}
              className={classes.paper}
            >
              <Card className={classes.card}   >
                <CardHeader
                  className={classes.darkColor}
                  avatar={<Grid container spacing={1} >
                    <Typography variant="caption" display="block" align="center" component="p">
                      <Img src={day.day.condition.icon} alt="Weather" />
                      <span >  {day.day.condition.text}</span>
                    </Typography>
                  </Grid>}
                  action={
                    day.date === todayDate
                      ? <Typography variant="caption" display="block" align="right"  >
                        TODAY
                      </Typography>
                      : <Typography variant="caption" display="block" align="right"  >
                        {day.date.slice(-5)}
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
                          align="left"

                        >
                          {day.day.maxtemp_c}°
                          <span style={{ fontSize: "15px" }} >
                            C
                          </span>
                        </Typography>
                        <Typography gutterBottom variant="h5" align="left" component="p">
                          <BsArrowUp />
                        </Typography>
                      </Grid>
                      <Grid item xs >
                        <Typography
                          component="h1"
                          variant="h5"
                          align="right"

                        >
                          {day.day.mintemp_c}°
                          <span style={{ fontSize: "15px" }} >
                            C
                          </span>
                        </Typography>
                        <Typography gutterBottom variant="h5" align="right" component="p">
                          <BsArrowDown />
                        </Typography>
                      </Grid>
                      {/* <Grid item xs >
                        <Typography
                          component="h1"
                          variant="h5"
                          align="right"
                          
                        >
                          {day.day.avgtemp_c}°
                          <span style={{ fontSize: "15px" }} >
                            C
                          </span>
                        </Typography>
                        <Typography gutterBottom variant="h5" align="right"  component="p">
                          <CgCompressV />
                        </Typography>
                      </Grid> */}
                    </Grid>

                    {/* 2nd Row */}
                    <Grid container spacing={1}>
                      <Grid item xs >
                        <Typography
                          component="h1"
                          variant="h5"
                          align="left"

                        >
                          {day.astro.sunrise.slice(0, 5)}
                          <span style={{ fontSize: "15px" }} >
                            am
                          </span>
                        </Typography>
                        <Typography variant="h4" align="left" component="p">
                          <BsFillSunriseFill />
                        </Typography>
                      </Grid>
                      <Grid item xs >
                        <Typography
                          component="h1"
                          variant="h5"
                          align="right"

                        >
                          {day.astro.sunset.slice(0, 5)}
                          <span style={{ fontSize: "15px" }} >
                            pm
                          </span>
                        </Typography>
                        <Typography variant="h4" align="right" component="p">
                          <BsFillSunsetFill />
                        </Typography>
                      </Grid>
                      {/* <Grid item xs >
                        <Typography
                          component="h1"
                          variant="h5"
                          align="right"
                          
                        >
                          {day.day.uv}
                        </Typography>
                        <Typography variant="h4" align="right"  component="p">
                          <BsFillSunFill />
                        </Typography>
                      </Grid> */}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container >
  )
}

export default WeatherForecast;
