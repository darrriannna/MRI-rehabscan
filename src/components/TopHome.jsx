import React from 'react';
import '../styles/index.css';
import { Link } from "react-router-dom";

const TopHome = () => {
  return (
    <div>
    <section className="booking-hero slide-in-left delay-0">
      <div className="booking-content">
        <h1 className="booking-title">
          Boka privat<br />
          magnetröntgen<br />
          med egen remiss.
        </h1>
        <p className="booking-subtitle">
          MR undersökning med<br />
          kort väntetid.
        </p>
        <Link to="/villkor" className="booking-link">Villkor och Begränsningar</Link>
        <div>
        <button className="booking-button "><Link to="/bokanu" className='booking-main-link'>Boka undersökning</Link></button>
      </div></div>
      <div className="booking-image-container  fade-in delay-5">
        <img src='./assets/Top-home.png' alt="MR-maskin" className="booking-image" />
      </div>
    </section>
   
<section className="scan-highlight slide-in-right delay-0">
  <div className="scan-image-wrapper">
    <img src="./assets/magnetrontgen-sverige.jpg" alt="Patient undergoing MRI" className="scan-image" />

    <div className="scan-title-wrapper">
      <h2 className="scan-title">Vad kan man upptäcka?</h2>
      <div className="scan-arrow">
        <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10 H35 L30 5 M35 10 L30 15" stroke="white" strokeWidth="3" fill="none" />
        </svg>
      </div>
    </div>

    <div className="scan-overlay">
      <div className="scan-overlay-content">
        <p className="scan-overlay-text">Magnetröntgen kan upptäcka:</p>
        <ul>
          <li>Hjärn- och ryggmärgssjukdomar</li>
          <li>Led- och muskelskador</li>
          <li>Tumörer</li>
          <li>Inre organproblem</li>
          <li>Kärlskador</li>
        </ul>
      </div>
    </div>
  </div>
</section>

     </div>
  );
};

export default TopHome;
