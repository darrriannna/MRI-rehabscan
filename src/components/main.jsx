import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import '../styles/index.css';
import MapSection from './MapSection';
import GoogleReviews from './Reviews';


const Home = () => {
  const [openSection, setOpenSection] = useState(null);

  // Function to toggle FAQ sections
  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  // Animation settings
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="main">
        <div className="container"> 
         
          <motion.div className="container-home" {...fadeIn} transition={{ delay: 1.6 }}>
            <div className="left-column">
              <div className="text-center">
                <h2 className="question-title">Vanliga frågor</h2>
              </div>
              <div className="faq-container">
                <motion.div className="service-info" {...fadeIn} transition={{ delay: 1.8 }}>
                  <div className="faq-question" onClick={() => toggleSection(0)}>
                    <h4>Vad är magnetröntgen?</h4>
                    <span>{openSection === 0 ? '▲' : '▼'}</span>
                  </div>
                  {openSection === 0 && (
                    <p className="faq-answer">
                      Magnetkameraundersökning, även kallad MR, är en högspecialiserad
                      undersökningsmetod som används för att upptäcka och diagnostisera sjukdomar
                      och se skador i kroppen.
                    </p>
                  )}
                </motion.div>

                <motion.div className="service-info" {...fadeIn} transition={{ delay: 2 }}>
                  <div className="faq-question" onClick={() => toggleSection(1)}>
                    <h4>Hur får man remiss till magnetröntgen?</h4>
                    <span>{openSection === 1 ? '▲' : '▼'}</span>
                  </div>
                  {openSection === 1 && (
                    <p className="faq-answer">
                      Hos RehabScan behöver du ingen remiss för MR. Du kontaktar oss direkt för att
                      boka din undersökning.
                    </p>
                  )}
                </motion.div>
                <motion.div className="service-info" {...fadeIn} transition={{ delay: 2 }}>
                  <div className="faq-question" onClick={() => toggleSection(2)}>
                    <h4>Vem har tillgång till mina resultat?</h4>
                    <span>{openSection === 2 ? '▲' : '▼'}</span>
                  </div>
                  {openSection === 2 && (
                    <p className="faq-answer">
                     Vi följer samma lagar och regler gällande sekretess som vårdcentraler och sjukhus. Vi lyder under patientdatalagen, hälso- och sjukvårdslagen och står under tillsyn av Inspektionen för vård och omsorg (IVO). Det innebär att all data och alla undersökningsresultat hanteras i enlighet med dessa lagar och förordningar.
                    </p>
                  )}
                </motion.div>
                <motion.div className="service-info" {...fadeIn} transition={{ delay: 2 }}>
                  <div className="faq-question" onClick={() => toggleSection(3)}>
                    <h4>Vad händer efter att jag har bokat?</h4>
                    <span>{openSection === 3 ? '▲' : '▼'}</span>
                  </div>
                  {openSection === 3 && (
                    <p className="faq-answer">
                    Efter att du har bokat skickar vi din remiss till den närmaste kliniken eller den klinik du har valt. Kliniken kontaktar dig inom ett par dagar för att tillsammans med dig hitta en tid som passar bäst.
                    </p>
                  )}
                </motion.div>
                <motion.div className="service-info" {...fadeIn} transition={{ delay: 2 }}>
                  <div className="faq-question" onClick={() => toggleSection(4)}>
                    <h4>Kan jag själv bestämma tiden för undersökningen?</h4>
                    <span>{openSection === 4 ? '▲' : '▼'}</span>
                  </div>
                  {openSection === 4 && (
                    <p className="faq-answer">
                    Kliniken som tar emot din remiss kommer att kontakta dig, och tillsammans kommer ni överens om en tid som passar dig bäst.
                    </p>
                  )}
                </motion.div>
                <motion.div className="service-info" {...fadeIn} transition={{ delay: 2 }}>
                  <div className="faq-question" onClick={() => toggleSection(5)}>
                    <h4>Hur gör man för att avboka eller ändra tiden?</h4>
                    <span>{openSection === 5 ? '▲' : '▼'}</span>
                  </div>
                  {openSection === 5 && (
                    <p className="faq-answer">
                   För att avboka måste du ringa kliniken där du bokade tiden senast 24 timmar före undersökningen. Uteblivet besök eller avbokning senare än 24 timmar innan inbokad tid debiteras fullt och återbetalas ej. För att ändra tiden kan du också ringa kliniken där din undersökning är bokad.
                    </p>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
   
     <motion.div {...fadeIn} transition={{ delay: 1.4 }}>
            <MapSection />
          </motion.div>
          <GoogleReviews/>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;

