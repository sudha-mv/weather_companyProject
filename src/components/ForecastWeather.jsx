import React, { useState, useEffect } from "react";
import axios from "axios";

const apiKey = "75m10qZU22LFgSYUceJgy1DBZKTh1jF9";

const ForecastWeather = ({ location, dateRange }) => {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const BASE_URL = `https://api.tomorrow.io/v4/weather/forecast?location=new%20york&apikey=${apiKey}`;

    const fetchForecast = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${BASE_URL}&fields=temperature,weatherCode&units=metric&timesteps=current`
        );
        setForecastData(response.data.data.timelines[0].intervals);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch forecast data");
        setLoading(false);
      }
    };

    fetchForecast();
  }, [location, dateRange]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>{location}</h2>
      <ul>
        {forecastData.map((forecast, index) => (
          <li key={index}>
            <p>Date: {forecast.startTime}</p>
            <p>Temperature: {forecast.values.temperature}</p>
            <p>Description: {forecast.values.weatherCode}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForecastWeather;
