import React from 'react';
import '../styles/ad-info.css';


export default function HomePriceInfo() {
  return (
    <section className="private-mri-section">
 

      <div className="steps-home-container">
  <h2 className="steps-title">Beställ magnetröntgen – fyra enkla steg</h2>
  <div className="steps-grid">
    {[
      {
        step: "Steg 1",
        title: "Beställ magnetröntgen",
        text: "Lägg in dina uppgifter och önskemål för undersökningen. Det tar bara några minuter.",
      },
      {
        step: "Steg 2",
        title: "Aktivera remissen",
        text: "Efter förfrågan blir du kontaktad för att bekräfta tid och eventuella detaljer.",
      },
      {
        step: "Steg 3",
        title: "Genomför röntgen",
        text: "Du får din tid inom 1–7 arbetsdagar och besöker kliniken för din MR-undersökning.",
      },
      {
        step: "Steg 4",
        title: "Resultat och utlåtande",
        text: "Efter undersökningen får du en personlig rapport med MR-svar från specialistläkare.",
      },
    ].map((step, index) => (
      <div className="step-card" key={index}>
        <h4 className="step-label">{step.step}</h4>
        <h3 className="step-title">{step.title}</h3>
        <p className="step-text">{step.text}</p>
      </div>
    ))}
  </div>
</div>

      <section className="radiologist-section">
      <div className="providers-wrapper">
      <div className="providers-top">
        <div className="providers-text">
          <h2 className="providers-title">
            Dina undersökningar genomförs av ackrediterade
            vårdgivare
          </h2>
          <p className="providers-desc">
             MR-undersökningar utförs av Unilabs Radiologi och Evidia Röntgen – säkert,
            tillgängligt och med högsta medicinsk kvalitet.
          </p>
        </div>
     
      </div>

      <div className="providers-logos">
        <img src="/assets/unilabs.png" alt="Unilabs" />
        <img src="/assets/lab-port.webp" alt="Labportalen" />
      </div>
    </div>
    </section>
    </section>
    
  );
}
