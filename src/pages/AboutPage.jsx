import React from 'react';

import { Footer, GoogleReviews, Navbar, Partners} from "../components";
import "../styles/index.css"; // Updated CSS file

const AboutPage = () => {
  return (
    <>
      <div className="body">
        <Navbar />
        <div className="container-about-services">
          <div className="custom-row">
            {/* Top-left text */}
          
            {/* Bottom full-width description */}
            <div className="custom-description">
            <p className='main-title-about'>RehabScan erbjuder trygg och professionell bilddiagnostik med snabba svar och utan remiss. </p>
            <p className='subtext-about'>Vi samarbetar med ledande kliniker i Sverige för att ge dig en smidig och säker vårdupplevelse.  
            All vår personal är legitimerad av Socialstyrelsen, vilket garanterar hög medicinsk kvalitet. När vi skickar din remiss blir du kontaktad av den närmaste kliniken för att boka en tid som passar dig.  
            Vi finns över hela Sverige, och vårt huvudkontor ligger på Margaretaplatsen i Helsingborg.  
            </p>
            <p className='bottom-text-about'>Välkommen till RehabScan – din hälsa i fokus!</p>
            </div>
          </div>
        </div>
        <div className='p-4'>
        <GoogleReviews/></div>
        <div>
        <Partners />
</div>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
