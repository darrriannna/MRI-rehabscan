import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';
import services from '../pages/ServicesData'; // Import the services list

const AnimationBody = () => {
  const navigate = useNavigate();

  const handleBook = (service) => {
    navigate('/mri-booking', { state: { serviceId: service.id } });
  };

  return (
    <div className="container-pricelist">
      <div className="banner-images-container">
        <div className="banner-image">
          <img src="./assets/Humanbody.png" alt="Human body" className="image-front" />
          {services.map((service, index) => (
            <div className={`circle-animation circle-animation${index + 1}`} key={service.id}>
              <div className="pop-up">
                <p className="animation-text">{service.title}</p>
                <button className="animation-button btn-link" onClick={() => handleBook(service)}>Boka</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className='center-text fw-3 p-3 mb-4'>Prislista</h2>
      <div className="service-grid">
        {services.map(service => (
          <div className="mr-service-container" key={service.id}>
            <div className="mr-service-info">
              <p className="mr-title">{service.title}</p>
              <p className="mr-price">{service.price} kr </p>
            </div><a className="more-link" href="http://#">Läs mer</a>
            <button className="btn-book-now" onClick={() => handleBook(service)}>Boka nu</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimationBody;




