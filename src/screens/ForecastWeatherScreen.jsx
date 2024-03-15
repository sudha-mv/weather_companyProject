import React, { useState } from "react";
import LocationInput from "../components/LocationInput";
import ForecastWeather from "../components/ForecastWeather"

const ForecastWeatherScreen = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    input: {
      marginBottom: "20px",
      padding: "8px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      width: "200px",
    },
  };
  const [location, setLocation] = useState("");
  const [dateRange, setDateRange] = useState("");

  const handleLocationSubmit = newLocation => {
    setLocation(newLocation);
  };

//   const handleDateRangeSubmit = newDateRange => {
//     setDateRange(newDateRange);
//   };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Forecast Weather</h1>
      <LocationInput onSubmit={handleLocationSubmit} />
      <input
        type="text"
        placeholder="Enter date range"
        value={dateRange}
        onChange={e => setDateRange(e.target.value)}
        style={styles.input}
      />
      {location && dateRange && (
        <ForecastWeather location={location} dateRange={dateRange} />
      )}
    </div>
  );
};



export default ForecastWeatherScreen;
