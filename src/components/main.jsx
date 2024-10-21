import React, {  useState } from 'react';
import '../styles/index.css'; // Import your custom CSS file
import { Link } from 'react-router-dom';
import Pricelist from './Pricelist';
import DynamicForm from './DynamicForm';
  // Import loader context


const Home = () => {
  const [openSection, setOpenSection] = useState(null);
  
  // Function to toggle FAQ sections
  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="main"> 
      <div className="container">
        <section className="main-content">
          <div className="container-home">
            <div className="left-column">
              <img src="./assets/MRI-3d.png" alt="MRI 3d" />
            </div>
            <div className="right-column">
              <h2>Undvik köer och väntetider med privat röntgen</h2>
              <ul>
                <li>Få tid för undersökning inom 14 arbetsdagar.</li>
                <li>Kontakt med legitimerad läkare under hela processen.</li>
                <li>Dina röntgenbilder kontrolleras av röntgenspecialister.</li>
                <li>Personlig återkoppling efter undersökning.</li>
                <li>Remiss till fortsatt undersökning vid behov.</li>
              </ul>
            </div>
          </div>
        </section>

        <div className='rules-container'>
          <h3 className='center-text'>Hur funkar det?</h3>
          <div className="container-card">
            <div className="box box1">
              <h4>Steg 1</h4>
              <p>Fyll i en bokningsförfrågan. En läkare ringer upp och bekräftar din bokning. Ingen remiss krävs.</p>
            </div>
            <div className="box box2">
              <h4>Steg 2</h4>
              <p>En läkare ringer upp och bekräftar din bokning och diskuterar dina önskemål.</p>
            </div>
            <div className="box box3">
              <h4>Steg 3</h4>
              <p>Du erbjuds undersökning inom 14 arbetsdagar. Kallelse skickas via Kivra eller per post.</p>
            </div>
            <div className="box box4">
              <h4>Steg 4</h4>
              <p>Personlig återkoppling med läkare inom 5 arbetsdagar efter utförd undersökning.</p>
            </div>
          </div>
          <div className='btn-center'>
            <Link to="/bookappointment" className="btn-navbar m-3 text-decoration-none">Boka undersökning</Link>
          </div>
          <p className='center-text'>Du får kontakt med en läkare inom 24h för att ta ditt ärende vidare till undersökning</p>
        </div>

        <div className='container-home'>
          <div className='left-column'> 
            <div className="faq-container">
              <div className="service-info">
                <div className="faq-question" onClick={() => toggleSection(0)}>
                  <h4>Vad är magnetröntgen?</h4>
                  <span>{openSection === 0 ? '▲' : '▼'}</span>
                </div>
                {openSection === 0 && (
                  <p className="faq-answer">
                    Magnetkameraundersökning, även kallad MR, är en högspecialiserad undersökningsmetod som används för att upptäcka och diagnostisera sjukdomar och se skador i kroppen. Magnetkameran skapar den mest kompletta undersökningen på marknaden genom att kombinera magnetfält och radiovågor till bilder som kan avbilda näst intill alla organ i kroppen.
                  </p>
                )}
              </div>

              <div className="service-info">
                <div className="faq-question" onClick={() => toggleSection(1)}>
                  <h4>Hur får man remiss till magnetröntgen?</h4>
                  <span>{openSection === 1 ? '▲' : '▼'}</span>
                </div>
                {openSection === 1 && (
                  <p className="faq-answer">
                    Hos RehabScan behöver du ingen remiss för MR. Du kontaktar oss direkt för att boka din undersökning. För att få en remiss till en magnetkameraundersökning inom offentlig vård behöver du vanligtvis kontakta din primärvårdsläkare eller en annan specialistläkare.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className='right-column'>
            <img className='image-homepage' src="./assets/Mri.png" alt="doctor with patient" />
          </div>
        </div>

        <div>
          <h2 className='center-text fw-3 p-3 mb-4'>Prislista</h2>
          <Pricelist />
        </div>
        <DynamicForm />
      </div>
    </div>
  );
};

export default Home;
