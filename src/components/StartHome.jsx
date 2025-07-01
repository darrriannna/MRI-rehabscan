import React from "react";

import { Link } from "react-router-dom";
import "../styles/index.css"; // Import CSS

const MainInfo = ({ scanRef }) => {



  const handleLearnMore = () => {
    if (scanRef.current) {
      scanRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mr-layout-container">
      {/* Left Container */}
      <div className="mr-layout-left">
        <img
          src="./assets/video-steps.gif"
          alt="MRI Scan"
          className="mr-layout-image"
        />
      </div>

      {/* Right Container */}
      <div className="mr-layout-right">
        <h2 className="mr-layout-heading">Privat MR (från 4 500 kr)</h2>
        <ul className="mr-layout-list">
          <li>
           MR Ländrygg, Bäcken/höftleder, Nacke/Halsrygg - 4 500kr
          </li>
          <li>MR Helrygg - 9 000kr </li>
        </ul>
        <p className="mr-layout-subheading">För andra undersökningar gå till prislista.</p>
        <Link to="/prislistaMR" className="mr-layout-button-secondary text-center">
               Gå till Prislista
              </Link>
     
        <h1 className="mr-layout-heading">MR-Helkropp</h1>
        
        <ul className="mr-layout-list">
          <li>
            MR-Helkroppsröntgen som upptäcker tecken på cancer, stroke,
            inflammation och annan sjukdom.
          </li>
          <li>Få tid inom 7 arbetsdagar.</li>
          <li>Innefattar MR scanning av 21 organ.</li>
        </ul>
        <p className="mr-layout-price">18 400 KR</p>

        {/* Buttons now trigger navigation just like in AnimationBody */}
        <button className="mr-layout-button-secondary" onClick={handleLearnMore}>
          Vad kan man upptäcka?
        </button>

        <div className="mr-layout-discount">
          <p>Finns i flera städer som Stockholm, Göteborg, Malmö, Umeå, Karlstad, Sundsvall, Jönköping</p>
          <p className="mr-layout-discount-time">INGEN REMISS KRÄVS</p>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;


