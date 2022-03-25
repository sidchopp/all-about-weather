import React from 'react';
import './App.css';

//Components
import Footer from './components/footer/Footer';
import WeatherAll from './components/weatherAll/WeatherAll';

function App() {
  return (
    <React.Fragment>
      <WeatherAll />
      <Footer />
    </React.Fragment>
  );
}

export default App;
