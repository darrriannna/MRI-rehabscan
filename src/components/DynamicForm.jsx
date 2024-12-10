import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom'; 
import "../styles/index.css";

const services = [
  { id: 1, name: 'Ländrygg', price: '4 800kr', stripeProductId: 'price_1QEqQ3LGp7g0cFk2IwS6yGfG' },
  { id: 2, name: 'Nacke', price: '4 800kr', stripeProductId: 'price_1QEvuGLGp7g0cFk2KVcPeiGt' },
  { id: 3, name: 'Axel', price: '4 800kr', stripeProductId: 'price_1QEqRkLGp7g0cFk2fQHPAgST' },
  { id: 4, name: 'Bäcken/höftleder', price: '4 800kr', stripeProductId: 'price_1QEqSbLGp7g0cFk2l92jrDqx' },
  { id: 5, name: 'Knä', price: '4 800kr', stripeProductId: 'price_1QEqTNLGp7g0cFk2ioJlNa5f' },
  { id: 6, name: 'Helkropp', price: '22 700kr', stripeProductId: 'price_1QEqUBLGp7g0cFk2ivV0lq8V' },
  { id: 7, name: 'Bröstrygg', price: '4 800kr', stripeProductId: 'price_1QEqjfLGp7g0cFk2AopcxPgm' },
  { id: 8, name: 'Fot', price: '4 800kr', stripeProductId: 'price_1QEqV9LGp7g0cFk2D5oDdQpa' },
  { id: 9, name: 'Fotled', price: '4 800kr', stripeProductId: 'price_1QEqjzLGp7g0cFk2FukYsRio' },
  { id: 10, name: 'Hand', price: '4 800kr', stripeProductId: 'price_1QEvqFLGp7g0cFk2fEwJ1wpD' },
  { id: 11, name: 'Hälsena', price: '4 800kr', stripeProductId: 'price_1QEqkJLGp7g0cFk2Q77FyZeJ' },
  { id: 12, name: 'Armbåge', price: '4 800kr', stripeProductId: 'price_1QEqkdLGp7g0cFk2hZAhMONO' },
  { id: 13, name: 'Underben', price: '4 800kr', stripeProductId: 'price_1QEqkvLGp7g0cFk2q1dPiaNG' },
  { id: 14, name: 'Sacrum/Sacroliacaleder', price: '4 800kr', stripeProductId: 'price_1QEqn3LGp7g0cFk2ehdu7GkG' },
  { id: 15, name: 'Buk', price: '10 900kr', stripeProductId: 'price_1QEqnNLGp7g0cFk2gZdPBzqK' },
  { id: 16, name: 'Gynorgan', price: '11 700kr', stripeProductId: 'price_1QEqntLGp7g0cFk2LKkFvlbO' },
  { id: 17, name: 'Hals/larynx', price: '11 700kr', stripeProductId: 'price_1QEqoKLGp7g0cFk2DqHiwfSC'  },
  { id: 18, name: 'Halsrygg', price: '4 800kr', stripeProductId: 'price_1QEqQlLGp7g0cFk2IJZzZxv0' },
  { id: 19, name: 'Helrygg', price: '12 200kr', stripeProductId: 'price_1QEqouLGp7g0cFk23cVUB8N4' },
  { id: 20, name: 'Hjärna', price: '10 700kr', stripeProductId: 'price_1QEqpFLGp7g0cFk2Eyyn2C3E' },
  { id: 21, name: 'Käkled', price: '4 800kr', stripeProductId: 'price_1QEqpbLGp7g0cFk2GRZ8sis6' },
  { id: 22, name: 'Knä', price: '4 800kr', stripeProductId: 'price_1QEqTNLGp7g0cFk2ioJlNa5f'  },
  { id: 23, name: 'Orbita', price: '4 800kr', stripeProductId: 'price_1QEqqmLGp7g0cFk2DZly1Dg0' },
  { id: 24, name: 'Prostata', price: '11 700kr', stripeProductId: 'price_1QEqrLLGp7g0cFk2ewa2TNot' },
  {id: 24, name: 'Överarm', price: '4 800kr' },
    {id: 25, name: 'Underarm', price: '4 800kr' },
    {id: 26, name: 'Handled', price: '4 800kr' },
];

const DynamicForm = () => {
  const [selectedExamination, setSelectedExamination] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [showExaminationDropdown, setShowExaminationDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Use location to access passed state

  const cities = ['Borås', 'Göteborg', 'Jönköping', 'Karlstad', 'Malmö', 'Stockholm'];

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
    navigate('/mri-booking', {
      state: {
        serviceName: selectedExamination,
        city: selectedCity,
        price: selectedService?.price,
        stripeProductId: selectedService?.stripeProductId,
      }
    });
  };

  return (
    <div className='container-form-main'>
    <div className="form-container">
      <div></div>
      <h1 className='text-center main-title-form'>Boka privat röntgen utan remiss</h1>

      <form>
        <div className="form-group">
          <p className='form-field-title'>Välj undersökning</p>
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
      </form>
      <div></div>
    </div>
    </div>
  );
};

export default DynamicForm;



