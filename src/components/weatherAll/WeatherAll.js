import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { formatISO, startOfYesterday } from 'date-fns';
import BackgroundImage from '../dynamic/BackgroundImage';

//Components
import WeatherForecast from '../weatherForecast/WeatherForecast';
import WeatherToday from '../weatherToday/WeatherToday';
import Loader from '../loader/Loader';
import WeatherTodayDetails from '../weatherToday/WeatherTodayDetails';
import WeatherYesterday from '../weatherYesterday/WeatherYesterday'
import GraphDaily from '../charts/GraphDaily';

// Date in ISO format For Yesterday's weather
const yesterday = startOfYesterday()
const yesterdayIso = formatISO(yesterday, { representation: 'date' })

const styles = {
  paperContainer: {
    backgroundImage: `url(${BackgroundImage()})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: "5px"
  }
};

function WeatherAll() {
  //States
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [dataYesterday, setDataYesterday] = useState({});

  // Promisifying the Geolocation API
  const getPosition = function () {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const whereAmI = async function () {
    setLoading(true);
    // Geo Location
    const pos = await getPosition();
    const { latitude: lat, longitude: lon } = pos.coords;
    try {
      const responseGeo = await fetch(`${process.env.REACT_APP_API_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${lat},${lon}&days=7&aqi=yes&alerts=yes`)
      const dataGeo = await responseGeo.json();
      setLoading(false)
      setData(dataGeo)

      // For yesterday's weather
      const responseYesterday = await fetch(`${process.env.REACT_APP_API_URL}/history.json?key=${process.env.REACT_APP_API_KEY}&q=${lat},${lon}&dt=${yesterdayIso}`);
      const dataYesterday = await responseYesterday.json();
      setDataYesterday(dataYesterday);
    } catch (err) {
      setLoading(false)
      console.log('This is the error:', err.message);
    }
  }
  useEffect(() => {
    whereAmI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // if data is not fetched,show loader
  if (loading) {
    return (
      <Loader />
    )
  }
  return (
    <>
      {(typeof data.current !== 'undefined' && typeof data.location !== 'undefined' && typeof data.forecast !== 'undefined' && typeof dataYesterday.forecast !== 'undefined')
        ? <>
          <div style={styles.paperContainer}>
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={4}>
                  <WeatherToday data={data} />
                </Grid>
                <Grid item xs={12} md={4} lg={8}>
                  <WeatherTodayDetails data={data} />
                </Grid>
              </Grid>
            </Container>
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
              <GraphDaily data1={data} />
            </Container>
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
              <WeatherForecast data2={data} />
            </Container>
            <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
              <WeatherYesterday dataYesterday={dataYesterday} />
            </Container>
          </div>
        </>
        : <div></div>
      }
    </>
  )
}

export default WeatherAll;
