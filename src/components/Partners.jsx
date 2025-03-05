import React from 'react';
import '../styles/index.css'; // Ensure correct path

const Partners = () => {
  const partners = [
    { image: '/assets/evidia.png' },
    { image: '/assets/unilabs.png' },
    { image: '/assets/aleris.png' },
    { image: '/assets/klarna.png' },
    { image: '/assets/visa.png' },
    { image: '/assets/mastercard.png' },
  ];

  return (
    <div className="partners-container">
      <h3 className="text-center header p-3">Våra samarbetspartners</h3>
      <div className="partner-grid">
      {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <img src={partner.image} alt={`Partner ${index + 1}`} className="partner-image" />
          </div>
        ))} 
       
      </div>
    </div>
  );
};

export default Partners;


