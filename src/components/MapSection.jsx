import React, { useState } from 'react';
import '../styles/index.css';

const MapSection = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (city) => {
    setOpenDropdown(openDropdown === city ? null : city);
  };

  return (
    <div className='map-section-container'>
  <h2 className='map-section-text-h'>Vi finns över hela Sverige</h2>
        <p className='map-section-text-p'>
          <strong>RehabScan</strong> är en digital klinik, så vi kan ordna din MR-skanning närmast ditt hem. Fyll bara i formuläret och boka din tid utan månader av väntan.
        </p>
    <div className="map-section">
      
      <div className="text-content">
        
        <ul className='list-map-container'>
            <li className='list-map'>
              Stockholm
              <ul>
                <li className='list-of-clinics'>
              <button className='button-clinic' onClick={() => toggleDropdown('Stockholm')}>
                {openDropdown === 'Stockholm' ? '▲ 8 alternativ' : '▼ 8 alternativ'}
              </button>
              {openDropdown === 'Stockholm' && (
              <ul className='list-of-clinics'> 
                <li className='clinic-details'>
                  <p className='clinic-name'>Evidia Farsta Röntgen</p>
                  <p className='clinic-adress'>Karlandaplan 6, 123 47 Farsta</p>
                </li>
                <li className='clinic-details'>
                  <p className='clinic-name'>Evidia Järva Röntgen</p>
                  <p className='clinic-adress'>Rinkebysvängen 70D, 163 74 Spånga</p>
                </li>
                <li className='clinic-details'>
                  <p className='clinic-name'>Unilabs Klara Strand Röntgen</p>
                  <p className='clinic-adress'>Blekholmstorget 30, 111 64 Stockholm</p>
                </li>
                <li className='clinic-details'>
                  <p className='clinic-name'>Evidia Nacka Röntgen</p>
                  <p className='clinic-adress'>Lasarettsvägen 6, 131 45 Nacka</p>
                </li>
                <li className='clinic-details'>
                  <p className='clinic-name'>Evidia Sabbatsberg Röntgen</p>
                  <p className='clinic-adress'>Olivecronas väg 1, 113 24 Stockholm</p>
                </li>
                <li className='clinic-details'>
                  <p className='clinic-name'>Evidia Skärholmen Röntgen</p>
                  <p className='clinic-adress'>Storholmsgatan 19, 127 48 Skärholmen</p>
                </li>
                <li className='clinic-details'>
                  <p className='clinic-name'>Unilabs Sollentuna röntgen </p>
                  <p className='clinic-adress'>Nytorpsvägen 10, 191 35 Sollentuna</p>
                </li>
                <li className='clinic-details'>
                  <p className='clinic-name'>Evidia Vällingby Röntgen </p>
                  <p className='clinic-adress'> Indalsbacken 2, 162 65 Vällingby</p>
                </li>
                </ul>
                    )}
                   </li>
                    </ul>
                    </li>
            <li className='list-map'>Göteborg
            <ul>
              <li className='list-of-clinics'>
            <button className='button-clinic' onClick={() => toggleDropdown('Göteborg')}>
                {openDropdown === 'Göteborg' ? '▲ 3 alternativ' : '▼ 3 alternativ'}
              </button>
              {openDropdown === 'Göteborg' && (
            <ul className='list-of-clinics'> 
                <li className='clinic-details'>
                  <p className='clinic-name'>Evidia Backa Röntgen</p>
                  <p className='clinic-adress'>Backavägen 3, 417 30 Göteborg</p>
                </li>
                <li className='clinic-details'>
                  <p className='clinic-name'>Unilabs Haga Röntgen</p>
                  <p className='clinic-adress'>Haga Östergata 12, 413 01 Göteborg</p>
                </li>
                <li className='clinic-details'>
                  <p className='clinic-name'>Evidia Mölndal vid GoCo</p>
                  <p className='clinic-adress'>Entreprenörsstråket 6, 431 53 Mölndal</p>
                </li>
                </ul>
                    )}
                   </li> </ul>
                    </li>
            <li className='list-map'>Strömstad
            <ul className='list-of-clinics'>
                <li className='clinic-details'>
                  <p className='clinic-name'>Evidia Strömstad Röntgen</p>
                  <p className='clinic-adress'>Västra Hamngatan 10-12, 452 37 Strömstad</p>
                </li></ul>
            </li>
            <li className='list-map'>Nynäshamn
            <ul className='list-of-clinics'>
                <li className='clinic-details'>
                  <p className='clinic-name'>Evidia Nynäshamn Röntgen</p>
                  <p className='clinic-adress'>Idunvägen 1, 149 31 Nynäshamn</p>
                </li></ul></li>
            <li className='list-map'>Bäckefors
            <ul className='list-of-clinics'>
                <li className='clinic-details'>
                  <p className='clinic-name'>Evidia Bäckefors Röntgen</p>
                  <p className='clinic-adress'>Dalslands sjukhus, 668 88 Bäckefors</p>
                </li></ul></li>
            <li className='list-map'>Malmö
            <ul className='list-of-clinics'>
                <li className='clinic-details'>
                  <p className='clinic-name'>Evidia Malmö Entré Röntgen</p>
                  <p className='clinic-adress'>Fredsgatan 12, 212 12 Malmö</p>
                </li></ul></li>
            <li className='list-map'>Umeå
            <ul className='list-of-clinics'>
                <li className='clinic-details'>
                  <p className='clinic-name'>Evidia Umeå Röntgen</p>
                  <p className='clinic-adress'>Renmarkstorget 12, 903 26 Umeå</p>
                </li></ul></li>
            <li className='list-map'>Borås
            <ul className='list-of-clinics'>
                <li className='clinic-details'>
                  <p className='clinic-name'>Evidia Borås Röntgen</p>
                  <p className='clinic-adress'>Göteborgsvägen 4, 504 35 Borås</p>
                </li></ul></li>
            <li className='list-map'>Karlstad
            <ul className='list-of-clinics'>
                <li className='clinic-details'>
                  <p className='clinic-name'>Evidia Karlstad Röntgen</p>
                  <p className='clinic-adress'>Löfbergs Arena, Norra Infarten 79, 654 65 Karlstad</p>
                </li></ul></li>
            <li className='list-map'>Sundsvall
            <ul className='list-of-clinics'>
                <li className='clinic-details'>
                  <p className='clinic-name'>Evidia Sundsvall Röntgen</p>
                  <p className='clinic-adress'>Institutvägen 2, 856 43 Sundsvall</p>
                </li></ul></li>
            <li className='list-map'>Jönköping
            <ul className='list-of-clinics'>
                <li className='clinic-details'>
                  <p className='clinic-name'>Evidia Jönköping Röntgen</p>
                  <p className='clinic-adress'>Batterigatan 11, 553 05 Jönköping</p>
                </li></ul></li>
        </ul>
      </div>
      <div className="map-container">
        <img src="./assets/Map.png" alt="Magnetröntgen utan remiss över hela Sverige hos RehabScan" className="map-image" />
      </div>
    </div></div>
  );
};

export default MapSection;

