import React, { useState, useEffect } from 'react';
import '../styles/index.css'; // Create this CSS file to style the loader

const Loader = () => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // Simulate page content loading and initiate swipe-up effect after loading completes
    const timer = setTimeout(() => {
      setExit(true); // Trigger the exit animation
    }, 1500); // Adjust the duration based on your page load time

    return () => clearTimeout(timer); // Cleanup the timer if the component is unmounted
  }, []);

  return (
    <div className={`loader-container ${exit ? 'exit' : ''}`}>
      <img src="./assets/Loader-img.png" alt="loader" className="loader-img" />
      <div className="scan-line"></div> {/* Scan line over the image */}
    </div>
  );
};

export default Loader;



