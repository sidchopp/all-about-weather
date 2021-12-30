import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


// import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { format } from 'date-fns'

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

function WeatherForecast({ data2 }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // console.log(data2)
  // // console.log(format(new Date({day.date}), 'MMM'));
  // const today = new Date(data2.forecast.forecastday[0].date);
  // const tomorrow = new Date(data2.forecast.forecastday[1].date);
  // const dayAfterTomorrow = new Date(data2.forecast.forecastday[2].date);
  // const days = [today, tomorrow, dayAfterTomorrow]
  // console.log(days);

  // const threeDays = data2.forecast.forecastday.map(day => format(new Date(day.date), 'MM/dd/yyyy'))
  // console.log(threeDays);
  return (
    <Container maxWidth="lg" component="main">
      <Grid container spacing={5} alignItems="flex-end">
        {data2.forecast.forecastday.map((day) => (
          // Enterprise card is full width at sm breakpoint
          <Grid
            item
            key={day.date}
            xs={12}
            sm={day.date === '2021-12-28' ? 12 : 6}
            md={4}
          >

            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={day.date}
                subheader={day.day.condition.text}
              />
              <CardMedia
                component="img"
                // height="50"
                image={day.day.condition.icon}
                alt="Weather"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal to cook
                  together with your guests. Add 1 cup of frozen peas along with the mussels,
                  if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
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
                  {day.hour.map((arr) => (
                    <Grid>
                      <Grid container spacing={1}>
                        <Grid item xs>
                          <Typography paragraph>Max.</Typography>
                          <Typography paragraph>
                            {arr.temp_c}
                          </Typography>
                        </Grid>

                        {/* <Grid item xs>
                        <Typography paragraph>Min.</Typography>
                        <Typography paragraph>
                          {day.hour.map(arr => <h5>{arr.temp_c}</h5>)}
                        </Typography>
                      </Grid> */}

                      </Grid>
                    </Grid>
                  ))}

                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                    large plate and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                    stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with artichokes and
                    peppers, and cook without stirring, until most of the liquid is absorbed,
                    15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                    mussels, tucking them down into the rice, and cook again without
                    stirring, until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don’t open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>


          </Grid>
        ))}


      </Grid>
    </Container>
  )
}

export default WeatherForecast;
