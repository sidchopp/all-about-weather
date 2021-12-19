import React, { useState, useEffect } from 'react'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';


import WeatherForecast from '../weatherForecast/WeatherForecast'
import WeatherToday from '../weatherToday/WeatherToday'
import Loader from '../loader/Loader'
import WeatherTodayDetails from '../weatherToday/WeatherTodayDetails';


import { formatISO, startOfYesterday } from 'date-fns'
import GraphDaily from '../charts/GraphDaily'
import PieChartDaily from '../charts/PieChartDaily'
import PieChartYesterday from '../charts/PieChartYesterday'
import Image from '../../images/background.jpg'

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: "5px"
  }
};

// Date in ISO format For Yesterday's weather
const yesterday = startOfYesterday()
const yesterdayIso = formatISO(yesterday, { representation: 'date' })
// console.log(yesterdayIso);
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
    // console.log(pos.coords);

    try {

      // For today's weather and for weather forecast
      const responseGeo = await fetch(`${process.env.REACT_APP_API_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${lat},${lon}&days=7&aqi=yes&alerts=yes`)
      // console.log("Response is:", responseGeo);
      const dataGeo = await responseGeo.json();
      // console.log(dataGeo);
      setLoading(false)
      setData(dataGeo)

      // For yesterday's weather
      const responseYesterday = await fetch(`${process.env.REACT_APP_API_URL}/history.json?key=${process.env.REACT_APP_API_KEY}&q=${lat},${lon}&dt=${yesterdayIso}`)
      const dataYesterday = await responseYesterday.json();
      // console.log(dataYesterday);
      setDataYesterday(dataYesterday);

    } catch (err) {
      setLoading(false)
      console.log('This is the error:', err.message);
    }


  }
  useEffect(() => {
    whereAmI();
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
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={3}>
                  <WeatherToday data={data} />
                </Grid>
                <Grid item xs={12} md={4} lg={9}>
                  <WeatherTodayDetails data={data} />
                </Grid>
              </Grid>
            </Container>

            {/* <Toolbar /> */}
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                  <GraphDaily data1={data} />
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <PieChartDaily />
                </Grid>
              </Grid>
            </Container>
          </div>
          <PieChartYesterday dataYesterday={dataYesterday} />
          <WeatherForecast data2={data} />

        </>
        : <div></div>
      }
    </>

  )
}

export default WeatherAll
