import * as React from 'react';

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


function WeatherToday({ data }) {
  console.log(data);
  return (
    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
      <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item>

            <Typography variant="h7" align="center" color="text.secondary" component="p">
              Feels Like
            </Typography>
            <Typography variant="h5" align="center" color="text.primary" component="p">
              {data.current.feelslike_c}°
            </Typography>

          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h1" gutterBottom align="center" color="text.secondary" component="p">
                  {data.current.temp_c}°
                </Typography>

                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  color="text.primary"
                >
                  {data.location.name}
                </Typography>
                <Typography variant="h7" align="center" color="text.secondary" component="p">
                  {data.location.region}, {data.location.country}
                </Typography>
              </Grid>
              {/* <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  Remove
                </Typography>
              </Grid> */}
            </Grid>
            <Grid item>
              <Typography variant="h6" align="center" color="text.primary" component="p">
                {data.current.condition.text}
                <Img src={data.current.condition.icon} alt="Weather" />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default WeatherToday;


