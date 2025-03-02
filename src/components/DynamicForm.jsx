import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; 
import "../styles/index.css";

const services = [
  { id: 1, name: 'Ländrygg', price: '3 900kr', paymentLink: 'https://buy.stripe.com/6oE5mBf5HcTB43maF6' },
  { id: 2, name: 'Höger Axel', price: '4 100kr', paymentLink: 'https://buy.stripe.com/aEU9CRbTv4n56bufZi' },
  { id: 3, name: 'Vänster Axel', price: '4 100kr', paymentLink: 'https://buy.stripe.com/aEU02h8HjbPx0Ra28h' },
  { id: 4, name: 'Bäcken/höftleder', price: '3 900kr', paymentLink: 'https://buy.stripe.com/8wM9CR6zbbPxarK8wZ' },
  { id: 5, name: 'Vänster Knä', price: '3 900kr', paymentLink: 'https://buy.stripe.com/3csaGV3mZg5N6bu9AK' },
  { id: 6, name: 'Helkropp', price: '16 200kr', paymentLink: 'https://buy.stripe.com/4gw9CRcXz1aT2Zi5kB' },
  { id: 7, name: 'Bröstrygg', price: '3 900kr', paymentLink: 'https://buy.stripe.com/00gbKZ2iVg5N6bu8x1' },
  { id: 8, name: 'Höger Fot', price: '3 900kr', paymentLink: 'https://buy.stripe.com/eVa2ap5v74n58jC9AS' },
  { id: 9, name: 'Vänster Fot', price: '3 900kr', paymentLink: 'https://buy.stripe.com/14k16l4r34n5bvO7sA' },
  { id: 10, name: 'Höger Fotled', price: '3 900kr', paymentLink: 'https://buy.stripe.com/8wMbKZ0aN9Hp43m00m' },
  { id: 11, name: 'Vänster Fotled', price: '3 900kr', paymentLink: 'https://buy.stripe.com/00gaGV5v7cTBdDW3cj' },
  { id: 12, name: 'Höger Hand', price: '3 900kr', paymentLink: 'https://buy.stripe.com/dR6eXbe1D8DlarK6oJ' },
  { id: 13, name: 'Vänster Hand', price: '3 900kr', paymentLink: 'https://buy.stripe.com/00gdT7cXz9Hp6bu006' },
  { id: 14, name: 'Hälsena', price: '3 900kr', paymentLink: 'https://buy.stripe.com/cN27uJ3mZaLt2Zi5kQ' },
  { id: 15, name: 'Höger Armbåge', price: '3 900kr', paymentLink: 'https://buy.stripe.com/28o3etbTvdXF43m14u' },
  { id: 16, name: 'Vänster Armbåge', price: '3 900kr', paymentLink: 'https://buy.stripe.com/eVa02h6zb9Hp2ZidQV' },
  { id: 17, name: 'Höger Underben', price: '3 900kr', paymentLink: 'https://buy.stripe.com/00g16l0aNdXF2Zi28z' },
  { id: 18, name: 'Vänster Underben', price: '3 900kr', paymentLink: 'https://buy.stripe.com/cN2eXbf5HdXF2ZiaEI' },
  { id: 19, name: 'Sacrum/Sacroliacaleder', price: '3 900kr', paymentLink: 'price_1QhBXoLGp7g0cFk20K4VPuel' },
  { id: 20, name: 'Buk', price: '6 500kr', paymentLink: 'https://buy.stripe.com/5kAcP3e1DcTBeI0aEE' },
  { id: 21, name: 'Hals/larynx', price: '5 800kr', paymentLink: 'https://buy.stripe.com/4gw2apbTvf1JarK00g'  },
  { id: 22, name: 'Nacke/Halsrygg', price: '3 900kr', paymentLink: 'https://buy.stripe.com/6oEaGVbTvaLt57q6oW' },
  { id: 23, name: 'Helrygg', price: '9 000kr', paymentLink: 'https://buy.stripe.com/4gw4ix9Ln8Dl8jC8wL' },
  { id: 24, name: 'Hjärna', price: '4 200kr', paymentLink: 'https://buy.stripe.com/8wM4ix6zb5r957qfZc' },
  { id: 25, name: 'Käkled', price: '4 800kr', paymentLink: 'https://buy.stripe.com/00g16l6zb6vd8jC7t1' },
  { id: 26, name: 'Höger Knä', price: '3 900kr', paymentLink: 'https://buy.stripe.com/7sI4ix7DfcTBbvO9AT'  },
  { id: 27, name: 'Orbita', price: '4 800kr', paymentLink: 'https://buy.stripe.com/6oEg1f6zb2eXarK00d' },
  { id: 28, name: 'Prostata', price: '5 800kr', paymentLink: 'https://buy.stripe.com/eVabKZf5Hg5N1VebIT' },
  {id: 29, name: 'Höger Överarm', price: '3 900kr', paymentLink: 'https://buy.stripe.com/8wM3etaPrf1JczSbJ5' },
  {id: 30, name: 'Vänster Överarm', price: '3 900kr', paymentLink: 'https://buy.stripe.com/9AQdT70aNf1J7fy6or' },
  {id: 31, name: 'Höger Underarm', price: '3 900kr', paymentLink: 'https://buy.stripe.com/aEU8yN0aN5r9fM4eV6' },
  {id: 32, name: 'Vänster Underarm', price: '3 900kr', paymentLink: 'https://buy.stripe.com/dR616l6zb6vd6bu3ce' },
  {id: 33, name: 'Höger Handled', price: '3 900kr', paymentLink: 'https://buy.stripe.com/7sI6qFcXzf1JczSeVi'  },
  {id: 34, name: 'Vänster Handled', price: '3 900kr', paymentLink: 'https://buy.stripe.com/fZe8yN0aNaLtgQ85kl'  },
  {id: 35, name: 'test', price: '3 kr', paymentLink: 'https://buy.stripe.com/28o16lbTv8DleI03cM'  },


];

const DynamicForm = () => {
  const [selectedExamination, setSelectedExamination] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [showExaminationDropdown, setShowExaminationDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Use location to access passed state

  const cities = ['Stockholm', 'Göteborg','Malmö Hyllie', 'Jönköping', 'Karlstad', 'Umeå',  'Sundsvall','Borås', 'Nynäshamn', 'Bäckefors', 'Strömstad' ];

  // Extract serviceName from the passed state
  useEffect(() => {
    if (location.state && location.state.serviceName) {
      setSelectedExamination(location.state.serviceName);
    }
  }, [location.state]);

  const toggleExaminationDropdown = () => setShowExaminationDropdown(!showExaminationDropdown);
  const toggleCityDropdown = () => setShowCityDropdown(!showCityDropdown);

  const handleExaminationClick = (name) => {
    setSelectedExamination(name);
    setShowExaminationDropdown(false);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setShowCityDropdown(false);
  };

  const selectedService = services.find(service => service.name === selectedExamination);

  const handleBookClick = () => {
    // Save selected service details in localStorage
  localStorage.setItem(
    'bookingData',
    JSON.stringify({
      serviceName: selectedExamination,
      city: selectedCity,
      price: selectedService?.price,
      paymentLink: selectedService?.paymentLink,
    })
  );

  // Navigate to the booking page with the selected details
  navigate('/mri-boka', {
    state: {
      serviceName: selectedExamination,
      city: selectedCity,
      price: selectedService?.price,
      paymentLink: selectedService?.paymentLink,
    },
  });
};


  return (
    <div className='container-form-main'>
    <div className="form-container">
      <div></div>
      <h2 className='text-center main-title-form'>Boka privat magnetröntgen utan remiss</h2>

      <form>
        <div className="form-group">
         
          <button type="button" className="dropdown-toggle" onClick={toggleExaminationDropdown}>
            {selectedExamination || 'Välj undersökning'}
          </button>
          {showExaminationDropdown && (
            <div className="dropdown-content">
              {services.map(service => (
                <button key={service.id} type="button" className="dropdown-button" onClick={() => handleExaminationClick(service.name)}>
                  {service.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {selectedExamination && (
          <div className="form-group">
            <p className='form-field-title'>Välj stad</p>
            <button type="button" className="dropdown-toggle" onClick={toggleCityDropdown}>
              {selectedCity || 'Välj stad'}
            </button>
            {showCityDropdown && (
              <div className="dropdown-content">
                {cities.map(city => (
                  <button key={city} type="button" className="dropdown-button" onClick={() => handleCityClick(city)}>
                    {city}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {selectedExamination && selectedCity && (
          <>
            <div className="form-group">
              <p className='form-price'>Pris: {selectedService?.price}</p>
            </div>
            <div className="form-group">
              <button type="button" className="btn-navbar" onClick={handleBookClick}>
                Boka undersökning
              </button>
            </div>
          </>

        )}
        <NavLink to="/villkor" className="restrictions"> Villkor och Begränsningar </NavLink>

      </form>
      <div></div>
    </div>
    </div>
  );
};

export default DynamicForm;



