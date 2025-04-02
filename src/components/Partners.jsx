import React from 'react';
import '../styles/index.css'; // Ensure correct path

const Partners = () => {

  const cards = [
    { image: '/assets/klarna.png' },
    { image: '/assets/visa.png' },
    { image: '/assets/mastercard.png' },
  ]

  return (
    <div className="partners-container">
      <div className='grid-deceases'>
          <div className='containers-deceases-partners' >
          <h4 className='text-center-info'> Undersökningen utförs av Evidia och Unilabs. Kliniken kontaktar dig inom ett par dagar efter bokningen för att hitta en tid som passar dig bäst. </h4>
        </div></div>
      <h3 className="text-center header p-3">Betala med</h3>
      <div className="partner-grid">
      {cards.map((card, index) => (
          <div key={index} className="partner-card">
            <img src={card.image} alt={`Card ${index + 1}`} className="partner-image" />
          </div>
        ))} 
       
      </div>
    </div>
  );
};

export default Partners;


