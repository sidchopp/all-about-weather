import React from 'react';
import './App.css';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


//Components
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import WeatherAll from './components/weatherAll/WeatherAll';
import WeatherForecast from './components/weatherForecast/WeatherForecast';

function App() {
  return (
    <Router>
      <React.Fragment>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<WeatherAll />} />
          <Route path="/forecast" element={<WeatherForecast />} />
        </Routes>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
