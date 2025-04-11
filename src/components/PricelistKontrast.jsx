import React from 'react';
import { useState } from "react";
import '../styles/index.css';





const PricelistK = () => {  const services = [
    
        { id: 35, name: 'MR Ländrygg (K)', price: '5 900kr' },
        { id: 36, name: 'MR Höger Axel (K)', price: '6 100kr' },
        { id: 37, name: 'MR Vänster Axel (K)', price: '6 100kr' },
        { id: 38, name: 'MR Bäcken/höftleder (K)', price: '5 900kr' },
        { id: 39, name: 'MR Vänster Knä (K)', price: '5 900kr' },
        { id: 41, name: 'MR Bröstrygg (K)', price: '5 900kr' },
        { id: 42, name: 'MR Höger Fot (K)', price: '5 900kr' },
        { id: 43, name: 'MR Vänster Fot (K)', price: '5 900kr' },
        { id: 44, name: 'MR Höger Fotled (K)', price: '5 900kr' },
        { id: 45, name: 'MR Vänster Fotled (K)', price: '5 900kr' },
        { id: 46, name: 'MR Höger Hand (K)', price: '5 900kr' },
        { id: 47, name: 'MR Vänster Hand (K)', price: '5 900kr' },
        { id: 48, name: 'MR Hälsena (K)', price: '5 900kr' },
        { id: 49, name: 'MR Höger Armbåge (K)', price: '5 900kr' },
        { id: 50, name: 'MR Vänster Armbåge (K)', price: '5 900kr' },
        { id: 51, name: 'MR Höger Underben (K)', price: '5 900kr' },
        { id: 52, name: 'MR Vänster Underben (K)', price: '5 900kr' },
        { id: 53, name: 'MR Sacrum/Sacroliacaleder (K)', price: '5 900kr' },
        { id: 56, name: 'MR Nacke/Halsrygg (K)', price: '5 900kr' },
        { id: 57, name: 'MR Helrygg (K)', price: '11 000kr' },
        { id: 58, name: 'MR Hjärna (K)', price: '7 900kr' },
        { id: 60, name: 'MR Höger Knä (K)', price: '5 900kr' },
        { id: 63, name: 'MR Höger Överarm (K)', price: '5 900kr' },
        { id: 64, name: 'MR Vänster Överarm (K)', price: '5 900kr' },
        { id: 65, name: 'MR Höger Underarm (K)', price: '5 900kr' },
        { id: 66, name: 'MR Vänster Underarm (K)', price: '5 900kr' },
        { id: 67, name: 'MR Höger Handled (K)', price: '5 900kr' },
        { id: 68, name: 'MR Vänster Handled (K)', price: '5 900kr' }
   
      
];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='container-pr'>
    <div className="container-about-services">
  <div className="custom-row-k">
   
    <div className="custom-description">
    <h1 className="text-center toggle-btn-sub" onClick={() => setIsOpen(!isOpen)}>
             MR med kontrast  <span className={`arrow-sub ${isOpen ? "rotated" : ""}`}>▾</span>
            </h1>
            <div className={`subtext-container ${isOpen ? "open" : ""}`}>
    <p className='subtext-about'>En magnetkameraundersökning (MR) skapar detaljerade bilder av kroppens organ och används för att upptäcka sjukdomar, kartlägga skador och följa upp behandlingar. För en tydligare bild används ibland kontrastmedel, antingen som dryck eller via injektion, för att bättre synliggöra blodkärl, inflammationer eller tumörer.

Under undersökningen ligger du på en brits i en magnettunnel och behöver vara helt stilla. Undersökningen tar 20–45 minuter, och du kan kommunicera med sjukvårdspersonalen. Vid behov kan lugnande läkemedel ges.

MR använder magnetfält och radiovågor istället för röntgenstrålar. Personer med pacemaker eller metallimplantat bör rådgöra med läkare innan undersökningen.
    </p>
    </div>
   
    </div>
  </div>
</div>
<div className='containers-deceases-info' >
          <h4 className='text-center-info'>Innan du bokar en CT- eller MR-undersökning med kontrast, vänligen kontakta oss via e-post eller telefon för att rådgöra om undersökningen är möjlig samt för att beskriva dina symtom.
       Vid intresse maila oss på info@rehabscan.se eller ring 010-210 22 31 </h4>
        </div>
<div className='container-prices'>
<h2 className='center-text fw-3 p-3 mb-4 header' >Prislista</h2>
<div className="card-grid">
{services.map((service, index) => (
<div className="card" key={index}>
  <div className="card-content">
    <h4>{service.name}</h4>
    <p>med kontrast</p>
    <p>Pris: {service.price}</p>
  </div>
</div>
))}
</div></div>
</div>
  );
};

export default PricelistK;