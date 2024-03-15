import React from "react";
const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#ffcccc",
    borderRadius: "10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  },
  errorMessage: {
    fontSize: "16px",
    color: "red",
  },
};

const ErrorComponent = ({ message }) => {
  return (
    <div style={styles.container}>
      <p style={styles.errorMessage}>{message}</p>
    </div>
  );
};



export default ErrorComponent;
