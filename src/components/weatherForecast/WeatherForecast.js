import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
// import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

function WeatherForecast({ data2 }) {
  console.log(data2)
  return (
    <Container maxWidth="lg" component="main">
      {/* <Grid container spacing={5} alignItems="flex-end">
        {tiers.map((tier) => (
          // Enterprise card is full width at sm breakpoint
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === 'Enterprise' ? 12 : 6}
            md={4}
          >
            <Card>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: 'center' }}
                action={tier.title === 'Pro' ? <StarIcon /> : null}
                subheaderTypographyProps={{
                  align: 'center',
                }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                    mb: 2,
                  }}
                >
                  <Typography component="h2" variant="h3" color="text.primary">
                    ${tier.price}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    /mo
                  </Typography>
                </Box>
                <ul>
                  {tier.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button fullWidth variant={tier.buttonVariant}>
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid> */}




      <Grid container spacing={5} alignItems="flex-end">
        {data2.forecast.forecastday.map((day) => (
          // Enterprise card is full width at sm breakpoint
          <Grid
            item
            key={day.date}
            xs={12}
            sm={day.date === '2021-12-19' ? 12 : 6}
            md={4}
          >

            <Card>

              <CardHeader
                title={day.date}
                subheader={day.day.condition.text}
                titleTypographyProps={{ align: 'center' }}
                action={day.date === '2021-12-19' ? <StarIcon /> : null}
                subheaderTypographyProps={{
                  align: 'center',
                }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                    mb: 2,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      opacity: [0.9, 0.8, 0.7],
                    },

                  }}
                >
                  <Grid container spacing={4}>
                    <Grid item xs >
                      <Typography variant="h7" align="left" color="text.secondary" component="p">
                        Max
                      </Typography>
                      <Typography variant="h5" align="left" color="text.primary" component="p">
                        {day.day.maxtemp_c}
                      </Typography>
                    </Grid>

                    {/* <Grid item xs >
                      <Typography variant="h3" gutterBottom align="center" color="text.secondary" component="p">
                         | {day.day.mintemp_c}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        (°C)
                      </Typography>
                    </Grid> */}

                    {/* <Grid item xs={6} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item >

                          <Typography component="h4" variant="h6" color="text.secondary">

                            <img src={day.day.condition.icon} alt="Paris" />

                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid> */}
                    <Grid item xs={6} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item >
                          <Typography variant="h1" gutterBottom align="center" color="text.secondary" component="p">
                            HI
                          </Typography>
                          <Typography
                            component="h1"
                            variant="h4"
                            align="center"
                            color="text.primary"
                          >
                            <img src={day.day.condition.icon} alt="Paris" />
                          </Typography>
                          <Typography variant="h7" align="center" color="text.secondary" component="p">
                            Bye
                          </Typography>
                        </Grid>
                        {/* <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  Remove
                </Typography>
              </Grid> */}
                      </Grid>
                    </Grid>

                    <Grid item xs>
                      <Typography variant="h7" align="right" color="text.secondary" component="p">
                        Min
                      </Typography>
                      <Typography variant="h5" align="right" color="text.primary" component="p">
                        {day.day.mintemp_c}
                      </Typography>
                    </Grid>
                  </Grid>

                </Box>
                {/* <ul>
                  {tier.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}
                </ul> */}
              </CardContent>
              <CardActions>
                {/* <Button fullWidth variant={day.day.daily_chance_of_snow}>
                  {day.day.daily_chance_of_snow}
                </Button> */}
              </CardActions>

            </Card>


          </Grid>
        ))}


      </Grid>
    </Container>
  )
}

export default WeatherForecast;
