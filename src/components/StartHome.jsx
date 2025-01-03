import React from 'react';
import '../styles/index.css'; // Create a CSS file for styling
import { NavLink } from 'react-router-dom';

const StartHome = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img
          src="./assets/Mr-machine.png" // Update with the correct path
          alt="MRI machine"
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Undersökning utan remiss</h1>
          <p className="hero-subtitle">i 7-14 dagar</p>
          <NavLink to="/bookappointment" className="hero-button"> Boka nu </NavLink>
          <p className="hero-footer">Billigast i Sverige</p>
        </div>
      </div>
    </div>
  );
};

export default StartHome;
