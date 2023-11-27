import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "../weather-card/WeatherCard";

const Forecast = () => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Fetch data from OpenWeatherMap API
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=Boston&units=metric&appid=20c911826650b1709e2bf1dbf85c366a`
        );

        // Process and set the forecast data
        if (response && response.data && response.data.list) {
            setForecastData(response.data.list);
        }
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      <h1>5-Day Weather Forecast</h1>
      <div className="forecast-container row">
        {forecastData.map(
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
