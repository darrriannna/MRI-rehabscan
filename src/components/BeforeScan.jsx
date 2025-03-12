import React from "react";
import "../styles/index.css"; // Import your CSS file

const Before = () => {
  return (

    <div className="custom-steps-wrapper">
      <h2 className="custom-steps-title">
        Bra att veta innan undersökningen 
      </h2>
      <div className="custom-steps-container">
        <div className="custom-step">
          <img src="./assets/Pacemaker.png" alt="Step 1" className="custom-step-icon" />
          <h3 className="custom-step-title">Ingen pacemaker</h3>
          <p className="custom-step-text">
            Beställ din undersökning direkt utan remiss och fyll i ditt hälsoformulär digitalt.
          </p>
        </div>
        <div className="custom-step">
          <img src="./assets/pressure.png" alt="Step 2" className="custom-step-icon" />
          <h3 className="custom-step-title">Om du har blodtryck</h3>
          <p className="custom-step-text">
            Få din undersökningstid inom 1-7 arbetsdagar.
          </p>
        </div>
        <div className="custom-step">
          <img src="./assets/insulin.png" alt="Step 3" className="custom-step-icon" />
          <h3 className="custom-step-title">Ingen insulinpump </h3>
          <p className="custom-step-text">
            Få din individuella rapport med MR-svar och rekommendation av specialistläkare. 
          </p>
        </div>
      </div>
      </div>
    );
};

export default Before;