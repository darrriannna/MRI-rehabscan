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
     
      <h2 className="text-center header p-3">Betala med</h2>
      <div className="partner-grid">
      {cards.map((card, index) => (
          <div key={index} className="partner-card">
            <img src={card.image} alt={`Card ${index + 1}`} className="partner-image" />
          </div>
        ))} 
       
    
</div>
<div className='p-4 mr-3'>
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
      
    </section></div>
    </div>
  );
};

export default Partners;


