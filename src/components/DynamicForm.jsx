import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "../styles/index.css";

const services = [
  { id: 1, name: 'Ländrygg', price: '8 200kr' },
  { id: 2, name: 'Nacke', price: '8 200kr' },
  { id: 3, name: 'Axel', price: '8 200kr' },
  { id: 4, name: 'Bäcken/höftleder', price: '8 200kr' },
  { id: 5, name: 'Knä', price: '8 200kr' },
  { id: 6, name: 'Helkropp', price: '22 700kr' },
  { id: 7, name: 'Bröstrygg', price: '8 200kr' },
  { id: 8, name: 'Fot', price: '7 200kr' },
  { id: 9, name: 'Fotled', price: '7 200kr' },
  { id: 10, name: 'Hand', price: '7 200kr' },
  { id: 11, name: 'Hälsena', price: '8 200kr' },
  { id: 12, name: 'Armbåge', price: '8 200kr' },
  { id: 13, name: 'Underben', price: '8 200kr' },
  { id: 14, name: 'Sacrum/Sacroliacaleder', price: '8 200kr' },
  { id: 15, name: 'Buk', price: '10 900kr' },
  { id: 16, name: 'Gynorgan', price: '11 700kr' },
  { id: 17, name: 'Hals/larynx', price: '11 700kr' },
  { id: 18, name: 'Halsrygg', price: '8 200kr' },
  { id: 19, name: 'Helrygg', price: '12 200kr' },
  { id: 20, name: 'Hjärna', price: '10 700kr' },
  { id: 21, name: 'Käkled', price: '8 200kr' },
  { id: 22, name: 'Knä', price: '8 200kr' },
  { id: 23, name: 'Orbita', price: '8 200kr' },
  { id: 24, name: 'Prostata', price: '11 700kr' },
];

const DynamicForm = () => {
  const [selectedExamination, setSelectedExamination] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [showExaminationDropdown, setShowExaminationDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const navigate = useNavigate();  

  const cities = ['Borås', 'Göteborg', 'Jönköping', 'Karlstad', 'Malmö', 'Stockholm'];

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
    navigate('/mri-booking', {
      state: {
        serviceName: selectedExamination,
        city: selectedCity,
        price: selectedService?.price
      }
    });
  };

  return (
    <div className="form-container">
      <h1>Boka privat röntgen utan remiss</h1>

      <form>
        <div className="form-group">
          <p>Boka undersökning</p>
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
            <p>Välj stad</p>
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
              <p>Pris: {selectedService?.price}</p>
            </div>
            <div className="form-group">
              <button type="button" className="boka-button" onClick={handleBookClick}>
                Boka undersökning
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default DynamicForm;



