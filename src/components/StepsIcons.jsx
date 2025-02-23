import React from "react";
import "../styles/index.css"; // Import your CSS file

const StepsIcons = () => {
  return (

    <div className="custom-steps-wrapper">
      <h2 className="custom-steps-title">
        Direkt inblick i din hälsa med avancerade hälsoundersökningar
        <br />
        <span className="custom-steps-highlight">
          – Snabbt och säkert i 3 steg
        </span>
      </h2>
      <div className="custom-steps-container">
        <div className="custom-step">
          <img src="./assets/icob-book1.png" alt="Step 1" className="custom-step-icon" />
          <h3 className="custom-step-title">Beställ utan remiss</h3>
          <p className="custom-step-text">
            Beställ din undersökning direkt utan remiss och fyll i ditt hälsoformulär digitalt.
          </p>
        </div>
        <div className="custom-step">
          <img src="./assets/icon-book2.png" alt="Step 2" className="custom-step-icon" />
          <h3 className="custom-step-title">Undersökning inom 1-7 arbetsdagar</h3>
          <p className="custom-step-text">
            Få din undersökningstid inom 1-7 arbetsdagar.
          </p>
        </div>
        <div className="custom-step">
          <img src="./assets/icon-book3.png" alt="Step 3" className="custom-step-icon" />
          <h3 className="custom-step-title">Resultat inom 7 arbetsdagar </h3>
          <p className="custom-step-text">
            Få din individuella rapport med MR-svar och rekommendation av specialistläkare. 
          </p>
        </div>
      </div>
      </div>
    );
};

export default StepsIcons;

