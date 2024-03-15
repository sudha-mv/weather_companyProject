import React, { useState } from "react";

import LocationInput from "../components/LocationInput";
import CurrentWeather from "../components/CurrentWeather";

const CurrentWeatherScreen = () => {
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
  };

  const [location, setLocation] = useState("");

  const handleLocationSubmit = newLocation => {
    setLocation(newLocation);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Current Weather</h1>
      <LocationInput onSubmit={handleLocationSubmit} />
      {location && <CurrentWeather location={location} />}
    </div>
  );
};


export default CurrentWeatherScreen;
