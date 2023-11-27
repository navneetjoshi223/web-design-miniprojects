import React from "react";
import WeatherCard from "../weather-card/WeatherCard";

const Forecast = (props) => {


  return (
    <div>
      <h1>5-Day Weather Forecast</h1>
      <div className="forecast-container row">
        {props.forecastData && props.forecastData.map(
          (forecast, index) =>
            forecast.dt_txt.includes("12:00:00") && (
              <div key={index} className="col-3">
                <WeatherCard forecast={forecast} />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Forecast;
