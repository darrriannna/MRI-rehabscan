import React from 'react';
import '../styles/index.css';

const MapSection = () => {
  

  return (
    <div className='map-section-container'>
  <h2 className='map-section-text-h'>Vi finns över hela Sverige</h2>
        <p className='map-section-text-p'>
          <strong>RehabScan</strong> är en digital klinik, så vi kan ordna din MR-skanning närmast ditt hem. Fyll bara i formuläret och boka din tid utan månader av väntan.
        </p>
    <div className="map-section">
      
      <div className="text-content">
        
        <ul className='list-map-container'>
            <li className='list-map'>Stockholm</li>
            <li className='list-map'>Göteborg</li>
            <li className='list-map'>Strömstad</li>
            <li className='list-map'>Nynäshamn</li>
            <li className='list-map'>Bäckefors</li>
            <li className='list-map'>Malmö</li>
            <li className='list-map'>Umeå</li>
            <li className='list-map'>Borås</li>
            <li className='list-map'>Karlstad</li>
            <li className='list-map'>Sundsvall</li>
            <li className='list-map'>Jönköping</li>
        </ul>
      </div>
      <div className="map-container">
        <img src="./assets/Map.png" alt="Magnetröntgen utan remiss över hela Sverige hos RehabScan" className="map-image" />
      </div>
    </div></div>
  );
};

export default MapSection;

