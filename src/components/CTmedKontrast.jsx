import React from 'react';
import { useState } from "react";
import '../styles/index.css';
import { useNavigate } from 'react-router-dom';




const PricelistCTmedK = () => {  const services = [
    
        { id: 103, name: 'CT Ländrygg (K)', price: '5 900kr' },
        { id: 104, name: 'CT Höger Axel (K)', price: '6 100kr' },
        { id: 105, name: 'CT Vänster Axel (K)', price: '6 100kr' },
        { id: 106, name: 'CT Bäcken/höftleder (K)', price: '5 900kr' },
        { id: 107, name: 'CT Vänster Knä (K)', price: '5 900kr' },
        { id: 108, name: 'CT Helkropp (K)', price: '18 200kr' },
        { id: 109, name: 'CT Bröstrygg (K)', price: '5 900kr' },
        { id: 110, name: 'CT Höger Fot (K)', price: '5 900kr' },
        { id: 111, name: 'CT Vänster Fot (K)', price: '5 900kr' },
        { id: 112, name: 'CT Höger Fotled (K)', price: '5 900kr' },
        { id: 113, name: 'CT Vänster Fotled (K)', price: '5 900kr' },
        { id: 114, name: 'CT Höger Hand (K)', price: '5 900kr' },
        { id: 115, name: 'CT Vänster Hand (K)', price: '5 900kr' },
        { id: 116, name: 'CT Hälsena (K)', price: '5 900kr' },
        { id: 117, name: 'CT Höger Armbåge (K)', price: '5 900kr' },
        { id: 118, name: 'CT Vänster Armbåge (K)', price: '5 900kr' },
        { id: 119, name: 'CT Höger Underben (K)', price: '5 900kr' },
        { id: 120, name: 'CT Vänster Underben (K)', price: '5 900kr' },
        { id: 121, name: 'CT Sacrum/Sacroliacaleder (K)', price: '5 900kr' },
        { id: 122, name: 'CT Buk (K)', price: '8 500kr' },
        { id: 123, name: 'CT Hals/larynx (K)', price: '7 800kr' },
        { id: 124, name: 'CT Nacke/Halsrygg (K)', price: '5 900kr' },
        { id: 125, name: 'CT Helrygg (K)', price: '11 000kr' },
        { id: 126, name: 'CT Hjärna (K)', price: '6 200kr' },
        { id: 127, name: 'CT Käkled (K)', price: '6 800kr' },
        { id: 128, name: 'CT Höger Knä (K)', price: '5 900kr' },
        { id: 129, name: 'CT Orbita (K)', price: '6 800kr' },
        { id: 130, name: 'CT Prostata (K)', price: '7 800kr' },
        { id: 131, name: 'CT Höger Överarm (K)', price: '5 900kr' },
        { id: 132, name: 'CT Vänster Överarm (K)', price: '5 900kr' },
        { id: 133, name: 'CT Höger Underarm (K)', price: '5 900kr' },
        { id: 134, name: 'CT Vänster Underarm (K)', price: '5 900kr' },
        { id: 135, name: 'CT Höger Handled (K)', price: '5 900kr' },
        { id: 136, name: 'CT Vänster Handled (K)', price: '5 900kr' }
   
      
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
             CT med kontrast  <span className={`arrow-sub ${isOpen ? "rotated" : ""}`}>▾</span>
            </h1>
            <div className={`subtext-container ${isOpen ? "open" : ""}`}>
    <p className='subtext-about'>Datortomografi (DT) är en särskild form av röntgen som skapar mycket detaljerade bilder av kroppens inre organ. Vid undersökningen används ofta kontrastmedel som du dricker eller får direkt i blodet och som ger en ännu tydligare bild av kroppens strukturer.
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

export default PricelistCTmedK;