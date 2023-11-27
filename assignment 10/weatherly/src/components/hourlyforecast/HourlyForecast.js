import React from 'react';
import { useParams } from 'react-router-dom';

const HourlyForecast = () => {
  const { day } = useParams();

  return (
    <div>
      <h2>Hourly forecast for {day}</h2>
      {/* Display hourly forecast information */}
    </div>
  );
};

export default HourlyForecast;
