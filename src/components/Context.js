import React, { useState, useContext, useEffect } from 'react';
import { formatISO, startOfYesterday } from 'date-fns';
const AppContext = React.createContext();

// Date in ISO format For Yesterday's weather
const yesterday = startOfYesterday()
const yesterdayIso = formatISO(yesterday, { representation: 'date' })

const AppProvider = ({ children }) => {
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

  return <AppContext.Provider value={{ loading, setLoading, data, setData, dataYesterday, setDataYesterday }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }