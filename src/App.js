import React from 'react';
import './App.css';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

//Components
import Footer from './components/footer/Footer';
import WeatherAll from './components/weatherAll/WeatherAll';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <WeatherAll />
      <Footer />
    </React.Fragment>
  );
}

export default App;
