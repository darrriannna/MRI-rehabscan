import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import '../styles/index.css';
import Pricelist from './Pricelist';
import MapSection from './MapSection';


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
              </div>
            </div>
          </motion.div>
   
     <motion.div {...fadeIn} transition={{ delay: 1.4 }}>
            <MapSection />
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 2.2 }}>
            <h2 className="center-text fw-3 p-3 mb-4">Prislista</h2>
            <Pricelist />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;

