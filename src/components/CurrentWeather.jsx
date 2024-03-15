import { useState, useEffect } from "react";
import axios from "axios";

const CurrentWeather = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = "75m10qZU22LFgSYUceJgy1DBZKTh1jF9";
    const BASE_URL = `https://api.tomorrow.io/v4/weather/forecast?location=new%20york&apikey=${apiKey}`;

    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${BASE_URL}&fields=temperature,weatherCode&units=metric&timesteps=current`
        );
        
        setWeatherData(response.data.data.timelines[0].intervals[0]); // Accessing the current weather data
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch weather data");
        setLoading(false);
        console.log(setWeatherData);
      }
    };

    fetchWeather();
  }, [location]); // Adjusted dependency array to include 'location'

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !weatherData) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>{location}</h2>
      <p>Temperature: {weatherData.values.temperature}</p>
      <p>Description: {weatherData.values.weatherCode}</p>
    </div>
  );
};

export default CurrentWeather;
