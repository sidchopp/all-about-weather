import React from 'react';
import './App.css';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

//Components
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import WeatherForecast from './components/weatherForecast/WeatherForecast';
import WeatherToday from './components/weatherToday/WeatherToday';


function App() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Navbar />
      <WeatherToday />
      <WeatherForecast />
      <Footer />
    </React.Fragment>
  );
}

export default App;
