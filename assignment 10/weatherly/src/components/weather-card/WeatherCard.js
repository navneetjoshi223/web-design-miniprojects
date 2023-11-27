import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './WeatherCard.css';

const WeatherCard = ({ forecast }) => {
  
  const [dayOfTheWeek, setDayOfTheWeek] = useState('');
  const [forecastDate, setForecastDate] = useState('');

  useEffect(() => {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    setForecastDate(new Date(forecast.dt_txt).toLocaleString('en-US', { day: 'numeric', month: 'short' }));
    let dayNumber = new Date(forecast.dt_txt).getDay();
    setDayOfTheWeek(dayNames[dayNumber]);
  }, [forecast.dt_txt]);

  return (
    <Link to={`/${dayOfTheWeek}`} className="text-decoration-none">
      <div className="card border-primary m-3 weather-card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{dayOfTheWeek}, {forecastDate}</h5>
          <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@4x.png`} alt=""></img>
          <h3 className="card-text"><b>{forecast.main.temp} &deg;C</b></h3>
          <p className="card-text">Min.: {forecast.main.temp_min} &deg;C</p>
          <p className="card-text">Max.: {forecast.main.temp_max} &deg;C</p>
        </div>
      </div>
    </Link>
  );
};

export default WeatherCard;
