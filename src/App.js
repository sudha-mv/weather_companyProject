import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import CurrentWeatherScreen from "./screens/CurrentWeatherScreen";
import ForecastWeatherScreen from "./screens/ForecastWeatherScreen";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/current-weather" element={<CurrentWeatherScreen />} />
          <Route path="/forecast-weather" element={<ForecastWeatherScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
