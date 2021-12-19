import * as React from 'react';
import { format } from 'date-fns'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

// Today's Date and Day
const day = format(new Date(), 'do');
const weekday = format(new Date(), 'eeee');
const month = format(new Date(), 'MMMM');
const today = `${weekday},${day}${" "}${month}`
// console.log(today);


function WeatherToday({ data }) {
  // console.log(data);
  return (
    // <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
    <div  >
      <Container maxWidth="xl" sx={{
        mt: 4,
        mb: 4
      }}>
        {/* <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}> */}
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 300,
            backgroundColor: "skyblue"
          }}
          elevation={9}
          backgroundColor="blue"
        >
          <Grid container spacing={4}>

            <Grid item xs >
              <Typography
                component="h1"
                variant="h4"
                align="left"
                color="text.primary"
              >
                {data.location.name}
              </Typography>
              <Typography gutterBottom variant="h7" align="left" color="text.primary" component="p">
                {data.location.region}, {data.location.country}
              </Typography>
            </Grid>

            <Grid item xs={6} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item >
                  <Typography variant="h1" gutterBottom align="center" color="text.secondary" component="p">
                    {data.current.temp_c}°
                  </Typography>
                  <Typography
                    component="h1"
                    variant="h4"
                    align="center"
                    color="text.primary"
                  >
                    {data.current.condition.text}
                  </Typography>
                  <Typography variant="h7" align="center" color="text.secondary" component="p">
                    <Img src={data.current.condition.icon} alt="Weather" />
                  </Typography>
                </Grid>
                {/* <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  Remove
                </Typography>
              </Grid> */}
              </Grid>
            </Grid>

            {/* <Grid item>
            <Typography variant="h6" align="right" color="text.primary" component="p">
              {data.current.condition.text}
              <Img src={data.current.condition.icon} alt="Weather" />
            </Typography>
          </Grid> */}
            <Grid item xs>
              <Typography variant="h9" align="right" color="text.secondary" component="p">
                {today}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  )
}

export default WeatherToday;


