import React from "react";
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px", // Adjust height as needed
  },
  loader: {
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #3498db",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    animation: "spin 2s linear infinite",
  },
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
};

const LoadingIndicator = () => {
  return (
    <div style={styles.container}>
      <div className="loader"></div>
    </div>
  );
};



export default LoadingIndicator;
