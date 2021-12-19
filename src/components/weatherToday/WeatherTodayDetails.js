import React from 'react'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';

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
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

            <Grid item xs={2} sm={4} md={4} >
              <Typography
                component="h1"
                variant="h4"
                align="left"
                color="text.primary"
              >
                {data.location.name}

                {data.forecast.forecastday[0].day.maxtemp_c}

              </Typography>
            </Grid>
            <Grid item xs={2} sm={4} md={4} >
              <Typography
                component="h1"
                variant="h4"
                align="left"
                color="text.primary"
              >
                {data.location.name}

                {data.forecast.forecastday[0].day.maxtemp_c}

              </Typography>
            </Grid>

          </Grid>
        </Box>
      </Paper>
    </div>
  )
}

export default WeatherTodayDetails
