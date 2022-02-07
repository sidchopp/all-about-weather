import * as React from 'react';
import { format } from 'date-fns'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

//For today's card
const date = format(new Date(), "yyyy-MM-dd")

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function WeatherForecast({ data2 }) {

  // console.log(data2)
  return (
    <Container maxWidth="xl" component="main">
      <Grid container spacing={4} alignItems="flex-end">
        {data2.forecast.forecastday.map((day) => (
          // Today's card is full width at sm breakpoint
          <Grid
            item
            key={day.astro.sunrise}
            xs={12}
            sm={day.date === date ? 12 : 6}
            md={4}
          >
            <Card style={{ padding: "10px" }}  >

              <CardHeader
                avatar={<Img src={day.day.condition.icon} alt="Weather" />}
                action={
                  day.date === date
                    ? <Typography variant="h6" align="center" color="text.primary" component="p">
                      Today
                    </Typography>
                    : <Typography variant="h7" align="center" color="text.secondary" component="p">
                      {day.date}
                    </Typography>

                }
                subheader={
                  <Typography variant="h5" align="center" color="text.primary" component="p">
                    {day.day.condition.text}
                  </Typography>
                }
              />
              <CardContent>
                <Grid >

                  {/* 1st Row */}
                  < Grid container spacing={2}>
                    <Grid item xs >
                      <Typography
                        component="h1"
                        variant="h5"
                        align="center"
                        color="text.primary"
                      >
                        {day.day.maxtemp_c}°
                        <span style={{ fontSize: "15px" }} >
                          C
                        </span>
                      </Typography>
                      <Typography gutterBottom variant="h7" align="center" color="text.secondary" component="p">
                        Max. T
                      </Typography>
                    </Grid>
                    <Grid item xs >
                      <Typography
                        component="h1"
                        variant="h5"
                        align="center"
                        color="text.primary"
                      >
                        {day.day.mintemp_c}°
                        <span style={{ fontSize: "15px" }} >
                          C
                        </span>
                      </Typography>
                      <Typography gutterBottom variant="h7" align="center" color="text.secondary" component="p">
                        Min. T
                      </Typography>
                    </Grid>
                    <Grid item xs >
                      <Typography
                        component="h1"
                        variant="h5"
                        align="center"
                        color="text.primary"
                      >
                        {day.day.avgtemp_c}°
                        <span style={{ fontSize: "15px" }} >
                          C
                        </span>
                      </Typography>
                      <Typography gutterBottom variant="h7" align="center" color="text.secondary" component="p">
                        Avg. T
                      </Typography>
                    </Grid>
                  </Grid>

                  {/* 2nd Row */}
                  <Grid container spacing={2}>
                    <Grid item xs >
                      <Typography
                        component="h1"
                        variant="h5"
                        align="center"
                        color="text.primary"
                      >
                        {day.astro.sunrise.slice(0, 5)}
                        <span style={{ fontSize: "15px" }} >
                          AM
                        </span>
                      </Typography>
                      <Typography gutterBottom variant="h7" align="center" color="text.secondary" component="p">
                        Sunrise
                      </Typography>
                    </Grid>
                    <Grid item xs >
                      <Typography
                        component="h1"
                        variant="h5"
                        align="center"
                        color="text.primary"
                      >
                        {day.astro.sunset.slice(0, 5)}
                        <span style={{ fontSize: "15px" }} >
                          PM
                        </span>
                      </Typography>
                      <Typography gutterBottom variant="h7" align="center" color="text.secondary" component="p">
                        Sunset
                      </Typography>
                    </Grid>
                    <Grid item xs >
                      <Typography
                        component="h1"
                        variant="h5"
                        align="center"
                        color="text.primary"
                      >
                        {day.day.uv}
                      </Typography>
                      <Typography gutterBottom variant="h7" align="center" color="text.secondary" component="p">
                        UV
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container >
  )
}

export default WeatherForecast;
