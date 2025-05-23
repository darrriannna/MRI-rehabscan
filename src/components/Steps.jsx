import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/ad-info.css";

const GifToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="gif-toggle-container">
      {/* Background GIF */}
      <div className="gif-background">
        <div className="overlay-content">
          {/* Overlay Text */}
          <h2>
            Få din röntgen undersökning bara i <span>3 steg</span>
          </h2>

          {/* Toggle Arrow */}
          <button
            className={`arrow-icon ${isOpen ? "open" : ""}`}
            onClick={toggleOpen}
          >
            <span className="left-bar"></span>
            <span className="right-bar"></span>
          </button>
        </div>
      </div>


      {/* Toggle Steps */}
      <motion.div
        className="steps-container"
        animate={{ height: isOpen ? "auto" : "0px" }}
        initial={{ height: "0px" }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="step-box"><span className="step-number">1.</span> Fyll i en bokningsförfrågan  </div>
        <div className="step-box"><span className="step-number">2.</span> Få din undersökningstid inom 7 arbetsdagar </div>
        <div className="step-box"><span className="step-number">3.</span>  Få din individuella rapport med MR-svar</div>
      </motion.div>
    </div>
  );
};

export default GifToggle;







