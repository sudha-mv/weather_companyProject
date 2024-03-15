import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherComponent = ({ location }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState([]);

  useEffect(() => {
    const apiKey = "75m10qZU22LFgSYUceJgy1DBZKTh1jF9";
    const BASE_URL = `https://api.tomorrow.io/v4/weather/forecast?location=new%20york&apikey=${apiKey}`;

    const fetchWeatherData = async () => {
      try {
        // Fetch current weather
        const currentResponse = await axios.get(
          `${BASE_URL}&fields=temperature,weatherCode&units=metric&timesteps=current`
        );
        const currentData = currentResponse.data;
        const currentTemperature =
          currentData.data.timelines[0].intervals[0].values.temperature;
        console.log(currentTemperature)
        const currentDescription =
          currentData.data.timelines[0].intervals[0].values.weatherCode;

        // Fetch forecast weather
        const forecastResponse = await axios.get(
          `${BASE_URL}&fields=temperature,weatherCode&units=metric&timesteps=1h`
        );
        const forecastData = forecastResponse.data;
        const forecastIntervals = forecastData.data.timelines[0].intervals.map(
          interval => ({
            date: interval.startTime,
            temperature: interval.values.temperature,
            description: interval.values.weatherCode, // Assuming weatherCode contains the description
          })
        );

        setCurrentWeather({
          temperature: currentTemperature,
          description: currentDescription,
        });
        setForecastWeather(forecastIntervals);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    };
   

    fetchWeatherData();
  }, [location]);

  return (
    <div>
      
      <h2>Current Weather</h2>
      {currentWeather && (
        <div>
          <p>Temperature: {currentWeather.temperature}°C</p>
          <p>Description: {currentWeather.description}</p>
        </div>
      )}
      <h2>Forecast Weather</h2>
      <ul>
        {forecastWeather.map((forecast, index) => (
          <li key={index}>
            <p>Date: {forecast.date}</p>
            <p>Temperature: {forecast.temperature}°C</p>
            <p>Description: {forecast.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherComponent;
