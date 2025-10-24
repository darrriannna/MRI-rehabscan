import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "../styles/index.css";

const services = [
  { id: 1, name: 'MR Ländrygg', price: '4 200kr', paymentLink: 'https://buy.stripe.com/6oE5mBf5HcTB43maF6' },
  { id: 2, name: 'MR Höger Axel', price: '4 100kr', paymentLink: 'https://buy.stripe.com/aEU9CRbTv4n56bufZi' },
  { id: 3, name: 'MR Vänster Axel', price: '4 100kr', paymentLink: 'https://buy.stripe.com/dR68yN0aNf1J1VefZz' },
  { id: 4, name: 'MR Bäcken/höftleder', price: '4 100kr', paymentLink: 'https://buy.stripe.com/8wM9CR6zbbPxarK8wZ' },
  { id: 5, name: 'MR Vänster Knä', price: '4 100kr', paymentLink: 'https://buy.stripe.com/3csaGV3mZg5N6bu9AK' },
  { id: 7, name: 'MR Bröstrygg', price: '4 100kr', paymentLink: 'https://buy.stripe.com/00gbKZ2iVg5N6bu8x1' },
  { id: 8, name: 'MR Höger Fot', price: '3 900kr', paymentLink: 'https://buy.stripe.com/eVa2ap5v74n58jC9AS' },
  { id: 9, name: 'MR Vänster Fot', price: '3 900kr', paymentLink: 'https://buy.stripe.com/14k16l4r34n5bvO7sA' },
  { id: 10, name: 'MR Höger Fotled', price: '3 900kr', paymentLink: 'https://buy.stripe.com/8wMbKZ0aN9Hp43m00m' },
  { id: 11, name: 'MR Vänster Fotled', price: '3 900kr', paymentLink: 'https://buy.stripe.com/00gaGV5v7cTBdDW3cj' },
  { id: 12, name: 'MR Höger Hand', price: '3 900kr', paymentLink: 'https://buy.stripe.com/dR6eXbe1D8DlarK6oJ' },
  { id: 13, name: 'MR Vänster Hand', price: '3 900kr', paymentLink: 'https://buy.stripe.com/00gdT7cXz9Hp6bu006' },
  { id: 14, name: 'MR Hälsena', price: '4 100kr', paymentLink: 'https://buy.stripe.com/cN27uJ3mZaLt2Zi5kQ' },
  { id: 15, name: 'MR Höger Armbåge', price: '3 900kr', paymentLink: 'https://buy.stripe.com/28o3etbTvdXF43m14u' },
  { id: 16, name: 'MR Vänster Armbåge', price: '3 900kr', paymentLink: 'https://buy.stripe.com/eVa02h6zb9Hp2ZidQV' },
  { id: 17, name: 'MR Höger Underben', price: '3 900kr', paymentLink: 'https://buy.stripe.com/00g16l0aNdXF2Zi28z' },
  { id: 18, name: 'MR Vänster Underben', price: '3 900kr', paymentLink: 'https://buy.stripe.com/cN2eXbf5HdXF2ZiaEI' },
  { id: 19, name: 'MR Sacrum/Sacroliacaleder', price: '4 100kr', paymentLink: 'https://buy.stripe.com/cN202hg9LbPx1Ve28F' },
  { id: 22, name: 'MR Nacke/Halsrygg', price: '4 100kr', paymentLink: 'https://buy.stripe.com/6oEaGVbTvaLt57q6oW' },
  { id: 23, name: 'MR Helrygg', price: '11 500kr', paymentLink: 'https://buy.stripe.com/4gw4ix9Ln8Dl8jC8wL' },
  { id: 26, name: 'MR Höger Knä', price: '4 100kr', paymentLink: 'https://buy.stripe.com/7sI4ix7DfcTBbvO9AT' },
  { id: 29, name: 'MR Höger Överarm', price: '3 900kr', paymentLink: 'https://buy.stripe.com/8wM3etaPrf1JczSbJ5' },
  { id: 30, name: 'MR Vänster Överarm', price: '3 900kr', paymentLink: 'https://buy.stripe.com/9AQdT70aNf1J7fy6or' },
  { id: 31, name: 'MR Höger Underarm', price: '3 900kr', paymentLink: 'https://buy.stripe.com/aEU8yN0aN5r9fM4eV6' },
  { id: 32, name: 'MR Vänster Underarm', price: '3 900kr', paymentLink: 'https://buy.stripe.com/dR616l6zb6vd6bu3ce' },
  { id: 33, name: 'MR Höger Handled', price: '3 900kr', paymentLink: 'https://buy.stripe.com/7sI6qFcXzf1JczSeVi' },
  { id: 34, name: 'MR Vänster Handled', price: '3 900kr', paymentLink: 'https://buy.stripe.com/fZe8yN0aNaLtgQ85kl' },

];

const DynamicForm = () => {
  const [selectedExamination, setSelectedExamination] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [showExaminationDropdown, setShowExaminationDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Use location to access passed state

  const cities = [
    'Göteborg Backa',
    'Göteborg Haga',
    'Göteborg Mölndal GoCo',
    'Jönköping',
    'Karlstad',
    'Malmö Hyllie',
    'Stockholm Klara Strand',
    'Stockholm Sabbatsberg',
    'Sundsvall',
    'Umeå',
  ];

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
        <h2 className='text-center main-title-form'>Boka privat röntgen utan remiss</h2>

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
              <p className='form-field-title'>Välj stad (A-Ö)</p>
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
                <button type="button" className="btn-book-now" onClick={handleBookClick}>
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



