import React from "react";
import { useWeatherContext } from "../context/Weather.jsx";
import "./search.css";

export default function Card() {
  const { data, fetchByLocation } = useWeatherContext();
  if (!data) return <p> Fetching weather data for your location... 🌍</p>;

  return (
    <>
      <div className="container mt-4">
        <div className="card shadow-lg border-0 rounded-4 p-4">
          <div className="card-body">
            {/* div to wrap top content */}
            <div
              className="d-flex "
              style={{
                color: "white",
                justifyContent: "space-evenly",
                alignItems: "center",
                borderRadius: "12px",
                marginBottom: "1rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                backgroundColor: "rgba(60, 58, 58, 0.3)",
              }}
            >
              <div>
                {/* --- Main Weather --- */}
                <div className="d-flex align-items-center justify-content-center mb-4">
                  <img
                    src={data.current.condition.icon}
                    alt={data.current.condition.text}
                    className="me-3"
                  />
                  <div>
                    <h4>{data.current.condition.text}</h4>
                    <h2>
                      {data.current.temp_c}°C / {data.current.temp_f}°F
                    </h2>
                    <p>Feels like: {data.current.feelslike_c}°C</p>
                  </div>
                </div>
              </div>
              <div>
                {/* --- Location Info --- */}
                <h3 className="card-title mb-3 text-center">
                  {data.location.name}, {data.location.country}
                </h3>
                <p className="text-center text-muted mb-4">
                  Region: {data.location.region || "N/A"} <br />
                  Timezone: {data.location.tz_id} <br />
                  Local Time: {data.location.localtime}
                </p>
              </div>
            </div>
            {/* --- Wind & Pressure --- */}
            <div className="row text-center mb-3">
              <div className="col-md-3 col-6 mb-3 bg">
                <h6>Wind Speed</h6>
                <p>
                  {data.current.wind_kph} kph ({data.current.wind_mph} mph)
                </p>
              </div>
              <div className="col-md-3 col-6 mb-3 bg">
                <h6>Wind Direction</h6>
                <p>
                  {data.current.wind_dir} ({data.current.wind_degree}°)
                </p>
              </div>
              <div className="col-md-3 col-6 mb-3 bg">
                <h6>Pressure</h6>
                <p>{data.current.pressure_mb} mb</p>
              </div>
              <div className="col-md-3 col-6 mb-3 bg">
                <h6>Humidity</h6>
                <p>{data.current.humidity}%</p>
              </div>
            </div>

            {/* --- Temperature Details --- */}
            <div className="row text-center mb-3">
              <div className="col-md-3 col-6 mb-3 bg">
                <h6>Heat Index</h6>
                <p>{data.current.heatindex_c}°C</p>
              </div>
              <div className="col-md-3 col-6 mb-3 bg">
                <h6>Dew Point</h6>
                <p>{data.current.dewpoint_c}°C</p>
              </div>
              <div className="col-md-3 col-6 mb-3 bg">
                <h6>Wind Chill</h6>
                <p>{data.current.windchill_c}°C</p>
              </div>
              <div className="col-md-3 col-6 mb-3 bg">
                <h6>UV Index</h6>
                <p>{data.current.uv}</p>
              </div>
            </div>

            {/* --- Visibility & Radiation --- */}
            <div className="row text-center mb-3">
              <div className="col-md-3 col-6 mb-3 bg">
                <h6>Visibility</h6>
                <p>{data.current.vis_km} km</p>
              </div>
              <div className="col-md-3 col-6 mb-3 bg">
                <h6>Gust</h6>
                <p>{data.current.gust_kph} kph</p>
              </div>
              <div className="col-md-3 col-6 mb-3 bg">
                <h6>Short Radiation</h6>
                <p>{data.current.short_rad}</p>
              </div>
              <div className="col-md-3 col-6 mb-3 bg">
                <h6>Diffuse Radiation</h6>
                <p>{data.current.diff_rad}</p>
              </div>
            </div>

            {/* --- Extra Solar Data --- */}
            <div className="row text-center">
              <div className="col-md-4 mb-3 bg">
                <h6>DNI</h6>
                <p>{data.current.dni}</p>
              </div>
              <div className="col-md-4 mb-3 bg">
                <h6>GTI</h6>
                <p>{data.current.gti}</p>
              </div>
              <div className="col-md-4 mb-3 bg">
                <h6>Cloud Coverage</h6>
                <p>{data.current.cloud}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
