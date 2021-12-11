import React from 'react'
import WeatherForecast from '../weatherForecast/WeatherForecast'
import WeatherToday from '../weatherToday/WeatherToday'

function WeatherAll() {
  return (
    <>
      <WeatherToday />
      <WeatherForecast />
    </>

  )
}

export default WeatherAll
