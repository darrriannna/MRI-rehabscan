import React from "react";
import Counter from "./Counter"; // Counter Component

import "../styles/index.css"; // Import the global CSS file

const Statistics = () => {
  return (
    <div className="statistics-container">
      <div className="statistics-section">
      <img
          className="stat-image"
          src="./assets/Heart-atack.png" // Replace with your image path
          alt="Heart and Stroke"
        />
        <Counter endNumber={35} duration={2000} />
        <p className="statistics-text">
          Hjärtinfarkt och stroke står idag för 35 % av alla dödsfall i Sverige.
        </p>
      </div>
      <div className="statistics-section">
      <img
          className="stat-image"
          src="./assets/Cancer.png" // Replace with your image path
          alt="Cancer"
        />
        <Counter endNumber={26} duration={2000} />
        <p className="statistics-text">
          Cancer står idag för 26 % av alla dödsfall i Sverige.
        </p>
      </div>
    </div>
  );
};

export default Statistics;

