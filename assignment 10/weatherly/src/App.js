import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forecast from "./components/forecast/Forecast";
import HourlyForecast from "./components/hourlyforecast/HourlyForecast";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Forecast/>} />
          <Route path="/:day" element={<HourlyForecast/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
