import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const HourlyForecast = (props) => {
  const { day } = useParams();

  useEffect(() => {
    console.log(props.forecastData);
  }, [props.forecastData]);

  return (
    <div>
      <h2>Hourly forecast for {day}</h2>
      {/* Display hourly forecast information */}
    </div>
  );
};

export default HourlyForecast;
