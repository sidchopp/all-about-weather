import React from 'react';
import './App.css';

//Components
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WeatherAll from './components/WeatherAll';

function App() {
  return (
    <React.Fragment>
      <main>
        <WeatherAll />
        <ScrollToTop />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
