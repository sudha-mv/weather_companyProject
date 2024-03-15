import React, { useState } from 'react';
const styles = {
  container: {
    marginBottom: "20px",
  },
  input: {
    marginRight: "10px",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "200px",
  },
  button: {
    padding: "8px 16px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

const LocationInput = ({ onSubmit }) => {
  const [location, setLocation] = useState('');

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(location);
    setLocation(''); // Clear input field after submission
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={handleInputChange}
        style={styles.input}
      />
      <button onClick={handleSubmit} style={styles.button}>Submit</button>
    </div>
  );
};



export default LocationInput;
