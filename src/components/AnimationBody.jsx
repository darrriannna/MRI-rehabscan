import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css'; // Import your CSS styles
import services from '../pages/ServicesData'; // Import the services list

const AnimationBody = () => {
  const navigate = useNavigate();

  const handleBook = (service) => {
    navigate('/mri-booking', { state: { serviceId: service.id } });
  };

  const services = [
    {id: 1, name: 'Ländrygg', price: '8 200kr' },
    {id: 2, name: 'Nacke', price: '8 200kr' },
    {id: 3, name: 'Axel', price: '8 200kr' },
    {id: 4, name: 'Bäcken/höftleder', price: '8 200kr' },
    {id: 5, name: 'Knä', price: '8 200kr' },
    {id: 6, name: 'Helkropp', price: '22 700kr' },
    {id: 7, name: 'Bröstrygg', price: '8 200kr' },
    {id: 8, name: 'Fot', price: '7 200kr' },
    {id: 9, name: 'Fotled', price: '7 200kr' }, 
    {id: 10, name: 'Hand', price: '7 200kr' },
    {id: 11, name: 'Hälsena', price: '8 200kr' },
    {id: 12, name: 'Armbåge', price: '8 200kr' },
    {id: 13, name: 'Underben', price: '8 200kr' },
    {id: 14, name: 'Sacrum/Sacroliacaleder', price: '8 200kr' },
    {id: 15, name: 'Buk', price: '10 900kr' },
    {id: 16, name: 'Gynorgan', price: '11 700kr' },
    {id: 17, name: 'Hals/larynx', price: '11 700kr' },
    {id: 18, name: 'Halsrygg', price: '8 200kr' },
    {id: 19, name: 'Helrygg', price: '12 200kr' },
    {id: 20, name: 'Hjärna', price: '10 700kr' },
    {id: 21, name: 'Käkled', price: '8 200kr' },
    {id: 22, name: 'Knä', price: '8 200kr' },
    {id: 23, name: 'Orbita', price: '8 200kr' },
    {id: 24, name: 'Prostata', price: '11 700kr' },
  ];

  const popup = [
    {id: 1, name: 'Axel', price: '8 200kr' },
    {id: 2, name: 'Axel', price: '8 200kr' },
    {id: 3, name: 'Armbåge', price: '8 200kr' },
    {id: 4, name: 'Armbåge', price: '8 200kr' },
    {id: 5, name: 'Hand', price: '7 200kr' },
    {id: 6, name: 'Hand', price: '7 200kr' },
    {id: 7, name: 'Bäcken/höftleder', price: '8 200kr' },
    {id: 8, name: 'Bäcken/höftleder', price: '8 200kr' },
    {id: 9, name: 'Prostata', price: '11 700kr' },
  ]

  return (
    <div className='main-pricelist'>
    <div className="container-pricelist">
      
      <div className="main-content">
        <div className="banner-image">
          <img src="./assets/Humanbody-mri.png" alt="Human body" className="image-front" />
          {popup.map((service, index) => (
            <div className={`circle-animation circle-animation${index + 1}`} key={service.id}>
              <div className="pop-up">
                <p className="animation-text">{service.name}</p>
                <p className="animation-text">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-content">
          <h2 className='p-2'>Magnetröntgen</h2>
          <p className='p-2'>Magnetkameraundersökning, även kallad MR, är en högspecialiserad undersökningsmetod som används för att upptäcka och diagnostisera sjukdomar och se skador i kroppen. </p>
          <p className='p-2'>Magnetkameran skapar den mest kompletta undersökningen på marknaden genom att kombinera magnetfält och radiovågor till bilder som kan avbilda näst intill alla organ i kroppen. En undersökning med MR tar mellan 20–60 minuter och genererar upp emot 900-1200 unika bilder. Till skillnad från en konventionell röntgen används inte strålning och undersökningen är därför riskfri att utföra många gånger.</p>
        </div>
      </div>
     

      <h2 className='center-text fw-3 p-3 mb-4'>Prislista</h2>
      <div className="card-grid">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <h4>{service.name}</h4>
              <p>Pris: {service.price}</p>
            </div>
            <a className="read-more-btn" href="http://#">Läs mer</a>
            <button className="btn-book-now" onClick={() => handleBook(service)}>Boka nu</button>
          </div>
        ))}
      </div>
       <div>
        <h2 className='p-3 '>MR kan bland annat användas för att upptäcka följande åkommor</h2>
        <div className='grid-deceaces'>
          <div className='containers-deceases'>
            <h4>MR Hjärna</h4>
            <p>Tumör, Multipel skleros, inflammation, stroke.</p>
          </div>
          <div className='containers-deceases'>
            <h4>MR Rygg</h4>
            <p>Tumör, diskbråck, förträngningar av nerver i ryggraden / spinalstenos, traumatiska skador, MS.</p>
          </div>
          <div className='containers-deceases'>
            <h4>MR Buk</h4>
            <p>Tumörer i bl.a. njurar, gallblåsa, lever, bukspottkörtel, binjurar.</p>
          </div>
          <div className='containers-deceases'>
            <h4>MR Gynorgan</h4>
            <p>Tumörer i bl.a livmoder, äggstockar. Tecken till endometrios.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AnimationBody;





