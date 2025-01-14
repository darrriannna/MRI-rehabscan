import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; 
import "../styles/index.css";

const services = [
  { id: 1, name: 'Ländrygg', price: '3 900kr', stripeProductId: 'price_1QhBGoLGp7g0cFk2fsiBvJov' },
  { id: 3, name: 'Axel', price: '4 100kr', stripeProductId: 'price_1QhBflLGp7g0cFk2rSx1TetK' },
  { id: 4, name: 'Bäcken/höftleder', price: '3 900kr', stripeProductId: 'price_1QhBQGLGp7g0cFk2UHZdRF54' },
  { id: 5, name: 'Knä', price: '3 900kr', stripeProductId: 'price_1QhBMKLGp7g0cFk2sZXWD9gC' },
  { id: 6, name: 'Helkropp', price: '16 200kr', stripeProductId: 'price_1QhBgzLGp7g0cFk2jKUujWqD' },
  { id: 7, name: 'Bröstrygg', price: '3 900kr', stripeProductId: 'price_1QhBOnLGp7g0cFk25zrXUwqD' },
  { id: 8, name: 'Fot', price: '3 900kr', stripeProductId: 'price_1QhBNpLGp7g0cFk2aJDu1HhH' },
  { id: 9, name: 'Fotled', price: '3 900kr', stripeProductId: 'price_1QhBTULGp7g0cFk2lld7hhia' },
  { id: 10, name: 'Hand', price: '3 900kr', stripeProductId: 'price_1QhBRfLGp7g0cFk2KbJEwwVW' },
  { id: 11, name: 'Hälsena', price: '3 900kr', stripeProductId: 'price_1QhBilLGp7g0cFk2KgPDTXPA' },
  { id: 12, name: 'Armbåge', price: '3 900kr', stripeProductId: 'price_1QhBR7LGp7g0cFk2VujZft5V' },
  { id: 13, name: 'Underben', price: '3 900kr', stripeProductId: 'price_1QhBSULGp7g0cFk2RgK5Snfl' },
  { id: 14, name: 'Sacrum/Sacroliacaleder', price: '3 900kr', stripeProductId: 'price_1QhBXoLGp7g0cFk20K4VPuel' },
  { id: 15, name: 'Buk', price: '6 500kr', stripeProductId: 'price_1QhBkjLGp7g0cFk2Ox0h7YMo' },
  { id: 16, name: 'Hals/larynx', price: '5 800kr', stripeProductId: 'price_1QhBo2LGp7g0cFk2gveny15M'  },
  { id: 17, name: 'Halsrygg', price: '3 900kr', stripeProductId: 'price_1QhBK3LGp7g0cFk2etuxmUka' },
  { id: 18, name: 'Helrygg', price: '9 000kr', stripeProductId: 'price_1QhBpmLGp7g0cFk2aWIQauIS' },
  { id: 19, name: 'Hjärna', price: '4 200kr', stripeProductId: 'price_1QhBrBLGp7g0cFk2PVLgkAGm' },
  { id: 20, name: 'Käkled', price: '4 800kr', stripeProductId: 'price_1QhBYqLGp7g0cFk2RcU6jyWZ' },
  { id: 21, name: 'Knä', price: '3 900kr', stripeProductId: 'price_1QhBMKLGp7g0cFk2sZXWD9gC'  },
  { id: 22, name: 'Orbita', price: '4 800kr', stripeProductId: 'price_1QhBt3LGp7g0cFk2wMM9bHtw' },
  { id: 23, name: 'Prostata', price: '5 800kr', stripeProductId: 'price_1QhBtxLGp7g0cFk2yBGwhWQC' },
  {id: 24, name: 'Överarm', price: '3 900kr', stripeProductId: 'price_1QhBW8LGp7g0cFk2k3mO9ImZ' },
    {id: 25, name: 'Underarm', price: '3 900kr', stripeProductId: 'price_1QhBunLGp7g0cFk28FNvxsqi' },
    {id: 26, name: 'Handled', price: '3 900kr', stripeProductId: 'price_1QhBUrLGp7g0cFk23tRV1Zik'  },
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
    // Save selected service details in localStorage
  localStorage.setItem(
    'bookingData',
    JSON.stringify({
      serviceName: selectedExamination,
      city: selectedCity,
      price: selectedService?.price,
      stripeProductId: selectedService?.stripeProductId,
    })
  );

  // Navigate to the booking page with the selected details
  navigate('/mri-booking', {
    state: {
      serviceName: selectedExamination,
      city: selectedCity,
      price: selectedService?.price,
      stripeProductId: selectedService?.stripeProductId,
    },
  });
};


  return (
    <div className='container-form-main'>
    <div className="form-container">
      <div></div>
      <h1 className='text-center main-title-form'>Boka privat röntgen utan remiss</h1>

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
        <NavLink to="/restrictions" className="restrictions"> Villkor och Begränsningar </NavLink>

      </form>
      <div></div>
    </div>
    </div>
  );
};

export default DynamicForm;



