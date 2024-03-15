import { useState, useEffect } from "react";

const useCurrentLocation = () => {
    const [location, setLocation] = useState(null);
    
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (!navigator.geolocation) {
        setError(new Error("Geolocation is not supported by this browser."));
      } else {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
          },
          error => {
            setError(
              new Error(`Failed to retrieve location: ${error.message}`)
            );
          }
        );
      }
    };

    getLocation();
  }, []);

  return { location, error };
};

export default useCurrentLocation;
