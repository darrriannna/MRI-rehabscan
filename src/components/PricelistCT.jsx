import React from 'react';
import { useState } from "react";
import '../styles/index.css';
import { useNavigate } from 'react-router-dom';




const PricelistCT = () => {  const services = [
    { id: 69, name: 'CT Ländrygg', price: '3 900kr', paymentLink: 'https://buy.stripe.com/4gw16l8Hj7zhbvO3dm' },
    { id: 70, name: 'CT Höger Axel', price: '4 100kr', paymentLink: 'https://buy.stripe.com/4gw4ix8Hj2eXfM45lv' },
    { id: 71, name: 'CT Vänster Axel', price: '4 100kr', paymentLink: 'https://buy.stripe.com/fZe4ix1eR7zhczSeW6' },
    { id: 72, name: 'CT Bäcken/höftleder', price: '3 900kr', paymentLink: 'https://buy.stripe.com/28og1f5v706PgQ829l' },
    { id: 73, name: 'CT Vänster Knä', price: '3 900kr', paymentLink: 'https://buy.stripe.com/aEUeXbg9L7zh57q7tG' },
    { id: 75, name: 'CT Bröstrygg', price: '3 900kr', paymentLink: 'https://buy.stripe.com/dR68yN7Df2eXczS9BQ' },
    { id: 76, name: 'CT Höger Fot', price: '3 900kr', paymentLink: 'https://buy.stripe.com/14kaGV4r3dXFdDW29p' },
    { id: 77, name: 'CT Vänster Fot', price: '3 900kr', paymentLink: 'https://buy.stripe.com/cN202hg9LbPxarK15m' },
    { id: 78, name: 'CT Höger Fotled', price: '3 900kr', paymentLink: 'https://buy.stripe.com/cN2g1f6zbbPxdDW01j' },
    { id: 79, name: 'CT Vänster Fotled', price: '3 900kr', paymentLink: 'https://buy.stripe.com/9AQcP35v78Dl7fyaFY' },
    { id: 80, name: 'CT Höger Hand', price: '3 900kr', paymentLink: 'https://buy.stripe.com/8wMdT7aPr9HpgQ86pJ' },
    { id: 81, name: 'CT Vänster Hand', price: '3 900kr', paymentLink: 'https://buy.stripe.com/14kg1f0aN3j12Zi8xS' },
    { id: 82, name: 'CT Hälsena', price: '3 900kr', paymentLink: 'https://buy.stripe.com/bIY16le1D7zharKeWh' },
    { id: 83, name: 'CT Höger Armbåge', price: '3 900kr', paymentLink: 'https://buy.stripe.com/fZe4ix9Lnf1JczScOa' },
    { id: 84, name: 'CT Vänster Armbåge', price: '3 900kr', paymentLink: 'https://buy.stripe.com/3cs16l5v7f1J9nG15t' },
    { id: 85, name: 'CT Höger Underben', price: '3 900kr', paymentLink: 'https://buy.stripe.com/7sI3etg9L8DlarK29y' },
    { id: 86, name: 'CT Vänster Underben', price: '3 900kr', paymentLink: 'https://buy.stripe.com/4gw5mB2iV3j1gQ86pP' },
    { id: 87, name: 'CT Sacrum/Sacroliacaleder', price: '3 900kr', paymentLink: 'https://buy.stripe.com/fZe6qF4r38DldDW7tU' },
    { id: 90, name: 'CT Nacke/Halsrygg', price: '3 900kr', paymentLink: 'https://buy.stripe.com/4gw5mB3mZ06P8jC6pT' },
    { id: 91, name: 'CT Helrygg', price: '9 000kr', paymentLink: 'https://buy.stripe.com/aEUeXb2iVaLt8jC5lQ' },
    { id: 94, name: 'CT Höger Knä', price: '3 900kr', paymentLink: 'https://buy.stripe.com/3cs5mB2iVbPx57qcOl' },
    { id: 97, name: 'CT Höger Överarm', price: '3 900kr', paymentLink: 'https://buy.stripe.com/14keXbf5H06P9nG8y8' },
    { id: 98, name: 'CT Vänster Överarm', price: '3 900kr', paymentLink: 'https://buy.stripe.com/8wMcP3bTv1aT7fyeWx' },
    { id: 99, name: 'CT Höger Underarm', price: '3 900kr', paymentLink: 'https://buy.stripe.com/7sI4ix2iVcTBeI0dSu' },
    { id: 100, name: 'CT Vänster Underarm', price: '3 900kr', paymentLink: 'https://buy.stripe.com/aEU9CR7Dff1J0RaeWz' },
    { id: 101, name: 'CT Höger Handled', price: '3 900kr', paymentLink: 'https://buy.stripe.com/dR67uJ5v7g5N9nG9Cg' },
    { id: 102, name: 'CT Vänster Handled', price: '3 900kr', paymentLink: 'https://buy.stripe.com/eVa02h0aN8DlgQ8eWB' },
];
  const navigate = useNavigate();
  const handleBook = (service) => {
    // Navigate to the DynamicForm page and pass the service information via state
    navigate('/bokanu', { state: { serviceName: service.name, servicePrice: service.price } });
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='container-pr'>
            <div className="container-about-services">
          <div className="custom-row-ct">
           
            <div className="custom-description">
            <h1 className="text-center toggle-btn-sub" onClick={() => setIsOpen(!isOpen)}>
              CT/DT  <span className={`arrow-sub ${isOpen ? "rotated" : ""}`}>▾</span>
            </h1>
            <div className={`subtext-container ${isOpen ? "open" : ""}`}>
              <p className="subtext-about">
                Datortomografi (DT) är en speciell typ av röntgen som skapar detaljerade bilder av kroppens organ, vilket gör det lättare för läkaren att upptäcka sjukdomar och skador i exempelvis huvud, bröstkorg, skelett eller mage. Bilderna används för att bedöma sjukdomens omfattning och avgöra vilka behandlingar som bör erbjudas. DT-undersökningar kan även hjälpa läkaren att utvärdera behandlingens resultat samt planera en eventuell operation eller strålbehandling.
              </p>
            </div>
            </div>
          </div>
        </div>
        <div className='container-prices'>
        <h2 className='center-text fw-3 p-3 mb-4 header' >Prislista</h2>
    <div className="card-grid">
      {services.map((service, index) => (
        <div className="card" key={index}>
          <div className="card-content">
            <h4>{service.name}</h4>
            <p>Pris: {service.price}</p>
          </div>
          <button className="btn-book-now" onClick={() => handleBook(service)}>Boka nu</button>
        </div>
      ))}
    </div></div>
    </div>
  );
};

export default PricelistCT;