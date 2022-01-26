import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardHeader from '@mui/material/CardHeader';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
// import GlobalStyles from '@mui/material/GlobalStyles';
// import Container from '@mui/material/Container';
// import { ReplayCircleFilledTwoTone } from '@mui/icons-material';

import { Link as RouterLink } from 'react-router-dom';



function Navbar() {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <Link
            component={RouterLink}
            to=""
            variant="button"
            color="text.primary"
            sx={{ my: 1, mx: 1.5 }}
          >
            All About Weather
          </Link>
        </Typography>
        <nav>
          <Link
            component={RouterLink}
            to=""
            variant="button"
            color="text.primary"
            sx={{ my: 1, mx: 1.5 }}
          >
            Weather
          </Link>
          <Link
            component={RouterLink}
            to="forecast"
            variant="button"
            color="text.primary"
            sx={{ my: 1, mx: 1.5 }}
          >
            Forecast
          </Link>
          <Link
            component={RouterLink}
            to="yesterday"
            variant="button"
            color="text.primary"
            sx={{ my: 1, mx: 1.5 }}
          >
            Yesterday
          </Link>
        </nav>
        {/* <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button> */}
      </Toolbar>
    </AppBar>

  )
}

export default Navbar;
