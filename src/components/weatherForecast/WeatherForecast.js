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
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { BsFillSunriseFill, BsFillSunsetFill, BsArrowUp, BsArrowDown } from "react-icons/bs";

//Components
import useStyles from '../styles/UseStyles';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


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
  // console.log(data2)
  const { forecast: { forecastday } } = data2;
  console.log(forecastday);
  //States
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container maxWidth="xl" component="main">
      <Grid container spacing={6} alignItems="flex-end">
        {forecastday.map((day) => (
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
                  avatar={
                    <Grid container spacing={1} >
                      <Typography variant="caption" display="block" align="center" component="p">
                        <Img src={day.day.condition.icon} alt="Weather" />
                        <span >  {day.day.condition.text}</span>
                      </Typography>
                    </Grid>
                  }
                  action={
                    day.date === todayDate
                      ? <Typography variant="caption" display="block" align="right"  >
                        Today
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
                          align="center"
                        >
                          {Math.round(day.day.maxtemp_c)}
                          <span style={{ fontSize: "15px" }} >
                            °C
                          </span>
                        </Typography>
                        <Typography gutterBottom variant="h5" align="center" component="p">
                          <BsArrowUp />
                        </Typography>
                      </Grid>
                      <Grid item xs >
                        <Typography
                          component="h1"
                          variant="h5"
                          align="center"
                        >
                          {day.astro.sunrise.slice(1, 5)}
                          <span style={{ fontSize: "15px" }} >
                            am
                          </span>
                        </Typography>
                        <Typography variant="h4" align="center" component="p">
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
                          {Math.round(day.day.mintemp_c)}
                          <span style={{ fontSize: "15px" }} >
                            °C
                          </span>
                        </Typography>
                        <Typography gutterBottom variant="h5" align="center" component="p">
                          <BsArrowDown />
                        </Typography>
                      </Grid>
                      <Grid item xs >
                        <Typography
                          component="h1"
                          variant="h5"
                          align="center"
                        >
                          {day.astro.sunset.slice(1, 5)}
                          <span style={{ fontSize: "15px" }} >
                            pm
                          </span>
                        </Typography>
                        <Typography variant="h4" align="center" component="p">
                          <BsFillSunsetFill />
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>


                {/* Collapse */}

                <CardActions disableSpacing>


                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>

                    {day.hour.map((value) => {
                      return (
                        <>
                          < Grid container spacing={1}>
                            <Grid item xs  >
                              <Typography variant="h7" align="center">
                                {value.time.slice(11, 16)}
                              </Typography>
                            </Grid>
                            <Grid item xs  >
                              <Typography variant="h6" align="center">
                                {Math.round(value.temp_c)}°C
                              </Typography>
                            </Grid>
                            <Grid item xs  >
                              <Typography variant="h6" align="center">
                                {value.condition.text}
                              </Typography>
                            </Grid>
                          </Grid>
                        </>)
                    })}
                  </CardContent>
                </Collapse>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container >
  )
}

export default WeatherForecast;
