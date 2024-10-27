// src/components/MapSection.js
import React from 'react';
import '../styles/index.css';

const MapSection = () => {
  // Define the location markers with specific coordinates (adjust to match the actual map locations)
  const locations = [
    { id: 1, name: 'Location1', top: '30%', left: '40%' }, // Adjust top and left to match the exact cities
    { id: 2, name: 'Location2', top: '40%', left: '60%' },
    { id: 3, name: 'Location3', top: '50%', left: '55%' },
    { id: 4, name: 'Location4', top: '60%', left: '45%' },
    { id: 5, name: 'Location5', top: '70%', left: '35%' },
    { id: 6, name: 'Location6', top: '20%', left: '65%' },
    { id: 7, name: 'Location7', top: '10%', left: '50%' },
  ];

  return (
    <div className="map-section">
      <div className="text-content">
        <h2>Vi finns över hela Sverige</h2>
        <p>
          <strong>RehabScan</strong> är en digital klinik, så vi kan ordna din MR-skanning närmast ditt hem. Fyll bara i formuläret och boka din tid utan månader av väntan.
        </p>
      </div>
      <div className="map-container">
        <img src="./assets/Map.png" alt="Map of Sweden" className="map-image" />
        {locations.map((location) => (
          <div
            key={location.id}
            src="./assets/Dots.png" // Path to your dot PNG
            alt={location.name}
            className="location-marker"
            style={{ top: location.top, left: location.left }}
          />
        ))}
      </div>
    </div>
  );
};

export default MapSection;
