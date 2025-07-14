import React from 'react';
import '../styles/ad-info.css';
import { Link } from "react-router-dom";


export default function HomePriceInfo() {
  return (
    <section className="private-mri-section">
      <div className="mri-content">
        {/* Left Box */}
        <div className="info-box">
          <h2>
            Undvik köer och väntetider med <em>privat magnetröntgen.</em>
          </h2>
          <ul>
            <li>→ Få tid för magnetkameraundersökning inom 7–14 arbetsdagar.</li>
            <li>→ Dina röntgenbilder kontrolleras av röntgenspecialister.</li>
            <li>→ Vi skickar din remiss, därefter får du kallelse till undersökning.</li>
          </ul>
          <button className="learn-more-btn" onClick={() => document.getElementById("fragor")?.scrollIntoView({ behavior: "smooth" })}>Läs mer</button>
        </div>

        {/* Right Box */}
        <div className="price-box">
          <h3>
            Privat MR <span>(från 4 100 kr)</span>
          </h3>
          <ul>
            <li>• MR Ländrygg, Bäcken/höftleder, Nacke/Halsrygg – 4 100 kr</li>
            <li>• MR Helrygg – 9 000 kr</li>
            <li className="note">För andra undersökningar gå till prislista.</li>
          </ul>
          <button className="learn-more-link"><Link to="/prislistaMR">Gå till Prislista</Link></button>

          <h4>MR Helkropp</h4>
          <p>• Innefattar MR scanning av 21 organ.</p>
          <p>Kontakta oss för med info - info@rehabscan.se</p>
          <p className="price">18 400 kr</p>
          <button className="learn-more-link" onClick={() => document.getElementById("mr-helkropp")?.scrollIntoView({ behavior: "smooth" })}> Vad kan man upptäcka?</button>
        </div>
      </div>

      {/* Steps */}
      <div className='steps-home-container'>
      <div className="steps">
        {[
          { number: '1', text: 'Fyll i en bokningsförfrågan' },
          { number: '2', text: 'Få din undersökningstid inom 7 arbetsdagar' },
          { number: '3', text: 'Få din individuella rapport med MR-svar' },
        ].map((step) => (
          <div className="step-card" key={step.number}>
            <div className="step-circle">{step.number}</div>
            <p className='p-3 fs-5 text-small-step'>{step.text}</p>
          </div>
        ))}
      </div>
      <div className='booking-button-steps'>
      <button className="booking-button-price"> <Link className='booking-main-link' to="/bokanu">Boka undersökning</Link></button>
      </div>
      </div>
      <section className="radiologist-section">
      <div className="radiologist-text">
        <h2>
          En erfaren röntgenläkare <br />
          undersöker alltid röntgen <br />
          bilderna
        </h2>
        <p>
          <em>
            Undersökningen utförs av Evidia och Unilabs. Kliniken kontaktar dig
            inom ett par dagar efter bokningen för att hitta en tid som passar
            dig bäst.
          </em>
        </p>
      </div>
      <div className="radiologist-image">
        <img src="./assets/vara-tjanster.jpg" alt="Röntgenbilder på skärm" />
      </div>
    </section>
    </section>
    
  );
}
