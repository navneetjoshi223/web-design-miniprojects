import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forecast from "./components/forecast/Forecast";
import HourlyForecast from "./components/hourlyforecast/HourlyForecast";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

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
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Forecast forecastData={forecastData}/>} />
          <Route path="/:day" element={<HourlyForecast forecastData={forecastData}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
