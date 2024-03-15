import React from "react";
import { Link } from "react-router-dom";

const MainScreen = () => {
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
    link: {
      fontSize: "18px",
      color: "#007bff",
      textDecoration: "none",
      margin: "10px 0",
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Weather App</h1>
      <Link to="/current-weather" style={styles.link}>
        Current Weather
      </Link>
      <Link to="/forecast-weather" style={styles.link}>
        Forecast Weather
      </Link>
    </div>
  );
};



export default MainScreen;
