import React, { useState, useContext, createContext, useEffect } from "react";

import { getDataForCity } from "../api/data.js";

const WeatherContext = createContext(null);

//this just a custom hook to simplfy the useContext usage
export const useWeatherContext = () => useContext(WeatherContext);

export function WeatherProvider({ children }) {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");

  //function feching data from api
  const fetchData = async () => {
    if (!city) return;
    const weatherData = await getDataForCity(city);
    setData(weatherData);
  };

  // fetch by gps coordinates on initial load
  const fetchByLocation = () => {
    if (!navigator.geolocation) {
      alert("geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=5808d270dc4a40ebb5f114807250511&q=${latitude},${longitude}&aqi=no`
          );

          const locationData = await response.json();
          setData(locationData);
          setCity(locationData.location.name);
        } catch (err) {
          console.error("error fetching weather data by location:", err);
        }
      },
      (error) => {
        alert("unable to retrieve your location");
      }
    );
  };

  useEffect(() => {
    fetchByLocation();
  }, []);
  return (
    <WeatherContext.Provider
      value={{ city, setCity, data, setData, fetchData, fetchByLocation }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
