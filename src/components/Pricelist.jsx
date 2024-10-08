import React from 'react';
import '../styles/index.css';

const services = [
    { name: 'Ländrygg', price: '8 200kr' },
    { name: 'Nacke', price: '8 200kr' },
    { name: 'Axel', price: '8 200kr' },
    { name: 'Bäcken/höftleder', price: '8 200kr' },
    { name: 'Knä', price: '8 200kr' },
    { name: 'Helkropp', price: '22 700kr' },
    { name: 'Bröstrygg', price: '8 200kr' },
    { name: 'Fot', price: '7 200kr' },
    { name: 'Fotled', price: '7 200kr' }, 
    { name: 'Hand', price: '7 200kr' },
    { name: 'Hälsena', price: '8 200kr' },
    { name: 'Armbåge', price: '8 200kr' },
    { name: 'Underben', price: '8 200kr' },
    { name: 'Sacrum/Sacroliacaleder', price: '8 200kr' },
    { name: 'Buk', price: '10 900kr' },
    { name: 'Gynorgan', price: '11 700kr' },
    { name: 'Hals/larynx', price: '11 700kr' },
    { name: 'Halsrygg', price: '8 200kr' },
    { name: 'Helrygg', price: '12 200kr' },
    { name: 'Hjärna', price: '10 700kr' },
    { name: 'Käkled', price: '8 200kr' },
    { name: 'Knä', price: '8 200kr' },
    { name: 'Orbita', price: '8 200kr' },
    { name: 'Prostata', price: '11 700kr' },
  
];

const Pricelist = () => {
    
  return (
    <div className="card-grid">
      {services.map((service, index) => (
        <div className="card" key={index}>
          <div className="card-content">
            <h4>{service.name}</h4>
            <p>Pris: {service.price}</p>
          </div>
          <button className="read-more-btn">Läs mer</button>
        </div>
      ))}
    </div>
  );
};

export default Pricelist;
