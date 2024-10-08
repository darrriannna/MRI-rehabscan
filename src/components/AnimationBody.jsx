import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';
import services from '../pages/ServicesData'; // Import the services list

const AnimationBody = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const toggleList = () => {
    setIsExpanded(!isExpanded);
  };

  const handleBook = (service) => {
    navigate('/mri-booking', { state: { serviceId: service.id } });
  };

  return (
    <div>
      <div className="banner-images-container">
        <div className="banner-image">
          <img src="./assets/Humanbody.png" alt="Human body" className="image-front" />
          {services.map((service, index) => (
            <div className={`circle-animation circle-animation${index + 1}`} key={service.id}>
              <div className="pop-up">
                <p className='animation-text'>{service.title}</p>
                <button className='animation-button btn-link' onClick={() => handleBook(service)}>Boka</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="toggle-button" onClick={toggleList}>
        <span>{isExpanded ? 'Hide' : 'Show'} Prices List</span>
        <span className={`arrow ${isExpanded ? 'expanded' : 'collapsed'}`}>&#9660;</span>
      </button>

      <ul className={`mr-services-list ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {services.map(service => (
          <li className='list-element' key={service.id}>
            <div className="mr-service-container">
              <div className='mr-service-info'>
                <p>{service.title}</p>
                <p className='mr-price'>{service.price} kr <span className='more-link'><a href="http://#">Läs mer</a></span></p>
              </div>
              <button className="btn-primary" onClick={() => handleBook(service)}>Boka nu</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimationBody;

