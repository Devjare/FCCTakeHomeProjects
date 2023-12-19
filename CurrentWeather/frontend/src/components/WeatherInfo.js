import React, { Component, useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";

export default function WeatherInfo() {
  
  const [ weather, setWeather ] = useState(null)
  const [ position, setPosition ] = useState([])
  const [ queryWeatherInterval, setQueryWeatherInterval ] = useState(0) 
      
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition([
        pos.coords.latitude, 
        pos.coords.longitude
      ]) }
    )
  }

  useEffect(() => {
 
    setQueryWeatherInterval(setInterval(fetchWeather, 10000))
    return () => {
      clearInterval(queryWeatherInterval)
      setPosition([])
    }
  }, [weather]);
 
  function fetchWeather() {
    fetch(`/get-weather?latitude=${position[0]}&longitude=${position[1]}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Weather on position ", position)
        console.log(data)
        setWeather(data)
      })
  }

  // NOTE: When passing on the js fracion of code an Object {}
  // it raises an error, it needs to be a specific value from
  // primitive datatypes, or a react component
  return (
  <Card>
    <Typography variant="h6" component="h6">
      Weather on {position} is {weather ? weather.weather[0].main : ""}
    </Typography>
  </Card>);
}
