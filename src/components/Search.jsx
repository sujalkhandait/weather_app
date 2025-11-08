import React from "react";
import { useWeatherContext } from "../context/Weather.jsx";
import "./search.css";

export default function Search() {
  const weather = useWeatherContext();
  const { fetchByLocation } = useWeatherContext();

  return (
    <div className="d-flex">
      <h1 className="m-2">Weather Forecasting</h1>
      <div className="input ">
        <div>Search-City</div>
        <div className="input-bar">
          <input
            value={weather.city}
            onChange={(e) => weather.setCity(e.target.value)}
            placeholder="Enter city name..."
          />
        </div>
        <button onClick={weather.fetchData} className="btn btn-primary">
          Get Weather
        </button>
        <button className="m-1 btn btn-primary" onClick={fetchByLocation}>
          Refresh
        </button>
      </div>
    </div>
  );
}
