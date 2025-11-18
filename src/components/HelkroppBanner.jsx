import React from "react";
import "../styles/FeatureOffer.css";
import { useNavigate } from 'react-router-dom';



const FeaturesOffer = ({ scrollToScan }) => {
  const features = [
    {
      icon: "/assets/tag.png", // replace with SVG later
      title: "Marknadens lägsta pris",
      text: "Vår vision är att erbjuda MR scanning till Sveriges mest konkurrenskraftiga pris – utan att kompromissa med kvalitet.",
    },
    {
      icon: "/assets/tag2.png",
      title: "Ingen strålning",
      text: "Undersökning med magnetkamera baseras på magnetfält, inte röntgenstrålning – skonsamt och riskfritt.",
    },
    {
      icon: "/assets/tag3.png",
      title: "Remiss inom 1 arbetsdag",
      text: "Vår läkare kontaktar dig inom 1 arbetsdag efter beställning, därefter skickas remissen direkt.",
    },
  ];
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/bokanu', { state: { serviceName: 'MR Helkropp' } });
  };
  const handleScrollClick = () => {
    if (scrollToScan?.current) {
      scrollToScan.current.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <div className="features-offer-wrapper">
      {/* --- Features Section --- */}
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon"><img src={feature.icon} alt={feature.title} /></div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-text">{feature.text}</p>
          </div>
        ))}
      </div>

      <div className="offer-container">
        <div className="offer-image">
          <img src="/assets/helkropp-img.png" alt="MR Helkropp" />

        </div>

        <div className="offer-content">
          <p className="offer-category">Magnetröntgen</p>
          <h2 className="offer-title">MR Helkropp</h2>
          <ul className="offer-list">
            <li>Magnetkameraundersökning av helkropp</li>
            <li>Rekommenderas för dig som är frisk i screening syfte</li>
            <li>Detaljerad undersökning med magnetkamera</li>
            <li>MR Helkropp, remiss skickas direkt</li>
          </ul>

          <div className="offer-pricing">
            <span className="old-price">21 975kr</span>{" "}
            <span className="new-price">19 200 kr</span>
          </div>

          <button className="offer-btn" onClick={handleOrderClick}>Beställ nu →</button>
          <div>
            <button className="scan-btn" onClick={handleScrollClick}>Vad kan man upptäcka?</button>
          </div></div>
      </div>
    </div>
  );
};

export default FeaturesOffer;
