import React from 'react';
import './App.css';

//Components
import Footer from './components/Footer';
import WeatherAll from './components/WeatherAll';

function App() {
  return (
    <React.Fragment>
      <main>
        <WeatherAll />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
