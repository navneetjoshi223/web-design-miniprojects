import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HourlyForecast = (props) => {
  const { day } = useParams();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    console.log(props.forecastData);
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let filteredForecastData = [];
    props.forecastData.forEach((data) => {
      let dayNumber = new Date(data.dt_txt).getDay();
      if (dayNames[dayNumber] === day) {
        filteredForecastData.push(data);
      }
    });
    console.log("Filtered data for this day", filteredForecastData);
    setFilteredData(filteredForecastData);
  }, [props.forecastData, day]);

  return (
    <div className="row m-3">
      <h2>Hourly forecast for {day}</h2>

      {filteredData &&
        filteredData.map((forecast, index) => (
          <div
            key={index}
            className="card border-primary m-3 p-3 hourly-weather-card col-3"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">{forecast.dt_txt}</h5>
              <img
                src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@4x.png`}
                alt="Weather icon"
              />
              <h3 className="card-text">
                <b>{forecast.main.temp} &deg;C</b>
              </h3>
              <p className="card-text">Min.: {forecast.main.temp_min} &deg;C</p>
              <p className="card-text">Max.: {forecast.main.temp_max} &deg;C</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default HourlyForecast;
